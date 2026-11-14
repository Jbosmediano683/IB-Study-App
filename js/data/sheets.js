// Cheat sheets (quick reference pages)
export const SHEETS = [
  { id: 'bank-val-60', title: 'Bank valuation in 60 seconds', sub: 'The answer, the formulas, the follow-ups', body: `## The 60-second answer
"Banks are valued on equity, not enterprise value: deposits and borrowings are the raw material of the business and interest expense is an operating cost, so EV, EBITDA and unlevered DCFs don't work. I'd triangulate three ways:"
1. **Trading comps** – P/E on forward EPS and P/TBV, judged against ROTCE (regress P/TBV on ROTCE across the peer group).
2. **Precedent transactions** – P/TBV, P/E and core deposit premium paid in comparable bank deals.
3. **DDM / excess-capital model** – project earnings and RWA, hold CET1 at target, treat everything above it as distributable, add a terminal value, discount at the cost of equity.
"Then I'd sanity-check with ROTCE vs. cost of equity: a bank earning its cost of equity should trade around 1.0x TBV."

## The formulas
- Justified P/TBV = (ROTCE − g) ÷ (Ke − g)
- P/E = (P/TBV) ÷ ROTCE
- Distributable capital = Net income − Δ RWA × Target CET1
- Ke (CAPM) = Rf + β × ERP — use the bank's own beta (no relevering)

## Quick example
- ROTCE 15%, Ke 10%, g 4% → (15 − 4) ÷ (10 − 4) = **1.83x TBV**
- At 1.83x and 15% ROTCE → P/E ≈ 1.83 ÷ 0.15 = **12.2x**

## Why P/TBV, not P/BV?
- Goodwill and intangibles are deducted from regulatory capital and have little value in stress or liquidation
- Makes serial acquirers comparable with organic growers

## What earns a premium multiple
- High, durable ROTCE: low-cost deposits, fee businesses, efficiency
- Excess capital → buybacks
- Clean credit and conservative reserves (watch CRE/office)
- Growth markets and M&A optionality

## Likely follow-ups
- **Why not EV/EBITDA?** Interest is operating; you can't separate operating from financing activities.
- **Why would a bank trade below TBV?** ROTCE below Ke, credit fears, AOCI/HTM losses, regulatory problems, weak deposit franchise.
- **How do rates affect value?** NII/NIM path, AOCI (and so TBV), deposit costs and mix, credit quality.
- **How are insurers different?** P/BV (often ex-AOCI) vs. ROE and P/E; statutory capital limits dividends to the holdco.` },

  { id: 'bank-ma', title: 'Bank M&A checklist', sub: 'What to analyze and the numbers investors care about', body: `## Strategic rationale
- Scale: technology spend, compliance, funding costs
- Market overlap (drives cost saves) or entry into growth markets
- Deposit franchise: non-interest-bearing mix, deposit costs and betas
- Business mix: fee businesses, commercial vs. consumer, CRE concentration
- Regulatory thresholds: $10B (Durbin, CFPB), $100B (Category IV), $250B (Category III)

## Price paid
- P/TBV and P/E (LTM, forward, and with fully phased-in cost saves)
- Core deposit premium = (Price − TBV) ÷ Core deposits
- Premium vs. unaffected price; pro forma ownership split (merger of equals?)

## The four numbers
1. **EPS accretion** – year 1 and year 2, with fully phased-in cost saves
2. **TBVPS dilution at close + earnback** – simple or crossover; about 3 years or less is generally well received (verify current norms)
3. **IRR** vs. cost of capital – acquirers often look for mid-teens (verify)
4. **Pro forma capital** – CET1 and TCE at close vs. targets; room for buybacks

## Purchase accounting
- Credit mark (lifetime expected losses) plus interest rate mark on fixed-rate loans and securities; discounts accrete into NII over time
- CDI created for cheap core deposits, amortized over roughly 7–10 years
- CECL: PCD loans use a gross-up; non-PCD loans have needed a day-2 provision (the "double count"). FASB issued changes in 2025 extending the gross-up to many acquired seasoned loans (verify scope and effective date)
- DTL/DTA on the marks; goodwill is the plug

## Cost saves
- In-market deals: often ~25–40% of the target's non-interest expense; out-of-market far less
- Phased in (e.g., 50–75% in year 1, 100% in year 2)
- One-time merger charges often ~1–1.5x run-rate saves
- Revenue synergies usually left out of headline numbers

## Risks and diligence
- Credit (CRE office, concentrations), deposit runoff after close, systems conversion
- Approvals: Fed, OCC or FDIC/state, DOJ competition review, CRA record
- Social issues: CEO, board seats, headquarters, brand

## Why most bank deals are all-stock
- Cash deals consume CET1: goodwill and intangibles are deducted and cash leaves
- Target holders share the upside, and the exchange can be tax-deferred
- A fixed exchange ratio is standard
- All-stock is TBV dilutive if deal P/TBV > acquirer's own P/TBV` },

  { id: 'three-statements', title: '3-statement walk-throughs', sub: 'Classic scenarios, including bank-specific ones', body: `Assume a **25% tax rate** unless told otherwise. Go IS → CFS → BS and confirm the balance sheet balances.

## Depreciation +$10
- **IS:** EBIT −10, taxes −2.5 → NI −7.5
- **CFS:** NI −7.5, add back D&A +10 → cash +2.5
- **BS:** Cash +2.5, PP&E −10 → assets −7.5; retained earnings −7.5

## Buy $100 of PP&E with cash
- **IS:** no change at purchase
- **CFS:** CFI −100
- **BS:** Cash −100, PP&E +100 → total assets unchanged

## Raise $100 of debt to buy PP&E (year 1: 10% interest, 10-year straight-line)
- At close: debt +100, PP&E +100
- **IS:** D&A 10 + interest 10 → pretax −20 → NI −15
- **CFS:** NI −15 + D&A 10 = CFO −5; CFI −100; CFF +100 → cash −5
- **BS:** Cash −5, PP&E +90 → assets +85; debt +100, equity −15 → +85

## Inventory: buy $100 with cash, then sell it for $150
- Buy: CFO −100 (inventory up); cash −100, inventory +100
- Sell: revenue 150 − COGS 100 = pretax 50 → NI 37.5
- CFO = 37.5 + 100 (inventory down) = +137.5; cash +137.5, inventory −100, retained earnings +37.5

## Inventory write-down of $100
- **IS:** pretax −100 → NI −75
- **CFS:** NI −75 + 100 non-cash → cash +25
- **BS:** Inventory −100, cash +25 → assets −75; retained earnings −75

## Stock-based comp of $10
- **IS:** expense 10 → NI −7.5
- **CFS:** NI −7.5 + SBC 10 → cash +2.5
- **BS:** Cash +2.5; retained earnings −7.5, APIC +10 → equity +2.5

## Bank: $100 loan funded by a $100 deposit
- **BS:** Loans +100, deposits +100
- **CECL at origination:** e.g., provision 1 → NI −0.75; ACL +1 (net loans −1); DTA +0.25; equity −0.75
- **Capital:** RWA +100 at a 100% risk weight → about $10–11 of CET1 needed at a 10–11% target

## Bank: provision expense +$100
- **IS:** provision +100 → pretax −100 → NI −75
- **CFS:** NI −75 + provision 100 − deferred tax 25 → cash 0 (provisions aren't tax-deductible until charge-off)
- **BS:** ACL +100 (net loans −100), DTA +25 → assets −75; equity −75
- Simpler interview version: treat it as deductible → cash +25 instead of DTA +25. Say which you assume.

## Bank: charge off a $10 loan
- Loans −10, ACL −10 → net loans unchanged; no income statement hit if already reserved
- If the bank rebuilds the reserve: provision +10 → NI −7.5
- Provisions hit the income statement; charge-offs hit the allowance

## Bank: $100 AFS bond falls $10 (rates rise)
- **IS:** no impact (unrealized, not a credit loss)
- **BS:** Securities −10, DTA +2.5 → assets −7.5; AOCI −7.5 → equity −7.5
- **If HTM instead:** no entry (amortized cost) — but it's disclosed and economically real
- **Capital:** AOCI flows into CET1 only for banks without the AOCI opt-out (today Category I–II)` },

  { id: 'insurance', title: 'Insurance quick guide', sub: 'P&C vs. life vs. brokers', body: `## Three business models
- **P&C carriers** – collect premiums up front, pay claims later; earn underwriting profit plus investment income on float
- **Life & annuity carriers** – long-duration liabilities; earn spread (portfolio yield − crediting rate), mortality/morbidity margins and fees
- **Brokers** (Marsh McLennan, Aon, WTW, Gallagher, Brown & Brown) – no underwriting risk; earn commissions and fees; capital-light

## P&C metrics
- Loss ratio = (Losses + LAE) ÷ NEP
- Expense ratio = Underwriting expenses ÷ NEP
- **Combined ratio** = Loss ratio + Expense ratio; below 100% = underwriting profit
- Operating ratio = Combined ratio − Investment income ÷ NEP
- Also watch: accident-year ex-cat combined ratio, prior-year reserve development, pricing (rate increases), premium growth, cat losses, BVPS growth, ROE

## Life metrics
- Spread, sales and net flows (fixed, indexed and variable annuities; RILAs), statutory capital generation, RBC ratio, ROE, book value ex-AOCI
- Key risks: rates, equity markets, credit (including private credit exposure), mortality/longevity, lapses

## Valuation
- Carriers: **P/BV (often ex-AOCI) vs. ROE**, P/E on operating EPS, dividend yield
- Justified P/BV = (ROE − g) ÷ (Ke − g)
- DDM limited by statutory dividend capacity from operating subsidiaries
- Life: also embedded value / VNB (Europe, Asia) and sum-of-the-parts
- Brokers: **EV/EBITDA(C) and P/E**, driven by organic growth and margins; serial acquirers and frequent PE targets
- Carriers aren't valued on EV/EBITDA: investment income and float are operating

## Accounting & regulation
- Statutory accounting (NAIC) is conservative: acquisition costs are expensed immediately; statutory surplus is regulatory capital
- GAAP capitalizes DAC; LDTI (effective 2023 for large SEC filers) changed life liability and DAC accounting
- RBC ratio = Total adjusted capital ÷ Authorized control level; company action level is 200%
- State rules limit dividends from insurance subsidiaries to the holding company

## Themes to discuss (verify current)
- P&C cycle: property pricing softened as capital returned; casualty pressured by social inflation and adverse development
- Alternative asset managers in life and annuities (Apollo–Athene, KKR–Global Atlantic, Brookfield–American Equity) and Bermuda reinsurance
- Broker consolidation and PE-backed brokers; cat bonds and other insurance-linked securities` },

  { id: 'asset-mgmt', title: 'Asset managers & alts quick guide', sub: 'Traditional vs. alternative, FRE/DE, valuation', body: `## How they make money
- **Traditional** (BlackRock, T. Rowe Price, Invesco, Franklin): management fees = average AUM × fee rate; some performance and distribution fees
- **Alternatives** (Blackstone, Apollo, KKR, Ares, Carlyle, Blue Owl): management fees on fee-paying AUM (~1–2%, lower for credit and large mandates), carried interest (~20% above a hurdle), transaction fees, balance-sheet gains
- **Wealth / brokerage** (Schwab, Morgan Stanley Wealth, RIAs): asset-based advisory fees, NII on client cash sweep, trading and other fees

## AUM math
- Ending AUM = Beginning AUM + Net flows + Market moves (± FX, M&A)
- Organic growth = Net flows ÷ Beginning AUM — the #1 valuation driver
- Revenue = Average AUM × Fee rate; a 10% market drop cuts revenue roughly proportionally (mix-dependent) and profits by more, because costs are largely fixed

## Key metrics
- AUM mix (equity, fixed income, multi-asset, alternatives, passive), fee rate trend, operating margin, comp ratio, investment performance vs. benchmark (3- and 5-year)
- Alts: fee-paying AUM, dry powder, fundraising, perpetual capital %, FRE and FRE margin, DE, net accrued carry, realizations

## FRE vs. DE
- **FRE** = management fees + fee-related performance revenues − fee-related comp and opex → stable and recurring
- **DE** = FRE + realized carry + realized investment income − interest − taxes → basis for dividends
- FRE earns a much higher multiple than carry because it's predictable

## Valuation
- Traditional: P/E and EV/EBITDA (lower multiples for managers in outflows); % of AUM in deals is very mix-dependent
- Alts: P/DE, P/FRE, sum-of-the-parts (FRE × high multiple + net realized carry × lower multiple + balance-sheet investments)
- Wealth / RIAs: EV/EBITDA; scale and organic growth earn premium multiples

## Themes (verify current)
- Active → passive shift and fee compression; growth of active ETFs and SMAs
- Traditional managers buying private-markets capabilities (BlackRock: GIP, HPS, Preqin)
- Private credit growth and bank partnerships (e.g., Citi–Apollo, Wells Fargo–Centerbridge)
- Retail and 401(k) access to alternatives: evergreen/semi-liquid funds; 2025 executive order on 401(k) plans
- Insurance balance sheets as permanent capital for alternative managers` },

  { id: 'superday', title: 'Superday game plan', sub: 'Answer structure, stories to have ready, night-before checklist', body: `## How to answer technicals
1. Lead with the one-sentence answer, then the structure ("three ways..."), then one detail.
2. Think out loud on math; round sensibly; state assumptions (tax rate, timing).
3. If you're stuck, say what you know and reason from first principles — don't guess silently.
4. Add the FIG angle when it's natural ("...and for a bank I'd use P/TBV vs. ROTCE instead").
5. Keep most answers to 60–90 seconds and let them pull for more.

## Have these ready (rehearsed out loud)
- **Walk me through your resume** – 60–90 seconds, ending with why banking, why now
- **Why investment banking?** – skills, deal exposure, the team, your trajectory
- **Why FIG?** – financial institutions are the economy's plumbing; distinct accounting, regulation and valuation; active consolidation and capital markets activity; your personal hook
- **Why this bank?** – specific people you met, recent FIG deals, platform strengths
- **A FIG deal you've followed** – parties, size and structure, rationale, key metrics (P/TBV, EPS accretion, TBV earnback, cost saves), market reaction, your view
- **A stock pitch** – 2–3 thesis drivers, valuation vs. peers, catalysts, risks
- **A market view** – Fed path, yield curve, credit, bank stocks, M&A environment (keep Market Notes current)
- **A story for each:** leadership, teamwork, failure, conflict, analytical problem

## Night before
- Re-read Market Notes and skim headlines (WSJ, FT, Bloomberg, American Banker)
- Review your error log, open items first
- Look up your interviewers and the bank's recent FIG deals
- 3 thoughtful questions per interviewer; printed resumes; logistics confirmed
- Sleep beats one more hour of flashcards

## Questions to ask a FIG banker
- Which sub-sectors are busiest for the group right now, and why?
- How is the group thinking about bank M&A over the next 12–18 months?
- How do associates get exposure across banks, insurance, asset management and fintech?
- What separates the best associates you've worked with?
- Which deal are you proudest of, and what made it work?

## During the day
- Bring the same energy to the last interview as the first
- Jot down every question after each round, then log the misses in the Error Log
- Send short, specific thank-you notes` },

  { id: 'mental-math', title: 'Mental math & rules of thumb', sub: 'Multiples, IRRs, after-tax shortcuts', body: `## P/E ↔ earnings yield
- 8x → 12.5% · 10x → 10.0% · 12.5x → 8.0% · 15x → 6.7% · 20x → 5.0% · 25x → 4.0%
- All-stock deal: accretive if acquirer P/E > P/E paid for the target

## IRR from MOIC
- 2.0x: 3 years ≈ 26% · 4 years ≈ 19% · 5 years ≈ 15%
- 2.5x in 5 years ≈ 20% · 3.0x in 5 years ≈ 25% · 3.0x in 3 years ≈ 44%
- 1.5x in 3 years ≈ 14.5% · 1.5x in 5 years ≈ 8.4%

## Rule of 72
- Years to double ≈ 72 ÷ rate: 6% → 12 years, 8% → 9 years, 12% → 6 years
- Rate to double in n years ≈ 72 ÷ n (5 years → ~14%)

## After-tax shortcuts
- 25% tax: multiply by 0.75 (D&A +10 → NI −7.5, cash +2.5)
- 21% tax: multiply by 0.79 (+10 pretax → +7.9 NI)
- After-tax cost of debt: 6% × 0.75 = 4.5%; 8% × 0.79 ≈ 6.3%

## Percentage tricks
- 1 bp = 0.01%; 100 bps = 1%
- 25 bps on $100B = $250M; 10 bps on $500B of AUM = $500M
- x% of y = y% of x (8% of 50 = 50% of 8 = 4)
- Up 20% then down 20% = −4% overall
- Dividing by 0.75 = adding one-third (60 ÷ 0.75 = 80)

## Bank shortcuts
- NII ≈ Earning assets × NIM: $100B × 3% = $3B
- ROE = ROA × leverage: 1.1% × 11x ≈ 12%
- P/E ≈ P/TBV ÷ ROTCE: 1.5x ÷ 12.5% = 12x
- Capital for growth: $10B of 100%-risk-weight loans × 11% CET1 = $1.1B
- ROTCE = cost of equity → ~1.0x TBV

## Perpetuity math
- Value = CF ÷ (r − g): 100 ÷ (10% − 2%) = 1,250
- 1 ÷ (r − g) as a multiple: 5% → 20x · 6% → 16.7x · 7% → 14.3x · 8% → 12.5x` },
];
