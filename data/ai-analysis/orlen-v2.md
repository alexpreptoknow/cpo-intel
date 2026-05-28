# CPO Analysis — ORLEN (v2)

**Date:** 2026-05-20
**Analyst:** Claude
**Source:** 108 scraped pages + 5,782 app reviews from p2k DB — company_id: 6727147c-77bf-4971-96b4-de5645a789ec (`Scraped Pages/Orlen.md`, `Scraped Pages/Orlen — App Reviews.md`)
**Coverage:** ≈85% of non-noise pages read across 10 batches. Read: own-domain orlencharge.pl, orlen.pl, flota.orlen.pl, star.de, orlenunipetrol.cz, partner/vendor pages (SMATRICS, InBalance, Ekoenergetyka), SERP results, Reddit, app reviews. Gaps: careers page not scraped (no job descriptions to confirm CPMS vendor); opinie.orlen.pl scrape failed (cookie-wall); ORLEN Unipetrol history page (82K chars, navigation-heavy — skipped); page 81 Strategy 2035 PDF read partially.
**v2 changes:** Added Development Stage & Trajectory, Competitive Position, Geographic Intelligence, Ancillary Tech Stack, and Post-analysis brief sections. Synthesis updated with Development stage, Where this is going, and Adjacent leads fields.

---

## Synthesis

*Self-contained. A reader who reads only this section should understand the company, the CPMS situation, and the sales verdict.*

**What ORLEN clearly is:** Poland's largest energy company (state-controlled, ~PLN 300bn+ revenue), running CEE's biggest fuel station network: ≈3,500 sites across 7 markets (Poland, Czech, Germany, Slovakia, Lithuania, Hungary, Austria). EV charging sits inside the Retail division as a strategic energy transition play. This is a textbook Oil Major CPO: balance sheet-backed capex, fossil fuel card heritage (5 fleet card tiers, 5M+ VITAY loyalty users), multi-country footprint via subsidiary brands (ORLEN Charge PL, star DE, ORLEN Benzina CZ), and EV goals driven by brand repositioning as much as economics. The ORLEN Group Strategy 2035 (Jan 2025) commits to 2,700 ultrafast DC charging points in Poland alone by 2030 (currently ≈200), 6,000 by 2035, and 33% Polish EV energy market share. Across all markets, the total group EV buildout is one of the largest planned in CEE.

**CPMS:** Five separate situations across markets — no single vendor covers the group.
- **Poland (ORLEN Charge, ≈1,300+ CPs):** Not identified — Insufficient research performed (research gap: careers page not scraped). Research thorough across 108 pages of public-facing content; vendor not disclosed in any source found. The standalone ORLEN Charge app was sunset May 2026 → merged into VITAY loyalty app. The migration is broken as of this writing: charging sessions can't be initiated from the integrated app, stations disappear from the map, users are directed to call a hotline to start charging. Most likely a CPMS-to-VITAY API integration failure — the session initiation failure and map disappearance are documented; whether the fault sits at the CPMS vendor layer or in ORLEN's own integration code cannot be confirmed from public data, but an external vendor with a fragile API is the more probable explanation (an in-house team would have direct access to fix the integration).
- **Czech Republic (294 CPs at 102 stations, partner model → transitioning):** Was operated under ČEZ partnership (Czech state utility). ORLEN is actively exiting: first own ORLEN Charge HPC site opened at Průhonice (D1 motorway) Q1 2026. Own "fully integrated digital platform" and mobile app pilot by H2 2026, full platform by 2027. CPMS for own network: not identified — live procurement window.
- **Austria (Turmstrom brand, ≈60+ CPs):** SMATRICS (charVIS CPMS). Tier 1 — confirmed from SMATRICS case study page. Full-service contract since 2018: installation, technical operation, charVIS CPMS, smart charging, white-label app. ORLEN acquired Turmöl in 2023 and inherited the SMATRICS relationship.
- **Lithuania (ORLEN Baltics Retail):** Most likely InBalance Grid. Tier 2 — InBalance confirmed as "long-term strategic partner" handling design, installation, management, and ORLEN mobile app integration. InBalance manufactures own hardware and software stack; functional role matches CPMS provider.
- **Germany (star.de / ORLEN Deutschland, 60→200+ CPs):** Not identified. Hardware: Alpitronic Hypercharger (up to 400kW) — explicitly named on site acquisition pages.

**What's absent:**
- No CPMS vendor disclosed anywhere in 108 pages for Poland's main network — unusual at this scale. Suggests either a white-label/undisclosed arrangement or an in-house build under pressure. The VITAY integration failure points toward the former: if it were in-house, the app team would have access to fix the integration directly.
- **VITAY EV session initiation broken (as of May 2026):** Charging sessions fail to start via the VITAY app; stations disappear from the map; users directed to call a hotline to charge. Rated Very High in Business Gaps — the most acute publicly documented operational pain for ORLEN's primary market. The integration failure was triggered by the May 2026 standalone ORLEN Charge app sunset and has been building since January 2026.
- **Czech CPMS — procurement open (time-sensitive):** ORLEN Unipetrol is building its first own HPC network (one site live as of April 2026) without a confirmed own-CPMS vendor. Stated deadline: platform pilot H2 2026, full digital platform by 2027. A vendor selection is live or imminent. Confirm current status before treating as an open window — a vendor may have been selected since May 2026.
- No roaming partner list or Hubject/eRoaming membership confirmed for Poland in corpus (mentioned in SERP but unverifiable). Expected for a network of this size.
- No careers page scraped — can't confirm whether ORLEN employs platform engineers or relies entirely on vendor.
- Fleet EV charging integration in Germany: the Flottenkarte (German fleet card) does NOT include EV charging. Poland's FLOTA card does. This gap is real and growing.
- Slovakia: Zero EV CPs currently deployed despite 2023 announcement.

**What explains what's observed:** ORLEN is running EV charging as 7 largely independent country operations inside one corporate structure — a direct consequence of the 2022 mega-merger (PKN ORLEN + Lotos + PGNiG + Energa) which created integration debt across all divisions. Each market has a different partner model inherited from pre-merger history: Austria was outsourced to SMATRICS from day one (2018, before ORLEN owned it); Czech was outsourced to ČEZ and is now being insourced; Lithuania uses InBalance Grid as a regional infrastructure builder; Germany operates under a separate legal entity. Poland — the largest and most strategically important — has the least visible CPMS relationship, consistent with an undisclosed vendor facing a difficult API integration. The VITAY super-app consolidation (all services → one app) is the platform forcing function: whoever manages CPMS in Poland must integrate with VITAY's API layer, and that integration is currently broken publicly.

**Development stage:** Poland (ORLEN Charge) is Stage 3 — multi-market, sophisticated fleet card integration (FLOTA, MIKROFLOTA, BIZNESTANK across PL/CZ/DE/LT), own-branded app, roaming capability, loyalty program integration. Ambitions are Stage 4 (VITAY as mobility super-platform), but the CPMS-to-VITAY integration failure indicates the operational model is Stage 3 under pressure, not yet Stage 4. Czech Republic is Stage 2 — building its first own-brand network now, no platform yet. Austria and Lithuania are Stage 2 (full-service managed by single external vendor). Germany is Stage 2→3 (own brand, Alpitronic hardware, no fleet EV integration). The Group as a whole is a fragmented Stage 3 structure — each market at a different sub-stage with no unified CPMS stack.

**Where this is going:** The VITAY consolidation is forcing ORLEN Poland toward a CPMS platform decision within 1–2 years — either fix the current vendor's API integration or replace the platform. The Czech greenfield build forces a CPMS selection by H1 2026 (platform pilot in H2 2026 per stated plan). Germany will face a fleet card EV integration decision as German fleet clients request it — timeline less clear but tied to German EV adoption curve. Over a 3–5 year horizon, the 2022 mega-merger integration debt will push progressive CPMS rationalisation across markets: operating 5 different arrangements is sustainable in the short term (each is outsourced) but creates escalating complexity as ORLEN ID and VITAY attempt to unify the customer-facing layer across all 7 markets. The pressure point is the app — if VITAY is the single customer interface, all market CPMS stacks must integrate with it. That's the architectural forcing function that makes fragmentation untenable.

**Competitive pressure:** In Poland: GreenWay Polska (most-cited by EV drivers in routing apps), Circle K, LOTOS/BP (now merged into ORLEN but with legacy network). ORLEN is ahead on station count but behind on app quality. Czech: ČEZ operates its own public EV network — the partner ORLEN is exiting is also a competitor. Germany: ARAL Pulse (BP), Ionity, EnBW mobility+, ENBW highway network — ORLEN Germany is a small player entering a competitive market. The Alpitronic hardware choice is competitive; the absent fleet EV card is not.

**Sales priority: High.** Three signals combine: (1) Poland has ≈200 ultrafast DC CPs today and committed to 2,700 by 2030 — that's a 13× buildout with an undisclosed and apparently troubled CPMS; (2) Czech Republic is in an open procurement window — stated "own digital platform by 2027" means a decision is being made now; (3) the VITAY integration failure is a documented, public, actively worsening pain point that a better CPMS could address directly.

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
| Parent company | None — PKN ORLEN is the parent. State Treasury holds ≈27% | orlen.pl |
| Parent origin | Integrated energy / oil major | — |
| Archetype | Oil Major CPO | business_archetypes.md |
| Markets | Poland, Czech Republic, Germany, Lithuania, Slovakia, Hungary, Austria | orlenunipetrol.cz, orlen.pl |
| CPMS (current) | Poland: Not identified — Insufficient research performed (careers page not scraped). Czech: ČEZ (exiting) → own platform TBD. Austria: SMATRICS charVIS (Tier 1). Lithuania: InBalance Grid (Tier 2). Germany: Not identified. | Various — per market above |
| CPMS (previous) | Czech: ČEZ partnership (exiting as of Q1 2026) | ORLEN Unipetrol press release Apr 2026 |
| Hardware (Poland) | Ekoenergetyka (>80%): fastPOINT, Axon Easy, Axon Side/Sat HPC. Legacy: ABB Terra 54, Efacec QC45 | Ekoenergetyka case study |
| Hardware (Germany) | Alpitronic Hypercharger (up to 400kW) | star.de site acquisition page |
| Charging types | DC fast (primary): 50kW legacy → 150–400kW current. AC: 7–22kW secondary | orlencharge.pl, star.de |
| Network size (Poland) | ≈1,300+ CPs | flota.orlen.pl (PL, current 2026) |
| Network size (Czech) | 294 CPs at 102 stations (ČEZ partnership) → 11 own HPC sites by end 2026 | Press releases Oct 2025, Apr 2026 |
| Network size (Germany) | ≈200+ CPs by end 2025; targeting 1,150 by 2030 | star.de |
| App (iOS) | ORLEN VITAY: 4.77★ / 112,206 ratings (as of May 2026) | App Store |
| App (Android) | ORLEN VITAY: 4.64★ / 4,072 reviews — 1-year window (as of May 2026) | Google Play |
| Key leadership (as of May 2026) | Agnieszka Bobrukiewicz (ORLEN Unipetrol board — Retail CZ/HU/SK, Convenience ORLEN Group); Rostislav Moravec (Director, ORLEN CZ filling station network); Hubert Zdrojewski (Director of product development and electromobility technology, ORLEN Group) | Press releases |

---

## Parent Company & Corporate Context

**Parent:** None — PKN ORLEN S.A. is the parent group. EV charging sits within the Retail segment.
**Parent industry origin:** Oil major / integrated energy company
**Ownership structure:** Publicly listed on Warsaw Stock Exchange; State Treasury holds ≈27%; ORLEN is itself the result of a 2022 mega-merger (PKN ORLEN + Lotos + PGNiG + Energa). Post-merger integration is ongoing.
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

### Leadership (as of May 2026)

| Name | Role (as of May 2026) | Background | Mandate signal |
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
- Germany's EV buildout (own brand, Alpitronic hardware, site-acquisition model — Stage 2→3 signals) is inconsistent with the fleet card product (Flottenkarte explicitly excludes EV — a Stage 2 limitation). ORLEN Deutschland is building a Stage 2→3 public charging network while its B2B product lags behind at Stage 2. This is internally consistent with a sequential buildout (public network first, fleet integration added later) but creates a window where fleet clients moving to EV cannot be served by ORLEN Deutschland's billing stack. Germany is assigned Stage 2→3 to reflect the public network trajectory, with the fleet EV gap noted as the unresolved Stage 2 hangover.

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

**Evidence tier (Poland):** Not identified — Insufficient research performed (Research gap: careers page not scraped). Research covered 108 pages across all standard public-facing source types — own-domain pages, app store metadata, vendor case study pages, SERP results; vendor not disclosed in any source found. Per evaluation_frameworks.md, Tier 3 requires all standard source types checked including careers; the careers page was not scraped. Once the careers page is checked: if still nothing found → upgrades to Tier 3. If a vendor is named in a job description → upgrades to Tier 1 or Tier 2.

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

**What was checked — Poland:**
- [x] Own-domain pages (orlencharge.pl, orlen.pl, flota.orlen.pl)
- [x] App store package name / developer field: `pl.orlen.vitay` (iOS + Android) — developer: PKN ORLEN S.A.
- [x] Vendor case study pages (Ekoenergetyka — hardware only; Hubject — not found; Ampeco — not found; no CPMS vendor case study naming ORLEN PL found)
- [x] CPO press releases / investor materials — no vendor named
- [ ] Careers page — NOT SCRAPED (research gap; highest-value remaining step for Poland CPMS identification)
- [x] SERP queries — 7 searches run (see research notebook SERP section)

**What was checked — Germany (star.de):**
- [x] Own-domain pages (star.de)
- [x] App store: tankstar app (iOS: 4.85★; Android: 3.8★) — fuel payment only, no EV CPMS branding
- [ ] Vendor case study pages — no CPMS vendor case study naming ORLEN Deutschland found in corpus
- [ ] Careers page — NOT SCRAPED
- [x] SERP queries — no Germany-specific CPMS query run; SERP focus was on Poland and group-level. Germany CPMS research gap: no dedicated Germany CPMS SERP query in corpus.

**What was checked — Austria:**
- [x] SMATRICS case study page (scraped, page 21) — Tier 1 confirmation
- [x] Own-domain pages for Turmstrom — no contradicting CPMS evidence

**What was checked — Lithuania:**
- [x] InBalance Grid partnership page — Tier 2 confirmation

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
| Czech CPMS — procurement open | April 2026 press release: own platform by 2027, pilot H2 2026. No vendor named as of May 2026 research date. Time-sensitive — confirm current status: a vendor may have been selected since May 2026. | Very high — live window (confirm still open), reachable contacts, defined timeline |
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

1. **Balance sheet and state backing** — PKN ORLEN PLN 300bn+ revenue, ≈27% State Treasury ownership. EV capex is strategic and unconstrained by profitability — ORLEN can absorb 13× buildout cost. Most CEE competitors cannot.
2. **VITAY loyalty ecosystem (5M users)** — deepest B2C lock-in in Polish EV/fuel retail. If VITAY EV integration is fixed, ORLEN has an unmatched retention and cross-sell platform. No other Polish CPO has a comparable loyalty base.
3. **Fleet card system (most sophisticated in CEE)** — FLOTA, MIKROFLOTA, BIZNESTANK across 4 markets, with EV integration in Poland and Czech. This creates genuine switching costs for B2B fleet clients and a recurring revenue base that pure-play CPOs cannot replicate.
4. **Station network density and location quality** — ≈3,500 sites across 7 markets; highway corridor coverage is unmatched. Real estate/location moat: prime A1/A2 motorway stations are not replicable by new entrants.
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
| Ionity (Germany) | ≈1,000+ HPC sites Europe-wide | Premium HPC corridor | Market context |

*Direct peer data insufficient in corpus for quantitative comparison. Observations above reflect qualitative competitive signals from scraped pages and reviews.*

---

## Network Size

**Headline figure:** ≈1,300+ charging points in Poland (flota.orlen.pl, Polish language, current as of research date).

**Scope:** Public DC fast charging at ORLEN and partner fuel stations and charging hubs. Own-operated in Poland; partner-operated (ČEZ) in Czech; full-service managed (SMATRICS) in Austria; full-service managed (InBalance) in Lithuania.

**Breakdown:**

| Region | Count | Source | Date | Notes |
|--------|-------|--------|------|-------|
| Poland | ≈1,300+ CPs | flota.orlen.pl (PL) | Current (2026) | Own-operated. Target: 2,700 ultrafast DC by 2030, 6,000 by 2035 |
| Czech Republic (ČEZ partnership) | 294 CPs at 102 stations | ORLEN Unipetrol press release | Oct 2025 | Transitioning out. 73 locations cited Apr 2026 — discrepancy may reflect sites already exited |
| Czech Republic (own ORLEN Charge) | 1 site (Průhonice/D1), 11 planned by end 2026 | ORLEN Unipetrol press release | Apr 2026 | New own HPC network, 150kW+. 600 by 2030, 1,700 by 2035 |
| Germany | ≈200+ CPs | star.de (strategy implied) | End-2025 target | ORLEN Deutschland. Target: 1,150 by 2030, 2,700 by 2040. Hardware: Alpitronic |
| Lithuania | Small (unquantified) | InBalance Grid partnership page | — | InBalance manages. Growing. |
| Austria | ≈60–70 CPs (estimated) | SMATRICS case study | — | Turmstrom brand. Full SMATRICS management. |
| Slovakia | 0 CPs confirmed | ORLEN press release Sept 2023 | 2023 | 40% of 90 stations by 2030 — still pre-deployment |
| **Group total (est.)** | **≈1,700–2,000 CPs** | Aggregated | May 2026 | Rough estimate across confirmed markets |

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

ORLEN's home market and largest EV operation (≈1,300+ CPs). Highway corridor strategy — sites at Mop (motorway service areas) along A1, A2, A4 routes, plus urban locations. Pricing simplified to flat PLN 2.69/kWh DC (April 2026) — a competitive move against GreenWay and other Polish CPOs. Fleet card integration is the most complete here: FLOTA cardholders can charge EV and manage via ORLEN Flota portal. VITAY loyalty points accrue on EV charging. The VITAY EV integration failure (May 2026) is concentrated in Poland. EIB financing of €420M+ secured for power grid expansion, partially supporting EV buildout. No CPMS vendor identified after thorough research. EV adoption in Poland is lower than Western Europe but growing — ORLEN is positioning ahead of demand curve rather than responding to it.

### Czech Republic

ORLEN's highest-urgency market. Exiting ČEZ partnership (which gave access to 294 CPs at 102 stations) and building own HPC network from scratch. First own site opened Průhonice (D1 motorway, Prague outskirts), Q1 2026. 11 own sites planned by end 2026, 600 by 2030, 1,700 by 2035. Platform pilot H2 2026, full own CPMS/app by 2027. This is the live procurement window. Operating entity: ORLEN Unipetrol a.s. Contacts: Agnieszka Bobrukiewicz (Board), Rostislav Moravec (Director, filling station network), Hubert Zdrojewski (Group electromobility technology). Czech market context: ČEZ also operates its own public EV network — ORLEN's exiting partner is simultaneously a competitor. Česká republika EV adoption is growing; TEN-T highway network standards mandate 150kW+ minimum at D1 corridor.

### Germany

ORLEN Deutschland GmbH operates the star.de fuel station network (≈1,050 stations). EV charging branded as "ORLEN CHARGE" at star stations plus standalone charging hubs. Standardised on Alpitronic Hypercharger (up to 400kW). Site acquisition model: zero-cost to landowner, ORLEN pays compensation per charger, 10-year minimum contract. Target: 200+ CPs by end 2025, 1,150 by 2030, 2,700 by 2040. Fleet card (Flottenkarte) does not include EV — unlike Poland's FLOTA. German market: ARAL Pulse, Ionity, EnBW mobility+, ENBW highway network are all mature competitors. ORLEN Germany is a late entrant with a clear hardware choice (Alpitronic) but an unconfirmed CPMS and no fleet EV integration. The tankstar app (4.85★ iOS / 3.8★ Android) handles fuel payment only — no EV functionality currently.

### Austria

ORLEN acquired Turmöl (Austrian fuel network, 266 stations) in July/August 2023. Austrian EV charging branded as Turmstrom. Full-service managed by SMATRICS (charVIS CPMS, installation, technical operation, smart charging, white-label app) since 2018 — ORLEN inherited this relationship. Estimated ≈60–70 CPs. This is ORLEN's most mature and stable EV operation from an operational perspective — SMATRICS handles end-to-end, ORLEN gets a white-label product. The model works: no app issues, no CPMS integration problems visible in corpus.

### Lithuania

ORLEN Baltics Retail. Long-term strategic partnership with InBalance Grid (Latvian-founded CPO tech company). InBalance investing €10M in Lithuanian charging infrastructure in an investor model — InBalance takes hardware investment risk in exchange for long-term management contract. InBalance handles design, installation, management, and ORLEN mobile app integration. Network size not quantified in corpus. InBalance also manufactures hardware (own brand) and software (own CPMS). This arrangement is similar to Austria (full-service external provider) but with an investor-model financial structure rather than a pure service contract.

### Slovakia

90 ORLEN-branded stations as of Sept 2023 rebranding. Zero EV CPs confirmed as of research date. Strategy targets 40% of 90 stations with EV by 2030 (≈36 stations). No CPMS arrangement identifiable — pre-deployment. Not a near-term sales opportunity.

---

## App Quality

**iOS:** ORLEN VITAY — 4.77★ (112,206 ratings, as of May 2026) | `pl.orlen.vitay`
**Android:** ORLEN VITAY — 4.64★ (reviews exported: 4,072 from 1-year window, as of May 2026; total ratings count not returned by Play Store for this app)

**Secondary apps (as of May 2026):**
- tankstar (Germany, iOS): 4.85★ (133 reviews) — fuel payment only, no EV, works well
- tankstar (Germany, Android): 3.8★ (301 reviews) — some issues but narrow fuel payment scope

**Rating note:** VITAY's high overall score (≈4.7★) reflects its position as a dominant fuel loyalty app with 112K ratings accumulated over 10+ years. The EV charging module was added recently via integration of the standalone ORLEN Charge app (now sunset). The EV failure is diluted in the aggregate rating — isolation to 1★ review clusters is required to see it. The aggregate score is not a reliable signal of EV module quality.

**Review patterns (1★ themes, ranked by frequency):**

1. **ORLEN ID / login loop** (largest cluster, ≈30% of 1★ reviews, Dec 2025–May 2026): After ORLEN ID SSO launch, users trapped in login loops, can't reconnect ORLEN ID to VITAY account, reset password links return 404. Root cause: ORLEN ID integration with VITAY auth layer is broken. The same ORLEN ID rollout that disrupts VITAY auth also disrupts CPMS session initiation (CPMS must verify identity via ORLEN ID before starting a session).

2. **iOS version lock-out** (large cluster, ≈20%, Apr 2026): Minimum iOS version raised to 16.6 in recent update. Users on iOS 15 (iPhone 8, X era) permanently excluded. Many reviews from Germany (de country code), suggesting the lockout affects the German VITAY user base disproportionately.

3. **ORLEN Charge integration broken** (critical cluster, ≈15%, Jan–May 2026): Sessions can't be initiated from app; stations disappear from map; ORLEN Charge module crashes the app; users must call hotline to start charging. Users explicitly note the standalone ORLEN Charge app worked fine before sunsetting. This is the CPMS-to-VITAY API failure.

4. **Orlen Pay failures** (persistent pattern, ≈15%): Payment via QR scan at fuel pump frequently fails — code doesn't arrive, transaction shows no error but money not taken, pending loop. Pattern predates ORLEN ID rollout. Separate payment integration issue.

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

## Triggering Events & Shifts

*Observable signals identified in the corpus that point to environmental disruption — vendor exits, regulatory deadlines, funding/M&A events, stage transition signals, archetype-specific shifts. This section scans the company against the triggering_events.md catalogue and identifies whether multiple triggers compound to point at a specific upcoming change. Produced by the `run-triggering-events` skill after all descriptive sections are written and before the Sales Analysis section.*

*This section is environmental signal — what's shifting around the company. The Decisions forced subsection in Development Stage & Trajectory covers internal operational pressure. The two are consistent — many named triggers here derive from the same root pressures — but are derived from different evidence sources.*

### Categories scanned

- [x] Vendor reliability — checked; none fired (confirmed hardware: Ekoenergetyka, Alpitronic — neither in distress; no confirmed CPMS dependency on Tritium, Easee, Everon, Plugsurfing, or Compleo)
- [x] Regulatory — checked; 2 active (AFIR contactless PAYG gap — Poland; Eichrecht — Germany CPMS gating); 2 latent (GEIG Germany site-host; EPBD IV EU building mandate)
- [x] Contract & procurement — checked; 1 active (Czech open procurement window); 1 latent (Poland CPMS renewal — no visible signal yet)
- [x] Stage transition — checked; 3 active (Czech Stage 2→3; Germany Stage 2→3 fleet gap; Poland Stage 3→4 M&A fragmentation)
- [x] Archetype-specific (Oil Major CPO) — checked; 3 active (Czech new entity building from zero; Germany separate entity on unknown stack; Poland group forcing event via VITAY failure)
- [x] Strategic & capital — checked; 1 active (CPO-level M&A — 2022 mega-merger integration debt ongoing); 1 latent (IP control — AWS partnership signal)
- [x] Operational quality — checked; 2 active (VITAY EV module failure — CPMS-level session start failure; network availability inaccuracy — distributed pattern); 1 latent (Poland CPMS OCPP version unconfirmed — careers not scraped)
- [x] Emerging revenue — checked; 2 active (VITAY loyalty integration broken — canonical named example in catalogue; CPMS fragmentation from M&A — canonical named example); 2 latent (InBalance investor lock-in; concession SLA exposure at scale)
- [x] Triggers to be added — 1 new candidate identified (corporate SSO/identity layer rollout disrupting CPMS session initiation — ORLEN ID case; noted for catalogue review)

### Active triggers

| Trigger | Category | Evidence (source + date) | Threshold candidate | Does not prove |
|---------|----------|--------------------------|---------------------|----------------|
| AFIR — contactless PAYG at DC chargers ≥50kW | Regulatory | Reddit/Poland (2024): "Only App + registration — no card payment chargers in Poland." Business Gap confirmed: "No contactless card payment for PAYG in Poland (historically)." ORLEN operates ≥50kW DC across all EU markets. | Big Problem (compliance gap; driver friction for non-registered users) | Switch required — AFIR is addressable by hardware terminal retrofit + CPMS payment layer update without full platform replacement. But the CPMS must support the payment terminal integration regardless. |
| Eichrecht — Germany CPMS must comply | Regulatory | ORLEN Deutschland operating ≈200+ CPs in Germany (star.de, end-2025 target). German law: MID-certified meters + kWh display for public billing. CPMS not identified for Germany — compliance unconfirmable. Alpitronic hardware is Eichrecht-capable; CPMS layer unknown. | Big Problem (gating — any new or replacement Germany CPMS must be Eichrecht-compliant before billing is legal) | That the current Germany CPMS is non-compliant — ORLEN is already billing in Germany, implying some arrangement exists. The trigger functions as a hard procurement gate for any Germany platform decision, not as confirmation of current non-compliance. |
| Czech CPMS procurement window open | Contract & procurement | ORLEN Unipetrol press release (Apr 13, 2026): "ORLEN is preparing its own mobile app with pilot launch H2 2026, full digital platform by 2027." First own HPC site: Průhonice/D1, Q1 2026. No vendor named. [Time-sensitive — confirm current status: a vendor may have been selected since May 2026.] | Big Missed Opportunity (greenfield selection window, reachable named contacts at separate legal entity) | Tender is still open — vendor may already have been selected privately. |
| Czech Stage 2→3 transition — own network, no CPMS | Stage transition | First own HPC site (Apr 2026 press release, ORLEN Unipetrol). Exiting ČEZ partnership model. Building own HPC network without confirmed CPMS for own operations. | Big Problem (live infrastructure without confirmed own-CPMS); Big Missed Opportunity (structural necessity creates a near-term selection) | That ORLEN Unipetrol has not already selected a vendor privately — no public procurement notice found in corpus. |
| Germany Stage 2→3 — fleet EV integration absent | Stage transition | star.de fleet card page confirms: Flottenkarte does NOT include EV. Poland FLOTA card integrates EV across PL/CZ/DE/LT. Germany targeting 1,150 CPs by 2030. Fleet clients will request EV billing as German EV adoption grows. | Big Missed Opportunity (fleet billing gap vs. competitors offering EV fleet integration) | That German fleet clients are actively requesting EV billing now — timing is demand-curve dependent. |
| Poland Stage 3→4 — M&A integration debt exposed at scale | Stage transition | 2022 mega-merger created 5 fragmented CPMS situations. 13× buildout planned (200 → 2,700 ultrafast DC CPs by 2030). VITAY EV module broken at app sunset (May 2026). Stage 4 signals absent: no unified CPMS, no confirmed DLM for Poland, B2B fleet EV integration incomplete in Germany. | Big Problem (fragmentation blocks the scale ambition); Big Missed Opportunity (a unified platform is the architectural prerequisite for the VITAY super-app vision) | That ORLEN is actively pursuing a unified CPMS vendor — no consolidation roadmap visible. The forcing function is architectural, not a stated strategic decision. |
| Oil Major archetype — Czech new entity building from zero | Archetype-specific (Oil Major CPO) | ORLEN Unipetrol a.s. is a separate legal entity. Greenfield own HPC network from Q1 2026. No inherited CPMS from exited ČEZ partner. Named contacts in corpus: Agnieszka Bobrukiewicz (Board — Retail CZ/HU/SK), Rostislav Moravec (Director, ORLEN CZ filling station network). Matches archetype trigger: "New legal entity building from zero." | Big Missed Opportunity (independent greenfield procurement at a separate entity with reachable decision-makers) | That ORLEN Unipetrol will procure independently — PKN ORLEN Group may direct platform selection across subsidiaries. |
| Oil Major archetype — Germany separate entity on unknown stack | Archetype-specific (Oil Major CPO) | ORLEN Deutschland GmbH operating ≈200+ CPs under star.de brand. CPMS not identified. Hardware standardised (Alpitronic). Matches: "Acquired brand left on a legacy stack with no integration timeline stated." | Big Risk (platform opacity — no integration timeline visible for Germany into group stack); Big Missed Opportunity (separate legal entity procurement) | That the current Germany CPMS is inadequate — it may be fully functional. The risk is the opacity of the arrangement, not confirmed failure. |
| Oil Major archetype — Poland group forcing event (VITAY platform failure) | Archetype-specific (Oil Major CPO) | VITAY EV module launched broken (May 2026): sessions fail to initiate, stations disappear from map, users directed to call a hotline. 5M VITAY users affected. App review 1★ cluster (Jan–May 2026) documents persistent failure. Matches archetype trigger: "Platform failure in flagship consumer touchpoint." | Big Problem (platform failure directly harms brand, network utilisation, and B2C retention at scale) | That the failure is CPMS-caused rather than ORLEN-side API implementation error — the CPMS integration is the most probable cause given the post-sunset timing and distributed failure pattern, but ORLEN-side code fault cannot be excluded from public data. |
| CPO-level M&A — 2022 mega-merger integration debt ongoing | Strategic & capital | 2022: PKN ORLEN merger with Lotos, PGNiG, Energa. Five separate CPMS situations inherited across 7 markets. 2023: Turmöl acquisition — SMATRICS relationship inherited. App reviews cite "since the merger" and "since they moved to VITAY." Debt confirmed 3+ years post-merger. | Big Problem (fragmented estate); Big Risk (each market's CPMS must independently comply with ORLEN ID rollout — 5 separate integration tasks) | That ORLEN is planning CPMS consolidation — no consolidation roadmap or announcement visible in corpus. |
| VITAY EV module — CPMS-level session start failure | Operational quality | App Quality section — 1★ cluster (Jan–May 2026): "sessions can't be initiated," "stations disappear from map," "ORLEN Charge module crashes app," "must call hotline to start charging." Pattern is distributed across Poland (not correlated with a specific hardware generation) — consistent with CPMS-layer failure rather than hardware-specific fault. | Big Problem (direct revenue loss from failed sessions; hotline-to-charge = operational overhead and brand damage) | That the CPMS is the sole cause — ORLEN ID login disruption (separate Cluster 1) contributes independently. Both require resolution; only the CPMS-specific failure requires CPMS vendor action. |
| Network reliability — station availability inaccuracy | Operational quality | Business Gap: "map showed two free ports, one was occupied" — 3★ review (Mar 2026). VITAY integration causing stations to "disappear from map" (1★ cluster, May 2026). Failure pattern distributed across estate rather than correlated with hardware generation — consistent with CPMS OCPP event-handling failure. | Big Problem (driver trust and repeat-use directly harmed by inaccurate availability data) | That this is CPMS-caused — could also reflect OCPP event configuration at individual stations. CPMS-layer cause is more probable given the distributed pattern, but hardware-level misconfiguration cannot be ruled out. |
| VITAY loyalty/ecosystem integration gap — ORLEN canonical case | Emerging revenue | VITAY has 5M users. ORLEN Charge EV module integrated at May 2026 app sunset. Integration launched broken — EV sessions unavailable via app. This is the canonical named example for this trigger in triggering_events.md. | Big Missed Opportunity (5M loyalty users are unreachable for EV cross-sell until the integration is fixed; each failed session is a lost loyalty retention event) | That the integration failure is permanent — ORLEN's stated strategy is VITAY as multi-service mobility platform. Fix or replacement is a when question, not an if. |
| CPMS fragmentation from M&A — ORLEN canonical case | Emerging revenue | Five separate CPMS arrangements: Austria = SMATRICS charVIS, Lithuania = InBalance Grid, Czech = own platform building 2026–2027, Poland = undisclosed, Germany = undisclosed. This is the canonical named ORLEN example in triggering_events.md. | Big Problem (data silos, inconsistent driver experience, 5 separate billing systems); Big Missed Opportunity (a platform that absorbs the fragmented estate enables the VITAY super-app architecture) | That consolidation is imminent — large operators can sustain fragmented stacks indefinitely. The forcing function is ORLEN ID attempting group-wide identity unification, not an explicit consolidation decision. |

### Latent triggers (monitoring)

- **Poland CPMS contract renewal window:** No signal visible — no procurement notice, no vendor press release naming ORLEN, no job posting for CPMS evaluation. Activates if: (a) procurement notice appears on Platforma e-Zamówienia (PL national portal) or TED; (b) a CPMS vendor announces ORLEN Charge as a new client; (c) ORLEN job postings appear for roles citing CPMS platform evaluation or EV charging platform ownership.

- **OCPP version — Poland CPMS unknown, legacy hardware confirmed:** ABB Terra 54 and Efacec QC45 present in Poland network (older units, likely OCPP 1.6 or pre-OCPP). Ekoenergetyka Axon series supports OCPP 2.0.1. Poland CPMS OCPP version unconfirmed — careers page not scraped, no vendor spec sheet in corpus. Activates if careers page or a vendor case study confirms Poland CPMS is OCPP 1.6-only (would lock ORLEN out of premium procurement requiring OCPP 2.0.1 and ISO 15118 Plug&Charge).

- **Czech CPMS — Plug&Charge / OCPP 2.0.1 procurement gate:** Czech new network is TEN-T greenfield (150kW+ minimum). Czech CPMS tender will likely specify OCPP 2.0.1 and ISO 15118 as requirements — a gating requirement eliminating non-compliant platforms. Activates when a formal Czech tender notice is published on ISVZUS or TED with specification language.

- **InBalance investor model — Lithuania platform lock-in:** InBalance Grid's €10M investment model means InBalance has a financial stake in Lithuanian EV infrastructure. Any group-wide CPMS standardisation that covers Lithuania would require buying out or renegotiating InBalance's investment position. Activates if ORLEN announces group-wide CPMS consolidation including Lithuania.

- **GEIG (Germany) — site-host B2B opportunity:** German building code requires EV readiness in new/renovated commercial buildings. ORLEN Deutschland's CHARGE@Partner model can capture this demand. Not yet visible as an explicit ORLEN marketing angle. Activates if ORLEN Deutschland begins using GEIG compliance as a site-host acquisition pitch.

- **Concession SLA exposure at scale:** As Poland scales to 2,700 ultrafast DC CPs by 2030, operational SLA exposure from the current CPMS grows proportionally. Not yet at the scale where concession SLA creates financial penalty exposure, but becomes relevant at Stage 4 network size. Monitor as buildout progresses.

### Trigger stacks → shift hypotheses

**Shift hypothesis 1: Forced Czech CPMS vendor selection before H2 2026 pilot deadline**

- **Constituent triggers:**
  - Czech CPMS procurement window open (Contract & procurement — Active)
  - Czech Stage 2→3 transition — own network, no CPMS (Stage transition — Active)
  - Oil Major archetype — Czech new entity building from zero (Archetype-specific — Active)

- **Why these compound:** ORLEN Unipetrol has exited the ČEZ partnership, opened its first own HPC site (April 2026), and publicly committed to a platform pilot in H2 2026 and full digital platform by 2027. The Stage 2→3 transition signal establishes the structural necessity: ORLEN Czech now has live, own-operated infrastructure requiring a CPMS to run it. The Oil Major archetype trigger confirms this is an independent subsidiary procurement — ORLEN Unipetrol a.s. is a separate legal entity with named board-level and operational decision-makers who are not waiting for the Poland group decision. Each trigger alone is absorb-able (a procurement window can close without a sale; a transition can run slowly; an archetype pattern can fire without urgency). Together, the three converge on a single forced decision: a CPMS vendor must be selected before H2 2026, and the selection is made at a legally independent entity with reachable named contacts. **Load-bearing test:** Remove the procurement window — Czech Stage 2→3 + Oil Major pattern still establish the structural necessity for a CPMS selection, but lose the hard public deadline anchor. Remove Stage 2→3 — procurement window + Oil Major greenfield still point to an open selection, but lose the "no CPMS in a live network" urgency. Remove Oil Major pattern — procurement window + Stage 2→3 still force the selection, but lose the independent-entity framing. All three are load-bearing: stated deadline (procurement window), structural necessity (Stage 2→3), independent authority (Oil Major archetype).

- **Timing window:** The H2 2026 platform pilot announcement (ORLEN Unipetrol press release, Apr 2026) anchors the window. Vendor selection and integration work must precede the pilot — meaning the selection window is **H1 2026**, at or near its close as of the May 2026 research date.

- **Confidence:** Medium-High.
  - What would raise it: ORLEN Unipetrol announcing a CPMS vendor; a public procurement notice on ISVZUS or TED; a CPMS vendor case study naming ORLEN Czech.
  - What would lower it: An announcement that the H2 2026 pilot has been delayed; ORLEN Czech reverting to a ČEZ-managed arrangement for new sites; a group-level directive that Poland's undisclosed platform will be extended to Czech.

- **What this stack does not prove:** That the selection is independent of PKN ORLEN Group — the group may direct a standardised choice from Warsaw. It does not prove the window is still open at any given future date — confirm via recent news before engaging.

---

**Shift hypothesis 2: Poland CPMS fix-or-replace decision forced by VITAY integration failure, 2026–2027**

- **Constituent triggers:**
  - VITAY EV module — CPMS-level session start failure (Operational quality — Active)
  - VITAY loyalty/ecosystem integration gap — ORLEN canonical case (Emerging revenue — Active)
  - Poland Stage 3→4 — M&A integration debt exposed at scale (Stage transition — Active)

- **Why these compound:** The VITAY EV module failure is not a UX defect — it is an architectural integration failure between the Polish CPMS and VITAY's API layer. The May 2026 ORLEN Charge app sunset forced all EV session initiation through VITAY, exposing an integration that was not production-ready: sessions fail, stations disappear from the map, users must call hotlines. The Poland Stage 3→4 trigger adds the scale dimension: ORLEN's 13× buildout plan (200 → 2,700 ultrafast DC CPs by 2030) means this integration must operate at 13× current volume. The loyalty/ecosystem trigger establishes the strategic stakes: VITAY's 5M users are the primary B2C retention mechanism for ORLEN's entire EV market share ambition (33% by 2030, Group Strategy 2035). Without a functioning CPMS-to-VITAY integration, none of those targets are reachable through the app. Three independent pressures — operational pain, strategic imperative, scale demand — converge on one forced decision: either the current CPMS vendor delivers a functioning API integration with VITAY, or the platform is replaced. **Load-bearing test:** Remove operational quality failure — VITAY broken + Stage 3→4 still force the fix-or-replace decision on strategic grounds. Remove VITAY loyalty gap — app quality failures + Stage 3→4 still force resolution of the broken session flow on operational grounds. Remove Stage 3→4 — VITAY broken + app quality still force a fix-or-replace, but lose the scale-urgency argument. All three are load-bearing.

- **Timing window:** 2026–2027. Anchored by the VITAY integration failure onset (January 2026, worsening at May 2026 app sunset). A documented, public, worsening failure in a state-backed company's flagship consumer app — with an explicit multi-billion PLN buildout plan depending on it — creates resolution pressure within 1–2 years of onset. No external regulatory deadline anchors this; timing derives from the urgency of the failure and the strategic stakes.

- **Confidence:** Medium.
  - What would raise it: A VITAY app update resolving session initiation (implies API integration fix delivered by current vendor); a CPMS vendor press release naming ORLEN Charge as a new or expanded client; ORLEN job postings for CPMS platform integration engineer or electromobility platform product manager.
  - What would lower it: A VITAY app update removing EV charging entirely (ORLEN reverts to RFID/kiosk-only for Poland, deprioritising app-based session initiation); a public statement from ORLEN confirming the VITAY EV integration has been resolved.

- **What this stack does not prove:** That ORLEN will select an external replacement CPMS vendor — the fix may be an API integration fix from the current (undisclosed) vendor, not a platform switch. The stack proves the decision is forced, not its direction.

---

**Shift hypothesis 3: Germany fleet EV billing platform decision forced by fleet client demand, 2027–2028**

- **Constituent triggers:**
  - Germany Stage 2→3 — fleet EV integration absent (Stage transition — Active)
  - Eichrecht — Germany CPMS must comply (Regulatory — Active)
  - Oil Major archetype — Germany separate entity on unknown stack (Archetype-specific — Active)

- **Why these compound:** ORLEN Deutschland has a mature fleet card product (Flottenkarte) that explicitly excludes EV charging — confirmed from the star.de fleet card page. ORLEN's Polish FLOTA card already integrates EV billing; the Germany gap is a platform limitation at a separate legal entity, not a product design choice. When German fleet clients formally request EV billing (tied to German commercial EV adoption), ORLEN Deutschland must add EV capability to Flottenkarte. This requires a CPMS that (1) supports fleet billing (postpaid, per-account reporting, German fiscal compliance), (2) is Eichrecht-compliant (mandatory for public kWh billing in Germany), and (3) integrates with Flottenkarte or replaces it for EV billing. The current Germany CPMS is unknown — there is no visible integration path from "fleet client requests EV billing" to "fleet billing live." The Oil Major separate-entity trigger confirms ORLEN Deutschland would procure this independently from PKN ORLEN Poland. **Load-bearing test:** Remove Germany Stage 2→3 fleet gap — Eichrecht + Oil Major still create platform evaluation pressure for Germany, but without the fleet client demand signal the timing loses urgency. Remove Eichrecht — fleet gap + Oil Major still force a procurement when fleet demand arrives, but Eichrecht adds a non-negotiable compliance gate that eliminates non-compliant platforms from evaluation. Remove Oil Major separate entity — fleet gap + Eichrecht still force the procurement, but lose the framing that ORLEN Deutschland controls the decision independently. All three are load-bearing.

- **Timing window:** 2027–2028. No hard external deadline anchors this stack. Timing is demand-curve dependent — the trigger fires when German commercial EV fleet adoption reaches the threshold at which Flottenkarte clients formally request EV billing. This is the lowest-confidence element of this hypothesis.

- **Confidence:** Low-Medium.
  - What would raise it: star.de announcing Flottenkarte EV integration; an ORLEN Deutschland job posting for a fleet EV product manager; German commercial EV fleet market data showing sustained EV adoption in commercial vehicles; a CPMS vendor case study naming ORLEN Deutschland as a client.
  - What would lower it: ORLEN Deutschland explicitly announcing Flottenkarte EV integration via a partnership with an existing fleet billing provider (rather than through its CPMS); German commercial EV adoption slower than expected through 2027.

- **What this stack does not prove:** That ORLEN Deutschland needs a new CPMS for EV fleet billing — the current (unknown) CPMS may already have fleet billing capability that has not been connected to Flottenkarte. The stack proves a decision will be forced eventually; the CPMS implications depend on what the current Germany platform can do.

### No-stack verdict

Five active triggers do not compound into additional distinct shift hypotheses:

- **AFIR contactless PAYG (Poland):** Real active trigger with documented Poland compliance gap. Addressable in isolation (payment terminal retrofit + CPMS payment layer update) without requiring a full CPMS replacement. Reinforces the Stack 2 Big Problem case for Poland but does not force a unique decision beyond what Stack 2 already captures.

- **Network reliability — station availability inaccuracy:** Active trigger, distributed failure pattern consistent with CPMS OCPP event-handling issue. Reinforces Stack 2's operational pain case. Does not independently force a decision distinct from the VITAY integration failure already in Stack 2.

- **CPO-level M&A integration debt (Strategic & capital):** Root-cause context for both Stack 2 (Poland fragmentation) and Stack 3 (Germany independent entity). Not a separate actionable shift — it is the underlying driver for the fragmented estate that Stacks 2 and 3 address.

- **CPMS fragmentation from M&A (Emerging revenue):** The same structural fact as M&A integration debt, viewed from the revenue-opportunity angle. Both are captured in Stacks 2 and 3. Not a fourth independent shift hypothesis.

- **Oil Major — Poland group forcing event (VITAY failure) [Archetype-specific]:** Already captured as the core mechanism in Stack 2. No additional stack.

The remaining five triggers are real, independently documentable, and affect ORLEN's sales relevance — but each is either (a) absorbed by one of the three stacks, or (b) addressable in isolation without forcing a CPMS platform decision.

### Feeds to Synthesis

- **Synthesis `Trigger:` candidate:** Three stacks in sequence — Czech CPMS vendor selection before H2 2026 pilot deadline (Medium-High confidence, nearest and most accessible); Poland CPMS fix-or-replace forced by VITAY integration failure (Medium confidence, 2026–2027); Germany fleet EV billing decision (Low-Medium confidence, 2027–2028). Czech is the nearest hard anchor: if ORLEN Unipetrol announces a CPMS vendor or publishes a formal tender, the window is confirmed live (or already closed). If the Poland CPMS vendor is named in a press release, that changes the Poland picture immediately.

- **Synthesis `Where this is going` candidate:** ORLEN's five-market CPMS fragmentation is being driven toward progressive resolution by three converging decisions over 3–5 years: the Czech greenfield selection (nearest, live now), the Poland VITAY API fix-or-replace (largest strategic stakes, 2026–2027), and the Germany fleet EV gap (slowest, 2027–2028). The Czech decision is independently accessible as a separate legal entity with reachable named contacts; Poland requires navigating PKN ORLEN S.A. group procurement. The architectural forcing function over the 2027–2030 horizon is ORLEN ID: if VITAY becomes the single consumer interface across all 7 markets, all five CPMS stacks must expose APIs VITAY can consume — making the current fragmented arrangement architecturally untenable regardless of whether a formal consolidation decision is made.

---

## Sales Analysis

*Threshold-based evaluation of whether any candidate problem, opportunity, or risk justifies a CPMS switch or adjacent platform capability addition for this company. Produced by the `run-sales-analysis` skill after the Triggering Events & Shifts section is written.*

### CPMS gate

ORLEN is a multiple-CPMS situation with five separate arrangements across seven markets. The primary network is ORLEN Charge Poland (≈1,300+ CPs, own brand, parent entity) — the gate applies to Poland first. Poland's CPMS is Not identified, defaulting to the proprietary-equivalent threshold: Very High for a core CPMS switch, because the integration depth, vendor identity, and migration scope are all unknown. However, the VITAY EV module failure provides one material inference: the integration is broken at the API layer between the CPMS and the VITAY app. If the Poland CPMS were an in-house build, ORLEN's own engineering team would have direct access to fix the integration without the prolonged public failure visible in app reviews since January 2026. This points toward an external vendor relationship with a fragile API — which makes the adjacent-capability pathway (fixing or replacing the CPMS-to-VITAY API integration layer) the most realistic near-term entry for Poland, not a full CPMS switch pitch. The Czech own-network has no CPMS yet — the threshold is zero (selection, not switch). Austria (SMATRICS T1) and Germany (Not identified, proprietary-equivalent default) are separate legal entities with separate gate assessments. Switching SMATRICS in Austria would require reintegrating Turmstrom hardware, payment, and the white-label app — High threshold for that market specifically. The Lithuanian InBalance arrangement is further complicated by InBalance's investor-model financial stake, adding a buyout dimension to any potential switch.

### Candidate evaluation table

| Candidate | Source | Categories | Platform-specific | Scales | Magnitude (denominator + ≈15% rule) | Evidence | Verdict |
|-----------|--------|-----------|-------------------|--------|--------------------------------------|----------|---------|
| Poland VITAY EV integration failure — CPMS-to-VITAY API | App reviews; Ops quality trigger; Stress map (Stage 3 Theme 2) | Big Problem, Adjacent | Adjacent (CPMS-to-VITAY API layer; Poland CPMS proprietary-equivalent → adjacent-capability exception applies) | Yes — 13× buildout planned; broken API compounds with scale | App-channel scope: all VITAY-initiated EV sessions in Poland affected (100% of app channel). ≈5M VITAY users with EV charging unavailable via app. Big Problem Test 4 (compounding): 13× CP buildout makes this worse at every growth increment. Denominator: Poland charging operations + VITAY app channel. | T1 mechanism (1★ review clusters Jan–May 2026 — multiple months, multiple corroborating reviewers, hotline-required workaround confirms operational containment failing); T2 magnitude (session failure rate inferred from review cluster frequency, not from revenue figures) | Clears (Adjacent) |
| Czech CPMS greenfield selection — own platform for new HPC network | Contract & Procurement trigger; Stage 2→3 transition; Oil Major archetype (new entity from zero); Business Gap | Big Missed Opportunity + Big Problem | Yes — direct CPMS selection | Yes — 11 sites end 2026, 600 by 2030, 1,700 by 2035 | Czech 2030 target = 600 CPs → ≈30–35% of current group total (1,700–2,000 CPs); Czech own-network = 100% of ORLEN Czech operational scope. Named contract value: a platform decision for 600+ CPs over 5+ years with an H2 2026 pilot deadline. Clearly >15% of group scope by 2030. | T1 (ORLEN Unipetrol press release Apr 2026: stated "own mobile app pilot H2 2026, full digital platform by 2027"; first own HPC site confirmed open) | Clears |
| Germany fleet EV billing capability — Flottenkarte lacks EV | Stage 2→3 transition trigger; Archetype (fleet card expertise); Business Gap | Big Missed Opportunity | Yes — fleet billing is CPMS function (postpaid, per-account, Eichrecht-compliant kWh billing) | Yes — Germany targeting 1,150 CPs by 2030; Flottenkarte is the primary B2B product for star.de | 100% of Germany fleet EV opportunity (currently zero, therefore 100% of a future revenue line). Commercial maturity confirmed by ORLEN Poland reference model (FLOTA fleet EV billing working in PL/CZ/DE/LT). Germany gap confirmed T1 (star.de fleet page). ARAL Pulse (BP) is comparable archetype competitor in Germany. Germany fleet EV revenue does not yet exist but the model is proven at the same company. | T1 for gap (star.de fleet page); T1 for commercial maturity (ORLEN FLOTA PL reference — same company, same archetype) | Conditional on [German fleet EV adoption reaching business threshold — 2027–2028] |
| CPMS fragmentation group-wide — 5 separate arrangements across 7 markets | Stress map (Stage 3→4); Emerging Revenue trigger; Strategic & Capital trigger | Big Problem + Big Missed Opportunity | Yes — directly about CPMS | Yes — grows with every new market integration demand (ORLEN ID, VITAY API layer) | 100% of group network scope. Five separate CPMS arrangements = 5× integration overhead for every group-wide feature (ORLEN ID auth, VITAY API, new fleet product). T1 for all five markets via source confirmation (SMATRICS case study, InBalance case study, ORLEN Unipetrol PR, Poland Tier 3 research, star.de). Strategic stakes: fragmentation makes VITAY-as-single-frontend architecturally untenable. | T1 (all five market situations confirmed from primary sources) | Conditional on [ORLEN formally committing to group-wide CPMS API standardisation as a procurement requirement — uncertain timing, 2027+] |
| AFIR contactless PAYG compliance — Poland DC chargers | Regulatory trigger; Business Gap | Big Risk, Adjacent | Adjacent (payment terminal hardware + CPMS payment integration layer) | Yes — all Poland DC ≥50kW CPs (the primary network is DC fast charging) | All Poland DC ≥50kW CPs are in scope. AFIR effective from 2025. If non-compliant, regulatory exposure covers entire Poland DC estate — clearly >15% of network. Denominator: Poland DC charging compliance scope (100%). | T1 for gap (Reddit 2024 + Business Gap entry); T1 for regulation (AFIR EU law); T2 for current non-compliance status (2024 gap confirmed, no AFIR enforcement action or remediation signal in 2025–2026 corpus) | Conditional on [AFIR non-compliance confirmed for Poland DC chargers as of 2025+] |
| Station availability inaccuracy — CPMS OCPP event handling | Business Gap; Ops quality trigger | Big Problem | Yes — OCPP event handling is CPMS function | Yes | Magnitude unquantifiable from corpus (multiple review mentions, but session failure rate as % of total sessions not determinable). Subsumed by VITAY integration failure (VITAY app integration causing "stations disappear from map" is more acute and better-evidenced version of the same CPMS OCPP handling failure). As a standalone candidate, magnitude does not reach the ≈15% rule. | T2 (multiple review mentions, distributed pattern, Mar 2026 direct review) | Doesn't clear (magnitude unquantified below ≈15% threshold; subsumed by VITAY integration failure candidate) |
| No subscription/loyalty EV product (Poland) | Business Gap | Big Missed Opportunity | Unclear — subscription billing is a CPMS capability but the decision to launch subscriptions is primarily a pricing/product strategy call | Flat (pricing tier, not a platform-scale issue) | Magnitude unclear — what % of users would subscribe vs. pay per session is not evidenced in corpus. Not platform-constrained until ORLEN decides to offer subscriptions and the current CPMS is confirmed as lacking subscription billing capability. | T3 — no evidence that subscription absence is CPMS-caused | Doesn't clear (platform-specificity unconfirmed; T3 evidence for mechanism) |
| Eichrecht compliance gate — Germany CPMS | Regulatory trigger | Big Risk | Yes — kWh billing compliance is CPMS layer | N/A (ORLEN is already billing in Germany; gate function, not a new risk) | Gating constraint for any Germany CPMS procurement, not an independent Big Risk (ORLEN is already billing, implying some compliant arrangement exists). Does not independently clear — functions as a mandatory gate requirement for Candidate 3 (Germany fleet EV billing). | T1 for regulation; T3 for current non-compliance (ORLEN is billing in Germany, implying compliance) | Doesn't clear as independent candidate — documented as a procurement gate for Germany CPMS selection |

### Archetype filter applied

**Oil Major CPO archetype weight:** "Loyalty/ecosystem app integration is the priority lever, not the core CPMS." From business_archetypes.md: "At JV/acquired-brand level: any new entity building from zero, or an acquired brand that was promised integration but has been left on a legacy stack. These are the reachable openings."

**Candidates affected:**

- **Poland VITAY failure (Candidate 1):** Priority elevated. Oil Major archetype explicitly identifies loyalty/ecosystem integration as the primary trigger lever — this candidate IS that lever. The adjacent-capability pitch (fix the broken CPMS-to-VITAY API) maps directly to the archetype's stated priority. The reference case (business_archetypes.md Reference case 2) is ORLEN itself — confirming this is the canonical expression of the archetype's integration failure trigger.

- **Czech greenfield (Candidate 2):** Priority elevated. The archetype's "new entity building from zero" is the stated accessible entry point. The Austrian SMATRICS relationship (full-service CPMS for an oil major sub-brand network since 2018) is an internal reference model ORLEN already understands — it is the exact pitch: "you ran this model in Austria for 8 years; we replicate it for Czech."

- **Germany fleet EV (Candidate 3):** Priority elevated for the archetype context — fleet card expertise inherited from fuels is a core Oil Major archetype diagnostic. When the fleet EV gap reaches threshold, it is the highest-priority trigger for this archetype (fleet card integration failing or lagging competitors = existential threat to the fleet book). However, signal timing is medium-term (2027–2028) which limits near-term priority regardless of archetype weighting.

- **CPMS fragmentation (Candidate 4):** Priority maintained. The archetype sales approach ("approach at the edges — acquired brands still running their own legacy stacks") means the group-level rationalisation is the long-term play, not the near-term entry. Archetype confirms the entry should be at Czech and Germany level, with group rationalisation following.

- **AFIR compliance (Candidate 5):** No archetype change. Regulatory compliance is relevant for all oil major archetypes but AFIR is hardware + CPMS payment layer — the core platform switch argument is not strengthened by archetype. Remains a secondary/tertiary angle.

### Ranked entry points

1. **Czech CPMS greenfield selection — ORLEN Unipetrol a.s.** — Big Missed Opportunity + Big Problem. ORLEN Unipetrol is a separate legal entity building its first own HPC network from scratch: 1 live site (Průhonice, D1 highway, Apr 2026), 11 sites targeted by end 2026, 600 by 2030, and a stated "own mobile app pilot H2 2026, full digital platform by 2027." There is no inherited CPMS from the ČEZ partner relationship — this is a greenfield platform selection, not a switch. The pitch is not about ORLEN's group scale or 2035 ambition; it is about replicating the SMATRICS Austrian model (full-service CPMS for an oil major sub-brand network, operational since 2018) for Czech from day one. Named contacts are in corpus (Bobrukiewicz and Moravec). Eichrecht is not a gate here (Czech is not Germany). VITAY/ORLEN ID integration is a live requirement — any selected Czech CPMS must expose APIs that VITAY can consume, which means the ORLEN Poland integration failure is directly relevant sales context.
   - **Trigger / confirming signal:** ORLEN Unipetrol announcing a CPMS vendor selection; a public tender notice on ISVZUS or TED; a CPMS vendor case study naming ORLEN Czech. If the H2 2026 pilot is delayed or extended, the window lengthens — not closes.
   - **Signal timing:** Near-term (under 12 months — H1 2026 at research date; confirmation required that window has not closed post-May 2026).
   - **Candidate priority:** Lead.

2. **Poland VITAY EV integration failure — adjacent-capability pitch** — Big Problem, Adjacent. The ORLEN Charge EV module in VITAY is broken since January 2026 and worsened at the May 2026 app sunset: sessions fail to initiate, stations disappear from the map, users call hotlines. 5M VITAY users are unreachable for EV cross-sell. The Poland CPMS is Not identified — this is NOT a platform switch pitch. It is a CPMS-to-VITAY API layer pitch: "Your EV module is broken because your current CPMS can't integrate with VITAY's API. Here is how our platform's API layer would fix that while your 13× buildout continues." The adjacent-capability pitch is realistic under the proprietary-equivalent default precisely because it doesn't require displacing the entire Poland CPMS — it requires fixing or replacing the integration layer. Archetype-weighted highest priority by the Oil Major trigger model (loyalty/ecosystem integration is the priority lever).
   - **Trigger / confirming signal:** A VITAY app update that resolves EV session initiation (implies API fix delivered by current vendor — window closes); ORLEN job posting for CPMS integration engineer or electromobility platform product manager; a press release naming a Poland CPMS vendor selection (window either opens as a confirmed replacement or closes as a confirmed fix).
   - **Signal timing:** Near-term (failure has been public since January 2026; resolution pressure is acute).
   - **Candidate priority:** Lead.

3. **CPMS fragmentation — group CPMS rationalisation under VITAY architecture** — Big Problem + Big Missed Opportunity. The 2022 mega-merger left five separate CPMS arrangements across seven markets. As ORLEN ID attempts to unify group identity and VITAY targets becoming the single consumer interface, all five CPMSes must eventually expose VITAY-compatible APIs. The ORLEN Poland failure is the pilot of this requirement — and it failed. A platform vendor that can operate across multiple ORLEN markets (or demonstrate VITAY-API-compatible architecture) is positioned as the group's eventual consolidation play. This is the long-term group entry, not a near-term sales cycle.
   - **Trigger / confirming signal:** ORLEN Group Strategy update explicitly naming CPMS consolidation as a 2026–2027 initiative; a group-level procurement notice across multiple markets; ORLEN hiring for a group-level CPMS platform product owner role.
   - **Signal timing:** Uncertain (2027+).
   - **Candidate priority:** Secondary (long-cycle context).

4. **Germany fleet EV billing — ORLEN Deutschland GmbH** — Big Missed Opportunity, Conditional. The Flottenkarte (German fleet card) does not include EV — confirmed from star.de fleet page. ORLEN's Polish FLOTA fleet card integrates EV charging across Poland, Czech, Germany, and Lithuania (the EV integration layer already exists at the group level); Germany is the gap. When German commercial EV adoption reaches the threshold where Flottenkarte clients formally request EV billing, ORLEN Deutschland must add EV fleet billing capability. The CPMS for Germany must be Eichrecht-compliant (hard gate for German public kWh billing). ORLEN Deutschland is a separate legal entity from PKN ORLEN Poland — this is a separate procurement.
   - **Trigger / confirming signal:** star.de announcing Flottenkarte EV integration; ORLEN Deutschland job posting for fleet EV product manager; German commercial EV fleet data showing sustained >5% EV share in commercial vehicle registrations.
   - **Signal timing:** Medium-term (2027–2028, demand-curve dependent).
   - **Candidate priority:** Secondary.

5. **AFIR contactless PAYG compliance — Poland DC chargers** — Big Risk (Adjacent). AFIR mandatory contactless PAYG at DC ≥50kW effective from 2025; Poland's DC charging network was confirmed to lack contactless card payment (Reddit 2024). If Poland DC chargers remain non-compliant as of 2025+, regulatory exposure covers the entire Poland DC estate. The CPMS must support payment terminal integration. This is a compliance risk that reinforces the Poland platform pain case but is not a standalone platform switch driver — it is addressable by hardware terminal retrofit + CPMS payment layer update.
   - **Trigger / confirming signal:** Confirmation that Poland DC chargers remain without contactless terminals as of 2025–2026; a Polish regulatory enforcement action under AFIR; a CPMS tender specification citing AFIR terminal compliance as a requirement.
   - **Signal timing:** Near-term (AFIR compliance window already past — risk is active if non-compliance persists).
   - **Candidate priority:** Tertiary (reinforcing context for Poland platform decision; not a standalone lead angle).

### Verdict

**High** — Czech ORLEN Unipetrol is a live greenfield CPMS selection at a legally separate subsidiary with named board-level and operational contacts, a stated H2 2026 pilot deadline, and zero switching cost (no existing platform to replace); and ORLEN Poland's VITAY EV integration failure is an adjacent-capability entry for the group's largest market, backed by T1 evidence of a broken CPMS-to-app API that a 13× DC charging buildout makes structurally unsustainable.

### Feeds to Synthesis

- **Synthesis `Sales priority:` candidate:** High — Czech ORLEN Unipetrol is a live greenfield CPMS selection with an H2 2026 deadline at a separate legal entity, and the Poland VITAY integration failure is an adjacent-capability pitch for the group's largest and fastest-growing market; both are supported by T1 evidence.
- **Synthesis `Entry point if pursued:` candidate:** Czech Republic (ORLEN Unipetrol a.s.) first — greenfield CPMS selection, no switching cost, H2 2026 pilot deadline, named contacts (Bobrukiewicz, Moravec). Lead with the SMATRICS Austrian reference model: "You've operated full-service CPMS for your Austrian sub-brand since 2018 — we replicate that for Czech from day one, with VITAY API integration built in from the start." Secondary: Poland, but only with an adjacent-capability pitch (fix the CPMS-to-VITAY API, not a platform replacement) — do not pitch a full CPMS switch for Poland given the proprietary-equivalent default and the unknown switching scope.
- **Synthesis `Adjacent leads:` candidate:** ORLEN Unipetrol a.s. (Czech — primary, greenfield, separate legal entity with named procurement contacts); ORLEN Deutschland GmbH (Germany/star.de — secondary, fleet EV billing gap, 2027–2028 window, Eichrecht-compliant CPMS required). Both are separate legal entities from PKN ORLEN S.A. with independent procurement authority.

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

**cpo_development_stages.md — Off-list breaking points identified (log for potential addition to canonical stress map):**
1. **Corporate SSO/identity layer rollout requiring CPMS integration** — when a parent company deploys a unified SSO platform (e.g. ORLEN ID, Dec 2025), all downstream services including CPMS must integrate with it. CPMSes that cannot conform create broken session initiation flows. Observable signal: SSO platform launched + CPMS auth integration failures visible in app reviews. Observed ORLEN case: ORLEN ID rollout → auth disruption visible in ≈30% of 1★ reviews (Jan–May 2026). This is distinct from a loyalty/ecosystem integration trigger — the SSO layer is a mandatory authentication step, not an optional feature integration.
2. **Parent app consolidation creating CPMS API integration requirement** — when a parent forces all EV session initiation through a new unified app (e.g. VITAY), the CPMS must expose APIs that the new app can consume. Failure to integrate results in broken EV sessions visible in app reviews. Observed ORLEN case: standalone ORLEN Charge app sunset (May 2026) → VITAY EV integration failure. Similar to the loyalty integration trigger but specifically about forced app consolidation as the platform stress point.

### Reasoning corrections

1. **Nearly concluded ORLEN had a single undisclosed CPMS for all markets.** The multi-brand structure (ORLEN Charge PL, star DE, Turmstrom AT, ORLEN Baltics) was the signal that each market may have separate arrangements — not a failure of research, but an inference that had to be tested market by market. The SMATRICS confirmation for Austria was the key break. Correction: always test multi-market CPOs for per-brand CPMS arrangements before assuming group-level consistency.

2. **VITAY 4.7★ aggregate nearly read as "good app."** The aggregate rating is from 10+ years of fuel loyalty app usage with 112K ratings. The newly integrated EV module failure is invisible at the aggregate level — isolation to 1★ clusters by date and topic was required. Correction: for large incumbent apps with recent feature additions, never use aggregate rating as a signal of the added feature's quality. Date-filter 1★ reviews first.

3. **Czech 73 vs. 294 CP count discrepancy was nearly logged as a scrape error.** The Apr 2026 press release cited 73 locations while the Oct 2025 press release cited 294 CPs at 102 stations. The discrepancy is explained by the ČEZ exit: sites in the partner model are being retired, so the live count is falling as ORLEN builds its own. This is a strategic finding (the transition is actively underway), not a data quality issue.
