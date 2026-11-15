# FIG Prep — IB technicals on your phone

A fast, offline-capable study app for investment banking technical interviews, with a focus on
**FIG (Financial Institutions Group)**: banks, insurance, asset & wealth management, fintech and payments.
Built for short sessions between other commitments: open it, tap **Quick 10**, and you're studying in one tap.

It's a static web app (a PWA) with no build step, no account and no server. Add it to your home
screen and it behaves like a native app, offline included.

## What's inside

| Section | What it does |
|---|---|
| **Flashcards** | 364 interview-style Q&As in 16 decks: bank fundamentals, capital & regulation, bank valuation & M&A, insurance, asset management, fintech/payments, rates & markets, accounting, EV, valuation/DCF, M&A, LBO, "walk me through" stories, fit & behavioral, product groups (DCM, LevFin, ECM, restructuring) and other industries. Uses spaced repetition (Missed / Shaky / Got it). |
| **Your guides** | Decks that follow the study guides you uploaded chapter by chapter. Each chapter mixes existing cards with new ones written in our own words to cover its questions. |
| **Terminology** | 201-term FIG glossary with a "why it matters" line on key terms. Searchable, filterable, and quizzable as flashcards. |
| **Equations** | 119 formulas with notes and worked examples (NIM, efficiency ratio, ROTCE, CET1, SCB, justified P/TBV, TBV earnback, combined ratio, FRE/DE, take rate, duration…). Quizzable. |
| **Math drills** | 38 types of randomly generated mental-math problems (NIM, deposit beta, CET1/excess capital, P/TBV ↔ ROTCE, earnback, combined ratio, AUM roll-forward, accretion/dilution, WACC, TSM…), each with a worked solution. |
| **Mock superday** | 10 timed questions in an interview-like mix. Answer out loud, then grade yourself. |
| **Cheat sheets** | 8 one-pagers to skim right before you walk in (bank valuation in 60 seconds, bank M&A checklist, 3-statement walk-throughs, insurance, asset managers, superday game plan, mental-math rules of thumb, FIG numbers to know for Oct 2026). |
| **Deal book** | 14 landmark and recent FIG deals with rationale, metrics to discuss, and the interview angle. |
| **Firm prep** | Snapshot, talking points and a prep checklist for Citi, Bank of America, Wells Fargo and Barclays. Add your own notes, extra firms, and interview dates; Home shows a countdown. |
| **Market notes** | Fill-in fields for the numbers interviewers ask about (Fed funds, 2Y/10Y, BKX/KRE, spreads), plus headlines and your market view. |
| **Error log** | Every **Missed** card and wrong drill lands here with the answer. Add a "why I missed it" note. An entry clears itself after you get it right 2× in a row (3× for drill types). You can also **log a miss** from a real interview; it becomes a flashcard. |
| **Progress** | Streak, daily goal, learned/mastered %, 7-day accuracy (vs the prior 7 days), study time, a 14-day activity chart, progress and accuracy by deck (weakest first), and drill accuracy by problem type. |

## Put it on your phone

The app has to be hosted somewhere your phone can reach. Free options:

**Option A: GitHub Pages (simplest if available)**
1. In this repository on GitHub: **Settings → Pages**.
2. Under *Build and deployment*, set **Source: Deploy from a branch**, choose the branch that holds this code and **/ (root)**, then **Save**.
3. After about a minute, the URL (`https://<username>.github.io/<repo>/`) appears at the top of that page.

> GitHub Pages on a **private** repository needs GitHub Pro. Pro is free for students through the
> [GitHub Student Developer Pack](https://education.github.com/pack). Otherwise, make the repository
> public (the content is just study material; your progress never leaves your phone) or use Option B.

**Option B: Netlify / Cloudflare Pages / Vercel (free, works with private repos).** Import the
repository, leave the build command empty, and set the publish directory to the repository root.

**Then, on your iPhone:** open the URL in **Safari → Share → Add to Home Screen**.
On Android: Chrome menu **⋮ → Install app**. The app then opens full-screen and works offline.

## Your data

- Progress, the error log, notes and custom cards are stored **only on your device** (browser
  local storage). Nothing is uploaded anywhere.
- **Settings → Save backup** exports everything to a file. Use it before switching phones or
  clearing Safari data. **Restore** brings it back.

## Editing content

All content lives in plain JavaScript files in `js/data/`. You can edit them on GitHub's website.

- `cards-core.js`, `cards-banks.js`, `cards-fig.js`: flashcards `{ id, t, q, a }`. Keep `id`s
  stable, since progress is keyed to them. Answers support a tiny markup: `## heading`, `- bullet`,
  `  - sub-bullet`, `1. step`, `**bold**`.
- `terms.js`, `formulas.js`, `sheets.js`, `deals.js`, `firms.js`: glossary, equations, cheat
  sheets, deal book and firm prep.
- Math drills are generated in `js/drills.js`.

After changing any file, bump `VERSION` in `sw.js` so installed copies pick up the update. The app
shows a "New version ready" banner.

> Content reflects public information through mid-2026. Deal terms, regulatory proposals and firm
> facts change. Anything marked "(verify current)" should be checked against the latest releases
> before you cite it in an interview.

## Development

```bash
npm start      # serves the app at http://localhost:8080 (python3 http.server)
npm test       # content integrity, spaced repetition, error log, drill generators
```

No dependencies and no build. Plain ES modules, CSS and a service worker.
