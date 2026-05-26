---
name: add-cpo
description: Use this skill whenever the user wants to add a new CPO company to the CPO Intel site. Triggers when the user mentions adding a company, dropping in a new analysis file, or says things like "add this CPO", "add [company name]", "I have a new analysis", "onboard this company", or points at a .md file they want published. The skill reads the .md analysis file, extracts all required metadata automatically, sets up the data files, and commits — the user should never have to touch manifest.json or move files manually.
---

# Add CPO to CPO Intel

You're adding a new company to the CPO Intel site at `/Users/alex/Documents/Code/cpo-intel/`.

The site has two types of company entries:
- **AI-only**: just a `.md` analysis file — all tab content is parsed from the markdown headings
- **Full human report**: a structured `.json` file with hand-curated fields (out of scope for this skill)

This skill handles **AI-only** entries. The `.md` file IS the source of truth for everything shown on the profile page. Your job is to extract metadata from it and wire it into the site.

---

## Step 1 — Get the file

If the user hasn't provided a file path, ask for it. Once you have it, read the file in full.

---

## Step 2 — Extract metadata

Parse these fields from the markdown:

**Company name** — from the H1 title line:
```
# CPO Analysis — [Name]
```

**Slug** — lowercase, spaces to hyphens, remove special chars. Examples: `circle-k`, `omv`, `gruppe-schwarz`, `totalenergies`.

**Country** — from the `## Company Profile` table, look for the `Headquarters` row. Extract the country only (not the full address). If the company is multinational, use the country of the eMobility leadership or primary operations.

**Type** — from the `## Company Profile` table, `Archetype` row. Shorten to a clean label:
- "Oil Major CPO" for oil majors (OMV, TotalEnergies, Orlen, BP, Shell…)
- "Retail CPO" or "Forecourt CPO" for fuel/grocery retailers (Circle K, Gruppe Schwarz…)
- "Utility CPO" for energy utilities
- "Mobility CPO" for pure-play EV operators
- Use your judgment for anything else — keep it under 3 words + "CPO"

**Verdict** — from the `## Synthesis` section, find the `**Sales priority:**` line. Map as follows:
- High → `"worth pursuing"`
- Medium → `"monitor"`
- Low → `"low priority"`
- Low-Medium or Medium-Low → `"monitor"`
- If the priority varies by sub-entity (e.g. "Low for group / Medium for JV"), pick the highest applicable one and note it in the commit message

**Tags** — derive 2–3 short labels for the index card badges. Good sources:
- Archetype → first tag (e.g. "Oil Major", "Retail CPO", "Forecourt CPO")
- Primary market or geography → second tag (e.g. "Norway", "Poland", "AT/HU/SK/RO", "France")
- A sales signal if one stands out → third tag (e.g. "High signal", "Fleet B2B", "15k+ CPs", "App crisis")

**TagStyles** — map each tag to the existing CSS palette:
- `"cpo"` → blue — use for archetype/company-type tags
- `"eu"` → purple — use for geography tags
- `"signal"` → amber — use for sales signal tags
- `"pub"` → green — use for publicly-listed companies (optional)
- `"tech"` → light blue — use for CPMS/tech tags (optional)
- `"low"` → grey — use for low-priority signals (optional)

---

## Step 3 — Copy the file

```bash
cp "[source path]" /Users/alex/Documents/Code/cpo-intel/data/ai-analysis/[slug].md
```

---

## Step 4 — Update manifest.json

Read `/Users/alex/Documents/Code/cpo-intel/data/manifest.json` and append a new entry:

```json
{ "slug": "[slug]", "name": "[name]", "country": "[country]", "status": "ai-only", "hasAiAnalysis": true, "type": "[type]", "verdict": "[verdict]", "tags": [...], "tagStyles": [...] }
```

Keep the formatting consistent with the existing ai-only entries (single-line, aligned).

---

## Step 5 — Confirm with the user

Before committing, show a short summary:

```
Ready to add:
  Name:     OMV
  Slug:     omv
  Country:  Austria
  Type:     Oil Major CPO
  Verdict:  monitor
  Tags:     ["Oil Major", "AT/HU/SK/RO", "eMotion"]

Commit and push?
```

Wait for confirmation.

---

## Step 6 — Commit and push

```bash
git add data/ai-analysis/[slug].md data/manifest.json
git commit -m "Add [Name] AI analysis"
git push origin main
```

Done. Let the user know the company is live.

---

## Edge cases

- **File already exists** in `data/ai-analysis/` — warn the user before overwriting
- **Slug already in manifest** — warn and ask if they want to update the existing entry
- **Sales priority is ambiguous** (e.g. conditional on future events) — pick the most applicable verdict, note the nuance in your confirmation summary
- **Missing sections** — some files don't have every H2 section. That's fine; the site handles missing sections gracefully. Don't block on it.
