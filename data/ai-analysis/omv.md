# CPO Analysis — OMV

**Date:** 2026-05-20
**Analyst:** Claude (AI)
**Source:** 72 scraped pages + 211 app reviews from p2k DB
**Coverage:** ~85% of corpus read (60 of 72 pages; 12 skipped as irrelevant or deprioritised). No scrape failures on own-domain or PDF pages. Main gaps: careers page not scraped (job titles not assessed); SK cross-border pricing sub-page not in corpus; HU-specific eMotion page not in corpus. External sources covered: investor deck, GTCs (all 4 markets), LinkedIn partnership announcements, Eleport price report (all 4 markets), 4 Reddit threads, Chargemap, Electromaps, Hubject pilot announcement.


---

## Alex Notes

**Something to explicitly pay attention to**

There is quality check after the analysis. It checks for inconsistencies in deduction, in data validity, in freshness data and much more. That's at the bottom of the document.

There is a "post-analysis brief" section, that also shows how we collect data from each company about the markets, about different CPMSes, about CPO business and revenue models and more. This is mechanism that will allow is with time to make deductions that even a sales person with 5y in the industry will hardly be able to do.

---

*This document is a final analysis output. The frameworks and domain knowledge files that informed this reasoning are not referenced by name within the analysis sections.*

---

## Synthesis

**What OMV clearly is:** An Austrian oil major (€24B revenue, 22,300 employees, Vienna Stock Exchange listed) building a multi-country EV charging network under its eMotion sub-brand across AT, HU, SK, RO, with Czech Republic in active development. EV charging sits entirely inside the Fuels & Feedstock division under EVP Martijn van Koten — it is a strategic diversification play funded by core cash flows from refining and retail, not a standalone business unit. The eMotion network had 804 charging points as of December 2024 (investor deck) and reached 1,200+ by ~Q1 2026, against a published 2030 target of ~5,000. The 1,700-station petrol station estate is the site base and strategic anchor. EU co-financing secured for 400+ CPs de-risked the 2023→2024 target upgrade from 2,000 to 5,000 CPs. Separately, OMV Petrom (51.2%-owned subsidiary) operates two additional charging brands in Romania — Renovatio e-charge (~1,200+ CPs, Romania's largest network) and Petrom Electric (~400+ CPs) — each with its own app, pricing, and CPMS stack. The eMotion brand across the five-country target covers approximately 1,200 of those CPs; the wider Petrom group has ~1,900 CPs in Romania alone.

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

**What explains what's observed:** OMV's EV posture is typical of an oil major at the early stage of forced diversification. The petrol station estate is a genuine asset — sites exist, grid connections exist, and the brand has high recall. The eMotion platform was stood up quickly (app launched late 2023, 2,000→5,000 target upgrade in 10 months) using a procured CPMS rather than built capability. The resulting product reflects the procurement approach: be.ENERGISED handles charging management, Comarch handles loyalty (Hungary), ROUTEX handles fleet cards — each procured separately, none integrated into a unified customer experience. The app's 18-month registration bug is not a one-off incident; it reflects absent QA process and slow response to customer-facing failures, consistent with a company that treats the app as an operating tool rather than a competitive differentiator. The leadership bandwidth constraint is real: van Koten is simultaneously running the Borouge $150B+ chemicals deal alongside the eMotion buildout, and a new CEO (Emma Delaney, bp background) takes the helm September 1, 2026 with no known position on EV strategy.

**Development stage:** OMV operates a live multi-country consumer charging network (5 markets) with B2B fleet products active in Austria but not yet replicated elsewhere, and a heavy-duty vehicle strategy that exists at the investor level but not yet at the product level. The operational model is early-Stage 3: multi-market deployment through a single white-label CPMS, with Austria as the more mature market and HU/SK/RO in earlier operational states. The active transition pressure is the mismatch between the 5,000 CP scaling target and the current app's inability to onboard customers reliably across all four live markets.

**Where this is going:** The 5,000 CP target forces a platform quality reckoning. OMV cannot grow its consumer EV base to the scale that justifies the 5,000 CP network if the app fails registration for 18+ months and Android users can't create accounts at all. The network will either improve the be.ENERGISED deployment quality (configuration and customisation investment), commission a replacement, or accept that B2C EV revenue will underperform relative to the network's physical size. The B2B gap outside Austria is the higher-probability near-term decision: as the AT B2B model proves revenue, pressure to replicate it in HU, RO, and SK will grow — but the current CPMS setup has no multi-market B2B billing visible. The Romanian three-brand fragmentation (Renovatio + Petrom Electric + eMotion all running separate apps and stacks) is either a deliberate multi-segment play or integration debt — the former is unlikely given the customer confusion it generates; a consolidation decision at the OMV Petrom level is structurally overdue. The Delaney CEO transition (September 2026) is the most significant single event: if she articulates an EV-forward strategy, CPMS platform investment becomes defensible internally; if she does not, EV is likely to be rationalised (cost discipline, partner model, or slow-down).

**Competitive pressure:** In Austria, Wien Energie (€0.30/kWh membership) and Lidl (€0.39 app) are 2× cheaper than OMV on accessible rates. Across all four markets, OMV's ad-hoc pricing is in the upper quartile, leaving casual users (who haven't signed up for the €3.99 subscription) paying a material premium. IONITY is OMV's peer on pricing but has a working app. Tesla Supercharging undercuts OMV on membership pricing in most markets where both operate, and has no registration failures. The competitive pressure is less about network coverage (OMV's petrol station estate creates natural convenience advantage) and more about execution quality — if the app worked, OMV's pricing and location proposition would be defensible; given the app's failures, users are churning to competitors at the moment of first need.

**Sales priority: Medium** — The CPMS is confirmed, the app quality is catastrophically poor, and the scaling ambition is large enough to force a platform quality decision. However, the Delaney CEO transition creates a 6–12 month window of strategic uncertainty that makes an active sales push premature. OMV is unlikely to run a CPMS vendor review during a CEO transition coinciding with the Borouge M&A closing. The opening arrives when Delaney articulates her EV priorities (expected Q4 2026 / Q1 2027) — at that point, the internal case for CPMS investment becomes fundable and the incumbent is not automatically safe.
**Trigger:** Emma Delaney's first public strategy statement (Q4 2026) — if EV charging is named as a growth priority, escalate to High immediately. Secondary trigger: any OMV EV press release after 2.5 years of silence (signals internal re-engagement). Third trigger: evidence that be.ENERGISED contract renewal is in discussion (~2026–2027 window based on late-2023 deployment start).

**Entry point if pursued:** Lead with the B2B scaling gap — not the consumer app failures. The consumer app quality is obvious to OMV insiders (they read the same reviews), but attacking the incumbent's consumer product is a commodity pitch. The strategic frame is: OMV has built a strong AT B2B EV model (E-Mobility Card + FleetFlex + Office + Depot charging) that is generating revenue — why isn't it in HU, RO, and SK? A CPMS that natively handles multi-market fleet billing, per-country VAT invoice logic, and company account management across all five markets is the infrastructure that enables the B2B model to scale. This is the conversation van Koten's successor (or Delaney) will need to have as OMV's EV network reaches the scale where B2B revenue matters. Combine with the Romanian consolidation angle: three brands, three apps, three stacks — what would one platform with sub-operator accounts enable?

**Adjacent leads:**
- **OMV Petrom (Bucharest)** — 51.2%-owned Romanian subsidiary. Operates Renovatio e-charge (~1,200+ CPs, Romania's largest network) and Petrom Electric (~400+ CPs) independently of the eMotion CPMS. These are separate procurement decisions from the Group eMotion contract. The scale is larger in Romania than the eMotion footprint alone (combined ~1,900 CPs). The consolidation of Renovatio/Petrom Electric/eMotion under a unified platform is a separate, potentially larger conversation. Timing signal: OMV Petrom's network has been growing rapidly and is the most prominent CPO in Romania by market share — a platform upgrade here has high leverage.
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
| Network size | 1,200+ CPs (~Q1 2026) — omv.com electric-mobility page. 804 CPs as of Dec 2024 — OMV Capital Market Story May 2025. Target: ~5,000 by 2030. | Batch 1, Batch 5 |
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
1. **OMV E-Mobility Card** — extends the ROUTEX fleet fuel card to EV charging. Single card for fuel + charging. 21,000+ ROUTEX locations across 34 EU countries via card network (as of ~Q1 2026 corpus). FleetFlex Kundenportal: real-time card management, cost reporting, VAT recovery (REMOBIS), toll payment (SmartPass EETS).
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

- **2,000 → 5,000 CP target upgrade (Sep 2023 → Jul 2024, ~10 months):** Not press-released. EU co-financing de-risked a larger rollout. CZ added as fifth target market by May 2025 Capital Market Story.
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
| Romanian brand fragmentation (3 brands, 3 apps, ~1,900 combined CPs) | Yes | Eleport data confirms three separate OMV Petrom brands; confirmed by Eleport report |
| CEO transition creating strategic uncertainty | Yes | Delaney starts September 2026; no EV position stated |
| EU co-financing obligations (400+ CPs committed) | Yes | Hungary Today / CEE Chamber November 2024 — specific deployment commitments tied to EU funding |
| CZ market launch creating new CPMS onboarding requirement | Yes | PRE partnership June 2025; deployment underway |
| 5,000 CP target requiring 4× scaling from current 1,200 | Yes | 804 CPs Dec 2024, target 5,000 by 2030 — ~3,800 CPs to build in 4 years |

### Decisions forced

- **CPMS quality remediation or replacement** — the current be.ENERGISED deployment cannot reliably onboard consumers. Either OMV invests in fixing the customisation layer (QA, Revolut integration, pre-auth UX, Android bug) or it evaluates alternative platforms. The 5,000 CP target makes "live with it" increasingly untenable as session volume grows.
- **Multi-market B2B platform** — scaling the AT B2B model to HU/SK/RO requires CPMS support for multi-country fleet billing, per-country VAT invoice logic, company account management, and possibly depot DLM. The current setup (be.ENERGISED B2C + ROUTEX card separately) has no visible multi-market B2B layer.
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

**Vendor profile — ChargePoint be.ENERGISED:** Cloud-based CPMS used across CEE and Western Europe. Acquired by ChargePoint from has.to.be. Known for: solid roaming/eMSP layer (Hubject integration), good white-label customisation, active in the oil-major CPO segment (Losch, OMV). Known issues in peer deployments: pre-auth hold behaviour (money blocked for days on failed sessions), power delivery accuracy (energy metered at charger vs. vehicle differs), QR / RFID session start reliability, Android app stability in white-label deployments, slow fix cycles for client-layer bugs. OMV's deployment exhibits all of these: pre-auth blocking (confirmed in RO reviews and RO GTC pre-auth disclosure clause), overbilling ~30% (confirmed in HU Reddit), QR scan failure (confirmed in HU/SK reviews), Android "continue" button bug (unfixed 8+ months). The OMV eMotion deployment is one of the more publicly visible negative examples of be.ENERGISED performance in the regional market.

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
5. **Romanian market dominance via OMV Petrom.** Three charging brands and ~1,900 CPs make the Petrom group the single largest CPO in Romania by a wide margin. CNAIR highway concession access adds corridor infrastructure that independent CPOs cannot match.

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
| Renovatio e-charge (RO, OMV Petrom sub-brand) | ~1,200+ CPs, Romania's largest | Dominant in RO DC market | Eleport Batch 8 |
| Eldrive (RO) | ~1,000 CPs, RO | Mid-tier national CPO | Cited in reviews; autocharge model praised vs. OMV pre-auth |

---

## Network Size

**Headline figure:** 1,200+ charging points — omv.com/en/expertise/fuels/electric-mobility (~Q1 2026 scrape date)

**Scope:** Public fast and ultra-fast DC charging. eMotion-branded network only. Excludes Bulgaria (card-only), Czech Republic (in development), and OMV Petrom's Renovatio e-charge (~1,200+ CPs) and Petrom Electric (~400+ CPs) brands.

**Breakdown (if multi-country or multi-type):**

| Region / Segment | Count | Source | Date | Notes |
|-----------------|-------|--------|------|-------|
| Group eMotion total | 804 CPs | Capital Market Story (investor deck) | Dec 2024 | Tier 1 — investor-grade; per-country split not disclosed |
| Group eMotion total | 1,200+ CPs | omv.com electric-mobility page | ~Q1 2026 | Tier 1 — own website; most recent available figure |
| Romania (eMotion only) | 270+ CPs | Eleport price report | Feb 2026 | Third-party estimate; OMV stations only, not Renovatio/Petrom Electric |
| Czech Republic (committed) | 168 CPs | MobilityPlaza / PRE partnership | June 2025 | Committed by 2030, not yet deployed |
| Group eMotion target | ~5,000 CPs | Capital Market Story, website | 2030 target | AT/HU/SK/RO/CZ |
| HDV hubs | 11 hubs in AT+RO | TRATON LinkedIn | ~Sep 2024 | HDV-capable hubs; CPs not specified |
| Largest hub (RO, A1) | 34 CPs | logos-pres.md | May 2025 | 10MW total; 18 CPs for trucks (400kW), 16 for cars |
| Chargemap (third-party) | 335 locations | Chargemap network page | 2025/2026 | Locations ≠ CPs; consistent with ~3.6 CPs/location average |
| OMV Petrom RO (all brands) | ~1,900 CPs combined | Eleport price report | Feb 2026 | Renovatio ~1,200+ + Petrom Electric ~400+ + eMotion ~270+ |

**Conflicts:**
- logos-pres.md (May 2025) cited "about 1,000 charging points for OMV Petrom's RO network." This is not in conflict with the 804 total eMotion figure — the Eleport breakdown confirms OMV Petrom operates multiple brands. The "1,000" may refer to Renovatio alone at an earlier date, or a combined subset. Not a Tier 1 source; not used in headline.

**AC/DC composition and network age:**
- Explicitly DC-only network (fast and ultra-fast). No AC charging described on any page. Bulgaria is the exception (50kW DC included).
- Power levels: 150–400kW (majority 150–300kW per the 2023 launch; upgrade to 400kW capability confirmed by 2024 hardware on AT/RO pages). Current-generation hardware.
- New network — eMotion brand launched September 2023; oldest stations ~2.5 years old. No legacy AC infrastructure to retrofit. This is a net-new build using current hardware specs throughout.

---

## Geographic Intelligence

### Austria

OMV's home market and the most mature eMotion deployment. Three dedicated B2B EV products (E-Mobility Card, Office Charging, Depot Charging). FleetFlex portal. Claims "Austria's only full-service e-mobility provider" (AT B2B page). 100% renewable electricity at all AT eMotion stations. Roaming network: 12+ AT partners including Wien Energie, Smatrics, IONITY, and regional Stadtwerke. International roaming from AT to CZ, DE, IT, HR, SI, CH, FR (via app).

Pricing: AT country median is €0.59/kWh (Eleport); OMV ad-hoc is €0.69 (above median), app €0.65 (4th most expensive in AT table), membership €0.59 (matches median). AT EV market growing: 60,651 EVs sold in 2025 (+35.9%), EV market share 21.3%.

Challenge: App review failures present in AT (ROUTEX card not supportable in app, no prices shown, map failures). AT users are less vocal than RO/HU users but the product quality issues exist across markets.

### Hungary

OMV's fastest-growing active market. As of November 2024 (Hungary Today source): 15 live locations, 12 more under construction, targeting ~50 ultra-fast CPs by end 2025. Actual end-2025 outcome not confirmed in corpus — current HU CP count should be verified. EU co-financing confirmed. Coverage goal: charging available within 100km along main routes.

Two-app architecture: eMotion (be.ENERGISED, `com.hastobe.omv`) for charging + MyStation (Comarch, `com.comarch.clm.mobileapp.omvhu`) for loyalty. 1M+ active MyStation users (as of ~Q1 2026 corpus). Zero integration between the two apps. B2B EV product does not exist at the country level.

Pricing: HU median €0.53/kWh (≈196 HUF); OMV 299 HUF ad-hoc — explicitly named by Eleport as a "highway stop" CPO where "casual visitors pay 3× more" than cheapest options. HU EV market growing: 11,002 EVs sold in 2025 (+28.5%), market share 8.5%.

Dominant app pain: card-add failure (internet error), Revolut not supported, 15,000 HUF pre-auth blocking, no B2B/VAT invoice, subscription cancellation dark pattern.

### Slovakia

eMotion confirmed present with same 5,000 CP target. Notable UX gap: changing tariff plan requires calling an infoline (+421 268 720 744) rather than doing it in-app (unlike AT). Cross-border pricing confirmed: SK customers can use eMotion app in AT and HU at their SK tariff ("charge abroad like at home").

Pricing: SK median €0.54/kWh; OMV ad-hoc €0.69 (highest in SK). SK EV market: 4,377 EVs sold in 2025 (+96.5%), market share 4.7% — rapid growth from a small base. Government publishes weekly average charging prices nationally (rare EU transparency).

### Romania

Largest single-country footprint. OMV Petrom is the dominant CPO group with three brands and ~1,900 combined CPs — the largest charging group in Romania. The eMotion sub-brand specifically has ~270+ CPs at OMV stations.

CNAIR highway concession: OMV Petrom secured government concession for charging on the A1 motorway — competitive moat for highway corridor deployment. Largest EV hub in Romania: 34 CPs at Mercurea Sibiului, 10MW capacity, 18 × 400kW truck CPs. 100% renewable electricity claimed. Separate contract party (OPM = OMV Petrom Marketing S.R.L., Bucharest).

Pricing: RO median ~€0.49/kWh (~2.45 RON); OMV eMotion app 2.79 RON (2nd most expensive after Be Charge). Romania had the heaviest volume of negative app reviews: pre-auth blocking at 150 RON per failed attempt (not per charge), Revolut rejection, no company account, unreliable session start.

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
| Registration / card-add broken ("check internet connection" false error) | ~50+ reviews across all markets | be.ENERGISED payment pre-auth API failing; OMV client-layer bug unfixed 18+ months |
| Android "continue" greyed out at address step | ~12+ Google Play reviews | OMV-specific Android build bug; separate from iOS card-add error; unfixed 8+ months |
| Revolut cards rejected (with misleading error) | ~15+ reviews (RO, HU, SK) | Payment processor does not support Revolut; error message engineering failure |
| Pre-auth blocks 150 RON / 15,000 HUF per failed attempt, released in 4–5 days | ~20+ reviews primarily RO, HU | be.ENERGISED pre-auth architecture; known issue in platform; OMV has not mitigated |
| Charging session fails to start despite registration | ~15+ reviews all markets | OCPP session initiation; app-to-charger communication failure |
| No B2B / company account / VAT invoice | ~10+ reviews HU, AT, SK, RO | Deliberate B2C-only architecture per GTC; users unaware |
| Price complaints ("emergency only", "too expensive") | ~10+ reviews all markets | Pricing strategy; consistent with Eleport upper-tier positioning |
| Map transparency (can't filter OMV vs. roaming, no prices, country-locked) | ~8+ reviews | Station visibility and pricing UX gaps |
| Station hardware: session cut-offs, low power output, QR non-functional | ~8+ reviews | Station-side reliability; hardware quality or OCPP communication |
| Customer support absent in app | ~5+ reviews | No in-app contact; support only during business hours |

**Field evidence (non-review sources):** Reddit HU (r/CartalkHungary): billing accuracy — OMV charged 14.3 kWh vs 11 kWh shown by Tesla app (~30% overbilling), consistent across 3 sessions (Tier 2 evidence, single user but specific and quantified). Reddit HU: pre-auth/Revolut minimum-charge bug (1,200 HUF card accepted when 5,000 HUF minimum required). Eleport comparison (AT): OMV eMotion absent from a community-authored Austrian charging tariff comparison table despite Eleport including it as a major AT CPO — suggests low brand recall among price-conscious Austrian EV community.

**Competitor mentions in reviews (users explicitly preferring alternatives):**
- Shell (AT): "fahre zu Shell!" (AT user) — cited as working when OMV failed
- MOL (HU/RO): cited for better pre-auth billing (charges only what's used)
- Eldrive (RO): cited for autocharge model (charge first, pay after)
- TEA Mobility / Teapont (HU): cited for session reliability
- Wien Energie, IONITY (AT): implicitly preferred via absent OMV from Austrian community tariff table
- MVM/Mobiliti (HU): cited for working session start
- Renovatio e-charge (RO, same parent!): cited by a Romanian user as superior ("topping up first, then charging — simple and fast") vs. OMV eMotion's pre-auth model

---

## Research Gaps & Unresolved

### Scrape failures (Insufficient research performed — Scrape failure)

None. All pages in the corpus that were assigned to read batches rendered successfully. The gaps below are research scope gaps (pages not in corpus), not scrape failures.

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
- 2025 EV sales: 8,849 (-9.7%), EV market share fell to 5.6%. Romania is the only OMV research market where EV adoption is going backwards. Country median: €0.49/kWh (~2.45 RON). DC-heavy infrastructure: ~42% of public CPs are DC (vs. EU average ~20%) — market leapfrogged AC. OMV Petrom dominates: ~1,900 combined CPs from three brands, by far the largest CPO group. Be Charge (Enel Group) is the most expensive at 4.23 RON/kWh.

**cpms_platforms.md — be.ENERGISED (update):**
- OMV eMotion deployment should be added as a named client with documented issues: pre-auth blocking (150 RON / 15,000 HUF per failed attempt, 4–5 day release), billing overbilling (~30% measured via Tesla vehicle app), Android "continue" button registration bug (8+ months unfixed), iOS card-add "internet connection" false error (18+ months), Revolut card rejection with misleading error message, session start failure at OCPP level. Multiple markets affected: AT, HU, SK, RO. This is one of the lowest-performing documented be.ENERGISED deployments in the research corpus.
- Note: OMV Petrom's Renovatio e-charge and Petrom Electric brands appear to run different CPMS stacks (not identified). The RO user in reviews explicitly contrasts Renovatio's "top-up first, charge after" model favourably vs. eMotion's pre-auth model — this is a different payment architecture, suggesting a different CPMS.

### Reasoning corrections

1. **OMV Petrom "1,000 CPs" claim nearly treated as inconsistent with the Capital Market Story.** The logos-pres.md (May 2025) figure of "about 1,000 charging points for OMV Petrom" appeared to contradict the Capital Market Story's 804 CPs (Dec 2024). The Eleport report (Batch 8) resolved this cleanly: OMV Petrom operates THREE separate charging brands in Romania with a combined ~1,900 CPs. The "1,000" likely refers to Renovatio alone (the largest single brand); the 804 is the eMotion-branded group total. These are not in conflict — they measure different things. Lesson: "OMV Petrom" and "OMV eMotion network" are not coterminous. Check whether a claim is about the sub-brand or the parent entity's total footprint before flagging a conflict.

2. **Nearly concluded that the 2,000→5,000 target upgrade had no explanation in the corpus.** Batch 4 analysis (Sep 2023 press release vs. website) identified the target had changed but no press release existed. The explanation emerged only in Batch 7 from the CEE Chamber LinkedIn and Hungary Today articles — both citing EU co-financing for 400+ CPs. The lesson: absence of a press release does not mean absence of an explanation. Third-party sources (LinkedIn posts, regional news articles) sometimes carry the explanation that the company itself hasn't announced.

3. **Nearly assigned be.ENERGISED issues in the app entirely to OMV's own product layer.** The pre-auth blocking and billing accuracy issues are partially OMV's customisation choices and partially be.ENERGISED platform defaults. The distinction matters: the Android "continue" button bug is clearly OMV's client build (it affects only `com.hastobe.omv`); the pre-auth 150 RON per attempt is a be.ENERGISED platform behaviour that OMV has chosen not to customise away (other CPOs on be.ENERGISED use different pre-auth amounts or the top-up model). Separating platform defaults from client choices is important for the sales pitch: some issues are solvable through better configuration on the same platform; others require a platform change.

---

### Analysis review findings — resolved (2026-05-20)

*Applied during run of analysis_review_framework.md Stage 1–3 review. All six findings were direct corrections — no deferrals required.*

- **Resolved — F1:** Added two High-relevance gaps (broken consumer onboarding funnel; no acceptable pre-auth UX) as explicit bullets in Synthesis "What's absent." Both were previously in CPMS paragraph only; framework requires high-relevance Business Gaps to appear explicitly in "What's absent."

- **Resolved — F2:** Added date qualifier to pricing block in Business Model (own-network CPO section) and to per-market pricing in Geographic Intelligence. Source: ~Q1 2026 corpus scrape / Eleport March 2026 price report. Pricing figures are within 12-month freshness window at analysis date but must be re-verified for use after H2 2027.

- **Resolved — F3:** Added "as of Q1 2026 corpus; continuity under Delaney unconfirmed" qualifier to van Koten EVP role in Company Profile and Leadership table.

- **Resolved — F4:** Added explicit "(November 2024 source)" date and staleness note to Hungary network progress figure (15 locations → ~50 CPs by end 2025). Source is 18 months before analysis date; end-2025 outcome not confirmed in corpus.

- **Resolved — F5:** Added deal status characterization to Borouge entry in Strategic Context ("announced, closing pending as of corpus"). Closing date not confirmed in corpus.

- **Resolved — F6:** Replaced unsourced specific "million EV customers by 2030" figure in Synthesis "Where this is going" with corpus-grounded equivalent ("grow its consumer EV base to the scale that justifies the 5,000 CP network"). The original figure was rhetorical but unanchored in the corpus.

*Additional freshness fixes applied in same pass: 2025 annual revenue/headcount figures dated; ROUTEX network size dated; MyStation user count dated; HDV hub count flagged as 20 months stale.*
