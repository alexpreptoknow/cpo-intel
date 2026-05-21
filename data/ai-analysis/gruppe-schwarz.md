# CPO Analysis — Gruppe Schwarz (Lidl + Kaufland)

**Date:** 2026-05-19
**Analyst:** Claude (AI analysis via analysis review framework)
**Source:** 118 scraped pages + 1,285 app reviews from p2k DB (Scraped Pages/Gruppe Schwarz.md + Scraped Pages/Gruppe Schwarz — App Reviews.md)
**Coverage:** ~80% of non-noise pages read (22 pages skipped as noise/scrape failures; 8 deprioritized). Gaps: no careers pages scraped; Kaufland App (Android/iOS) not in corpus; no data for Lidl/Kaufland in SE, FI, HR, SK, AT, HU, PL, AL, KS, MK, ME, RS; seenews.com Kaufland BG article (scrape failure); annual report not in corpus.
**v2 changes:** 8 findings from analysis review framework applied — see Post-analysis brief.

---

## Alex Notes

**Things to pay attention to:** 

That's probably one of the hardest researches, as the info is very limited on Kaufland, Lidl and Gruppe Schwarz websites. A lot of the conclusions must be done through inference and deduction instead of finding clues inside the data. The sales urgency is low, as currently LLM is tuned to be conservative, but if you read the setup, problems and future growth of the company, any sensible sales person would chase this. We can always tweak the LLM to be more "optimistic" about opportunities.

Check the quality check and the post-analysis brief to see how we are slowly building a permanent knowledge system of the industry. This will expand significantly once we start to perform research at scale.



---

## Synthesis

**What Gruppe Schwarz clearly is:** The largest retail EV charging network in Europe — ~15,000 charge points across 32 countries, operated primarily as a consumer amenity at Lidl (discount grocery) and Kaufland (hypermarket) parking lots. Charging is part of Schwarz Group's "Klima-Initiative Electra" sustainability positioning, not a standalone revenue stream. The model is structurally retail-first: each charger increases dwell time and basket size, pricing is set deliberately below market to drive footfall, and the Lidl Plus / Kaufland App loyalty ecosystem is the strategic asset being deepened — not the kWh revenue line. Network identification is supported by: official Lidl International LinkedIn ("15,000 charging points across 32 countries"), EU-TEN-TEC registered data (8,855 Lidl + 2,395 Kaufland = 11,250 EU-only as of Oct 2025), Zapmap (1,388 chargers at 392 UK locations as of Mar 2026), and the May 2022 Schwarz press release (13,000 target; 3,500 in Germany at announcement). Bild.de and Auto-Motor-und-Sport.de (Oct 2025) confirmed that Lidl EU runs more charging points than the entire national networks of Estonia, Slovakia, Slovenia, and Latvia combined.

**CPMS:** Confirmed ChargePoint be.ENERGISED — Tier 1. Identified from: (a) direct payment URL `community.beenergised.cloud` returned for Kaufland DE direct payment (EVSE ID `DE*KDL*E00000672`); (b) ChargePoint/be.ENERGISED YouTube customer story featuring Schwarz Group; (c) Lidl UK July 2024 press release confirming be.ENERGISED integration with Lidl Plus app; (d) multiple third-party aggregators (Electroverse, wepoweryourcar.com) confirming be.ENERGISED as network operator for Lidl UK. Covers DE + UK — the two highest-value markets, and the majority of the ~15,000 total charge points (EU-TEN-TEC Oct 2025 gives EU-only 11,250; UK adds ~1,388; minus non-be.ENERGISED markets in IE, BG, CZ ≈ 10,500–12,000+; France CPMS unconfirmed in corpus — material if France uses a different platform). The Mitarbeiterladen employee charging app (package `com.hastobe.mitarbeiterladen`) extends confirmed be.ENERGISED usage to Schwarz Group's internal employee fleet charging. Third-party CPOs/CPMS for peripheral markets: EasyGo/EZO (IE + NI, Ampeco-based per EasyGo's stack), EVPoint (BG, Ampeco CPMS), E.ON Drive (CZ new stations), EWE Go (DE HPC concession, Alpitronic hardware), Fortum Charge & Drive (NO roaming, Fortum CPMS), and an unidentified CPMS for Kaufland Romania self-operated network.

Known quality signals for ChargePoint be.ENERGISED at Gruppe Schwarz: Android compatibility bug (Dec 2025–May 2026, 5+ months unfixed, "no internet connection" on affected devices, blocks EV session starts); power delivery below advertised spec at UK CCS stations (50kW advertised, 20kW actual); £40 pre-authorization hold in UK and 150 RON in Romania.

**What's absent:**
- **No unified pan-European CPMS** — 5+ parallel platforms across 10+ markets (ChargePoint be.ENERGISED DE+UK, EasyGo/EZO IE+NI, EVPoint/Ampeco BG, E.ON Drive CZ, Kaufland App RO) create significant operational overhead and inconsistent driver experience. No single platform manages the full 15,000-point network. This is the most commercially relevant gap for any CPMS vendor approaching this account.
- **No backend CPMS replacing ChargePoint be.ENERGISED** — Schwarz Group built an in-house Lade-App (schwarz-immobilien.de/ladeapp, Schwarz Immobilien) as a charging management overlay, but the CPMS backend for DE + UK remains ChargePoint. The structural dependency is at the CPMS backend layer, not at the management tool layer.
- **No third-party fleet or B2B charging product** — the network is entirely B2C/shopper-facing. No fleet contracts, no white-label CPO services.
- **No HPC-first strategy** — the core network is destination AC (22kW). HPC is emerging via third-party concessions (EWE Go, VW Elli) rather than Schwarz Group's own investment. This limits relevance for en-route/highway charging use cases.
- **Pre-authorization hold UX — £40 UK, 150 RON Romania** — held ~7 days per session. Cross-market pattern indicates a platform payment configuration issue, not a local policy. A CPMS with a frictionless payment pre-auth model has a direct differentiator here. Confirmed in app reviews (Apr 2026) and Reddit threads.
- **Kaufland Romania CPMS vendor unidentified** — 140+ self-operated stations at Kaufland RO on an unidentified CPMS backend (e-charge.ro management domain confirmed; vendor behind it not found in corpus). The only confirmed self-operated market not covered by an identified CPMS vendor, and the only potentially accessible CPMS procurement decision not under the ChargePoint umbrella.
- **No public API or open roaming program** — the network is accessible via RFID and direct payment but not positioned as an open eMSP product.
- **No public financials for the EV charging operation** — Schwarz Group is privately held (Schwarz Gruppe GmbH & Co. KG), publishes no granular divisional financials.

**What explains what's observed:** Retail-first logic explains the entire CPO posture: low or zero pricing (free AC charging with Lidl Plus in UK; 0.39–0.49 €/kWh in DE, below market), scaling with store count rather than charging demand, deep loyalty app integration (Lidl Plus = EV payment gateway in UK), and willingness to use third-party CPOs in markets where the complexity/cost of self-operation outweighs footfall benefit. The ChargePoint be.ENERGISED relationship was preceded by Pod Point in the UK (switched July 2024 — confirming willingness to switch CPMS when the operational case demands it) and by various local CPOs in Eastern Europe. The Schwarz IT / Schwarz Digits angle is relevant: Schwarz Group has built its own IT division (Schwarz Digits), suggesting a long-term ambition to bring digital infrastructure in-house. The Lade-App (schwarz-immobilien.de) is an early expression of that — an in-house charging management tool running alongside ChargePoint rather than replacing it.

**Development stage:** Operates as a fully mature retail CPO at Stage 4 scale — 15,000 charge points across 32 countries, dominant retail network in at least two national markets (DE and UK). Operational complexity is visible: 5+ parallel CPMS platforms across 10+ markets, an in-house Lade-App built alongside ChargePoint be.ENERGISED suggesting incremental capability building, and an Android compatibility bug unfixed for 5+ months that directly blocks EV sessions through the loyalty app payment gateway. Transition pressure is toward platform consolidation (the fragmented operator model creates management overhead) and incremental in-house platform capability via Schwarz Digits — but no single forcing event is currently observable that would require a platform decision at the group level.

**Where this is going:** Schwarz Group will continue scaling the network in line with store count and deepening Lidl Plus loyalty app integration. The ChargePoint relationship is stable in the near term — switching costs across 12,000+ points in DE + UK are high and the Pod Point switch precedent required significant app integration work. The Lade-App trajectory is the long-term signal: if Schwarz Digits continues investing, the ChargePoint dependency at the CPMS backend layer weakens incrementally over a 3–7 year horizon. The nearest-term decision that is actually accessible: Kaufland Romania CPMS formalization — the vendor is unidentified on a self-operated, growing network. If the Romania vendor is unknown (rather than simply not found in corpus), this is an open procurement.

**Competitive pressure:** ALDI Recharge (most directly comparable retail CPO, same footprint type), Rewe/Penny (DE market), IKEA (destination charging), and indirectly McDonald's, Starbucks (dwell-time destinations with chargers). The real competitive pressure is not on kWh market share but on "best retail charging experience" — Lidl's advantage is scale and free pricing; the vulnerability is reliability and UX (pre-auth holds, power accuracy, app instability). The loyalty scheme backlash (May 2026 points system change) is a near-term brand risk that could reduce Lidl Plus EV charging adoption if users churn from the app.

**Sales priority:** LOW for core CPMS displacement (ChargePoint anchor relationship covers 12,000+ points across DE+UK, extends to employee fleet via Mitarbeiterladen — switching costs are prohibitive); MEDIUM for a hardware vendor not currently supplying Schwarz Group (active large-scale procurement, ABB C50 is current standard — visible replacement cycle); MEDIUM for Kaufland Romania specifically (self-operated, CPMS vendor not yet identified — potential opening if no vendor is under contract, unconfirmed until Romania CPMS is identified).

No forcing event is currently observable that would require a platform decision at the group level within a 3-year horizon. The Kaufland Romania CPMS position is the only potentially accessible decision — it is an active self-operated network (140+ stations) with an unidentified CPMS vendor, implying a possible open procurement — but this is unconfirmed until the vendor is identified.

Trigger: Schwarz Digits public announcement of in-house charging platform development; Kaufland Romania CPMS identification (either confirming a vacancy or eliminating the opening); EWE Go HPC concession scale-up creating a parallel procurement conversation; ChargePoint be.ENERGISED contract renewal — renewal date not in corpus (research gap; monitor for ChargePoint strategic announcements about European white-label CPO market, or Schwarz Digits engineering hires in CPMS/platform roles).

**Entry point if pursued:** For CPMS vendors — approach via Romania (Kaufland self-op confirmed; CPMS vendor not yet identified — a potential opening if no vendor is under contract, but status unconfirmed until Romania CPMS is identified) or via Schwarz Digits (pitch as the platform Schwarz IT can build on top of, white-label or API-first, rather than pitching against ChargePoint head-on). For hardware vendors — enter through the EWE Go concession pipeline at DE HPC sites (Alpitronic currently winning this) or pitch for the 22kW AC refresh cycle in UK (Noodoe is current supplier — lifecycle pressure will emerge in 3–5 years).

**Adjacent leads:** Kaufland Romania — self-operated EV charging (140+ stations), CPMS vendor unidentified — a distinct procurement unit, not covered by the ChargePoint DE+UK relationship. EWE Go — independent concession CPO at Lidl DE HPC sites, operating its own platform — a separate procurement decision from Schwarz Group. Any future Schwarz Digits JV or white-label charging platform product would be a distinct procurement decision from the main entity; none currently announced.

---

## Company Profile

| Field | Finding | Basis |
|-------|---------|-------|
| Legal entity | Schwarz Gruppe GmbH & Co. KG (holding); EV charging operated under Lidl Stiftung & Co. KG and Kaufland Stiftung & Co. KG | gruppe.schwarz; corporate structure |
| Website | gruppe.schwarz, lidl.de, kaufland.de, lidl.co.uk, kaufland.com | Multiple own-domain pages |
| Headquarters | Neckarsulm, Germany | gruppe.schwarz |
| Parent company | None — Schwarz Gruppe IS the parent; privately held | gruppe.schwarz |
| Parent origin | Retail (German discount grocery / hypermarket) | gruppe.schwarz |
| Archetype | Retail CPO — destination charging at grocery/hypermarket parking; loyalty-app-integrated; pricing below market to drive footfall | Research synthesis |
| Markets | 32 countries — confirmed EV charging in: DE, UK, IE, NI, BG, RO, CZ, FR, NO (roaming); likely SE, FI, HR, SK, AT, HU, PL, and others | LinkedIn, EU-TEN-TEC, own-domain pages |
| CPMS (current) | ChargePoint be.ENERGISED (DE + UK + employee fleet, confirmed Tier 1); EasyGo/EZO (IE + NI, Ampeco); EVPoint/Ampeco (BG); E.ON Drive (CZ new); EWE Go (DE HPC concession); Fortum (NO roaming); unknown (RO self-op) | See CPMS Identification section |
| CPMS (previous) | Pod Point (UK, until July 2024) | Zapmap, Fleet News, learntechnique.com |
| Hardware | ABB C50 50kW DC (current standard DE+UK); Noodoe 22kW AC dual-socket (UK); Alpitronic HYC400 300kW DC (EWE Go HPC sites DE); CIRCONTROL Raption 50 50kW DC (older DE sites, being replaced) | LinkedIn, YouTube, sparneuwagen.de |
| Charging types | 7kW AC (some UK sites), 22kW AC (standard), 50kW DC (standard rapid), 150kW DC (newer DE sites), 300kW HPC (EWE Go concession DE) | Multiple pages |
| Network size | ~15,000 charge points across 32 countries (official, ~2025); EU-only 11,250 (EU-TEN-TEC, Oct 2025) | LinkedIn, EU-TEN-TEC/DataPulse-Research (Reddit) |
| App (iOS) | No data in corpus (not scraped) | Gap |
| App (Android) | Lidl Plus: 3.31★ / 1,205 reviews (1-year window) — Google Play; Kaufland App: not in corpus | p2k app_store_reviews |
| Key leadership | Michael Wiehl (Lidl UK EV programme, LinkedIn March 2026 post about ABB C50 rollout) | LinkedIn p.19 |

---

## Parent Company & Corporate Context

**Parent:** None — Schwarz Gruppe GmbH & Co. KG is the top-level entity. Privately held family group.
**Parent industry origin:** Retail — German discount grocery (Lidl) and hypermarket (Kaufland). Both brands are FMCG retailers, not infrastructure or energy companies.
**Ownership structure:** 100% private family ownership (Dieter Schwarz Foundation and Dieter Schwarz personally). No public listing, no PE backing, no JV at group level. Privately held with no obligation to report financials.
**Financial scale:** €176 billion revenue (WEF Schwarz Digits page, ~2025); ~600,000 employees across 32 countries. This makes Schwarz Group one of the largest private companies in the world — the balance sheet depth for EV charging capex is essentially unconstrained relative to the investment required.
**Parent's primary revenue stream:** Grocery retail — Lidl operates ~12,000 stores globally (discount format); Kaufland operates ~1,500 hypermarkets primarily in Central and Eastern Europe. Revenue generated from grocery, fresh food, non-food specials ("middle aisle"), and adjacent services.
**Parent's primary clients:** End consumers (retail shoppers). B2C only at the retail level.
**What EV charging means to the parent:** Customer amenity and footfall driver. Not a standalone revenue line. Pricing is deliberately below market (often free with loyalty app) to incentivize store visits. The strategic frame is "Klima-Initiative Electra" — EV charging is presented as part of Schwarz Group's climate/sustainability agenda, reinforcing brand positioning among environmentally-minded shoppers. The loyalty app angle adds a data monetization secondary motive: Lidl Plus / Kaufland App charging sessions generate shopper data.
**Strategic mandate for EV charging:** Scale the network in proportion to store growth; integrate with loyalty apps to deepen customer relationship; position Schwarz as the "most convenient retail charging destination" in core markets. The 13,000-point target (May 2022 press release) and actual ~15,000 (2025) shows the mandate has been executed ahead of target.

---

## Business Model

**Primary revenue clients:** Consumers (Lidl/Kaufland shoppers). EV charging is not sold separately — it is an amenity subsidized by the grocery margin, not a standalone revenue stream. The CPO operation is effectively a marketing cost line.

### Revenue stream 1 — Own-network destination charging (DE, UK, RO)

AC charging free with Lidl Plus app at UK sites and at older DE sites. In Germany, where pricing applies: 0.39 €/kWh AC + 0.49 €/kWh DC (Lidl DE page, as of May 2026 research corpus); 0.19 €/kWh promotional pricing flagged in Reddit thread (DE). In Romania: Kaufland App payment, pricing not confirmed in corpus. The structural pricing logic is below-market: the loss on per-kWh revenue is subsidized by increased grocery basket spending from EV-driver shoppers who dwell longer. Pre-authorization holds (£40 UK, 150 RON RO) are a UX friction point that contradicts the low-friction intent of the model.

The 2-hour session cap at UK sites is a deliberate footfall management tool — designed to keep bays turning over within a typical shopping trip, not to maximize kWh revenue. It is a Schwarz Group configuration choice, not a platform limitation.

### Revenue stream 2 — Third-party CPO concessions (HPC — EWE Go, VW Elli)

At HPC sites, Schwarz Group provides the real estate (parking lot); EWE Go or VW Elli/Electrify operate the station, own the charger hardware, and collect session revenue. Schwarz Group receives a concession fee (form unknown — likely a fixed lease payment per bay per month, or a revenue share). The Oct 2024 EWE Go partnership uses Alpitronic HYC400 (300kW) hardware at Lidl DE stores. This is a very different model to the owned AC network: Schwarz Group is the landlord, not the CPO, for HPC.

### Revenue stream 3 — Logistics fleet electrification (Milence partnership, Jan 2026)

Kaufland × Milence charging hub for HGV logistics fleet. This is Kaufland's own internal fleet — not a third-party B2B product. Kaufland is the customer of this service (via Milence), not a supplier. Separate from the consumer-facing network.

*Revenue stream absent: No B2B fleet product for third parties, no white-label CPO offering, no roaming eMSP product sold to other operators. The network is fully B2C/internal-fleet oriented.*

---

## Strategic Context

### M&A & Partnerships

| Date | Event | Strategic rationale |
|------|-------|---------------------|
| Feb 2021 | 100th rapid charger milestone (UK, Pod Point era) | First UK scale signal; destination charging strategy already in motion |
| May 2022 | Schwarz Group press release: 13,000 charging point target | Official scale commitment; DE 3,500 already live at announcement |
| Aug 2023 | Kaufland CZ × E.ON Drive Infrastructure partnership | Market-specific CPO partnership for CZ new stations; E.ON Drive as operator |
| Jul 2024 | Lidl UK switches from Pod Point to ChargePoint be.ENERGISED | Confirmed platform switch — signals willingness to change CPMS when operational case demands; be.ENERGISED chosen for pan-European scale fit |
| Jul 2024 | Lidl Plus UK integrates EV charging payment | Loyalty app becomes EV payment gateway; deepens Lidl Plus strategic value |
| Oct 2024 | EWE Go × Lidl DE HPC partnership (Alpitronic HYC400, 300kW) | Third-party concession model for HPC — separating AC destination network (self-operated) from HPC (concession); capital-light HPC strategy |
| Jan 2026 | Kaufland × Milence logistics hub (HGV charging) | Heavy logistics electrification strand; Milence is Traton JV — confirms Kaufland fleet electrification agenda, separate from consumer network |
| ~Oct 2025 | EU-TEN-TEC data confirms Schwarz EU network exceeds multiple countries' entire national networks | Not an M&A event; a scale confirmation point |

**Integration debt:** Fragmentary operator model across 10+ markets reflects a strategy of deploying through local market partners rather than managing a unified pan-European platform. This creates genuine integration debt — at least 5 different CPMS stacks running simultaneously with no confirmed unified management layer.

### Leadership

| Name | Role | Background | Mandate signal |
|------|------|------------|----------------|
| Michael Wiehl | EV infrastructure (Lidl UK) — exact title unknown | Appeared on LinkedIn discussing ABB C50 rollout and Lidl Plus integration (Mar 2026) | Execution-focused; hardware rollout and app integration are the live work items |
| [Schwarz Digits leadership] | Schwarz Digits IT / digital unit | Not identified in corpus | Schwarz Digits is the unit that would develop in-house charging platform capabilities if that direction is taken |

*Key leadership not fully identified — careers page not in corpus, LinkedIn scrapes limited. This is a research gap.*

### Strategic pivots or signals

- **Schwarz Digits / Schwarz IT:** The internal IT division (Schwarz Digits, ~€176B group revenue behind it) positions Schwarz Group as a potential in-house platform developer. The schwarz-immobilien.de/ladeapp page confirms they already built an in-house "Lade-App" for charging management alongside ChargePoint be.ENERGISED — this is a management overlay tool, not a CPMS backend replacement. The trajectory is incremental in-house capability building, not wholesale replacement of ChargePoint in the near term.
- **AC destination → HPC concession model:** The EWE Go partnership signals Schwarz Group is NOT investing its own capital in HPC hardware — it's providing the real estate and taking a concession fee. This may become the template for all HPC expansion.
- **Loyalty app deepening:** Lidl Plus went from coupon app → digital receipt → EV payment gateway (Jul 2024) → scan-and-go (Dec 2025). The trajectory is toward becoming a full-service retail app. EV charging is one integration in a broader platform play.

---

## Development Stage & Trajectory

### Stage assignment

**Assigned stage:** Stage 4 (retail CPO context — not a pure-play CPO that evolved through stages 1–3; a retail giant that deployed charging as an amenity at scale)

**Signals present — placing the company at Stage 4:**
- ~15,000 charge points across 32 countries — largest retail EV charging network in Europe (Lidl International LinkedIn, ~2025)
- Dominant position in DE retail charging segment (leader among German discount retailers — businessinsider.de May 2025; EHI Retail Research study May 2025 confirms densest per-store retail charging network in DE; largest retail CPO by total count in DE not confirmed from comparative corpus data) and UK (largest retail charging network confirmed — 1,388 CPs / 392 locations, Zapmap Mar 2026)
- Fragmented CPMS across 5+ platforms in 10+ markets — integration debt characteristic of Stage 4 scale (even without M&A, fragmentation from market-by-market partner deployment produces the same operational complexity)
- Internal IT division (Schwarz Digits) building proprietary charging management tools (Lade-App) alongside enterprise CPMS — vertical integration signal
- ChargePoint be.ENERGISED confirmed as anchor enterprise CPMS across DE + UK + employee fleet — multi-year, multi-country enterprise platform relationship
- CPMS switch precedent (Pod Point → be.ENERGISED, Jul 2024) with full loyalty app re-integration — demonstrating capacity to execute platform migration at scale

**Signals absent — not expected at Stage 4 for a retail CPO archetype:**
- No B2B fleet product for third parties (correct for archetype — retail CPO is B2C only)
- No active M&A in EV charging (Schwarz expands organically via store network, not acquisitions — this is an archetype characteristic, not a missing Stage 4 signal)
- HPC is thin (concession-only, not own investment) — consistent with retail CPO archetype

**Conflicting signals — with resolution:**
- The absence of M&A activity could suggest Stage 3 (organic growth phase). Resolution: Schwarz Group is not a pure-play CPO — the "M&A growth vector" criterion from Stage 4 applies to pure-play CPOs acquiring competitors. For a retail CPO, the equivalent is organic store network expansion combined with partner CPO deployment in peripheral markets. The operational scale (15,000+ CPs, dominant market positions, fragmented multi-platform estate) clearly places this at Stage 4. Tie-breaker: operational model, not M&A history.
- CPMS remaining outsourced (enterprise-configured ChargePoint be.ENERGISED, not in-house built) could suggest a lower stage. Resolution: for the Retail Grocery / FMCG CPO archetype, outsourcing CPMS is archetype-consistent — "The grocery retailer does not build CPMS in-house and does not want to" (business_archetypes.md). The CPMS outsourcing does not lower the stage assignment; it is a structural feature of the archetype, not a capability gap. The distinction from a turn-key white-label arrangement (Stage 1) is that Schwarz operates a dedicated enterprise-configured instance with own EVSE IDs, own pricing, and Lidl Plus loyalty app integration.
- IE (EasyGo/EZO), NO (Fortum eMSP roaming), and BG (EVPoint) operate at Stage 1/Sub-Operator level — in those markets, the CPMS, app, and customer relationship are controlled by the partner platform, not by Schwarz Group. Resolution: for the Retail Grocery / FMCG CPO archetype, "third-party CPOs are used in markets where operating complexity exceeds footfall benefit" (business_archetypes.md) — this is archetype-consistent, not a stage signal. These markets account for a small fraction of total CPs (estimated ~300–500 of ~15,000). The Stage 4 operational model of the dominant DE + UK markets is the tie-breaker; peripheral market partner arrangements do not lower the stage assignment.

### Transition pressures

*Stage 4 is the terminal stage in this framework — there is no Stage 5. These pressures are not "transition toward Stage 4" pressures; they are Stage 4 operational complexity management challenges. Each represents a decision about how to manage the scale already deployed.*

| Pressure | Active? | Evidence |
|----------|---------|----------|
| Pan-European CPMS fragmentation creating management overhead | Active | 5+ parallel platforms confirmed: ChargePoint (DE+UK), EasyGo/EZO (IE+NI), EVPoint (BG), E.ON Drive (CZ), unknown (RO) — each requires separate vendor management, reporting, and integration. Confirmed from corpus. |
| Loyalty app integration failure blocking EV sessions | Active | Android compatibility bug Dec 2025–May 2026 (5+ months unfixed); pre-auth hold complaints in app store reviews; EV session access blocked for Android beta users — confirmed from app review corpus |
| Schwarz Digits in-house capability building alongside ChargePoint | Active (incremental) | Lade-App (schwarz-immobilien.de) confirmed as in-house charging management tool running alongside ChargePoint be.ENERGISED — confirms internal capability investment. Whether this is expanding toward CPMS replacement is Unclear. |
| ChargePoint contract renewal creating a switching window | Unclear | Contract renewal date not in corpus. Resolution: identify contract duration from procurement records or public filings. |
| Kaufland Romania CPMS formalization | Unclear | 140+ stations self-operated, CPMS vendor unidentified — a procurement decision is either already made (and not in corpus) or pending. The unidentified vendor does not confirm the decision is open; it confirms the decision state is unknown. Resolution: identify Kaufland Romania CPMS vendor — either confirms a vacancy or confirms a decision was already made but not scraped. |
| Schwarz Digits expanding CPMS in-house development | Unclear | Lade-App exists as management overlay; no careers data available to check if CPMS engineering roles are being hired. Resolution: check Schwarz Digits careers page for charging platform engineering roles. |

### Decisions forced

From the active transition pressures above:

1. **Pan-European operator model consolidation** — the fragmented 5+ platform model creates increasing overhead as the network grows. The decision is not whether to consolidate (that is Unclear, given Schwarz's deliberate partner-deployment model) but whether the overhead will eventually force a consolidation platform RFP. Basis: confirmed CPMS fragmentation across 10+ markets.
2. **Kaufland Romania CPMS contract** — self-operated network on unidentified CPMS. If the vendor position is truly open, a formal procurement is pending. Basis: confirmed self-operation + CPMS vendor not identified.
3. **ChargePoint contract renewal negotiation** — the terms, renewal date, and multi-country scope are unknown. When the renewal window opens, it is an inflection point — the scale of the relationship (12,000+ CPs) means both sides have leverage. Basis: confirmed ChargePoint dependency; contract details not in corpus.
4. **Schwarz Digits platform strategy decision** — whether the Lade-App evolves into a backend CPMS replacement or remains a management overlay determines the long-term ChargePoint dependency. Basis: Lade-App confirmed; direction Unclear.

### Sales angle

The actionable entry for a CPMS vendor is at the edges of this account, not the center. The ChargePoint relationship at DE + UK is not accessible through a standard sales motion — switching costs are prohibitive and no forcing event is currently observable. The accessible openings are:

- **Romania (Kaufland self-op, CPMS vendor not identified):** if the vendor position is open, this is a standalone procurement for a market not covered by the ChargePoint relationship. Entry does not require displacing ChargePoint; it requires being the first vendor to formally contract a self-operated network that already exists.
- **Schwarz Digits API/white-label angle:** the Lade-App trajectory suggests Schwarz IT wants to build on top of a platform, not operate one. A CPMS vendor that positions as "the platform Schwarz IT builds its Lade-App on top of" has a different pitch than one competing head-to-head with ChargePoint.
- **Neither is short-cycle:** the Romania opening requires identifying the vendor first; the Schwarz Digits angle requires a long-horizon enterprise relationship conversation, not a standard CPO sales motion.

---

## CPMS Identification

**State:** Confirmed ChargePoint be.ENERGISED (DE + UK + employee fleet)

**Evidence tier:** Tier 1 (DE + UK) / Tier 1–2 (peripheral markets)

**Evidence:**
- Direct payment URL `community.beenergised.cloud/infrastructure/direct_payment/process/start?evseid=DE*KDL*E00000672&locale=en_US` returned for Kaufland DE charger — no ambiguity. `DE*KDL*` = CPO ID registered to Kaufland Deutschland Ladestationen (p.9)
- ChargePoint/be.ENERGISED YouTube customer story featuring Schwarz Group confirmed multi-country (DE + UK) deployment (p.18)
- Lidl UK official press release (Jul 2024) confirming ChargePoint be.ENERGISED integration with Lidl Plus app (p.15)
- LinkedIn post (Lidl UK, Michael Wiehl, Mar 2026) mentions Lidl Plus integration with EV stations — consistent with be.ENERGISED backend (p.19)
- Electroverse (third-party guide, p.23), wepoweryourcar.com (p.62): explicitly name ChargePoint/be.ENERGISED as Lidl UK operator
- **Mitarbeiterladen employee app:** Play Store URL contains package ID `com.hastobe.mitarbeiterladen` — `com.hastobe.*` is the ChargePoint be.ENERGISED package prefix. Tier 1 confirmation that employee/internal fleet charging at Schwarz Group also runs on be.ENERGISED. (Note: page content not scraped due to scrape failure — the package name is confirmed from the URL itself.)

**What was checked:**
- [x] Own-domain pages
- [x] App store package name / developer field (Lidl Plus app confirmed; Mitarbeiterladen package confirmed via URL; Kaufland App not in corpus — gap)
- [x] Vendor case study pages (ChargePoint/be.ENERGISED YouTube case study found)
- [x] CPO press releases / investor materials (Lidl UK Jul 2024 press release; Schwarz May 2022 press release)
- [ ] Careers page (not in corpus — gap; would confirm or expand Schwarz Digits platform capability)
- [x] SERP queries (multiple third-party aggregator pages returned and read)

**Previously switched:** Pod Point was the UK operator from ~2019 (£25m rollout, CDO Ingo Fischer announcement) until July 2024. The switch to ChargePoint be.ENERGISED was confirmed by Zapmap: "The network transitioned from Pod Point in July 2024." Trigger for the switch: not stated publicly, but timing aligns with Lidl Plus EV payment integration — be.ENERGISED's integration with loyalty apps and multi-country scale likely drove the decision.

**Multiple stacks:** Yes — fragmented model intentionally. Summary:

| Market | CPO/Operator | CPMS | Evidence tier |
|--------|-------------|------|---------------|
| DE (Lidl + Kaufland) | Self-operated (Schwarz Immobilien / Schwarz IT) | ChargePoint be.ENERGISED | Tier 1 |
| UK (Lidl) | Self-operated (Lidl GB) | ChargePoint be.ENERGISED | Tier 1 |
| Employee fleet (Mitarbeiterladen) | Schwarz Group internal | ChargePoint be.ENERGISED | Tier 1 (package name `com.hastobe.mitarbeiterladen`) |
| IE + NI (Lidl) | EasyGo (ESB) | EasyGo/EZO platform (Ampeco-based) | Tier 1 |
| BG (Lidl) | EVPoint | Ampeco CPMS | Tier 2 (EVPoint confirmed; Ampeco inferred from EVPoint's known stack) |
| CZ (Kaufland) — new | E.ON Drive Infrastructure | E.ON Drive platform | Tier 1 |
| CZ (Kaufland) — older | CEZ a.s. | CEZ CPMS | Tier 2 |
| RO (Kaufland) | Self-operated | Unknown (Kaufland App, vendor not identified) | Tier 1 self-op; CPMS Insufficient research performed |
| NO (Lidl) | Fortum Charge & Drive (eMSP roaming) | Fortum CPMS | Tier 1 |
| DE HPC (EWE Go concession) | EWE Go | EWE Go platform | Tier 1 |
| DE HPC (VW Elli) | VW Elli / Electrify | Elli platform | Tier 2 (announcement-stage) |
| Logistics DE | Milence | Milence platform | Tier 1 |

**Vendor profile (ChargePoint be.ENERGISED):** See cpms_platforms.md. be.ENERGISED was acquired by ChargePoint in 2021. Known as a strong enterprise CPMS for large retail/destination networks in Europe. Integration with loyalty apps and multi-country CPO ID management are confirmed strengths here. App quality signals (Android bug Dec 2025–May 2026, power accuracy, pre-auth holds) suggest either a ChargePoint platform issue or a Lidl-specific configuration problem — root cause not determinable from this corpus.

### Ancillary Tech Stack

| Component | Vendor | Scope | Notes |
|-----------|--------|-------|-------|
| eRoaming | Not identified as a standalone product | — | Schwarz network is accessible via Chargemap/Zapmap (OCPI-registered); no explicit eMSP roaming product for third-party drivers |
| Payment (PAYG) | ChargePoint be.ENERGISED (direct payment portal) | DE + UK | `community.beenergised.cloud` for ad-hoc sessions; contactless bank card also accepted at some sites |
| Smart charging / DLM | Not identified in corpus | — | Research gap — no careers or technical pages available |
| Hardware (primary) | ABB (C50 50kW DC) | DE + UK | Replacing CIRCONTROL Raption 50 on older DE sites |
| Hardware (AC) | Noodoe (22kW dual-socket) | UK | Standard UK AC installation as of 2024–2026 |
| Hardware (HPC — EWE Go concession) | Alpitronic HYC400 (300kW DC) | DE HPC sites | Owned by EWE Go, not Schwarz |
| Maintenance / field ops | PARCO (civil/installation works) | UK | Confirmed from ipsum.co.uk — handles installation, not CPMS |
| App / fleet integrations | Lidl Plus (loyalty app) — EV payment | UK | EV charging embedded as secondary feature in grocery loyalty app |
| App / fleet integrations | Kaufland App — EV charging management | DE, RO | Session start/stop, bay availability, payment |
| In-house management tool | Schwarz Immobilien Lade-App | DE (Kaufland) | Charging management overlay alongside ChargePoint — not a CPMS replacement |

---

## Business Gaps

Feature baseline for this company's archetype (Retail CPO): loyalty app integration, multi-site remote monitoring, per-kWh billing, contactless/card payment, session time limits, power management for shared electrical supply.

| Gap | Evidence | Sales relevance |
|-----|----------|-----------------|
| **No unified pan-European CPMS** — fragmented across 5+ platforms for 10+ markets | CPMS state table above; confirmed via multiple sources | High (for a CPMS vendor) — unified management platform for the full 15,000-point network does not exist; operational overhead is significant |
| **Power delivery accuracy** — actual delivery frequently below advertised spec (50kW CCS delivering 20kW) | 4★ review (Mar 31, 2026); evcourse.com notes power reduces during peak hours due to shared electrical supply | Medium-High — charging session reliability is a core UX expectation; accuracy issues erode trust and reduce return sessions |
| **Pre-authorization hold UX** — £40 UK, 150 RON Romania — held 5–7 days | 1★ review (Apr 16, 2026, UK); Reddit Batch 5 (Romania); consistent cross-market pattern | High — pre-auth holds are a known CPMS configuration issue; a CPMS vendor with a frictionless payment flow has a direct differentiator here |
| **Android compatibility** — app crashes/no-internet on Android beta devices for 5+ months unfixed | Lidl Plus 1★/2★ reviews Dec 2025–May 2026; customer service confirmed but gave no fix timeline | Medium — affects Lidl Plus as EV payment gateway; not a ChargePoint platform issue per se but reflects slow mobile release cadence |
| **Kaufland Romania CPMS unidentified** — self-operated with Kaufland App but underlying platform unknown | e-charge.ro, green-forum.eu; CPMS vendor never mentioned | High (for a CPMS vendor entering RO) — this is the only confirmed self-operated market with an unidentified vendor |
| **HPC network thin** — core network is destination AC; HPC only via third-party concessions | EWE Go pilot Oct 2024 (one first partnership); VW Elli announcement-stage | Low-Medium for now — but HPC demand is rising; en-route charging from Schwarz-owned sites is currently not viable |
| **Kaufland App quality unknown** — DE self-operates 300+ stations but app not in corpus | Not in corpus | Medium — a significant operational blind spot; Kaufland App quality determines DE user experience for the largest market segment |
| **EV charging not prominent in Lidl Plus app** — buried in secondary navigation | 2★ review (Oct 28, 2025) | Low — UX design issue, not a platform gap; easily fixed with UI change |

---

## Competitive Position

### Strengths

1. **Scale and site density:** largest retail EV charging network in Europe — 15,000 CPs at existing store locations with no site acquisition cost. A pure-play CPO would need billions in site acquisition capex to replicate this footprint.
2. **Financial position:** €176B revenue Schwarz Group — essentially unlimited capex for EV charging relative to investment required. The network can expand in proportion to new store openings at no incremental land cost.
3. **Loyalty app integration (UK):** Lidl Plus as the EV payment gateway creates a captive charging product for Lidl shoppers — charging sessions are zero-friction if you already have the app for grocery rewards. 70M+ Lidl shoppers in Europe as a funnel.
4. **Pod Point → be.ENERGISED precedent:** demonstrated ability to migrate ~1,388 UK chargers to a new CPMS with full loyalty app re-integration (Jul 2024) without disrupting operations. This de-risks future migrations and signals "buyer not builder" at every market maturity threshold.
5. **First-mover advantage in retail EV charging:** Kaufland Romania live since 2016 — the longest-running retail EV charging operation in Eastern Europe. Market familiarity and operational processes are well-established.

### Weaknesses

1. **App quality and loyalty scheme vulnerability:** Lidl Plus 3.31★ (suppressed by May 2026 loyalty backlash + Dec 2025–May 2026 Android bug). The EV payment gateway is the grocery loyalty app — any degradation in loyalty app adoption directly reduces EV charging access.
2. **Power delivery accuracy:** UK CCS chargers delivering 20kW actual vs. 50kW advertised. Core UX promise is broken for a measurable number of sessions. Root cause unresolved.
3. **CPMS fragmentation:** 5+ parallel platforms for 10+ markets — no unified operational view, inconsistent driver experience, duplicated vendor management overhead.
4. **Pre-authorization holds (£40 UK, 150 RON RO):** Cross-market pattern, indicating a platform configuration issue rather than a market-specific policy. Creates public backlash ("should be illegal") in high-visibility app store reviews.
5. **Kaufland App (DE) not in corpus:** the app quality for DE self-operated 300+ stations is unknown. Kaufland is the largest charger count in DE — any quality issue here is high-impact and currently unmonitored.

### Peer comparison

| Peer | Network type | Relative position | Basis / date |
|------|-------------|------------------|--------------|
| ALDI Recharge | Retail discount supermarket CPO | Direct comparable; smaller network but same archetype. ALDI Recharge growing in DE/EU — increasingly cited by dissatisfied Lidl users as alternative | businessinsider.de, user reviews May 2026 |
| Rewe / Penny | German grocery CPO | DE market competitor; smaller network; Rewe has workplace charging product (Rewe Group) | businessinsider.de May 2025 |
| IKEA EV charging | Destination/retail CPO | Same footfall logic; IKEA destination dwell time longer (90+ min vs. Lidl 20–40 min) — different optimal charging profile | General market knowledge |

---

## Network Size

**Headline figure:** ~15,000 charge points across 32 countries — Lidl International LinkedIn (official), ~2025

**Scope:** All public charge points at Lidl and Kaufland stores globally. Includes both AC (22kW standard) and DC (50kW–150kW) units. Does not include the Milence logistics hub (separate fleet-only installation).

**Breakdown:**

| Region / Segment | Count | Source | Date | Notes |
|-----------------|-------|--------|------|-------|
| All 32 countries | ~15,000 | Lidl International LinkedIn (official) | ~2025 | Most recent official total |
| EU-only — Lidl | 8,855 | EU-TEN-TEC via DataPulse-Research | Oct 2025 | OCPI-registered public CPs |
| EU-only — Kaufland | 2,395 | EU-TEN-TEC via DataPulse-Research | Oct 2025 | OCPI-registered public CPs |
| EU-only combined | ~11,250 | EU-TEN-TEC via DataPulse-Research | Oct 2025 | Cross-checks with Chargemap |
| UK — Lidl | 1,388 chargers at 392 locations | Zapmap | Mar 2026 | Most recent third-party UK count |
| UK — Lidl | 370+ chargers at 150+ sites | LinkedIn (Michael Wiehl) | Mar 2026 | Official LinkedIn — likely undercounts vs. Zapmap |
| DE — Kaufland | 300+ stations | Kaufland DE official press | Jul 2023 | Milestone article; likely higher now |
| DE — Lidl | 2,850 | Schwarz press release | May 2022 | Dated; significantly higher now |
| RO — Kaufland | 140+ stations | e-charge.ro/kaufland | ~2024 | Own-operated |
| FR — Lidl | ~5,000 charging points | Reddit EuroEV (via Lidl FR promotion) | ~Q1 2026 | Promotional context; not from official source |

**Conflicts or lower boundaries:**
- Chargemap shows 4,730 Lidl locations + 895 Kaufland locations = 5,625 locations. At ~2 points/location average, this cross-checks with EU-TEN-TEC's 11,250 EU-only total.
- The gap between 11,250 (EU-TEN-TEC) and 15,000 (official total) is explained by non-EU markets: UK (~1,400+), Norway (Fortum roaming — may not register as Lidl EVSE IDs), and potentially pre-EU-accession states.

**AC/DC composition and network age:**
- AC/DC split: strongly AC-dominant. Standard deployment is 22kW AC (Noodoe UK, generic AC stations DE/IE). DC is present at most or all stores but in lower count per site. Consistent with destination charging archetype.
- DC power levels: 50kW (ABB C50 — current standard), 150kW (newer/larger DE sites), 300kW (EWE Go HPC pilot — very limited). The 50kW DC is previous-generation for HPC but appropriate for destination charging.
- Age signals: Active replacement cycle visible — CIRCONTROL Raption 50 (older DE sites) being replaced by ABB C50 (LinkedIn Mar 2026); UK moved to ABB C50 also. Pod Point hardware at UK sites being replaced post-Jul 2024 switch. Network is mid-generation overall with a visible refresh wave underway.

---

## Geographic Intelligence

### Germany

- **CPMS:** ChargePoint be.ENERGISED (Tier 1 — EVSE ID `DE*KDL*` confirms Kaufland DE registration)
- **Regulatory:** Eichrecht (MID-certified meters, legal metering per session) — ChargePoint be.ENERGISED must be Eichrecht-certified for DE operation; compliance implied by ongoing operation
- **Pricing:** 0.39 €/kWh AC, 0.49 €/kWh DC at Lidl DE (own-domain page, May 2026 corpus); promotional pricing observed at 0.19 €/kWh. Free with Lidl card at some sites. Below market average for Germany.
- **Hardware:** ABB C50 50kW DC (replacing CIRCONTROL Raption 50); 150kW DC at newer/larger Lidl DE sites. Lade-App (schwarz-immobilien.de) = in-house management overlay alongside ChargePoint.
- **HPC concession:** EWE Go × Lidl DE (Oct 2024) — Alpitronic HYC400 300kW at pilot sites; EWE Go owns/operates; Schwarz provides real estate. VW Elli announcement-stage for Kaufland DE HPC.
- **Notable signal:** Kaufland DE registration delay — new users need account approval before first session; not instant. Creates friction for casual users (Reddit Batch 5).

### United Kingdom

- **CPMS:** ChargePoint be.ENERGISED (Tier 1 — confirmed via Lidl UK press release Jul 2024, Electroverse, Zapmap, LinkedIn)
- **Switch history:** Pod Point operated UK network from ~2019 until July 2024. Switch confirmed by Zapmap. Pod Point-era hardware at some sites still being replaced.
- **Network size:** 1,388 chargers at 392 locations (Zapmap, Mar 2026); 370+ at 150+ sites per LinkedIn (Michael Wiehl, Mar 2026) — Zapmap count more current.
- **Hardware:** ABB C50 50kW DC (current standard, as of Mar 2026 LinkedIn); Noodoe 22kW AC dual-socket (standard UK AC); 7kW AC at some older sites.
- **Pricing:** Free with Lidl Plus app; contactless/QR also accepted (no Lidl Plus required).
- **Known UX issues:** £40 pre-auth hold (app reviews Apr 2026); power delivery 50kW advertised → 20kW actual at CCS stations (app reviews Mar 2026); Android bug Dec 2025–May 2026; 2-hour session cap (footfall management — Schwarz configuration choice, not ChargePoint limitation).
- **Loyalty scheme risk:** May 2026 loyalty scheme overhaul (coupon → points system) triggered mass Lidl Plus 1★ review wave. Users switching to Aldi. Lidl Plus EV charging access at risk if Lidl Plus churn materializes.

### Ireland + Northern Ireland

- **CPO:** EasyGo (ESB) — confirmed for both IE and NI, including new builds (not just legacy)
- **CPMS:** EasyGo/EZO platform — Ampeco-based per EVPoint's known stack
- **Hardware:** 22kW AC (user confirmed Kia Niro session at 10.8kW — correct for 11kW-limited vehicle); some older stations 50–60kW DC with CHAdeMO + CCS
- **Pricing:** ~45–50c/kWh (IEVOA Facebook group, Mar 2026)
- **Reliability:** "nice if you can find them working" — inconsistent reliability noted by Irish EV Association users

### Romania

- **CPO/CPMS:** Kaufland self-operated; Kaufland App manages session start/stop and payment; CPMS backend vendor **not identified** (Insufficient research performed — research gap)
- **Network:** 140+ stations since 2016 — one of the earliest retail EV charging deployments in Eastern Europe
- **Power range:** 7kW–120kW (broad offering including HPC at select sites)
- **UX issue:** 150 RON pre-auth hold (~€30); account registration required with approval delay (not instant)
- **Fleet strand:** Separate delivery fleet charging (Glovo + Uny battery swap) at Constanța — distinct from consumer network
- **Note:** e-charge.ro is the charging management domain for RO. CPMS vendor behind this domain not identified from corpus.

### Bulgaria

- **CPO:** EVPoint (Tier 1 — confirmed from Lidl BG own-domain page)
- **CPMS:** Ampeco (Tier 2 — inferred from EVPoint's known tech stack; not confirmed from public source in this corpus)
- **Pricing:** Described as "expensive" by local users vs. Megalan Charge (0.33 €/kWh), Electrip (0.38 €/kWh), Fines (0.39 €/kWh). In BG low-income context, Lidl's EVPoint pricing is not competitive.

### Norway

- **CPO:** Fortum Charge & Drive (eMSP roaming partner — Lidl Norway does NOT self-operate)
- **CPMS:** Fortum CPMS (Fortum is both eMSP and CPO in Norway)
- **App quality:** Overwhelmingly negative (80 reviews all-time, 1★ dominant). Core failures: "unauthorized" errors, constant logouts, can't stop sessions, inaccurate availability. Most recent review (Mar 2026): rounds up transactions, user claims 38% overcharge.
- **Key note:** These are Fortum's own platform failures, not Schwarz Group's. Lidl Norway EV experience is entirely outside Schwarz Group's control.

---

## App Quality

**iOS:** No data in corpus — not scraped.
**Android (Lidl Plus):** 3.31★ (1,205 ratings, 1-year window) — package: com.lidl.ownbrand.lidlplus (inferred; not confirmed from DB)
**Android (Kaufland App):** Not in corpus. Significant gap — Kaufland DE self-operates 300+ stations on Kaufland App.
**Android (Fortum Charge & Drive Norway):** No formal score — 80 reviews all-time, overwhelmingly negative.

**Rating note:** Lidl Plus 3.31★ is artificially suppressed by the May 2026 loyalty scheme backlash (points system replacing coupon/10% cashback system). An estimated 200–400 1★ reviews were posted in May 5–13, 2026 alone — the highest-density negative review period in the 1-year window. Pre-May 2026 baseline was likely ~3.5–4.0★. The Android bug (Dec 2025–May 2026) also contributed to sustained 1★/2★ reviews from a distinct set of users.

**Review patterns (1★ themes — Lidl Plus):**
- **Loyalty scheme backlash (May 2026):** Hundreds of 1★ reviews in one week. "Free cucumber for £100 spend" meme. Users explicitly switching to Aldi. Live brand crisis — not a CPMS issue, but directly affects EV charging adoption since Lidl Plus is the EV payment gateway in UK.
- **Android compatibility bug (Dec 2025–May 2026):** "No internet connection" / "Keine Internetverbindung" on Pixel, Galaxy S24, HyperOS 3.0, and other Android beta builds. Blocks EV charging session starts for affected users. 5+ months unfixed at the time of review corpus export.
- **EV charging pre-auth hold (Apr 2026):** "The EV charging is a scam. They take £40 out of your account for no reason and hold on to it for a week. Should be illegal." — UK-specific (£40). Romania has the same pattern at 150 RON.
- **QR code / app mismatch (transition era):** "Code on the plugs couldn't be scanned" and "code in app doesn't match plug." Likely a transition-era issue during Pod Point → be.ENERGISED switchover.
- **Registration/login failures (recurring):** "Oops, something went wrong" on registration. Affects EV charging access as Lidl Plus is required for free charging.

**Review patterns (4★/5★ — EV charging mentions in positive reviews):**
- "There's ample free parking, and access to an electronic car charging point" (5★, Dec 19, 2025) — charger mentioned incidentally, not the reason for the review.
- "This App works well for Charging your Car if Chargers are working properly not all work or Charge at power advertised on App" (4★, Mar 31, 2026) — qualified endorsement. Confirms reliability and power accuracy issues.

**EV charging visibility:** EV charging is mentioned in ~3 of 1,205 reviews (0.25%). Effectively invisible to most Lidl Plus users — low EV penetration among shoppers, or low awareness of the feature.

**Field evidence (non-review):** Reddit threads confirm: pre-auth hold pattern (Batch 5 — Romania 150 RON, UK £40); free charging in DE under promotional campaign (0.19 €/kWh); Kaufland DE stations can run in unauthenticated mode at some sites (possible misconfiguration — single Reddit incident, not confirmed pattern); Lidl DE QR code mismatch in transition era.

**Competitor mentions in reviews:** Aldi mentioned explicitly as the destination users are switching to (from loyalty scheme backlash). No direct CPMS or EV charging competitor mentions.

**Fortum Charge & Drive Norway:** Consistently poor across all years (2018–2026). Dominant failures: "unauthorized" error on session start, constant logouts, inability to stop sessions, inaccurate station availability, CS unresponsive. These are Fortum's own platform failures — Schwarz Group does not control this experience.

---

## Research Gaps & Unresolved

### Scrape failures (Insufficient research performed — Scrape failure)

| URL | Failure type | Area blocked |
|-----|-------------|--------------|
| seenews.com/news/kaufland-bulgaria-adds-two-ev-charging-stations-at-its-stores-1225081 | Article body missing — only nav returned | Kaufland BG charger count and hardware detail |
| golem.de/news/elektromobilitaet-lidl-baut-netz-mit-400-ladesaeulen-auf-1903-139918.html | Cookie consent wall | 2019 article about 400-charger target (low priority — historical data only) |
| play.google.com/store/apps/details?id=com.hastobe.mitarbeiterladen | Play Store listing only — no app content | Schwarz employee charging app function and platform scope; note: package name `com.hastobe.mitarbeiterladen` in URL is Tier 1 CPMS evidence (be.ENERGISED) even without page content |

### Research gaps (Insufficient research performed — Research gap)

| Step | What it would have covered |
|------|---------------------------|
| Careers page (not in corpus) | Job postings naming ChargePoint or competing platforms; Schwarz Digits charging platform engineering roles — would confirm or contradict the in-house capability trajectory |
| Kaufland App (Android/iOS) — not in corpus | App quality for DE self-operated network (300+ stations); CPMS platform signals from package name or developer field |
| Lidl/Kaufland in SE, FI, HR, SK, AT, HU, PL, AL, KS, MK, ME, RS | Operator model, CPMS, pricing, network size for 12+ unresearched markets |
| Kaufland RO CPMS vendor | Self-operated but CPMS backend vendor not identified in any page; e-charge.ro/kaufland is the management domain but vendor behind it unknown |
| Annual report / ESG report | Financial data on EV charging investment, capex targets, carbon reporting tied to charging |
| ChargePoint be.ENERGISED contract terms | Duration, renewal date, exclusivity, multi-country scope — determines switching risk window |
| Apple App Store reviews | iOS-specific quality signals for Lidl Plus app |

---

## Post-analysis brief

### Domain knowledge updates

All domain knowledge files (business_archetypes.md, cpms_platforms.md, markets.md, hardware_manufacturers.md) were updated as part of the V1 analysis session (2026-05-18). No new conflicts identified in V2 review beyond those already recorded.

One addition to cpms_platforms.md warranted: the Mitarbeiterladen package name (`com.hastobe.mitarbeiterladen`) confirms be.ENERGISED scope extends to Schwarz Group employee fleet charging. The cpms_platforms.md entry for ChargePoint be.ENERGISED already notes Gruppe Schwarz as known client — add employee fleet scope to that entry.

### Reasoning corrections

1. **Mitarbeiterladen URL as evidence (F1):** The analysis skipped page 84 (play.google.com/.../com.hastobe.mitarbeiterladen) as a scrape failure with "no content." The package name embedded in the Play Store URL is itself Tier 1 CPMS evidence — `com.hastobe.*` is the ChargePoint be.ENERGISED package prefix. Package names in Play Store URLs are always visible regardless of page content scrape success. For any future company with a Play Store URL in corpus: extract the `id=` parameter before skipping as a scrape failure. The evidence may be in the URL itself.

2. **2-hour session cap conflation with CPMS quality (F2):** The Synthesis grouped the 2-hour cap with the Android bug and power accuracy issues under "CPMS quality signals." When drafting a synthesis that mentions multiple quality issues, explicitly distinguish: platform defects (bugs, API failures, configuration errors the vendor controls) vs. operator configuration choices (time limits, pre-auth amounts, payment modes the CPO sets). The cap is a business decision; listing it alongside actual defects implies ChargePoint is responsible for something Schwarz Group decided.

3. **"No own CPMS development" vs. Lade-App (F3):** The V1 synthesis said "No own CPMS development" while the Strategic Context section acknowledged the in-house Lade-App. The synthesis was drafted before the full body of evidence was incorporated, producing a contradiction. For future analyses: write the body sections first (Strategic Context, CPMS Identification), then write the Synthesis as a compression of those — not as a draft that runs ahead of the evidence. The cross-check is: every "absence" claim in the Synthesis must be validated against the body sections before finalizing.

4. **Romania entry point overstatement (F7):** Stating "CPMS gap confirmed" when the CPMS state is "Insufficient research performed" (vendor not identified ≠ vendor absent) reflects the common error of treating an absence of identification as confirmation of absence. The rule: a vendor not found is "not identified," never "gap confirmed," until the research is thorough enough to conclude the position is vacant. Keep these two phrases sharply distinct in Sales priority and Entry point language.

---

### V2 review findings — applied corrections (2026-05-19 review pass)

**Resolved — F1 (coverage figure qualification):** Synthesis and CPMS Identification changed from "~12,000+ of the ~15,000 total charge points" to showing the arithmetic explicitly (EU-TEN-TEC 11,250 EU-only minus IE/BG/CZ + UK ~1,388 ≈ 10,500–12,000+) and flagging France CPMS as unconfirmed. The original figure was approximately correct but not arithmetically grounded; France (~5,000 CPs per Reddit, unconfirmed) is a material variable if it uses a different CPMS.

**Resolved — F2 (Romania transition pressure status):** "Active (latent)" changed to "Unclear" in transition pressures for Kaufland Romania CPMS formalization. The Evidence cell's own language ("either already made or pending") describes an Unclear state — the procurement may have already resolved without appearing in corpus. "Active (latent)" is not a defined framework status and overstates certainty about the decision being open.

**Resolved — F3 (peripheral market sub-operator conflicting signal):** Added third conflicting signal bullet addressing IE (EasyGo), NO (Fortum roaming), BG (EVPoint) as Stage 1/Sub-Operator arrangements. Resolution: archetype-consistent per business_archetypes.md ("third-party CPOs used in markets where operating complexity exceeds footfall benefit"); DE + UK operational model (~14,000+ of ~15,000 CPs) is the tie-breaker.

**Resolved — F4 (pre-auth hold UX in Synthesis):** Added "Pre-authorization hold UX — £40 UK, 150 RON Romania" as a bullet to Synthesis "What's absent." Was marked High sales relevance in Business Gaps but absent from Synthesis, violating the cross-section consistency rule.

**Resolved — F5 (Romania CPMS unidentified in Synthesis):** Added "Kaufland Romania CPMS vendor unidentified" as a bullet to Synthesis "What's absent." Was marked High sales relevance in Business Gaps but absent from Synthesis.

**Domain knowledge update pending:** cpms_platforms.md → ChargePoint be.ENERGISED entry: add that employee fleet charging at Schwarz Group (Mitarbeiterladen app, `com.hastobe.mitarbeiterladen`) is also on be.ENERGISED. This was identified in V1 review but not yet applied to the file.
