# CPO Analysis — OMV

**Date:** 2026-05-20
**Analyst:** Claude (AI)
**Source:** 72 scraped pages + 211 app reviews from p2k DB — company_id: 044c233b-1a9d-407f-9784-ed667eee21a9
**Coverage:** ≈85% of corpus read (60 of 72 pages; 12 skipped as irrelevant or deprioritised). No scrape failures on own-domain or PDF pages. Main gaps: careers page not scraped (job titles not assessed); SK cross-border pricing sub-page not in corpus; HU-specific eMotion page not in corpus. External sources covered: investor deck, GTCs (all 4 markets), LinkedIn partnership announcements, Eleport price report (all 4 markets), 4 Reddit threads, Chargemap, Electromaps, Hubject pilot announcement.

---

*This document is a final analysis output. The frameworks and domain knowledge files that informed this reasoning are not referenced by name within the analysis sections.*

---

## Synthesis

**What OMV clearly is:** An Austrian oil major (€24B revenue, 22,300 employees, Vienna Stock Exchange listed) building a multi-country EV charging network under its eMotion sub-brand across AT, HU, SK, RO, with Czech Republic in active development. EV charging sits entirely inside the Fuels & Feedstock division under EVP Martijn van Koten — it is a strategic diversification play funded by core cash flows from refining and retail, not a standalone business unit. The eMotion network had 804 charging points as of December 2024 (investor deck) and reached 1,200+ by ~Q1 2026, against a published 2030 target of ≈5,000. The 1,700-station petrol station estate is the site base and strategic anchor. EU co-financing secured for 400+ CPs de-risked the 2023→2024 target upgrade from 2,000 to 5,000 CPs. Separately, OMV Petrom (51.2%-owned subsidiary) operates two additional charging brands in Romania — Renovatio e-charge (≈1,200+ CPs, Romania's largest network) and Petrom Electric (≈400+ CPs) — each with its own app, pricing, and CPMS stack. The eMotion brand across the five-country target covers approximately 1,200 of those CPs; the wider Petrom group has ≈1,900 CPs in Romania alone.

**CPMS:** Confirmed — **ChargePoint be.ENERGISED** (formerly has.to.be). Tier 1 evidence: app store package name `com.hastobe.omv` follows be.ENERGISED's `com.hastobe.[clientname]` client naming convention. Covers the eMotion B2C app across AT/HU/SK/RO. The app is white-labelled as OMV eMotion and is the primary customer-facing charging interface. Quality signal is severely negative: 2.48★ Apple App Store (31 ratings), 83% 1-star reviews (175 of 211), critical registration/card-add bug persisting 18+ months across all markets, a separate Android-specific bug (address screen "continue" greyed out) unfixed for 8+ months, and repeated pre-auth blocks of 150 RON / 15,000 HUF per failed session attempt that take 4–5 working days to release. OMV's be.ENERGISED deployment is among the lowest-performing examples of this platform's client base visible in the research corpus.

**What's absent:**
- **No reliable consumer onboarding funnel** — registration and card-add broken across all markets for 18+ months (iOS) and 8+ months (Android "continue" greyed out). A network at 1,200+ CPs cannot acquire consumers at scale without this working. No fix timeline has been communicated in any public channel.
- **No acceptable pre-authorization UX** — blocking 150 RON or 15,000 HUF per failed session attempt for 4–5 working days is an OMV configuration choice (not a be.ENERGISED platform default), yet it remains in place despite being the leading driver of brand damage in RO and HU. Competitors (MOL, Eldrive) have solved this; OMV has not.
- **No EV-specific press releases in 2.5 years** — last corporate announcement about eMotion was September 8, 2023 (brand launch). EV charging is silent at the Group communications level despite active network buildout. Suggests EV is not receiving board-level narrative ownership.
- **No B2B EV product outside Austria** — AT has three dedicated products (E-Mobility Card, Office Charging, Depot Charging) and a named fleet portal (FleetFlex). HU B2B page has zero EV content. SK and RO B2B EV pages are absent from corpus. The AT B2B model has not been replicated in any other market.
- **No CPMS vendor disclosure anywhere** — not in the investor deck, not in the GTCs, not in press releases. Expected for a white-label deployment; not a gap.
- **No per-country CP breakdown** — 804 total (Dec 2024) is a group-level figure; AT/HU/SK/RO split is not disclosed in any source.
- **No in-app B2B or Revolut support** — The GTC contractually restricts the app to consumers. Business users and Revolut cardholders (high penetration in RO/HU/SK) are excluded, with a misleading "check internet connection" error rather than clear messaging.
- **No HDV charging product page** — investor deck names heavy-duty vehicle charging as a sub-strategy; 11 HDV hubs exist; Romania's largest hub is 18 CPs at 400kW for trucks. But no dedicated HDV pricing, spec, or product page exists on any country website. The strategy is ahead of the customer-facing product.

**What explains what's observed:** OMV's EV posture is typical of an oil major at the early stage of forced diversification. The petrol station estate is a genuine asset — sites exist, grid connections exist, and the brand has high recall. The eMotion platform was stood up quickly (app launched late 2023, 2,000→5,000 target upgrade in 10 months) using a procured CPMS rather than built capability. The resulting product reflects the procurement approach: be.ENERGISED handles charging management, Comarch handles loyalty (Hungary), ROUTEX handles fleet cards — each procured separately, none integrated into a unified customer experience. The app's 18-month registration bug is not a one-off incident; it reflects absent remediation capability or vendor fix capacity — the bug is visible in public app reviews, so OMV knows about it; the non-fix signals that neither OMV's client-layer engineering nor ChargePoint's be.ENERGISED team have resolved it, consistent with a company that treats the app as an operating tool and a vendor with reduced European client-layer capacity post-layoffs. The leadership bandwidth constraint is real: van Koten is simultaneously running the Borouge $150B+ chemicals deal alongside the eMotion buildout, and a new CEO (Emma Delaney, bp background) takes the helm September 1, 2026 with no known position on EV strategy.

**Development stage:** OMV operates a live multi-country consumer charging network (5 markets) with B2B fleet products active in Austria but not yet replicated elsewhere, and a heavy-duty vehicle strategy that exists at the investor level but not yet at the product level. The operational model is early-Stage 3: multi-market deployment through a single white-label CPMS, with Austria as the more mature market and HU/SK/RO in earlier operational states. The active transition pressure is the mismatch between the 5,000 CP scaling target and the current app's inability to onboard customers reliably across all four live markets.

**Where this is going:** The 5,000 CP target forces a platform quality reckoning. OMV cannot grow its consumer EV base to the scale that justifies the 5,000 CP network if the app fails registration for 18+ months and Android users can't create accounts at all. The network will either improve the be.ENERGISED deployment quality (configuration and customisation investment), commission a replacement, or accept that B2C EV revenue will underperform relative to the network's physical size. The B2B gap outside Austria is the higher-probability near-term decision: as the AT B2B model proves revenue, pressure to replicate it in HU, RO, and SK will grow — but the current CPMS setup has no multi-market B2B billing visible. The Romanian three-brand fragmentation (Renovatio + Petrom Electric + eMotion all running separate apps and stacks) is either a deliberate multi-segment play or integration debt — the former is unlikely given the customer confusion it generates; a consolidation decision at the OMV Petrom level is structurally overdue. The Delaney CEO transition (September 2026) is the most significant single event: if she articulates an EV-forward strategy, CPMS platform investment becomes defensible internally; if she does not, EV is likely to be rationalised (cost discipline, partner model, or slow-down). The deeper strategic question — not visible from app reviews — is whether OMV's competitive advantage (1,700 petrol stations + 1M+ MyStation loyal customers + ROUTEX fleet card breadth) can ever be expressed through an EV charging product that is architecturally disconnected from all three of those assets. Closing the loyalty and fleet integration gaps is a larger and more strategically valuable decision than fixing the broken registration funnel. Whether Delaney endorses that integration mandate in her Q4 2026 strategy statement is the single most important near-term signal for whether OMV becomes a platform-serious CPO or a charger-with-an-app that underperforms its physical estate.

**Competitive pressure:** In Austria, Wien Energie (€0.30/kWh membership) and Lidl (€0.39 app) are 2× cheaper than OMV on accessible rates *(Eleport March 2026 price report — verify before use after H2 2027)*. Across all four markets, OMV's ad-hoc pricing is in the upper quartile, leaving casual users (who haven't signed up for the €3.99 subscription) paying a material premium. IONITY is OMV's peer on pricing but has a working app. Tesla Supercharging undercuts OMV on membership pricing in most markets where both operate, and has no registration failures. The competitive pressure is less about network coverage (OMV's petrol station estate creates natural convenience advantage) and more about execution quality — if the app worked, OMV's pricing and location proposition would be defensible; given the app's failures, users are churning to competitors at the moment of first need.

**Sales priority: Medium** — The CPMS is confirmed, the app quality is catastrophically poor, and the scaling ambition is large enough to force a platform quality decision. However, the Delaney CEO transition creates a 6–12 month window of strategic uncertainty that makes an active sales push premature. OMV is unlikely to run a CPMS vendor review during a CEO transition coinciding with the Borouge M&A closing. The opening arrives when Delaney articulates her EV priorities (expected Q4 2026 / Q1 2027) — at that point, the internal case for CPMS investment becomes fundable and the incumbent is not automatically safe.
**Trigger:** be.ENERGISED contract renewal window (2026–2028) coinciding with CEO transition (September 2026) — either event alone is absorbable; together they create a mandatory platform investment decision under a new mandate. The specific trigger to watch: Emma Delaney's first public EV strategy statement (expected Q4 2026). Secondary: any OMV EV press release after the 2.5-year silence signals internal re-engagement and brings the timeline forward.

**Entry point if pursued:** Lead with the B2B scaling gap — not the consumer app failures. The consumer app quality is obvious to OMV insiders (they read the same reviews), but attacking the incumbent's consumer product is a commodity pitch. The strategic frame is: OMV has built a strong AT B2B EV model (E-Mobility Card + FleetFlex + Office + Depot charging) that is generating revenue — why isn't it in HU, RO, and SK? A CPMS that natively handles multi-market fleet billing, per-country VAT invoice logic, and company account management across all five markets is the infrastructure that enables the B2B model to scale. This is the conversation van Koten's successor (or Delaney) will need to have as OMV's EV network reaches the scale where B2B revenue matters. Combine with the Romanian consolidation angle: three brands, three apps, three stacks — what would one platform with sub-operator accounts enable? Reinforce with the vendor risk narrative: the platform that failed to fix the registration bug for 18+ months is the same platform OMV would be trusting to run multi-market fleet billing at 5,000 CPs — the two failures (slow consumer fix cycles and absent B2B capability) have the same structural cause.

**Adjacent leads:**
- **OMV Petrom (Bucharest)** — 51.2%-owned Romanian subsidiary. Operates Renovatio e-charge (≈1,200+ CPs, Romania's largest network) and Petrom Electric (≈400+ CPs) independently of the eMotion CPMS. These are separate procurement decisions from the Group eMotion contract. The scale is larger in Romania than the eMotion footprint alone (combined ≈1,900 CPs). The consolidation of Renovatio/Petrom Electric/eMotion under a unified platform is a separate, potentially larger conversation. Timing signal: OMV Petrom's network has been growing rapidly and is the most prominent CPO in Romania by market share — a platform upgrade here has high leverage.
- **OMV Česká republika** — CZ market activation is imminent (168 CPs with PRE by 2030, announced June 2025). A new market launch requires CPMS onboarding decisions — existing be.ENERGISED contract may extend automatically, or CZ may be contracted separately. Timing: PRE partnership active now, deployment starting.

---

## Company Profile

| Field | Finding | Basis |
|-------|---------|-------|
| Legal entity | OMV Aktiengesellschaft (Group); OMV-International Services Ges.m.b.H. (OIS) for eMotion AT/SK/HU; OMV Petrom Marketing S.R.L. (OPM) for RO | GTC documents (Batches 6) |
| Website | omv.com (global); omv.at, omv.hu, omv.sk, omv.ro, omv.bg (country) | Corpus |
| Headquarters | Vienna, Austria | Press releases |
| Parent company | None (listed company) — major shareholders: Austrian government, ÖBAG (31.5%), Mubadala Investment Company (24.9%), public float | Group website |
| Parent origin | Oil & gas / energy — Austrian origin, 1956 founding | About pages |
| Archetype | Oil Major CPO (primary); Retail Fuel CPO (secondary) | Batch 1 |
| Markets | EV charging: AT, HU, SK, RO (live app), BG (card-only), CZ (in development). Petrol stations: AT, BG, CZ, HU, MD, RO, RS, SK | Country pages |
| CPMS (current) | ChargePoint be.ENERGISED (has.to.be) — confirmed Tier 1 | App package `com.hastobe.omv` |
| CPMS (previous) | Not identified | |
| Hardware | Up to 400kW DC, CCS2. Multi-connector per site. Specific manufacturer not identified in corpus. | Batch 2 |
| Charging types | DC fast + ultra-fast (150–400kW). HPC is the network positioning. HDV-capable at dedicated hubs (up to 400kW). | Own-domain pages, investor deck |
| Network size | 1,200+ CPs (~Q1 2026) — omv.com electric-mobility page. 804 CPs as of Dec 2024 — OMV Capital Market Story May 2025. Target: ≈5,000 by 2030. | Batch 1, Batch 5 |
| App (iOS) | 2.48★ / 31 ratings — apps.apple.com/sk/app/omv-emotion/id6473402260 | p2k DB |
| App (Android) | No rating shown / 50,000+ installs — com.hastobe.omv | p2k DB |
| Key leadership | Emma Delaney — CEO from September 1, 2026 (incoming). Alfred Stern — outgoing CEO (to Aug 31, 2026). Reinhard Florey — CFO & Deputy Chairman (extended to June 2029). Martijn van Koten — EVP Fuels & Feedstock (eMotion owner) as of Q1 2026 corpus; continuity under Delaney unconfirmed. | Press releases Batch 4 |

---

## Parent Company & Corporate Context

**Parent:** None — OMV AG is publicly listed. Primary shareholders: Austrian government via ÖBAG (31.5%), Mubadala Investment Company of Abu Dhabi (24.9%), public float.
**Parent industry origin:** Oil & gas / energy — Austrian national oil company, founded 1956.
**Ownership structure:** Publicly listed (Vienna Stock Exchange).
**Financial scale:** €24B revenue (2025 annual), 22,300 employees (as of 2025 annual report). ~€3.8B average annual organic capex, 40–50% earmarked for sustainable projects. Investment-grade credit rating.
**Parent's primary revenue stream:** Exploration & production (oil/gas), refining (two refineries in AT and RO), and retail (1,700 petrol stations across 8 CEE countries). The balance has been shifting toward chemicals (Borouge International) and sustainable fuels.
**Parent's primary clients:** Retail consumers (fuel at filling stations), commercial fleet operators (ROUTEX card customers), industrial offtakers (refined products, chemicals), aviation (SAF).
**What EV charging means to the parent:** One of several "sustainable venture" platforms explicitly framed in investor materials as a demand-led response to EV adoption in Central Europe — not a core business. EV charging appears alongside geothermal, CCS, and SAF as diversification pillars. It is funded by core cash flows from refining and retail, not a standalone P&L. EV is in the Fuels division, not a New Mobility segment.
**Strategic mandate for EV charging:** Transform the petrol station network from a fuel-only asset into a multi-energy stop. Cross-sell electricity to fuel customers. Retain the 1M+ loyal retail customers (captured via MyStation) as they migrate to EVs. Defend the physical petrol station estate's relevance in a decarbonising transport market. Secondary: access EU infrastructure grants (confirmed) and regulatory position in AFIR corridor compliance.

---

## Business Model

**Primary revenue clients:** Consumer EV drivers (B2C) across AT/HU/SK/RO — the app is contractually B2C-only. Secondary: commercial fleet operators via OMV E-Mobility Card (B2B ROUTEX extension). Fleet billing is separate from the eMotion app and handled via the fleet card system.

### Own-network CPO (B2C consumer charging)

App-based access via OMV eMotion (be.ENERGISED white-label) or RFID card. Tiered pricing model across all markets *(as of ~Q1 2026 corpus scrape; AT/HU/SK/RO rates cross-confirmed against Eleport March 2026 price report — verify before use in H2 2027+)*:
- **Austria:** Ad-hoc €0.69/kWh; App (free, "Premium") €0.65/kWh; Subscription (€3.99/mo, "Premium Plus") from €0.52/kWh DC / €0.59/kWh HPC.
- **Slovakia:** Ad-hoc €0.69/kWh; App €0.44–0.59/kWh; Subscription €3.99/mo at €0.39–0.54/kWh.
- **Hungary:** Ad-hoc 299 HUF/kWh; App 279 HUF; Subscription 4,499 HUF/mo at 209 HUF/kWh.
- **Romania:** Ad-hoc 2.69–2.99 RON/kWh; App 2.79 RON; Subscription 11.98 RON/mo at 2.29–2.59 RON/kWh.
Pricing is consistently upper-tier ad-hoc, competitive only via subscription. The subscription price point (€3.99/mo in AT/SK) is low-cost access, but conversion is limited by the broken registration funnel.

### eMSP / Roaming (consumer)

eMotion app provides access to roaming networks alongside own stations. AT roaming partners include Smatrics, Wien Energie, IONITY, Salzburg AG, DaEmobil, Mer, EVN, Lidl, Kelag, TIWAG, Energie Steiermark, VKW. International roaming countries from AT: CZ, DE, IT, HR, SI, CH, FR. Roaming tariffs are materially higher than own-network (Premium Plus own-network DC: €0.52/kWh AT; roaming DC ≤149kW: €0.79/kWh — 52% premium). This roaming model is eMSP-in-practice, not a stated roaming product — OMV does not market itself as an eMSP separately from the charging network.

### B2B Fleet (Austria-centric)

Three distinct B2B products, Austria only:
1. **OMV E-Mobility Card** — extends the ROUTEX fleet fuel card to EV charging. Single card for fuel + charging. 21,000+ ROUTEX locations across 34 EU countries via card network (as of ~Q1 2026 corpus — verify for use after 2027). FleetFlex Kundenportal: real-time card management, cost reporting, VAT recovery (REMOBIS), toll payment (SmartPass EETS).
2. **OMV Office Charging** — wallbox installation for company premises. Government subsidy facilitation (Austrian). Up to 5 satellite points per main unit. FleetFlex integration.
3. **OMV Depot Charging** — large logistics/fleet depot solution. Mentioned on B2B hub but no dedicated public page. Same FleetFlex portal.
**Critical gap:** Hungary, Slovakia, and Romania B2B EV products do not exist at the country level. HU B2B page lists fuel card, wholesale, fleet solutions, gas — no EV content. The AT B2B model has not been exported.

### HDV Charging (emerging strategic segment)

11 dedicated heavy-duty vehicle charging hubs in AT and RO as of ~September 2024 (TRATON LinkedIn; 20 months before analysis date — actual count may be higher given ongoing buildout). Largest: 34 CPs at Mercurea Sibiului on the Romanian A1 motorway — 18 CPs at 400kW for trucks, 16 for passenger cars, 10MW total installed capacity. Built under concession agreement with CNAIR (Romanian National Road Infrastructure Management). TRATON Charging Solutions network partner (covers MAN, Scania, VW Truck & Bus fleet operators). Hubject OCPI 2.3 truck charging interoperability pilot partner (September 2025 — concept stage). No publicly priced HDV charging product; no dedicated HDV product page on any country website.

---

## Strategic Context

### M&A & Partnerships

- **Borouge Group International (2026 — announced, closing pending as of corpus):** OMV and ADNOC combining Borouge Plc, Borealis, and NOVA Chemicals into a new ~$150B+ entity. OMV nominees five board members. Closing date not confirmed in corpus — deal referenced as pending in May 2025 Capital Market Story. This is the defining corporate event of 2026 — the chemicals transformation is consuming senior executive bandwidth and is entirely separate from EV charging.
- **TRATON Charging Solutions (September 2024):** OMV joined TRATON's commercial vehicle charging network as a CPO. Gives OMV HDV hub visibility to operators using TRATON-connected fleet management (MAN, Scania, VW Truck & Bus).
- **Pražská energetika / PRE (June 2025):** Czech Republic expansion. 113 ultra-fast stations / 168 CPs by 2030. Power: 300–400kW. Partnership exists since 2020 (PRE POINT chargers at OMV CZ stations) — June 2025 announces major expansion. BILLA supermarkets will host some CZ locations (first confirmed destination/non-forecourt site partner).
- **EU co-financing:** Confirmed from Hungary Today (November 2024) — "large project co-financed by OMV and the European Union... installing over 400 charging points in EU countries." The specific EU fund (CEF/AFIR) is not named but this is the most credible explanation for the 2,000 → 5,000 CP target upgrade between September 2023 and July 2024.
- **CNAIR highway concession (Romania):** Highway charging deployment via government concession — not owned forecourt. Differentiates OMV Petrom's RO infrastructure access vs. CPOs limited to private land.

### Leadership

| Name | Role | Background | Mandate signal |
|------|------|------------|----------------|
| Emma Delaney | CEO (incoming September 1, 2026) | 30+ years energy industry; bp senior leadership, "transformation, portfolio development, sustainable value creation" | Unknown EV position; bp background is upstream/portfolio, not downstream retail fuels. First strategy statement expected Q4 2026. |
| Alfred Stern | CEO (outgoing, to August 31, 2026) | OMV career; launched eMotion brand September 2023 | Departure — the CEO who committed to eMotion is leaving. The incoming CEO has no stated position on EV. |
| Reinhard Florey | CFO & Deputy Chairman (extended to June 2029) | Finance | Cost discipline context — €0.5B efficiency program by end 2027. |
| Martijn van Koten | EVP Fuels & Feedstock (as of Q1 2026 corpus; continuity under Delaney unconfirmed) | Energy / fuels | Owner of eMotion mandate. Also OMV nominee to Borouge Group International Supervisory Board — significant bandwidth constraint. |

### Strategic pivots or signals

- **2,000 → 5,000 CP target upgrade (Sep 2023 → Jul 2024, ≈10 months):** Not press-released. EU co-financing de-risked a larger rollout. CZ added as fifth target market by May 2025 Capital Market Story.
- **Zero EV press releases in 2.5 years:** Since the September 2023 launch, OMV corporate communications has covered Borouge, CEO transition, gas production, and R&D. EV charging is operationally active but narratively absent.
- **HDV charging as a formal strategic pillar:** Named in the Capital Market Story as a sub-strategy under EV. Claims first-mover status in Austrian HDV charging. TRATON partnership and Hubject pilot indicate intentional positioning, not just opportunistic deployment.
- **Destination charging strategy confirmed:** Capital Market Story notes "charging points at OMV sites and at destination points." PRE/BILLA partnership in CZ is the first concrete implementation. This expands the site strategy beyond the petrol station estate.

---

## Development Stage & Trajectory

### Stage assignment

**Assigned stage:** Stage 2→3 transition. The core infrastructure is Stage 3 (multi-country, live app, B2B product in one market, roaming network active) but the operational model is Stage 2 in all markets except Austria (no multi-market B2B, fragmented app experience, no integrated loyalty/charging across markets, HDV product is pre-commercial).

**Signals present at Stage 3:**
- Own-branded app with RFID card alternative across 4+ markets
- B2B fleet product live in Austria (E-Mobility Card, FleetFlex, Office, Depot)
- Roaming network active (AT: 12+ partners, plus international roaming to 7 countries)
- HDV charging as a formal strategic initiative with investor-level commitment
- EU co-financing secured (regulatory engagement signals Stage 3 maturity)
- TRATON network membership (B2B ecosystem integration)

**Signals absent (expected at full Stage 3/4):**
- Multi-market B2B product (AT only; HU/SK/RO have none)
- Integrated loyalty-charging experience (MyStation loyalty and eMotion charging are separate apps in HU; no integration)
- HDV pricing and product page publicly available
- Reliable app onboarding funnel across all markets
- Per-country CP disclosure (data maturity expected at Stage 3+)

**Conflicting signals:**
- AT = mature Stage 3 (three B2B products, named portal, market self-claim); HU/SK/RO = Stage 2 operational model. Assigned as Stage 2→3 transition for the group; AT itself is mid-Stage 3.

### Transition pressures

| Pressure | Active? | Evidence |
|----------|---------|----------|
| App onboarding failure blocking consumer acquisition at scale | Yes | 83% 1★ app, 18-month registration bug, Android-specific bug 8+ months unfixed |
| B2B revenue ceiling in HU/SK/RO due to absent fleet product | Yes | HU B2B page has zero EV content; AT B2B model not replicated |
| HDV strategy ahead of product | Yes | Investor deck names HDV as sub-strategy; no public pricing or product page |
| Romanian brand fragmentation (3 brands, 3 apps, ≈1,900 combined CPs) | Yes | Eleport data confirms three separate OMV Petrom brands; confirmed by Eleport report |
| CEO transition creating strategic uncertainty | Yes | Delaney starts September 2026; no EV position stated |
| EU co-financing obligations (400+ CPs committed) | Yes | Hungary Today / CEE Chamber November 2024 — specific deployment commitments tied to EU funding |
| CZ market launch creating new CPMS onboarding requirement | Yes | PRE partnership June 2025; deployment underway |
| 5,000 CP target requiring 4× scaling from current 1,200 | Yes | 804 CPs Dec 2024, target 5,000 by 2030 — ≈3,800 CPs to build in 4 years |

### Decisions forced

- **CPMS quality remediation or replacement** — the current be.ENERGISED deployment cannot reliably onboard consumers. Either OMV invests in fixing the customisation layer (QA, Revolut integration, pre-auth UX, Android bug) or it evaluates alternative platforms. The 5,000 CP target makes "live with it" increasingly untenable as session volume grows.
- **Multi-market B2B platform** — scaling the AT B2B model to HU/SK/RO requires CPMS support for multi-country fleet billing, per-country VAT invoice logic, company account management, and possibly depot DLM. The current setup (be.ENERGISED B2C + ROUTEX card separately) has no visible multi-market B2B layer.
- **Loyalty-charging convergence architecture** — three separate apps (eMotion for charging, MyStation for loyalty, ROUTEX portal for fleet) serve the same OMV customer with no shared identity, billing, or loyalty. If Delaney endorses an integrated customer experience mandate, a platform integration decision across CPMS, Comarch loyalty, and ROUTEX becomes forced at the group level. This is a larger, longer-horizon decision than the B2B CPMS capability gap alone — it is the architectural question of whether OMV becomes a platform-serious CPO or a charger-with-an-app.
- **HDV product commercialisation** — 11 hubs exist, TRATON visibility exists, Hubject pilot is underway. A public pricing and booking product for HDV charging is the next step; this may require dedicated HDV charging management distinct from the consumer CPMS.
- **Romanian platform consolidation** — three brands, three stacks. The operational cost and customer confusion of running Renovatio, Petrom Electric, and eMotion on separate platforms will eventually force a consolidation decision. This is a OMV Petrom-level decision, not a Group eMotion decision.
- **CZ CPMS onboarding** — new market launch with PRE partnership. Likely extension of existing be.ENERGISED contract but represents a procurement touch point.

### Sales angle

OMV needs to replicate its Austrian B2B EV model across four other markets. The AT model (fleet card + FleetFlex portal + office/depot charging) is a working product — but it is running on a CPMS that cannot support multi-country fleet billing or company-level account management without significant custom work. The structural conversation is: OMV has already proven the B2B EV revenue model in Austria; the platform decision for scaling it to HU/RO/SK is the next procurement. This is a more sophisticated pitch than "your app is broken" — it frames the CPMS decision as a capability enabler rather than a problem fix, and it speaks to a €3.8B capex company's growth mandate rather than its operational pain.

---

## CPMS Identification

**State:** Confirmed — ChargePoint be.ENERGISED (has.to.be)

**Evidence tier:** Tier 1

**Evidence:**
- Google Play / App Store package name: `com.hastobe.omv` — follows be.ENERGISED's documented `com.hastobe.[clientname]` naming convention for white-labelled client apps. Identical pattern to confirmed be.ENERGISED clients (e.g. `com.hastobe.losch`).
- GTC language: "service partner" used as the entity operating the charging station backend — standard liability pass-through structure in white-label CPMS deployments; no vendor named (expected for white-label).
- Hubject pilot (September 2025): OMV is a named participant in a Hubject OCPI 2.3 pilot. be.ENERGISED typically connects via Hubject's intercharge platform for pan-European roaming, which is consistent.

**What was checked:**
- [x] Own-domain pages
- [x] App store package name / developer field (iOS + Android)
- [ ] Vendor case study pages — ChargePoint/be.ENERGISED case study pages not in corpus; no case study found naming OMV
- [x] CPO press releases / investor materials — no CPMS named
- [ ] Careers page — not in corpus
- [x] SERP queries — SERP results did not surface a vendor case study or direct naming

**Vendor profile — ChargePoint be.ENERGISED:** Cloud-based CPMS used across CEE and Western Europe. Acquired by ChargePoint from has.to.be. Known for: solid roaming/eMSP layer (Hubject integration), good white-label customisation, active in the oil-major CPO segment (Losch, OMV). Known issues in peer deployments: pre-auth hold behaviour (money blocked for days on failed sessions), power delivery accuracy (energy metered at charger vs. vehicle differs), QR / RFID session start reliability, Android app stability in white-label deployments, slow fix cycles for client-layer bugs. OMV's deployment exhibits all of these: pre-auth blocking (confirmed in RO reviews and RO GTC pre-auth disclosure clause), overbilling ≈30% (confirmed in HU Reddit), QR scan failure (confirmed in HU/SK reviews), Android "continue" button bug (unfixed 8+ months). The OMV eMotion deployment is one of the more publicly visible negative examples of be.ENERGISED performance in the regional market.

### Ancillary Tech Stack

| Component | Vendor | Scope | Notes |
|-----------|--------|-------|-------|
| eRoaming | Hubject | Group-wide | Confirmed from OCPI 2.3 pilot participation (September 2025); consistent with be.ENERGISED standard integration |
| Loyalty / CRM (HU) | Comarch | Hungary only | MyStation app — `com.comarch.clm.mobileapp.omvhu`. SuperShop multi-retailer loyalty program. 1M+ active users. Separate from eMotion CPMS. |
| Fleet card | ROUTEX (OMV-owned network) | Group-wide, 21,000+ locations, 34 EU countries | Separate from CPMS — fleet billing via card terminal and FleetFlex portal |
| Fleet management portal | FleetFlex (OMV proprietary or procured — vendor not identified) | Austria only (B2B customers) | Real-time card management, cost reporting, multi-card management. Vendor not named in corpus. |
| VAT/excise recovery | REMOBIS | Europe-wide (fleet card customers) | Spain to Sweden, Belgium to Bulgaria |
| Toll payment | SmartPass (OMV) / EETS | Europe-wide (heavy vehicles) | Single OBU for all EU toll systems, integrated with fleet card |
| Roadside assistance | OMV Service 24 International | Group-wide | 24/7, heavy vehicles 2.8t+, hotline +43 5050247 159 |
| Station mapping | Chargemap, Electromaps (third-party indexing) | Group-wide | OMV stations appear on third-party apps via OCPI/Hubject interoperability |
| Hardware manufacturer | Not identified | — | Charger brand not named in any corpus page; specs confirm up to 400kW DC CCS2 |
| Home charging | None identified | — | No home charging product visible; not in scope for this archetype |

---

## Business Gaps

| Gap | Evidence | Sales relevance |
|-----|----------|-----------------|
| Broken consumer onboarding funnel (registration, card-add) | 83% 1★ app reviews; 18-month persistent bug; Android "continue" greyed out 8+ months; Revolut rejection with false error message | High — every net-new customer acquisition fails at this step; subscription conversion is near-zero for affected users |
| Pre-auth blocking on failed sessions (not per-charge, per-attempt) | 150 RON / 15,000 HUF blocked per failed attempt; multiple failures in one session; 4–5 working days to release; explicitly compared unfavourably to MOL and Eldrive in reviews | High — destroying trust at the critical "first charge" moment; likely highest contributor to 1★ reviews |
| No B2B EV product outside Austria | HU B2B page: zero EV content. SK/RO B2B EV pages absent from corpus. | High — the AT B2B model is commercially proven; replication requires CPMS support for multi-market company accounts and VAT invoicing |
| No company account in the consumer app (B2C-only by contract) | GTC §4.1 AT: explicit B2C restriction per KSchG. Multiple reviews across all markets requesting VAT invoice / company registration. | Medium — deliberate architecture, but creates friction for drivers with company cars who don't know about the E-Mobility Card |
| No live pricing displayed during charging session | AT 4★ review: accumulated cost not shown during session | Medium — table-stakes feature for consumer trust; present in most competitor apps |
| No map filtering (own stations vs. roaming) | AT/RO reviews: cannot distinguish own-network stations from roaming partners on the map; roaming costs 52% more on AT own-network rates | Medium — leads to unexpected cost; increases pricing complaints |
| Country-locked station visibility | Google Play review: app only shows stations in user's country of residence | Medium — limits cross-border use; cited as a reason to avoid the app |
| No HDV product page or pricing | Investor deck names HDV as sub-strategy; 11 hubs exist; no public pricing or product page on any country website | Medium-high for the HDV segment; OMV cannot generate inbound HDV fleet leads without a product page |
| Romanian multi-brand fragmentation (3 separate apps/CPMS) | Eleport report confirms Renovatio, Petrom Electric, OMV eMotion as three separate stacks under OMV Petrom | Medium — operational inefficiency and customer confusion; consolidation opportunity |
| Subscription cancellation trap (Hungary) | HU App Store review: charged 4,499 HUF/month for months after one session; no visible cancellation flow | Medium — regulatory risk in an era of EU consumer protection enforcement; brand damage |

---

## Competitive Position

### Strengths

1. **Physical site estate — 1,700 petrol stations across 8 CEE countries.** The largest defensible advantage. EV chargers co-located with convenience stores, toilets, food, and fuel creates a complete stop point. Competitors cannot replicate this without decades of site acquisition. The estate is effectively paid for by the fuel business.
2. **ROUTEX fleet card network — 21,000 locations, 34 EU countries.** OMV is one of the only CPOs in CEE that can offer a single invoice for fuel + EV + tolls + roadside assistance. For fleet operators, this is administratively highly attractive. No pure-play EV CPO can match this coverage.
3. **EU co-financing access.** Confirmed access to EU infrastructure grants that accelerated the network from 2,000 to 5,000 CP commitment. AFIR compliance positioning gives OMV access to public co-financing pools most private CPOs cannot tap.
4. **Balance sheet depth.** €24B revenue, ~€3.8B annual capex. OMV can fund a full CPMS replacement and parallel HDV/B2B product build simultaneously without financial stress. Cost discipline program (€0.5B by 2027) applies but doesn't constrain a strategic CPMS upgrade.
5. **Romanian market dominance via OMV Petrom.** Three charging brands and ≈1,900 CPs make the Petrom group the single largest CPO in Romania by a wide margin. CNAIR highway concession access adds corridor infrastructure that independent CPOs cannot match.

### Weaknesses

1. **App onboarding failure — 18+ months of unfixed critical bugs.** The registration-to-first-charge funnel is broken across all markets. Android users effectively cannot create accounts (8+ months). This is the highest-urgency issue because it caps all B2C revenue growth at the current network scale.
2. **Pre-auth UX is worst-in-class.** Blocking €13–€40 equivalent per failed session attempt for 4–5 working days is materially worse than competitors (MOL, Eldrive). This single issue may be responsible for more brand damage in RO/HU than any other factor.
3. **B2B EV model confined to Austria.** The AT B2B product is sophisticated — but OMV's second, third, and fourth markets have no equivalent. This is a revenue ceiling on the 5,000 CP network.
4. **Leadership transition uncertainty.** Alfred Stern (who launched eMotion) is leaving. Emma Delaney starts September 2026 with no stated EV position. The 6–12 months following a CEO change are typically characterised by strategy reviews and cost discipline — not EV platform upgrades.
5. **EVP bandwidth constraint.** Martijn van Koten (Fuels & Feedstock, eMotion owner) is simultaneously on the Borouge Group International Supervisory Board during the formation of a $150B+ entity. His attention to eMotion operational quality is necessarily divided.
6. **Pricing above market median on ad-hoc/free rates.** In all four markets, OMV's accessible pricing (without subscription) is in the upper quartile. Casual users — the majority — pay 28–50% above market median. The subscription converts well economically (€3.99/mo AT/SK) but the funnel is broken.

### Peer comparison

| Peer | Network size | Target / trajectory | Basis / date |
|------|-------------|---------------------|--------------|
| MOL Plugee (HU/SK/RO/CZ) | Not assessed in this research | — | Cited favourably in reviews vs. OMV on pre-auth billing |
| Smatrics (AT) | AT's largest charging network; primary OMV roaming partner | AT market leader | Batch 2 |
| Ionity (pan-EU HPC) | Major pan-EU highway network | Pan-EU HPC | Batch 2; OMV roaming partner; similar ad-hoc pricing in AT |
| Wien Energie (AT) | Regional AT CPO | AT market presence | Eleport Batch 8 — 2× cheaper than OMV on app rate |
| Renovatio e-charge (RO, OMV Petrom sub-brand) | ≈1,200+ CPs, Romania's largest | Dominant in RO DC market | Eleport Batch 8 |
| Eldrive (RO) | ≈1,000 CPs, RO | Mid-tier national CPO | Cited in reviews; autocharge model praised vs. OMV pre-auth |

---

## Network Size

**Headline figure:** 1,200+ charging points — omv.com/en/expertise/fuels/electric-mobility (~Q1 2026 scrape date)

**Scope:** Public fast and ultra-fast DC charging. eMotion-branded network only. Excludes Bulgaria (card-only), Czech Republic (in development), and OMV Petrom's Renovatio e-charge (≈1,200+ CPs) and Petrom Electric (≈400+ CPs) brands.

**Breakdown (if multi-country or multi-type):**

| Region / Segment | Count | Source | Date | Notes |
|-----------------|-------|--------|------|-------|
| Group eMotion total | 804 CPs | Capital Market Story (investor deck) | Dec 2024 | Tier 1 — investor-grade; per-country split not disclosed |
| Group eMotion total | 1,200+ CPs | omv.com electric-mobility page | ~Q1 2026 | Tier 1 — own website; most recent available figure |
| Romania (eMotion only) | 270+ CPs | Eleport price report | Feb 2026 | Third-party estimate; OMV stations only, not Renovatio/Petrom Electric |
| Czech Republic (committed) | 168 CPs | MobilityPlaza / PRE partnership | June 2025 | Committed by 2030, not yet deployed |
| Group eMotion target | ≈5,000 CPs | Capital Market Story, website | 2030 target | AT/HU/SK/RO/CZ |
| HDV hubs | 11 hubs in AT+RO | TRATON LinkedIn | ~Sep 2024 | HDV-capable hubs; CPs not specified |
| Largest hub (RO, A1) | 34 CPs | logos-pres.md | May 2025 | 10MW total; 18 CPs for trucks (400kW), 16 for cars |
| Chargemap (third-party) | 335 locations | Chargemap network page | 2025/2026 | Locations ≠ CPs; consistent with ≈3.6 CPs/location average |
| OMV Petrom RO (all brands) | ≈1,900 CPs combined | Eleport price report | Feb 2026 | Renovatio ≈1,200+ + Petrom Electric ≈400+ + eMotion ≈270+ |

**Conflicts:**
- logos-pres.md (May 2025) cited "about 1,000 charging points for OMV Petrom's RO network." This is not in conflict with the 804 total eMotion figure — the Eleport breakdown confirms OMV Petrom operates multiple brands. The "1,000" may refer to Renovatio alone at an earlier date, or a combined subset. Not a Tier 1 source; not used in headline.

**AC/DC composition and network age:**
- Explicitly DC-only network (fast and ultra-fast). No AC charging described on any page. Bulgaria is the exception (50kW DC included).
- Power levels: 150–400kW (majority 150–300kW per the 2023 launch; upgrade to 400kW capability confirmed by 2024 hardware on AT/RO pages). Current-generation hardware.
- New network — eMotion brand launched September 2023; oldest stations ≈2.5 years old. No legacy AC infrastructure to retrofit. This is a net-new build using current hardware specs throughout.

---

## Geographic Intelligence

### Austria

OMV's home market and the most mature eMotion deployment. Three dedicated B2B EV products (E-Mobility Card, Office Charging, Depot Charging). FleetFlex portal. Claims "Austria's only full-service e-mobility provider" (AT B2B page). 100% renewable electricity at all AT eMotion stations. Roaming network: 12+ AT partners including Wien Energie, Smatrics, IONITY, and regional Stadtwerke. International roaming from AT to CZ, DE, IT, HR, SI, CH, FR (via app).

Pricing: AT country median is €0.59/kWh (Eleport); OMV ad-hoc is €0.69 (above median), app €0.65 (4th most expensive in AT table), membership €0.59 (matches median). AT EV market growing: 60,651 EVs sold in 2025 (+35.9%), EV market share 21.3%.

Challenge: App review failures present in AT (ROUTEX card not supportable in app, no prices shown, map failures). AT users are less vocal than RO/HU users but the product quality issues exist across markets.

### Hungary

OMV's fastest-growing active market. As of November 2024 (Hungary Today source): 15 live locations, 12 more under construction, targeting ≈50 ultra-fast CPs by end 2025. Actual end-2025 outcome not confirmed in corpus — current HU CP count should be verified. EU co-financing confirmed. Coverage goal: charging available within 100km along main routes.

Two-app architecture: eMotion (be.ENERGISED, `com.hastobe.omv`) for charging + MyStation (Comarch, `com.comarch.clm.mobileapp.omvhu`) for loyalty. 1M+ active MyStation users (as of ~Q1 2026 corpus). Zero integration between the two apps. B2B EV product does not exist at the country level.

Pricing: HU median €0.53/kWh (≈196 HUF); OMV 299 HUF ad-hoc — explicitly named by Eleport as a "highway stop" CPO where "casual visitors pay 3× more" than cheapest options. HU EV market growing: 11,002 EVs sold in 2025 (+28.5%), market share 8.5%.

Dominant app pain: card-add failure (internet error), Revolut not supported, 15,000 HUF pre-auth blocking, no B2B/VAT invoice, subscription cancellation dark pattern.

### Slovakia

eMotion confirmed present with same 5,000 CP target. Notable UX gap: changing tariff plan requires calling an infoline (+421 268 720 744) rather than doing it in-app (unlike AT). Cross-border pricing confirmed: SK customers can use eMotion app in AT and HU at their SK tariff ("charge abroad like at home").

Pricing: SK median €0.54/kWh; OMV ad-hoc €0.69 (highest in SK). SK EV market: 4,377 EVs sold in 2025 (+96.5%), market share 4.7% — rapid growth from a small base. Government publishes weekly average charging prices nationally (rare EU transparency).

### Romania

Largest single-country footprint. OMV Petrom is the dominant CPO group with three brands and ≈1,900 combined CPs — the largest charging group in Romania. The eMotion sub-brand specifically has ≈270+ CPs at OMV stations.

CNAIR highway concession: OMV Petrom secured government concession for charging on the A1 motorway — competitive moat for highway corridor deployment. Largest EV hub in Romania: 34 CPs at Mercurea Sibiului, 10MW capacity, 18 × 400kW truck CPs. 100% renewable electricity claimed. Separate contract party (OPM = OMV Petrom Marketing S.R.L., Bucharest).

Pricing: RO median ~€0.49/kWh (≈2.45 RON); OMV eMotion app 2.79 RON (2nd most expensive after Be Charge). Romania had the heaviest volume of negative app reviews: pre-auth blocking at 150 RON per failed attempt (not per charge), Revolut rejection, no company account, unreliable session start.

RO GTC (March 2025 / July 2025): explicitly discloses pre-auth holds and notes that release delays are outside OPM's control. This disclosure does not appear in AT/HU/SK GTCs — suggests the pre-auth issue is more acute in RO or that the RO legal team updated terms in response to complaints.

RO EV market: declining — 8,849 EVs sold in 2025 (-9.7%), EV market share fell from 6.5% to 5.6%. The EV market in Romania is going backwards while OMV is building its largest hubs there. Grid integration and purchasing power are the market-level constraints.

### Bulgaria

21 charging locations listed explicitly with names, addresses, power levels (50–300kW) and pricing (0.35–0.39€/kWh). Motorway sites at 300kW (2× 300kW, 4× CCS2 connectors), city sites at 50kW. Payment: bank card or OMV E-Mobility business card at external terminal only — no eMotion app. Explicitly excluded from the 5,000 CP target: "the eMotion network is available in AT/SK/HU/RO — in Bulgaria the service is accessible with OMV E-Mobility business card and bank card." Bulgaria operates under the eMotion physical brand but not the eMotion digital ecosystem.

### Czech Republic (in development)

OMV Česká republika + Pražská energetika (PRE) agreed June 24, 2025: 113 ultra-fast stations / 168 CPs by 2030, 300–400kW, CCS2. Partnership history: PRE POINT chargers at OMV CZ forecourts since 2020. BILLA supermarkets will host some CZ locations (destination charging, first confirmed non-forecourt partner). Confirmed in Capital Market Story May 2025 as 5th target market. No eMotion landing page, tariffs, or app content for CZ in corpus. Execution lag between investor commitment and market-facing product is a pattern for OMV.

---

## App Quality

**iOS:** 2.48★ (31 ratings) — OMV eMotion, apps.apple.com/sk/app/omv-emotion/id6473402260
**Android:** No rating shown / 50,000+ installs — com.hastobe.omv (Google Play)

**Rating history / rebrand note:** eMotion app launched late 2023 (planned end 2023 per Sep 2023 press release). Current rating of 2.48★ is the full lifetime rating — no prior brand/app exists to compare.

**Review patterns (1★ themes):**

| Theme | Approx. review count | CPMS / product implication |
|-------|---------------------|---------------------------|
| Registration / card-add broken ("check internet connection" false error) | ≈50+ reviews across all markets | be.ENERGISED payment pre-auth API failing; OMV client-layer bug unfixed 18+ months |
| Android "continue" greyed out at address step | ≈12+ Google Play reviews | OMV-specific Android build bug; separate from iOS card-add error; unfixed 8+ months |
| Revolut cards rejected (with misleading error) | ≈15+ reviews (RO, HU, SK) | Payment processor does not support Revolut; error message engineering failure |
| Pre-auth blocks 150 RON / 15,000 HUF per failed attempt, released in 4–5 days | ≈20+ reviews primarily RO, HU | be.ENERGISED pre-auth architecture; known issue in platform; OMV has not mitigated |
| Charging session fails to start despite registration | ≈15+ reviews all markets | OCPP session initiation; app-to-charger communication failure |
| No B2B / company account / VAT invoice | ≈10+ reviews HU, AT, SK, RO | Deliberate B2C-only architecture per GTC; users unaware |
| Price complaints ("emergency only", "too expensive") | ≈10+ reviews all markets | Pricing strategy; consistent with Eleport upper-tier positioning |
| Map transparency (can't filter OMV vs. roaming, no prices, country-locked) | ≈8+ reviews | Station visibility and pricing UX gaps |
| Station hardware: session cut-offs, low power output, QR non-functional | ≈8+ reviews | Station-side reliability; hardware quality or OCPP communication |
| Customer support absent in app | ≈5+ reviews | No in-app contact; support only during business hours |

**Field evidence (non-review sources):** Reddit HU (r/CartalkHungary): billing accuracy — OMV charged 14.3 kWh vs 11 kWh shown by Tesla app (≈30% overbilling), consistent across 3 sessions (Tier 2 evidence, single user but specific and quantified). Reddit HU: pre-auth/Revolut minimum-charge bug (1,200 HUF card accepted when 5,000 HUF minimum required). Eleport comparison (AT): OMV eMotion absent from a community-authored Austrian charging tariff comparison table despite Eleport including it as a major AT CPO — suggests low brand recall among price-conscious Austrian EV community.

**Competitor mentions in reviews (users explicitly preferring alternatives):**
- Shell (AT): "fahre zu Shell!" (AT user) — cited as working when OMV failed
- MOL (HU/RO): cited for better pre-auth billing (charges only what's used)
- Eldrive (RO): cited for autocharge model (charge first, pay after)
- TEA Mobility / Teapont (HU): cited for session reliability
- Wien Energie, IONITY (AT): implicitly preferred via absent OMV from Austrian community tariff table
- MVM/Mobiliti (HU): cited for working session start
- Renovatio e-charge (RO, same parent!): cited by a Romanian user as superior ("topping up first, then charging — simple and fast") vs. OMV eMotion's pre-auth model

---

## Triggering Events & Shifts

### Categories scanned

| Category | Status |
|----------|--------|
| 1. Vendor reliability | ✓ — Active (be.ENERGISED/ChargePoint acquisition risk) |
| 2. Regulatory | ✓ — Latent (AFIR payment terminals, likely compliant but unconfirmed); all others N/A |
| 3. Contract & procurement | ✓ — Latent (CPMS renewal window approaching); no active RFPs |
| 4. Stage transition | ✓ — Active (Stage 2→3 post-transition signals confirmed); Latent (Stage 3→4 at OMV Petrom level) |
| 5. Archetype-specific | ✓ — Active (Retail Fuel CPO: app quality + fleet gap); Latent (Oil Major: forcing event not yet reached; OMV Petrom RO fragmentation) |
| 6. Strategic & capital | ✓ — Active (CEO/Leadership Change appointment; ChargePoint layoffs); all others N/A |
| 7. Operational quality | ✓ — Active (App Store Quality Deterioration; Network Reliability/Session Failures); Tech Obsolescence N/A |
| 8. Emerging revenue | ✓ — Active (Loyalty/Ecosystem Integration Gap — OMV Hungary); Latent (Concession SLA Exposure); V2G, JV Platform, Divestiture N/A |
| 9. Triggers to be added | N/A — placeholder category |

---

### Active triggers

| Trigger | Catalogue section | Threshold candidate | Corpus evidence | Date |
|---------|-------------------|---------------------|-----------------|------|
| Has-to-be → ChargePoint be.ENERGISED acquisition risk | 1. Vendor reliability | Big Risk — vendor strategy change post-acquisition; universal for all be.ENERGISED clients | App package `com.hastobe.omv` confirms OMV is a be.ENERGISED client (Tier 1). ChargePoint acquired has.to.be in 2021 for ~€250M; strategic and roadmap direction now follows US-headquartered company. cpms_platforms.md: "watch for ChargePoint deprioritizing the European white-label CPO market in favor of their own network." | 2021 (acquisition); ongoing |
| Stage 2→3 multi-market platform strain | 4. Stage transition | Big Problem — platform limitations blocking multi-market scale | Post-transition signals all confirmed: (1) SK tariff plan change requires calling infoline, not in-app (Batch 2); (2) HU Comarch loyalty app and eMotion are separate with zero integration (Batch 2, Batch 5); (3) B2B EV product exists in AT only — HU/SK/RO have zero equivalent (Batch 3); (4) Android client build bug unfixed 8+ months across markets (Batch 9) | ≈2024 ongoing |
| App Store Quality Deterioration | 7. Operational quality | Big Problem — consumer funnel broken; brand damage from visible, persistent failures | OMV eMotion explicitly named in catalogue entry. 2.48★ iOS (31 ratings; below 50-threshold — pattern test applied, not aggregate threshold); 83% of 211 total reviews are 1★. iOS card-add "check internet connection" false error unfixed 18+ months (Nov 2024 → May 2026). Android "continue" greyed out at address step unfixed 8+ months (Aug 2025 → May 2026). Revolut rejection with misleading error. (Batch 9 app reviews) | Nov 2024 → May 2026 (18+ months documented) |
| Network Reliability / Session Failures | 7. Operational quality | Big Problem — revenue loss from failed sessions; trust destruction at first charge | Session start failures across HU, RO, SK, AT; distributed pattern (multiple markets, multiple hardware types) consistent with CPMS-level cause rather than hardware cluster. "App sends no signal to charger"; session aborts after start; pre-auth blocks on each failed attempt multiplying the damage. (Batch 9 reviews; Reddit Batch 8) | Ongoing, documented across corpus |
| ChargePoint layoffs (Section 6 named example) | 6. Strategic & capital — Layoffs/Restructuring | Big Risk — platform roadmap may stall or be deprioritized | ChargePoint had multiple layoff rounds 2023–2024 (10–15% headcount cuts, publicly reported; named in catalogue). Directly affects be.ENERGISED European platform roadmap investment. OMV's 18-month unfixed app bugs are consistent with reduced vendor engineering capacity for client-layer work. | 2023–2024 |
| CEO/Leadership Change — Emma Delaney appointment | 6. Strategic & capital — CEO/Leadership Change | Big Problem or Big Opportunity (mandate unknown) | Emma Delaney appointed CEO, effective September 1, 2026 (press release April 20, 2026 — Batch 4). Background: bp senior leadership, "transformation, portfolio development, and sustainable value creation." Alfred Stern (who launched eMotion September 2023) departs August 31, 2026. No corroborating mandate signals yet. | September 1, 2026 (effective) |
| Retail Fuel CPO archetype: app quality damaging consumer brand + fleet card integration lagging | 5. Archetype-specific | Big Problem (app/brand damage); Big Problem (fleet card integration AT-only) | Secondary archetype Retail Fuel CPO fires on both conditions: (1) 2.48★ / 83% 1★ app is actively damaging the forecourt brand across all 4 markets; (2) ROUTEX fleet card + FleetFlex exists in AT only — HU, SK, RO have no localized B2B EV product (Batch 2, 3). | Ongoing |
| Loyalty / Ecosystem Integration Gap — OMV Hungary | 8. Emerging revenue | Big Missed Opportunity — 1M+ loyalty users cannot be reached via EV charging | OMV Hungary explicitly named in catalogue. MyStation app (`com.comarch.clm.mobileapp.omvhu`, Comarch CRM) has 1M+ active users (Capital Market Story May 2025, Batch 5). Zero integration with eMotion charging app (`com.hastobe.omv`) confirmed — separate apps, separate accounts, no shared billing, no loyalty points from charging. Points-from-ROUTEX explicitly excluded from MyStation accumulation (Batch 2). | Q1 2026 (confirmed from corpus) |

---

### Latent triggers (monitoring)

| Trigger | What would activate it |
|---------|----------------------|
| AFIR payment terminal compliance | A regulatory enforcement notice for any of OMV's 4 active markets (AT/HU/SK/RO) citing non-compliant DC charger payment terminals; or an audit report from OMV or a peer naming specific stations as non-compliant |
| CPMS contract renewal window | Job posting with responsibilities including "CPMS platform evaluation," "EV charging technology vendor management," or "charging platform RFP"; or a vendor press release announcing a be.ENERGISED contract extension with OMV; or absence of bug fixes through late 2026 (indicating the platform investment question is not being resolved pre-renewal) |
| Oil Major forcing event (group-level) | Named JV partner refusing to deploy be.ENERGISED; a B2B client loss formally attributed to eMotion platform failure; or a regulatory requirement that be.ENERGISED cannot meet in any of OMV's operating markets |
| CEO/Leadership mandate direction | Delaney's first public strategy statement (expected Q4 2026) — EV charging named as a growth priority (activates as combined High-urgency signal) or not named (activates cost discipline / deprioritization risk) |
| OMV Petrom / RO fragmentation consolidation decision | Any announcement from OMV Petrom grouping Renovatio, Petrom Electric, and eMotion under a single brand or app; or a Petrom-level IT procurement announcement naming a unified EV platform; or a leadership statement about Romanian charging consolidation |
| Concession SLA Exposure (CNAIR RO) | Network growth past ≈2,000 CPs on CNAIR concession with no SLA/uptime disclosure; or a regulatory notice from CNAIR citing SLA breach |

---

### Trigger stacks → shift hypotheses

---

**Stack A — Structural vendor risk × visible operational failure → CPMS quality remediation or replacement decision**

**Named triggers in stack:**
- Has-to-be → ChargePoint be.ENERGISED acquisition risk (Section 1): strategic direction now follows a US-HQ'd company with competing priorities; European white-label CPO investment trajectory is structurally weakening
- App Store Quality Deterioration (Section 7): 18-month unfixed iOS bug and 8-month unfixed Android bug are the observable symptom of reduced platform investment at the vendor layer

**Load-bearing test applied:** Both triggers are load-bearing. Without the vendor risk, the unfixed bugs look like a fixable deployment problem — invest in the OMV client layer and move on. With the vendor risk, the prognosis is that fix cycles will remain slow and platform investment will continue to decline, making the same problem recur. Without the operational quality evidence, the vendor risk is abstract — a strategic concern with no current proof point. Together, they establish: the platform is failing now AND the structural incentive to fix it from the vendor side is absent.

Supporting triggers (not load-bearing in the stack, but confirming): Network Reliability / Session Failures (Section 7) confirms the failures are not limited to onboarding — they extend to the core charging session. ChargePoint layoffs (Section 6) corroborate the reduced vendor investment prognosis.

**Causal mechanism specific to OMV's state:** OMV deployed be.ENERGISED in late 2023 as a procured white-label platform to support a fast multi-market rollout. The app bugs that emerged in late 2024 (iOS) and mid-2025 (Android) sit in OMV's customised client build — they are OMV-specific, not platform-wide. Fixing them requires either (a) OMV's own engineering team to patch the client build, or (b) ChargePoint's be.ENERGISED team to prioritise OMV's fixes. The 18-month non-resolution suggests both paths have failed: OMV lacks the internal capacity or organisational process to manage the client build, and ChargePoint's European white-label engineering capacity has shrunk following the 2023–2024 layoffs. The result is a platform that is contractually operational but functionally defective — and the structural conditions that produced this outcome will not self-correct under the current vendor relationship.

**Shift name:** CPMS quality remediation or replacement decision, 2026–2028 contract renewal window

**Timing anchor:** CPMS contract renewal window (Latent trigger, Section 3) — be.ENERGISED contract established late 2023; 3–5 year term standard → renewal discussion window 2025–2026; decision window 2026–2028. Anchor is the structural contract term, not a confirmed observable. Combined with CEO/Leadership Change (September 2026) which forces a strategy review at the same time.

**Confidence: Medium**
- What would raise it: A job posting at OMV referencing CPMS evaluation or platform vendor review responsibilities; continued absence of app bug fixes through Q3 2026; any be.ENERGISED contract renewal news (press release, LinkedIn) naming OMV
- What would lower it: OMV deploys a fix for the iOS card-add bug by Q3 2026, demonstrating the client-layer issue is being resolved; ChargePoint announces renewed European white-label investment commitment; OMV hires a dedicated EV app engineering team

---

**Stack B — CEO transition × stage transition platform strain → EV platform investment decision or deprioritization, Q4 2026**

**Named triggers in stack:**
- CEO/Leadership Change (Section 6): Emma Delaney (bp background) starts September 1, 2026; first strategy review expected Q4 2026; incumbent CEO Alfred Stern (who launched eMotion) departs
- Stage 2→3 multi-market platform strain (Section 4): OMV's AT B2B model (FleetFlex, E-Mobility Card, Office, Depot) is proven but not replicated in HU/SK/RO; the decision to scale B2B EV revenue across 4 markets requires explicit CPMS capability that the current architecture does not deliver

**Load-bearing test applied:** Both triggers are load-bearing. Without the CEO transition, the B2B platform gap has already existed for 1+ year without triggering a major investment decision — organizations absorb known gaps unless a forcing event creates decision urgency. The CEO transition IS that forcing event: Delaney will conduct a strategy review of every material initiative she inherits, including eMotion. Without the stage transition strain, the CEO transition is strategically open — the mandate could go in any direction. The B2B scaling gap gives the strategy review a concrete, investment-grade decision to evaluate: is the current CPMS architecture capable of delivering the revenue model OMV has proven in Austria across four other markets?

Supporting triggers (not load-bearing): App quality (Section 7) provides Delaney with operational evidence that platform investment is overdue. The Retail Fuel CPO archetype trigger (brand damage + fleet card gap) gives the same decision a consumer brand framing.

**Causal mechanism specific to OMV's state:** Alfred Stern launched eMotion in September 2023 with a 5,000 CP target. Three years of buildout have produced a multi-market consumer network but a single-market B2B product. The scale-up from AT-only to 5-market B2B requires either (a) significant investment in be.ENERGISED customisation for multi-country fleet billing, or (b) a platform replacement capable of native multi-market company account management. This decision has been deferred under Stern because EV is not a Group-level priority (zero press releases in 2.5 years) and van Koten's bandwidth has been consumed by the Borouge deal. Delaney's arrival resets the executive mandate: she will either endorse the 5,000 CP target and fund the platform investment required to deliver it, or she will deprioritize EV as part of a cost-discipline programme. The platform investment decision is the concrete test of whether Delaney embraces the eMotion mandate.

**Shift name:** EV platform investment authorization or deprioritization decision under incoming CEO, Q4 2026 / Q1 2027

**Timing anchor:** CEO/Leadership Change — Emma Delaney effective September 1, 2026; first public strategy statement expected Q4 2026. This is the trigger that sets the date.

**Confidence: Medium**
- What would raise it: Delaney's first statement names EV charging as a growth priority; OMV issues its first EV press release after the 2.5-year silence; van Koten's role stabilises post-Borouge close and he re-engages on eMotion platform decisions
- What would lower it: Delaney's first statement focuses on cost efficiency and transformation without naming EV; OMV announces a "strategic review" of its New Energies portfolio; van Koten departs and his successor has no EV mandate; Borouge deal consumes OMV's board and management attention through 2027

---

**Stack C — Loyalty/ecosystem gap × B2B multi-market gap → integration architecture decision at CEO strategy level**

**Named triggers in stack:**
- Loyalty/Ecosystem Integration Gap (Section 8): MyStation (Comarch) has 1M+ active users in Hungary; zero integration with eMotion charging; separate apps, separate accounts, separate billing; charging points at Hungarian OMV forecourts but no loyalty earned from charging
- Stage 2→3 multi-market B2B platform strain (Section 4): ROUTEX fleet card + FleetFlex portal operates separately from the eMotion B2C CPMS; no company account management in HU/SK/RO; OMV's competitive moat (single card for fuel + EV + tolls + assistance) is not accessible to eMotion app users outside Austria

**Load-bearing test applied:** Both triggers are load-bearing. Without the loyalty gap, the B2B gap is a standard Stage 2→3 capability build — solvable through be.ENERGISED's enterprise fleet billing module or a configuration investment. The loyalty gap is what changes the nature of the decision: OMV has a 1M-user base that it cannot connect to its EV charging product at all. Without the B2B gap, the loyalty integration is a Comarch API project, not a CPMS-level decision. The B2B gap is what makes this platform-level — multi-country company account management and fleet billing across 4 markets requires the CPMS to be the integration hub, not just a session management tool.

**Causal mechanism specific to OMV's state:** OMV's competitive advantage in CEE is the combination of petrol station convenience + MyStation loyalty + ROUTEX fleet breadth. None of these assets are accessible through the eMotion app: a loyal MyStation customer in Hungary earns no points from charging; a ROUTEX fleet customer outside Austria has no EV product; an eMotion app user cannot see their fuel loyalty balance or earn points. The three-app architecture (eMotion for charging, MyStation for loyalty, ROUTEX portal for fleet) is the current state. The strategic play — the one that justifies the 5,000 CP investment as a sustainable business rather than a cost centre — is converging these three into a single customer experience. This requires a platform architecture capable of acting as an integration hub: billing APIs to ROUTEX, loyalty APIs to Comarch, company account management across 5 markets. It is a different and larger decision than Stack A (fix the broken app) or Stack B (authorize the investment). It is the decision that would make OMV a platform-first CPO rather than a charger-with-an-app CPO.

**Shift name:** OMV integration architecture decision (loyalty + fleet + charging convergence), contingent on Q4 2026 CEO strategy endorsement

**Timing anchor:** CEO/Leadership Change — same anchor as Stack B; Delaney's strategy statement (Q4 2026) is the event at which an integration mandate becomes fundable. Without CEO endorsement, the gap can be observed indefinitely.

**Confidence: Low-Medium**
- What would raise it: Delaney frames eMotion in terms of "integrated customer experience" or "single digital journey across OMV touchpoints"; a job posting for an EV digital integration or loyalty-charging convergence role; any announcement linking MyStation and eMotion (even a press announcement about "future plans")
- What would lower it: Comarch (the MyStation vendor) independently builds an EV charging integration module for MyStation; OMV divests or partners out its EV business rather than integrating it; the CEO strategy statement treats EV and retail loyalty as separate workstreams with no integration intention

---

### No-stack verdict

Active triggers that did not compound into the stacks above:

**Retail Fuel CPO archetype triggers (fleet card lagging outside AT; app damaging consumer brand):** These are real Big Problem signals but they describe the same decision space as Stack A and Stack B from a different angle — they do not add a separate compounding shift. A fleet card gap outside Austria is a component of the Stack C integration problem; app brand damage is a component of the Stack A remediation problem. Including them as a separate stack would restate the same underlying decision without adding a new forcing mechanism. Carried as supporting context in Stacks A and C.

**Network Reliability / Session Failures:** Confirms the platform quality problem is not limited to onboarding; supports Stack A. Does not on its own point at a distinct shift — it is a severity amplifier for the same CPMS quality remediation decision. Not a separate stack.

**ChargePoint layoffs:** Corroborates the vendor risk in Stack A. Not a separate load-bearing shift — it is a structural condition that makes the Stack A prognosis more likely to persist.

---

### Feeds to Synthesis

*Proposals for Synthesis handoff text — not auto-applied. Integrate on final compression pass after Sales Analysis has run.*

**Proposed Trigger field:**
"be.ENERGISED contract renewal window (2026–2028) coinciding with CEO transition (September 2026) — either event alone is absorable; together they create a mandatory platform investment decision under a new mandate. The specific trigger to watch: Emma Delaney's first public EV strategy statement (expected Q4 2026)."

**Proposed revision to `Where this is going` paragraph (additive — existing text remains valid; propose appending):**
"The deeper strategic question — not visible from app reviews — is whether OMV's competitive advantage (1,700 petrol stations + 1M+ MyStation loyal customers + ROUTEX fleet card breadth) can ever be expressed through an EV charging product that is architecturally disconnected from all three of those assets. Closing the loyalty and fleet integration gaps is a larger and more strategically valuable decision than fixing the broken registration funnel. Whether Delaney endorses that integration mandate in her Q4 2026 strategy statement is the single most important near-term signal for whether OMV becomes a platform-serious CPO or a charger-with-an-app that underperforms its physical estate."

---

## Sales Analysis

### CPMS gate

OMV is a confirmed ChargePoint be.ENERGISED client — white-label deployment, `com.hastobe.omv` Tier 1 confirmation. Switching means a full vendor migration and app rebuild: the eMotion iOS and Android apps are be.ENERGISED client builds; a new platform requires rebuilding against a new SDK or API across both stores. Hubject eRoaming re-integration is standard — OCPI 2.3 certified, reconnecting via Hubject is a documented path, not a novel project. Hardware re-integration across 1,200+ CPs is low-risk — all hardware is post-2023 current-generation DC, OCPP-compliant throughout; no legacy hardware layer to re-certify. No previous CPMS migration has been demonstrated; the organisation has no known migration capability to build on. Critically: the ancillary stack (ROUTEX fleet billing, Comarch loyalty, FleetFlex portal) is not currently integrated with the CPMS — migration does not require reconnecting these systems, removing a layer of integration complexity that would otherwise compound. Threshold tier: High. A candidate must clear with T1 or strong T2 evidence and magnitude at or above the ≈15% rule of thumb.

---

### Candidate evaluation table

| Candidate | Source | Categories | Platform-specific | Scales | Magnitude (denominator + ≈15% rule) | Evidence | Verdict |
|-----------|--------|-----------|-------------------|--------|-------------------------------------|----------|---------|
| App registration / consumer onboarding failure (iOS card-add false error 18+ months; Android "continue" greyed out 8+ months) | Business Gaps (row 1); App reviews (50+ registration-specific complaints across 4 markets); Triggering Events Active (App Store Quality Deterioration) | Big Problem | Yes — iOS bug is in be.ENERGISED payment pre-auth API for `com.hastobe.omv`; Android bug is in OMV's client build on the be.ENERGISED SDK; both fixes require either OMV's client-layer engineering (absent capacity signal) or ChargePoint's be.ENERGISED team (reduced capacity post-layoffs) | Yes — compounds with every new consumer attempting registration across a growing 1,200+ CP network; 5,000 CP target accelerates the problem | All new B2C subscriber acquisition across 4 markets blocked or severely impaired since late 2024 (iOS) / mid-2025 (Android). Denominator: net-new subscription conversion revenue (the subscription model at €3.99/mo AT/SK, 4,499 HUF/mo HU, 11.98 RON/mo RO requires app registration). Estimated >15% of forward subscription revenue pool blocked at the top of the funnel for 18+ months | T1 mechanism (directly documented across 211 reviews, specific bug types named with dates, confirmed unfixed across review periods); T2 magnitude (loss mechanism T1; exact revenue impact T2 estimated) | **Clears** |
| B2B multi-market gap (no fleet product outside Austria; CPMS contractually B2C-only in 4 markets) | Business Gaps (row 3); Stage 2→3 stress map (B2B multi-account billing breaking point); Triggering Events Active (Stage 2→3 platform strain; Retail Fuel CPO archetype triggers) | Big Missed Opportunity | Yes — AT B2B model (E-Mobility Card, Office, Depot, FleetFlex portal) operates separately from CPMS via bilateral ROUTEX connection (AT-only, manually built). Replicating in HU/SK/RO requires the CPMS to serve as the integration layer for multi-market company accounts, per-country VAT invoice logic, fleet DLM, and company-level billing. Current OMV deployment is contractually B2C-only (GTC §4.1 AT). A CPMS with native multi-market enterprise fleet billing would unlock this without the AT-only manual approach | Yes — revenue gap grows proportionally with HU/SK/RO network deployment | Denominator: OMV's 5-market B2B EV revenue potential. AT B2B model is generating revenue (three named products, a named portal); HU/SK/RO equivalent = €0. The ROUTEX fleet card covers 21,000+ locations in 34 EU countries — the corporate fleet client base exists; the CPMS billing layer to serve them does not. Estimated >15% of forward B2B EV revenue (4 of 5 markets have zero B2B EV product) | T1 mechanism (AT products confirmed; HU/SK/RO B2B absence confirmed from corpus); T2 magnitude; commercial maturity confirmed (OMV's AT model + peer oil majors TotalEnergies/PKN ORLEN running multi-market fleet card + EV billing) | **Clears** |
| Vendor acquisition risk — has·to·be on known-distressed vendor list (ChargePoint acquisition + layoffs 2023–2024) | Triggering Events Active (Section 1 Vendor reliability; Section 6 ChargePoint layoffs); cpms_platforms.md known issues | Big Risk | Yes — 100% of OMV eMotion consumer platform across 4 live markets runs on be.ENERGISED; no alternative platform layer exists | Yes — risk concentration grows as OMV scales toward 5,000 CPs on a single vendor | Denominator: 100% of eMotion B2C charging operations. has·to·be is named on the known-distressed vendor list (acquired by ChargePoint, strategy change post-acquisition). ChargePoint had multiple layoff rounds 2023–2024. OMV's 18-month unfixed bugs are consistent with — and coincide with — reduced vendor engineering capacity. Platform roadmap trajectory for European white-label CPO segment is structurally uncertain. Magnitude >15% by definition: 100% of the eMotion platform is affected | T1 mechanism (has·to·be on known-distressed vendor list activates T1 probability); T1 exposure (100% CPMS dependency confirmed Tier 1 via app package); T2 causality link between ChargePoint layoffs and slow fix cycles (contemporaneous; no direct statement linking the two) | **Clears** |
| Pre-authorization hold architecture (150 RON / 15,000 HUF per failed session attempt; 4–5 day release) | Business Gaps (row 2); App reviews (20+ RO/HU); Reddit HU; RO GTC §7 disclosure (March/July 2025) | Big Problem | Partially — be.ENERGISED pre-auth is a platform-level architecture; other be.ENERGISED clients configure different amounts. Whether the per-attempt multiplication (not per-session — this appears to be OMV's specific configuration) can be changed without a CPMS replacement is not confirmed in corpus. The top-up / post-pay model used by Renovatio (which reviewers explicitly prefer) requires a different payment flow architecture — unclear if this is configurable on be.ENERGISED or requires platform change | Yes | T1 mechanism confirmed; magnitude T2. But configurability uncertainty means this may be an OMV configuration choice, not a CPMS constraint — making it not exclusively a CPMS switch driver | T1 mechanism; T2 magnitude; configurability uncertain from corpus | **Conditional on [confirmed that per-attempt pre-auth multiplication cannot be configured to post-pay on be.ENERGISED without a CPMS change]** |
| Loyalty / ecosystem integration gap (MyStation 1M+ HU active users; zero connection to eMotion charging) | Triggering Events Active (Section 8); Geographic Intelligence Hungary; Company Profile; Ancillary Tech Stack | Big Missed Opportunity | Partially — the absence of a Comarch/MyStation → be.ENERGISED API integration is a CPMS API capability gap. A CPMS with better API extensibility or an existing Comarch integration module would lower the build cost. But the gap also reflects a business decision to treat charging and loyalty as separate products. | Conditional — depends on CEO mandate | Denominator: 1M+ MyStation active HU users; none earning loyalty points from EV charging. Strategic magnitude: OMV's differentiation over generic CPOs is forecourt convenience + loyalty — if loyalty doesn't work in EV, OMV competes on price alone (where it is top tier in every market). Revenue magnitude: T2 — difficult to quantify as >15% directly (loyalty generates retention, not direct charging revenue). Archetype note: framework specifically flags loyalty/ecosystem integration as the priority lever for Oil Major archetype | T1 mechanism (MyStation confirmed Comarch T1; zero integration with eMotion confirmed T1); T2 magnitude; commercial maturity T2 (ORLEN VITAY is the peer model in CEE, currently broken) | **Conditional on [CEO strategy endorsement Q4 2026 naming integrated CEE customer experience as a priority]** |

*Competitive signals checked: MOL Plugee (HU), Eldrive (RO), Shell (AT), and Renovatio e-charge (OMV's own RO sub-brand) are all cited in app reviews as preferred alternatives to OMV eMotion. These competitive signals were assessed and confirmed the magnitude of existing candidates (Candidates 1 and 2) rather than producing independent clearing candidates — the competitors' advantage is in execution (working pre-auth, working onboarding), not in a structural capability the research corpus shows them gaining commercially at OMV's expense.*

---

### Archetype filter applied

**Primary: Oil Major CPO.** "What triggers a switch: At group level: a forcing event — a JV partner refusing to adopt the group platform, a major B2B client loss attributed to platform failure, or a regulatory requirement the current platform cannot meet." The framework filter for this archetype: "Loyalty / ecosystem app integration is the priority lever, not the core CPMS."

**Secondary: Retail Fuel CPO.** "What triggers a switch: Fleet card integration failing or lagging behind competitors (a rival offering a cleaner B2B fleet product with better EV coverage is an existential threat to their fleet book). A white-label app that performs poorly damages the retail brand."

Applying the dominant archetype (Oil Major) as primary:

- **B2B multi-market gap (Candidate 3): Priority elevated to Lead.** Both archetypes independently make this the Lead entry. Retail Fuel: "Fleet card integration is existential." Oil Major: the strategic value of the CPMS is "the ability to offer operational expertise and a consolidated platform" — multi-market B2B billing capability is the platform capability that operationalises the AT B2B model across 4 other markets. The pitch is not "your app is broken" but "your platform cannot deliver your proven B2B mandate at scale."

- **Vendor acquisition risk (Candidate 4): Remains Secondary.** This provides the structural context for why the current platform cannot be trusted to deliver the B2B mandate, but it is not the entry point. The Oil Major archetype does not switch on vendor distress alone — it switches on a forcing event. The vendor risk is the condition that makes other forcing events more likely to convert.

- **App registration failure (Candidate 1): Secondary, not Lead.** Retail Fuel archetype elevates app quality (damages retail brand), but the Oil Major archetype says this failure mode has been absorbed for 18+ months without a switch. As a standalone pitch ("your app is broken"), it is insufficient. Combined with Candidate 4 (the vendor is structurally less likely to fix it), it becomes compelling supporting evidence for the B2B mandate conversation.

- **Loyalty/ecosystem integration (Candidate 5, Conditional): Elevated in strategic priority.** The Oil Major framework note says loyalty integration is the priority lever. This Conditional candidate should be positioned as the longer-horizon strategic conversation — the integration architecture that justifies the 5,000 CP investment as a platform business rather than a charger-with-an-app. Not the opening pitch, but the strategic horizon the opening pitch points toward.

- **Pre-auth architecture (Candidate 2, Conditional): No change.** Remains Conditional — real and damaging, but may be a configuration issue resolved without a switch.

---

### Ranked entry points

1. **B2B multi-market scaling gap** — Big Missed Opportunity. OMV has a commercially proven AT B2B EV model (E-Mobility Card + FleetFlex + Office + Depot Charging) generating revenue today — but the current CPMS deployment is contractually B2C-only across 4 other markets, with no multi-market company account management, no per-country VAT invoice logic, and no fleet DLM capability. The ROUTEX fleet card client base (21,000+ locations, 34 EU countries) exists; the CPMS layer to serve those clients in HU, SK, RO, and CZ does not. This is a revenue gap measured in 4 of 5 target markets, not a feature request.
   - **Trigger / confirming signal:** Delaney's Q4 2026 strategy statement names EV charging as a growth priority; OR any HU/SK/RO B2B EV product launch announcement (signals OMV is investing in replication); OR a job posting at OMV for a multi-market fleet billing or EV B2B product role.
   - **Signal timing:** Near-term — CEO transition September 2026; first strategy statement expected Q4 2026.
   - **Candidate priority:** Lead.

2. **Vendor acquisition risk (be.ENERGISED / has·to·be on known-distressed list)** — Big Risk. has·to·be is named on the framework's known-distressed vendor list (acquired by ChargePoint, strategy change post-acquisition). ChargePoint's 2023–2024 layoffs directly affect the European white-label engineering capacity. OMV's 18-month and 8-month unfixed platform bugs are contemporaneous with this reduction and consistent with reduced vendor capacity — not with a vendor actively investing in client-layer quality. The structural prognosis: the conditions that produced the current unfixed bugs will not self-correct under the current vendor relationship.
   - **Trigger / confirming signal:** Any ChargePoint announcement reducing European white-label CPO investment; continued absence of OMV app bug fixes through Q3 2026 (demonstrating the vendor fix cycle remains broken); OR, conversely, a fix deployed by Q3 2026 would lower this candidate's urgency.
   - **Signal timing:** Near-term — each quarter of continued non-resolution strengthens the signal; CEO strategy review Q4 2026 is the conversion moment.
   - **Candidate priority:** Secondary.

3. **App registration / consumer onboarding failure** — Big Problem. The iOS card-add bug (18+ months unfixed) and Android "continue" greyed-out bug (8+ months) are the most visible operational failures in the OMV eMotion corpus — 83% of 211 reviews are 1-star, with registration as the leading complaint theme. Every net-new consumer who downloads the app and cannot create an account is a subscription conversion failure. At a 1,200+ CP network scaling to 5,000, the per-user acquisition cost of a broken registration funnel grows monotonically with deployment. The Retail Fuel archetype specifically flags app performance as a trigger: the eMotion app is the face of OMV's forecourt brand across 4 markets.
   - **Trigger / confirming signal:** Any OMV eMotion app update that fixes the iOS card-add bug (raising the question "what changed and why now"); OR continued 1-star review accumulation through Q3 2026; OR Delaney's team explicitly citing the app quality as a strategic investment area.
   - **Signal timing:** Near-term — evidence is current and ongoing; resolution is observable.
   - **Candidate priority:** Secondary.

4. **Pre-authorization hold architecture (per-attempt, not per-session)** — Big Problem (Conditional). The 150 RON / 15,000 HUF blocked per failed session attempt for 4–5 working days is confirmed by GTC, reviews, and Reddit — it is the primary driver of brand damage in RO and HU. Whether this can be configured away on be.ENERGISED (to a top-up or post-pay model) or requires a CPMS architecture change is not confirmed in the corpus. If it is a CPMS-level constraint: this activates as a separate, independent Big Problem candidate with clear platform-specificity.
   - **Trigger / confirming signal:** OMV deploys a pre-auth fix on be.ENERGISED (confirms configurability, lowers platform-switch urgency here); OR OMV fails to deploy a fix despite direct user pressure (confirms CPMS-level constraint, strengthens the candidate). A ChargePoint be.ENERGISED product announcement specifically removing per-attempt blocking would also resolve this.
   - **Signal timing:** Near-term — current operational state; observable from app reviews within months.
   - **Candidate priority:** Secondary (if confirmed platform-level, escalates to co-Lead alongside the B2B gap).

5. **Loyalty / ecosystem integration gap (MyStation 1M+ HU users, zero EV charging integration)** — Big Missed Opportunity (Conditional). The Oil Major archetype framework specifically flags loyalty/ecosystem integration as the priority lever — this is the strategic conversation about whether OMV builds a platform-first CPO or remains a charger-with-an-app that underperforms its physical estate. The 1M+ MyStation active users in Hungary are the addressable loyalty base that competes with ORLEN's VITAY model (5M users in Poland). Without a CPMS API layer connecting Comarch loyalty to EV charging sessions, OMV cannot express its core forecourt advantage — combined fuel+shopping+EV loyalty — in its charging product.
   - **Trigger / confirming signal:** Delaney's Q4 2026 strategy statement frames eMotion as an "integrated customer experience" across OMV touchpoints; OR any public announcement linking MyStation and eMotion (even a future-roadmap press release); OR a job posting for an EV digital integration or loyalty-charging convergence role at OMV.
   - **Signal timing:** Medium-term — requires CEO strategy endorsement; timing anchor is Q4 2026.
   - **Candidate priority:** Tertiary (but archetype-elevated — this is the strategic horizon, not the opening pitch).

---

### Verdict

**Medium** — OMV has three T1-mechanised clearing candidates (B2B multi-market gap, vendor acquisition risk, app registration failure) and two conditional candidates, but the Oil Major archetype requires a forcing event to convert observed platform pain into an investment decision, and the Delaney CEO transition (September 1, 2026) is that forcing event — making OMV a Q4 2026 escalation candidate, not a current campaign target.

---

### Feeds to Synthesis

*Proposals for Synthesis handoff — not auto-applied. Integrate on final compression pass.*

- **Synthesis `Sales priority:` candidate:** Medium — confirmed by framework: three Clearing candidates with T1 mechanisms and T2 magnitude, Oil Major forcing-event requirement, Delaney CEO transition (Q4 2026) as the timing gate for conversion.
- **Synthesis `Entry point if pursued:` candidate:** B2B multi-market scaling gap — OMV has proven the AT B2B EV model (E-Mobility Card + FleetFlex) but the current CPMS is contractually B2C-only; the conversation is not "fix your broken app" but "what CPMS can deliver your proven AT B2B model across HU, SK, and RO?" Combine with vendor risk narrative: the platform that failed to fix your registration bug in 18 months is the same platform you'd be trusting to run multi-market fleet billing at 5,000 CPs.
- **Synthesis `Adjacent leads:` candidate:** OMV Petrom (Bucharest) — three-brand RO fragmentation (≈1,900 combined CPs across Renovatio + Petrom Electric + eMotion) is a separate and larger-scale platform procurement decision at the OMV Petrom subsidiary level, not the Group eMotion contract. OMV Česká republika — new market deployment (PRE partnership, 168 CPs by 2030) is a CPMS onboarding touchpoint, likely an extension of the existing be.ENERGISED contract but worth monitoring as a re-evaluation window.

---

## Research Gaps & Unresolved

### Scrape failures (Insufficient research performed — Scrape failure)

| Page | URL / description | What it would have covered | Conclusions affected |
|------|------------------|---------------------------|---------------------|
| #33 (Batch 3) | AT fleet card online order page — partial JS-rendered scrape | AT E-Mobility Card online ordering mechanism; may have contained fleet onboarding flow details or ROUTEX card linking process | No conclusions depend on the ordering mechanism — the fleet product's existence and scope were confirmed from the B2B product pages. No analysis claims revised. |

The gaps below are research scope gaps (pages not in corpus), not scrape failures.

### Research gaps (Insufficient research performed — Research gap)

| Step | What it would have covered |
|------|---------------------------|
| Careers page (omv.com/en/career — in corpus at 6,950 chars, not read) | Job titles and descriptions referencing CPMS platform names; headcount signals; tech stack keywords (e.g. be.ENERGISED, OCPP developer roles, platform architect). Low priority given Tier 1 CPMS confirmation already achieved. |
| SK cross-border pricing page (omv.sk/sk/mobilita/omv-emotion/cezhranicna-platba) | Exact pricing for SK customers using AT/HU network. Not in corpus; linked from SK eMotion page but not scraped. |
| HU eMotion-specific page | No dedicated HU eMotion charging page in corpus (unlike AT/SK/RO which each have one). HU charging experience/tariffs may differ from AT; unknown from available data. |
| OMV.com/portfolio/cards/e-mobility (in corpus at 4,247 chars, not read in Batch 1) | Group-level fleet card / e-mobility card description — may contain detail beyond what AT B2B pages showed. Low impact given extensive B2B coverage in Batch 3. |
| OMV Petrom charging pages (Romania — dedicated Renovatio/Petrom Electric pages) | Renovatio e-charge and Petrom Electric brand pages — not in corpus. Would clarify the three-brand architecture from OMV Petrom's own perspective. Not scraped as the research scope was limited to eMotion. |
| be.ENERGISED vendor case study naming OMV | Not found via SERP or corpus. Would provide Tier 1 confirmation from vendor side (currently confirmed from app package only). |
| Borouge Group International closing date and regulatory status | Not confirmed in corpus beyond "announced / pending." Affects executive bandwidth timeline and urgency of the CEO-transition window for sales timing. |

---

## Post-analysis brief

### Domain knowledge updates

**markets.md — Austria section needed:**
- Austria EV market data from Eleport (2025): 60,651 EVs sold (+35.9%), EV market share 21.3%. Country median fast-charging price: €0.59/kWh. 21 DC operators with 100+ connectors (most fragmented market in CEE). 4 major CPOs have ad-hoc price ceiling of exactly €0.79/kWh. Lidl and Wien Energie are cheapest at €0.39 app, Wien Energie membership at €0.30/kWh.
- Competitive landscape: Smatrics (largest AT network), Wien Energie (cheapest HPC), IONITY, Fastned, Aral pulse, Shell, EnBW all present. OMV is in the upper pricing tier.
- Austria has one of the highest regional utility fragmentation rates: 7 Stadtwerke (Wien Energie, Salzburg AG, IKB, Linz AG, EVN, Energie Steiermark, KELAG) each running own charging networks.

**markets.md — Hungary section (update):**
- 2025 EV sales: 11,002 (+28.5%), market share 8.5%. Country median fast-charging: €0.53/kWh. Widest price range in Europe: 90–309 HUF/kWh (3.4×). EP Charger and stormi are cheapest at 90–100 HUF.
- MOL Plugee is the most expensive CPO (309 HUF ad-hoc); OMV is 2nd (299 HUF). Shell at 289 HUF.
- MyStation app by Comarch — note this as a known CRM platform in HU.

**markets.md — Slovakia section (update):**
- 2025 EV sales: 4,377 (+96.5%), market share 4.7%. SK median: €0.54/kWh. Lidl and ejoin GO are cheapest at €0.39–0.45/kWh. Government publishes weekly average charging prices (rare EU transparency). 5 of 9 top CPOs offer subscription plans.

**markets.md — Romania section (update):**
- 2025 EV sales: 8,849 (-9.7%), EV market share fell to 5.6%. Romania is the only OMV research market where EV adoption is going backwards. Country median: €0.49/kWh (≈2.45 RON). DC-heavy infrastructure: ≈42% of public CPs are DC (vs. EU average ≈20%) — market leapfrogged AC. OMV Petrom dominates: ≈1,900 combined CPs from three brands, by far the largest CPO group. Be Charge (Enel Group) is the most expensive at 4.23 RON/kWh.

**cpms_platforms.md — be.ENERGISED (update):**
- OMV eMotion deployment should be added as a named client with documented issues: pre-auth blocking (150 RON / 15,000 HUF per failed attempt, 4–5 day release), billing overbilling (≈30% measured via Tesla vehicle app), Android "continue" button registration bug (8+ months unfixed), iOS card-add "internet connection" false error (18+ months), Revolut card rejection with misleading error message, session start failure at OCPP level. Multiple markets affected: AT, HU, SK, RO. This is one of the lowest-performing documented be.ENERGISED deployments in the research corpus.
- Note: OMV Petrom's Renovatio e-charge and Petrom Electric brands appear to run different CPMS stacks (not identified). The RO user in reviews explicitly contrasts Renovatio's "top-up first, charge after" model favourably vs. eMotion's pre-auth model — this is a different payment architecture, suggesting a different CPMS.

### Reasoning corrections

1. **OMV Petrom "1,000 CPs" claim nearly treated as inconsistent with the Capital Market Story.** The logos-pres.md (May 2025) figure of "about 1,000 charging points for OMV Petrom" appeared to contradict the Capital Market Story's 804 CPs (Dec 2024). The Eleport report (Batch 8) resolved this cleanly: OMV Petrom operates THREE separate charging brands in Romania with a combined ≈1,900 CPs. The "1,000" likely refers to Renovatio alone (the largest single brand); the 804 is the eMotion-branded group total. These are not in conflict — they measure different things. Lesson: "OMV Petrom" and "OMV eMotion network" are not coterminous. Check whether a claim is about the sub-brand or the parent entity's total footprint before flagging a conflict.

2. **Nearly concluded that the 2,000→5,000 target upgrade had no explanation in the corpus.** Batch 4 analysis (Sep 2023 press release vs. website) identified the target had changed but no press release existed. The explanation emerged only in Batch 7 from the CEE Chamber LinkedIn and Hungary Today articles — both citing EU co-financing for 400+ CPs. The lesson: absence of a press release does not mean absence of an explanation. Third-party sources (LinkedIn posts, regional news articles) sometimes carry the explanation that the company itself hasn't announced.

3. **Nearly assigned be.ENERGISED issues in the app entirely to OMV's own product layer.** The pre-auth blocking and billing accuracy issues are partially OMV's customisation choices and partially be.ENERGISED platform defaults. The distinction matters: the Android "continue" button bug is clearly OMV's client build (it affects only `com.hastobe.omv`); the pre-auth 150 RON per attempt is a be.ENERGISED platform behaviour that OMV has chosen not to customise away (other CPOs on be.ENERGISED use different pre-auth amounts or the top-up model). Separating platform defaults from client choices is important for the sales pitch: some issues are solvable through better configuration on the same platform; others require a platform change.

---

### Analysis review findings — resolved (2026-05-20, pass 1)

*Applied during run of analysis_review_framework.md Stage 1–3 review, first pass. All six findings were direct corrections — no deferrals required.*

- **Resolved — F1:** Added two High-relevance gaps (broken consumer onboarding funnel; no acceptable pre-auth UX) as explicit bullets in Synthesis "What's absent." Both were previously in CPMS paragraph only; framework requires high-relevance Business Gaps to appear explicitly in "What's absent."

- **Resolved — F2:** Added date qualifier to pricing block in Business Model (own-network CPO section) and to per-market pricing in Geographic Intelligence. Source: ~Q1 2026 corpus scrape / Eleport March 2026 price report. Pricing figures are within 12-month freshness window at analysis date but must be re-verified for use after H2 2027.

- **Resolved — F3:** Added "as of Q1 2026 corpus; continuity under Delaney unconfirmed" qualifier to van Koten EVP role in Company Profile and Leadership table.

- **Resolved — F4:** Added explicit "(November 2024 source)" date and staleness note to Hungary network progress figure (15 locations → ≈50 CPs by end 2025). Source is 18 months before analysis date; end-2025 outcome not confirmed in corpus.

- **Resolved — F5:** Added deal status characterization to Borouge entry in Strategic Context ("announced, closing pending as of corpus"). Closing date not confirmed in corpus.

- **Resolved — F6:** Replaced unsourced specific "million EV customers by 2030" figure in Synthesis "Where this is going" with corpus-grounded equivalent ("grow its consumer EV base to the scale that justifies the 5,000 CP network"). The original figure was rhetorical but unanchored in the corpus.

*Additional freshness fixes applied in same pass: 2025 annual revenue/headcount figures dated; ROUTEX network size dated; MyStation user count dated; HDV hub count flagged as 20 months stale.*

---

### Analysis review findings — resolved (2026-05-28, pass 2)

*Applied during second run of analysis_review_framework.md following completion of Triggering Events (Step 8.5) and Sales Analysis (Step 8.6) sections. All findings resolved inline.*

- **Resolved — Stage 1a F4 (CRITICAL):** `run-triggering-events` and `run-sales-analysis` skills invoked; both sections written to analysis file between App Quality and Research Gaps.

- **Resolved — Stage 1a F1 (cosmetic):** Research notebook Research Steps Checklist updated from all `[ ]` unchecked to `[x]` complete. See notebook fix.

- **Resolved — Stage 1b F5:** Scrape failures subsection updated from "None" to include page #33 (AT fleet card online order page, partial JS-rendered) with confirmation that no analysis conclusions depend on the blocked area.

- **Resolved — Stage 1e F-1e-1:** Synthesis `Entry point if pursued` updated to include vendor risk narrative compound: "the platform that failed to fix the registration bug for 18+ months is the same platform OMV would be trusting to run multi-market fleet billing at 5,000 CPs."

- **Resolved — Stage 1e F-1e-2:** Competitive signals source noted in Sales Analysis candidate table (MOL, Eldrive, Shell, Renovatio cited as preferred alternatives; confirmed existing candidates rather than producing independent clearing candidates).

- **Resolved — Stage 2 F2a:** Synthesis "What explains" reframed: "absent QA process" → "absent remediation capability or vendor fix capacity." The bug is publicly visible (OMV knows); the non-fix signals vendor capacity constraint / client engineering gap, not a QA failure.

- **Resolved — Stage 2 F2b (reasoning correction below):** Pre-auth architecture reasoning correction recorded.

- **Resolved — Stage 3 F3a:** ROUTEX network size in Business Model dated "as of ~Q1 2026 corpus."

- **Resolved — Stage 3 F3b:** Synthesis competitive pressure pricing comparison (Wien Energie / Lidl) dated with Eleport March 2026 source qualifier.

- **Resolved — Cross-section F-CS-3:** "Loyalty-charging convergence architecture" row added to Decisions forced. This decision was present in Triggering Events Stack C and Sales Analysis Candidate 5 but absent from Decisions forced.

- **Resolved — Synthesis Trigger:** Updated from three separate triggers to the formal Triggering Events Feeds to Synthesis compound (contract renewal + CEO transition) with specific Delaney Q4 2026 statement as the observable.

- **Resolved — Synthesis "Where this is going":** Appended integration architecture paragraph from Triggering Events Feeds to Synthesis: the deeper strategic question about OMV's competitive advantage expression through an architecturally disconnected EV product.

---

### Reasoning corrections (additional — from second review pass)

4. **Pre-auth architecture nearly classified as standalone CPMS switch driver.** Sales Analysis initially included the 150 RON / 15,000 HUF per-attempt pre-auth as a Clearing Big Problem candidate. Upon examination: whether the per-attempt multiplication (not per-session) is a CPMS platform constraint or an OMV configuration choice is not confirmed in corpus. be.ENERGISED's pre-auth behaviour is a platform default, but some clients configure lower amounts. Downgraded to Conditional. Key observable for resolution: does Renovatio e-charge (OMV's RO sub-brand, documented as preferring users over eMotion for its top-up model) run on the same be.ENERGISED platform with different configuration, or on a different CPMS entirely? If Renovatio is also on be.ENERGISED but with top-up/post-pay configured, the pre-auth issue is a configuration fix, not a CPMS switch driver. If Renovatio runs on a different platform, the architectural difference confirms the CPMS constraint.
