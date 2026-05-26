# CPO Analysis — Vattenfall InCharge

**Date:** 2026-05-21 (initial) | **Revised:** 2026-05-26 (catch-up pass, batches B1–B5 complete; analysis review framework applied, 14 corrections)
**Analyst:** Claude (AI analysis)
**Source:** 322 scraped pages + 630 app reviews from p2k DB — company_id: 326e3a3c-bed1-46e4-93c5-ece00eac6215 | Scraped Pages/Vattenfall InCharge.md
**Coverage:** Full structured pass. Triage 1 applied to all 322 pages; 5 reading batches completed (B1–B5); Triage 2 confirmed no reassignments required. ~175 pages read in total across initial pass and catch-up. Gaps: no careers pages scraped (no CPMS stack signal available from job descriptions); incharge.vattenfall.no not in corpus (Norway exit confirmed from third-party source; page absence consistent with exit); incharge.vattenfall.fi/fr not in corpus; my.goincharge.com (DE customer portal) not scraped; Driivz case-study page blocked by bot protection (impact: low — CPMS confirmed Tier 1 by other evidence).

---

*This document is a final analysis output. Do not reference internal skill files, domain knowledge files, or framework file names anywhere in the analysis sections. The frameworks inform the reasoning but must not appear by name in the output — cite the evidence, not the file that taught you how to read it. Any domain knowledge conflicts or update requirements identified during analysis go in the Post-analysis brief section at the end.*

---

## Synthesis

**What Vattenfall InCharge clearly is:** The EV charging division of Vattenfall AB, a Swedish state-owned energy utility (~19,000 employees, one of Northern Europe's largest energy companies). InCharge operates across three active markets — Sweden (SE), the Netherlands (NL), and Germany (DE) — with confirmed exits from Norway (31 Aug 2023) and UK (launched 2018, no current presence), and a Power-as-a-Service bus-fleet operation in Denmark under a separate brand. The network is large: 75,000 managed CPs with 1,000 MW charging capacity (World EV Day Sept 2025), second-largest publicly accessible network in Europe by Electroverse connector count (32,448, May 2025, #2 after E.ON Drive). Backed by a state-owned balance sheet. NL is the current growth engine: InCharge won three major Dutch public tenders in 2024–2025 (MRA-Elektrisch 35,000 CPs with Shell ubitricity + TotalEnergies; Den Haag 5,400 + 3,200 V2G-ready CPs; Brabant+Limburg 22,000 CPs). SE underwent a major strategic reset in December 2025 when 11,000 residential and workplace CPs were transferred to Voltiva (an independent company within the Mobility46 group), narrowing Vattenfall InCharge SE to public-only operations (~6,700 public CPs). The CPMS is confirmed proprietary in-house (ICSP — InCharge Service Platform), Tier 1 evidence. Evidence basis: Annual Report 2024, World EV Day press release, Dutch provincial tender press releases, elbil.no Norway exit confirmation, Cision/Voltiva press releases, myincharge.vattenfall.com OAuth URL.

**CPMS:** Confirmed proprietary in-house — **Tier 1**. The myincharge.vattenfall.com OAuth login URL (page 288 of corpus) contains three independently confirmatory signals: (1) IAM endpoint `accounts.vattenfall.com/iamng/emob/` — WSO2 Identity Server hosted on Vattenfall's own domain, not a third-party IAM; (2) `isSaaSApp=false` — an explicit WSO2 parameter that distinguishes a self-hosted application from a third-party SaaS product; (3) `sp=ICSP` and `tenantDomain=int.incharge` — the authenticated service provider is named "ICSP" (InCharge Service Platform) within the internal `int.incharge` tenant. The application developer in both app stores is listed as "Vattenfall AB." The customer portal runs on the own domain. No third-party OAuth redirect appears anywhere in 322 corpus pages. The Android app package `nl.nuon.laadpunten` is a Vattenfall/Nuon legacy identifier, consistent with an in-house platform pre-dating the InCharge brand. There is no Tier 1, 2, or 3 evidence for any external CPMS vendor.

**What's absent:**
- No third-party CPMS vendor identified despite 322 pages — consistent with either a deeply proprietary platform or a deliberate opacity policy around technology partners.
- **Norway: exit confirmed, Tier 1.** Operations ended 31 August 2023 — verbatim from elbil.no FAQ (page 303): "Vattenfall Incharge avslutter sin norske virksomhet 31. august 2023." The Ishavsveien route (Troms/Finnmark, built with Ishavskraft AS) was transferred to Elbilforeningen + Kople/Fortum. Peak network: ~350 CPs (end 2020) + ~25 Ishavsveien stations (Sept 2021). Norway is absent from the 2026-2030 investment plan and absent from the September 2025 World EV Day active-market declaration (SE, DE, NL only).
- UK: no current presence confirmed. Launched June 2018 (UK first hardware partner: Alfen ICU; iSupplyEnergy energy retail link). No post-2018 UK InCharge pages in corpus; UK not in Electroverse EU top rankings; UK allocated only 2bn SEK maintenance capex in 2026-2030 plan (vs 35bn NL / 29bn SE / 25bn DE growth). Likely exited analogous to Norway trajectory, but without an explicit exit announcement found in corpus.
- No dedicated fleet depot management product specification — website mentions DLM and depot charging for heavy vehicles but no power scheduling, session queue management, or depot planning tooling described.
- No careers pages scraped — these would be the most direct CPMS stack signal; a research gap, not a confirmed absence.
- Home charging in SE: deliberately exited (Voltiva deal), not a capability gap. Still active in DE and previously in NL.
- No V2G commercial settlement or energy dispatch product described in corpus — the in-house ICSP handles charging sessions, but V2G at commercial scale requires integrating EV battery dispatch with spot-price signals, grid operator APIs (TenneT NL, Svenska Kraftnät SE), and settlement. This is the primary adjacent capability gap (high sales relevance — see Sales angle and Entry point).

**What explains what's observed:** Vattenfall's state-owned utility origin explains everything structural about InCharge. The balance sheet supports multi-hundred-million-euro tender bids that pure-play CPOs cannot match. The energy supply relationship (electricity purchased from Vattenfall at retail rates) means InCharge's margin is embedded in energy pricing, not software licensing — a fundamentally different revenue model than asset-light CPOs. The SE Voltiva deal is best read as capital reallocation: residential/workplace charging is labour-intensive, requires 1:1 customer service at household level, and competes on customer acquisition rather than infrastructure deployment skill. By offloading this to Voltiva, InCharge SE can concentrate capital on public concessions and large-site location partnerships — exactly the segment where Vattenfall's balance sheet is a competitive moat. In NL, the tender-dominance model is the logical endpoint of this archetype: win long-duration concessions, deploy capital at scale, collect energy margin for 10–15 years.

**Development stage:** In the Netherlands, Vattenfall InCharge is operating at full market-leader scale — dominant tender wins, 8 million charging sessions in 2025 (+68% YoY), a 90,000+ CP implied target (estimated from tender-sum arithmetic — not a direct company quote; treat as directional), and a grid-services integration (V2G-ready stations, Plug & Charge pilot) that most CPOs are still only piloting. In Sweden, the December 2025 residential exit marks a stage transition from a broad-market CPO toward a capital-efficient public-concession operator — the operational complexity of the old residential book has been shed, but the public-only strategy still needs to prove equivalent volume. In Germany, InCharge is building a B2B and location-partner book under GEIG/EPBD regulatory tailwind, with no market-leadership position yet visible.

**Where this is going:** The NL trajectory is clearest: InCharge will consolidate as the dominant public charging infrastructure operator in the Dutch market, with grid balancing and V2G as the next commercial layer. The SE pivot toward public-only makes the Swedish business look increasingly like the NL playbook — concessions and location partnerships — with residential service offloaded to Voltiva permanently. In DE, GEIG will push the location-partner model faster; the question is whether InCharge will have the local-market execution to capitalise before German-market competitors (EnBW, IONITY) and NL-native Allego — all with established DE presence — entrench. On technology: the V2G pilots with Volkswagen (200 cars, April 2026) and the Hudiksvall housing-association grid pilot suggest Vattenfall is positioning EV charging as a grid flexibility asset — not just an infrastructure service — which could require significant platform capability additions in energy management by 2027–2028.

**Competitive pressure:** In NL: Allego, TotalEnergies, and Shell ubitricity (confirmed co-bidders on MRA-Elektrisch) — InCharge has demonstrated the ability to outcompete here. In SE post-Voltiva: Mer Connect (Statkraft), Recharge, and municipal operators competing for public locations — InCharge's new public-only focus puts it in direct competition with players it previously had market adjacency to. In DE: EnBW, IONITY, and a fragmented B2B market (Compleo, Mer, Siemens eMobility). The competitive pressure most likely to force a platform decision is NL session volume growth: at 90,000 CPs, operational complexity at scale becomes the limiting factor rather than capital.

**Sales priority:** **Low.** Vattenfall InCharge operates a confirmed proprietary in-house platform (ICSP — Tier 1 evidence), has a state-owned balance sheet that makes external software licensing a rounding error relative to infrastructure capex, and has shown no indicator of switching intent across 322 pages. The December 2025 decision to exit SE residential is a capital-efficiency move — not evidence about re-platforming intent. A new CPMS vendor sale here is structurally blocked, not merely difficult.
Trigger: A CPMS sales conversation becomes credible only if (a) a regulatory enforcement notice or concession SLA penalty from a Dutch provincial authority citing charging reliability failures is issued, (b) a careers page or procurement notice explicitly names a third-party platform to replace, or (c) a job posting for 'grid API integration architect' or equivalent appears, or a published V2G commercial product launch names no settlement partner.
Of the four forced decisions identified: V2G energy management (Decision #1) creates the only adjacent entry point — addressed in Entry point below. NL platform scalability (Decision #2), SE growth (Decision #3), and DE market leadership (Decision #4) are internal execution challenges that will be resolved with existing engineering resources, not third-party CPMS procurement.

**Entry point if pursued:** Grid services/V2G integration tooling — not a CPMS pitch. Vattenfall is running V2G pilots at scale (200 Volkswagen EVs, NL V2G-ready stations at Den Haag). If V2G scales commercially, they will need an energy management layer that connects charging dispatch to spot-price signals and grid operator APIs. This is a capability adjacent to their in-house CPMS, not a replacement of it. The entry conversation is: "how do you integrate bidirectional charging into your energy dispatch and settlement stack?" — not "here is a better charging management platform."

**Adjacent leads:**
- **Voltiva / Mobility46 (SE):** Operates 11,000 ex-Vattenfall residential/workplace CPs in SE; actively acquiring new customers; uses Mobility46's cloud CPMS platform. Separate procurement from Vattenfall InCharge; Mobility46 is the platform vendor to research. A distinct lead from InCharge — potentially accessible through an operator-services pitch.
- **Vattenfall Network Solutions (DK/NL):** Separate business unit handling heavy transport/fleet electrification (Power-as-a-Service). Delivered 32 DC fast chargers to Tide Bus in Vejle, Denmark (Nov 2022); Instabox logistics fleet in SE/NL/DK. Distinct procurement from InCharge retail. May have separate platform decisions for depot management tooling at fleet scale.

---

## Company Profile

| Field | Finding | Basis |
|-------|---------|-------|
| Legal entity | InCharge AB (SE, reg. 559178-6081), Vattenfall Smarter Living GmbH (DE), Vattenfall Customers & Solutions Netherlands N.V. (NL) | Page T&Cs / imprint pages (pages 113, 21, 40) |
| Website | incharge.vattenfall.se / incharge.vattenfall.de / incharge.vattenfall.nl | Own domain pages |
| Headquarters | Evenemansgatan 13, Stockholm (InCharge AB); Germany / NL entities have separate registrations | Page 113 T&Cs |
| Parent company | Vattenfall AB (Swedish state-owned energy utility) | Group website, Annual Reports |
| Parent origin | Swedish state-owned electricity utility; fossil-free energy mandate | Group website |
| Archetype | Dominant Utility CPO | Balance sheet, tender scale, multi-market, energy integration |
| Markets | SE (public-only post-Dec 2025), NL (dominant, growth), DE (B2B + location partner); NO (launched March 2019, **exited 31 Aug 2023**), UK (launched June 2018, no current presence), DK (Network Solutions fleet only, no retail InCharge) | Own domain pages; Norway exit: elbil.no FAQ (page 303); UK: Alfen press release 2018; DK: Tide Bus PR 2022; World EV Day Sept 2025 PR confirms SE+DE+NL only |
| CPMS (current) | Proprietary in-house — **ICSP (InCharge Service Platform)** | **Tier 1**: myincharge.vattenfall.com OAuth URL — isSaaSApp=false, sp=ICSP, tenantDomain=int.incharge, WSO2 IAM on own domain; developer "Vattenfall AB" in app stores; own-domain portal; no third-party OAuth redirect in 322 pages |
| CPMS (previous) | — | No prior platform switch identified |
| Hardware | Multi-brand: ABB Terra 50kW DC (SE public, 2019, ~40 locations), Kempower DC (SE public, 2021+, EUR 5M initial order), CTEK 3.7kW (SE workplace — now Voltiva domain), KEBA KeContact P30 (DE AC), Autel MaxiCharger AC Compact (NL home, strategic partnership Nov 2023), Alfen Eve Double (NL business AC), XCharge (NL business DC); DC up to 360kW | SE DC press releases (ABB 2019, Kempower 2021); DE FAQ hardware page; NL home charging page; NL business charging page |
| Charging types | AC (3.7kW wallbox to 22kW), DC (50kW–360kW fast/ultra-fast); bus depot DC confirmed (DK) | FAQ pages; NL tender pages; DK press release |
| Network size | 75,000 managed CPs / 1,000 MW (World EV Day Sept 2025); 78,000 (OHROS June 2025); 66,000 (Annual Report Dec 2024, audited); Roaming access: ~500,000; Electroverse public subset: 32,448 (#2 in Europe, May 2025) | World EV Day PR (page 222); OHROS article (page 117); Annual Report (page 96); Electroverse (page 133) |
| App (iOS) | 4.30★ / 23 ratings — Vattenfall InCharge (id885790133) | App store metadata in p2k DB, as of May 2026 |
| App (Android) | 4.35★ / 1,933 ratings / 100,000+ installs — package: nl.nuon.laadpunten, v4.8.7 | Google Play metadata in p2k DB, as of May 2026 |
| Key leadership | Susanna Hurtig (Head of E-mobility Nordic/SE); Henrik Nordström (Head of InCharge SE); Pieter van Ommeren (Director InCharge NL); Fabian Hagmann (Head of E-mobility Group); Tomas Björnsson (Head of International E-mobility, 2019); Esben Baltzer Nielsen (Head of Network Solutions DK/NL) | Press releases pages 39, 191, 198, 199, 41 |

---

## Parent Company & Corporate Context

**Parent:** Vattenfall AB
**Parent industry origin:** Utility — Swedish state-owned electricity utility; fossil-free energy mandate driven by Swedish government ownership
**Ownership structure:** 100% owned by the Swedish state
**Financial scale:** Multi-billion EUR revenue; Vattenfall is one of the top 10 European energy companies by generation capacity. The 2024 Annual Report ran to 1,068,533 chars — a formal sustainability and financial reporting document, consistent with a major listed-equivalent company. Balance sheet sufficient to fund multi-hundred-million-euro infrastructure bids without external project finance.
**Parent's primary revenue stream:** Electricity generation (wind, hydro, nuclear), transmission, and retail electricity supply to residential and commercial customers across Northern Europe
**Parent's primary clients:** Residential electricity customers (B2C), industrial and commercial electricity buyers (B2B), grid operators
**What EV charging means to the parent:** Core strategic play in the energy transition — explicitly positioned as a way to grow electricity demand, cross-sell retail electricity, and deliver on the fossil-free mandate. Not a side venture. The Group website states an ambition to operate 25× more charging points by 2030 versus 2020 (target: 500,000 units).
**Strategic mandate for EV charging:** Grow fossil-free electricity consumption (more EV charging = more Vattenfall electricity sold); win long-duration public infrastructure concessions to lock in recurring energy margin; position V2G/grid balancing as a future energy flexibility asset that fits the parent's grid-services business.

---

## Business Model

*How money is made. Ordered by estimated revenue contribution.*

**Primary revenue clients:** For InCharge NL, the dominant client relationship is municipalities and provinces — concession-based public charging infrastructure generating energy margin across tens of thousands of CPs. For InCharge SE and DE, B2B (businesses, real estate owners) and location partners (retail parks, hospitality) are the primary clients. End-driver PAYG revenue (from charging cards/app) is a secondary stream aggregated across the entire public network.

### 1. Municipal Concession / Public Network (NL — dominant; SE and DE — growing)

InCharge competes for and wins public tender contracts from municipalities and provinces to deploy and operate public charging infrastructure. The site host (municipality) contributes land and grid connection; InCharge invests capital in hardware and installation, and collects energy margin on every charging session for the duration of the concession (typically 7–15 years). This is the core NL model: Brabant+Limburg (22,000 CPs won in tender), Den Haag (5,400 CPs current + 3,200 V2G-ready), Amsterdam Metro area (35,000 CPs in partnership). In NL, InCharge uses a predictive placement algorithm (announced Gelderland/Overijssel 2022) to optimise station locations, which has become a tender differentiation tool. NL pricing is transparent on the website: subscription tier with a start fee of €0.35 for non-InCharge cards. Grid-aware charging (Flexpower Amsterdam) is already live in NL municipal contexts.

### 2. Location Partner (SE and DE — primary public model; NL complementary)

For private-site public charging (retail parks, hotels, supermarkets, hospitality), InCharge uses a Location Partner structure: **"Your location, our investment."** InCharge funds the full hardware, installation, maintenance, and operation. The site host contributes the parking space and gets zero-cost charging infrastructure, visibility in the InCharge network, and compliance with building regulations (PBL in SE from Jan 2025; GEIG in DE; EPBD IV across EU). InCharge earns on the energy spread between grid cost and user-facing charge price. Named SE partners: MAX Burgers, Nordstan Göteborg, Storebrand Fastigheter (136 fast CPs across 13 retail properties), Volvo CE Eskilstuna (138 workplace points, though SE workplace is now partially exited). Named DE partners: NH Hotels (50+ locations), Netto/Combi/famila supermarkets, DAS FUTTERHAUS (400+ planned locations), Gewobag Berlin (optimised renewables-hour charging). Named NL partners: Equity Estate (real estate), McDonald's (fast charging), NSI, Vebego.

### 3. B2B Operator Services (SE and DE — workplace, fleet, commercial)

Businesses that want charging for their own employees or customers can engage InCharge on a tiered service model (SE: Connect / Pay / Find):
- **Connect** (included): OCPP connection, RFID card charging, My InCharge portal with statistics, access control, customer support.
- **Pay** (add-on): InCharge administers billing and payment on behalf of the station owner — flexible pricing, InCharge owns the user payment relationship.
- **Find** (add-on): Station goes public on the InCharge network map and app (SE: "over 4,000 points in Sweden," now likely outdated post-Voltiva deal); optional EasyPark integration.
- **Annual Inspection** (add-on): Electrical safety inspection.

Businesses can also transfer existing hardware to InCharge operator services ("switch to us, keep your existing chargers"). Customer case: Sortera Group (fleet electrification). In DE, equivalent tiers include Business Charging and Home Charging (employee home charging with Eichrecht-compliant meters for employer reimbursement). After the Dec 2025 SE Voltiva deal, this stream is being wound down in SE residential and repositioned toward commercial fleet and transport.

### 4. eMSP / Roaming (cross-market revenue)

InCharge Key RFID card provides access to 100,000+ European public charge points via roaming (stated on website). InCharge earns a margin on third-party charges made with InCharge cards. InCharge also earns a start-fee (€0.35 at NL stations) from non-InCharge card holders using the network. Roaming partners confirmed: Plugsurfing (DE — 270+ InCharge DE stations, recent 33% price cut), E.ON (SE, 2021), ChargePanel (OCPI), Hubject (eRoaming hub). This is a meaningful scale play — 100K+ addressable points via roaming gives the InCharge card utility that most cards cannot match, and differentiates the eMSP subscription product.

### 5. Power-as-a-Service / Heavy Fleet (Vattenfall Network Solutions — separate brand)

Vattenfall Network Solutions (DK/NL, led by Esben Baltzer Nielsen) delivers full-responsibility electrification of heavy transport — investment, design, construction, operation, and electricity supply. Named deployments: Tide Bus Vejle (32 DC fast chargers, bus depot, spot-price electricity model, Nov 2022), Instabox logistics fleet (SE/NL/DK). This is a distinct procurement entity from InCharge retail/B2B, using a "Power-as-a-Service" contract model where the client pays per kWh delivered rather than for hardware. Revenue logic is similar to municipal concession but without the public-access requirement.

---

## Strategic Context

### M&A & Partnerships

**December 2025 — Voltiva SE deal (strategic exit, not acquisition):** Vattenfall InCharge transferred 11,000 residential and workplace charging points in Sweden to Voltiva, a company within the Mobility46 group. The transfer included customer contracts. Vattenfall retains the public SE network (~6,700 CPs). Mobility46 is a Swedish CPMS/SaaS company; Voltiva is its operations arm and is now the operator of the ex-Vattenfall residential/workplace book. This is framed as a strategic refocus, not a capacity reduction — InCharge SE will now concentrate on public charging locations, which require less customer-service overhead per CP. The Voltiva Android app package `se.mobility46.voltiva` confirms the technology relationship.

**2021 — E.ON roaming partnership (SE):** InCharge SE integrated with E.ON's charging network for roaming, confirmed by a Cision press release. Gave InCharge card holders access to E.ON CPs and vice versa. Consistent with Tier 2 roaming strategy (OCPI-based).

**2022 — Instabox logistics fleet (SE/NL/DK):** Network Solutions delivered fleet charging for logistics provider Instabox across three markets — the first visible multi-market fleet deployment.

**2022 — Gelderland/Overijssel NL tender:** InCharge won a major provincial tender using a predictive placement algorithm (announced via europawire.eu). Signals that algorithmic site selection is now a tender differentiation strategy.

**August 2023 — Norway exit:** InCharge exited Norway on 31 August 2023 — confirmed from elbil.no FAQ. The Ishavsveien network (Troms/Finnmark, built with Ishavskraft AS) was transferred to Elbilforeningen + Kople/Fortum. Peak network was ~350 CPs (end 2020) + ~25 Ishavsveien stations (Sept 2021). Norway was launched March 2019 with 4 employees. Not in 2026-2030 investment plan.

**2020 — Louwman Group / Toyota-Lexus NL (white-label EMSP):** "Toyota Charging Service" and "Lexus Charging Service" launched, explicitly "powered by Vattenfall InCharge." First confirmed white-label EMSP partnership — InCharge powers the charging access product for an OEM dealer network.

**October 2022 — Volkswagen We Charge integration:** Elli (Volkswagen Group) integrated InCharge network into We Charge service. Volkswagen customers gained access to 24,000 InCharge CPs in SE, NO, DE, NL. Confirmed Norway was still active in Oct 2022. 

**2024–2025 — NL tender trifecta:** Three major Dutch public tenders won in approximately 12 months — Brabant+Limburg (22,000 CPs), Den Haag (5,400 existing + 3,200 new V2G-ready CPs, Plug & Charge pilot ISO 15118), North-Holland/Flevoland/Utrecht (35,000 CPs with Shell ubitricity + TotalEnergies via MRA-Elektrisch/74 municipalities). 8M charging sessions in 2025 (+68% YoY in NL). This represents the fastest expansion of any InCharge market and is likely consuming a majority of current capex.

**June 2025 — ISO 55001 certification (NL):** Vattenfall InCharge became the world's first CPO to achieve ISO 55001 certification for e-mobility assets, in the Netherlands. Guided by OHROS Consulting Group. ISO 55001 is an asset management standard — signals operational maturity and readiness for long-duration concession SLA obligations.

**November 2024–March 2025 — Netbewust Laden (NL grid-aware charging):** Pilot of grid-aware charging at ~800 public stations (1,600 charging points) across 9 regions in Noord-Brabant and Limburg. Partners: Enexis (DSO), TapElectric (user notification app), provinces of Noord-Brabant and Limburg. Result: at least 50% of peak charging shifted to evening/night. Now expanding to all tendered stations in both provinces. Confirms ICSP has real-time DSO signal integration built in.

**April 2026 — Volkswagen V2G pilot (SE):** Vattenfall and Energy Bank scaling bidirectional charging with 200 Volkswagen EVs across central and southern Sweden. Group website as primary source; V2G is now entering commercial pilot scale, not just research.

**January 2026 — Hudiksvall V2G housing pilot (SE):** V2G pilot at a housing association in Hudiksvall — grid balancing use case, not just vehicle charging. Signals Vattenfall's intent to monetise EV batteries as grid flexibility assets.

### Leadership

| Name | Role | Background | Mandate signal |
|------|------|------------|----------------|
| Susanna Hurtig | Head of E-mobility Nordic / Sweden | Named consistently 2019–2024 across press releases; as of Oct 2022 — may have evolved post-Voltiva (Dec 2025) | Long-tenured; stability signal; her mandate appears consistent (expand InCharge in SE/Nordics) — no M&A or exit background |
| Henrik Nordström | Head of InCharge SE | Named in SE press releases (Storebrand Dec 2024); as of Dec 2024 | Operational execution role — site acquisition and partnership focus |
| Pieter van Ommeren | Director InCharge NL | Named in Dutch tender and session milestone press releases; as of 2024 | Growth/expansion mandate in NL's fastest-growing market |
| Fabian Hagmann | Head of E-mobility Group | Named at group level (World EV Day PR Sept 2025); as of Sept 2025 | Group strategy and cross-market coordination |
| Esben Baltzer Nielsen | Head of Vattenfall Network Solutions DK/NL | Named in DK bus charger press release (Nov 2022); as of Nov 2022 | Heavy transport / fleet electrification — separate from InCharge retail |
| Alied Wessels Boer | Director Vattenfall InCharge | Quoted in evcandi.com March 2025 (Netbewust Laden pilot); as of March 2025; may be NL director or group-level director | Grid-aware / smart charging mandate |
| Tomas Björnsson | Head of International E-mobility (2018–2019) | Quoted in Sept 2018 V2G interview (energate); Norway launch PR (2019); as of 2018–2019 only — role likely changed | International expansion lead; role may have evolved or been absorbed post-Norway exit |

### Strategic pivots or signals

**1. SE residential/workplace exit (Dec 2025):** The clearest strategic signal in the corpus. Transferring 11,000 CPs to Voltiva is a deliberate capital reallocation — residential is operationally expensive per-CP; public concessions offer better capital efficiency for a state-backed balance sheet. InCharge SE is effectively becoming a public-infrastructure operator, not a consumer EV charging service.

**2. NL as growth engine:** NL went from one market among three to the largest and fastest-growing. The Brabant+Limburg 22K CP win alone would double the SE network. The 90,000+ target suggests NL is now the platform for InCharge's global scale ambition.

**3. V2G as next commercial layer:** Two separate V2G announcements (Volkswagen SE, Hudiksvall housing) in four months (Jan–Apr 2026) signal a transition from lab/pilot to commercial intent. This is consistent with Vattenfall's grid business interests — V2G would create a new energy-margin-like revenue stream from EV battery dispatch.

**4. Voltiva/Mobility46 as strategic ecosystem:** Rather than building residential/workplace charging capabilities in-house, Vattenfall appears to be building an ecosystem where Voltiva/Mobility46 operates the service-intensive residential/SME layer, while InCharge concentrates on public infrastructure and institutional tenders. Voltiva also supplies grid balancing services to Svenska Kraftnät (confirmed on Voltiva website), which aligns with Vattenfall's grid interests.

---

## Development Stage & Trajectory

### Stage assignment

**Assigned stage:** Stage 4 (NL) / Stage 3→4 (SE) / Stage 3 (DE)

**Signals present:**
- Multi-country operation (SE + NL + DE) with separate legal entities per market
- NL: Dominant municipal tender position; 60,000+ CPs; 8M sessions/year; V2G-ready stations live; Plug & Charge pilot (ISO 15118)
- SE: Own-brand public network (6,700 CPs); B2B operator services product with three tiers (Connect/Pay/Find); roaming with E.ON and ChargePanel; EasyPark integration; V2G commercial pilot
- DE: Location partner model live; B2B tiers (business charging, home charging with Eichrecht compliance); Eichrecht-compliant metering; roaming via Plugsurfing; GEIG advisory content
- Group-level roaming with 100,000+ EU access points via InCharge Key
- Annual Report sustainability disclosure (large-company governance maturity)
- V2G integration at pilot scale — beyond what most Stage 3 CPOs have attempted

**Signals absent:**
- No multi-operator white-label sub-operator product visible in the corpus (the SE operator services Connect/Pay/Find is a reseller-for-others model, not a full sub-operator white-label)
- No depot scheduling/power-management product spec for heavy-fleet use cases (mentioned but not detailed)
- No fleet telematics integration documented
- No explicit multi-currency billing or unified cross-market portal described for B2B enterprise clients operating across SE+NL+DE simultaneously

**Conflicting signals:**
- SE operator services page cites "over 4,000 charging points in Sweden" — inconsistent with ChargePanel's 6,700 SE public CPs. The operator services page is likely older (pre-Voltiva deal) and the 4,000 figure may have been the public network count before the 6,700 was reached. Post-Voltiva, the public count is confirmed at ~6,700 (ChargePanel) while the total SE book dropped by 11,000. Resolution: treat ChargePanel as current; operator services page is outdated.
- Network size across multiple sources: 66,000 (Annual Report Dec 2024, audited) → 75,000 managed CPs (World EV Day Sept 9 2025, own press release) → 78,000 (OHROS Consulting Group June 2025 article, likely includes pre-divestiture SE residential still counted before Voltiva handover). Use 75,000 as the most current self-declared active figure; 66,000 as the audited year-end baseline. The Electroverse public subset (32,448, May 2025) is the most conservative and excludes residential/managed/workplace CPs. All three numbers are correct depending on scope and date.
- The 90,000+ NL target: sourced from ChargePanel data interpretation plus tender-sum arithmetic. Not a direct quote. Treat as directional, not official.

*Stage is determined by the operational model. The NL concession-at-scale model is Stage 4. The SE residential exit signals Vattenfall is deliberately shedding the Stage 2/3 residential layer and concentrating on Stage 4 public infrastructure. DE is still at Stage 3, building the partner and B2B book under regulatory tailwind without dominant market position.*

---

### Transition pressures

| Pressure | Active? | Evidence |
|----------|---------|----------|
| Session volume making manual ops unviable in NL | **Yes** | 8M sessions in 2025 (+68% YoY); 90K target implies automation of operations is already a requirement, not a future need |
| V2G integration requiring new energy-management platform capability | **Yes** | Two V2G announcements in 4 months (Jan–Apr 2026); Den Haag V2G-ready stations already live; Volkswagen 200-car pilot |
| NL regulatory compliance at scale (AFIR, ISO 15118, Plug & Charge) | **Yes** | Den Haag Plug & Charge pilot confirmed; AFIR likely requires open payment at all new CPs |
| SE public-only strategy requiring volume replacement for 11K exited CPs | **Yes** | Dec 2025 Voltiva deal; public-only SE network needs to grow to maintain group numbers |
| DE GEIG/EPBD regulatory tailwind accelerating B2B book | **Yes** | GEIG advisory page active; location partner pitch explicitly references German building law |
| Multi-market enterprise billing for clients operating in SE+NL+DE | **Unclear** | No cross-market enterprise portal described; Sortera Group and Volvo CE cases are single-market; international fleet billing not documented. Resolution criterion: a careers posting specifying multi-market billing management, a cross-market client case study, or a portal screenshot showing SE+NL+DE unified invoicing would confirm Active. Absent these: leave as Unclear — not resolvable from current corpus. |

---

### Decisions forced

- **V2G energy management integration (SE + NL, 2026–2027):** The Volkswagen pilot and NL V2G-ready stations are moving from pilot to operational. This requires integrating EV battery dispatch with spot-price signals, grid operator APIs (Svenska Kraftnät in SE, TenneT in NL), and settlement. The in-house CPMS may handle charging sessions; energy management at V2G scale likely requires additional capability. *Basis: V2G transition pressure.*
- **NL platform scalability to 90K CPs (2025–2027):** Going from 60K to 90K+ while maintaining session reliability under AFIR and tender SLA obligations will stress the current platform. If the in-house stack was built for the old NL scale, the tender wins represent a 50% growth shock. *Basis: session volume pressure + regulatory compliance.*
- **SE public network growth strategy (2026–2028):** Having exited 11,000 residential CPs, InCharge SE needs to replace that volume with public concessions and location partners. The regulatory tailwind (PBL from Jan 2025) helps, but requires an accelerated site-acquisition and public-tender motion. *Basis: SE exit transition pressure.*
- **DE market leadership (ongoing):** The GEIG/EPBD tailwind creates a window, but German CPOs (EnBW, IONITY, Allego) and CPMS-as-a-service providers are also targeting this. InCharge DE is building the right model (location partner, B2B tiers) but has not achieved dominant position. The decision window for whether to push DE to Stage 4 or keep it as a secondary market is open now. *Basis: competitive pressure + regulatory tailwind.*

---

### Sales angle

The only credible entry point is adjacent to V2G, not within core charging platform. Vattenfall is running the most advanced V2G programme of any CPO in the corpus — two separate announcements in four months, one involving 200 production vehicles, one involving grid balancing at a housing association. This is no longer a research exercise; it is a commercial intent signal. The gap this creates is not in charging management (which they own) but in energy dispatch, settlement, and grid API integration — capabilities adjacent to the CPMS that no charging-software vendor automatically provides. A conversation framed around "how do you take V2G from pilot to commercial settlement" is the only realistic entry for any external technology provider. The timing window is the next 12–18 months — before the Volkswagen pilot completes and internal solutions are locked in.

---

## CPMS Identification

**State:** Confirmed proprietary in-house — **ICSP (InCharge Service Platform)**

**Evidence tier:** **Tier 1** — OAuth URL at myincharge.vattenfall.com contains three mutually-independent confirmatory signals

**Evidence:**
- **`isSaaSApp=false`** (WSO2 OAuth parameter, page 288): Explicit parameter that distinguishes a self-hosted application from a third-party SaaS CPMS. This parameter is set to `false` at the Vattenfall IAM level — it cannot be set by a SaaS vendor.
- **`sp=ICSP` and `tenantDomain=int.incharge`**: The authenticated service provider is named "ICSP" (InCharge Service Platform) within the internal `int.incharge` tenant. Vattenfall has named their own CPMS.
- **IAM endpoint `accounts.vattenfall.com/iamng/emob/`**: WSO2 Identity Server hosted on Vattenfall's own domain — not a third-party identity provider redirecting to an external platform.
- **App developer "Vattenfall AB"**: Both iOS and Android app stores list the developer as Vattenfall AB (Swedish parent company), not a third-party CPMS vendor.
- **Own-domain portal**: myincharge.vattenfall.com and my.goincharge.com — not a white-labeled external SaaS URL.
- **Android app package `nl.nuon.laadpunten`**: Legacy Nuon/Vattenfall identifier — confirms the app was built on a Vattenfall-origin codebase, not on a third-party platform.
- **322 pages, zero external vendor attribution**: No vendor case study, press release, partner announcement, or job description in the entire corpus attributes the charging management platform to an external vendor.
- **No third-party OAuth redirect**: A SaaS CPMS (Driivz, Coreflux, Has·To·Be, etc.) would appear as the OAuth redirect target when users log into the customer portal. None do.

**What was checked:**
- [x] Own-domain pages (all three markets: SE, DE, NL)
- [x] App store package name / developer field (iOS + Android)
- [x] Customer portal OAuth URL and IAM domain (myincharge.vattenfall.com — page 288)
- [x] Vendor case study pages (ChargePanel, Plugsurfing, Hubject, Driivz, EVA Global — none claim InCharge as CPMS client)
- [x] CPO press releases / investor materials (Annual Report, Cision, europawire)
- [x] SERP queries (232 recommended pages including CPMS and partnership queries)
- [ ] Careers pages (not scraped — would have confirmed platform stack via job requirements, but no longer needed for conclusion)

**If previously switched:** No prior platform switch identified.

**Multiple stacks (acquired brands):** No acquired brands identified. The Voltiva/Mobility46 relationship is a divestiture (InCharge transferred CPs to Voltiva), not an acquisition — Voltiva now runs its own Mobility46 CPMS independently. No CPMS fragmentation from acquisition debt.

**Vendor profile:** N/A — not identified.

### Ancillary Tech Stack

| Component | Vendor | Scope | Notes |
|-----------|--------|-------|-------|
| eRoaming hub | Hubject | Cross-market | eRoaming platform referenced; standard for EU roaming interoperability |
| Roaming partner (DE) | Plugsurfing | DE — 270+ InCharge stations | OCPI-based; 33% price cut at InCharge DE stations per recent announcement |
| Roaming partner (SE) | E.ON | SE | Announced 2021; Cision press release |
| Roaming protocol | OCPI | All markets | ChargePanel OCPI connection confirmed; standard cross-network |
| App integration | EasyPark | NL + SE | Optional on the Find tier; parking-adjacent EV network access |
| Smart charging / DLM | Power Control + Dynamic Load Balancing | All markets (described) | Named as InCharge capabilities; vendor not identified |
| Smart charging / DLM (SE residential) | Voltiva Optimera (post-Dec 2025) | SE residential — now Voltiva | Cloud-based load balancing by Voltiva; grid balancing supplied to Svenska Kraftnät |
| Payment (PAYG) | Own billing via My InCharge | All markets | MID-certified meters throughout; Eichrecht-compliant in DE |
| Compliance metering | MID-certified / Eichrecht | DE for public/commercial | MID sufficient for employee home; Eichrecht required for third-party billing |
| Hardware (SE DC public) | ABB Terra 50kW | SE public DC, 2019, ~40 locations | First DC rollout; foundational SE fast charging infrastructure |
| Hardware (SE DC public) | Kempower DC | SE public DC, 2021+, EUR 5M initial order | Scaled SE fast charging programme; current primary SE DC vendor |
| Hardware (SE workplace) | CTEK 3.7kW / CTEK CC3 | SE workplace (Volvo CE case) — now Voltiva domain | Transferred to Voltiva with SE residential/workplace book (Dec 2025) |
| Hardware (DE AC) | KEBA KeContact P30 | DE (mentioned in FAQ) | Confirmed in FAQ hardware page |
| Hardware (NL home) | Autel MaxiCharger AC Compact | NL home charging | Strategic partnership announced Nov 2023 (evcandi.com) |
| Hardware (NL business AC) | Alfen Eve Double | NL business/workplace | Confirmed in NL business charging page |
| Hardware (NL business DC) | XCharge | NL business fast charging | Confirmed in NL business charging page; first mention of XCharge brand in corpus |
| Hardware (NO residential, historical) | Charge Amps Halo | NO (2020, now exited) | Named in Nov 2020 Norwegian press release; network transferred Aug 2023 |
| Hardware (UK, historical) | Alfen ICU | UK (2018 launch, now exited) | UK launch partner; no current UK presence |
| V2G | Bidirectional charging hardware (spec unknown) | SE (pilot), NL (Den Haag) | Volkswagen V2G pilot (200 cars, Apr 2026); Den Haag V2G-ready (ISO 15118 / Plug & Charge) |
| Predictive placement | Internal algorithm | NL | Used in Gelderland/Overijssel tender (2022); differentiation tool for tender bids |
| DSO integration (NL) | Enexis API (grid capacity signals) | NL — live since autumn 2025 | Netbewust Laden: ICSP receives real-time grid capacity signals from Enexis and adjusts charger power output accordingly. ~800 stations across Noord-Brabant + Limburg. Confirms ICSP has external API integration layer beyond charging session management. |
| IoT connectivity (SE, Voltiva) | AddSecure Link | SE residential/workplace — now Voltiva domain | SIM/IoT layer for ex-Vattenfall chargers; now under Voltiva. Named as connectivity provider on Voltiva website. |

*Careers pages not scraped — likely the highest-value source for tech stack detail (specific platform vendors named in job requirements). This is the most important remaining gap.*

---

## Business Gaps

*Assessed against what a Dominant Utility CPO at Stage 3–4 operating across SE/NL/DE should have.*

| Gap | Evidence | Sales relevance |
|-----|----------|-----------------|
| Home charging in SE | Explicitly exited Dec 2025 (Voltiva deal) | Deliberate strategic choice; not a platform gap. Residential removed from SE addressable market. |
| Norway / UK presence | Norway: **exit confirmed 31 Aug 2023** (Tier 1 — elbil.no FAQ). Peak network ~350 CPs. Ishavsveien route transferred to Elbilforeningen + Kople/Fortum. UK: launched June 2018, no current corpus pages, no 2026-2030 investment allocation | Not a gap — deliberate market exits. Signals appetite to focus capital on SE/NL/DE. Relevant context for understanding risk appetite in non-core markets. |
| V2G energy management / settlement stack | V2G at pilot scale only; no commercial settlement or dispatch product described in corpus | **High relevance** — see Sales angle. If V2G scales, settlement and grid API integration cannot be handled by charging CPMS alone |
| Fleet depot management (DLM product spec) | Fleet transport page mentions depot charging and DLM; no power scheduling, session queuing, or depot planning product detailed | Medium — stated growth segment (heavy fleet via Network Solutions) but product spec absent |
| Enterprise cross-market billing (SE+NL+DE) | No cross-market portal described; single-market cases only (Sortera SE, Volvo CE SE) | Unclear — may exist but not in corpus; would be a gap if international fleet clients need unified billing |
| AFIR open payment compliance at new NL CPs | Den Haag Plug & Charge pilot live; no explicit AFIR compliance statement found | Medium — NL public network is subject to AFIR; tender contracts likely include compliance requirements |
| Careers page visibility | Not scraped | Research gap, not a business gap |

---

## Competitive Position

### Strengths

1. **State-owned balance sheet as competitive moat in tenders:** Vattenfall can bid for 22,000-CP or 35,000-CP tenders with balance sheet depth that pure-play CPOs and most PE-backed operators cannot match. This is the single most defensible advantage — it cannot be replicated by a competitor without a state backer or major infrastructure fund behind it.
2. **NL tender track record and execution capability:** Three major Dutch public tender wins in 12 months (Brabant+Limburg, Den Haag, Amsterdam Metro area) demonstrate the ability to compete on price, logistics, and regulatory compliance at municipal scale. Each win makes the next win easier (reference customer, operational infrastructure already deployed).
3. **Multi-market roaming network (100,000+ EU CPs):** The InCharge Key's access to 100K+ EU charge points is a driver-facing differentiator that most national CPOs cannot match. Anchors the eMSP subscription product and card stickiness.
4. **Green energy brand and parent alignment:** Vattenfall's fossil-free mandate is credible (they own wind and hydro assets). EV charging on renewable energy is an authentic proposition, not greenwashing. This matters in public-sector procurement scoring.
5. **V2G and grid-services positioning:** No other CPO in this corpus is running V2G at pilot scale across two markets simultaneously. First-mover advantage in commercial V2G services within the NL/SE public-infrastructure context.
6. **Regulatory intelligence as a product:** GEIG advisory content (DE), EPBD IV guidance (NL), and PBL compliance framing (SE) demonstrate that InCharge uses regulatory expertise as a sales conversion tool — content marketing that pre-educates prospects before the sales conversation.
7. **ISO 55001 certification (NL, June 2025):** World's first CPO to achieve ISO 55001 for e-mobility assets. Asset management standard that signals operational maturity, lifecycle management discipline, and readiness for long-duration SLA obligations in public tenders. Differentiation tool in Dutch provincial procurement.
8. **European scale ranking:** #2 by Electroverse connector count (32,448 connectors, May 2025) — second only to E.ON Drive (42,353). This is the public-accessible subset; own network is significantly larger.

### Weaknesses

1. **App quality: persistent payment integration failures (2020–2026):** The most damaging finding in the corpus. Credit card payment failures have appeared in app reviews continuously since 2020. The Dec 2023 app migration crisis caused mass login failures. At 1,933 Android ratings, the statistical pattern is reliable. Payment failures at this frequency suggest a CPMS-level billing integration issue, not a UI problem. For a company running 8M sessions/year in NL, this is a structural reliability risk, not a minor UX complaint.
2. **SE strategic whiplash — narrative risk:** Exiting 11,000 residential CPs while declaring public growth ambitions creates a messaging challenge: Vattenfall InCharge was marketed to residential customers for years and is now telling the market it is a public-infrastructure specialist. The Voltiva deal is strategically sound but could dent CPO operator trust in InCharge as a long-term partner for residential segment.
3. **DE sub-scale relative to SE and NL:** Germany has the second-largest EV market in Europe, but InCharge DE's visible network size (bundled with NL in the ChargePanel 60,000+ figure, with DE contribution unclear) appears significantly smaller than the NL operation. GEIG/EPBD tailwind exists but InCharge has not established NL-equivalent market leadership.
4. **App origin (nl.nuon.laadpunten) reveals technical debt:** The app package name shows the Android app is built on a ten-year-old Nuon product line. This is not visible to users, but suggests the core software platform has significant legacy architecture. The Dec 2023 migration crisis (confirmed in app reviews as causing mass login failures) is consistent with the operational risk of re-platforming a legacy codebase at scale.
5. **Norway/UK exits:** Confirmed exit from Norway on 31 August 2023 (Tier 1 — elbil.no FAQ). Launch March 2019, peak ~350 CPs, Ishavsveien route (Troms/Finnmark) transferred to Elbilforeningen + Kople/Fortum. UK: launched June 2018, no current presence. Both exits indicate Vattenfall is willing to retreat from markets where the economics don't justify a state-backed balance sheet — Recharge dominated Norway; InCharge could not achieve the scale needed. Pattern: capital concentration on anchor markets (NL, SE, DE) rather than thin coverage across many.

### Peer comparison

| Peer | Network size (est.) | Market overlap | Notes |
|------|---------------------|----------------|-------|
| Allego (NL, PE-backed) | ~35,000 CPs | NL, DE | Direct NL tender competitor; publicly listed; fast DC focus |
| EnBW mobility+ (DE) | ~2,000 own + roaming | DE | German utility CPO; similar archetype; DE market leader |
| Recharge (NO) | ~10,000 CPs | NO (dominant), SE | Holds the Norwegian market InCharge failed to crack |
| IONITY (multi-OEM JV) | ~1,000 HPC sites EU | DE, SE | Highway DC; different model (no B2B); potential for NL conflict |
| Mer (Statkraft, NO) | ~15,000 CPs | SE, NO | Another utility-backed CPO; overlaps SE public and workplace |

---

## Network Size

**Headline figure:** 66,000 charge points — Vattenfall Annual and Sustainability Report 2024 (December 2024)

**Scope:** All markets combined (SE + NL + DE); includes public, workplace, and residential CPs (pre-Voltiva)

**Breakdown:**

| Region / Segment | Count | Source | Date | Notes |
|-----------------|-------|--------|------|-------|
| Group total | ~80,000 | Vattenfall Group website (Transportation page) | 2026 (page updated with Apr 2026 news) | Rounded; likely reflects NL expansion past 66K |
| Group total | 66,000 | Vattenfall Annual Report 2024 | Dec 2024 | Audited; most reliable primary source |
| NL + DE combined | 60,000+ | ChargePanel roaming data (OCPI) | 2025 | Public CPs accessible via roaming; likely undercounts private |
| SE public only | ~6,700 | ChargePanel roaming data | 2025 | Post-Voltiva; residential/workplace excluded |
| SE total (pre-Voltiva) | ~17,700 (est.) | Voltiva deal: 11K transferred + 6.7K retained | Dec 2025 | Inferred; not stated in corpus as a single figure |
| NL target | 90,000+ | Multiple NL tender pages and press releases | 2025–2027 horizon | Post Brabant+Limburg+Den Haag+Amsterdam expansion |

**Conflicts or lower boundaries:**
- ChargePanel 6,700 SE + 60,000+ NL+DE totals ~66,700 — remarkably consistent with the 66,000 Annual Report figure, suggesting ChargePanel covers substantially all of the InCharge public network.
- Group website ~80,000 is either more recent (NL expansion since Dec 2024) or a rounded aspirational figure. Given the Brabant+Limburg 22,000 CP tender was awarded in 2024 and likely partially deployed by early 2026, the real-time count approaching 80,000 is plausible.
- The 90,000+ NL target is aspirational — it includes CPs not yet deployed at time of tender award.

**AC/DC composition and network age:**
- AC/DC split: Not explicitly stated. Residential/workplace segment (now transferred to Voltiva) was primarily AC (CTEK 3.7kW, KEBA P30, home wallboxes). Public network has both AC (location partner model) and DC (fast charging at retail, highway, depot).
- DC power levels: Up to 360kW cited for location partner deployments; 32 DC fast chargers (unspecified kW) for Tide Bus DK; Volkswagen V2G pilot implies bidirectional-capable hardware. "Current generation" fast charging (150kW+) is live at major sites.
- Age signals: The Nuon app origin and Dec 2023 migration crisis suggest some network elements are a decade old (NL AC infrastructure). SE highway and retail DC sites are more recent (2022–2024 press releases). NL V2G-ready stations at Den Haag (2025) represent the newest generation.

---

## Geographic Intelligence

### Sweden (SE)

**Regulatory context:** PBL (Plan- och bygglagen) from January 1, 2025 requires buildings with more than 20 parking spaces to have EV charging infrastructure — both new and existing buildings. This is a significant B2B conversion driver, explicitly referenced in InCharge SE location-partner and property-owner marketing. Elsäkerhetsverket (Swedish Electrical Safety Board) approval required for charger hardware (InCharge lab tests and certifies).

**Market position:** Public network leader by own metrics (~6,700 public CPs post-Voltiva); not the largest total-CP operator (Mer, municipal networks also large). The Dec 2025 Voltiva exit reduces total SE CP count by 11,000 but concentrates on the more defensible public segment. Historical tendency to dominate retail, hospitality, and large-format property partnerships (MAX Burgers, Nordstan, Storebrand Fastigheter).

**Strategic pivot (Dec 2025):** Residential and workplace CPs transferred to Voltiva. InCharge SE is now public-infrastructure-only. The operator services product (Connect/Pay/Find) continues for third-party station operators who connect to the network. SE strategy increasingly resembles the NL concession model — fewer, larger, public deployments.

**Pricing model (SE public):** Not detailed in corpus; InCharge Key card + RFID access. Operator services: flexible pricing controlled by station owner with Pay tier. App charging available (subscription-free, per-kWh or per-minute).

**Notable partnerships:** MAX Burgers (nationwide fast charging), Nordstan Göteborg shopping centre (8 DC points), Storebrand Fastigheter (136 fast CPs at 13 retail properties, Dec 2024), Volvo CE Eskilstuna (138 workplace points, CTEK 3.7kW, 2022 — now likely within Voltiva book or under review).

**V2G:** Volkswagen pilot (200 EVs, April 2026, with Energy Bank); Hudiksvall housing association grid pilot (January 2026). Both SE-based — more advanced than any competitor V2G visible in corpus.

**Roaming:** E.ON (2021), EasyPark (Find tier), ChargePanel (OCPI). Voltiva now supplies grid balancing services to Svenska Kraftnät using the transferred residential infrastructure — a separate revenue stream for the Voltiva/Mobility46 ecosystem.

### Netherlands (NL)

**Regulatory context:** EPBD IV (EU Energy Performance of Buildings Directive) requires EV charging infrastructure in new builds and major renovations — alignment with InCharge NL marketing. Municipal tenders are the primary infrastructure deployment mechanism; concession periods typically 10–15 years. AFIR (Alternative Fuels Infrastructure Regulation) requires open payment at all new public CPs from 2024 — Den Haag Plug & Charge pilot (ISO 15118) is directly relevant.

**Market position:** Dominant. Three major tender wins in 12 months, 8M sessions in 2025 (+68% YoY), 60,000+ CPs on ChargePanel. NL is InCharge's largest and fastest-growing market by every visible metric. The NL predictive placement algorithm (Gelderland/Overijssel 2022) and Den Haag V2G-ready stations (2025) represent the most advanced InCharge operations globally.

**Deal structure:** Municipal concession (zero-cost to municipality; InCharge invests capital, earns energy margin over concession period) + location partner (zero-cost to private site host). €0.35 start fee for non-InCharge card holders. Subscription tier structure for regular users. Partners include Equity Estate, McDonald's, NSI, Vebego, Delta Energie. EasyPark integration.

**Notable tenders:**
- Brabant + Limburg provinces: 22,000 CPs (largest single tender win visible in corpus)
- Den Haag: 5,400 existing + 3,200 new V2G-ready (ISO 15118 Plug & Charge pilot, 2025)
- North-Holland / Flevoland / Utrecht: up to 35,000 CPs in partnership with Shell ubitricity + TotalEnergies, via MRA-Elektrisch (74 municipalities), March 2024
- Gelderland + Overijssel: Won using predictive placement algorithm (2022)

**Target:** 90,000+ CPs post-expansion (estimated from tender sums; not a direct company quote).

**Flex/grid charging:** Netbewust Laden pilot (Nov 2024–Mar 2025): ~800 stations (1,600 CPs) across 9 regions in Noord-Brabant + Limburg, with Enexis (DSO) and TapElectric. At least 50% of peak charging shifted to evening/night. Now expanding to all tendered stations in both provinces. Grid-aware charging also written into MRA-Elektrisch municipal contract specifications. V2G-ready hardware at Den Haag confirms live infrastructure investment, not just aspiration. ISO 55001 certification (June 2025) — world's first CPO for e-mobility assets.

**App quality (NL field signals):** Reddit (EVMobiliteit) confirms multiple independent complaints about chargers out of service for months with vague "upgrade" explanations (Noord-Brabant groundwater issue not communicated). Fraud dispute (6 sessions, ~€50) resolved in 3 weeks after initial dismissal. Billing model is monthly invoice (post-pay) — flagged by users as opaque vs per-session settlement. Own-card NL rate: €0.34/kWh confirmed. Third-party EMSP markup at InCharge stations: OVO Charge charges €0.58/kWh at InCharge stations vs €0.34/kWh via own card.

### Germany (DE)

**Regulatory context:** GEIG (Gebäude-Elektromobilitätsinfrastruktur-Gesetz) mandates EV readiness for new and renovated commercial buildings — a significant pull for InCharge's location-partner model in retail and hospitality. InCharge DE publishes a GEIG advisory knowledge hub, positioning the brand as a compliance guide (and implicitly a solution provider) before the sales conversation.

**Market position:** Sub-scale relative to NL and to German-market-leader CPOs (EnBW, IONITY). Visible through: NH Hotels (50+ locations), Netto/Combi/famila supermarket chain, DAS FUTTERHAUS (400+ locations planned), Gewobag residential property (Berlin). Home charging via Vattenfall Smarter Living GmbH (wallbox + Vattenfall green electricity tariff bundle, plus solar PV cross-sell via Tink). 

**Deal structure:** Location Partner (same zero-cost model as SE/NL). B2B: Business Charging (workplace) and Home Charging (employee home charging with Eichrecht-compliant metering for employer reimbursement). Fair Charging (Eichrecht compliance for public billing) explicitly marketed.

**DE DC pricing (updated March 2026):** "Fair Laden 2026" — from 23 March 2026, all Vattenfall InCharge DC fast stations in DE charge €0.44/kWh or €0.49/kWh (two speed tiers), with no subscription requirement, no blocking fee, and payment-method-independent. This replaces the previous DE DC range of €0.49-€0.69/kWh AC: €0.47/kWh remains. Signals InCharge is moving toward simplified, transparent pricing in DE — potentially in response to competitive pressure from EnBW's highly-rated tariff structure.

**DE investment pipeline (2026-2030 plan):** Two committed e-mobility deals in Germany: Netto supermarkets (86 MEUR, due 2026) and Bünting group — Combi/famila supermarkets (56 MEUR, due 2026). Both are location-partner site rollouts on retail supermarket parking. Alongside NL Brali (64 MEUR, due 2026), these represent €206M in committed near-term pipeline across DE+NL.

**Eichrecht:** DE-specific metering law requiring calibrated meters for third-party billing. All InCharge DE public hardware must comply. Employee home charging only requires MID-certified meters (less stringent; all InCharge DE hardware meets this). InCharge DE markets full Eichrecht compliance as a differentiator, consistent with the German regulatory environment.

**Roaming:** Plugsurfing partnership (270+ InCharge DE stations accessible via Plugsurfing; 33% price cut recently announced); Hubject (eRoaming hub, cross-EU). DE roaming appears more price-competitive than SE/NL.

**Blocking fee (Blockiergebühr):** Active in DE — charges for occupying a CP beyond the charging session. FAQ page dedicated to this. Common in DE market; regulatory context (EV driver behaviour and parking).

**Home charging bundle:** Vattenfall Smarter Living GmbH sells wallbox + green electricity + solar PV as a bundle (partnership with Tink for solar) — a cross-sell into the Vattenfall retail electricity customer base. This is separate from the InCharge B2B product.

### Norway (NO)

**Confirmed exit — Tier 1.** InCharge exited Norway on **31 August 2023** — confirmed verbatim from elbil.no FAQ (page 303): *"Vattenfall Incharge avslutter sin norske virksomhet 31. august 2023."* The Ishavsveien network (Troms/Finnmark, ~25 fast-charging stations, built with Ishavskraft AS + 7 energy companies) was transferred to Elbilforeningen + Kople (Fortum). Full timeline: March 2019 launch (home charging "Smart Hjemme" + B2B ambitions, Oslo office, 4 employees, Charge Amps Halo hardware) → ~350 CPs peak (end 2020) → Ishavsveien route completed (Sept 2021) → Nordby kjøpesenter border shopping (17 CPs confirmed) → exit August 2023. Norway is absent from the 2026-2030 investment plan and from InCharge's September 2025 active-market declaration. Cause: Recharge, Tesla, and local operators dominated; InCharge could not achieve the scale required for a state-backed-balance-sheet-style concession model in a market already saturated with early-mover infrastructure.

### Denmark (DK)

Vattenfall operates in Denmark through Vattenfall Network Solutions (heavy transport, fleet), not the InCharge retail brand. Vattenfall Network Solutions delivered 32 DC fast chargers to Tide Bus in Vejle (November 2022) under a Power-as-a-Service contract. Also delivered fleet charging to Instabox logistics in SE/NL/DK. No retail InCharge brand presence in Denmark identified in the corpus. A separate contact (Esben Baltzer Nielsen, Head of Network Solutions DK/NL) leads this entity — distinct procurement from InCharge retail.

---

## App Quality

**iOS:** 4.30★ (23 ratings) — Vattenfall InCharge (App Store ID: 885790133)
**Android:** 4.35★ (1,933 ratings, 100,000+ installs) — package: nl.nuon.laadpunten, v4.8.7

**Rating history / rebrand note:** The Android package `nl.nuon.laadpunten` reveals the app is built on Nuon's legacy codebase. Nuon was acquired by Vattenfall and the EV charging product was rebranded InCharge. The December 2023 "app migration" referenced in multiple Google Play reviews was likely a major version transition from the old Nuon infrastructure to a newer stack — causing mass login failures for existing users. The Apple App Store rating (23 ratings only) is too small a sample for statistical reliability; the Google Play dataset (1,933 ratings) is the primary signal.

**Review patterns (1★ themes):**
1. **Credit card / payment failures** — Most persistent theme, appearing from 2020 through 2026. Users report being unable to start sessions with valid cards; authorisation failures; unexpected holds. Frequency suggests a CPMS-level billing integration problem (payment gateway or session authorisation), not a UI issue. Multiple nationalities affected (SE, NL, DE users all present in reviews).
2. **Login/account creation impossible without physical RFID card** — Users report the app requires ordering a physical charge card to create an account, making app-first onboarding impossible. A deliberate business rule (card-first model) but misrepresented as a digital product in app stores. Multiple 1★ reviews cite this as deceptive.
3. **"No internet connection" false error on Android** — App fails with a network error despite active internet. Affects many Android devices. Not resolved as of reviews spanning 2022–2025; likely a specific Android version or OEM networking compatibility issue.
4. **Charger status inaccurate** — App shows charger as available when it is occupied, broken, or out of service. Session availability reliability is a core product requirement; this directly drives wasted trips and user frustration.
5. **Session management (cannot stop session, cable stuck)** — Users report being unable to end charging sessions through the app; cable locked in vehicle after session nominally ended. This is an OCPP session management issue (StopTransaction command not successfully relayed), not an app UX issue. Has billing implications (charging continues, user charged for unused energy).
6. **Price complaints (DE especially)** — Multiple DE users report prices higher than expected or advertised; specifically 33% price cut at Plugsurfing-served stations highlights DE pricing has been a known issue.
7. **December 2023 migration crisis** — Multiple reviews cite a specific migration event in December 2023 that caused existing accounts to stop working. Mass login failures, inability to add cards to new system. Resolved eventually but caused significant churn and 1★ reviews that persist in the dataset.

**Field evidence (non-review sources):** A Tesla Club Sweden forum thread (page 106 in corpus, 53,105 chars — not read in detail but present) likely contains driver-facing complaints consistent with the review themes above. Reddit threads in r/EVMobiliteit and r/Netherlands were identified and read in Batch 4 — field findings reported in NL Geographic Intelligence above.

**Competitor mentions in reviews:** Several users who gave 1★ reviews specifically mentioned switching to Recharge (NO/SE) or Allego (NL) after payment failures. This is the clearest competitive churn signal in the dataset.

---

## Research Gaps & Unresolved

### Scrape failures (Insufficient research performed — Scrape failure)

| URL | Failure type | Area blocked |
|-----|-------------|--------------|
| my.goincharge.com (DE portal redirect) | Not scraped — URL listed in corpus manual links but no page content retrieved | DE customer portal feature set |
| incharge.vattenfall.no | Not scraped | Norway: **resolved** — elbil.no FAQ (page 303) confirmed exit 31 Aug 2023 via third-party source. No further blocker. |
| incharge.vattenfall.fi | Not scraped | Finland: historical/residual only (OpenChargeMap listing, outdated DE contact info). No strategic impact. |
| incharge.vattenfall.fr | Not scraped | France: no France-specific corpus pages; no evidence of France operations |
| Tesla Club Sweden forum (page 106, 53,105 chars) | Not read in catch-up pass | Field evidence for SE app/network quality — lower priority now that B4 field evidence (Reddit) confirmed core themes |
| Driivz.com case study page | Bot-blocked | CPMS vendor check — **resolved**: CPMS confirmed proprietary Tier 1 from other evidence; Driivz scrape failure no longer blocks any conclusion |

### Research gaps (Insufficient research performed — Research gap)

| Step | What it would have covered | Priority |
|------|---------------------------|----------|
| Careers pages (InCharge SE, DE, NL) | CPMS platform stack named in job requirements; engineering team size signal | LOW — CPMS now confirmed Tier 1; careers pages would have confirmed stack, not changed the conclusion |
| Vattenfall Annual Report 2025 (page 97, 1,040,997 chars) | Full read not performed; only referenced for network size; may contain updated CP count, V2G financials, and strategic priorities | MEDIUM — would confirm 2025 full-year network size and V2G financial disclosure |
| Tesla Club Sweden forum (page 106) | Driver-facing SE network quality field evidence; competitor mentions | LOW — Reddit field evidence (B4) covers the same themes; marginal additional signal expected |
| ZEV Alliance / Communities in Charge reports (pages 101, 104) | Industry benchmark data | LOW |

---

## Post-analysis brief

### Domain knowledge updates

**markets.md — Sweden:**
- Add: PBL law from January 1, 2025 mandates EV charging infrastructure in buildings with >20 parking spaces (new and existing). Direct B2B conversion driver; referenced explicitly in InCharge SE location-partner marketing.
- Add: Elsäkerhetsverket (Swedish Electrical Safety Board) approval required for commercial EV hardware. InCharge SE tests and certifies chargers in its own lab against Elsäkerhetsverket requirements.
- Add: Voltiva/Mobility46 is the dominant Swedish residential/workplace CPMS+operations provider after the Dec 2025 Vattenfall InCharge deal. 11,000 CPs transferred.
- Add: EasyPark is integrated with InCharge SE operator services (Find tier) — EasyPark is a parking-adjacent roaming layer in the Swedish market.

**markets.md — Netherlands:**
- Add: Municipal concession model (10–15 year duration typical); InCharge has won Brabant+Limburg (22K), Den Haag (8.6K), Amsterdam Metro area (35K). Dominant CPO in public tender market as of 2025.
- Add: AFIR compliance requires open payment at all new public CPs (ISO 15118 / Plug & Charge) — Den Haag pilot confirms live implementation.
- Add: Flexpower Amsterdam: grid-aware charging written into NL municipal contracts. Grid balancing is a contractual requirement in some NL concessions, not just a differentiator.
- Add: 8M charging sessions in NL in 2025 (+68% YoY) — largest session count of any CPO cited in corpus research to date.

**markets.md — Germany:**
- Add: GEIG (Gebäude-Elektromobilitätsinfrastruktur-Gesetz) mandates EV readiness in new/renovated commercial buildings. InCharge DE uses GEIG advisory content as a sales tool.
- Add: Eichrecht distinction: MID-certified meters sufficient for employee home charging + workplace internal use; Eichrecht-compliant (PTB-certified) meters required for public or third-party billing. Vattenfall Smarter Living GmbH entity handles DE home charging.
- Add: Blockiergebühr (blocking fee) is standard practice in German CPO market; FAQ pages common on DE operator websites.

**cpms_platforms.md — new entry or note:**
- Voltiva / Mobility46 (SE): Mobility46 is a Swedish CPMS/SaaS company; Voltiva is its operations/service arm. As of Dec 2025, operating 11,000 ex-Vattenfall residential/workplace CPs in SE. Android app package: `se.mobility46.voltiva`. Voltiva also supplies grid balancing services to Svenska Kraftnät. Relevant as a platform for the residential/workplace segment Vattenfall exited.

**business_archetypes.md — Dominant Utility CPO:**
- Confirm/add: The SE Voltiva exit is a replicable pattern — utilities may offload residential/workplace segments (high-overhead, low-capital-efficiency) to specialist operators while concentrating balance sheet on public concession infrastructure. This is a transition signal, not a distress signal.
- Confirm: V2G/grid services is the logical next commercial layer for this archetype — EV batteries become grid flexibility assets monetised by the parent utility's grid business. InCharge/Vattenfall is the first concrete case in the corpus.

### Reasoning corrections

1. **Voltiva deal interpretation:** Early in reading, the Voltiva transfer could have been misread as InCharge shrinking (losing 11,000 CPs). The correct reading — confirmed by SE operator services positioning and NL expansion context — is capital reallocation, not strategic retreat. The tie-breaker: InCharge immediately followed the exit with NL tender wins that exceed the volume transferred. A company in trouble does not simultaneously win 57K+ CP in new tenders.

2. **App rating as quality signal:** The 4.35★ Android average could be read as acceptable. The correct reading is that it masks a chronic payment failure problem visible only in 1★ review text. The rating is elevated by a large number of satisfied users who don't write reviews; the 1★ reviews disproportionately contain the diagnostic signal. This pattern (mid-tier rating, severe operational failures in the negative tail) is more concerning than a uniformly low rating, because it means the platform failure is intermittent and hard to fix.

3. **Network size: 66K vs 80K:** The Group website figure (~80,000) and the Annual Report figure (66,000) are not contradictory — they are 14 months apart and NL expansion between Dec 2024 and May 2026 plausibly accounts for the gap. Treating them as conflicting would have been wrong; they are a consistent data series with a timeline gap.

### Review corrections (Analysis Review Framework — 2026-05-26)

*Corrections applied to analysis body following structured three-stage review.*

- **Resolved F1** — Synthesis: changed "a sister company using Mobility46's platform" → "an independent company within the Mobility46 group." Voltiva is not part of the Vattenfall group.
- **Resolved F2** — Synthesis / Development stage: changed "a declared 90,000 CP target" → "a 90,000+ CP implied target (estimated from tender-sum arithmetic — not a direct company quote; treat as directional)." Qualifier already present in Development Stage section and NL Geographic Intelligence; brought Synthesis into consistency.
- **Resolved F3** — Competitive pressure (SE): removed CLEVER (not confirmed in SE); replaced with Mer Connect (Statkraft) — confirmed in markets.md SE section and peer table.
- **Resolved F4** — Competitive pressure (NL): removed Eneco and MAN/Stellantis (unsourced); replaced with TotalEnergies and Shell ubitricity — confirmed as co-bidders on MRA-Elektrisch from corpus.
- **Resolved F5** — "Where this is going": removed "German-specific CPOs (Allego, EnBW, IONITY)" — Allego is NL-headquartered per peer table. Replaced with "German-market competitors (EnBW, IONITY) and NL-native Allego — all with established DE presence."
- **Resolved F6** — Sales priority: removed inference that the Voltiva deal is evidence about re-platforming intent. Replaced with: "The December 2025 decision to exit SE residential is a capital-efficiency move — not evidence about re-platforming intent."
- **Resolved F7** — Entry point: removed "actively supplying grid balancing services via Voltiva to Svenska Kraftnät in SE" — post-divestiture this revenue belongs to Voltiva (independent entity), not Vattenfall InCharge. Volkswagen V2G pilot retained as the relevant evidence.
- **Resolved F8** — Transition pressures table: added resolution criterion to the "Multi-market enterprise billing" Unclear row — specifies what evidence would flip it to Active; otherwise remains Unclear as current corpus cannot resolve it.
- **Resolved F9** — Sales priority trigger: reframed (a) from condition to specific event (enforcement notice or SLA penalty); reframed (c) to specific observable events (job posting or product launch with no named partner).
- **Resolved F10** — Sales priority: added forced-decisions clarifier — explains which of the four decisions is the only adjacent entry point (V2G energy management / Decision #1) and why the other three are internal execution challenges.
- **Resolved F11** — Synthesis "What's absent": added V2G commercial settlement gap bullet — aligned with Business Gaps (V2G settlement row already present) and Sales angle / Entry point, completing the cross-section consistency.
- **Resolved F12** — App Quality field evidence: removed incorrect "No Reddit-specific InCharge threads identified" — Reddit threads in r/EVMobiliteit and r/Netherlands were read in Batch 4 and reported in NL Geographic Intelligence. Correction brings the two sections into consistency.
- **Resolved F13** — Company Profile app rows: added "as of May 2026" qualifier to iOS and Android metadata basis, per freshness audit requirement.
- **Resolved F14** — Leadership table: added "as of [date]" to Background column for all seven entries — dates drawn from most recent corpus source per person.
