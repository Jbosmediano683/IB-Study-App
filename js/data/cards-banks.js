// FIG flashcards: Banks — fundamentals, capital & regulation, valuation & M&A
export default [
  // ───────────────────────────── Banks: Fundamentals ─────────────────────────────
  { id: 'bank-01', t: 'bank', q: `How does a bank make money?`, a: `**Spread lending plus fees, minus credit costs and operating expenses.**
- **Net interest income (NII):** interest earned on loans and securities minus interest paid on deposits and borrowings — usually the majority of revenue (often ~60–80% at regional banks; lower at universal banks with big trading, IB and wealth businesses)
- **Non-interest income:** deposit service charges, card/interchange, treasury management, wealth & trust, mortgage banking; plus IB, trading and custody at the largest banks
- **Less:** provision for credit losses, non-interest expense (comp, occupancy, technology), taxes
- **Key idea:** the balance sheet IS the business — deposits are the raw material, loans the product, and equity capital the constraint on growth` },

  { id: 'bank-02', t: 'bank', q: `Walk me through a bank's income statement.`, a: `**Spread income + fees − expenses − credit costs.**
1. Interest income − interest expense = **net interest income (NII)**
2. + Non-interest income (fees) = **total revenue**
3. − Non-interest expense = **pre-provision net revenue (PPNR)**
4. − Provision for credit losses = **pre-tax income** → taxes → **net income**
5. − Preferred dividends = **net income to common** → ÷ diluted shares = **EPS**
- No COGS or EBITDA: interest expense is an operating cost
- NII is often shown on a fully taxable-equivalent (FTE) basis, grossing up tax-exempt municipal income` },

  { id: 'bank-03', t: 'bank', q: `Walk me through a bank's balance sheet.`, a: `**Mostly loans and securities, funded mostly by deposits, with a thin equity layer (~8–12% of assets).**
## Assets
- Cash & reserves at the Fed, fed funds sold / reverse repos
- Securities: available-for-sale (fair value) and held-to-maturity (amortized cost)
- Loans, net of the allowance for credit losses (ACL)
- Goodwill & intangibles, premises, other assets (incl. DTAs)
## Liabilities
- Deposits: non-interest-bearing checking, interest-bearing checking, savings & money market, time deposits (CDs)
- Short-term borrowings (fed funds purchased, repo), FHLB advances, long-term senior & subordinated debt
## Equity
- Common stock, retained earnings, AOCI, plus preferred stock
- ~10x leverage: a 1% loss on assets can wipe out ~10% of equity` },

  { id: 'bank-04', t: 'bank', q: `What is net interest margin (NIM), and what drives it?`, a: `**NIM = NII ÷ average interest-earning assets (annualized).** It's the bank's core spread; US banks typically run ~2.5–3.5%.
- **Asset yields:** loan mix (cards & consumer > C&I/CRE > mortgages > securities), fixed vs. floating, pricing competition
- **Funding costs:** deposit mix (share of non-interest-bearing), deposit betas, reliance on wholesale funding
- **Rates & curve:** level of short rates, curve steepness, pace of fixed-rate asset repricing
- **Earning-asset mix:** loans vs. securities vs. cash at the Fed
- **Other:** hedges (swaps), purchase-accounting accretion, nonaccrual loans
- Tip: NIM > net interest spread because part of the asset base is funded with interest-free sources (non-interest-bearing deposits and equity)` },

  { id: 'bank-05', t: 'bank', q: `What is the efficiency ratio, and what's a good level?`, a: `**Efficiency ratio = non-interest expense ÷ total revenue (NII on an FTE basis + non-interest income).** Lower is better — it's the cost to produce $1 of revenue.
- ~55–60% is typical; below ~50–55% is strong; above ~65% is weak
- Usually "adjusted" to exclude merger charges, intangible amortization and one-offs
- Improve it via cost saves (M&A, branch consolidation, automation) or revenue growth
- **Positive operating leverage** = revenue growing faster than expenses → efficiency ratio falls — a key earnings-call talking point` },

  { id: 'bank-06', t: 'bank', q: `A bank makes a $100 loan funded by a $100 deposit. Walk me through the statements.`, a: `**Origination is a balance-sheet event; the P&L comes from the spread and the CECL reserve.**
- **Balance sheet at origination:** loans +100, deposits +100 (when a bank lends, it typically credits the borrower's deposit account)
- **Day-1 CECL reserve** (say a 2% lifetime expected loss): provision $2 → pre-tax −2, NI −1.5 at a 25% tax rate; ACL +2 so net loans = 98; the tax benefit sits in a DTA (+0.5) because provisions aren't deductible until charge-off
- **Over the year** (7% loan yield, 3% deposit cost): interest income 7 − interest expense 3 = **NII +4** → NI +3 after tax → cash and retained earnings +3
- **Capital:** RWA +100 (most commercial loans are 100% risk-weighted) → at a ~10% CET1 target the loan "consumes" ~$10 of equity
- **Liquidity:** as the borrower spends the deposit it may leave the bank, and that funding must be replaced` },

  { id: 'bank-07', t: 'bank', q: `A bank increases its provision for credit losses by $100 (25% tax rate). Walk me through the three statements.`, a: `## Simple answer (what most interviewers expect)
- **IS:** provision +100 → pre-tax income −100 → net income −75
- **CFS:** NI −75, add back non-cash provision +100 → cash +25
- **BS:** ACL +100 so net loans −100; cash +25 → assets −75; retained earnings −75 → balances
## Nuanced answer (shows FIG depth)
- US banks generally can't deduct provisions for tax until loans are charged off, so cash taxes don't change
- The 25 tax benefit is deferred: **DTA +25** instead of cash +25
- **CFS:** NI −75 + provision 100 − increase in DTA 25 → **cash unchanged**
- **BS:** net loans −100, DTA +25 → assets −75; equity −75
- **Capital:** CET1 falls by 75 through retained earnings` },

  { id: 'bank-08', t: 'bank', q: `A bank charges off a $10 loan. What happens, and how is that different from a provision?`, a: `**Charge-offs hit the reserve; provisions hit the income statement.**
- **Charge-off:** gross loans −10 and ACL −10 → **net loans unchanged, no income statement impact** (the loss was already reserved)
- **Rebuilding the reserve:** to restore the ACL to the level CECL requires, the bank books a **provision** → expense, lower NI, ACL back up
- **Recovery** later on a charged-off loan: cash up, ACL up (recoveries reduce net charge-offs)
- **Tax:** the charge-off is generally when the deduction is taken → the related DTA reverses
- **Rule:** Provision = net charge-offs + reserve build (or − reserve release)` },

  { id: 'bank-09', t: 'bank', q: `What is the allowance for credit losses (ACL), and how did CECL change it?`, a: `**The ACL is a contra-asset reserve for expected loan losses: net loans = gross loans − ACL.**
- **Old "incurred loss" model:** reserve only for losses that were probable and already incurred → reserves built late in downturns ("too little, too late")
- **CECL (ASC 326):** reserve **lifetime expected losses from day one**, using reasonable and supportable economic forecasts, then reverting to historical loss rates
- Effective 2020 for large SEC filers; 2023 for smaller reporting companies and private banks
- **Effects:** higher reserves on long-lived loans (credit cards often carry 7%+ of balances), provisions front-loaded with loan growth, reserves swing with macro forecasts (big builds in 2020, releases in 2021)
- **Interview angle:** under CECL, loan growth itself creates provision expense, even with stable credit quality` },

  { id: 'bank-10', t: 'bank', q: `What's the difference between net charge-offs and provision expense? Walk me through the ACL roll-forward.`, a: `- **Net charge-offs (NCOs)** = loans written off − recoveries → actual realized losses; they reduce the ACL
- **Provision** = the income statement expense that replenishes or adjusts the ACL
- **Roll-forward:** Ending ACL = Beginning ACL + Provision − NCOs
- **Example:** beginning ACL $1,000M; NCOs $300M; required ending ACL $1,100M → provision = 300 + 100 = **$400M** ($100M reserve build)
- **Provision > NCOs** = reserve build (worse outlook or loan growth); **provision < NCOs** = reserve release (earnings boost, but lower quality)` },

  { id: 'bank-11', t: 'bank', q: `What credit quality metrics do you look at for a bank?`, a: `- **NCO ratio:** annualized NCOs ÷ average loans (well under 1% for most banks in normal times; credit cards ~3–6%)
- **Non-performing assets (NPAs):** nonaccrual loans + OREO (foreclosed real estate), as a % of loans + OREO
- **Delinquencies:** 30–89 days past due — the early warning signal
- **Criticized / classified loans:** special mention, substandard, doubtful
- **Reserve ratio** (ACL ÷ loans) and **coverage** (ACL ÷ nonperforming loans)
- **Concentrations:** CRE (especially office), construction, leveraged lending; supervisory guidance flags CRE ≥ 300% of total risk-based capital (with ≥ 50% growth over 36 months) or construction ≥ 100%
- Trends and peer comparisons matter more than any single level` },

  { id: 'bank-12', t: 'bank', q: `What is a deposit beta?`, a: `**Deposit beta = Δ cost of deposits ÷ Δ fed funds rate** — the share of rate moves passed through to depositors.
- **Example:** fed funds +500 bp, deposit costs +200 bp → beta = **40%**
- **Low beta** = sticky, low-cost deposits (retail checking, operating accounts) → more valuable franchise
- **High beta** = rate-sensitive funding (CDs, brokered, high-balance commercial and wealth clients, online savings)
- **Last cycle (2022–23):** betas started near zero, then accelerated as money market funds, Treasuries and QT pulled deposits away (and SVB raised fear) — ending well above the 2015–18 cycle
- **Down-beta** in a cutting cycle: how fast can the bank cut deposit rates vs. how fast floating loan yields fall?` },

  { id: 'bank-13', t: 'bank', q: `What does it mean for a bank to be asset-sensitive vs. liability-sensitive?`, a: `- **Asset-sensitive:** assets reprice faster than liabilities (floating-rate C&I and cards, lots of cash, low-beta deposits) → **NII rises when rates rise** and falls when rates fall
- **Liability-sensitive:** liabilities reprice faster (fixed-rate mortgages and securities funded by rate-sensitive deposits/borrowings, e.g., thrifts) → NII falls when rates rise
- Managed with **interest rate swaps** (receive-fixed reduces asset sensitivity), securities duration, and deposit pricing
- Disclosed as **NII sensitivity** (e.g., ±100 bp parallel shock over 12 months) and **EVE sensitivity** (change in the economic value of equity)
- Most large US banks were asset-sensitive going into 2022, and many added receive-fixed hedges ahead of rate cuts` },

  { id: 'bank-14', t: 'bank', q: `How do rising rates affect a bank? How about falling rates?`, a: `## Rising rates
- NII up initially for asset-sensitive banks; then deposit betas catch up and money shifts into CDs and money funds
- Fixed-rate securities lose value → **AOCI losses reduce book value and TBV**; HTM losses are hidden but real
- Credit stress builds (CRE refinancing, weaker borrowers); mortgage and capital markets activity slow
## Falling rates
- Floating asset yields fall faster than deposit costs at first → NIM pressure, easing as deposit rates are cut
- **AOCI recovers → TBV up**; credit improves; loan demand, mortgage refinancing and IB fees pick up
## Either way
- Banks borrow short and lend long → a **steeper curve helps**; low-yield fixed-rate assets rolling into higher yields is a multi-year NII tailwind` },

  { id: 'bank-15', t: 'bank', q: `What is AOCI, and why does it matter for banks?`, a: `**Accumulated other comprehensive income: unrealized gains and losses that bypass net income and sit directly in equity.**
- Main bank component: unrealized gains/losses on **AFS securities** (also cash flow hedges, pensions, FX)
- Rates up → bond prices down → AOCI losses → **book value and TBV fall** with no hit to net income
- **Capital:** Category I–II banks (the largest) include AOCI in CET1; Category III–IV banks have been able to opt out (the "AOCI filter") — post-SVB proposals would remove the opt-out for banks ≥ $100B (verify current status)
- HTM unrealized losses are excluded from AOCI and capital, but analysts adjust TBV for them
- AOCI losses "pull to par" as bonds approach maturity → a built-in TBV tailwind` },

  { id: 'bank-16', t: 'bank', q: `What's the difference between AFS and HTM securities? Walk through a $10 unrealized loss in each.`, a: `- **Available-for-sale (AFS):** carried at **fair value**; unrealized gains/losses go to **AOCI**, not net income; can be sold anytime
- **Held-to-maturity (HTM):** carried at **amortized cost**; unrealized gains/losses aren't recorded; requires intent and ability to hold — selling can "taint" the portfolio
- **Trading:** fair value through net income
## $10 pre-tax unrealized loss (25% tax)
- **AFS:** securities −10, DTA +2.5 → assets −7.5; AOCI −7.5 → equity −7.5; **no IS or cash impact**; CET1 −7.5 only if the bank includes AOCI
- **HTM:** no entry — disclosed in the footnotes; economically, TBV is overstated by 7.5
- **If the AFS bond is sold:** the loss is realized → pre-tax −10 through the IS while AOCI reverses → total equity unchanged at the sale
- **SVB lesson:** big HTM books hid losses until a forced sale` },

  { id: 'bank-17', t: 'bank', q: `Why did Silicon Valley Bank fail?`, a: `**A duration mismatch plus a concentrated, mostly uninsured deposit base — and a run at social-media speed.**
- Deposits roughly tripled in 2020–21 from VC-backed tech clients; ~90% were uninsured
- SVB invested the inflow in long-duration Treasuries and agency MBS (mostly **HTM**) at low yields, largely unhedged
- Rates rose in 2022 → large unrealized losses (~$15B on HTM, roughly the size of its equity); VC funding slowed and deposits ran off
- **Mar 8, 2023:** sold ~$21B of AFS at a ~$1.8B loss and announced a capital raise → panic; ~$42B withdrawn on Mar 9
- **Closed Mar 10, 2023;** regulators invoked the systemic risk exception to protect all depositors, the Fed launched the **BTFP**, and First Citizens later bought the bank from the FDIC
- **Lessons:** interest rate risk, liquidity and deposit concentration, uninsured deposits, supervision of $100–250B banks` },

  { id: 'bank-18', t: 'bank', q: `What are a bank's main funding sources, from cheapest to most expensive?`, a: `1. **Non-interest-bearing deposits** (business and consumer checking) — cheapest, stickiest
2. Interest-bearing checking, savings and money market accounts
3. **Time deposits (CDs)** — higher rate, fixed term
4. **Brokered deposits** — rate-sensitive, watched by regulators
5. **Wholesale borrowings:** FHLB advances, fed funds purchased, repo
6. **Long-term debt:** senior notes, subordinated debt (Tier 2)
7. **Preferred stock and common equity** — most expensive (cost of equity ~10–12%+)
- A great franchise has a high share of non-interest-bearing and operational deposits → low cost of funds and low beta` },

  { id: 'bank-19', t: 'bank', q: `What is the loan-to-deposit ratio, and why does it matter?`, a: `**Loans ÷ deposits — a quick read on liquidity and funding strategy.**
- **High** (above ~90–100%): loans partly funded by wholesale borrowings → more liquidity risk, higher funding cost
- **Low** (below ~70%): excess liquidity parked in securities and cash → lower NIM, but flexibility (or weak loan demand)
- Many US banks run ~70–90%; the 2020–21 deposit surge drove ratios to unusual lows, then QT and deposit outflows pushed them back up
- In M&A, a buyer with a high LDR prizes a target with excess low-cost deposits` },

  { id: 'bank-20', t: 'bank', q: `What are the key profitability metrics for a bank?`, a: `- **ROA** = net income ÷ average assets (~1.0–1.3% is solid for a US bank)
- **ROE** = net income to common ÷ average common equity
- **ROTCE** = (NI to common + after-tax intangible amortization) ÷ average tangible common equity — the key valuation driver (top performers mid-to-high teens or better)
- **NIM**, **efficiency ratio** and **fee income share** of revenue
- **PPNR ÷ average assets** — core earnings power before credit costs
- **DuPont for banks:** ROE = ROA × leverage (assets ÷ equity) → e.g., 1.2% × 10x = 12%` },

  { id: 'bank-21', t: 'bank', q: `What's the difference between ROE and ROTCE, and why do investors focus on ROTCE?`, a: `**ROTCE removes goodwill and intangibles from the denominator (and their amortization from the numerator).**
- ROTCE = (NI to common + after-tax amortization of intangibles) ÷ average tangible common equity
- TCE = common equity − goodwill − other intangibles (net of related DTLs); excludes preferred
- **Why:** puts acquisitive and organically grown banks on equal footing; matches regulatory capital (goodwill is deducted from CET1); tangible equity is what absorbs losses
- ROTCE vs. cost of equity drives **P/TBV** — a bank earning above its cost of equity trades at a premium to TBV
- **Example:** (NI to common $1.2B + $0.1B after-tax amortization) ÷ $10B average TCE = **13% ROTCE**` },

  { id: 'bank-22', t: 'bank', q: `What are tangible book value (TBV) and the TCE ratio?`, a: `- **Tangible common equity (TBV)** = total equity − preferred − goodwill − other intangibles (usually net of related DTLs)
- **TBVPS** = TBV ÷ common shares outstanding — the anchor for P/TBV valuation and M&A dilution math
- **TCE ratio** = TCE ÷ tangible assets (total assets − goodwill − intangibles) — a simple, non-risk-weighted leverage measure (~7–10% is typical)
- TBV grows with retained earnings and AOCI recovery; it falls with AOCI losses, buybacks above TBV, and acquisitions at premiums
- **Example:** equity $12B − preferred $1B − goodwill & intangibles $2B = TCE $9B; ÷ 300M shares = **TBVPS $30**` },

  { id: 'bank-23', t: 'bank', q: `What is PPNR, and why does it matter?`, a: `**Pre-provision net revenue = NII + non-interest income − non-interest expense.**
- Core earnings power **before credit costs** — the first line of defense against loan losses
- A bank with strong PPNR can absorb a credit cycle through earnings instead of eating into capital
- Central to stress testing: projected PPNR − projected credit losses (and other hits) = change in capital
- Compare banks on PPNR ÷ average assets (or RWA); in M&A, cost saves raise pro forma PPNR` },

  { id: 'bank-24', t: 'bank', q: `How does bank lending create money? Are banks constrained by reserves?`, a: `**When a bank makes a loan, it credits the borrower's deposit account — creating new money (a deposit) on the spot.**
- Both sides of the balance sheet grow: the loan (asset) and the deposit (liability)
- US reserve requirements have been **0% since March 2020**, so reserves don't mechanically cap lending
- **Real constraints:** capital (CET1 vs. RWA), liquidity (deposits leave as borrowers spend; LCR), loan demand, risk appetite and profitability
- That's why a stable deposit franchise is so valuable — it keeps funding the loan book cheaply` },

  { id: 'bank-25', t: 'bank', q: `What are the main loan categories on a bank's balance sheet, and how do they differ?`, a: `- **C&I (commercial & industrial):** loans to businesses; mostly floating-rate (SOFR-based) → asset-sensitive; 100% risk weight
- **Commercial real estate:** owner-occupied, non-owner-occupied (office, retail, industrial), multifamily, construction & land development (riskiest; HVCRE 150% risk weight)
- **Residential mortgages & home equity:** long duration, often fixed-rate; qualifying first liens 50% risk weight; historically low losses
- **Consumer:** credit cards (high yield, high losses), auto, personal, student
- **Other:** leases, agriculture, and fast-growing **loans to nondepository financial institutions** (e.g., lending to private credit funds and other NBFIs)
- Mix drives yield, rate sensitivity, credit risk and capital intensity` },

  { id: 'bank-26', t: 'bank', q: `What are the FHLB system, the Fed discount window, and the BTFP?`, a: `- **Federal Home Loan Banks:** 11 regional GSE cooperatives making secured **advances** to member banks and insurers against mortgages and securities — the "lender of next-to-last resort"; heavily used in March 2023
- **Discount window:** Fed lending to banks against collateral (with haircuts) at the primary credit rate; historically stigmatized — regulators now push banks to pre-position collateral and test access
- **BTFP (Bank Term Funding Program):** created March 2023; one-year loans against Treasuries and agency securities **valued at par** rather than market value, neutralizing unrealized losses; stopped making new loans March 11, 2024`, adv: true },

  { id: 'bank-27', t: 'bank', q: `Why do banks hold securities portfolios?`, a: `- **Liquidity:** high-quality liquid assets (HQLA) for the LCR and stress outflows; easy to pledge or repo
- **Collateral:** for FHLB and Fed borrowing, public deposits, repo
- **Excess deposits:** deploy funding when loan demand is weak
- **Interest rate risk management:** a duration lever to offset loan and deposit sensitivities
- **Low capital intensity:** Treasuries and Ginnie Mae MBS 0% risk weight; Fannie/Freddie MBS 20%
- **The risk is duration:** securities bought at record-low yields in 2020–21 created large unrealized losses when rates rose` },

  { id: 'bank-28', t: 'bank', q: `What is a bank holding company, and why does the structure matter?`, a: `- **BHC:** the parent that owns one or more banks (and often non-bank subsidiaries such as broker-dealers and asset managers); supervised by the **Federal Reserve**
- The bank subsidiary is chartered and supervised by the **OCC** (national banks) or a state regulator plus the FDIC or Fed
- **Financial holding company (FHC):** a BHC that elected broader powers (securities underwriting, insurance, merchant banking)
- The holdco issues common, preferred and debt; **dividends from the bank up to the holdco** fund holdco dividends, buybacks and debt service (subject to regulatory limits)
- Capital is measured at both levels; the holdco must be a **source of strength** for the bank
- For G-SIBs, resolution is "single point of entry": the holdco absorbs losses via TLAC while operating subsidiaries keep running`, adv: true },

  { id: 'bank-29', t: 'bank', q: `What are a bank's main sources of non-interest income, and which do investors value most?`, a: `- **Deposit service charges** (incl. overdraft — under regulatory and political pressure)
- **Card and interchange fees** (debit capped by Durbin for banks ≥ $10B)
- **Treasury management / commercial payments**
- **Wealth management, trust and asset management**
- **Mortgage banking:** gain on sale + servicing fees (MSRs)
- **Capital markets, IB, trading and custody** at the largest banks
- Investors pay up for **recurring, capital-light, less rate-sensitive fees** (wealth, treasury management, trust/custody) — they diversify revenue and lift ROTCE
- Fee income ratio = non-interest income ÷ total revenue` },

  { id: 'bank-30', t: 'bank', q: `If you could only see one financial statement for a bank, which would you choose and why?`, a: `**The balance sheet — for a bank, it IS the business.**
- Shows loan mix and credit quality (ACL), deposit mix (funding cost and stability), securities (duration, AFS vs. HTM, AOCI), liquidity, and capital (TBV, leverage)
- You can roughly infer earnings: earning assets × NIM, plus fees, minus expenses and the credit costs implied by the loan mix
- The cash flow statement is the least useful for a bank: loan growth and deposit flows blur operating vs. investing vs. financing
- Contrast with a corporate, where most interviewers expect the cash flow statement as the answer` },

  // ───────────────────────────── Banks: Capital & Regulation ─────────────────────────────
  { id: 'cap-01', t: 'cap', q: `What is CET1 capital, and how is the CET1 ratio calculated?`, a: `**CET1 = the highest-quality, loss-absorbing capital; CET1 ratio = CET1 capital ÷ risk-weighted assets.**
- Starts with common stock + surplus + retained earnings (+ AOCI for banks that don't opt out)
- **Less deductions:** goodwill and other intangibles (net of DTLs), DTAs from NOL and tax-credit carryforwards, and threshold items above limits (e.g., MSRs, certain temporary-difference DTAs, investments in unconsolidated financial institutions)
- **Minimum 4.5%** + buffers (stress capital buffer or capital conservation buffer, plus any G-SIB surcharge) → large US banks typically run ~10–14%
- The most-watched capital ratio: it sets buyback, dividend and M&A capacity` },

  { id: 'cap-02', t: 'cap', q: `What are the tiers of regulatory capital and the Basel III minimums?`, a: `- **CET1:** common equity and retained earnings, less deductions — min **4.5%** of RWA
- **Additional Tier 1 (AT1):** non-cumulative perpetual preferred (US); contingent convertibles (Europe/UK)
- **Tier 1 = CET1 + AT1** — min **6%**
- **Tier 2:** subordinated debt (≥ 5-year original maturity; capital credit amortizes over the final 5 years) plus part of the ACL (up to 1.25% of standardized credit RWA)
- **Total capital = Tier 1 + Tier 2** — min **8%**
- **Buffers stack on top:** 2.5% capital conservation buffer (or the stress capital buffer for large US banks) + any G-SIB surcharge
- With a 2.5% buffer: CET1 ≥ 7.0%, Tier 1 ≥ 8.5%, Total ≥ 10.5% (before any G-SIB surcharge)` },

  { id: 'cap-03', t: 'cap', q: `What are risk-weighted assets (RWA)? Give examples of risk weights.`, a: `**RWA = exposures weighted by riskiness — the denominator of risk-based capital ratios.**
US standardized approach examples:
- **0%:** cash, reserves at the Fed, US Treasuries, Ginnie Mae MBS
- **20%:** Fannie/Freddie MBS and debt, claims on US banks, general-obligation municipal bonds
- **50%:** qualifying first-lien residential mortgages, municipal revenue bonds
- **100%:** most C&I, consumer and (non-HVCRE) commercial real estate loans
- **150%:** HVCRE and most loans 90+ days past due
- Plus **market risk** RWA (trading book) and, for advanced-approaches banks, **operational risk** RWA
- The largest banks compute both standardized and advanced RWA and are bound by the lower resulting ratio` },

  { id: 'cap-04', t: 'cap', q: `What is the stress capital buffer (SCB), and how is it calculated?`, a: `**A firm-specific CET1 buffer for banks with ≥ $100B in assets, set by the Fed's supervisory stress test (since 2020).**
- **SCB = max(2.5%, peak-to-trough decline in the projected CET1 ratio under the severely adverse scenario + four quarters of planned common dividends as a % of RWA)**
- Replaces the static 2.5% capital conservation buffer for these banks
- **Required CET1 = 4.5% minimum + SCB + G-SIB surcharge** (if applicable)
- **Illustration:** 4.5% + 3.0% SCB + 2.0% surcharge = 9.5% requirement; add a ~1% management buffer → ~10.5% target
- Higher SCB → less excess capital → smaller buybacks; banks manage it via business mix and stress-sensitive exposures
- Reform direction: averaging results over two years and publishing models and scenarios for comment to reduce volatility (verify current status)` },

  { id: 'cap-05', t: 'cap', q: `What is the G-SIB surcharge, and which US banks are G-SIBs?`, a: `**An extra CET1 buffer for global systemically important banks, scaled to their systemic footprint.**
- **8 US G-SIBs:** JPMorgan Chase, Bank of America, Citigroup, Wells Fargo, Goldman Sachs, Morgan Stanley, BNY, State Street
- Scored on size, interconnectedness, complexity, cross-jurisdictional activity and substitutability; the US uses the **higher of Method 1 (Basel) and Method 2** (which swaps substitutability for reliance on short-term wholesale funding)
- US surcharges range from 1.0% up to roughly 4.5%, with JPMorgan's the highest — check each bank's current level (verify current status)
- G-SIBs also face the enhanced SLR, TLAC, resolution planning and the strictest liquidity rules
- Barclays is on the FSB's global G-SIB list too — so all four of your target banks are G-SIBs` },

  { id: 'cap-06', t: 'cap', q: `What are the leverage ratio and the SLR, and why have both risk-based and leverage requirements?`, a: `- **Tier 1 leverage ratio** = Tier 1 capital ÷ average total consolidated assets — min **4%** (5% for well-capitalized banks)
- **Supplementary leverage ratio (SLR)** = Tier 1 ÷ total leverage exposure (on- and off-balance-sheet) — min **3%** for Category I–III banks
- **Enhanced SLR (G-SIBs):** 5% at the holding company (3% + 2% buffer) and 6% at insured bank subsidiaries (pre-reform)
- **Why both:** risk weights can understate risk (model risk; Treasuries at 0%), so leverage ratios are a non-risk-based backstop
- **Which binds:** banks with big Treasury and reserve balances (G-SIBs, custody banks) → leverage; loan-heavy banks → CET1
- Reform direction: regulators moved in 2025 to recalibrate the eSLR (tying the buffer to the G-SIB surcharge) to free balance sheet for Treasury market intermediation (verify current status)` },

  { id: 'cap-07', t: 'cap', q: `What are the Prompt Corrective Action (PCA) thresholds for a "well-capitalized" bank?`, a: `**Well-capitalized (insured depository institutions) requires all of:**
- CET1 ratio ≥ **6.5%**
- Tier 1 ratio ≥ **8%**
- Total capital ratio ≥ **10%**
- Tier 1 leverage ratio ≥ **5%**
- …and no written capital directive from the regulator
- **Lower tiers:** adequately capitalized (4.5% / 6% / 8% / 4%) → undercapitalized → significantly undercapitalized → critically undercapitalized (tangible equity ≤ 2% → generally receivership within 90 days)
- Why it matters: brokered deposit access, expansion and M&A approvals` },

  { id: 'cap-08', t: 'cap', q: `What are the LCR and the NSFR?`, a: `- **Liquidity coverage ratio (LCR)** = high-quality liquid assets ÷ total net cash outflows over a 30-day stress ≥ **100%**
  - HQLA: **Level 1** (reserves, Treasuries, Ginnie Mae — no haircut), **Level 2A** (Fannie/Freddie MBS — 15% haircut), **Level 2B** (certain corporates/equities — 50% haircut); Level 2 capped at 40% of HQLA
  - Outflow rates vary by funding type: low for insured retail deposits, high for uninsured, non-operational wholesale funding
- **Net stable funding ratio (NSFR)** = available stable funding ÷ required stable funding (1-year horizon) ≥ **100%**
- Full requirements for Category I–II banks; reduced versions (e.g., 85% or 70% calibrations) for some Category III–IV banks
- Post-SVB direction: recognize faster deposit runs and require discount-window readiness (verify current status)`, adv: true },

  { id: 'cap-09', t: 'cap', q: `Explain the US tailoring categories for large banks.`, a: `**The 2019 tailoring rules scale requirements to size and risk:**
- **Category I:** US G-SIBs — strictest (eSLR, TLAC, annual stress tests, full LCR/NSFR, AOCI in capital)
- **Category II:** ≥ $700B total assets or ≥ $75B cross-jurisdictional activity
- **Category III:** ≥ $250B total assets, or ≥ $75B in nonbank assets, weighted short-term wholesale funding or off-balance-sheet exposure → adds the SLR and fuller liquidity rules
- **Category IV:** $100–250B → stress test every two years, SCB, reduced (or no) standardized liquidity requirements, AOCI opt-out
- **Below $100B:** largely outside enhanced prudential standards
- **M&A angle:** crossing $100B or $250B steps up cost and capital, so deals that cross need enough scale to absorb it`, adv: true },

  { id: 'cap-10', t: 'cap', q: `What is the Fed's supervisory stress test (DFAST / CCAR)?`, a: `**An annual test for banks with ≥ $100B in assets (Category IV firms generally every other year).**
- Projects nine quarters of losses, PPNR and capital ratios under a baseline and a **severely adverse** scenario (deep recession with unemployment around 10%, sharp falls in equity and real estate prices; a global market shock for large trading banks)
- Results set each bank's **stress capital buffer** → effectively determine capital return capacity
- CCAR's qualitative "objection" has been eliminated; banks still submit annual capital plans
- Results come out in late June; banks announce dividend plans shortly after
- Reform direction: more transparency on models and scenarios, averaging results across years (verify current status)` },

  { id: 'cap-11', t: 'cap', q: `What are TLAC and long-term debt requirements?`, a: `**Total loss-absorbing capacity: enough equity plus bail-in-able long-term debt to recapitalize a failed G-SIB without taxpayer money.**
- US G-SIB holdcos: external TLAC ≥ **18% of RWA** and **7.5% of total leverage exposure** (plus buffers), with a separate minimum of eligible long-term debt
- Enables **single-point-of-entry** resolution: the holdco absorbs losses while operating subsidiaries keep running
- Post-SVB (2023) proposal: extend a long-term debt requirement to banks ≥ $100B (verify current status)
- Europe/UK equivalent: **MREL**
- **FIG banker angle:** drives regular holdco senior and subordinated debt issuance — a big DCM revenue pool`, adv: true },

  { id: 'cap-12', t: 'cap', q: `How does a bank decide how much capital to return through dividends and buybacks?`, a: `**Excess capital = capital generated − capital needed to support growth at the target ratio.**
1. Set a **CET1 target** = 4.5% minimum + SCB + G-SIB surcharge + management buffer (often ~50–100 bp)
2. **Capital generated** ≈ net income to common
3. **Capital needed** = ΔRWA × target CET1 ratio (plus any M&A or rule changes)
4. The remainder funds **dividends** (stable; ~25–40% payout is common) and **buybacks** (flexible)
- **Example:** NI $10B; RWA grows $50B at a 12% target → $6B retained → **$4B** available for distribution
- Overcapitalized large banks have recently returned close to all of their earnings
- **Constraints:** SCB, stress test results, board approval, uncertainty over pending capital rules` },

  { id: 'cap-13', t: 'cap', q: `Who regulates US banks?`, a: `- **Federal Reserve:** bank and financial holding companies, state member banks, stress tests, G-SIB rules; lender of last resort
- **OCC:** national banks and federal savings associations (e.g., the main bank subsidiaries of JPMorgan, BofA, Citi and Wells Fargo)
- **FDIC:** deposit insurance (**$250,000 per depositor, per insured bank, per ownership category**), state non-member banks, failed-bank resolution, the Deposit Insurance Fund
- **State regulators:** state-chartered banks (the "dual banking system")
- **CFPB:** consumer financial protection; supervises banks > $10B for consumer laws
- **Also:** SEC (public companies, securities activities), FINRA (broker-dealers), DOJ (merger competition)
- **UK (Barclays):** PRA (prudential) and FCA (conduct), with the Bank of England as resolution authority` },

  { id: 'cap-14', t: 'cap', q: `What is Basel III endgame, and where does it stand?`, a: `**The final set of Basel III reforms (sometimes called "Basel IV") that changes how RWA are calculated.**
- Revises standardized credit risk, market risk (**FRTB**), operational risk and CVA; adds an **output floor** (modeled RWA can't fall below 72.5% of standardized)
- **US July 2023 proposal:** applied to all banks ≥ $100B, would have raised CET1 requirements for affected large banks by an estimated ~16–19% in aggregate, and removed the AOCI opt-out
- Heavy industry pushback; regulators have signaled a re-proposal much closer to capital-neutral (verify current status)
- **Elsewhere:** the EU implemented most rules from 2025 with FRTB delayed; the UK ("Basel 3.1") moved to January 2027
- **Why it matters:** capital requirements → ROTCE → valuation, buybacks and M&A capacity` },

  { id: 'cap-15', t: 'cap', q: `What are AT1 bonds (CoCos), and what happened to Credit Suisse's AT1s?`, a: `**Additional Tier 1: perpetual, deeply subordinated instruments with cancellable coupons that absorb losses while the bank is still a going concern.**
- In Europe/UK they're **contingent convertibles**: converted to equity or written down if CET1 falls below a trigger (e.g., 5.125% or 7%) or at the regulator's point of non-viability
- Typically callable after ~5 years; coupons are discretionary and non-cumulative
- **Credit Suisse (March 2023):** in the UBS rescue, FINMA wrote ~CHF 16B of AT1s down to zero while shareholders received ~CHF 3B in UBS stock — inverting the usual creditor hierarchy
- EU and UK authorities quickly said they would respect the hierarchy (equity absorbs losses first); the AT1 market recovered within months
- In the US, AT1 = non-cumulative perpetual preferred stock (no conversion trigger)` },

  { id: 'cap-16', t: 'cap', q: `What is the Durbin Amendment, and why is $10B an important threshold?`, a: `**A Dodd-Frank cap on debit card interchange for issuers with ≥ $10B in assets (Fed Regulation II).**
- **Cap:** 21¢ + 5 bps of the transaction + 1¢ fraud-prevention adjustment — versus an average of roughly 44¢ before the rule
- Crossing $10B → immediate loss of much of debit interchange revenue, plus **CFPB supervision** and heavier compliance
- So banks near $10B often wait and "cross big" with an acquisition
- The Fed proposed (2023) lowering the cap to 14.4¢ + 4 bps + 1.3¢; not finalized as of mid-2026
- **Litigation (verify current):** in 2025 a federal district court (Corner Post v. Fed) held Reg II's fee standard unlawful — stayed pending appeal; the Eighth Circuit reportedly affirmed in Oct 2026, and other cases are pending. The cap's level could change
- Durbin also requires issuers to enable at least two unaffiliated networks for debit routing` },

  { id: 'cap-17', t: 'cap', q: `What is the Community Reinvestment Act (CRA), and why does it matter in bank deals?`, a: `- Requires banks to help meet the credit needs of their **entire communities, including low- and moderate-income (LMI) neighborhoods**
- Exams rate banks Outstanding / Satisfactory / Needs to Improve / Substantial Noncompliance
- Regulators weigh CRA records in **merger and branch applications**; acquirers often announce community benefit plans alongside deals
- The 2023 interagency rule modernizing CRA was blocked in court, and regulators moved in 2025 to rescind it and return to the prior framework (verify current status)` },

  { id: 'cap-18', t: 'cap', q: `How do capital rules shape a bank's strategy and valuation?`, a: `**Capital is the binding constraint — more equity per dollar of risk means lower returns.**
- Higher requirements → lower ROTCE → lower justified P/TBV
- Pushes business mix toward **capital-light fee businesses** (wealth, payments, advisory) and away from RWA-heavy lending
- **RWA optimization:** securitization, **synthetic risk transfers (SRTs)**, loan sales, and **partnerships with private credit** (e.g., Citi–Apollo, Wells Fargo–Centerbridge)
- Excess capital → buybacks, dividends, M&A; shortfalls → slower growth or equity raises
- **2025–26 theme:** easing (eSLR recalibration, stress test reform, a gentler Basel endgame) → more excess capital for buybacks, lending and M&A (verify current status)` },

  { id: 'cap-19', t: 'cap', q: `What is UK ring-fencing, and how does it affect Barclays?`, a: `**Since 2019, large UK banking groups must house core UK retail banking in a separate "ring-fenced bank," walled off from investment banking.**
- Applies to groups with core UK deposits above a threshold (originally £25B; the UK has moved to raise it — verify current status)
- The ring-fenced bank takes UK retail and SME deposits and mortgages; it can't do most trading or investment banking or have large exposures to other financial institutions
- **Barclays:** Barclays Bank UK PLC (ring-fenced; UK retail and business banking) and Barclays Bank PLC (non-ring-fenced; houses the Investment Bank)
- In the US, Barclays operates through an intermediate holding company subject to Fed capital rules and stress tests
- **Purpose:** protect retail depositors and ease resolution; critics say it traps capital and liquidity
- **Regulators:** PRA (prudential), FCA (conduct); the Bank of England is the resolution authority`, adv: true },

  // ───────────────────────────── Banks: Valuation & M&A ─────────────────────────────
  { id: 'bval-01', t: 'bval', q: `How do you value a bank?`, a: `**Use equity-level methods — for a bank, debt and interest are operating items, so EV-based approaches don't work.**
1. **Trading comps:** P/E on forward EPS (primary), **P/TBV** (read against ROTCE), P/BV, dividend yield
2. **Precedent transactions:** P/TBV, P/E (incl. cost saves), **core deposit premium**, market premium
3. **Dividend discount model (excess-capital DDM):** project earnings and RWA; distributable capital = earnings − capital needed to hold CET1 at target; add a terminal value; discount at the **cost of equity**
4. **ROTCE vs. P/TBV regression** across peers to see who's cheap or rich relative to returns
- For diversified banks, cross-check with a sum-of-the-parts (e.g., wealth or card businesses on their own P/E)` },

  { id: 'bval-02', t: 'bval', q: `Why can't you use EV/EBITDA or an unlevered DCF to value a bank?`, a: `**For a bank, debt is raw material, not financing.**
- Deposits and borrowings fund the loans that generate revenue; interest expense is the main operating cost (like COGS)
- You can't separate operating from financing activities → net debt, enterprise value and EBITDA aren't meaningful
- Unlevered FCF breaks down: loan and deposit changes are the core operations, capex is small, and working capital isn't defined
- Regulatory capital — not cash — limits what can be paid out → value the equity directly: **P/E, P/TBV, DDM at the cost of equity**
- Same logic for balance-sheet FIG businesses (insurers, lenders); capital-light FIG (insurance brokers, payments, asset managers) can use EV/EBITDA` },

  { id: 'bval-03', t: 'bval', q: `Why do bank investors focus on P/TBV rather than P/BV?`, a: `- **Goodwill and intangibles are deducted from regulatory capital** — they can't absorb losses or support lending
- In stress or liquidation, intangibles are worth little; tangible equity is the real cushion
- Puts **acquisitive and organic banks on equal footing** (an acquirer's book value is inflated by goodwill)
- Pairs naturally with **ROTCE**: P/TBV is a function of ROTCE, cost of equity and growth
- P/BV still works for insurers and for banks with few intangibles; when comparing, adjust TBV for large AOCI or HTM losses` },

  { id: 'bval-04', t: 'bval', q: `What's the relationship between ROTCE and P/TBV? Give a numeric example.`, a: `**Justified P/TBV = (ROTCE − g) ÷ (Ke − g)** — a bank earning exactly its cost of equity is worth ~1.0x TBV.
- **Derivation:** Gordon growth on equity, P = D1 ÷ (Ke − g), with payout = 1 − g ÷ ROTCE → P/TBV = (ROTCE − g) ÷ (Ke − g)
- **Example:** ROTCE 15%, Ke 11%, g 4% → (15 − 4) ÷ (11 − 4) = 11 ÷ 7 ≈ **1.57x**
- ROTCE 9% with the same Ke and g → 5 ÷ 7 ≈ **0.71x** — trades below TBV
- **In practice:** regress P/TBV against forward ROTCE for a peer group; banks above the line trade rich relative to returns
- Each point of sustainable ROTCE moves the multiple meaningfully — why ROTCE targets dominate investor days` },

  { id: 'bval-05', t: 'bval', q: `How do P/E and P/TBV relate for a bank?`, a: `**P/E = (P/TBV) ÷ ROTCE** on a consistent forward basis, because EPS ≈ ROTCE × TBVPS.
- **Example:** a bank at 1.8x TBV earning a 15% ROTCE → P/E ≈ 1.8 ÷ 0.15 = **12x**
- At the same P/E, the higher-ROTCE bank should carry the higher P/TBV
- **Comps sanity check:** high P/TBV with low ROTCE = expensive (or the market expects ROTCE to rise)
- Use normalized forward earnings — peak or trough credit costs distort both multiples` },

  { id: 'bval-06', t: 'bval', q: `Walk me through a dividend discount model (DDM) for a bank.`, a: `**Value = PV of distributable capital + PV of terminal value, discounted at the cost of equity.**
1. **Project the balance sheet:** loans, deposits, securities → **RWA**
2. **Project earnings:** NII, fees, expenses, provisions, taxes → net income to common
3. **Set a target CET1 ratio** (e.g., 11%): required capital = target × RWA
4. **Distributable capital** each year = net income − capital needed for RWA growth (± any starting excess or shortfall) → dividends + buybacks
5. **Terminal value:** exit P/E or P/TBV on final-year earnings or TBV, or Gordon growth on terminal distributions
6. **Discount** at the cost of equity (~10–12% for US banks) → equity value → ÷ diluted shares
- **Key sensitivities:** cost of equity, NIM and credit cost assumptions, RWA growth, target CET1` },

  { id: 'bval-07', t: 'bval', q: `How do you estimate a bank's cost of equity?`, a: `- **CAPM:** Ke = Rf + β × ERP — use the bank's observed (levered) beta; **don't unlever and relever** (leverage is part of the business model)
- **Example:** Rf 4.25%, β 1.1, ERP 5.5% → 4.25% + 6.05% ≈ **10.3%**
- Typical range for US banks ~10–12%; higher for smaller, riskier or European banks
- **Cross-checks:** implied Ke from current P/TBV and ROTCE (solve (ROTCE − g) ÷ (Ke − g) = P/TBV for Ke), analyst estimates, management's stated hurdle rates
- Managements benchmark ROTCE targets, buybacks and M&A IRRs against it` },

  { id: 'bval-08', t: 'bval', q: `What multiples do you use for bank precedent transactions?`, a: `- **Price / tangible book value** — the headline metric
- **Price / earnings** — LTM and forward; also P/E including fully phased-in after-tax cost saves
- **Core deposit premium** = (deal value − target TBV) ÷ core deposits
- **Market premium** = offer price ÷ unaffected share price − 1 (MOEs can be near zero)
- **Less common:** price / assets, price / deposits
- Screen by size, geography, timing (rate environment), deal type (MOE vs. control) and target profitability` },

  { id: 'bval-09', t: 'bval', q: `What is the core deposit premium, and why is it used?`, a: `**Core deposit premium = (transaction value − target TBV) ÷ core deposits.**
- Core deposits ≈ total deposits − large time deposits (e.g., CDs over $100k or $250k) − brokered deposits
- Measures the premium paid per dollar of low-cost, stable funding — **the deposit franchise is the main source of a bank's franchise value**
- Neutralizes capital differences: an overcapitalized target's big TBV depresses P/TBV but not the deposit premium
- **Example:** deal value $2.6B, TBV $1.6B, core deposits $12.5B → (2.6 − 1.6) ÷ 12.5 = **8.0%**
- Tends to be higher when rates are high (cheap deposits are worth more) and in attractive markets` },

  { id: 'bval-10', t: 'bval', q: `Walk me through a bank merger model.`, a: `**Same skeleton as any merger model, plus purchase accounting and regulatory capital.**
1. **Deal terms:** price per share, exchange ratio (usually all-stock), premium, ownership split
2. **Fair value marks on the target:** loans (credit + interest-rate marks), securities, CDs and debt; create a **core deposit intangible (CDI)**; tax-effect each mark
3. **Goodwill** = purchase price − target TBV adjusted for after-tax marks − after-tax CDI
4. **Pro forma earnings** = acquirer + target consensus + after-tax **cost saves** (phased in) + **accretion of marks** − **CDI amortization** − financing costs (if cash/debt is used)
5. **Pro forma shares** = acquirer shares + new shares issued
6. **Outputs:** EPS accretion (Yr 1 / Yr 2), **TBVPS dilution and earnback**, IRR, pro forma CET1 and TCE, ROTCE, efficiency ratio, multiples vs. precedents
- Don't forget one-time merger charges (hit TBV at close) and any Day 2 CECL provision` },

  { id: 'bval-11', t: 'bval', q: `What are the main sources of TBV dilution in a bank deal?`, a: `- **Premium over target TBV** → goodwill and CDI, which are excluded from TBV
- **Purchase accounting marks:** credit and interest-rate marks shrink the target's fair-value TBV at close (rate marks were large in 2023–24)
- **One-time merger charges** (severance, systems conversion, contract terminations), after tax
- **CECL "double count"** on acquired non-PCD loans (Day 2 provision)
- **Offsets:** issuing stock at a high P/TBV (each new share brings in more TBV), mark accretion back into earnings, accretive EPS building retained earnings
- Investors judge dilution through the **earnback period** — about 3 years or less is generally well received` },

  { id: 'bval-12', t: 'bval', q: `An acquirer trades at 1.5x TBV and pays 2.0x TBV for a target in an all-stock deal. Is it TBVPS dilutive?`, a: `**Yes — in an all-stock deal, TBVPS is diluted when the deal P/TBV exceeds the acquirer's own P/TBV.**
- Each new share is "sold" at 1.5x its TBVPS but buys target TBV at 2.0x → less TBV comes in per new share than existing shares carry
- **Numbers:** acquirer TBV $1,000, 100 shares (TBVPS $10), price $15. Target TBV $200 bought at 2.0x = $400 → issue 400 ÷ 15 ≈ 26.7 shares
  - Pro forma TBV = 1,000 + 200 = $1,200 (the $200 premium becomes goodwill); shares ≈ 126.7 → TBVPS ≈ $9.47 → **~5.3% dilution**
- At 1.5x ($300): 20 new shares → $1,200 ÷ 120 = $10.00 → no dilution
- **Cash deals:** any price above the target's adjusted TBV is dilutive (tangible equity goes out, no new shares)
- This ignores marks, CDI and merger charges, which add dilution in practice` },

  { id: 'bval-13', t: 'bval', q: `What is the TBV earnback period, and how is it calculated?`, a: `**How long it takes the deal's incremental earnings to rebuild the TBVPS dilution created at close.**
- **Simple method:** TBVPS dilution at close ÷ annual (fully phased-in) EPS accretion
  - **Example:** dilution $0.60/share, accretion $0.20/share/year → **3.0 years**
- **Crossover method:** years until projected pro forma TBVPS catches up with projected standalone TBVPS — captures differing growth paths and payouts
- **Rule of thumb:** ~3 years or less is well received; beyond ~5 years draws skepticism
- A deal can be strongly EPS-accretive yet meaningfully TBV-dilutive (e.g., big rate marks) — always show both` },

  { id: 'bval-14', t: 'bval', q: `What is a core deposit intangible (CDI)?`, a: `**An identifiable intangible asset recorded in bank acquisitions for the value of the acquired core deposit relationships.**
- **Value** = PV of the funding-cost advantage of core deposits vs. alternative (wholesale) funding over their expected life, net of servicing costs
- Often ~1–4% of core deposits — **higher when rates are high**, because cheap deposits are worth more
- Amortized over ~7–10 years (often accelerated) → reduces GAAP EPS; investors focus on **tangible (cash) EPS**, which adds it back
- Deducted from TBV and CET1 (net of its DTL) → adds to TBV dilution
- In a stock deal it has book basis but no tax basis → creates a deferred tax liability` },

  { id: 'bval-15', t: 'bval', q: `What are credit marks and interest-rate marks in bank M&A?`, a: `**Purchase accounting records the target's loans (and other assets and liabilities) at fair value.**
- **Credit mark:** discount for expected lifetime credit losses (the target's existing ACL is eliminated)
- **Interest-rate mark:** discount on fixed-rate loans and securities yielding below current market rates — very large in 2023–24 after rates rose
- Both reduce TBV at close but **accrete back into interest income** over the assets' remaining lives → "accretion income" lifts NIM and EPS
- Rate marks pull to par — not real losses if held to maturity — so investors treat them as capital that comes back over time
- **Also marked:** securities (the target's AOCI is effectively realized), CDs and borrowings, plus a new CDI` },

  { id: 'bval-16', t: 'bval', q: `What is the CECL "double count" in bank acquisitions?`, a: `**For acquired loans without more-than-insignificant credit deterioration (non-PCD), expected credit losses have effectively been booked twice.**
- At close, loans are recorded at fair value — already including a **credit mark**
- CECL then requires a full lifetime allowance on those loans via a **Day 2 provision** → hits earnings, TBV and capital again
- **PCD loans** (purchased credit-deteriorated) use a "gross-up": the allowance is added to the loan's basis, with no P&L hit
- **Effect:** extra TBV dilution and overstated reserves; acquirers often exclude it from "core" metrics
- FASB moved in 2025 to extend the gross-up to most acquired seasoned loans, largely eliminating the double count going forward — confirm effective dates for deals you discuss (verify current status)`, adv: true },

  { id: 'bval-17', t: 'bval', q: `Why are most bank deals all-stock?`, a: `- **Preserves capital:** paying cash creates goodwill and CDI (deducted from CET1) while cash leaves the balance sheet — a double hit; issuing stock brings in equity to offset it
- Banks rarely hold excess cash for M&A; large cash deals usually require a capital raise
- **Currency:** an acquirer with a high P/TBV and P/E has strong stock to issue
- **Target holders** share in upside and cost saves, and a stock-for-stock deal can be a tax-free reorganization
- **MOEs** require stock by design; fixed exchange ratios are standard (both sides share market risk until close)
- **Exceptions:** small tuck-ins, excess-capital acquirers, FDIC failed-bank deals, and some cash-and-stock mixes (e.g., PNC–FirstBank)` },

  { id: 'bval-18', t: 'bval', q: `What regulatory approvals does a US bank merger need, and what changed recently?`, a: `- **Federal Reserve:** Bank Holding Company Act approval for holding company acquisitions
- **Bank Merger Act:** OCC (national banks), FDIC (state non-member banks) or Fed (state member banks), plus state regulators
- **DOJ antitrust review:** deposit concentration (HHI) in local markets → branch divestitures if needed
- **Factors:** competition, financial and managerial resources, CRA and fair lending records, AML/BSA compliance, financial stability for large deals
- Shareholder votes (typically both sides in stock deals)
- **2025 shift:** regulators withdrew or revised 2024 merger policy changes and restored faster review — approval timelines that stretched toward a year or more in 2023–24 shortened markedly (verify current status)
- **Cautionary tale:** TD–First Horizon was terminated in 2023 after approvals stalled over TD's AML problems` },

  { id: 'bval-19', t: 'bval', q: `What is pro forma CET1, and why does it matter in a bank deal?`, a: `**The combined CET1 ratio at close after all deal adjustments — it decides whether the deal is affordable.**
- **Numerator:** acquirer CET1 + target CET1 + new equity issued − goodwill and CDI created (net of DTL) − after-tax merger charges − after-tax fair value marks − any Day 2 CECL provision
- **Denominator:** combined RWA (adjusted for fair value marks and divestitures)
- Must stay above the regulatory minimum + SCB + management buffer; a shortfall means a capital raise, paused buybacks, or balance sheet repositioning (e.g., selling securities)
- Investors also watch the **pro forma TCE ratio** and how quickly capital rebuilds
- Crossing into a higher category (e.g., Category III at $250B) can add requirements — model them`, adv: true },

  { id: 'bval-20', t: 'bval', q: `What is a bargain purchase gain? Give FIG examples.`, a: `**When the fair value of net assets acquired exceeds the price paid, the "negative goodwill" is recognized as a gain in net income.**
- Common in failed-bank and government-brokered deals; in a normal deal it's a red flag that requires re-checking the valuation
- **JPMorgan–First Republic (May 2023):** FDIC-assisted; JPM paid the FDIC $10.6B, assumed ~$92B of deposits, and acquired ~$173B of loans and ~$30B of securities with FDIC loss-share → bargain purchase gain (~$2.6B estimated at announcement)
- JPM was allowed to exceed the 10% national deposit cap because First Republic had failed
- **UBS–Credit Suisse (March 2023):** CHF 3B all-stock against a much larger CS book value → ~$29B of negative goodwill`, adv: true },

  { id: 'bval-21', t: 'bval', q: `How would you judge whether a bank acquisition is a good deal for the acquirer?`, a: `## Strategic
- Market share and density in attractive markets, deposit franchise quality, fee capabilities, scale for technology and compliance spend, management and culture fit
## Financial
- **EPS accretion** (with fully phased-in cost saves, usually Yr 2), **TBVPS dilution and earnback**, **IRR** vs. cost of equity (often a mid-teens hurdle), pro forma **CET1 / TCE**, ROTCE and efficiency improvement
- Price paid vs. precedents (P/TBV, P/E, core deposit premium)
## Risks
- Credit diligence (CRE, marks), integration and systems conversion, deposit runoff, regulatory approval and timing, crossing size thresholds, social issues (CEO, board, HQ)
- **Market reaction:** investors have punished heavy TBV dilution and rewarded cost-saves-driven, low-dilution deals` },

  { id: 'bval-22', t: 'bval', q: `How are cost saves modeled in bank M&A?`, a: `- Expressed as a **% of the target's non-interest expense**: in-market deals ~25–40% (branch consolidation, overlapping back office, systems); out-of-market deals far less
- **Phase-in:** e.g., ~50–75% in year 1, 100% by year 2 after systems conversion
- **One-time merger charges** often run roughly 1–1.5x annual run-rate cost saves (severance, conversion, contract terminations, branch closures)
- **Revenue synergies** are usually excluded from the base case — investors give little credit
- Tax-effect cost saves in pro forma EPS; show sensitivity to lower realization` },

  { id: 'bval-23', t: 'bval', q: `What is "cash EPS" (tangible EPS), and why do bank acquirers use it?`, a: `**EPS excluding after-tax amortization of intangibles — mostly the CDI.**
- CDI amortization is non-cash, an artifact of acquisition accounting, and doesn't reduce tangible or regulatory capital
- Makes acquisitive banks comparable with organic growers; consistent with ROTCE, which adds back the same amortization
- Deal decks show EPS accretion on GAAP and cash/tangible bases; investors focus on the latter plus TBV earnback
- **Example:** GAAP EPS $4.00; CDI amortization $50M pre-tax = $37.5M after tax (25%) ÷ 250M shares = $0.15 → **cash EPS $4.15**` },

  { id: 'bval-24', t: 'bval', q: `Why do the $10B, $100B and $250B asset thresholds matter in bank M&A?`, a: `- **$10B:** Durbin debit interchange cap + CFPB supervision → lost fee income and higher compliance cost
- **$100B (Category IV):** supervisory stress tests and SCB, liquidity requirements, resolution planning, enhanced prudential standards; long-term debt and AOCI-in-capital proposals target this tier (verify current status)
- **$250B (Category III):** SLR, fuller LCR/NSFR, more supervisory intensity
- Banks tend to **"cross big"** — via a deal large enough that scale benefits outweigh the step-up costs (e.g., Fifth Third–Comerica creates a ~$288B bank, crossing $250B)
- Banks sitting just below a line often manage their size to avoid crossing; regulators have discussed indexing thresholds to economic growth (verify current status)` },

  { id: 'bval-25', t: 'bval', q: `What drove the 2025 wave of US bank M&A? Give examples.`, a: `**Scale economics + a friendlier regulatory backdrop + better deal math.**
- **Regulation:** new leadership at the Fed (supervision), OCC and FDIC; 2024 merger policy changes reversed; much faster approvals
- **Deal math:** stabilizing rates and a steeper curve shrank interest-rate marks → less TBV dilution; higher bank stock prices made better acquisition currency
- **Scale:** technology, cybersecurity and compliance costs reward size; larger brands gather deposits more cheaply
- **Sellers:** succession, easing credit (CRE) worries, limited standalone growth
- **Examples:** Pinnacle–Synovus (Jul 2025, ~$8.6B all-stock MOE), Huntington–Veritex (Jul 2025), PNC–FirstBank (Sep 2025, ~$4.1B cash and stock), Fifth Third–Comerica (Oct 2025, ~$10.9B all-stock), Huntington–Cadence (Oct 2025, ~$7.4B all-stock)
- Verify the latest status and terms before citing any deal in an interview` },

  { id: 'bval-26', t: 'bval', q: `What makes a bank an attractive acquisition target?`, a: `- **Low-cost, sticky core deposits** — high non-interest-bearing share, low beta, granular and operational accounts
- **Attractive markets** — high growth (Southeast, Texas, Mountain West) or an overlapping footprint → large cost saves
- **Clean credit** and conservative underwriting (limited office CRE)
- **Reasonable valuation** (P/TBV and P/E below the buyer's) and manageable rate marks
- Fee businesses (wealth, treasury management) and strong commercial relationships
- **Willing seller:** management succession, board fatigue, activist pressure
- A size that fits the buyer's regulatory threshold strategy` },

  { id: 'bval-27', t: 'bval', q: `Why might a bank trade below tangible book value?`, a: `- **ROTCE below its cost of equity** — structurally low profitability (P/TBV = (ROTCE − g) ÷ (Ke − g) < 1)
- **Credit fears:** concentrated office CRE, construction or consumer exposures → the market discounts reported book
- **Hidden losses:** large HTM unrealized losses (economic TBV < reported TBV)
- Weak or high-cost deposit franchise, or funding stress (e.g., many regionals in spring 2023)
- Regulatory or legal problems; sub-scale with little growth
- **Implication:** sub-1x banks are often targets — but acquirers must judge whether marks justify the discount` },

  { id: 'bval-28', t: 'bval', q: `How do you calculate the IRR on a bank acquisition?`, a: `**Treat the purchase price as the investment and the target's distributable cash flows as the returns.**
1. **Initial outflow:** deal value + after-tax merger charges − any excess capital at the target
2. **Annual inflows:** target net income + after-tax cost saves + accretion − CDI amortization, **less capital retained** to hold the target's RWA at the target CET1 ratio
3. **Terminal value:** exit P/E or P/TBV on terminal-year earnings or TBV
4. Solve for the IRR and compare it with the cost of equity — and with the return from buying back the acquirer's own stock
- Investors increasingly ask why a deal beats repurchasing shares`, adv: true },
];
