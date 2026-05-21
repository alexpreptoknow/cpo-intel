# CPO Analysis — TotalEnergies

**Date:** 2026-05-19
**Analyst:** Claude
**Source:** CPO Analysis — TotalEnergies.md (2026-05-19)
**Coverage:** Gaps: no careers pages scraped; Greenflux case study (cookie-wall failure); S&P Global autotechinsight (paywalled).


---

## Alex Notes

**What's good with this analysis**

One of the things that is most impressive is - the analysis check for things that it expects the given business to have as products/services, etc. This leaves clue into what their gaps might be.

It highlights statements that are unsupported or inferred, instead of explicitly found.

**What needs improvement in this analysis**

It states that the sales priority is low-mid, however, the problems are big enough for any reasonable sales person to chase and explore them further.

There are certain research steps that have been omitted. The moment we are done wit the development of our research agent harness, we will iterate over that until resolved.

---

## Synthesis

*Self-contained. A reader who reads only this section should understand the company, the CPMS situation, and the sales verdict.*

**What TotalEnergies clearly is:** An oil major (NYSE: TTE, ~€140bn market cap (2025/2026)) operating EV charging through its Marketing & Services — New Mobilities division. Dominant or near-dominant in Belgium (#1), France (#1 HPC on motorway network), Netherlands (largest concession holder), and UK (London-concentrated). ~80,000 CPs across Europe as of 2025, predominantly AC slow-charge — the HPC/DC footprint is a small fraction of the headline count. Network built through own deployment, government concession wins (TfL ×2, Amsterdam Electric, Deutschlandnetz, Madrid), and M&A (G2Mobility 2018, BlueSG Singapore 2021, Source London 2021, Wenea/Nordian Spain 2024). Since mid-2024, strategic pivot to asset-light JV co-ownership: SSE Source (UK/Ireland), La Banque des Territoires (France), Tikehau Capital (Benelux). Germany under active sale process. The JV pivot is explicitly driven by slower-than-expected EV uptake — capital de-risking, not strategic retreat.

**CPMS:** Confirmed Greenflux — evidence tier: Tier 1 (external source: Alex confirmed the Greenflux case study `greenflux.com/expertise/case-studies/proudly-powering-big-charge-point-operator/` from direct knowledge; the scraped page was a cookie-wall failure). Fragmentation visible: UK carries "sourcelondon-" prefix 3+ years post-acquisition; Wenea Spain (acquired Jan 2024) was described as a "leading EV Digital Platform" — post-acquisition integration status unknown, possible third stack. App quality: Charge+ (4.45★) and Charge Europe (4.03★), 50k+ Android installs each — 185/242 reviews 1★, indicating structural backend fragmentation rather than a fixable launch issue.

**What's absent:**
- **No visible CPMS standardisation progress** — Source London legacy platform still identifiable 3+ years post-acquisition. Expected integration activity is absent. Hypothesis: fragmented legal ownership (JVs + acquired brands) makes technical consolidation politically difficult; each new JV creates a new entity with standing to resist standardisation. The commercial consequence is live and measurable: 185/242 app reviews 1★ across two separate apps — a structural quality failure that cannot be remedied through app-layer product updates, only through backend consolidation. The fragmentation is not a technical debt problem; it is a customer experience and retention problem right now.
- **No home charging product** — Gridio smart charging integration exists in France but is an ancillary module, not a consumer home charging product. The B2B pages claim "on road or at home" charging, but this refers to B2B fleet employee home charging reimbursement (inherited from G2Mobility) — a workplace fleet service, not a consumer home charging product. These are different customer needs, different platform requirements, and different sales motions. Absent because the oil major archetype does not include consumer home charging as a core product — expected absence, not a strategic gap.
- **No fleet depot management product** — B2B fleet is card-and-invoicing (DKV Card integration, METPARK B2B France). No fleet DLM, depot management, or driver reimbursement portal identified. Given B2B fleet is a stated growth segment, this is either a product gap or a careers-page gap (careers not scraped — cannot confirm fleet platform roles).
- **No Germany investment activity** — for sale, so strategic investment has stopped. Expected to exit TE's CPO footprint.

**What explains what's observed:** The oil major origin explains almost everything. Balance sheet enables government tender wins and M&A that no pure-play CPO can replicate. Tech and UX quality are permanently below pure-play CPO standard because tech is not the competitive edge — tender track record, capex capacity, and fuel card B2B relationships are. The JV pivot is the oil major playbook when infrastructure IRR disappoints: co-invest with institutional capital, retain operational control, free up balance sheet. The 185/242 1★ app reviews are structurally caused by running two separate apps (Charge+, Charge Europe) against a fragmented backend (Greenflux + Source London legacy + potentially Wenea) — not a fixable product issue. Singapore exit confirms TE will exit markets where economics don't work, regardless of sunk cost.

**Development stage:** TotalEnergies operates ~80,000 CPs as a dominant or leading player across five European markets, grown primarily through government concession wins and acquisition — and now managing the compounding debt of that growth: Greenflux confirmed as the core platform but at least one parallel legacy stack still running three years post-acquisition, a second acquisition (Wenea) with unknown integration status, two separate consumer apps producing 185/242 1★ reviews, and three newly-created JV entities each legally capable of making their own platform decisions. The pressure visible in the corpus is not network expansion — it is whether TotalEnergies can resolve its platform fragmentation before the JV model permanently locks that fragmentation in.

**Where this is going:** TotalEnergies is structurally moving from an owned-network CPO toward a capital-efficient platform operator — providing technology, brand, and operational expertise while institutional capital partners hold infrastructure assets. This is a rational move: it preserves operational control while freeing balance sheet capacity. The platform fragmentation problem will intensify rather than resolve — each new JV entity is a legally independent entity that can make its own platform decisions, and the more JVs there are, the harder consolidated CPMS architecture becomes. Within 2–4 years, TE will face an explicit choice: mandate Greenflux across all JV entities as a condition of the partnership (requiring renegotiation of existing JV agreements), or allow each entity to evaluate independently and permanently fragment the operational picture. The Germany exit, if completed, reduces operational complexity but shrinks TE's direct negotiating leverage in Central Europe. Basis: JV structure observed in Strategic Context; sourcelondon- prefix evidence; Wenea integration uncertainty.

**Competitive pressure:** Shell (140k CPs, 500k target), bp pulse (22k CPs, 100k by 2030). The real pressure is not headline CP count — it is HPC quality per session (TE's network is predominantly AC; Source JV 3,000 HPC is the response, starting from zero) and B2B fleet product sophistication (card-and-invoicing will eventually be displaced by integrated fleet DLM platforms). Competitive pressure on HPC is not yet acute but becomes so as EV adoption accelerates in France, Belgium, and UK in 2026–2028.

**Sales priority:** Low (TotalEnergies group) / Medium — verify before engaging (Source-EV Limited JV entity) — At group level, no platform decision is structurally forced within the Decisions forced horizon: the CPMS fragmentation is real and painful, but it has been tolerated for 3+ years without producing a group-level platform decision, and there is no event in the corpus that would force one. At Source-EV Limited (50/50 SSE JV), a platform decision is structurally forced — but two unresolved questions determine whether the opening is still accessible: (1) **Technology commitment at JV formation**: the SSE Source page states "unparalleled technology from TotalEnergies + infrastructure from SSE" — this framing suggests Greenflux may have been committed as TE's JV contribution at the point of formation in July 2024, not left open for independent evaluation. If so, the platform decision is a captive internal choice, not an accessible opening. (2) **Window elapsed**: the 12–18 month window cited for Source-EV's CPMS commitment (from JV formation July 2024) = July 2025 – January 2026. As of May 2026, that window has passed. Source-EV may have already committed to a platform. **Both points require verification before this lead is pursued.** If the opening was and remains accessible, the pitch is DC-native at 150kW+ scale across 300 hubs. If TE technology was committed at JV formation, the opening does not exist through a standard sales motion.
Trigger: Confirming whether Source-EV Limited has made or is still open to making a platform decision — the window has elapsed, not opened.

**Entry point if pursued:** Source-EV Limited — but verify before engaging. **Caveat**: the SSE Source page describes the JV as bringing "unparalleled technology from TotalEnergies + infrastructure from SSE" — the Greenflux platform may have been committed as TE's contribution at the point of JV formation (July 2024), not left open for independent evaluation. Additionally, the 12–18 month CPMS commitment window has elapsed (July 2025–January 2026 vs. May 2026 analysis date). If Source-EV has already committed to a platform, this entry point is closed. If the platform decision remains open or is still evolving, the pitch is DC-native: session reliability at 150kW+ scale, uptime SLAs across 300 hubs, and operational tooling for a network being built without legacy overhead. Approach SSE Energy Solutions as the decision-influencer — they hold 50% and have independent standing. The Tikehau Benelux JV (Feb 2026) is a watch entry — too new to engage now but worth flagging as it establishes its operational identity in the next 12–18 months.

**Adjacent leads:**
- **Source-EV Limited (SSE JV, UK/Ireland)** — Primary entry point. Independent legal entity, greenfield 3,000 HPC, SSE holds 50% with own procurement. See Entry point above.
- **Tikehau Capital Benelux JV (Feb 2026)** — 50/50 PE co-investor in existing + future Benelux assets. Too new to engage now; timing signal is when the JV establishes its operational identity and begins committing to platform contracts in the next 12–18 months. Entry angle: Tikehau as the 50% partner may bring independent procurement requirements.
- **La Banque des Territoires JV (France, Oct 2025)** — French public investment arm (Caisse des Dépôts). JV focused on urban + social housing deployment. Different procurement process (public investment rules apply). Watch for when the JV begins operational scaling.
- **Wenea/Nordian Spain** — Acquired Jan 2024 as a "leading EV Digital Platform." Post-acquisition integration status unknown — may still run its own CPMS. If Wenea is operating independently, it is a separate lead with its own platform decision exposure. Resolution requires a direct check of Wenea's current operational status.

---

## Company Profile

| Field | Finding | Basis |
|-------|---------|-------|
| Legal entity | TotalEnergies SE (parent) / TotalEnergies Marketing & Services (operating division) | NYSE: TTE listing; division name from scraped corpus |
| Website | chargingservices.com (EU hub); charge.totalenergies.co.uk (UK); charge.totalenergies.com (France) | Multiple scraped domains |
| Headquarters | La Défense, France (parent HQ) | Listed company context |
| Parent company | TotalEnergies SE | NYSE: TTE, ~€140bn market cap (2025/2026) |
| Parent origin | Oil Major — fossil fuels, petrochemicals, LNG, renewables under ESG transition | Listed company public record |
| Archetype | Oil Major CPO (primary) | — |
| Markets | France, Belgium, Netherlands, UK, Spain; Germany (for sale); China JV (Hubei); Singapore (exited Nov 2025) | Network breakdown in v1 |
| CPMS (current) | Greenflux (confirmed) — scope across markets not confirmed | Tier 1: Alex external confirmation of Greenflux case study |
| CPMS (previous) | Source London legacy (sourcelondon- prefix still present 3+ years post-acquisition) | v1 offer ID analysis |
| Hardware | Alpitronic (France HPC motorway, Plug&Charge ISO 15118 pilot); others across markets | Ancillary tech stack, v1 |
| Charging types | AC (majority — 3.7–22kW); DC fast / HPC (Source JV 150kW+, French motorway 1,900 HPC, Deutschlandnetz up to 200kW) | Reuters composition note; network breakdown |
| Network size | ~80,000 CPs Europe (chargingservices.com, 2025) — predominantly AC slow-charge | Headline figure + Reuters July 2024 |
| App (iOS) | Charge+: 4.45★; Charge Europe: 4.03★ | App store summary, v1 |
| App (Android) | Charge+ and Charge Europe: 50k+ installs each | App store summary, v1 |
| Key leadership | Mathieu Soulas (SVP New Mobilities, global, 2024+); Pierre Clasquin (VP EV Charge France, 2022); Nicolas Garnier (MD UK, last confirmed Feb 2023); Alexis Vovk (President Marketing & Services, last confirmed July 2021 — verify current role) | Company Classification, v1 |

---

## Parent Company & Corporate Context

*The parent's industry origin is the single most explanatory finding — it determines the strategic mandate, capex model, CPMS posture, and the entire sales approach.*

**Parent:** TotalEnergies SE
**Parent industry origin:** Oil Major — upstream hydrocarbons (oil and gas production), LNG, refining, petrochemicals, and a growing renewables/low-carbon division under ESG transition pressure from institutional investors and regulation.
**Ownership structure:** Publicly listed — NYSE: TTE. Market cap ~€140bn.
**Financial scale:** ~€140bn market cap (2025/2026). Balance sheet enables at-scale capex commitments that no pure-play CPO can match: Deutschlandnetz €152m contract, Amsterdam Electric concession, TfL 20-year contracts, Wenea acquisition. EV charging investment is material in absolute terms but small relative to the parent's total capital deployment.
**Parent's primary revenue stream:** Hydrocarbons — upstream production, LNG sales, refining. Marketing & Services (which contains EV charging) is one division among several; New Mobilities is one line within Marketing & Services.
**Parent's primary clients:** Fuel retail customers, national government energy purchasers, B2B energy supply clients, LNG purchasers. EV charging clients are a subset of the broader fuel and energy customer base.
**What EV charging means to the parent:** Strategic energy transition play and ESG mandate response. Also a cross-sell vector: fuel card → EV card is a natural extension of the B2B fleet relationship. Government concession wins use the oil major balance sheet as a competitive moat. Not the core business; not financially immaterial at 80,000 CPs.
**Strategic mandate for EV charging:** Defend fuel retail market share during EV transition; extend B2B fleet card relationships to EV; win government infrastructure concessions using balance sheet scale; build renewable electricity retail relationships in key European markets. As of 2024–2026: de-risk capital deployment through JV co-ownership with institutional partners in response to slower-than-expected EV adoption economics.

---

## Business Model

*How money is made. Ordered by revenue contribution inference — primary streams first.*

**Primary revenue clients:** Mixed — public drivers (PAYG + subscription), B2B fleet clients (METPARK France, DKV Card UK), and government concession authorities (TfL, Amsterdam Electric, Deutschlandnetz). Revenue split unknown from corpus. Government concessions likely provide the most stable contracted revenue given fixed-fee + revenue share structure and multi-year terms. B2B fleet likely second given G2Mobility heritage and 25%+ French local gov market share.

### Own-Network CPO

TotalEnergies operates charge points directly, earning kWh + time-based fees from drivers plus subscription fees from members.

**UK pricing (confirmed):**
| Tier | 7–22kW | 50kW | Fast 100kW+ | PAYG pre-auth |
|------|--------|------|-------------|---------------|
| PAYG | 61–65p/kWh | 73p | 82p | £49 hold |
| Full/Pro Full | 55–60p | 68p | 77p | £5.49/mo |
| Resident/Taxi | 48–53p | 61p | 70p | £5.49/mo |

Idle fee: 5p/min PAYG, 4p/min members. Reservation: £2 (members, 7–22kW only).
France B2B (METPARK): €7/mo; 7kW €0.40/kWh, 50kW €0.47, 200kW €0.56.

**Site acquisition deal structures:**
- **LA/public-body partnerships:** TE pays all capex + opex; LA/TfL gets revenue share + rent. TfL contract: 20-year term.
- **Retail/destination:** Zero cost to site host. TE pays occupation fees, covers all capex/opex. "Zero cost to site host" means TE earns all charging revenue in return for absorbing full capital and operating cost.
- **Government concessions:** Competitive tenders (Amsterdam Electric, Deutschlandnetz, TfL, Madrid). Long-term contracted revenue; pricing often pre-fixed.

### eMSP / Roaming Card

Charge+ (France) and Charge Europe card: access to 600,000+ CPs across Europe via Gireve + Hubject. 91 eMSP + 800 CPO partner networks. Revenue: roaming transaction fees. Strategy: card positioned as retention/acquisition tool and EV extension of the fuel card relationship — not primary revenue source. Roaming coverage is strategic: 600k+ CPs across 91 eMSP partners represents broad European coverage, not a checkbox deployment.

### B2B Fleet

Fleet cards + depot/workplace charging. G2Mobility acquisition (2018) = origin of French B2B EV competency (25%+ French local government market share). Fleet-as-a-Service model: TE finances infrastructure, fleet operator pays monthly retainer. DKV Card integration in UK (access to 2,000+ Source London CPs). METPARK B2B product in France.

**Workplace vs. fleet distinction:** The B2B product identified in the corpus is at the workplace stage — card access, RFID, monthly invoicing. No fleet DLM, depot energy management, or driver reimbursement portal identified. This is not a fleet product in the full sense. If B2B fleet is a stated growth segment, this gap will become a competitive liability as fleet DLM-native platforms enter the same accounts.

### JV Asset Platforms (2024–2026 strategic pivot)

Capital de-risking model in response to slower-than-expected EV uptake:
- **UK/Ireland (Source brand):** 50/50 with SSE Energy Solutions. 3,000 HPC (150kW+) in 300 hubs, 5-year plan. 20% UK/Ireland market share target. July 2024.
- **France:** La Banque des Territoires (Caisse des Dépôts arm). Urban + social housing focus. Oct 2025.
- **Benelux:** 50/50 with Tikehau Capital (€51.1bn AUM PE). Target urban concessions + municipal tenders. Feb 2026.
- **Germany:** For sale via Roland Berger. Feb 2026. Deutschlandnetz contract (€152m, 134 hubs, up to 200kW HPC) complicates clean exit.

*Revenue model under JV structure:* TE contributes operational expertise and technology to JV entities; capital partner contributes balance sheet. Revenue share at JV entity level — TE earns less per CP but deploys less capital. Net effect: improved IRR at the cost of reduced revenue per CP and reduced control.

---

## Strategic Context

### M&A & Partnerships

| Event | Date | Type | Strategic rationale |
|-------|------|------|---------------------|
| G2Mobility acquisition | 2018 | Acquisition | French B2B EV fleet competency; 25%+ local government market share |
| BlueSG / Singapore | 2021 | Acquisition | 85% Singapore EV charging market; 1,465 AC CPs at HDB carparks |
| Source London | 2021 | Acquisition | 2,600 CPs; London dominance; TfL relationship acquisition |
| Wenea / Nordian Spain | Jan 2024 | Acquisition | 200+ ultra-fast sites in all 17 Spanish regions; described as "leading EV Digital Platform" |
| Source-EV Limited JV (SSE) | Jul 2024 | JV (50/50) | 3,000 DC HPC in 300 hubs; capital de-risking; 20% UK/Ireland market share target |
| La Banque des Territoires partnership | Oct 2025 | JV / partnership | French public investment capital (Caisse des Dépôts arm); urban + social housing deployment |
| Singapore exit (BlueSG closure) | Nov 2025 | Exit | BlueSG losses structural (S$3.4m–S$9.3m 2017–2019); not awarded LTA 2022 tender |
| Tikehau Capital Benelux JV | Feb 2026 | JV (50/50) | PE co-investment in existing + future Benelux assets; institutional capital, urban concession focus |
| Germany sale | Feb 2026 | Divestiture (in progress) | Roland Berger mandated; portfolio optimisation; Deutschlandnetz contract complicates exit |

**Integration debt from acquisitions:** Source London legacy platform still running (sourcelondon- offer IDs 3+ years post-acquisition). Wenea "leading EV Digital Platform" status post-acquisition unclear — possible third CPMS stack. Each JV creates a legally independent entity that can diverge from group platform decisions.

### Leadership

| Name | Role | Background | Mandate signal |
|------|------|------------|----------------|
| Mathieu Soulas | SVP New Mobilities, global (2024+) | Not stated in corpus | New appointment — background not available from corpus; mandate cannot be inferred without corroborating evidence per evaluation_frameworks.md |
| Pierre Clasquin | VP EV Charge France (2022) | Not stated in corpus | — |
| Nicolas Garnier | MD TotalEnergies Charging Solutions UK | Not stated in corpus | — |
| Alexis Vovk | President Marketing & Services (last confirmed July 2021 — verify current role) | Not stated in corpus | — |

*Leadership background signals are unavailable for all named individuals from the scraped corpus — no mandate conclusions can be drawn. Careers pages (not scraped) would be the primary source for background context.*

### Strategic pivots or signals

The 2024–2026 JV pivot is the single most important strategic signal. It represents a shift from "own and operate everything" to "manage and operate, institutionally co-own." The trigger is explicitly stated in the corpus: slower-than-expected EV uptake + need to de-risk capex. The Singapore exit (Nov 2025) confirms TE will exit markets where the economics fail — not a company protecting sunk costs. Germany sale in progress = first owned-network exit in a major European market.

The JV model has an internal tension: TE's leverage in JV negotiations is its technology stack (Greenflux) and operational expertise. Allowing the CPMS to fragment (Source London legacy unresolved, Wenea unknown) weakens that leverage. A consolidated, demonstrably performant CPMS is the asset that makes TE the operational partner of choice in future JV bids. The app quality failure (185/242 1★) works directly against this.

---

## Development Stage & Trajectory

*Work through this section before writing the synthesis. The Development stage and Where this is going fields in the Synthesis are outputs of the reasoning done here — fill this section first.*

### Stage assignment

**Assigned stage:** Stage 4 — operating well within Stage 4 characteristics, not in transition from Stage 3.

**Signals present** — observable facts that place TotalEnergies at Stage 4:
- 80,000 CPs across 5+ European markets — well above Stage 3 ceiling of 500–10,000
- Top-3 or dominant position in France (#1 HPC motorway), Belgium (#1), Netherlands (largest concession), UK London
- 4 acquisitions (G2Mobility, BlueSG, Source London, Wenea) + 3 JVs (SSE, La Banque des Territoires, Tikehau) in observable M&A history — active M&A well into Stage 4 pattern
- Fragmented CPMS across acquired brands: Greenflux (core, confirmed) + sourcelondon- legacy + Wenea unknown — exactly the fragmentation pattern described in Stage 4
- Large B2B fleet product with DKV Card integration, multi-country fleet card logic inherited from fuel card business
- Government concession track record at Stage 4 scale: TfL ×2 (20-year), Amsterdam Electric, Deutschlandnetz €152m, Madrid
- Internal tech affiliate (WayKonect) building app and fleet-side features on top of CPMS — Stage 4 indicator: differentiating on the customer-facing layer above the vendor CPMS

**Signals absent** — things expected at deeper Stage 4 that are not visible in corpus:
- No visible CPMS consolidation programme across acquired brands — expected if integration were being actively managed
- No white-label sub-operator product confirmed — Source JV likely uses TE's Greenflux, but architecture is not confirmed
- No fleet DLM or depot management capability — B2B product is at workplace stage (card + invoicing), not fleet DLM stage, despite fleet being a stated growth segment
- No careers data — engineering headcount and platform architecture roles cannot be assessed

**Conflicting signals** — signals that point in different directions, with resolution:
- B2B fleet product at Stage 2 (workplace: RFID + invoicing + fleet card) while network scale and M&A activity are deep Stage 4. **Resolution:** Operational model is the tie-breaker — multi-market, dominant positions, active M&A, CPMS fragmentation from acquisitions place this firmly at Stage 4. The B2B product maturity is a gap *within* Stage 4, not a reason to assign a lower stage.

*Stage is determined by the operational model, not the most advanced signal in isolation.*

---

### Transition pressures

*What is currently pushing TotalEnergies within Stage 4 toward the ecosystem moat and platform consolidation?*

| Pressure | Active? | Evidence |
|----------|---------|----------|
| M&A integration debt compounding: multiple acquired CPMS stacks running in parallel | Yes | sourcelondon- prefix still present 3+ years post-Source London acquisition (2021 → 2024+); Wenea "leading EV Digital Platform" integration status unknown |
| JV model creating legally independent entities with own platform decision rights | Yes | Source-EV Limited (SSE 50/50) is an independent entity; Tikehau Benelux JV (50/50) is an independent entity; each can evaluate own CPMS as they scale |
| App quality failure: structural, not fixable without backend consolidation | Yes | 185/242 reviews 1★; two separate apps (Charge+ France vs Charge Europe); QR-to-PAYG broken; idle fees on broken chargers; DC stop via app failing |
| B2B fleet clients requesting capabilities beyond card-and-invoicing | Unclear | DKV Card and METPARK confirmed; no fleet DLM, depot management, or reimbursement portal identified. Resolution: B2B product pages depth + careers postings for fleet platform roles would resolve |
| Technology credibility as JV partner weakening as network fragments | Active | TE's leverage in JV negotiations is its operational tech stack (Greenflux) and at-scale expertise. As the owned network contracts (Germany for sale, Singapore exited) and the CPMS remains fragmented, the "proven at scale" proof point weakens. Footprint concentrating on France/UK/Benelux — the markets where JV partners are already in place. Inference chain: owned network scale → tech credibility → JV negotiating position. All three steps confirmed in corpus (footprint data + sourcelondon- fragmentation + JV terms where TE contributes tech). |
| Wenea/Nordian Spain integration status unresolved | Unclear | "Leading EV Digital Platform" — either migrated to Greenflux (no additional stack) or running independently (third stack). No evidence either way in corpus |

*A pressure marked Unclear does not mean it is absent — it means the evidence to confirm or deny it was not in the scraped corpus. Careers pages would resolve the B2B fleet platform question; Wenea post-acquisition pages would resolve the third-stack question.*

---

### Decisions forced

*What will TotalEnergies need to decide, buy, or build in the next 1–3 years? Derived from transition pressure table above.*

- **CPMS architecture: consolidate or federate** (from: M&A integration debt + JV independence pressure): Three years of inaction on the Source London legacy stack suggests this decision has been deferred. The JV formation accelerates urgency — each new JV entity has standing to negotiate its own platform terms. Decision required: mandate Greenflux across all acquired brands and JV entities (requiring migration and JV contract renegotiation), or formally adopt a federated architecture where sub-brands run independent instances (accepting fragmentation as permanent). Deferral is no longer a neutral option — Source-EV Limited and Tikehau JV will make platform decisions with or without TE's direction.

- **JV entity platform governance** (from: JV independence pressure): As Source-EV Limited scales from 0 to 3,000 HPC and Tikehau Benelux JV grows its urban concession book, each entity will commit to platform contracts in the next 12–24 months. TotalEnergies' leverage: operational expertise and brand. SSE's leverage: 50% ownership and own procurement capability. The window for TE to set platform direction is now — before long-term CPMS contracts are signed at the JV level.

- **B2B fleet DLM capability** (from: B2B fleet client maturity pressure): If B2B fleet is a stated growth segment, card-and-invoicing will be outcompeted in the next 2–3 years by fleet DLM-native platforms. Decision required: build fleet DLM internally (WayKonect capability?), integrate a third-party DLM module onto Greenflux, or accept being a fleet card player and cede the depot-management segment to competitors.

- **Germany exit resolution** (from: portfolio optimisation pressure): Sale is in progress but Deutschlandnetz contract (€152m, 134 hubs, regulatory terms) complicates a clean exit. Decision forced: find a buyer who can take on the regulatory complexity of the contract, renegotiate the contract terms with the German government, or accept a discounted exit that absorbs the regulatory overhang.

- **CPMS consolidation to preserve JV leverage** (from: tech credibility as JV partner pressure): TE's value proposition in JV bids is operational tech at scale. As the owned network contracts and CPMS fragmentation persists, future JV partners will have less evidence that TE's platform is demonstrably better than an independent evaluation would find. Decision forced: either consolidate onto Greenflux across all acquired brands and JV entities before the next major JV bid, or accept that the platform advantage argument weakens with each passing year. The Source-EV Limited 12–18 month window is the first concrete test of whether TE can establish platform direction in a JV context.

*All items above are inference — labelled with the transition pressure they derive from.*

---

### Sales angle

No platform decision is structurally forced at TotalEnergies group level within the observable horizon — the CPMS fragmentation has been tolerated for 3+ years without producing a group-level platform decision, and there is no observable event in the corpus that would force one. The fragmentation is painful (app quality, split operational picture) but the pain has not reached the threshold that forces action at group level. The actionable entry is at JV entity level, where TotalEnergies' internal fragmentation problem creates an external opportunity.

Source-EV Limited was identified as the highest-priority target: a greenfield HPC network (0 to 3,000 DC in 300 hubs), legally independent from TotalEnergies, co-owned by SSE Energy Solutions — an enterprise infrastructure company with its own procurement history and no inherited TE platform dependency. Two issues require verification before this angle is pursued. First, the SSE Source page frames the JV as "unparalleled technology from TotalEnergies + infrastructure from SSE" — if Greenflux was committed as TE's JV contribution at formation (July 2024), Source-EV's platform is not an open decision; it is a captive internal one. Legal independence of the JV entity does not imply procurement independence if the technology was a contractual term of JV formation. Second, the 12–18 month window cited for CPMS commitment ran from July 2024 to July 2025–January 2026. As of May 2026, that window has elapsed; Source-EV has likely already made or deferred this decision. The sales angle remains valid if the decision is still open or if the initial commitment is subject to re-evaluation — but neither can be assumed. The first action before pursuing this lead is verifying whether Source-EV's CPMS is already committed and to whom.

---

## CPMS Identification

**State:** Confirmed Greenflux — with fragmentation caveat: Source London legacy stack present in parallel; Wenea post-acquisition status unknown.

**Evidence tier:** Tier 1 — external source. Alex confirmed the Greenflux case study at `greenflux.com/expertise/case-studies/proudly-powering-big-charge-point-operator/` from direct knowledge of the case study content. The scraped version of the page was a cookie-wall failure (14,570 chars of banner chrome captured, no case study body). Formal corpus verification remains pending re-scrape.

**Evidence:**
- Greenflux case study `greenflux.com/expertise/case-studies/proudly-powering-big-charge-point-operator/` — confirmed by Alex from external knowledge (cookie wall in scraped corpus). Confirms TotalEnergies as Greenflux client. Scope (which markets, deployment year, products covered) not available from corpus.
- Source London legacy: offer IDs in corpus carry `sourcelondon-` prefix 3+ years post-Source London acquisition (acquired 2021, prefix still present in corpus as of 2024+) — signals legacy stack running in parallel to or separately from Greenflux.
- Wenea Spain (acquired Jan 2024): described as "leading EV Digital Platform" in pre-acquisition press coverage. Post-acquisition integration status unknown — possible third stack.

**What was checked:**
- [x] Own-domain pages
- [x] App store package name / developer field (iOS + Android) — both Charge+ and Charge Europe apps checked in prior session
- [x] Vendor case study pages — Greenflux case study found but scrape failure (cookie wall)
- [x] CPO press releases / investor materials — partially covered via scraped pages
- [ ] Careers page — not scraped (confirmed research gap)
- [ ] SERP queries for "[Company] CPMS / charging platform / software partner" — not performed

**Previously switched:** Partially. Greenflux appears to be the group platform post-transition from any original stack. Source London acquisition (2021) did not result in a confirmed migration — sourcelondon- prefix still present 3+ years later. Whether this is a parallel legacy stack or a retained ID scheme on Greenflux is unresolved.

**Multiple stacks (acquired brands):**
- Greenflux: confirmed core platform — scope across markets (France, Belgium, Netherlands, Spain) not confirmed from corpus
- Source London legacy: `sourcelondon-` prefix still present — possible parallel operation or retained naming convention on Greenflux
- Wenea/Nordian Spain: described as "leading EV Digital Platform" pre-acquisition — post-acquisition integration status unknown

**Vendor profile:** Greenflux-specific platform observations (reputation, feature gaps, deployment patterns across other clients) are not available from the research corpus.

### Ancillary Tech Stack

| Component | Vendor | Scope | Notes |
|-----------|--------|-------|-------|
| eRoaming (primary) | Gireve | France + Europe | Primary roaming hub; AFIREV interoperability |
| eRoaming (secondary) | Hubject | Europe-wide | Plug&Charge PKI + ISO 15118; three-way pilot 2022 with TE + Alpitronic at St Mathurin (France) |
| Payment (PAYG) | FiServ | UK | PAYG card processing |
| Smart charging | Gridio (`fr.smartcharge.plus`) | France only | Ancillary smart charging module; not the core CPMS |
| App / route planning | Make My Day via WayKonect | Europe | WayKonect = TotalEnergies green tech affiliate. Builds driver-app and fleet-facing features on top of the CPMS — not the CPMS itself |
| Hardware (HPC, France) | Alpitronic | French motorway HPC | Confirmed — Plug&Charge pilot, motorway HPC deployment |
| Source eMSP partners | Octopus Electroverse, Plugsurfing, Last Mile Solutions, OVO, Paua | UK / Source brand | eMSP roaming partners for Source network |
| Source maintenance | Siemens eMobility + Evolt Charging | UK / Source brand | On-site maintenance contractors |

*Careers pages not scraped — cannot confirm whether additional platform or integration vendors are used in engineering stack.*

---

## Business Gaps

*Assessed independently of CPMS identification. Archetype feature checklist: Oil Major CPO per business_archetypes.md.*

| Gap | Evidence | Sales relevance |
|-----|----------|-----------------|
| CPMS fragmentation across acquired brands | sourcelondon- prefix 3+ years post-acquisition; Wenea platform status unknown; two separate apps (Charge+ and Charge Europe) | High — structural operational problem; every acquisition and JV potentially adds a stack; app quality failure is the visible consequence |
| App quality: 185/242 reviews 1★ | App store summary; themes: crashes, £49 hold, Source London migration anger, idle fees on broken chargers, DC stop failure, invoice broken | High — conversion barrier and retention problem; structural (two apps, fragmented backend) not fixable through app updates |
| B2B fleet DLM absent | No fleet DLM, depot management, or driver reimbursement portal in corpus; B2B product = card + invoicing only — workplace stage, not fleet DLM | Medium — if B2B fleet is growth segment, card-and-invoicing will be outcompeted by fleet DLM-native platforms |
| PAYG £49 pre-auth barrier (UK) | Confirmed pricing page; Reddit field evidence: frequently cited as barrier; QR-to-PAYG web journey broken | Medium — conversion problem on the public network; CPMS payment configuration issue or deliberate policy |
| CPMS scope uncertainty | Greenflux confirmed at group level but scope (which markets, which products) not confirmed from corpus | Medium — unknown whether Greenflux powers France + Belgium + NL or only specific deployments |
| Idle fee suppression on faulted chargers absent | App reviews: idle fees charged on broken chargers; CPMS does not suppress fees when session is flagged as faulted | Medium — trust and churn issue; CPMS automation gap |
| HPC footprint thin relative to AC-dominant total (not a CPMS gap) | Reuters "most of which are slow-charge stations" (July 2024); Source JV = 3,000 DC target starting from zero | Low-Medium for CPMS sales — TE is addressing via Source JV; not a platform decision opportunity |

---

## Competitive Position

### Strengths

1. **Capex capacity** — Oil major balance sheet enables at-scale capital commitments no pure-play CPO can match. Deutschlandnetz €152m contract, Amsterdam Electric concession, TfL 20-year contracts, and three acquisitions in 3 years all required balance sheet depth that creates a durable moat in government tender markets.
2. **Public tender track record** — TfL (×2, 20-year), Deutschlandnetz (Germany), Amsterdam Electric (NL), Madrid roadside concession. Procurement relationships built over years; tender credibility compounds with each win and is not easily replicated.
3. **Market-leader positions** — France HPC motorway #1 (Gireve 2025), Belgium #1, Netherlands largest concession holder, UK London-concentrated. Top-3 or dominant in each of its primary markets.
4. **Dual roaming platform** — Both Gireve (primary) + Hubject (secondary, Plug&Charge PKI) = widest European interoperability coverage. 91 eMSP + 800 CPO partner networks = 600,000+ accessible CPs. Few CPOs operate both.
5. **B2B fleet heritage** — G2Mobility acquisition (2018) gave French local government fleet relationships (25%+ market share) and the fleet card → EV card extension logic. DKV Card integration in UK extends this to a pan-European fleet client base. The sales motion is inherited from the fuel card business, not built from scratch.
6. **Energy supply integration** — 100% renewable electricity claim; DAF Trucks MoU for zero-emission road transport; smart charging pilot (Gridio, France). Positions TE as an energy partner, not just a charger operator — relevant as fleet clients move toward total energy cost management.

### Weaknesses

1. **App experience is structurally broken** — 185/242 reviews are 1★. Running two separate apps (Charge+ France, Charge Europe UK/EU) against a fragmented backend (Greenflux + Source London legacy) means this is not a fixable product issue — it requires backend consolidation. This is a direct conversion and retention problem on every public network market. (Competitor app ratings are not available in the research corpus — no cross-CPO comparison can be made from evidence.)
2. **CPMS fragmentation compounding, not resolving** — Source London legacy still identifiable 3+ years post-acquisition (2021 → sourcelondon- prefix in 2024+). Wenea (acquired Jan 2024) integration status unknown. Each new JV entity has legal standing to make its own platform decisions. The JV pivot structurally accelerates fragmentation.
3. **Network dominated by AC slow chargers** — "Most of which are slow-charge stations (AC)" (Reuters, July 2024). Revenue per CP is structurally lower. The 80k headline shrinks significantly when filtered to DC/rapid/HPC. Source JV (3,000 DC) is the response — starting from zero in a market where Shell and bp pulse are already building HPC.
4. **Strategic retreat weakens negotiating leverage** — Germany for sale, Singapore exited, JV model reduces revenue share per CP in Benelux + UK. Asset-light model improves IRR but cedes pricing power, brand control, and reduces TE's direct operational footprint. On tender credibility specifically: co-ownership with institutional partners (Tikehau Capital €51.1bn AUM, SSE Energy Solutions) may enhance credibility with public procurement bodies and local authorities in some markets — the counter-case is that JV partnerships signal financial solidity and long-term commitment, not retreat. The net tender credibility effect depends on market and counterparty; this is not a uniform weakness.
5. **PAYG friction suppresses casual use** — £49 pre-auth hold is a known conversion barrier. QR-to-PAYG web journey confirmed broken. This limits network effects from occasional users and makes the public network less competitive against PAYG-optimised rivals.
6. **B2B fleet product at workplace stage** — Card + invoicing only. No fleet DLM, depot energy management, or driver reimbursement portal. If fleet is a stated growth segment, card-and-invoicing will be outcompeted by fleet DLM-native platforms within 2–3 years.

### Peer comparison

*Oil major peer group — approximate figures, mixed vintage. For directional context only.*

| Peer | Network size | Target / trajectory | Basis |
|------|-------------|---------------------|-------|
| Shell | ~140,000 CPs | 500,000 by 2025 (aspirational) | Energy Monitor (pre-2025) |
| TotalEnergies | ~80,000 CPs | 150,000 target (stated) | chargingservices.com 2025 |
| bp pulse | ~22,000 CPs | 100,000 by 2030 | Energy Monitor (pre-2025) |
| Eni (Plenitude) | ~13,000 CPs | — | Energy Monitor (pre-2025) |
| Mitsui / EV Connect | ~126,000 CPs | — | Energy Monitor (pre-2025) |

TotalEnergies grew faster than bp pulse and Eni; remains behind Shell on headline count. HPC/DC quality comparison is more relevant than total CP count — on that dimension TE's AC-dominant network is behind Shell and bp pulse.

---

## Network Size

**Headline figure:** ~80,000 charge points across Europe (chargingservices.com, 2025)

**Scope:** Europe-wide; all types (public + private + company + home). Excludes China JV (11,000 HPC target, announced 2021 — current status unknown). Singapore exited Nov 2025.

**CRITICAL COMPOSITION FACT:** "Most of which are slow-charge stations (AC)" — Reuters, July 2024. The 80k headline is dominated by 3.7–22kW AC chargers. HPC/DC is a small fraction of total.

**Breakdown:**

| Region / Segment | Count | Source | Date | Notes |
|-----------------|-------|--------|------|-------|
| France | 26,000 | chargingservices.com / scraped corpus | 2025/2026 | All types: public + private + company + home. 1,900 HPC on motorways. #1 HPC motorway operator (Gireve 2025) |
| Netherlands | 18,000 | scraped corpus | 2025 | Metropolitan Region Amsterdam Electric concession. AC-dominant. |
| Belgium | 9,500 | scraped corpus | 2025 | Market leader. Urban concessions — Antwerp, Brussels, Ghent confirmed. |
| Germany | 7,000+ | scraped corpus | 2025/2026 | 4,500 owned + 1,100+ Deutschlandnetz HPC (€152m contract). For sale. |
| UK | 3,000 | scraped corpus | 2024/2025 | London-concentrated. Source London = 2,600 CPs at July 2024 (acquired 2021). |
| Spain | 200+ sites | scraped corpus | 2024/2025 | Post-Wenea/Nordian acquisition Jan 2024. 200 ultra-fast sites across all 17 regions. |
| Total (ex-China) | ~64,000 | SSE JV press release | July 2024 | Global figure at time of JV announcement |
| China JV (Hubei) | 11,000 target | scraped corpus | 2021 announcement | 50/50 Three Gorges JV. Current status not available in corpus. |
| Singapore | Exited | scraped corpus | Nov 2025 | 1,465 CPs (3.7kW AC). BlueSG closure. ~500 open to public; rest dedicated to BlueSG car-sharing fleet. |

**Conflicts or lower boundaries:**
- Chargemap / Plugshare aggregators would serve as a lower boundary for public-only CPs — not used as headline given primary source available
- 2024 annual report or investor materials may contain a different figure — not available in corpus; chargingservices.com (2025) used as primary

**AC/DC composition and network age:**
- AC/DC split: predominantly AC (Reuters July 2024 confirmation); specific percentage not available. HPC/DC confined to: French motorway (1,900 HPC), Deutschlandnetz (up to 200kW), Source JV (3,000 DC target from zero at 150kW+)
- DC power levels: Deutschlandnetz up to 200kW; Source JV 150kW+; Alpitronic (France HPC motorway) = current generation hardware; Plug&Charge ISO 15118 pilot at Plessis-Pâté = current standard
- Age signals: AC dominance reflects a deliberate original strategy (urban on-street, destination) not a legacy modernisation problem. HPC buildout is overlay (Source JV, French motorway) rather than replacement. No "modernisation" language for the AC network. First heavy truck HPC in France (Plessis-Pâté) signals TEN-T corridor ambition in current generation hardware.

---

## Geographic Intelligence

### France

- #1 HPC operator on French motorway network (Gireve 2025 ranking); 1,900 HPC on motorways
- 26,000 CPs total (public + private + company + home) — all types included in headline
- First heavy truck HPC in France (Plessis-Pâté) — signals TEN-T corridor ambition
- AFIREV member (French interoperability body, founded 2015 by 7 CPOs); mandatory interoperability since 2017 (Loi LOM framework)
- La Banque des Territoires JV (Oct 2025) — Caisse des Dépôts arm; access to French public investment capital; urban + social housing deployment focus
- B2B fleet: G2Mobility heritage gives 25%+ French local government market share; METPARK B2B product (€7/mo, tiered kWh pricing)

### UK

- 3,000+ CPs; London-concentrated (500+ in Camden alone)
- Source London acquired 2021, fully sub-branded as Charge Europe by 2024; sourcelondon- prefix still present in offer IDs 3+ years post-acquisition
- TfL: two confirmed contracts, 20-year operation terms; LA model: TE installs, council receives revenue share + rent
- Source-EV Limited (SSE JV, Jul 2024): 3,000 DC in 300 hubs, 5-year plan; 20% UK/Ireland market share target
- Zapmap added as new PAYG payment channel (2025)
- DKV Card integration: access to 2,000+ Source London CPs for B2B fleet clients
- PCPR: 99.3% rapid charger reliability (2025); 98% availability (TE UK page) — self-reported; not independently verified in corpus

### Belgium

- Market leader: 9,500 CPs; urban concession dominant model — Antwerp, Brussels, Ghent confirmed
- Antwerp AC pricing observed: €0.32/kWh + €0.01/min blocking fee (8am–8pm)
- Tikehau Capital JV (Feb 2026): 50/50 with €51.1bn AUM PE firm; targets existing + future Benelux assets; urban concession and municipal tender focus
- App reviews: Booking button always greyed out reported (Belgium-specific); app does not notify of event-related parking bans (Antwerp)

### Netherlands

- 18,000 CPs — Metropolitan Region Amsterdam Electric concession win; AC-dominant
- 2021 Amsterdam figure: 22,000 (likely included contracted pipeline at time of announcement — not current live count)
- EU leader in charger density: 10 chargers/1,000 inhabitants (LinkedIn Tikehau commentary)

### Germany

- 7,000+ stations + 1,250 parking facilities in 167 locations (Total Energies Charging Solutions Deutschland)
- Deutschlandnetz: €152m contract, 134 hub locations, up to 200kW HPC
- For sale via Roland Berger (Feb 2026) — Deutschlandnetz contract (regulatory terms, long-term commitments) complicates clean exit; strategic investment has stopped
- Target: 1,000 HPC hubs across Europe by 2028 (Sept 2023 newsroom) — likely stale given Germany sale and JV pivot

### Singapore (Exited Nov 2025)

- 1,465 CPs (3.7kW AC only) across ~350 HDB carparks; ~500 open to public, rest BlueSG-dedicated (car-sharing fleet)
- 85% of Singapore market at acquisition (2021, from Bolloré/BlueSG); not awarded 2022 LTA large-scale tender — remained entirely dependent on BlueSG B2B
- BlueSG losses: S$3.4m (2017) → S$7.3m (2018) → S$9.3m (2019) — structural, not a blip. Paused August 2025, transferred Nov 2025 to SP Mobility, Charge+, CDG Engie, Shell
- Confirms TE will exit markets where economics fail — not a company protecting sunk costs

### Spain

- 200+ ultra-fast sites across all 17 regions (post-Wenea/Nordian acquisition, Jan 2024)
- Madrid roadside concession (May 2023) — pre-dated Wenea acquisition
- Wenea described as "leading EV Digital Platform" — post-acquisition integration status unknown
- Plans: 1,000+ new HPC sites across Europe by 2028 in partnership with Wenea/Nordian (pre-JV pivot announcement — may be stale)

---

## App Quality

**iOS:** Charge+: 4.45★ — primary France market
**iOS:** Charge Europe: 4.03★ — UK and rest-of-Europe
**Android:** Charge+ and Charge Europe: 50k+ installs each

**Rating history / rebrand note:** Source London was acquired 2021 and fully sub-branded by 2024. Whether Source London's review history migrated to Charge Europe or accumulated separately is not confirmed in the corpus.

**Review patterns (1★ themes — 185/242 total 1★):**
- **App crashes / slow performance** — recurring; suggests backend integration instability rather than isolated front-end bugs
- **£49 / €39 PAYG pre-auth hold** — frequently cited as unexpected barrier for casual PAYG users; CPMS payment configuration issue
- **Source London migration anger** — historical but ongoing; users upset at forced app migration from Source London to Charge Europe; trust damage from rebrand friction
- **Idle fees charged on broken / faulty chargers** — operational gap: CPMS does not suppress idle fees when session is confirmed faulted; serious trust issue, confirmed by support interactions cited in reviews
- **DC charging cannot be stopped via app** — OCPP session management gap at DC level specifically
- **Invoice broken / payment method confusion** — QR-to-PAYG web journey broken; contactless not universally available at stations; account + payment flow inconsistency

**Field evidence (non-review sources):** Reddit threads from UK users corroborate app review patterns with specific incidents:
- QR code → Safari → web PAYG journey confirmed broken (recurring complaint, multiple users)
- Charger confirmed "not worked in over a week" by TE support — idle fees still charged on the broken charger (confirms CPMS does not suppress fees on faulted sessions)
- Booking button always greyed out (Belgium-specific; corroborates a known platform gap, not a display bug)
- App does not notify of event-related parking bans (Antwerp) — no push notification integration with local authority permit systems
- £49 pre-auth hold: barrier for PAYG users who were not aware of it; cited repeatedly as the reason for abandoning the session

These are qualitative field reports rather than rating aggregates — different selection bias, different specificity. They corroborate rather than contradict the app review pattern.

**Competitor mentions in reviews:** No named competitor mentioned positively in the corpus summary from v1.

**Interpretation:** Two separate apps against a fragmented backend (Greenflux + Source London legacy) is the structural cause. Idle fee on faulted chargers is a specific CPMS automation gap — the platform is not suppressing fees on sessions flagged as faulted. DC stop failure is a specific OCPP session management gap. Neither is fixable through app-layer updates alone. Backend consolidation is the only structural remedy, which is why the problem has persisted.

---

## Research Gaps & Unresolved

### Scrape failures (Insufficient research performed — Scrape failure)

Pages found but not read. Do not draw conclusions in blocked areas.

| URL | Failure type | Area blocked |
|-----|-------------|--------------|
| `greenflux.com/expertise/case-studies/proudly-powering-big-charge-point-operator/` | Cookie wall (14,570 chars banner chrome captured, no case study body) | Formal corpus verification of Greenflux as CPMS; scope (which markets, deployment year, products covered). Alex's external knowledge provides Tier 1 identification but case study details remain unavailable from corpus. |
| S&P Global autotechinsight article | Paywall | Analyst competitive assessment of TotalEnergies EV charging strategy |

### Research gaps (Insufficient research performed — Research gap)

| Step | What it would have covered |
|------|---------------------------|
| Careers pages (not scraped) | Engineering headcount; platform architecture roles; WayKonect staffing; fleet platform development signals; CPMS engineering roles (would support or refute "builds in-house" claim) |
| SERP queries for "[Company] CPMS / charging platform / software partner" | Additional third-party CPMS confirmation; Greenflux scope / market coverage detail; any prior CPMS before Greenflux |
| Wenea/Nordian Spain post-acquisition platform | Whether Wenea CPMS was migrated to Greenflux or runs independently — resolves third-stack question |
| Source London CPMS migration status | Whether sourcelondon- prefix indicates legacy platform still live or is a retained ID naming convention on Greenflux — resolves parallel-stack question |
| China JV (Three Gorges) status update | 11,000 HPC target announced 2021 — no update in corpus; current deployment count and operational status unknown |
| Source-EV Limited CPMS commitment status | SSE Source page states "unparalleled technology from TotalEnergies + infrastructure from SSE" — whether Greenflux is committed as a JV formation term or remains open to independent evaluation is unresolved. The 12–18 month CPMS commitment window (from July 2024 JV formation) has elapsed as of May 2026. First action before pursuing Source-EV as a lead: verify (a) whether the JV formation terms committed TE technology/Greenflux; (b) whether a CPMS decision has already been made. |

---
