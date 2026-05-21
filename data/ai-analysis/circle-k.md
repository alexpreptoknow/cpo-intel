# CPO Analysis — Circle K

**Date:** 2026-05-18
**Analyst:** Claude (AI)
**Source:** 100 scraped pages + 182 app reviews from p2k DB
**Coverage:** ~70 pages read across all batches. Cookie-table scrape issue on Norwegian pages (54K of 61K chars is cookie consent modal — actual EV content in last ~3K chars, successfully extracted). Key gaps: Ireland CPMS backend unconfirmed; no Sweden/Denmark pages; no financial filings in corpus.

---

## Alex Notes

**Things to pay attention to:** 

This is an example of analysis, that wasn't "quality checked" at the end. One simple logical mistake it does is - if Driivz services CircleK in the US, it must do so in Norway. Our "post-analysis" quality check prevents such LLM deductions. 


If I am not mistaken, that should be Spirii in Europe - https://www.spirii.com/en/press-releases/spirii-partners-with-circle-k-to-provide-charging-solutions-across-four-european-countries. That's an article that we have missed in the research phase. This mistake is easily preventable, when we research all CPMSes. Google search is fairly unpredictable in terms of research quality.

---

## Synthesis

**What Circle K clearly is:** Circle K is the EV charging arm of Alimentation Couche-Tard Inc. (TSX: ATD), a Canadian fuel/convenience retail giant (~16,800 stores globally, revenue ~CAD $75B). EV charging is a strategic forecourt extension, not a separate business line — the same sites, same brand, same B2B fleet card. Norway is the primary test and production market (1,000+ charge points as of May 2026; target 2,030 by 2030), where they have built a mature, full-stack B2B offering: road charging, home charging for employees, workplace charging, and heavy vehicle charging — all on one invoice via firmakort (fleet card). VP Global eMobility is Håkon Stiksrud, based in Norway; this confirms the Norway-first strategy. Ireland has 420+ stations but a different app (legacy Topaz brand) and tap-card-first UX. US market is transitioning to IONNA (OEM JV) — Circle K effectively exited direct US charging operations in April 2026 by contributing 93 stations to IONNA.

**CPMS:** Confirmed Driivz — Tier 1 evidence (two independent sources: Google Play package name `com.driivz.ckus` for US app; Driivz vendor press release Jan 2023 naming Circle K as client for "Europe and North America"). Driivz backs both the US app and Norway's white-label `com.circlekeurope.android`. Norway home and workplace charging is also Driivz-backed ("CK CPMS" referenced in all hardware integration PDFs). App quality is seriously poor in the US: 1.64★ Apple / 2.97★ Google Play — dominant failures are payment card rejection, $50 pre-auth triggering bank fraud holds, and account creation failures. Ireland uses a separate app (Topaz Energy) — CPMS backend for Ireland is unknown.

**What's absent:**
- **No tap-card payment in Norway** — card readers on Norwegian chargers appear disabled; app or RFID required. This is the source of most 1★ US reviews ("just let me tap to pay"). Ireland is the opposite: tap-card is primary. This inconsistency suggests different operational configurations, possibly different CPMS configs or different hardware generations.
- **No published pricing for workplace/home installation** — website routes to quote form. B2B is sold consultatively, not as a self-serve product.
- **No roaming map breadth data** — eMSP roaming engineer in Warsaw suggests CK operates as an eMSP across EU. IONITY access is offered in both Norway and Ireland (through separate deal structures). But the scale of roaming coverage is not stated.
- **No US app replacement post-IONNA** — `com.driivz.ckus` still active as of research date. Whether CK maintains a US app under IONNA or hands off entirely is unclear.
- **No Apple Pay / Google Pay in Norway yet** — stated as "coming soon" in Nov 2023 article; Tap & Pay (card terminal) noted as "long-term goal" — meaning card-tap is still not standard in Norway as of this research.

**What explains what's observed:** Couche-Tard built the Norway network from 2011 (first public fast charger in Norway at Okern), treating it as a "lab" for international EV strategy. Norway's extreme EV penetration (>50% of new cars) made it the only market where CK could build meaningful operational scale and product depth. The contrast with Ireland (tap-card primary, legacy Topaz app, IONITY partnership for premium hubs) and the US (IONNA exit) reflects three different strategic postures:
- Norway: owned and operated, B2B depth, market leadership
- Ireland: present but lighter-touch; differentiation through IONITY partnership
- US: conceded — IONNA deal is structurally an admission that Circle K couldn't scale fast enough in the US, where EV infrastructure competition is intense

**Competitive pressure:** In Norway, primary competitors are Recharge (part of Statkraft), MER (Mer Norway), Ionity, and Elton. Recharge and MER are larger by charge point count. CK's differentiation is the fleet/B2B stack and the forecourt convenience (food + fuel + EV). The B2B firmakort product competes with WEX/Fleetcor fuel card networks who don't offer home charging reimbursement. In Ireland, ESB eCars is the dominant competitor, using the same CPMS vendor (Driivz) — which means they share platform-level weaknesses.

**Sales priority: Low-Medium**
Driivz is confirmed and entrenched. Norway is a mature deployment. Couche-Tard is a large company where any CPMS decision is a global platform call. The US is being handed to IONNA. However, three specific signals create a medium-term watch entry:
1. App quality in US is a customer experience crisis — 1.64★ is not sustainable; Driivz may need to improve or CK may eventually look at alternatives
2. Ireland CPMS is unknown — if Topaz app runs on something other than Driivz, there's a multi-CPMS fragmentation problem that creates a consolidation conversation
3. The EMSP roaming engineer role (Warsaw) confirms CK is investing in multi-market EU eMSP — that team will eventually face CPMS questions

Trigger: Any public announcement of Circle K replacing the US Driivz app, or a job posting for "CPMS" or "EV platform" roles in Ireland or EU HQ.

**Entry point if pursued:** Not the Norway operation — that's too entrenched. Ireland is the more open question: unknown CPMS, separate Topaz app, and a tap-card-first UX that's structurally different from Norway. The EU eMSP operations team (Warsaw) is a potential contact — they're the ones managing multi-country roaming and would feel platform fragmentation most acutely. The fleet card product (firmakort) integration with CPMS is also a differentiator to lead with — CK's B2B offering is sophisticated, and any platform that can improve the B2B management layer (invoicing, fleet dashboard, home charging reimbursement automation) speaks to what they've built.

---

## Company Profile

| Field | Finding | Basis |
|-------|---------|-------|
| Legal entity | Circle K (consumer brand of Alimentation Couche-Tard Inc., TSX: ATD) | Couche-Tard corporate press releases; circlek.com |
| Website | circlek.com (global); circlek.no (Norway); circlek.ie (Ireland); circlek.eu (EU B2B) | Scraped pages |
| Headquarters | Laval, Quebec, Canada (Couche-Tard parent); Norway eMobility leadership | Couche-Tard PR; Håkon Stiksrud title |
| Parent company | Alimentation Couche-Tard Inc. | Investor pages, Couche-Tard PR |
| Parent origin | Fuel retail / convenience store | Company history |
| Archetype | Retail Fuel CPO — forecourt CPO with fleet card heritage; no equivalent in current business_archetypes.md | Evaluated against all archetypes |
| Markets | Norway (primary), Sweden, Denmark (Scandinavia), Ireland, broader EU (B2B eMSP); US/Canada (US transitioning to IONNA) | Scraped pages, IONNA press release |
| CPMS (current) | Driivz (confirmed — Europe + North America; Ireland possibly separate) | Google Play package `com.driivz.ckus`; Driivz PR Jan 2023 |
| CPMS (previous) | — | Not identified |
| Hardware | Kempower (primary EU DC fast charging partner, 200+ CPs Norway/Sweden, extended EU deal); Easee/Zaptec/Alfen/Charge Amps/Garo/Keba (Norway home/workplace); ABB/other brands (unconfirmed for road network beyond Kempower) | Kempower PR; stoettede-ladere page |
| Charging types | DC fast: 50–400 kW (CCS primary; CHAdeMO still present at some sites); AC: up to 22 kW; HV-adapted stations in Norway; AutoCharge (CCS only) | Norway and Ireland product pages |
| Network size | 1,000+ charge points in Norway (May 2026); 420+ service stations in Ireland; 93 stations (378 plugs) contributed to IONNA in US | circlek.no gold charger article; circlek.ie; IONNA PR |
| App (iOS) | 1.64★ (68 ratings) — Circle K Charge USA; Topaz Energy app for Ireland (score unknown) | p2k DB app_store_apps |
| App (Android) | 2.97★ (77 ratings, 10K+ installs) — `com.driivz.ckus`; `com.circlekeurope.android` for Norway/Scandinavia (100K+ installs, no score in DB) | p2k DB |
| Key leadership | Håkon Stiksrud (VP Global eMobility); Anders Kleve Svela (eMobility lead Norway); Joachim Hartmann (Ladesjef / Charging Manager Norway) | circlek.no news articles |

---

## Parent Company & Corporate Context

**Parent:** Alimentation Couche-Tard Inc.
**Parent industry origin:** Fuel retail / convenience store
**Ownership structure:** Publicly listed (TSX: ATD); Circle K is 100% subsidiary brand
**Financial scale:** ~CAD $75B revenue (FY2024); one of the world's largest convenience/fuel retailers
**Parent's primary revenue stream:** Fuel sales and convenience merchandise across ~16,800 stores globally (US, Canada, Scandinavia, Ireland, Baltics, Eastern Europe, Hong Kong, Middle East)
**Parent's primary clients:** Individual consumers (forecourt fuel, convenience food); fleet operators (B2B fuel card network)
**What EV charging means to the parent:** Existential hedge — as EV penetration grows, fuel volume declines. EV charging is both a replacement revenue stream and a traffic driver for the convenience store. Norway (where EV penetration is >50%) is proof-of-concept; the rest of the world is the prize.
**Strategic mandate for EV charging:** Hold the forecourt. EV drivers stopping to charge = customers in the store. The B2B fleet card (firmakort) extending from fuel to EV charging is the strategic continuity play — the same fleet manager who manages diesel cards now manages EV charging from the same portal.

---

## Business Model

**Primary revenue clients:** Individual consumers (en-route fast charging), then fleet/B2B operators (firmakort), then site partners/IONITY roaming.

### 1. En-route consumer fast charging (own network)

Norway: DC fast 50–400 kW. Pricing: 5.99 kr/kWh (extra member app price) / 6.29 kr/kWh (drop-in). AC: 5.29 kr/kWh (hotel partnership sites). Loyalty integration via "Circle K extra" programme — best price tied to app membership.

Ireland: CCS 50–300 kW + CHAdeMO 50–60 kW. Tap-card payment primary (no app required). Pricing not visible in scraped pages.

US (pre-IONNA): ~93 stations. Now transitioning to IONNA-branded and operated.

### 2. EMSP / Roaming

CK operates as an eMSP — customers can use CK payment methods (app, RFID, firmakort) at partner networks including IONITY. Norway pricing for IONITY access: 6.49 kr/kWh with CK payment method. OCPI protocol confirmed (EMSP Roaming Engineer job description). Multi-market EU eMSP team based in Warsaw. App covers "all of Scandinavia — Circle K and partners."

### 3. B2B Fleet

Norway's most differentiated product stream. Firmakort (fleet RFID card) covers: en-route fast charging, home charging reimbursement for company car employees, workplace charging (Basic and Komplett tiers), heavy vehicle charging — all consolidated on one invoice via kundeportal. Fleet dashboard for fleet admins. No published pricing — consultative sale with negotiated discount off list price. Reference customer: Sixt Car Rental (Helsfyr, Oslo).

### 4. Workplace and Home Charging (B2B installation)

Hardware installation via third-party partners (Elproffen for home hardware ordering). CPMS management via Driivz backend ("CK CPMS"). 6 hardware brands / 19 models supported for home and workplace. Subscription-style management with remote monitoring, proactive maintenance, 24hr phone support. Firmakort activation.

### 5. Heavy Vehicle / Trucking

Currently 21 adapted stations. 30+ dedicated HV charging points planned along E6, E18, E39 (Norway). Some Enova-subsidized. Separate commercial deal structure (B2B only). Heavy vehicle lading does not use consumer app — firmakort or RFID.

---

## Strategic Context

### M&A & Partnerships

- **2011:** Norges første offentlige hurtiglader (Norway's first public fast charger) at Okern, Oslo — Circle K as market pioneer
- **2015:** Couche-Tard acquires Topaz Energy (Ireland) — explains the legacy Topaz app still in use for Ireland EV charging
- **2022:** US EV rollout announced; first US site Rock Hill, SC; Norway named "lab" model; goal 200 US sites by 2024
- **Jan 2023:** Driivz selected as global CPMS partner ("Europe and North America") — major platform commitment
- **2023:** Kempower extended partnership for EU DC fast charging; 200+ CPs already live in Norway/Sweden
- **Nov 2023:** Circle K Charge pan-Scandinavian app launched; replaces older Norway-only app; Vipps added; AutoCharge launched
- **April 2026:** IONNA partnership announced — Circle K contributes 93 US stations (378 plugs) to IONNA; transitions operations to IONNA. Effective exit from direct US charging operations.
- **May 2026:** 1,000th charge point milestone in Norway (Okern gold charger)

### Leadership

| Name | Role | Background | Mandate signal |
|------|------|------------|----------------|
| Håkon Stiksrud | VP Global eMobility | Norway-based; shaped Norway network from early days | Internationalize the Norway model; now quoted in both Norwegian articles and IONNA press releases |
| Anders Kleve Svela | Leader, eMobility Circle K Norway | Operations/network focus | Expand Norwegian network; "building for those who keep wheels turning" (commercial fleet focus) |
| Joachim Hartmann | Ladesjef (Charging Manager) Norway | Network operations | Daily ops; quoted on historic scale trajectory |

### Strategic pivots or signals

- **US retreat (April 2026):** IONNA deal is structurally an admission that CK could not hit its 200 US site goal (reached ~93). Permitting delays cited. IONNA gets the sites; CK gets capital release and continued brand presence. This frees CK to focus capital on Europe.
- **Norway as international template:** Multiple quotes from leadership confirm Norway drives global decisions. The pan-Scandinavian app migration (2023) and AutoCharge launch suggest product decisions are Norway-led and then exported.
- **B2B depth in Norway:** The sophistication of the firmakort / home / workplace / heavy vehicle / one-invoice stack is not accidental — it mirrors the existing fuel card B2B business model. This is Couche-Tard's core competency applied to EV.

---

## CPMS Identification

**State:** Confirmed Driivz (US + Norway/Scandinavia confirmed; Ireland unknown)

**Evidence tier:** Tier 1

**Evidence:**
1. Google Play package name `com.driivz.ckus` — US Circle K Charge app clearly Driivz-built
2. Driivz vendor press release, January 2023: "Circle K Chooses Driivz™ to Power EV Charging Growth in Europe and North America" — explicit client naming
3. Norway home/workplace charger instruction PDFs (scraped filenames visible): all reference "CK CPMS" — e.g. `NO Easee hjemmelader instruksjoner CK CPMS.pdf`, `NO Zaptec hjemmelader instruksjoner CK CPMS.pdf` — confirms Driivz as CPMS backend for Norway home/workplace charging
4. Norway pan-Scandinavian app: `com.circlekeurope.android` — white-label front-end on Driivz backend; same CPMS, different branding

**What was checked:**
- [x] Own-domain pages (circlek.com, circlek.no, circlek.ie, circlek.eu)
- [x] App store package name / developer field (iOS + Android)
- [x] Vendor case study / press release (Driivz, Kempower)
- [x] CPO press releases (Couche-Tard, IONNA)
- [x] Careers page (EMSP Roaming Engineer, Warsaw — confirms eMSP operations; CPMS not named but confirms platform complexity)
- [x] SERP queries for IONNA deal, Driivz partnership

**Ireland CPMS — not confirmed:**
- Ireland footer links to Topaz Energy app (`clients.topaz`); not Circle K Charge
- Ireland EV page emphasises tap-card (no app required) — different UX paradigm from Norway
- Driivz press release covers "Europe" broadly but Ireland was a 2015 Topaz acquisition — may predate the 2023 Driivz contract
- Could be: (a) Driivz backend with Topaz-branded front-end, (b) separate legacy CPMS inherited from Topaz, (c) Driivz with hardware configured for contactless card (vs Norway's RFID-only). Not determinable from available data.

**Vendor profile:** See cpms_platforms.md → Driivz. Summary: confirmed app quality problems across both ESB (Ireland) and Circle K US deployments. Payment integration consistently problematic. Home charging capability confirmed (Circle K Norway deployment disproves the previously noted gap). White-label front-end deployment model common for large clients.

---

## Business Gaps

| Gap | Evidence | Sales relevance |
|-----|----------|-----------------|
| US payment experience crisis | 1.64★ Apple; $50 pre-auth triggering bank fraud blocks; card terminal disabled on chargers; 56/68 Apple reviews are 1★ — spanning 2022–2026 | High — but US is transitioning to IONNA. Relevant if CK retains US app |
| Card-tap payment missing in Norway | AutoCharge article (Nov 2023): "Tap & Pay is a long-term goal" — still not confirmed live | Medium — Ireland has solved this; Norway market demands it given competitor offering |
| Ireland CPMS unknown | Topaz app different from Norway; no data on backend | Medium — creates fragmentation risk if Driivz covers Scandinavia but not Ireland |
| No app-based payment without account for US | Forced account creation + home address + gender required just to charge; "Why do you need my address to let me put a credit card in?" | High — US churn signal; comparing unfavourably to ChargePoint, EVgo |
| AutoCharge limited to CCS | Norway FAQ: CHAdeMO not supported for AutoCharge | Low — CHAdeMO declining, CCS is current standard |
| No multi-country billing visible for EU fleet | B2B pages are Norway-specific; EU fleet card at circlek.eu exists but EV integration not confirmed | Medium — fleet managers with cross-border fleets need one bill across markets |

---

## Network Size

**Headline figure:** 1,000+ charge points in Norway (May 2026 milestone)

**Scope:** Norway public + B2B fast charging network; does not include home/workplace points installed at employee/business premises

**Breakdown:**

| Region / Segment | Count | Source | Date | Notes |
|-----------------|-------|--------|------|-------|
| Norway (public fast charging) | 1,000+ | circlek.no gold charger article | May 2026 | Milestone charger at Okern; target 2,030 by 2030 |
| Norway — largest single park | 28 ports (300–400 kW) | circlek.no Furuset article | 2025/2026 | Circle K E6 Furuset, Oslo |
| Norway — HV-adapted stations | 21 adapted; 30+ dedicated planned | tungbillading page | 2025 | E6/E18/E39 corridors |
| Ireland (service stations) | 420+ | circlek.ie homepage | 2026 | Station count, not charge point count |
| US (pre-IONNA) | 93 stations / 378 plugs | IONNA press release | April 2026 | Now transferred to IONNA operations |
| EU (excluding Norway) | 200+ Kempower CPs in Norway/Sweden | Kempower PR | 2024 | Kempower hardware only; total EU CPs not stated |

**AC/DC composition:**
- Norway: DC fast primary (50–400 kW); some AC at hotel partner sites (22 kW, Scandic/Favn Hafjell); heavy focus on ultra-fast DC (Furuset: all 300–400 kW)
- Ireland: CCS 50–300 kW DC + CHAdeMO 50–60 kW (present but not primary)
- Network age signal: 400 kW presence at flagship parks = recent buildout; 50 kW CHAdeMO at Ireland = older generation equipment still live

---

## App Quality

**iOS:** 1.64★ (68 ratings) — Circle K Charge USA (Driivz white-label)
**Android:** 2.97★ (77 ratings, 10K+ installs) — `com.driivz.ckus`; `com.circlekeurope.android` Norway (100K+ installs, no score in corpus)

**Rating history / rebrand note:** Norway migrated from an older Norway-only app to `com.circlekeurope.android` (pan-Scandinavian) in late 2023. No historical rating data for the old app.

**Review patterns (1★ themes — US app):**

1. **Payment card rejected / bank fraud triggered (most common)** — "App rejects all credit cards with false 'Bank has placed a temporary hold on the card' error." $50 pre-auth causes bank fraud holds; multiple banks affected; some users report $100 unreleased holds. Appears to be a systemic Driivz payment integration issue, not a card-specific problem.

2. **Cannot create account** — "Tried a few different cards... keeps saying error on the card upload." SMS verification codes not delivered. Form validation fails silently after completing all fields. Multiple users give up and use a competitor.

3. **Forced app dependency + data collection** — Card readers physically disabled on chargers; app required. App requests home address, gender, phone number for a one-time charging visit. Viewed by users as unnecessary data collection: "Privacy nightmare," "Data harvester," "Is this app a SCAM?"

4. **Session won't start / stop** — "Charger says it's in use but doesn't know it's me"; "Swipe to stop won't work." Charger stuck in session; user stranded.

5. **Card management broken** — "Cannot delete expired card, cannot add replacement." App doesn't warn when card expires. Users locked out of their own account.

6. **No Apple Pay / Google Pay** — Repeatedly requested; not delivered as of most recent reviews (mid-2026).

**Competitor mentions in reviews:** ChargePoint, EVgo, Tesla Supercharger mentioned positively by users explaining why they're churning. "Stick with ChargePoint" and "Elton starts charging at the same points instantly" (Norwegian review).

---

## Research Gaps & Unresolved

### Scrape failures

| URL | Failure type | Area blocked |
|-----|-------------|--------------|
| #67 finance.yahoo.com | Scrape failure | IONNA deal financial coverage — LOW impact, 7+ other sources covered the deal |

### Research gaps

| Step | What it would have covered |
|------|---------------------------|
| Ireland CPMS backend | What platform backs the Topaz Energy app in Ireland — Driivz white-label, or legacy Topaz CPMS? |
| Sweden / Denmark pages | No .se or .dk pages in corpus — Scandinavian expansion beyond Norway is partially covered by press releases only |
| Canada-specific operations | `com.driivz.ckca` confirms Driivz for Canada; no Canadian pages scraped |
| EU fleet card EV integration | circlek.eu Routex/fleet card pages read; EV integration with firmakort across EU (not just Norway) not confirmed |
| Financial filings | No Couche-Tard annual report scraped — EV CapEx, segment revenue not available |
| Reddit / consumer forum depth | B7 batch partially read — additional consumer sentiment threads not processed |
