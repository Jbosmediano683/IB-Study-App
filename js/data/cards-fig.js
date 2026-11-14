// FIG flashcards: Insurance, Asset & Wealth Mgmt, Fintech/Payments/Spec Fin, Rates & Markets, Walk-me-through stories
export default [
  // ───────────────────────────── Insurance ─────────────────────────────
  { id: 'ins-01', t: 'ins', q: `How does a P&C insurer make money?`, a: `**Two engines: underwriting profit + investment income on float.**
- **Underwriting income** = net earned premiums − losses & LAE − underwriting expenses. A combined ratio below 100% means an underwriting profit.
- **Investment income**: premiums are collected up front and claims are paid later. The insurer invests that "float" (mostly investment-grade fixed income) and keeps the yield.
- Plus or minus realized/unrealized investment gains (usually excluded from "operating" EPS).
- Key point: an insurer can run a combined ratio slightly above 100% and still make money if investment income is big enough. This is common in long-tail lines.` },

  { id: 'ins-02', t: 'ins', q: `What is the combined ratio and how do you interpret it?`, a: `**Combined ratio = loss ratio + expense ratio (+ policyholder dividend ratio).**
- **Loss ratio** = (losses + LAE) ÷ net earned premiums.
- **Expense ratio** = underwriting expenses (commissions, acquisition costs, G&A) ÷ net earned premiums. That's the GAAP basis; the statutory "trade basis" divides by net written premiums.
- Below 100% = underwriting profit; above 100% = underwriting loss. A 95% combined ratio = 5¢ of underwriting profit per $1 of premium.
- Analysts strip out the noise and focus on the **accident-year combined ratio ex-catastrophes** (excluding cat losses and prior-year reserve development) to see underlying profitability.` },

  { id: 'ins-03', t: 'ins', q: `Written premiums vs. earned premiums — what's the difference?`, a: `**Written = sales. Earned = revenue recognized as coverage is provided.**
- **Written premiums**: total premium on policies written in the period. It's a sales/volume measure.
- **Earned premiums**: the share of premium "used up" as the insurer provides coverage, recognized pro rata over the policy term.
- The unearned share sits in the **unearned premium reserve (UPR)**, a liability.
- Example: a $1,200 annual policy written Oct 1 → $1,200 written in Q4, but only $300 earned in Q4. The other $900 sits in UPR.
- Fast growth in written premium shows up in earned premium (and earnings) with a lag.` },

  { id: 'ins-04', t: 'ins', q: `What are loss reserves, and what is IBNR?`, a: `**Loss reserves = the insurer's estimate of what it still owes on claims that have already happened.** Usually the largest liability on a P&C balance sheet.
- **Case reserves**: set on specific reported claims.
- **IBNR (incurred but not reported)**: claims that have happened but haven't been reported yet, plus expected development on known claims.
- **LAE reserves**: expected costs to investigate and settle claims (legal, adjusters).
- Actuaries set reserves from historical development patterns (loss triangles, chain-ladder). Because reserves are estimates, **reserve adequacy is a key risk**: under-reserving overstates both earnings and book value.` },

  { id: 'ins-05', t: 'ins', q: `What is float, and why is it valuable?`, a: `**Float = money an insurer holds between collecting premiums and paying claims, invested for the insurer's own benefit.**
- Roughly: loss & LAE reserves + unearned premiums − premiums receivable − reinsurance recoverables − DAC.
- If the combined ratio is below 100%, float has a **negative cost**: the insurer is effectively paid to hold other people's money. This is the Berkshire Hathaway model.
- Long-tail lines (workers' comp, general liability) generate more float per premium dollar because claims are paid years later.
- Investment income ≈ float × portfolio yield, so higher interest rates make float more valuable.` },

  { id: 'ins-06', t: 'ins', q: `Short-tail vs. long-tail lines — what's the difference and why does it matter?`, a: `**"Tail" = how long it takes for claims to be reported and paid.**
- **Short-tail** (property, auto physical damage): claims are known and paid quickly. That means less float and less reserve uncertainty, but more **catastrophe volatility**.
- **Long-tail** (general liability, workers' comp, medical malpractice, D&O, umbrella): claims emerge and settle over years. That means more float and investment income, but **more reserve risk** from inflation, litigation and "social inflation."
- Implication: long-tail writers can run higher combined ratios and still earn decent ROEs, so analysts scrutinize their prior-year reserve development.` },

  { id: 'ins-07', t: 'ins', q: `What is reinsurance? Explain quota share vs. excess of loss.`, a: `**Reinsurance = insurance for insurers.** It transfers risk, caps volatility (especially cats), frees up capital/capacity and supports growth.
- **Quota share (proportional)**: the insurer cedes a fixed % of premiums and losses (e.g., 30%). The reinsurer pays a **ceding commission** back to cover acquisition costs. Good for capital relief.
- **Excess of loss (non-proportional)**: the reinsurer pays losses above a retention, up to a limit (e.g., $400M xs $100M for a cat event). Good protection against large or catastrophe losses.
- **Treaty** covers a whole portfolio; **facultative** covers a single risk.
- Ceded = given to a reinsurer; assumed = taken on; retrocession = reinsurance bought by reinsurers.` },

  { id: 'ins-08', t: 'ins', q: `How do you value a P&C insurer?`, a: `**Use equity-based methods. Investment income and float are operating items, so EV/EBITDA doesn't work for carriers.**
- **P/BV vs. ROE**: the core method. Regress P/BV against forward ROE across peers. Often use **book value ex-AOCI** so bond-market swings don't distort it.
- **P/E** on forward operating EPS (excluding realized gains/losses).
- **DDM / excess capital**: dividends are limited by statutory capital and rating-agency requirements.
- Key drivers: underlying (accident-year ex-cat) combined ratio, premium growth and rate increases, reserve development, cat exposure, investment yield, BVPS growth.
- Specialty and E&S writers with high growth and returns command premium P/BV multiples.` },

  { id: 'ins-09', t: 'ins', q: `How does a life insurer make money?`, a: `**Life insurers manage long-dated liabilities and earn several margins on them.**
- **Spread income**: on annuities and universal life, the insurer earns the portfolio yield and credits policyholders a lower rate (the crediting rate). The difference is the spread.
- **Underwriting margins**: mortality (life insurance), morbidity (disability, long-term care) and longevity (annuities, pension risk transfer). Premiums are priced above expected claims.
- **Fee income**: variable annuities, retirement plans and asset management (fees on separate-account assets).
- **Expense margins**.
- Key risks: interest rates (low rates squeeze spreads; sharp rises can trigger surrenders), equity markets, credit losses in the portfolio, mortality/longevity assumptions and policyholder behavior (lapses).` },

  { id: 'ins-10', t: 'ins', q: `How do you value a life insurer?`, a: `**Mostly on book value and cash generation, not EBITDA.**
- **P/BV ex-AOCI** vs. operating ROE. AOCI swings with interest rates and would distort book value.
- **P/E** on operating earnings.
- **Free cash flow / capital generation**: statutory cash that can be dividended up to the holding company to fund dividends and buybacks. Investors increasingly value life insurers on FCF conversion and capital return.
- **Embedded value / value of new business (VNB)**: common for European and Asian insurers (Solvency II, IFRS 17's contractual service margin), less so in the US.
- **Sum-of-the-parts** for multi-line groups (e.g., asset management, retirement, protection).` },

  { id: 'ins-11', t: 'ins', q: `Statutory accounting (SAP) vs. GAAP for insurers — what are the key differences?`, a: `**SAP (set by the NAIC) is more conservative and built around solvency: regulators care whether policyholders get paid.**
- Acquisition costs are **expensed immediately** under SAP (no DAC asset), so fast new-business growth depresses statutory earnings.
- **Non-admitted assets** (e.g., some receivables, furniture/equipment, goodwill above limits) are excluded from statutory surplus.
- Bonds are generally carried at amortized cost, based on their NAIC designation.
- **Statutory surplus** = the capital regulators and rating agencies focus on. It drives RBC ratios.
- **Why it matters:** dividends from insurance subsidiaries to the holdco are capped by statutory results. A common state limit is the greater of 10% of surplus or prior-year net income, but rules vary by state. So SAP drives capital return.` },

  { id: 'ins-12', t: 'ins', q: `What is the RBC ratio?`, a: `**NAIC risk-based capital ratio = total adjusted capital ÷ authorized control level (ACL) RBC.**
- A formula-based capital requirement covering asset risk, insurance (underwriting) risk, interest rate risk and business risk.
- Regulatory action levels: **company action level at 200%** of ACL, with stronger intervention below that (regulatory action at 150%, authorized control at 100%, mandatory control at 70%).
- Companies typically run well above the minimums (often ~350–450%+ for life insurers) to support ratings and absorb shocks.
- The EU equivalent is the **Solvency II ratio** (own funds ÷ solvency capital requirement).` },

  { id: 'ins-13', t: 'ins', q: `What is DAC and how is it treated?`, a: `**Deferred acquisition costs = costs of acquiring new policies (mainly commissions). Under GAAP they are capitalized and amortized over the life of the policy.**
- This matches acquisition expense to the revenue the policy produces over time.
- Under **SAP**, the same costs are expensed immediately.
- Under **LDTI** (US GAAP for long-duration contracts), DAC is amortized on a constant-level basis (e.g., straight-line over the expected term) and is no longer tied to estimated gross profits. That eliminated the big "DAC unlocking" swings.
- Analysts often look at book value excluding DAC for a more conservative view.` },

  { id: 'ins-14', t: 'ins', adv: true, q: `What is LDTI?`, a: `**ASU 2018-12, "Long-Duration Targeted Improvements": the biggest change to US GAAP for life insurers in decades (effective 2023 for large SEC filers).**
- **Liability assumptions updated** at least annually (cash flow assumptions), with the effects running through net income.
- **Discount rate** for traditional life liabilities = an upper-medium-grade (single-A) fixed-income yield, updated every quarter. Changes go through **OCI**, not net income.
- **Market risk benefits** (e.g., variable annuity guarantees) are measured at fair value through net income, with own-credit changes going through OCI.
- **Simplified DAC amortization** (constant-level basis).
- Impact: more volatile AOCI and book value, but better comparability. Analysts lean on book value ex-AOCI.` },

  { id: 'ins-15', t: 'ins', q: `What drives the P&C pricing cycle (hard vs. soft markets)?`, a: `**Pricing follows industry capital and loss experience.**
- **Hard market**: rates rise, terms tighten and capacity shrinks. Usually follows big losses (cats, reserve deficiencies), depleted capital, or low investment yields (pricing has to carry more of the return).
- **Soft market**: excess capital and competition push rates down and loosen terms.
- Recent pattern (verify current): property-cat reinsurance and commercial property hardened sharply around 2022–23 after cat losses and inflation, then began softening in 2025 as capital returned. Casualty/liability lines stayed firm because of adverse reserve development and social inflation. Personal auto took large rate increases in 2023–24 as carriers restored margins.
- Interview angle: know where each line is in the cycle. It drives the premium growth and margin outlook.` },

  { id: 'ins-16', t: 'ins', q: `How do you value an insurance broker, and why is that different from a carrier?`, a: `**Brokers don't take underwriting risk. They place it and earn commissions and fees.**
- Brokers are capital-light, generate high free cash flow and have recurring revenue, so they're valued like services businesses: **EV/EBITDA (or EBITDAC)** and **P/E**, not P/BV.
- Key metrics: **organic revenue growth** (driven by premium rates, exposure growth, new business and retention), **adjusted EBITDAC margin**, M&A contribution and fiduciary investment income (interest on client premiums held in trust).
- EBITDAC = EBITDA adjusted for changes in acquisition earnout payables.
- Major players: Marsh McLennan, Aon, WTW, Arthur J. Gallagher, Brown & Brown, plus many PE-backed brokers running roll-up strategies.
- Recent example: Gallagher agreed to acquire AssuredPartners for $13.45B (announced Dec 2024).` },

  { id: 'ins-17', t: 'ins', q: `Combined ratio 95%, net investment income equal to 8% of earned premium. What's the operating ratio and pretax margin?`, a: `**Operating ratio = combined ratio − investment income ratio = 95% − 8% = 87%.**
- Underwriting margin: 100% − 95% = 5% of earned premium.
- Plus investment income: 8% of earned premium.
- Pretax operating margin ≈ 5% + 8% = **13%** (= 100% − 87%).
- On $1B of net earned premiums: $50M underwriting income + $80M net investment income = **$130M pretax operating income**.
- Takeaway: even at a 102% combined ratio this insurer would still earn ~6% pretax. That's why long-tail writers can live with a combined ratio above 100%.` },

  { id: 'ins-18', t: 'ins', adv: true, q: `What are catastrophe bonds / ILS?`, a: `**Insurance-linked securities move insurance risk (mostly catastrophe risk) to capital markets investors.**
- **Cat bond**: a special-purpose vehicle issues notes and holds the proceeds in a collateral trust (e.g., T-bills/money market funds). Investors earn a spread. If a defined trigger event happens (e.g., a Florida hurricane above a loss threshold), the principal pays the sponsor's losses.
- Trigger types: indemnity (the sponsor's actual losses), industry loss index, parametric (wind speed, quake magnitude) or modeled loss.
- Broader "alternative capital" also includes collateralized reinsurance, sidecars and industry loss warranties: roughly $100B+ of capacity (verify current) and a meaningful share of global reinsurance capital.
- Why it matters: it adds capacity, gives investors returns with low correlation to markets, and pressures traditional reinsurance pricing.` },

  { id: 'ins-19', t: 'ins', adv: true, q: `What role do private equity and alternative asset managers play in life insurance?`, a: `**"Asset–liability convergence": alts own or partner with life and annuity insurers to get permanent capital they can invest.**
- Examples: Apollo/Athene, KKR/Global Atlantic, Brookfield/American Equity, and Blackstone and others through investment management agreements and minority stakes.
- The model: write or reinsure fixed and fixed-indexed annuities (and pension risk transfer), invest more in **private credit and structured assets** for extra yield (a wider spread), and have the asset manager earn fees on the insurer's general account.
- Often uses **Bermuda/offshore reinsurance** for capital efficiency.
- Areas of scrutiny: quality and valuation of private assets, offshore reinsurance and capital standards, liquidity, related-party investments.
- Why bankers care: it drives M&A (block acquisitions, reinsurance deals), capital raises and asset-management fee streams.` },

  { id: 'ins-20', t: 'ins', q: `What is reserve development and why do analysts watch it?`, a: `**Reserve development = changes to prior-year loss reserve estimates as claims mature.**
- **Favorable development (reserve releases)**: prior reserves were conservative, so releases boost current earnings.
- **Adverse development (reserve strengthening)**: prior reserves were too low, so the insurer takes a charge to current earnings and book value falls.
- Analysts strip it out to see current accident-year profitability, and they watch the trend. Persistent adverse development damages management's credibility and the P/BV multiple.
- Recent theme (verify current): adverse development in US casualty/liability lines driven by **social inflation** (larger jury verdicts, more litigation, litigation funding).` },

  { id: 'ins-21', t: 'ins', q: `Gross vs. net written premiums — and what is the retention ratio?`, a: `**Gross written premiums (GWP)** = premiums before reinsurance. **Net written premiums (NWP)** = GWP − premiums ceded to reinsurers.
- **Retention ratio** = NWP ÷ GWP: how much of the risk the insurer keeps.
- Low retention = heavy use of reinsurance: less volatility and less capital needed, but the insurer gives away margin. It's typical of fronting carriers that rent their balance sheets to MGAs.
- **Premium leverage** = NWP ÷ statutory surplus, a classic capital adequacy gauge (traditional guideline: no more than ~3:1).
- Watch for growth in gross premiums while net premiums lag. It means more risk is being ceded.` },

  { id: 'ins-22', t: 'ins', q: `How do rising interest rates affect insurers?`, a: `**Short-term pain to book value, long-term gain in earnings.**
- **Investment income ↑**: new money and reinvestments earn higher yields. The benefit is gradual because portfolios turn over slowly, and it's especially positive for life and annuity spreads.
- **Book value ↓**: unrealized losses on bond portfolios flow through AOCI, which is why analysts use **book value ex-AOCI**. Insurers generally hold bonds to maturity and match asset and liability duration, so most of those losses are temporary.
- **Annuity sales ↑**: fixed and fixed-indexed annuities become more attractive (US annuity sales hit records in 2023–24).
- **Risks**: sharp, fast rate rises can trigger surrenders/disintermediation (policyholders cash out to reinvest elsewhere). P&C pricing can also soften because investment income is doing more of the work.` },

  { id: 'ins-23', t: 'ins', adv: true, q: `What is E&S (excess & surplus lines) insurance, and why has it grown?`, a: `**E&S = non-admitted insurance for hard-to-place or unusual risks that standard (admitted) carriers won't write.**
- E&S isn't subject to state rate and form filings. That **freedom of rate and form** lets carriers price and tailor coverage quickly.
- Usually placed through wholesale brokers and MGAs.
- Growth drivers: hard markets push risks out of the admitted market (e.g., California/Florida property, excess casualty, cyber), cat and litigation exposure is rising, and carriers are pulling back from difficult states.
- E&S premiums have grown far faster than the overall P&C market in recent years (verify current figures). Specialty E&S carriers (e.g., Kinsale) trade at premium valuations, and the trend also benefits wholesale brokers (e.g., Ryan Specialty).` },

  // ───────────────────────── Asset & Wealth Management ─────────────────────────
  { id: 'am-01', t: 'am', q: `How does an asset manager make money?`, a: `**Revenue ≈ average AUM × fee rate, plus performance fees.**
- **Management fees**: basis points on AUM. Rough ranges: a few bps for index funds, ~50–75 bps for active equity mutual funds, ~1–2% for alternatives.
- **Performance fees / carried interest**: a share of returns above a hurdle (mostly alternatives and some hedge funds/absolute-return products).
- Distribution, servicing and administration fees.
- **Costs**: mostly compensation (the largest expense), plus distribution, technology/data and G&A.
- **Operating leverage**: costs are largely fixed in the short run, so rising markets (higher AUM) drop straight through to margins, and falling markets hurt margins disproportionately.` },

  { id: 'am-02', t: 'am', q: `What drives changes in AUM? Walk through an AUM roll-forward.`, a: `**Ending AUM = beginning AUM + net flows + market appreciation (± FX, acquisitions/dispositions).**
- **Net flows** = gross inflows − outflows (redemptions). **Organic growth rate** = net flows ÷ beginning AUM. It's the key valuation metric because management controls it (unlike markets).
- Example: beginning AUM $500B; inflows $60B, outflows $45B → net flows +$15B; market appreciation +$35B → **ending AUM $550B**.
- Organic growth = 15 ÷ 500 = **3.0%**. Total AUM growth is 10%, of which 7 points came from markets.
- Revenue follows **average** AUM, so the timing of flows and market moves within the year matters.` },

  { id: 'am-03', t: 'am', q: `What are the key metrics for a traditional asset manager?`, a: `- **AUM and mix**: equity, fixed income, multi-asset, alternatives, money market; active vs. passive. Mix drives the fee rate and market sensitivity.
- **Net flows / organic growth**: the market's #1 focus.
- **Fee rate (bps)** = management fees ÷ average AUM. Watch for compression from mix shift and price cuts.
- **Operating margin** (adjusted): roughly 30–45% for scaled managers.
- **Investment performance**: % of AUM beating its benchmark or peers over 1, 3 and 5 years. It leads future flows.
- **Comp ratio** = compensation ÷ revenue.
- Capital return (dividends, buybacks) and seed/co-investment capital.` },

  { id: 'am-04', t: 'am', q: `How do you value a traditional asset manager?`, a: `**Mostly P/E and EV/EBITDA, cross-checked with a DCF and transaction metrics.**
- **P/E (forward)** is the most common; **EV/EBITDA** for leveraged or M&A situations.
- **EV/AUM (% of AUM)** is a rough transaction cross-check. It varies hugely with fee rate and margin (a passive dollar is worth far less than an alternatives dollar), so normalize for revenue yield.
- Multiples are driven by **organic growth**, margin, fee-rate stability and mix. Active managers in persistent outflows trade at low multiples. Managers with organic growth, scaled passive platforms or big alternatives businesses trade higher.
- A DCF/DDM works because cash flows are fairly predictable and capital needs are low, but the output is very sensitive to market-return assumptions.` },

  { id: 'am-05', t: 'am', q: `Active vs. passive management — what are the industry dynamics?`, a: `**A long-running shift from active mutual funds to low-cost passive products (index funds, ETFs).**
- US passive fund assets overtook active around the start of 2024 (per Morningstar).
- Consequences: **fee compression**, scale advantages for the biggest players (BlackRock/iShares, Vanguard, State Street) and outflows at many traditional active managers.
- How active managers are responding: launching **active ETFs**, SMAs and model portfolios; moving into **alternatives and private markets** (higher fees, stickier capital); cutting costs; and **consolidating** through scale M&A.
- Interview angle: the "barbell." Growth sits at both ends (cheap passive beta and high-fee alts/solutions), squeezing traditional active managers in the middle.` },

  { id: 'am-06', t: 'am', q: `How do alternative asset managers make money?`, a: `**Alts earn stable management fees plus volatile performance income.**
- **Management fees**: ~1–2% on committed or invested (fee-paying) capital, with lower rates on large credit, infrastructure and insurance mandates.
- **Carried interest**: typically ~20% of fund profits above a hurdle (a preferred return, often 8%), realized as investments are exited.
- **Incentive fees** on perpetual/evergreen vehicles (e.g., non-traded REITs, BDCs), often paid quarterly or annually.
- **Transaction, monitoring and capital markets fees**, plus returns on balance-sheet/GP investments.
- Key metrics: fee-paying AUM, fundraising, **dry powder**, deployment, **perpetual capital %**, FRE, DE, realizations and net accrued performance revenue.` },

  { id: 'am-07', t: 'am', q: `What are FRE and DE, and why are they valued differently?`, a: `**FRE (fee-related earnings)** = management fees (+ fee-related performance revenues from perpetual vehicles + transaction/advisory fees) − the compensation and operating expenses tied to them. Carry is excluded.

**DE (distributable earnings)** = FRE + realized net performance revenues (carry) + realized principal investment income − interest and taxes. It's the basis for dividends.
- FRE is recurring and contractual, so it gets **high multiples** (often 20x+ in recent years; verify current).
- Net realized carry is lumpy and market-dependent, so it gets a much **lower multiple** (roughly high single digits to ~10x).
- Sum-of-the-parts: value FRE and carry separately, then add balance-sheet investments.
- Why it matters: alts have pushed to grow FRE (perpetual capital, credit, insurance, wealth) to earn a higher valuation.` },

  { id: 'am-08', t: 'am', q: `AUM vs. fee-paying AUM — what's the difference?`, a: `- **AUM**: total assets managed. It can include uncalled commitments, fund-level leverage, NAV, co-investments and GP commitments, and definitions vary by firm.
- **Fee-paying AUM (FPAUM)**: the capital management fees are actually charged on. For a PE fund that's committed capital during the investment period, then often invested capital or NAV afterward.
- **Dry powder**: committed capital not yet invested. "Shadow AUM" = committed capital that will start paying fees once it's deployed, a source of future fee growth.
- Management fee revenue ≈ FPAUM × average fee rate, so FPAUM growth is what drives FRE.` },

  { id: 'am-09', t: 'am', q: `What is perpetual capital and why do investors value it?`, a: `**Capital with no fixed end date. It never has to be returned and raised again.**
- Examples: insurance company general accounts managed under long-term agreements, traded and non-traded BDCs and REITs, evergreen/semi-liquid wealth vehicles, permanent capital vehicles.
- Compare drawdown funds, which have ~10-year lives and need constant fundraising.
- **Why investors value it**: management fees are more predictable and last longer, so FRE gets a higher multiple and fundraising risk is lower.
- Caveat: "perpetual" retail vehicles still have **redemption** mechanics (quarterly limits/gates), so liquidity mismatches matter in stress (e.g., redemption limits at large non-traded REITs in 2022–23).` },

  { id: 'am-10', t: 'am', q: `Why have alternative managers grown faster than traditional managers?`, a: `- **Institutional allocations shifting** to private markets for returns and diversification (pensions, endowments, sovereign wealth funds).
- **The private credit boom**: banks pulled back under post-GFC regulation, and direct lenders filled the gap.
- **Insurance balance sheets**: alts manage (or own) annuity insurers' general accounts, a large, permanent capital base (Apollo/Athene, KKR/Global Atlantic).
- **The wealth/retail channel**: semi-liquid evergreen funds for high-net-worth investors, plus a push into 401(k)s (an Aug 2025 executive order directed regulators to ease access to alternatives in defined-contribution plans).
- **Infrastructure, the energy transition and AI data centers** all need huge amounts of private capital.
- Traditional managers responded by **buying alternatives capabilities**: BlackRock acquired GIP (~$12.5B, announced Jan 2024) and HPS (~$12B, announced Dec 2024).` },

  { id: 'am-11', t: 'am', q: `How do wealth managers and brokerages make money?`, a: `**Asset-based fees + net interest income on client cash + transaction revenue.**
- **Asset-based / advisory fees**: a % of client assets in fee-based accounts (often ~1% for full-service advice, tiered down for larger accounts). Grows with markets and net new assets.
- **Net interest income**: on client cash swept into the firm's bank, margin loans, securities-based lending and mortgages. Very **rate-sensitive** (a big tailwind in 2022–23).
- **Transactional revenue**: commissions (zero for most online equity trades since 2019), order flow, new-issue distribution.
- Other: fund distribution and recordkeeping fees.
- Players: wirehouses (Morgan Stanley, Merrill/BofA, Wells Fargo, UBS), online brokers/custodians (Schwab, Fidelity), independent broker-dealers and RIAs (many owned by PE-backed aggregators).
- Key metrics: client assets, net new assets, fee-based asset %, advisor headcount and productivity, pretax margin.` },

  { id: 'am-12', t: 'am', q: `What is "cash sorting"?`, a: `**Clients moving low-yielding cash into higher-yielding alternatives when rates rise.**
- Brokers and banks earn a spread on client cash swept into bank deposits at low rates. When rates jumped in 2022–23, clients moved that cash into money market funds, CDs and Treasuries.
- Effect: sweep balances fell, cutting NII and creating funding pressure. Firms backfilled with more expensive funding (e.g., Schwab used FHLB advances and brokered CDs), squeezing margins until the sorting slowed.
- It's the same dynamic as bank **deposit migration** (noninterest-bearing → interest-bearing) and rising deposit betas.
- Rate cuts reverse some of it: clients have less reason to move cash, but the firm earns less on the sweep cash that stays.` },

  { id: 'am-13', t: 'am', q: `How do you value a wealth manager or RIA?`, a: `**Cash-flow multiples, driven by organic growth and retention.**
- **EV/EBITDA** is standard for RIAs and aggregators. Scale, organic growth and margin earn premium multiples, and PE has been a very active buyer.
- **P/E** for public wealth platforms and brokers; sum-of-the-parts when there's a bank or asset management arm.
- Small practices are sometimes priced on revenue multiples or % of AUM.
- Key diligence: organic vs. market-driven growth, client and advisor retention, fee-rate stability, client demographics (aging clients), margins, and deal structure (earnouts, equity rollover to keep advisors).
- For brokers with bank sweep programs, rate sensitivity of NII is a big swing factor.` },

  { id: 'am-14', t: 'am', q: `How does a market decline hit an asset manager's earnings? Show the operating leverage.`, a: `**Revenue falls roughly in line with AUM. Profit falls faster because many costs are fixed.**
- Example: revenue $100; variable comp at 30% of revenue ($30); fixed costs $35 → operating income **$35** (35% margin).
- Markets fall 20% → AUM and revenue ≈ $80. Variable comp $24 + fixed costs $35 → operating income **$21** (26% margin).
- Revenue −20%, operating income **−40%**: 2x operating leverage.
- Equity-heavy managers are the most exposed; fixed income and money market managers less so. Mitigants: flexible comp, cost cuts, sticky alternatives fees, buybacks.` },

  // ─────────────────── Fintech, Payments & Specialty Finance ───────────────────
  { id: 'fin-01', t: 'fin', q: `Walk me through a card transaction (the four-party model).`, a: `**Five players: cardholder, merchant, acquirer, card network, issuer.**
1. The cardholder pays the merchant with a card.
2. The merchant's **acquirer** (merchant processor/bank) sends the authorization request through the **network** (Visa/Mastercard).
3. The **issuer** (the cardholder's bank) approves or declines based on available credit/funds and fraud checks.
4. **Clearing & settlement** (usually next day): the issuer pays the acquirer the purchase amount **minus interchange**, and the acquirer pays the merchant **minus the merchant discount rate** (interchange + network fees + acquirer markup).
5. The cardholder repays the issuer (or the debit account is drawn).
- **Three-party (closed-loop)** networks like American Express and Discover act as both issuer and network (and often acquirer).
- Who earns what: the issuer earns interchange (+ interest and fees); the network earns per-transaction and volume fees with no credit risk; the acquirer earns its markup and processing fees.` },

  { id: 'fin-02', t: 'fin', q: `What is interchange and who earns it?`, a: `**Interchange = the fee the merchant's acquirer pays the cardholder's issuer on each card transaction.** The networks (Visa/Mastercard) set it, not the issuer.
- US credit interchange is typically ~1.5–2.5% (premium rewards cards at the high end). It funds rewards, fraud losses and the interest-free grace period.
- **Debit** interchange is lower. For issuers with ≥ $10B in assets, it's capped by the **Durbin Amendment** (Reg II: 21¢ + 0.05% of the transaction + a 1¢ fraud-prevention adjustment).
- Interchange is the biggest piece of the merchant discount rate, which makes it the target of merchant lawsuits and legislation (e.g., the proposed Credit Card Competition Act).
- Networks charge their own assessment/scheme fees on top.` },

  { id: 'fin-03', t: 'fin', q: `What are the key metrics for payments companies, and how are they valued?`, a: `- **TPV (total payment volume)**: dollar volume processed.
- **Take rate** = net revenue ÷ TPV. It ranges from a few basis points on large-enterprise processing to well over 1% (gross) for small-merchant platforms.
- **Net revenue** = gross revenue − pass-through costs (interchange, network fees). This is the right "revenue" to compare across companies.
- Transaction count, revenue growth, EBITDA margin, **cross-border volume** (high margin for networks), merchant retention, and attach rates for software and value-added services.
- **Valuation**: EV/EBITDA and P/E for mature players; EV/net revenue or EV/gross profit for high-growth fintechs, with the Rule of 40 as a quality screen. They're capital-light, so P/BV doesn't apply.` },

  { id: 'fin-04', t: 'fin', q: `How do Visa and Mastercard make money, and why do they trade at premium multiples?`, a: `**They run the networks and don't lend, so they take no credit risk.**
- Revenue: **service fees** (based on payment volume), **data processing fees** (per transaction), **international transaction fees** (cross-border, the highest margin) and **value-added services** (fraud/risk tools, data, tokenization, open banking).
- They pay **client incentives** to issuers and merchants to win volume (booked as contra-revenue).
- Why premium multiples: a near-duopoly with strong **network effects**, very high operating margins (roughly 55–65%+), low capex, the secular shift from cash and checks to cards and digital, growth in cross-border travel and e-commerce, and huge FCF and buybacks.
- Risks: regulation of interchange and routing (e.g., the Credit Card Competition Act), litigation, real-time/account-to-account payments, stablecoins, big-tech wallets.` },

  { id: 'fin-05', t: 'fin', q: `Why did Capital One acquire Discover?`, a: `**Vertical integration (owning a payments network), plus scale in cards.**
- **Deal**: ~$35.3B, all-stock (1.0192 COF shares per DFS share). Announced Feb 2024, approved by the Fed and OCC in April 2025, closed May 2025.
- **Network**: Discover, PULSE (debit) and Diners Club let Capital One move debit and, over time, some credit volume off Visa/Mastercard and keep the network economics in-house.
- **Scale**: created the largest US credit card issuer by loan balances.
- **Synergies**: ~$2.7B by 2027 (~$1.5B cost + ~$1.2B network).
- **Interview angles**: network economics and network effects (can the #4 network win merchant acceptance?), the regulatory approval climate, the all-stock structure and pro forma capital, and Discover's pre-deal compliance issues.` },

  { id: 'fin-06', t: 'fin', q: `How do you analyze a credit card issuer?`, a: `**Card lending is high-yield and high-loss, so focus on risk-adjusted returns.**
- **Loan growth and purchase volume**; mix of revolvers vs. transactors; prime vs. subprime.
- **Yield / NIM**: very high (card yields are often high-teens to 20%+).
- **Net charge-off rate**: typically ~3–6% in normal conditions (higher for subprime and private label). Delinquency trends lead NCOs.
- **Risk-adjusted margin** = (NII + fees − NCOs) ÷ average loans. Example: yield 20%, cost of funds 4%, fees 3% → revenue margin 19%; NCOs 4% → **RAM 15%**.
- **Reserves**: CECL books lifetime expected losses up front, so card allowances are high (often ~6–8%+ of loans).
- Also: efficiency ratio, marketing spend, rewards costs, partnership/co-brand terms and ROTCE.
- Valuation: P/E and P/TBV vs. ROTCE, like a bank.` },

  { id: 'fin-07', t: 'fin', q: `What is a BDC and how is it valued?`, a: `**A Business Development Company is a closed-end fund registered with the SEC (exchange-traded or non-traded) that lends mainly to private middle-market companies.**
- Taxed as a RIC, it must distribute **≥ 90% of taxable income**, so dividend yields are high.
- Leverage is capped at **150% asset coverage (~2:1 debt/equity)**, up from 1:1 before the Small Business Credit Availability Act (2018).
- Most are externally managed by an alternatives manager (e.g., Ares Capital, Blackstone's BCRED, Blue Owl's BDCs), which earns a base management fee + incentive fee.
- **Valuation**: **P/NAV** and dividend yield. Key metrics: **net investment income (NII) per share** vs. the dividend (coverage), NAV per share trend, **non-accruals**, share of PIK income, portfolio yield, leverage and fee structure.
- Rate-sensitive: the loans are mostly floating-rate, so earnings fall when rates are cut.` },

  { id: 'fin-08', t: 'fin', q: `What is private credit and why is it relevant to FIG?`, a: `**Non-bank lending: mainly direct loans to middle-market and sponsor-backed companies, plus asset-based finance.**
- Size: roughly $1.5–2T globally and growing (verify current). Managed by alts (Apollo, Ares, Blackstone, Blue Owl, HPS/BlackRock and others) and funded by pensions, insurers and wealth investors (BDCs, interval funds).
- Why it grew: post-GFC capital rules made leveraged lending more expensive for banks, and borrowers value speed, certainty and flexibility.
- **Banks now partner as well as compete**: e.g., the Citi–Apollo $25B private credit program (2024) and Wells Fargo–Centerbridge direct lending venture (2023), plus forward-flow agreements, loan sales, **synthetic risk transfers (SRTs)** and lending to private credit funds (subscription lines, back leverage).
- Risks: opacity, valuation marks, PIK income, rising defaults, concentration and bank–NBFI interconnectedness.` },

  { id: 'fin-09', t: 'fin', q: `What are the main specialty finance subsectors?`, a: `- **Consumer finance**: credit cards, personal/installment loans, auto finance, BNPL, student lending.
- **Commercial finance**: equipment leasing, factoring, SBA lending, fleet/transportation finance.
- **Mortgage**: originators, servicers (MSRs), mortgage insurers, mortgage REITs.
- **Specialty lenders**: BDCs and other private credit vehicles; asset-based lenders.
- **Market structure**: exchanges, clearinghouses, brokers, data/index providers.
- **Payments & fintech**: networks, merchant acquirers, processors, neobanks and lending platforms.
- **Trust & custody / securities services**.
- Common thread: the funding model (deposits vs. warehouse lines/ABS/unsecured debt) and credit performance drive the economics and the valuation.` },

  { id: 'fin-10', t: 'fin', q: `What is an MSR and how do interest rates affect its value?`, a: `**A mortgage servicing right is the right to service a pool of mortgages for a fee** (≈ 25 bps per year on conventional agency loans), plus float on escrow balances and ancillary fees.
- It's recorded as an asset (often at fair value). Its value = PV of expected servicing cash flows.
- **Rates ↑ → MSR value ↑**: fewer refinancings, so loans prepay more slowly and servicing cash flows last longer.
- **Rates ↓ → MSR value ↓**: a refi wave speeds up prepayments.
- **Natural hedge** for mortgage companies: origination volume and gain-on-sale margins rise when rates fall, offsetting MSR write-downs. Example: Rocket's acquisition of Mr. Cooper (announced 2025) paired a big originator with the largest servicer (verify status).
- Bank capital: MSRs above certain thresholds are deducted from CET1.` },

  { id: 'fin-11', t: 'fin', q: `How are fintech lenders and neobanks different from banks, and how are they valued?`, a: `**The big difference is funding.**
- Many fintechs don't take deposits. They rely on **partner banks** (banking-as-a-service), warehouse lines, ABS securitization and **forward-flow** sales to investors. That makes funding costs higher and more cyclical, and liquidity can vanish in stress.
- Some got bank charters to access cheap deposits: SoFi (acquired Golden Pacific Bancorp, 2022) and LendingClub (acquired Radius Bank, 2021).
- Valuation: EV/revenue or EV/gross profit at the early stage; P/E and P/TBV vs. ROTCE once they're profitable and bank-like.
- Key metrics: originations, revenue per user, customer acquisition cost, unit economics, credit performance through the cycle, funding cost, regulatory standing.
- Watch-outs: consent orders at BaaS partner banks and middleware failures (e.g., the Synapse collapse in 2024).` },

  { id: 'fin-12', t: 'fin', q: `What is a stablecoin, and what does the GENIUS Act mean for banks and payments?`, a: `**A stablecoin is a crypto token designed to hold a fixed value (usually $1), backed by reserve assets** (cash, T-bills, repo). The largest are USDT (Tether) and USDC (Circle).
- **GENIUS Act (signed July 2025)**: the first US federal framework for payment stablecoins.
  - 1:1 reserves in high-quality liquid assets (cash, short-dated T-bills, etc.), with monthly reserve disclosures.
  - Issuers must be permitted entities: bank subsidiaries or approved/licensed nonbanks, with state regimes available for smaller issuers.
  - Issuers **can't pay interest or yield** to holders, and holders get priority in an insolvency.
- **Implications**: faster, cheaper cross-border and 24/7 settlement; possible **deposit disintermediation** for banks; new demand for T-bills; banks exploring their own tokens and tokenized deposits; networks and processors adding stablecoin settlement.
- Interview angle: is it a threat or an opportunity for banks? Deposits could leave, but there are new fee businesses (custody, reserve management, issuance).` },

  { id: 'fin-13', t: 'fin', q: `What do trust and custody banks do, and how do they make money?`, a: `**They hold and service assets for institutional investors.** The main players are BNY, State Street and Northern Trust; JPMorgan and Citi also have large securities services businesses.
- **Asset servicing fees**: custody, fund accounting/administration and transfer agency, charged in basis points on **assets under custody/administration (AUC/A)**, which run to tens of trillions of dollars at the largest firms.
- **Asset management fees** (e.g., State Street Global Advisors' ETFs).
- **FX trading and securities lending** revenue.
- **NII** on large operational client deposits (low-cost, sticky, rate-sensitive).
- Characteristics: mostly fee revenue, low credit risk, high operating leverage. BNY and State Street are US G-SIBs.
- Valuation: mainly P/E. Key metrics: AUC/A growth, fee growth, pretax margin, operating leverage, deposit trends.` },

  { id: 'fin-14', t: 'fin', q: `What is securitization and why do lenders use it?`, a: `**Pooling loans (mortgages, auto loans, card receivables) into a bankruptcy-remote SPV that issues asset-backed securities (ABS/MBS).**
- **Why lenders use it**: funding (especially for non-banks), match-funding the asset duration, potential capital relief/deconsolidation if the risk is truly transferred, a broader investor base, gain-on-sale.
- **Tranching**: senior (AAA) → mezzanine → equity/residual. Losses hit the bottom tranche first.
- **Credit enhancement**: subordination, overcollateralization, excess spread, reserve accounts.
- **Risk retention**: sponsors generally must keep 5% of the credit risk (Dodd-Frank).
- Bank angle: **synthetic risk transfers (SRTs)** let a bank keep the loans on its balance sheet but buy credit protection on a tranche to cut RWA.` },

  { id: 'fin-15', t: 'fin', q: `How do exchanges make money and how are they valued?`, a: `**Exchanges (CME, ICE, Nasdaq, Cboe) run trading venues, clearinghouses and data businesses.**
- **Transaction and clearing fees**: driven by volume. Volatility, rate uncertainty and macro events boost volumes, especially in futures and options.
- **Market data and connectivity**: recurring subscription revenue at high margins.
- **Listings** fees; **index licensing** (e.g., S&P Dow Jones Indices, majority-owned by S&P Global with CME as minority owner; the Nasdaq-100); technology/software (e.g., Nasdaq's fintech business, ICE's mortgage technology).
- Characteristics: network effects (liquidity attracts more liquidity), high margins, low capital needs.
- Valuation: **P/E and EV/EBITDA**. Recurring data, index and software revenue earns a premium multiple over volume-driven revenue.` },

  { id: 'fin-16', t: 'fin', q: `What is BNPL and how do BNPL providers make money?`, a: `**Buy now, pay later = point-of-sale installment loans.** Usually "pay in 4" interest-free over ~6 weeks, plus longer-term interest-bearing loans.
- **Revenue**: merchant discount fees (higher than card fees, since merchants are paying for conversion and bigger baskets), interest on longer loans, late fees (at some providers), interchange on virtual cards, affiliate/advertising revenue.
- **Funding**: warehouse lines, ABS, forward-flow sales to investors, some bank partnerships.
- Players: Affirm, Klarna, Afterpay (Block), PayPal Pay Later.
- Key metrics: GMV, revenue as % of GMV, **revenue less transaction costs** (funding, credit losses, processing), delinquencies.
- Risks: credit (though short loan durations let providers adjust underwriting quickly), funding costs, consumer-credit regulation, and "loan stacking" across providers.` },

  { id: 'fin-17', t: 'fin', q: `What were the Global Payments / Worldpay transactions (2025)?`, a: `**Announced April 2025: a three-way portfolio swap that reshaped merchant acquiring and issuer processing.**
- Global Payments agreed to acquire **Worldpay** for ~$24.25B from GTCR and FIS.
- At the same time it agreed to sell its **Issuer Solutions** business to FIS for ~$13.5B, and FIS exited its remaining Worldpay stake.
- **Rationale**: Global Payments becomes a pure-play merchant solutions company with more scale (volume, distribution, e-commerce and cross-border capabilities). FIS doubles down on issuer and banking technology. GTCR monetizes its 2023 Worldpay carve-out investment.
- **Interview angles**: scale economics in acquiring, portfolio simplification vs. the conglomerate discount, financing and leverage, the sponsor exit, and competition from Stripe, Adyen and Fiserv's Clover.` },

  // ───────────────────────── Rates, Macro & Markets ─────────────────────────
  { id: 'mkt-01', t: 'mkt', q: `How do changes in the Fed funds rate flow through to bank earnings?`, a: `**It depends on how fast assets reprice vs. liabilities.**
- **Floating-rate loans** (SOFR/prime-based C&I, cards, HELOCs) reprice almost immediately.
- **Deposits** reprice with a lag and only partially. That pass-through is the **deposit beta**.
- **Fixed-rate assets** (securities, mortgages, auto loans) reprice slowly as they mature and the cash is reinvested at new rates (the "fixed-asset repricing" tailwind).
- **Hedges** (receive-fixed swaps) and the shape of the yield curve change the result.
- Rates up → asset-sensitive banks' NII rises at first, then deposit betas catch up. Rates down → floating assets reprice down faster than deposit costs at first, but lower deposit costs, fixed-asset repricing and better loan demand and credit help over time.
- Also: AOCI and TBV move inversely with rates, and fee lines (mortgage, capital markets) respond too.` },

  { id: 'mkt-02', t: 'mkt', q: `What does the shape of the yield curve mean for banks?`, a: `**Banks borrow short (deposits) and lend/invest long, so a steeper curve generally helps.**
- **Steep curve**: a wider gap between asset yields (tied to longer rates) and funding costs (tied to short rates) → room for NIM expansion.
- **Flat/inverted curve** (as for much of 2022–24): squeezes NIMs, intensifies deposit competition and has historically signaled recession.
- **Bear steepening** (long rates rise more): good for reinvestment yields, but hurts AOCI and mortgage activity.
- **Bull steepening** (short rates fall more, e.g., Fed cuts): lowers funding costs and lets AOCI recover. Typically good for banks, especially liability-sensitive ones.
- The curve to watch is the **2s10s spread** (10-year minus 2-year Treasury yield).` },

  { id: 'mkt-03', t: 'mkt', q: `What is SOFR and why did it replace LIBOR?`, a: `**SOFR (Secured Overnight Financing Rate)** = the broad cost of borrowing cash overnight against US Treasury collateral in the repo market. The NY Fed publishes it daily.
- It's **transaction-based** (well over $1 trillion of daily volume), so it's hard to manipulate, and it's nearly risk-free because the borrowing is secured.
- **LIBOR** was an unsecured interbank rate built from bank submissions rather than transactions, which led to manipulation scandals on a thin underlying market. USD LIBOR panel publication ended **June 30, 2023**.
- Practical differences: SOFR is overnight and secured (no bank credit component), so loans use **Term SOFR** or compounded SOFR, sometimes with a credit spread adjustment.
- Bank angle: SOFR-based floating-rate loans make banks asset-sensitive.` },

  { id: 'mkt-04', t: 'mkt', q: `What are duration and convexity, and why do banks and insurers care?`, a: `**Duration = how sensitive a bond's price is to interest rates.** It's also the weighted-average time to receive the bond's cash flows.
- %Δ price ≈ −modified duration × Δ yield. A bond with duration 6 falls ~6% for +100 bp.
- **Convexity** = the curvature of that relationship. For ordinary bonds, prices rise more when yields fall than they drop when yields rise (positive convexity).
- **MBS have negative convexity**: prepayments speed up when rates fall (capping price gains) and slow when rates rise (duration extends just as prices fall).
- **Why it matters**: banks and insurers manage the **duration gap** between assets and liabilities. SVB funded long-duration securities with flighty deposits, and the mismatch proved fatal when rates rose. Insurers match long liabilities with long bonds.` },

  { id: 'mkt-05', t: 'mkt', q: `The 10-year yield rises 100 bp. What happens to a bond with modified duration 6 and convexity 50?`, a: `**Price falls ≈ 5.75%.**
- Duration effect: −6 × 1.00% = **−6.0%**.
- Convexity adjustment: + ½ × 50 × (0.01)² = **+0.25%**.
- Total ≈ −6.0% + 0.25% = **−5.75%**.
- If yields **fell** 100 bp: +6.0% + 0.25% = **+6.25%**. Convexity helps in both directions.
- Dollar version: **DV01** = modified duration × price × 0.0001. For $100M of bonds with duration 6, DV01 ≈ $60K per basis point, so +100 bp ≈ −$6M before convexity.` },

  { id: 'mkt-06', t: 'mkt', adv: true, q: `What is EVE sensitivity vs. NII sensitivity?`, a: `**Two lenses on interest rate risk.**
- **NII sensitivity (earnings view)**: the change in projected 12-month (or 24-month) net interest income under rate shocks or ramps (e.g., ±100/200 bp), usually on a static or modeled balance sheet.
- **EVE (economic value of equity) sensitivity (value view)**: the change in PV of assets − PV of liabilities under rate shocks. It captures repricing risk over the full life of the balance sheet.
- The two can disagree. A bank can look asset-sensitive on NII (lots of floating-rate loans) while its EVE falls as rates rise (long fixed-rate securities and mortgages).
- **Deposit assumptions drive both**: assumed deposit betas and the modeled life/duration of non-maturity deposits. The 2023 failures showed deposits can leave much faster than models assumed.
- Banks disclose both in their 10-Ks/10-Qs, and regulators monitor them (IRRBB).` },

  { id: 'mkt-07', t: 'mkt', q: `What is a credit spread and what drives it?`, a: `**Credit spread = the extra yield over a risk-free benchmark (Treasuries or SOFR swaps) that investors demand for credit and liquidity risk.**
- Drivers: default expectations (economy, earnings, leverage), recovery assumptions, liquidity, supply and demand (issuance, fund flows) and risk appetite.
- Spreads **widen** in stress or on recession fears (e.g., March 2020; regional bank debt in March 2023) and **tighten** in risk-on markets.
- Bank relevance: spreads drive bank funding costs (senior/sub debt, preferreds), loan pricing and competition with private credit, the value of credit-sensitive securities, and CECL forecasts (via the macro outlook).
- Quoted as IG and HY option-adjusted spreads (OAS). Know roughly where spreads sit vs. history before interviews (verify current).` },

  { id: 'mkt-08', t: 'mkt', q: `What is quantitative tightening (QT) and how does it affect banks?`, a: `**QT = the Fed shrinking its balance sheet by letting Treasuries and MBS mature without reinvesting them.** It's the opposite of QE.
- Mechanics: when the Fed's securities mature, the Treasury has to refinance with private buyers, who pay out of bank deposits. **Reserves and deposits drain** from the banking system.
- Bank impact: tighter system liquidity, more deposit competition and higher deposit costs, and money-market stress if reserves get too scarce (e.g., the Sept 2019 repo spike).
- Timeline: QT began June 2022 and was slowed in 2024–25. In Oct 2025 the Fed announced it would end balance-sheet runoff on Dec 1, 2025 (verify current policy).
- Interview angle: liquidity conditions shape the outlook for deposit growth and NIM.` },

  { id: 'mkt-09', t: 'mkt', q: `What are the KBW Bank Index (BKX) and the KRE ETF?`, a: `**The standard gauges of bank stock sentiment.**
- **BKX (KBW Nasdaq Bank Index)**: a modified market-cap-weighted index of 24 leading US banks, both money centers and large regionals (JPMorgan, BofA, Citi, Wells Fargo, etc.). The biggest banks dominate it.
- **KRE (SPDR S&P Regional Banking ETF)**: a roughly equal-weighted basket of regional and community banks, so it's more sensitive to smaller-bank issues (CRE, deposits, credit).
- Typical uses: "bank stocks are up X% YTD," or large vs. regional bank performance (e.g., KRE fell sharply in March 2023 while the big banks held up better).
- Interview prep: know the approximate YTD performance of BKX, KRE and the S&P 500 (verify current).` },

  { id: 'mkt-10', t: 'mkt', q: `How would you assess where we are in the credit cycle?`, a: `**Frame it with data across asset classes, then give a view.**
- **Consumer**: card and auto delinquencies and charge-offs vs. pre-COVID (2019) levels. They normalized upward from historic lows in 2021–22. Watch subprime and younger borrowers, and student loan repayments.
- **Commercial real estate**: office is the weak spot (high vacancies, lower values, a maturity wall); multifamily is mixed. Banks have been building reserves and extending loans.
- **Corporate**: default rates in leveraged loans and private credit, rising PIK usage, ratings migration.
- **Labor market**: the unemployment rate and jobless claims, the biggest driver of consumer credit.
- **Bank metrics**: NCO ratio, NPAs, criticized loans, reserve builds vs. releases.
- Close with a view, e.g., "normalizing, not deteriorating sharply, with pockets of stress in office CRE and lower-income consumers" (update with current data).` },

  { id: 'mkt-11', t: 'mkt', q: `What happened to regional banks in 2023, and what were the lessons?`, a: `**Three of the four largest US bank failures ever (by assets) happened within about two months: Silicon Valley Bank (March 10), Signature (March 12) and First Republic (May 1).**
- Common threads: **heavily uninsured, concentrated deposits**; large unrealized losses on long-duration securities and fixed-rate loans after rapid rate hikes; bank runs moving at social-media speed; weak risk management and supervision.
- Responses: a systemic risk exception protected all SVB and Signature deposits; the **Bank Term Funding Program** lent against securities at par; JPMorgan bought First Republic in an FDIC-run auction; an FDIC special assessment refilled the Deposit Insurance Fund.
- Lasting effects: higher deposit costs and liquidity buffers, more focus on uninsured deposits and discount-window readiness, proposals to extend long-term debt requirements and AOCI recognition to $100B+ banks, and a stronger case for scale through M&A.` },

  { id: 'mkt-12', t: 'mkt', q: `How would a recession affect a bank vs. an insurer vs. an asset manager?`, a: `- **Bank**: credit losses rise, and under CECL reserves build early (a provision spike). Loan growth slows. The Fed likely cuts, which pressures NIM at asset-sensitive banks but lets AOCI and TBV recover. Fee income (IB, cards, wealth) softens. Capital and PPNR determine how well the bank holds up.
- **P&C insurer**: relatively defensive (insurance is a necessity, and some lines are mandatory), but exposure units (payrolls, miles driven, construction) shrink. Investment portfolios take some credit losses, and reinvestment yields fall over time.
- **Life insurer**: credit risk in private credit and structured portfolios; falling equity markets hit fee income and variable annuity guarantees; lower rates squeeze spreads.
- **Asset manager**: AUM falls with markets, so revenue falls and operating leverage compresses margins. Money flows out of risk assets and into money market funds. Alts realize fewer exits, so carry drops.` },

  { id: 'mkt-13', t: 'mkt', adv: true, q: `How does the Fed actually control short-term rates today (IORB, ON RRP, discount rate)?`, a: `**The Fed runs an "ample reserves" floor system: it steers fed funds with the rates it administers rather than by changing the quantity of reserves.**
- **Fed funds target range** (25 bp wide): the policy rate the FOMC sets.
- **IORB (interest on reserve balances)**: the rate the Fed pays banks on their reserves, set within the range near the top. Banks won't lend reserves for less, so IORB anchors fed funds.
- **ON RRP (overnight reverse repo)**: the rate the Fed pays money funds and others on overnight cash, set at or near the bottom of the range. It's a floor under money-market rates.
- **Discount rate (primary credit)**: what banks pay to borrow at the discount window, set at the top of the range as a liquidity backstop.
- **Standing repo facility**: lets primary dealers and banks borrow against Treasuries, putting a ceiling on repo rates.
- Bank angle: reserves earning IORB are a risk-free asset and a key source of NII for banks with excess liquidity.` },

  { id: 'mkt-14', t: 'mkt', q: `What market numbers should you have ready before a FIG interview?`, a: `**Have a one-line, up-to-date answer for each. Refresh weekly and save them in Market Notes.**
- Fed funds target range and the market's expected path (next meeting, cuts or hikes priced in).
- 2-year and 10-year Treasury yields, and the 2s10s slope.
- S&P 500 level and YTD; **BKX/KRE** YTD (banks vs. the market).
- IG and HY credit spreads.
- Latest CPI/core PCE and the unemployment rate.
- 30-year fixed mortgage rate (drives mortgage banking and MSRs).
- Latest big-bank earnings themes: NII guidance, IB fees, credit (NCOs), capital return.
- 2–3 recent FIG deals and one regulatory development (capital rules, stress tests, M&A approvals).
- Delivery tip: give the number plus one sentence on what it means for banks.` },

  // ───────────────────── Walk Me Through / interview stories ─────────────────────
  { id: 'wmt-01', t: 'wmt', q: `Why FIG?`, a: `**Structure: intellectual interest → market opportunity → breadth → personal link → why here.** Keep it to 60–90 seconds.
1. **Intellectual**: financial institutions are the plumbing of the economy. Their business models run on the balance sheet, regulation and interest rates, so the analytics are different (TBV, ROTCE, capital ratios, DDMs, combined ratios). I want to build that specialized toolkit.
2. **Market activity**: FIG is one of the busiest areas in banking: regional bank consolidation, insurance brokerage roll-ups, alternative managers buying into credit, insurance and wealth, payments portfolio reshaping, and constant capital markets work (bank capital, debt, preferreds).
3. **Breadth**: banks, insurers, asset managers and fintech. You learn many business models while building deep expertise.
4. **Personal link**: tie it to your own background (prior role, a deal or company you followed, MBA coursework, a specific experience). This is the most important part, so make it specific.
5. **Close**: why this firm's FIG group (people you've met, recent deals, the platform).
- Avoid "I like finance" or rate-cycle clichés with no personal connection.` },

  { id: 'wmt-02', t: 'wmt', q: `Pitch me a FIG deal you've followed. (Structure + example)`, a: `**Structure (≈ 90 seconds):**
1. **Deal**: parties, size, consideration, date, status.
2. **Strategic rationale**: why now, why this target.
3. **Financials**: price paid (P/TBV, P/E), EPS accretion, TBV dilution and earnback, cost saves, pro forma capital.
4. **Market reaction**, and why.
5. **Your view**: risks, what you'd watch, who might do something similar.

## Example: Fifth Third / Comerica (announced Oct 2025)
- ~$10.9B all-stock (1.8663 FITB shares per CMA share). Creates roughly the 9th-largest US bank, with ~$288B of assets (verify status and terms).
- Rationale: speeds up Fifth Third's push into high-growth Texas, Southwest and Southeast markets; adds Comerica's middle-market commercial and treasury management franchise; builds scale for technology and payments investment.
- Discussion points: crossing $250B in assets (Category III under the tailoring rules), cost saves from overlapping functions, the value of Comerica's deposit franchise, an all-stock structure that preserves capital, and how faster regulatory approvals in 2025 made larger regional deals possible.` },

  { id: 'wmt-03', t: 'wmt', q: `How would you value a bank? (60-second answer)`, a: `**"Debt and interest are operating items for a bank, so I'd value it on an equity basis."**
1. **Trading comps**: P/E on forward EPS and **P/TBV**, benchmarked against ROTCE. A bank earning a ROTCE above its cost of equity deserves a premium to tangible book (justified P/TBV = (ROTCE − g) ÷ (Ke − g)).
2. **Precedent transactions**: P/TBV, P/E and core deposit premium paid in comparable bank deals.
3. **Dividend discount / excess capital model**: project earnings and RWA, hold CET1 at a target ratio (e.g., ~10–11%) and treat everything above it as distributable. Add a terminal value (P/E or P/TBV multiple) and discount at the cost of equity.
- Key drivers to sensitize: ROTCE, growth, cost of equity, target capital ratio, credit costs.
- "No EV/EBITDA or unlevered DCF, because you can't separate a bank's operations from its financing."` },

  { id: 'wmt-04', t: 'wmt', q: `How would you value an insurance company? (60-second answer)`, a: `**"It depends on the business model: risk-taking carriers vs. capital-light brokers."**
- **P&C carriers**: P/BV (book value ex-AOCI) vs. ROE, and P/E on operating EPS. Drivers: underlying combined ratio (accident year ex-cat), premium growth and rate, reserve development, investment yield. EV/EBITDA doesn't work because investment income and float are operating items.
- **Life insurers**: P/BV ex-AOCI vs. operating ROE, P/E, and increasingly **free cash flow/capital generation** (statutory cash available to the holdco). Embedded value/VNB in Europe and Asia.
- **DDM / excess capital**: dividends are constrained by statutory capital and RBC targets, much like a bank's capital-constrained DDM.
- **Brokers**: no balance-sheet risk, so EV/EBITDA(C) and P/E, driven by organic growth and margins.
- Close with the key judgment: reserve adequacy and capital. Book value is only as good as the reserves behind it.` },

  { id: 'wmt-05', t: 'wmt', q: `How would you value an asset manager? (60-second answer)`, a: `**"Asset managers are capital-light, fee-based businesses, so I'd use earnings and cash-flow multiples plus a DCF."**
- **Traditional managers**: P/E and EV/EBITDA vs. peers. Multiples are driven by organic growth (net flows ÷ beginning AUM), operating margin, the fee-rate trend and asset mix. A DCF works because cash flows are predictable and capex is low, but it's sensitive to market-return assumptions.
- **Transaction cross-check**: EV as a % of AUM, but only after adjusting for fee rate and margins.
- **Alternative managers**: sum-of-the-parts. FRE at a high multiple (recurring management fees), net realized carry at a lower multiple, plus balance-sheet investments at book or market value. DE drives the dividend.
- Key diligence: flows and investment performance, fee pressure, key-person risk, share of perpetual capital.` },

  { id: 'wmt-06', t: 'wmt', q: `Pitch me a bank stock. (Structure)`, a: `**Structure: recommendation → thesis → valuation → catalysts → risks.** Keep it to about 2 minutes.
- **Recommendation + one-liner**: "Buy X: an above-peer-returns franchise trading at a below-peer multiple."
- **Thesis (pick the 2–3 points that are true for your bank):**
  - NIM expansion from fixed-rate asset repricing or a strong, low-beta deposit base.
  - Excess capital → buybacks/dividends or M&A optionality.
  - Positive operating leverage; growing fee businesses (wealth, treasury management, capital markets).
  - Clean credit and conservative reserves.
- **Valuation**: P/TBV vs. ROTCE (regression), P/E vs. peers, upside to your price target.
- **Catalysts**: earnings, investor day targets, capital relief, rate moves, a deal closing.
- **Risks and mitigants**: credit (CRE, consumer), rate sensitivity, deposit competition, integration.
- Know the numbers cold: price, P/TBV, P/E, ROTCE, CET1, dividend yield (verify current).` },

  { id: 'wmt-07', t: 'wmt', q: `What's the biggest risk facing banks today?`, a: `**Pick one or two, back them with data, explain how the risk transmits, and offer mitigants.** Options:
- **Commercial real estate (office)**: falling values, a refinancing wall, concentration at regional and community banks.
- **Private credit / non-bank interconnectedness**: banks lending to funds and NBFIs; opacity and correlated stress.
- **Deposit competition and disintermediation**: money funds, high-yield accounts, stablecoins (GENIUS Act framework), tokenized deposits, all pushing up funding costs.
- **Rate volatility**: AOCI and liquidity (the 2023 lessons), NIM uncertainty.
- **Consumer credit normalization**: lower-income borrowers, subprime auto, card delinquencies.
- **Cyber, fraud and operational risk**, including third-party and AI-related risk.
- **Regulatory shifts**: capital rule changes (Basel III endgame re-proposal, eSLR, stress tests) are easing now, and that could reverse.
- Tip: interviewers care about your **reasoning**, not a "right" answer. State your view and how you'd monitor it (verify current data).` },

  { id: 'wmt-08', t: 'wmt', q: `How would a 100 bp Fed cut affect a bank, an insurer and an asset manager?`, a: `- **Bank**: asset-sensitive banks feel NII pressure first, because floating-rate loans reprice down immediately while deposit costs lag (the "down beta"). Over time that's offset by lower deposit costs, continued fixed-rate asset repricing and hedges. **AOCI recovers, lifting TBV and capital.** Credit improves, and loan demand, mortgage and capital markets activity pick up. A steeper curve (bull steepening) is a plus.
- **Insurer**: reinvestment yields fall, so net investment income grows more slowly and life/annuity spreads get squeezed over time. Unrealized bond gains lift book value. Fixed annuity sales may slow, and P&C carriers need more underwriting margin to hit return targets.
- **Asset manager**: generally positive. Higher asset prices lift AUM and fees; money rotates out of money market funds into risk assets and bonds; alts see better fundraising and exits (more carry). Brokers and wealth managers lose some NII on client cash.` },

  { id: 'wmt-09', t: 'wmt', q: `How are a bank's financial statements different from a typical company's?`, a: `- **Income statement**: no revenue/COGS. Revenue = **net interest income + noninterest (fee) income**. Interest expense is an **operating cost** (deposits are the raw material), so EBITDA and EBIT mean nothing. The **provision for credit losses** is a major, cyclical expense.
- **Balance sheet**: it **is** the business. Loans and securities are funded by deposits, leverage is ~10x+, and equity is a thin layer that regulators require. There's no traditional working capital and little PP&E or capex.
- **Cash flow statement**: less useful, because lending and deposit flows swamp everything else. Analysts focus on capital generation instead.
- **Capital and regulation**: CET1, leverage and liquidity ratios constrain growth and payouts.
- **Valuation consequence**: equity-based methods (P/E, P/TBV, DDM), not EV-based ones.` },

  { id: 'wmt-10', t: 'wmt', q: `Tell me about a recent FIG trend you find interesting.`, a: `**Pick one. Explain why it's happening, who wins and loses, and what it means for banking deals.** Options (verify current):
- **Regional bank consolidation**: faster approvals in 2025 and the need for scale drove a wave of deals (e.g., Fifth Third/Comerica, Pinnacle/Synovus, Huntington/Cadence, PNC/FirstBank).
- **Private credit and bank partnerships**: Citi–Apollo, Wells Fargo–Centerbridge. Banks are shifting from competitor to partner.
- **Alternatives going retail**: evergreen funds, 401(k) access (Aug 2025 executive order), traditional managers buying alts (BlackRock/HPS, GIP).
- **Stablecoins and tokenization**: the GENIUS Act (July 2025) created a federal framework, and banks and networks are positioning.
- **Payments reshaping**: Capital One/Discover (owning a network), Global Payments/Worldpay.
- **Insurance brokerage roll-ups**: Gallagher/AssuredPartners and PE-backed broker platforms.
- **Deregulation**: recalibrated capital rules (eSLR, Basel III endgame re-proposal, stress test changes) → excess capital for buybacks and M&A.
- Finish with your view and a deal idea it implies.` },

  { id: 'wmt-11', t: 'wmt', q: `Why this bank? (Framework for Citi, Barclays, BofA, Wells Fargo)`, a: `**Structure: people → platform → FIG fit → you.** Make every point specific to the firm.
- **People**: names from your networking and what stood out ("Speaking with [banker] about [deal] showed me…").
- **Platform/strategy** (verify latest):
  - **Citi**: a global network and Services franchise (treasury, custody, correspondent banking) give it deep relationships with financial institutions worldwide. Add the transformation story and the push to win back banking share.
  - **Bank of America**: a huge US deposit and commercial banking franchise, Merrill wealth, and strong capital markets and financing capabilities.
  - **Wells Fargo**: the asset cap was lifted (June 2025), so it's a growth story. It's investing heavily to build out its corporate & investment bank and hiring senior bankers.
  - **Barclays**: one of the few non-US banks with a top-tier US investment bank (built on Lehman's US business, acquired 2008), plus transatlantic/cross-border capability and strong financing and capital markets for FIG clients.
- **FIG fit**: recent FIG deals or capital raises they advised on (check press releases and league tables), group culture, lean deal teams.
- **You**: how your background fits what the group does.
- Avoid generic praise ("great culture," "leading bank") with nothing to back it up.` },

  { id: 'wmt-12', t: 'wmt', q: `Walk me through your resume. (MBA associate structure)`, a: `**A chronological story with a clear "why IB / why FIG" arc. About 90 seconds, two minutes max.**
1. **Hook**: one line on who you are ("I'm a first-year MBA student focused on FIG investment banking").
2. **Background**: undergrad and early career, one or two sentences each, emphasizing analytical work, client exposure and results.
3. **Pivot**: what sparked your interest in banking and in FIG specifically (a deal, a client, a problem you worked on).
4. **MBA**: what you've done to prepare: coursework (corporate finance, valuation, financial institutions), clubs, technical prep, networking.
5. **Why now / why here**: your transferable skills (modeling, client management, leadership) + why this firm.
- Tips: present every transition as a deliberate choice, quantify impact, end on the role you're interviewing for, and rehearse until it sounds natural rather than memorized.` },
];
