/**
 * Alerts when the viewer is not from an allowed country and/or IP.
 * Uses the visitor's browser to call ipapi.co (their IP is inferred server-side).
 * Configure VISITOR_TRACKER below. No keys required for light use (ipapi.co daily limits apply).
 */
(function () {
  var defaults = {
    enabled: true,
    /** ISO 3166-1 alpha-2, e.g. 'BG'. Set null to skip country check. */
    allowedCountry: 'BG',
    /** Your public IP(s) from home/office; [] skips IP check. Visit https://ipapi.co/ip on that network. */
    allowedIps: [],
    /**
     * If both country and IPs are set: alert when country does not match OR IP is not in the list.
     * If only one is set, only that rule applies.
     */
    /** POST JSON when an outsider is detected. Empty = console only. */
    notifyUrl: '',
    logToConsole: true,
    notifyOncePerSession: true,
    showBanner: false
  };
  var user = window.VISITOR_TRACKER || {};
  var CFG = {};
  for (var k in defaults) {
    CFG[k] = Object.prototype.hasOwnProperty.call(user, k) ? user[k] : defaults[k];
  }

  if (!CFG.enabled) return;

  var SESSION_KEY = 'cpo_intel_visitor_tracker_notified';

  function shouldFlag(geo) {
    var country = (geo.country_code || '').toUpperCase();
    var ip = String(geo.ip || '').trim();
    var countryFail = CFG.allowedCountry && country && country !== String(CFG.allowedCountry).toUpperCase();
    var list = CFG.allowedIps || [];
    var ipFail = list.length > 0 && ip && list.indexOf(ip) === -1;
    if (CFG.allowedCountry && list.length > 0) return !!(countryFail || ipFail);
    if (CFG.allowedCountry) return !!countryFail;
    if (list.length > 0) return !!ipFail;
    return false;
  }

  function reason(geo) {
    var parts = [];
    var country = (geo.country_code || '').toUpperCase();
    var ip = String(geo.ip || '').trim();
    if (CFG.allowedCountry && country !== String(CFG.allowedCountry).toUpperCase()) {
      parts.push('country ' + (country || '?') + ' (expected ' + CFG.allowedCountry + ')');
    }
    var list = CFG.allowedIps || [];
    if (list.length > 0 && list.indexOf(ip) === -1) parts.push('ip ' + (ip || '?') + ' not in allowed list');
    return parts.join('; ') || 'unknown';
  }

  function payload(geo, page) {
    return {
      source: 'cpo-intel',
      page: page || window.location.pathname,
      ip: geo.ip,
      country: geo.country_code,
      city: geo.city,
      region: geo.region,
      reason: reason(geo),
      at: new Date().toISOString()
    };
  }

  function sendNotify(body) {
    if (!CFG.notifyUrl) return;
    try {
      var json = JSON.stringify(body);
      if (navigator.sendBeacon) {
        var blob = new Blob([json], { type: 'application/json' });
        navigator.sendBeacon(CFG.notifyUrl, blob);
      } else {
        fetch(CFG.notifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: json,
          mode: 'cors',
          keepalive: true
        }).catch(function () {});
      }
    } catch (e) {}
  }

  function banner(body) {
    if (!CFG.showBanner) return;
    var el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.textContent = 'Visitor check: ' + body.reason;
    el.style.cssText =
      'position:fixed;bottom:0;left:0;right:0;padding:8px 12px;font:12px/1.4 system-ui,sans-serif;' +
      'background:#fef3c7;color:#78350f;border-top:1px solid #f59e0b;z-index:99999';
    document.body.appendChild(el);
  }

  fetch('https://ipapi.co/json/', { credentials: 'omit' })
    .then(function (r) {
      if (!r.ok) throw new Error('geo http ' + r.status);
      return r.json();
    })
    .then(function (geo) {
      if (geo.error) throw new Error(geo.reason || 'geo error');
      if (!shouldFlag(geo)) return;
      var body = payload(geo, window.location.pathname);
      if (CFG.logToConsole) {
        console.warn('[CPO Intel visitor]', body.reason, body);
      }
      banner(body);
      if (CFG.notifyOncePerSession && sessionStorage.getItem(SESSION_KEY)) return;
      if (CFG.notifyOncePerSession) sessionStorage.setItem(SESSION_KEY, '1');
      sendNotify(body);
    })
    .catch(function () {
      /* silent — do not break the app if geo lookup fails */
    });
})();
