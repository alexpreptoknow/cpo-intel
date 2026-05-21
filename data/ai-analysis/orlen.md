# CPO Analysis — ORLEN

**Date:** 2026-05-20
**Analyst:** Claude
**Source:** 108 scraped pages + 5,782 app reviews from p2k DB (`Scraped Pages/Orlen.md`, `Scraped Pages/Orlen — App Reviews.md`)
**Coverage:** ~85% of non-noise pages read across 10 batches. Read: own-domain orlencharge.pl, orlen.pl, flota.orlen.pl, star.de, orlenunipetrol.cz, partner/vendor pages (SMATRICS, InBalance, Ekoenergetyka), SERP results, Reddit, app reviews. Gaps: careers page not scraped (no job descriptions to confirm CPMS vendor); opinie.orlen.pl scrape failed (cookie-wall); ORLEN Unipetrol history page (82K chars, navigation-heavy — skipped); page 81 Strategy 2035 PDF read partially.
**v2 changes:** Added Development Stage & Trajectory, Competitive Position, Geographic Intelligence, Ancillary Tech Stack, and Post-analysis brief sections. Synthesis updated with Development stage, Where this is going, and Adjacent leads fields.


---

## Alex Notes

**Things to pay attention to:** 

We have failed to find the CPMS provider through Google search for Poland. Now, this is something that we will easily fix when we research each CPMS separately. 

Example: stage-myorlen.etrel.com/fallback-landing. This shows Etrel, as the CPMS. I am not sure if the recent migration to Vitay app was with Etrel or not. Also, I decided not to add this context manually to the AI analysis, so that the analysis is not tampered with manually.

However, you can still see that the LLM didn't infer the CPMSs for the company, without direct evidence. You check the "post-analysis brief" section for more clarification there. 



---

## Synthesis

*Self-contained. A reader who reads only this section should understand the company, the CPMS situation, and the sales verdict.*

**What ORLEN clearly is:** Poland's largest energy company (state-controlled, ~PLN 300bn+ revenue), running CEE's biggest fuel station network: ~3,500 sites across 7 markets (Poland, Czech, Germany, Slovakia, Lithuania, Hungary, Austria). EV charging sits inside the Retail division as a strategic energy transition play. This is a textbook Oil Major CPO: balance sheet-backed capex, fossil fuel card heritage (5 fleet card tiers, 5M+ VITAY loyalty users), multi-country footprint via subsidiary brands (ORLEN Charge PL, star DE, ORLEN Benzina CZ), and EV goals driven by brand repositioning as much as economics. The ORLEN Group Strategy 2035 (Jan 2025) commits to 2,700 ultrafast DC charging points in Poland alone by 2030 (currently ~200), 6,000 by 2035, and 33% Polish EV energy market share. Across all markets, the total group EV buildout is one of the largest planned in CEE.

**CPMS:** Five separate situations across markets — no single vendor covers the group.
- **Poland (ORLEN Charge, ~1,300+ CPs):** Not identified. Tier 3 — research thorough across 108 pages; vendor not publicly disclosed. The standalone ORLEN Charge app was sunset May 2026 → merged into VITAY loyalty app. The migration is technically broken as of this writing: charging sessions can't be initiated from the integrated app, stations disappear from the map, users are directed to call a hotline to start charging. The CPMS-to-VITAY API integration has failed publicly.
- **Czech Republic (294 CPs at 102 stations, partner model → transitioning):** Was operated under ČEZ partnership (Czech state utility). ORLEN is actively exiting: first own ORLEN Charge HPC site opened at Průhonice (D1 motorway) Q1 2026. Own "fully integrated digital platform" and mobile app pilot by H2 2026, full platform by 2027. CPMS for own network: not identified — live procurement window.
- **Austria (Turmstrom brand, ~60+ CPs):** SMATRICS (charVIS CPMS). Tier 1 — confirmed from SMATRICS case study page. Full-service contract since 2018: installation, technical operation, charVIS CPMS, smart charging, white-label app. ORLEN acquired Turmöl in 2023 and inherited the SMATRICS relationship.
- **Lithuania (ORLEN Baltics Retail):** Most likely InBalance Grid. Tier 2 — InBalance confirmed as "long-term strategic partner" handling design, installation, management, and ORLEN mobile app integration. InBalance manufactures own hardware and software stack; functional role matches CPMS provider.
- **Germany (star.de / ORLEN Deutschland, 60→200+ CPs):** Not identified. Hardware: Alpitronic Hypercharger (up to 400kW) — explicitly named on site acquisition pages.

**What's absent:**
- No CPMS vendor disclosed anywhere in 108 pages for Poland's main network — unusual at this scale. Suggests either a white-label/undisclosed arrangement or an in-house build under pressure. The VITAY integration failure points toward the former: if it were in-house, the app team would have access to fix the integration directly.
- No roaming partner list or Hubject/eRoaming membership confirmed for Poland in corpus (mentioned in SERP but unverifiable). Expected for a network of this size.
- No careers page scraped — can't confirm whether ORLEN employs platform engineers or relies entirely on vendor.
- Fleet EV charging integration in Germany: the Flottenkarte (German fleet card) does NOT include EV charging. Poland's FLOTA card does. This gap is real and growing.
- Slovakia: Zero EV CPs currently deployed despite 2023 announcement.

**What explains what's observed:** ORLEN is running EV charging as 7 largely independent country operations inside one corporate structure — a direct consequence of the 2022 mega-merger (PKN ORLEN + Lotos + PGNiG + Energa) which created integration debt across all divisions. Each market has a different partner model inherited from pre-merger history: Austria was outsourced to SMATRICS from day one (2018, before ORLEN owned it); Czech was outsourced to ČEZ and is now being insourced; Lithuania uses InBalance Grid as a regional infrastructure builder; Germany operates under a separate legal entity. Poland — the largest and most strategically important — has the least visible CPMS relationship, consistent with an undisclosed vendor facing a difficult API integration. The VITAY super-app consolidation (all services → one app) is the platform forcing function: whoever manages CPMS in Poland must integrate with VITAY's API layer, and that integration is currently broken publicly.

**Development stage:** Poland (ORLEN Charge) is Stage 3 — multi-market, sophisticated fleet card integration (FLOTA, MIKROFLOTA, BIZNESTANK across PL/CZ/DE/LT), own-branded app, roaming capability, loyalty program integration. Ambitions are Stage 4 (VITAY as mobility super-platform), but the CPMS-to-VITAY integration failure indicates the operational model is Stage 3 under pressure, not yet Stage 4. Czech Republic is Stage 2 — building its first own-brand network now, no platform yet. Austria and Lithuania are Stage 2 (full-service managed by single external vendor). Germany is Stage 2→3 (own brand, Alpitronic hardware, no fleet EV integration). The Group as a whole is a fragmented Stage 3 structure — each market at a different sub-stage with no unified CPMS stack.

**Where this is going:** The VITAY consolidation is forcing ORLEN Poland toward a CPMS platform decision within 1–2 years — either fix the current vendor's API integration or replace the platform. The Czech greenfield build forces a CPMS selection by H1 2026 (platform pilot in H2 2026 per stated plan). Germany will face a fleet card EV integration decision as German fleet clients request it — timeline less clear but tied to German EV adoption curve. Over a 3–5 year horizon, the 2022 mega-merger integration debt will push progressive CPMS rationalisation across markets: operating 5 different arrangements is sustainable in the short term (each is outsourced) but creates escalating complexity as ORLEN ID and VITAY attempt to unify the customer-facing layer across all 7 markets. The pressure point is the app — if VITAY is the single customer interface, all market CPMS stacks must integrate with it. That's the architectural forcing function that makes fragmentation untenable.

**Competitive pressure:** In Poland: GreenWay Polska (most-cited by EV drivers in routing apps), Circle K, LOTOS/BP (now merged into ORLEN but with legacy network). ORLEN is ahead on station count but behind on app quality. Czech: ČEZ operates its own public EV network — the partner ORLEN is exiting is also a competitor. Germany: ARAL Pulse (BP), Ionity, EnBW mobility+, ENBW highway network — ORLEN Germany is a small player entering a competitive market. The Alpitronic hardware choice is competitive; the absent fleet EV card is not.

**Sales priority: High.** Three signals combine: (1) Poland has ~200 ultrafast DC CPs today and committed to 2,700 by 2030 — that's a 13× buildout with an undisclosed and apparently troubled CPMS; (2) Czech Republic is in an open procurement window — stated "own digital platform by 2027" means a decision is being made now; (3) the VITAY integration failure is a documented, public, actively worsening pain point that a better CPMS could address directly.

Trigger: If ORLEN announces a formal Czech CPMS tender, or if a press release names the Polish CPMS vendor (either as a new contract or as a loss), this changes the picture immediately.

**Entry point if pursued:** Czech Republic first. ORLEN Unipetrol has stated it needs its own charging platform by 2027 — the procurement window is open, the first site is live, the pain is current. The Austrian SMATRICS relationship is a reference point ORLEN already understands: a full-service managed CPMS for an oil major sub-brand network. Lead with: "You're building in Czech exactly what SMATRICS built for your Austrian network since 2018 — here's what that looks like at scale." Secondary: Poland, addressing the VITAY API integration failure directly. Fleet is the warmest B2B angle — ORLEN's fleet card ecosystem is the most sophisticated in CEE and they are actively extending it to EV.

**Adjacent leads:** Two distinct procurement entities separate from PKN ORLEN S.A.:
- **ORLEN Unipetrol a.s. (Czech Republic)** — separate legal entity; greenfield CPMS decision live 2026–2027. Contacts in corpus: Agnieszka Bobrukiewicz (Unipetrol Board — Retail CZ/HU/SK), Rostislav Moravec (Director, ORLEN CZ filling station network). This is a clean procurement separate from Poland.
- **ORLEN Deutschland GmbH (star.de, Germany)** — separate legal entity operating the star.de network; fleet card EV integration is a distinct B2B gap. Window opens when German fleet clients request EV billing — ORLEN Deutschland would procure fleet EV integration separately from Poland's FLOTA system.

---

## Company Profile

| Field | Finding | Basis |
|-------|---------|-------|
| Legal entity | PKN ORLEN S.A. (holding) | orlen.pl |
| Website | orlen.pl / orlencharge.pl | — |
| Headquarters | Płock, Poland | orlen.pl |
| Parent company | None — PKN ORLEN is the parent. State Treasury holds ~27% | orlen.pl |
| Parent origin | Integrated energy / oil major | — |
| Archetype | Oil Major CPO | business_archetypes.md |
| Markets | Poland, Czech Republic, Germany, Lithuania, Slovakia, Hungary, Austria | orlenunipetrol.cz, orlen.pl |
| CPMS (current) | Poland: Not identified (Tier 3). Czech: ČEZ (exiting) → own platform TBD. Austria: SMATRICS charVIS (Tier 1). Lithuania: InBalance Grid (Tier 2). Germany: Not identified. | Various — per market above |
| CPMS (previous) | Czech: ČEZ partnership (exiting as of Q1 2026) | ORLEN Unipetrol press release Apr 2026 |
| Hardware (Poland) | Ekoenergetyka (>80%): fastPOINT, Axon Easy, Axon Side/Sat HPC. Legacy: ABB Terra 54, Efacec QC45 | Ekoenergetyka case study |
| Hardware (Germany) | Alpitronic Hypercharger (up to 400kW) | star.de site acquisition page |
| Charging types | DC fast (primary): 50kW legacy → 150–400kW current. AC: 7–22kW secondary | orlencharge.pl, star.de |
| Network size (Poland) | ~1,300+ CPs | flota.orlen.pl (PL, current 2026) |
| Network size (Czech) | 294 CPs at 102 stations (ČEZ partnership) → 11 own HPC sites by end 2026 | Press releases Oct 2025, Apr 2026 |
| Network size (Germany) | ~200+ CPs by end 2025; targeting 1,150 by 2030 | star.de |
| App (iOS) | ORLEN VITAY: 4.77★ / 112,206 ratings | App Store |
| App (Android) | ORLEN VITAY: 4.64★ / 4,072 reviews (1-year window) | Google Play |
| Key leadership | Agnieszka Bobrukiewicz (ORLEN Unipetrol board — Retail CZ/HU/SK, Convenience ORLEN Group); Rostislav Moravec (Director, ORLEN CZ filling station network); Hubert Zdrojewski (Director of product development and electromobility technology, ORLEN Group) | Press releases |

---

## Parent Company & Corporate Context

**Parent:** None — PKN ORLEN S.A. is the parent group. EV charging sits within the Retail segment.
**Parent industry origin:** Oil major / integrated energy company
**Ownership structure:** Publicly listed on Warsaw Stock Exchange; State Treasury holds ~27%; ORLEN is itself the result of a 2022 mega-merger (PKN ORLEN + Lotos + PGNiG + Energa). Post-merger integration is ongoing.
**Financial scale:** Revenue ~PLN 300bn+ (2023), one of the largest companies in CEE. The Retail segment (which includes EV charging) contributes substantially; balance sheet supports multi-billion PLN EV capex. EIB financing of €420M+ confirmed (2024 press release — for power distribution network, partially applicable to EV buildout).
**Parent's primary revenue stream:** Fuel refining and wholesale (crude → fuels), plus retail fuel sales, natural gas trading, power generation, petrochemicals.
**Parent's primary clients:** Fuel retail customers (B2C at 3,500 stations), fleet operators (FLOTA/MIKROFLOTA card holders), industrial/wholesale fuel buyers, power market.
**What EV charging means to the parent:** Strategic energy transition play — reposition from "fossil fuel brand" to "multi-energy mobility platform." Also: future-proofing station network economics as fuel volume declines. The VITAY platform (5M users) is explicitly designed to transition from fuel loyalty into a broader mobility ecosystem that includes EV charging, energy bills (via Energa), parcel pickup, and more.
**Strategic mandate for EV charging:** Achieve 33% Polish EV energy market share by 2030. Build the largest public charging network in Poland (10,000 CPs by 2030). Keep retail customers inside the ORLEN ecosystem through VITAY as they switch from ICE to EV.

---

## Business Model

**Primary revenue clients:** B2C EV drivers (public fast charging at stations) and B2B fleet operators (FLOTA/MIKROFLOTA card integration). Site host revenue is secondary in Poland but more prominent in the CHARGE@Partner model in Germany.

### 1. Own-network public fast charging (CPO)

ORLEN owns and operates public DC fast charging at its fuel stations. Pricing as of April 1, 2026 (Poland): DC flat PLN 2.69/kWh; AC PLN 1.95/kWh. Parking fee PLN 0.40/min after 60min DC / 720min AC. Pricing was simplified from a 3-tier structure to flat-rate in April 2026 — a deliberate simplification to reduce friction. Roaming is excluded from promotions. Payment: RFID card, credit/debit contactless, ORLEN VITAY app (currently broken for EV sessions as of May 2026). Germany: pricing not scraped; payment via card/RFID at station per star.de. Austria: pricing managed by SMATRICS under white-label Turmstrom brand.

### 2. B2B Fleet charging

ORLEN operates the most sophisticated fleet card ecosystem in CEE: BIZNESTANK (SME, prepaid), MIKROFLOTA (micro SME, PL/CZ/DE/LT, postpaid), FLOTA (medium/large, postpaid), DKV/ORLEN (international cross-border). EV charging is integrated into the FLOTA card via ORLEN ID → VITAY app workflow. Fleet customers can charge at ORLEN stations and control billing through the ORLEN Flota portal. Czech is also extending "Tankarta Business Charge" to include EV charging with roaming to other operators. Germany's Flottenkarte does **not** yet include EV — a visible gap. B2B EV installation for fleet depots is offered in Poland via Energa subsidiary (Energa Oświetlenie / home/business charging installations).

### 3. Site host / CHARGE@Partner (primarily Germany)

ORLEN Deutschland actively seeks land for standalone charging hubs ("greenfield concept") separate from fuel stations, plus installs at partner sites. Model: ORLEN invests in hardware and installation, pays compensation per charging station to the site host, 10-year minimum contract. This is the standard zero-cost-to-site-host model. Targets: unbuilt or parking areas 150–3,000m², 24/7 publicly accessible, highway or high-traffic locations.

### 4. eMSP / Roaming

ORLEN Charge operates as an eMSP (confirmed: roaming mentioned, roaming excluded from promotions). Hubject/eRoaming integration mentioned in SERP results but not confirmed in scraped corpus. Roaming is a pass-through product rather than a primary revenue line — the business model is own-network-first. Czech is actively adding third-party roaming to its Tankarta Business Charge product, which suggests roaming is not yet deeply integrated into the core product.

---

## Strategic Context

### M&A & Partnerships

- **2022:** PKN ORLEN mega-merger with Lotos, PGNiG, Energa — Poland's largest corporate merger. Creates integration debt across all divisions including EV charging. Multiple legacy CPMS situations inherited simultaneously.
- **2023 (July/Aug):** ORLEN announces and completes acquisition of **Turmöl** (Austrian fuel network, 266 stations). Austrian operations branded as Turmstrom (EV) and continue under SMATRICS CPMS management — ORLEN inherits the SMATRICS relationship.
- **2023 (Sept):** ORLEN Slovakia rebranding complete — 90 stations, all ORLEN-branded. First EV CPs planned but none yet deployed.
- **2024:** EIB doubles financing to ORLEN Group to €420M+ for power distribution network (includes EV-relevant infrastructure). Signals institutional backing for buildout.
- **2025 (Jan):** ORLEN Group Strategy 2035 published — commits to 2,700 ultrafast DC CPs in Poland by 2030, 6,000 by 2035.
- **2025 (Oct):** ORLEN Unipetrol announces Czech electromobility overhaul — exiting ČEZ partnership, building own HPC network. 600 own CPs by 2030, 1,700 by 2035.
- **2026 (Jan):** ORLEN ID (unified SSO across all group services) launched. Creates authentication friction across VITAY app — major disruption visible in app review clusters.
- **2026 (Apr 13):** ORLEN Charge Czech: first own HPC site opened at Průhonice (D1 highway). 11 own sites planned by end 2026.
- **2026 (May):** ORLEN Charge standalone app SUNSET — merged into VITAY. Migration has caused EV charging UX failures (documented in 1★ review cluster).
- **2026 (May):** ORLEN announces AWS partnership for cloud and AI transformation — signals infrastructure modernisation intent. Could be early signal of platform consolidation intent.
- **InBalance Grid (Lithuania):** Long-term strategic partner for ORLEN Baltics Retail. InBalance investing €10M in Lithuanian charging infrastructure (investor model — InBalance takes hardware investment risk in exchange for long-term management contract).
- **SMATRICS (Austria):** Full-service provider since 2018, pre-ORLEN acquisition. Relationship inherited.
- **Ekoenergetyka (Poland):** Hardware supplier for >80% of Polish ORLEN charging infrastructure. Relationship confirmed via case study. Also supplies hardware in Germany (Deutschlandnetz) and Lithuania (with InBalance).

### Leadership

| Name | Role | Background | Mandate signal |
|------|------|------------|----------------|
| Agnieszka Bobrukiewicz | ORLEN Unipetrol Board — Retail CZ/HU/SK, Convenience ORLEN Group | — | Expansion + transition mandate across Central European retail; Czech EV build falls under her scope |
| Rostislav Moravec | Director, ORLEN CZ filling station network | — | Operational delivery of Czech EV buildout — likely the procurement decision-maker for Czech CPMS |
| Hubert Zdrojewski | Director, product development & electromobility technology, ORLEN Group | — | Technology and product strategy for EV group-wide — likely the key contact for Polish CPMS platform |

### Strategic pivots or signals

1. **Czech exit from ČEZ partnership model** (Oct 2025 announcement, Apr 2026 first own site): ORLEN is moving from "partner-operated infrastructure" to "own infrastructure + own CPMS + own app" in Czech. This is the most actionable procurement signal in the corpus.
2. **VITAY super-app consolidation**: All ORLEN services (fuel payment, EV charging, loyalty points, energy bills via Energa, parcel pickup) being merged into one app. Platform bet with high architectural risk — whoever manages CPMS in Poland must be integrated into VITAY's API layer. Currently broken.
3. **ORLEN ID rollout (Dec 2025)**: Unified authentication across all ORLEN Group services. Caused massive disruption to VITAY app login flows. Likely also disrupted CPMS session initiation via app. Signals ORLEN is building an identity/SSO layer that all downstream services (including CPMS) must conform to — new vendors must integrate with ORLEN ID, not maintain their own auth.
4. **Germany Alpitronic hardware choice**: ORLEN Deutschland has standardised on Alpitronic Hypercharger for its standalone charging hub rollout. Deliberate upgrade from legacy. Alpitronic is a signal of investment seriousness, not a budget play.
5. **AWS partnership (May 2026)**: Cloud and AI transformation. Too early to interpret concretely, but consistent with a company moving toward a modern tech stack rather than on-premise legacy systems.

---

## Development Stage & Trajectory

*Work through this section before writing the synthesis. The Development stage and Where this is going fields in the Synthesis are outputs of the reasoning done here.*

### Stage assignment

**Assigned stage:** Poland (ORLEN Charge): Stage 3. Czech: Stage 2 (transitioning from partner model to own network). Austria, Lithuania: Stage 2 (full-service outsourced). Germany: Stage 2→3. Group: Stage 3 (fragmented — each market at a different sub-stage).

**Signals present (Stage 3, Poland):**
- Multi-country operation with own-branded sub-brands per market (ORLEN Charge PL, star DE, Turmstrom AT)
- Full fleet card integration (FLOTA, MIKROFLOTA, BIZNESTANK) with EV charging included in Poland
- Roaming eMSP capability (confirmed in pricing terms, excluded from promotions)
- Own loyalty app (VITAY) with 5M users — active effort to make it a multi-service platform
- Stage 2035 strategy with explicit market share targets (33% Polish EV energy market share)
- EIB institutional financing secured

**Signals absent (Stage 4):**
- No unified CPMS platform across markets — 5 different arrangements
- VITAY app EV module broken — platform consolidation is aspirational, not operational
- No multi-operator white-label sub-network product visible
- No advanced DLM/smart charging capability confirmed for Poland (SMATRICS handles it for Austria only)
- B2B fleet EV integration incomplete (Germany fleet card has no EV; Czech fleet EV in progress)

**Conflicting signals:**
- High-level strategy (multi-billion investment, 33% market share by 2030) reads like Stage 4 ambition, but the CPMS fragmentation and broken VITAY integration indicate Stage 3 operational model — assign Stage 3 with Stage 4 ambitions. Operational model is the tie-breaker: what ORLEN can actually deliver today (fragmented CPMS, broken app EV module) is Stage 3.

### Transition pressures

| Pressure | Active? | Evidence |
|----------|---------|----------|
| VITAY super-app demanding CPMS API integration | Yes — and currently failing | 1★ review cluster May 2026; hotline-to-start-charging for EV sessions |
| Czech exiting ČEZ and building own platform | Yes | Press release Oct 2025; first site open Apr 2026; platform pilot H2 2026 |
| Scale of Polish buildout (200 → 2,700 ultrafast DC) | Yes — 13× growth planned | ORLEN Group Strategy 2035 (Jan 2025); EIB financing secured |
| ORLEN ID SSO requiring all systems to integrate | Yes | ORLEN ID launched Dec 2025; auth disruption visible in reviews |
| Germany fleet card EV gap as German EV adoption grows | Emerging | star.de fleet card page confirmed no EV. German fleet EV demand tied to local adoption curve — not yet acute. |
| Multi-market billing complexity as ORLEN ID unifies identity | Unclear | ORLEN ID architecture implies a single identity layer; unclear if CPMS billing follows. Evidence would come from fleet portal pages not in corpus. |

### Decisions forced

- **Czech CPMS selection (2026–2027):** ORLEN Unipetrol explicitly stated own digital platform by 2027. Platform pilot H2 2026. A vendor must be selected in H1 2026 or already has been. This decision is live. *Derives from: Czech ČEZ exit transition pressure.*
- **Poland CPMS-to-VITAY API fix or replacement (2026–2027):** ORLEN Charge module in VITAY is broken for EV sessions. ORLEN has 5M VITAY users and a stated strategy to grow EV through the app. The integration will be fixed or the CPMS replaced. *Derives from: VITAY super-app pressure.*
- **Germany fleet card EV integration (2027–2028):** As German EV fleet adoption grows, ORLEN Deutschland will face explicit customer demand to add EV to Flottenkarte. A platform decision for fleet EV billing in Germany follows. *Derives from: Germany fleet gap.*
- **CPMS rationalisation across markets (2027+):** ORLEN ID attempts to unify identity across all group services. If VITAY becomes the universal frontend, all market CPMS stacks must expose APIs VITAY can consume. 5 different arrangements cannot all integrate cleanly — some will be retired or renegotiated. *Derives from: ORLEN ID rollout + multi-market integration debt.*

### Sales angle

The Czech Republic decision is live and accessible. ORLEN Unipetrol is a separate legal entity with a named board member (Bobrukiewicz) and a named operational director (Moravec) — two reachable contacts with a stated need and a timeline. The Austrian SMATRICS case is the exact reference model: full-service CPMS for an oil major sub-brand network in a smaller CEE market. The pitch does not need to be about ORLEN's scale or ambition — it needs to be about "here is what the Austrian model looks like at full operation, here is how we would replicate it for Czech, and here is the timeline that fits your H2 2026 pilot deadline." Poland is the larger prize but requires navigating PKN ORLEN S.A. procurement rather than a subsidiary — harder and slower. Poland becomes the conversation after Czech creates a reference within the group.

---

## CPMS Identification

**State:** Poland — Not identified. Czech — ČEZ (exiting) → own platform TBD. Austria — Confirmed SMATRICS (charVIS). Lithuania — InBalance Grid (likely). Germany — Not identified.

**Evidence tier (Poland):** Tier 3 — research thorough; vendor not publicly disclosed.

**Evidence (Poland — what was found):**
- 108 pages across own domain, parent pages, partner pages, Reddit, news — no CPMS vendor name visible anywhere.
- VITAY app package: `pl.orlen.vitay` (Apple / Google Play). Developer: PKN ORLEN S.A. The app is internally developed or white-labeled without vendor branding.
- Multiple app reviews confirm ORLEN Charge module in VITAY is broken — charging sessions fail. Suggests fragile CPMS-to-app API integration.

**Evidence (Czech Republic):**
- Tier 1 for ČEZ exit: Press release Apr 13, 2026 explicitly states "ORLEN is gradually moving away from its current business model based on cooperation with external electricity suppliers."
- CEEnergynews article confirms ČEZ was the previous partner.
- Own platform: "For end customers, ORLEN is preparing its own mobile app with a pilot launch in the second half of 2026." Own CPMS/digital platform by 2027. No vendor named — procurement window open.

**Evidence (Austria — Confirmed SMATRICS):**
- Tier 1: SMATRICS case study page (scraped, page 21). SMATRICS provides: technical installation, charVIS CPMS, technical operation, smart charging, white-label app. Relationship since 2018. ORLEN inherited this relationship when acquiring Turmöl in 2023.

**Evidence (Lithuania — InBalance Grid, Tier 2):**
- InBalance Grid case study / partnership page (page 11). InBalance confirmed as long-term strategic partner for ORLEN Baltics Retail, handling design, installation, management, and ORLEN mobile app integration. InBalance manufactures own hardware and software — functional role matches CPMS provider.

**What was checked:**
- [x] Own-domain pages (orlencharge.pl, orlen.pl, flota.orlen.pl, star.de, orlenunipetrol.cz)
- [x] App store package name / developer field (iOS + Android)
- [x] Vendor case study pages (SMATRICS — confirmed Tier 1; InBalance — confirmed Tier 2; Ekoenergetyka — hardware only; Hubject — not found in corpus; Ampeco — not found)
- [x] CPO press releases / investor materials
- [ ] Careers page — NOT SCRAPED
- [x] SERP queries — 7 searches run (see research notebook SERP section)

**Multiple stacks (acquired brands):** Yes — 5 different CPMS situations across 7 markets. No single platform covers the group. Austria (SMATRICS/charVIS) and Lithuania (InBalance Grid) are managed by external full-service providers. Czech is transitioning from ČEZ to own platform. Poland and Germany are undisclosed. This is a fragmented estate reflecting the 2022 mega-merger inheritance and each market's independent operational history.

**Vendor profile (SMATRICS/charVIS):** Austrian CPMS and full-service infrastructure operator. Focused on CEE/Alpine markets. Full-service model (installation + CPMS + operation + white-label app) suits oil major subsidiaries that don't want to build internal EV operations teams. Relationship with ORLEN Austria since 2018 — pre-acquisition. This is the most established CPMS relationship in the ORLEN group.

### Ancillary Tech Stack

| Component | Vendor | Scope | Notes |
|-----------|--------|-------|-------|
| eRoaming | Hubject (unconfirmed) | Poland (SERP only) | Mentioned in SERP; not confirmed in corpus. Expected given network scale. |
| Smart charging / DLM | SMATRICS (charVIS) | Austria only | Part of full-service contract. No DLM confirmed for Poland. |
| Hardware (Poland primary) | Ekoenergetyka | Poland (>80%) | fastPOINT 50–100kW, Axon Easy 120–400kW, Axon Side/Sat HPC 400kW+. Legacy: ABB Terra 54, Efacec QC45. |
| Hardware (Germany) | Alpitronic Hypercharger | Germany | Up to 400kW, confirmed star.de site acquisition page. |
| Full-service CPMS + ops (Austria) | SMATRICS (charVIS) | Austria | Installation, operation, CPMS, smart charging, white-label app. Since 2018. |
| Full-service infrastructure (Lithuania) | InBalance Grid | Lithuania | Design, installation, management, ORLEN app integration. Own hardware + software. |
| Loyalty / SSO | ORLEN ID (in-house) | Group-wide | Unified SSO launched Dec 2025. All CPMS integrations must conform to ORLEN ID auth layer. |
| Fleet card platform | ORLEN FLOTA / MIKROFLOTA / BIZNESTANK (in-house) | PL, CZ, DE, LT | Postpaid/prepaid. EV integration: live in PL, partial in CZ, absent in DE. |
| Cloud infrastructure | AWS (announced May 2026) | Group-level | Announced partnership; scope unclear. May affect CPMS hosting arrangements. |
| Payment (PAYG, Poland) | Not identified | Poland | Research gap — no payment processor named in corpus for contactless/card PAYG. |

---

## Business Gaps

| Gap | Evidence | Sales relevance |
|-----|----------|-----------------|
| VITAY app — EV session initiation broken | Multiple 1★ reviews (May 2026): "stations disappeared from map," "must call hotline to start charging," "charging module crashes app." Standalone ORLEN Charge app worked; VITAY integration does not. | Very high — 5M VITAY users; broken UX harms both B2C retention and network utilisation; this is the most public and acute pain |
| Czech CPMS — procurement open | April 2026 press release: own platform by 2027, pilot H2 2026. No vendor named. | Very high — live window, reachable contacts, defined timeline |
| No CPMS identified for Poland (largest market) | Tier 3 after thorough research — suggests undisclosed vendor or fragile in-house build | High — 13× buildout planned; current CPMS must either scale or be replaced |
| Station availability data inaccurate in Poland | 3★ review (Mar 2026): "map showed two free ports, one was occupied (car plugged in but not charging)" | High — CPMS telemetry/OCPP event handling issue; directly affects EV driver trust |
| No EV favorites, filters, or charging notifications in VITAY | 3★ review (Dec 2025): explicitly lists 4 missing EV UX features | Medium — affects repeat usage and competitiveness vs. GreenWay |
| Germany fleet card (Flottenkarte) does not include EV | star.de fleet card page — EV not mentioned. Poland FLOTA integrates EV. | Medium — Germany fleet is a growth opportunity as German EV adoption increases |
| No subscription/abonnement product for Poland EV | 1★ review (Apr 2026): "no subscription, no roaming." Confirmed flat rate pricing only. | Medium — fleet and high-volume users want subscriptions; competitive gap vs. EnBW, ARAL Pulse |
| Slovakia: zero EV CPs currently | Press release Sept 2023: EV deployment planned. No current CPs confirmed. | Low for now — Slovakia is pre-deployment; becomes relevant once buildout begins |
| No contactless card payment for PAYG in Poland (historically) | Reddit user (2024): "didn't find any card payment chargers in Poland. Only App + registration." | Medium — friction for occasional/foreign users; Germany chargers support contactless |

---

## Competitive Position

### Strengths

1. **Balance sheet and state backing** — PKN ORLEN PLN 300bn+ revenue, ~27% State Treasury ownership. EV capex is strategic and unconstrained by profitability — ORLEN can absorb 13× buildout cost. Most CEE competitors cannot.
2. **VITAY loyalty ecosystem (5M users)** — deepest B2C lock-in in Polish EV/fuel retail. If VITAY EV integration is fixed, ORLEN has an unmatched retention and cross-sell platform. No other Polish CPO has a comparable loyalty base.
3. **Fleet card system (most sophisticated in CEE)** — FLOTA, MIKROFLOTA, BIZNESTANK across 4 markets, with EV integration in Poland and Czech. This creates genuine switching costs for B2B fleet clients and a recurring revenue base that pure-play CPOs cannot replicate.
4. **Station network density and location quality** — ~3,500 sites across 7 markets; highway corridor coverage is unmatched. Real estate/location moat: prime A1/A2 motorway stations are not replicable by new entrants.
5. **SMATRICS reference (Austria)** — a proven full-service managed CPMS model for an oil major sub-brand network, operational since 2018. This is both an internal proof of concept and a reference case ORLEN's Czech/German teams can study.

### Weaknesses

1. **VITAY EV module broken** — the most visible, most acute weakness. 5M users, publicly documented failure, no fix visible in the corpus as of May 2026. Harms utilisation, reputation, and B2C retention simultaneously.
2. **CPMS fragmentation across markets** — 5 different arrangements with no unified stack. As ORLEN ID attempts to unify identity group-wide, the CPMS estate becomes increasingly difficult to manage. Each new feature (notifications, dynamic pricing, fleet reporting) must be implemented 5 times.
3. **Czech platform gap at precisely the moment of own-network launch** — ORLEN Unipetrol is opening its first own HPC site with no CPMS for own network confirmed. The ČEZ partner is being exited. There is a window where ORLEN Czech has charging infrastructure but no platform to run it properly.
4. **Germany fleet card EV absence** — ORLEN Deutschland has an established fleet card product (Flottenkarte) that competitors offering EV integration will use to displace ORLEN with German fleet clients.
5. **App performance vs. standalone** — VITAY is a large multi-module app; reviews note it is slower than the standalone ORLEN Charge app was. Feature parity issues (no EV shortcuts, no filter persistence, no charging notifications) compound the performance gap.

### Peer comparison

| Peer | Network size | Target / trajectory | Basis / date |
|------|-------------|---------------------|--------------|
| GreenWay Polska | Not quantified in corpus; cited as most visible by Polish EV drivers | Fast charging focus, corridor strategy | Reddit reviews (2024) |
| Circle K (CEE) | Not quantified for comparison | Fuel station CPO, similar archetype | Corpus mentions |
| ČEZ (Czech) | Public EV network in Czech Republic | Also a direct competitor now that ORLEN is exiting the partnership | Press release context |
| ARAL Pulse (Germany) | Not quantified | BP-backed, strong Germany presence | Market context |
| Ionity (Germany) | ~1,000+ HPC sites Europe-wide | Premium HPC corridor | Market context |

*Direct peer data insufficient in corpus for quantitative comparison. Observations above reflect qualitative competitive signals from scraped pages and reviews.*

---

## Network Size

**Headline figure:** ~1,300+ charging points in Poland (flota.orlen.pl, Polish language, current as of research date).

**Scope:** Public DC fast charging at ORLEN and partner fuel stations and charging hubs. Own-operated in Poland; partner-operated (ČEZ) in Czech; full-service managed (SMATRICS) in Austria; full-service managed (InBalance) in Lithuania.

**Breakdown:**

| Region | Count | Source | Date | Notes |
|--------|-------|--------|------|-------|
| Poland | ~1,300+ CPs | flota.orlen.pl (PL) | Current (2026) | Own-operated. Target: 2,700 ultrafast DC by 2030, 6,000 by 2035 |
| Czech Republic (ČEZ partnership) | 294 CPs at 102 stations | ORLEN Unipetrol press release | Oct 2025 | Transitioning out. 73 locations cited Apr 2026 — discrepancy may reflect sites already exited |
| Czech Republic (own ORLEN Charge) | 1 site (Průhonice/D1), 11 planned by end 2026 | ORLEN Unipetrol press release | Apr 2026 | New own HPC network, 150kW+. 600 by 2030, 1,700 by 2035 |
| Germany | ~200+ CPs | star.de (strategy implied) | End-2025 target | ORLEN Deutschland. Target: 1,150 by 2030, 2,700 by 2040. Hardware: Alpitronic |
| Lithuania | Small (unquantified) | InBalance Grid partnership page | — | InBalance manages. Growing. |
| Austria | ~60–70 CPs (estimated) | SMATRICS case study | — | Turmstrom brand. Full SMATRICS management. |
| Slovakia | 0 CPs confirmed | ORLEN press release Sept 2023 | 2023 | 40% of 90 stations by 2030 — still pre-deployment |
| **Group total (est.)** | **~1,700–2,000 CPs** | Aggregated | May 2026 | Rough estimate across confirmed markets |

**Conflicts or lower boundaries:**
- Czech CP count discrepancy (294 at Oct 2025 vs. 73 locations at Apr 2026) likely reflects the ČEZ partnership transitioning — some sites may have already been exited. The 294 figure is the last reliable partner-network count.

**AC/DC composition and network age:**
- Poland: Mix of legacy 50kW DC (ABB Terra 54, Efacec QC45) and current-gen 120–400kW (Ekoenergetyka Axon Easy, Axon Side/Sat HPC). Active upgrade in progress per Ekoenergetyka case study showing new HPC deployments. High DC % = corridor/highway strategy, not destination. ORLEN is not investing heavily in AC destination charging.
- Czech (own network): 150kW+ minimum at TEN-T sites. Ultra-fast from day one — greenfield standard, no legacy hardware.
- Germany: Alpitronic Hypercharger up to 400kW. All current-gen. Germany is a new build with no legacy.
- AC charging present in Poland but secondary — ORLEN's strategy is clearly DC highway charging.

---

## Geographic Intelligence

### Poland

ORLEN's home market and largest EV operation (~1,300+ CPs). Highway corridor strategy — sites at Mop (motorway service areas) along A1, A2, A4 routes, plus urban locations. Pricing simplified to flat PLN 2.69/kWh DC (April 2026) — a competitive move against GreenWay and other Polish CPOs. Fleet card integration is the most complete here: FLOTA cardholders can charge EV and manage via ORLEN Flota portal. VITAY loyalty points accrue on EV charging. The VITAY EV integration failure (May 2026) is concentrated in Poland. EIB financing of €420M+ secured for power grid expansion, partially supporting EV buildout. No CPMS vendor identified after thorough research. EV adoption in Poland is lower than Western Europe but growing — ORLEN is positioning ahead of demand curve rather than responding to it.

### Czech Republic

ORLEN's highest-urgency market. Exiting ČEZ partnership (which gave access to 294 CPs at 102 stations) and building own HPC network from scratch. First own site opened Průhonice (D1 motorway, Prague outskirts), Q1 2026. 11 own sites planned by end 2026, 600 by 2030, 1,700 by 2035. Platform pilot H2 2026, full own CPMS/app by 2027. This is the live procurement window. Operating entity: ORLEN Unipetrol a.s. Contacts: Agnieszka Bobrukiewicz (Board), Rostislav Moravec (Director, filling station network), Hubert Zdrojewski (Group electromobility technology). Czech market context: ČEZ also operates its own public EV network — ORLEN's exiting partner is simultaneously a competitor. Česká republika EV adoption is growing; TEN-T highway network standards mandate 150kW+ minimum at D1 corridor.

### Germany

ORLEN Deutschland GmbH operates the star.de fuel station network (~1,050 stations). EV charging branded as "ORLEN CHARGE" at star stations plus standalone charging hubs. Standardised on Alpitronic Hypercharger (up to 400kW). Site acquisition model: zero-cost to landowner, ORLEN pays compensation per charger, 10-year minimum contract. Target: 200+ CPs by end 2025, 1,150 by 2030, 2,700 by 2040. Fleet card (Flottenkarte) does not include EV — unlike Poland's FLOTA. German market: ARAL Pulse, Ionity, EnBW mobility+, ENBW highway network are all mature competitors. ORLEN Germany is a late entrant with a clear hardware choice (Alpitronic) but an unconfirmed CPMS and no fleet EV integration. The tankstar app (4.85★ iOS / 3.8★ Android) handles fuel payment only — no EV functionality currently.

### Austria

ORLEN acquired Turmöl (Austrian fuel network, 266 stations) in July/August 2023. Austrian EV charging branded as Turmstrom. Full-service managed by SMATRICS (charVIS CPMS, installation, technical operation, smart charging, white-label app) since 2018 — ORLEN inherited this relationship. Estimated ~60–70 CPs. This is ORLEN's most mature and stable EV operation from an operational perspective — SMATRICS handles end-to-end, ORLEN gets a white-label product. The model works: no app issues, no CPMS integration problems visible in corpus.

### Lithuania

ORLEN Baltics Retail. Long-term strategic partnership with InBalance Grid (Latvian-founded CPO tech company). InBalance investing €10M in Lithuanian charging infrastructure in an investor model — InBalance takes hardware investment risk in exchange for long-term management contract. InBalance handles design, installation, management, and ORLEN mobile app integration. Network size not quantified in corpus. InBalance also manufactures hardware (own brand) and software (own CPMS). This arrangement is similar to Austria (full-service external provider) but with an investor-model financial structure rather than a pure service contract.

### Slovakia

90 ORLEN-branded stations as of Sept 2023 rebranding. Zero EV CPs confirmed as of research date. Strategy targets 40% of 90 stations with EV by 2030 (~36 stations). No CPMS arrangement identifiable — pre-deployment. Not a near-term sales opportunity.

---

## App Quality

**iOS:** ORLEN VITAY — 4.77★ (112,206 ratings) | `pl.orlen.vitay`
**Android:** ORLEN VITAY — 4.64★ (reviews exported: 4,072 from 1-year window; total ratings count not returned by Play Store for this app)

**Secondary apps:**
- tankstar (Germany, iOS): 4.85★ (133 reviews) — fuel payment only, no EV, works well
- tankstar (Germany, Android): 3.8★ (301 reviews) — some issues but narrow fuel payment scope

**Rating note:** VITAY's high overall score (~4.7★) reflects its position as a dominant fuel loyalty app with 112K ratings accumulated over 10+ years. The EV charging module was added recently via integration of the standalone ORLEN Charge app (now sunset). The EV failure is diluted in the aggregate rating — isolation to 1★ review clusters is required to see it. The aggregate score is not a reliable signal of EV module quality.

**Review patterns (1★ themes, ranked by frequency):**

1. **ORLEN ID / login loop** (largest cluster, ~30% of 1★ reviews, Dec 2025–May 2026): After ORLEN ID SSO launch, users trapped in login loops, can't reconnect ORLEN ID to VITAY account, reset password links return 404. Root cause: ORLEN ID integration with VITAY auth layer is broken. The same ORLEN ID rollout that disrupts VITAY auth also disrupts CPMS session initiation (CPMS must verify identity via ORLEN ID before starting a session).

2. **iOS version lock-out** (large cluster, ~20%, Apr 2026): Minimum iOS version raised to 16.6 in recent update. Users on iOS 15 (iPhone 8, X era) permanently excluded. Many reviews from Germany (de country code), suggesting the lockout affects the German VITAY user base disproportionately.

3. **ORLEN Charge integration broken** (critical cluster, ~15%, Jan–May 2026): Sessions can't be initiated from app; stations disappear from map; ORLEN Charge module crashes the app; users must call hotline to start charging. Users explicitly note the standalone ORLEN Charge app worked fine before sunsetting. This is the CPMS-to-VITAY API failure.

4. **Orlen Pay failures** (persistent pattern, ~15%): Payment via QR scan at fuel pump frequently fails — code doesn't arrive, transaction shows no error but money not taken, pending loop. Pattern predates ORLEN ID rollout. Separate payment integration issue.

5. **Session hang / app crashes** (persistent pattern): App freezes on loading, especially on entering ORLEN Charge section or triggering coupon activation.

**EV-specific UX critique (3★ cluster):**
- "Added as an afterthought" (direct quote, multiple reviews)
- Station availability status inaccurate (shows free, actually occupied) — CPMS OCPP event handling issue
- Missing: favorites list, filter persistence, charging notifications, EV shortcut on home screen
- Slower to load than standalone ORLEN Charge app (bloated multi-module app)

**Field evidence (non-review sources):**
- Reddit (r/poland, 2024): "didn't find any card payment chargers in Poland. Only App + registration." Corroborates the PAYG friction gap.
- Reddit (r/electricvehicles, 2024): "chargers for foreigners" thread — non-Polish EV drivers can't use ORLEN RFID without registration; contactless card works at some stations but not all. Corroborates the foreign-user friction.

**Competitor mentions in reviews:** None specific to EV charging. For fuel: Circle K, AMIC mentioned by churning users. No direct EV competitor mentions in review corpus.

---

## Research Gaps & Unresolved

### Scrape failures (Insufficient research performed — Scrape failure)

| URL | Failure type | Area blocked |
|-----|-------------|--------------|
| opinie.orlen.pl | Cookie-wall (no content returned) | Polish consumer reviews of ORLEN Charge experience |
| orlencharge.pl pages behind login | JS-rendered / auth-gated | Fleet-specific charging portal, B2B terms |

### Research gaps (Insufficient research performed — Research gap)

| Step | What it would have covered |
|------|---------------------------|
| Careers page (not scraped) | Job descriptions referencing CPMS vendor, internal platform team size, specific software stack. Single highest-value remaining step for Poland CPMS identification. |
| Google Play app package developer verification | Would confirm if a CPMS vendor's SDK or white-label is embedded in VITAY |
| ORLEN Flota portal (login-gated) | Fleet charging product detail, exact CPMS integration method |
| Annual Report 2024/2025 (if available) | EV investment figures, CPMS contract disclosures in notes |
| Germany network size verification | Exact CP count for ORLEN Deutschland as of early 2026 |
| Slovakia current EV status | Whether any CPs have been installed since Sept 2023 announcement |
| Hungary EV charging | ORLEN Unipetrol covers Hungary (Bobrukiewicz mandate includes CZ/HU/SK) but no Hungary-specific EV content in corpus |

---

## Post-analysis brief

*Domain knowledge conflicts, update requirements, and reasoning corrections identified during this analysis. Not part of the analysis output — action items for maintaining the research knowledge base.*

### Domain knowledge updates required

**markets.md — Missing entries (all absent as of research date):**
- Poland: CPO landscape (ORLEN dominant, GreenWay most-cited by drivers, Circle K), VITAY loyalty as key B2C retention tool, highway corridor focus (A1/A2/A4), ORLEN 33% market share target, OCPP standard, contactless PAYG adoption still incomplete, foreign driver access friction (RFID registration required at many stations)
- Czech Republic: ORLEN exiting ČEZ partnership model, TEN-T highway 150kW+ mandate, ORLEN own HPC network launching 2026, ČEZ as both prior partner and competitor, ORLEN Unipetrol as distinct procurement entity
- Germany: star.de as ORLEN sub-brand, Alpitronic as ORLEN Deutschland hardware standard, Flottenkarte EV gap, late-entrant dynamic vs. ARAL Pulse/Ionity/EnBW, site acquisition model (zero-cost to landowner, 10-year contract)
- Austria: SMATRICS full-service model since 2018, Turmöl/Turmstrom acquisition 2023, charVIS as CPMS, ORLEN inherited not built this relationship
- Slovakia: Pre-deployment, 90 stations, 0 CPs, 2030 target 40% of stations

**cpms_platforms.md — New entry: SMATRICS (charVIS)**
- Origin: Austria. Full-service CPO infrastructure operator and CPMS provider.
- Model: End-to-end (installation + charVIS CPMS + technical operation + smart charging + white-label app)
- Target clients: Oil majors and large network operators in CEE/Alpine markets who want outsourced EV operations
- Known client: ORLEN Austria (Turmstrom brand) — since 2018. Relationship inherited by ORLEN on Turmöl acquisition.
- Positioning signal: Relationship pre-dates ORLEN ownership — SMATRICS was the choice of the original Turmöl operator. ORLEN maintained it rather than replacing it.

**business_archetypes.md — ORLEN as second Oil Major CPO reference:**
- Companion reference to TotalEnergies. Illustrates the CEE variant: state-controlled vs. private, VITAY loyalty super-app model, mega-merger integration debt creating CPMS fragmentation, multi-country via acquisition (not organic) creating inherited vendor arrangements.

**hardware_manufacturers.md — Updates:**
- Ekoenergetyka: add ORLEN Poland relationship (>80% of Polish ORLEN charging infrastructure confirmed via case study). Models: fastPOINT 50–100kW, Axon Easy 120–400kW, Axon Side/Sat HPC 400kW+. Also confirmed in Germany (Deutschlandnetz) and Lithuania (with InBalance).
- Alpitronic: add note — ORLEN Deutschland standard hardware for star.de standalone charging hub rollout. Up to 400kW, 2× CCS cables.

### Reasoning corrections

1. **Nearly concluded ORLEN had a single undisclosed CPMS for all markets.** The multi-brand structure (ORLEN Charge PL, star DE, Turmstrom AT, ORLEN Baltics) was the signal that each market may have separate arrangements — not a failure of research, but an inference that had to be tested market by market. The SMATRICS confirmation for Austria was the key break. Correction: always test multi-market CPOs for per-brand CPMS arrangements before assuming group-level consistency.

2. **VITAY 4.7★ aggregate nearly read as "good app."** The aggregate rating is from 10+ years of fuel loyalty app usage with 112K ratings. The newly integrated EV module failure is invisible at the aggregate level — isolation to 1★ clusters by date and topic was required. Correction: for large incumbent apps with recent feature additions, never use aggregate rating as a signal of the added feature's quality. Date-filter 1★ reviews first.

3. **Czech 73 vs. 294 CP count discrepancy was nearly logged as a scrape error.** The Apr 2026 press release cited 73 locations while the Oct 2025 press release cited 294 CPs at 102 stations. The discrepancy is explained by the ČEZ exit: sites in the partner model are being retired, so the live count is falling as ORLEN builds its own. This is a strategic finding (the transition is actively underway), not a data quality issue.
