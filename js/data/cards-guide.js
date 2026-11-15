// Flashcards written to cover the study guides the user uploaded.
// Original wording — no text is copied from the guides. Topics map to the app's decks.
export default [
  // ─── bank ───
  { id: 'bank-h001', t: 'bank', q: `At a high level, how do you build a projection model for a bank?`, a: `**Start with the balance sheet, because for a bank it drives the income statement.**
1. **Balance sheet:** project loans and deposits by category first, then securities, cash and borrowings to balance the funding
2. **Rates:** link asset yields and funding costs to a benchmark (fed funds, SOFR, the curve) using deposit betas → interest income, interest expense, NII
3. **Fees and expenses:** growth rates or simple drivers (e.g., wealth fees on client assets, expenses vs an efficiency target)
4. **Provision:** expected net charge-offs plus reserve build on loan growth under CECL → pre-tax income → net income
5. **Capital:** compare CET1 with the target ratio × projected RWA; the gap sets dividends and buybacks (or limits loan growth)
6. **Cash flow statement:** mostly falls out of the balance-sheet changes and the income statement

- **Don't add back the provision** to "find cash flow" when valuing a bank: credit losses are as real an operating cost as interest expense, and charge-offs follow the reserve` },
  { id: 'bank-h002', t: 'bank', q: `What's the most important bank metric, and how do the other metrics roll up into it?`, a: `**ROTCE versus the cost of equity, since the gap between them sets the P/TBV multiple.**
## The chain
1. Average earning assets × NIM = **NII** (levers: balance-sheet growth, asset mix, funding cost)
2. + fee income − non-interest expense = **PPNR** (levers: efficiency ratio, fee mix)
3. − provision − taxes = **net income** (levers: credit quality, reserve builds and releases)
4. ÷ average tangible common equity = **ROTCE** (lever: capital level; surplus capital dilutes it)
5. ROTCE vs cost of equity → **P/TBV**, e.g., 15% ROTCE, 11% COE, 4% growth → (15 − 4) ÷ (11 − 4) ≈ 1.6x
## Return terminology
- **ROE:** net income ÷ average equity
- **ROCE:** in banking, return on common equity = (net income − preferred dividends) ÷ average common equity; if unsure, ask "return on common, right?"
- **ROTCE:** net income to common (often + after-tax intangible amortization) ÷ average tangible common equity
- **Example (BofA, 3Q26):** ROE 9.4% (on common) vs ROTCE 12.6% reported (verify current)` },
  { id: 'bank-h003', t: 'bank', q: `Give me Bank of America's 3Q26 scorecard and the story behind it.`, a: `**Know these cold for a BofA interview, and round when you speak (3Q26; verify current).**
- **Revenue** ~$30.0B (+3%); **NII** $16.4B (+8%), ~55% of revenue; **net interest yield** 2.16% (+15 bp)
- **Net income** $6.9B reported, $8.1B adjusted (excluding a $1.2B one-time charge); **diluted EPS** $0.91 reported, $1.08 adjusted
- **Returns:** ROE 9.4% and ROTCE 12.6% reported; 11.1% and 14.9% adjusted
- **Efficiency ratio** 66% reported, 62% adjusted; **NCO ratio** 0.44%
- **Capital:** CET1 10.9% vs a 10.0% requirement; $8.3B returned, including $6.0B of buybacks
- **Per share:** BVPS ~$39.26, TBVPS ~$29.14
- **Balance sheet:** average deposits ~$2.02T, average loans ~$1.23T (+6%)
- **The story:** NII growth as low-yielding fixed-rate securities and loans reprice higher, plus steady deposits, while excess CET1 is returned through buybacks` },
  // ─── cap ───
  { id: 'cap-h001', t: 'cap', q: `What's the difference between loss reserves and regulatory capital, and why do banks and insurers need both?`, a: `**Reserves cover the losses you expect; capital covers the ones you don't.**
- **Expected losses** are booked ahead of time through earnings: the allowance for credit losses at a bank, loss and claim reserves at an insurer
- **Unexpected losses** are absorbed by regulatory capital, mostly tangible common equity (CET1 at a bank, total adjusted capital in an insurer's RBC ratio)
- **Who's protected:** when a loan is written down, the right side of the balance sheet must shrink too; with enough capital, shareholders' equity takes the loss instead of depositors or policyholders
- **How it's policed:** capital ÷ risk-weighted assets (or ÷ total assets for leverage) must stay above minimums, e.g., CET1 ≥ 4.5% plus buffers
- **Liquidity is a separate test:** enough liquid assets to survive a 30-day run (LCR) and stable funding for the asset base (NSFR)
- **Link:** when a bank raises its loss estimate, a loss moves from "unexpected" to "expected": the reserve rises and capital falls` },
  { id: 'cap-h002', t: 'cap', q: `A bank has $1,000 of assets and $70 of CET1. Work out its RWA, CET1 ratio and leverage ratio. Why do regulators require both ratios?`, a: `**Same equity, very different ratios: RWA $590, CET1 ratio ~11.9%, leverage 7.0%.**
- $100 cash × 0% = $0
- $200 agency MBS × 20% = $40
- $300 first-lien mortgages × 50% = $150
- $400 C&I loans × 100% = $400

1. RWA = 0 + 40 + 150 + 400 = **$590**
2. CET1 ratio = 70 ÷ 590 ≈ **11.9%**
3. Tier 1 leverage = 70 ÷ 1,000 = **7.0%** (assuming no preferred, so Tier 1 = CET1)

- **Why both:** risk weights can understate risk (model error, 0% on Treasuries), so a leverage ratio acts as a blunt backstop
- **Mix matters:** shift the $200 of MBS into C&I loans and RWA rise by $160 to $750 → CET1 ratio drops to ~9.3% with total assets unchanged
- Securities-heavy, low-risk balance sheets tend to be bound by leverage; loan-heavy ones by CET1` },
  { id: 'cap-h003', t: 'cap', q: `How is Bank of America's CET1 requirement built, how much cushion does it run, and why not hold more?`, a: `**4.5% minimum + 2.5% stress capital buffer + 3.0% GSIB surcharge = 10.0%; BofA ran ~10.9% at 3Q26 (verify current).**
- **SCB:** BofA sits at the 2.5% floor; the Fed kept existing SCBs in place in early 2026
- **GSIB surcharge:** the higher of Method 1 (~1.5% for BofA) and Method 2 (~3.0%, which penalizes short-term wholesale funding) → 3.0%
- No countercyclical buffer on top (set at 0% in the US)
- **Management cushion ~90 bp** (10.9% − 10.0%); the ratio fell ~37 bp in 3Q26 as BofA returned $8.3B
- **Why keep a cushion:** a ratio inside the buffer zone automatically restricts payouts (dividends, repurchases, discretionary bonuses)
- **Why not hold far more:** surplus capital inflates the ROTCE denominator and drags returns, so banks keep a modest cushion and return the rest
- **Talking point:** easing rules (Basel re-proposal, SCB and surcharge changes) → more room for buybacks and M&A` },
  { id: 'cap-h004', t: 'cap', q: `What changed in US bank capital and accounting rules in 2025–26?`, a: `**The direction is easing: lower capital requirements, faster deal approvals and a fix to a CECL quirk (verify each before citing).**
- **Basel III endgame re-proposal (Mar 19, 2026):** combined with the GSIB-surcharge and SCB changes, CET1 requirements for Category I–II banks fall ~5%; a separate proposal ends the AOCI opt-out for Category III–IV banks, with a five-year transition; comments closed June 18, 2026, so check for a final rule
- **eSLR recalibration:** BofA's all-in SLR requirement dropped to 3.75% from January 1, 2026
- **Stress capital buffers:** the Fed left current SCBs in place (February 2026) while revisiting the stress-test framework
- **CECL double count fixed:** ASU 2025-08 (Nov 2025) ends the day-one provision on acquired seasoned loans, effective for fiscal years starting after Dec 15, 2026
- **Merger approvals:** far quicker than in 2021–24
- **So what:** more excess capital for buybacks, lending and M&A, and smaller TBV hits in bank deals` },
  { id: 'cap-h005', t: 'cap', q: `How much CET1 are the big US banks running (3Q26), and what's the read-through?`, a: `**Closer to their requirements, with the excess going back to shareholders (3Q26; verify current).**
- **Bank of America:** CET1 10.9% vs a 10.0% requirement, down ~37 bp q/q after $8.3B of capital return
- **JPMorgan:** ~13.9%, down from 14.2% in 2Q26; ROE ~17%
- **Wells Fargo:** ~10.0%, down from 11.0% a year earlier; SLR 5.7%, LCR 122%
- **Read-through:** with rules easing, the largest banks are letting CET1 drift down toward requirements and paying out the difference through buybacks and dividends
- **Context:** euro-area significant banks averaged ~16% CET1 in 2Q26 (ECB), so US banks run leaner
- **How to use it:** quote the ratio, the requirement and the trend, then say what it means for buybacks or M&A capacity` },
  // ─── bval ───
  { id: 'bval-h001', t: 'bval', q: `What are FIG's sub-sectors, and which valuation methods fit each? When do EV/EBITDA and a DCF work?`, a: `**Sort FIG by where profit comes from: balance-sheet spread businesses get equity methods; capital-light fee businesses can use corporate methods.**
## Balance-sheet businesses (value the equity)
- **Banks:** spread + fees → P/TBV vs ROTCE, P/E, excess-capital DDM
- **Insurers:** underwriting + income on float → P/BV ex-AOCI vs ROE, P/E; life adds DDM/free cash flow and (mostly outside the US) embedded value
- **Specialty lenders:** spread on receivables → P/E and P/TBV vs ROE; **BDCs** on P/NAV, dividend yield and NII coverage
## Fee businesses (corporate methods work)
- **Traditional asset managers:** P/E, EV/EBITDA, DCF; organic growth and fee rate drive the multiple
- **Alternative managers:** sum of the parts: FRE at a high multiple, performance fees at a lower one, plus balance-sheet investments
- **Insurance brokers, payments, fintech, broker-dealers:** EV/EBITDA, P/E, EV/Revenue for high growth
- **Quick test:** if most income comes off the balance sheet (interest spread, investment income, underwriting), use equity methods; if it comes from fees, transactions or subscriptions, debt is a financing choice again and EV methods work` },
  { id: 'bval-h002', t: 'bval', q: `Work a simple excess-capital DDM for a bank, and show how it ties to the justified P/TBV formula.`, a: `**Setup ($M):** RWA 10,000; CET1 1,100 (11.0%) vs a 10.0% target → required 1,000, so **100 of excess**; year-1 net income 150; NI and RWA grow 4%; cost of equity 11%.

1. **Distributable capital** = NI − increase in required CET1 (+ the starting excess in year 1)
2. Yr 1: 150 − 40 + 100 = 210 → PV 189.2; Yr 2: 156.0 − 41.6 = 114.4 → PV 92.8
3. Yrs 3–5: ~119.0, ~123.7, ~128.7 → PVs 87.0, 81.5, 76.4 (sum of yrs 1–5 ≈ 526.9)
4. **Terminal value:** yr-6 distribution ≈ 128.7 × 1.04 ≈ 133.8 ÷ (11% − 4%) ≈ 1,912 → PV ≈ 1,134.6
5. **Equity value** ≈ 526.9 + 1,134.6 ≈ **1,661.5**, about 1.51x the starting 1,100 of tangible equity

- ~68% of the value is terminal → always show sensitivities to cost of equity and growth
## Tie-out to P/TBV
- Year-1 earnings over the capital the bank must hold: 150 ÷ 1,000 = 15% ROTCE
- Justified P/TBV = (15% − 4%) ÷ (11% − 4%) ≈ 1.571x → ~1,571 on the 1,000 of required capital
- Add the PV of the 100 of excess paid out in year 1 (≈ 90) → ≈ **1,661**: justified P/TBV is just a DDM in compact form`, adv: true },
  { id: 'bval-h003', t: 'bval', q: `Work through a bank deal: TBV dilution, EPS accretion and earnback.`, a: `**Setup:** buyer earns $500M on 200M shares at $30 (12.0x EPS, 1.5x TBV of $4.0B = $20.00/share). Target earns $100M, has $1.0B of TBV, $250M of non-interest expense and $8.0B of core deposits. Terms: 100% stock at 1.6x target TBV = $1.6B. Assume $600M of goodwill + CDI (fair-value marks offset), $60M of after-tax one-time charges, cost saves equal to 35% of the target's expense base, $10M of pre-tax CDI amortization and a 21% tax rate.

1. New shares = 1,600 ÷ 30 ≈ 53.3M → 253.3M pro forma
2. Pro forma TBV = 4,000 + 1,600 − 600 − 60 = 4,940 → TBVPS ≈ $19.50 vs $20.00 → **−2.5%**
3. Pro forma NI = 500 + 100 + 69.1 (87.5 of saves × 0.79) − 7.9 (CDI amortization after tax) = 661.2 → EPS ≈ $2.61 vs $2.50 → **+4.4%**
4. Tangible EPS adds back CDI amortization: 669.1 ÷ 253.3 ≈ $2.64 → ~$0.14/yr uplift
5. Simple earnback ≈ 0.50 ÷ 0.14 ≈ **3.5 years**, a bit beyond the ~3-year comfort zone

- **Price paid:** 1.6x TBV, 16.0x P/E (1,600 ÷ 100), core deposit premium (1,600 − 1,000) ÷ 8,000 = **7.5%**
- **Why dilutive:** paid 1.6x the target's TBV using stock worth only 1.5x its own TBV, plus deal charges`, adv: true },
  { id: 'bval-h004', t: 'bval', q: `Where does US bank M&A stand heading into 2026? Give numbers and deals.`, a: `**The busiest stretch in years, powered by faster approvals and stronger bank stocks (verify current).**
- **2025:** roughly 176–181 announced US bank deals, ~45% more than 2024; the largest was Fifth Third–Comerica (~$10.9B, Oct 2025)
- **1Q26:** 33 deals worth ~$15.7B, the biggest first quarter by value since 2019 (excluding Capital One–Discover)
- **Santander–Webster (~$12.2B, 1Q26):** the biggest US bank acquisition since 2021 (BMO–Bank of the West); a foreign bank buying US scale
- **Prosperity–Stellar (~$2.0B, 1Q26):** a serial Texas acquirer adding scale
- **Valuations:** $10–100B banks went into 2026 at ~11x 2026E EPS and ~1.6x TBV
- **Why now:** quicker regulatory approvals, firmer share prices to use as currency, and a sense the window may close when the political cycle turns
- **Active buyers:** Huntington, PNC and other regionals` },
  // ─── ins ───
  { id: 'ins-h001', t: 'ins', q: `How is modeling and valuing an insurer different from a bank?`, a: `**Both are valued on equity, but an insurer's model runs off premiums, not off the balance sheet.**
## What's shared
- Equity value only (no EV/EBITDA), cost of equity rather than WACC, dividend discount models
- P/E and book-value multiples read against ROE; regulators limit capital and payouts
## What's different
- **Driver:** a bank model starts with loans and deposits; an insurer's starts with premiums written and earned, then losses, expenses and investment income on the float
- **Revenue mix:** premiums make non-interest revenue the bulk of an insurer's top line
- **Accounting:** statutory accounting (more conservative, closer to cash) runs alongside GAAP and sets capital and dividend capacity
- **Capital:** RBC ratio = total adjusted capital ÷ a formula-based risk charge, instead of CET1 ÷ RWA
- **Valuation extras:** book value is usually taken ex-AOCI; life insurers add embedded value (especially outside the US)` },
  { id: 'ins-h002', t: 'ins', q: `Walk a P&C premium through the statements: $100 written, $40 earned, 10% commissions, 25% tax. Then show a full year of the policy's economics.`, a: `## Statement walk (ignore claims; tax paid in cash)
- Commissions are paid in cash on written premium (10% × 100 = 10), but only the earned share is expensed (10% × 40 = 4); the other 6 is capitalized as **DAC**
- **IS:** earned premium +40, commissions −4 → pre-tax +36 → NI +27
- **CFS:** NI 27 + rise in unearned premium reserve 60 − rise in DAC 6 → **cash +81**
- **BS:** cash +81, DAC +6 → assets +87; UPR +60, equity +27 → +87
- Sanity check: collected 100, paid 10 of commission and 9 of tax → 81
## A full year on a $100 policy
- At writing: cash +100 and UPR +100, no revenue yet; premium is earned evenly over 12 months
- Losses 65 + loss adjustment expense 5 → 70% loss ratio, carried as loss reserves until paid
- Underwriting expenses 25 → 25% expense ratio
- Combined ratio 95% → **$5 of underwriting profit**, plus investment income on the float until claims are paid` },
  { id: 'ins-h003', t: 'ins', q: `How do you build an embedded value for a life insurer, and what are P/EV and VNB?`, a: `**Embedded value = adjusted net asset value + present value of future profits from policies already in force.**
1. **Adjusted NAV:** mark assets and liabilities to market and take the difference
2. **Freeze the book:** assume no new sales, so every future cash flow comes from today's policies
3. **Project revenue:** premiums net of lapses (cancellations) plus investment income on the backing assets
4. **Subtract** cash claims, commissions and operating costs; apply tax; adjust for capital the block must hold or can release
5. **Discount** after-tax profits at the cost of equity until the block runs off, then add to adjusted NAV

- **Related metrics:** price ÷ EV (P/EV), return on EV (ROEV), and value of new business (VNB): the value created by the year's new sales
- Mostly used by European and Asian insurers; US investors lean on P/BV ex-AOCI, P/E and free cash flow
- **Other life metrics:** investment spread (new-money and portfolio yield vs crediting rate), persistency, mortality and morbidity vs pricing` },
  { id: 'ins-h004', t: 'ins', q: `What are the main insurance segments, and how do P&C and life insurers compare?`, a: `**All insurers take premiums up front and pay claims later, but the segments run very different businesses.**
## Segments
- **P&C:** auto, home, commercial lines; profit = underwriting margin + float income; risks: cats, social inflation, reserves, the pricing cycle
- **Life & annuity:** life policies, annuities, group benefits; profit = investment spread + mortality/morbidity margins + fees; risks: rates, credit, longevity, lapses, guarantees
- **Reinsurers:** insure insurers (treaty or facultative, quota share or excess of loss) and give cedents capital relief; tail and counterparty risk
- **Brokers:** asset-light intermediaries (Marsh, Aon, Gallagher, WTW) earning commissions and fees; valued on EV/EBITDA
## P&C vs life
- **Policy length:** ~1–3 years vs 20–30+ years
- **Model:** P&C is a flow business won on underwriting; life is a spread business that lives on investment returns and rates
- **Balance sheet:** life is more complex (e.g., separate accounts for policyholder funds)
- **Valuation:** both on P/E, P/BV and DDMs; life adds embedded value, P/EV and ROEV` },
  { id: 'ins-h005', t: 'ins', q: `Where is the US P&C market in 2025–26? Cover the combined ratio, cat load, pricing and capital.`, a: `**Very profitable and flush with capital, which is why property pricing is softening (verify current).**
- **Combined ratio:** 92.9% in 2025 (96.6% in 2024), the best in over a decade, ~$63B of underwriting profit; 92.7% in 1H26 vs 96.5% a year earlier
- **Cat load:** cat losses are quoted in combined-ratio points; the January 2025 Los Angeles wildfires alone added ~14.5 points to the industry's 1Q25 ratio
- **Premiums:** net written ~$976B in 2025 (+5%), with growth slowing to ~2% in 1H26
- **Pricing (Marsh, 2Q26):** US commercial property −13%, casualty +7% (+11% excluding workers' comp) → soft property, firm casualty on social inflation
- **Capital:** policyholders' surplus ~$1.3T → premium-to-surplus (NWP ÷ surplus, a P&C leverage gauge) ~0.8x, far below the ~3x level regulators flag
- **So what:** excess capital and fat margins push rates down; adverse casualty reserve trends are the risk to watch` },
  { id: 'ins-h006', t: 'ins', q: `Beyond the RBC ratio, how do you assess an insurer's capital?`, a: `**Regulators, rating agencies and the holding company each test capital differently, and the tightest one binds.**
- **What NAIC RBC charges (life):** C-1 asset/credit, C-2 insurance, C-3 interest-rate and market, C-4 business risk, with a covariance adjustment; for P&C the big charges are reserve, premium and asset risk
- **Acronym traps:** in RBC, ACL = authorized control level (not a bank's allowance) and company action level = 2 × ACL, so 400% of ACL = 200% of CAL; NII here means net investment income
- **Benchmarks:** large public life insurers target ~400%+ of ACL; the NAIC industry aggregate (885% at YE25, median ~1,016%) isn't comparable
- **Rating agencies** (AM Best's BCAR, S&P, Moody's) often bind before regulators, because ratings drive sales
- **P&C leverage:** written premium and loss reserves each measured against surplus (premium-to-surplus gets flagged above ~3x)
- **Outside the US:** Solvency II ratio = own funds ÷ SCR (≥100%); Bermuda's BSCR matters for reinsurers and sidecars
- **Holdco:** debt-to-capital ~20–30%, fixed-charge coverage, 1–2 years of debt service and dividends in cash
- **Don't overshoot:** surplus capital dilutes ROE, just as at banks` },
  { id: 'ins-h007', t: 'ins', q: `Why do life insurers do big reinsurance and block deals, and how are they structured? Use Lincoln–Fortitude Re.`, a: `**To free statutory capital, de-risk legacy blocks and lift free cash flow, even at a GAAP earnings cost.**
## Structures
- **Coinsurance:** a pro-rata slice of the risk moves to the reinsurer, together with the matching reserves and assets
- **Modified coinsurance (modco) / funds withheld:** similar risk transfer, but the assets stay on the ceding insurer's balance sheet
- **Yearly renewable term (YRT):** transfers mortality risk only
- **Block deals:** offload old books of business, e.g., long-term care, variable annuities or secondary-guarantee UL, by sale or reinsurance
- **Sidecars, captives, cat bonds:** bring outside capital to specific risks
## Case: Lincoln–Fortitude Re (2023)
- Ceded ~$28B of in-force statutory reserves (UL with secondary guarantees, MoneyGuard and fixed annuities) through coinsurance; Lincoln kept policy administration
- Expected to add ~15 RBC points at close (from 375–385% at 3Q23 toward 400–410% at YE23) and raise ongoing free cash flow, while diluting GAAP earnings
- **Lesson:** for a capital-constrained life insurer, statutory capital and cash beat GAAP EPS` },
  { id: 'ins-h008', t: 'ins', q: `What insurance deals and trends should you know going into 2026?`, a: `**Megadeals in life and retirement, private capital buying in, and insurers owning asset managers (verify current).**
- **Volume:** ~$29.6B across 191 insurance deals from Dec 2025 to May 2026 (PwC), led by megadeals
- **Corebridge–Equitable (~$22B, Mar 2026):** combines two retirement/life/wealth franchises (~$1.5T of AUM/AUA) → scale in annuities and retirement
- **Private capital in life & annuity:** Aquarian–Brighthouse, plus big asset-intensive reinsurance deals (RGA–Equitable)
- **Insurers owning origination:** Sun Life bought out the last 49% of Crescent for C$829M, a ~$50B private-credit manager (Mar 2026)
- **Specialty P&C consolidation:** the announced Zurich–Beazley combination
- **Partnerships short of ownership:** Sixth Street–Northwestern Mutual ($13B, 2025) and AIG–CVC (up to $3.5B)
- **Theme to voice:** long-dated insurance liabilities need private-credit assets, and alternative managers want permanent capital` },
  // ─── am ───
  { id: 'am-h001', t: 'am', q: `Why is asset management consolidating, and why are traditional managers buying alternatives?`, a: `**Fee pressure on one side, a richer profit pool in alternatives on the other.**
- **Fee compression:** money keeps shifting to cheap passive products, and many active managers suffer net outflows
- **Rising fixed costs:** technology, data and distribution reward scale
- **Not all AUM is equal:** by one industry estimate, alternatives are ~18% of AUM but ~57% of revenue → higher, stickier fees
- **The response:** acquire scale to cut costs, and buy alternatives or private-credit capabilities (to defend fee rates)
- **Examples (verify current):**
  - Victory Capital–First Eagle (Aug 2026, ~$7.0B): scale plus a $41B CLO and alternative-credit platform
  - Nuveen–Schroders (Feb 2026, ~£9.9B): ~$2.5T combined AUM, incl. ~$414B in private markets
  - Private-credit roll-ups: Brookfield taking the rest of Oaktree, Franklin Templeton–Apera, Sun Life–Crescent
- **Activity:** ~156 asset and wealth manager deals worth ~$113B in 2025 (McKinsey)
- **The catch:** the assets can walk out the door, so talent retention and client consents decide whether a deal works` },
  { id: 'am-h002', t: 'am', q: `How do RIA aggregators create value, and who is driving wealth consolidation?`, a: `**They roll up independent advisory firms and make the combined platform worth more than the pieces.**
- **Buy:** stakes in independent RIAs, usually with private-equity backing
- **Improve:** centralize compliance, technology and back office; give founders a succession path; recruit advisors onto the platform
- **Multiple arbitrage:** buy small firms at lower EBITDA multiples than the scaled platform commands, then add organic growth on top
- **Who's buying:** of 120 RIA transactions in 1H26 (Fidelity data), 89% had PE-backed buyers; deal count fell ~9% y/y while assets acquired rose ~88% → bigger targets (verify current)
- **Risks:** advisor and client retention, integration, leverage at PE-owned platforms, rising prices as buyers compete
- **Valuation:** EV/EBITDA, driven by organic growth, margins and retention` },
  { id: 'am-h003', t: 'am', q: `What matters in an asset-management acquisition, and why do client consents decide deals?`, a: `**The assets are people and client relationships, so retention and consents decide the outcome.**
## Rationale
- Scale (platform, operations, distribution), new capabilities (alternatives, private credit, ETFs, international), distribution access (wealth, retirement, insurance general accounts), permanent capital
## Risks
- Portfolio-manager and client departures, culture clashes, product overlap, revenue dis-synergies when clients cap their exposure to any one manager
## Structures and metrics
- Deal forms: earnouts, retention pools and rollover equity to keep people; minority GP stakes or full take-privates
- P/E, EV/EBITDA, EV/FRE for alternatives; EV/AUM only as a rough check because fee rates and margins vary so much
## Why consents matter
- **Advisers Act:** advisory agreements need client consent to be assigned, and a change of control is treated as an assignment
- **Investment Company Act:** a US mutual fund's advisory contract ends automatically on assignment → the fund's board and shareholders must approve a new one
- So client consents become a standard closing condition (Janus Henderson's take-private needed them)` },
  { id: 'am-h004', t: 'am', q: `Pitch the Janus Henderson take-private.`, a: `**A contested take-private where the investment teams' support decided the winner (verify current).**
- **Deal:** Trian and General Catalyst signed on Dec 21, 2025 to buy Janus Henderson (JHG) at $49/share (~$7.4B equity value), with QIA, Lunate and Sun Hung Kai in the investor group
- **Contest:** Victory Capital floated a rival proposal of nearly $9B; investment teams overseeing most of JHG's assets opposed it, and Victory withdrew
- **Close:** June 30, 2026 at $52/share; JHG delisted
- **Thesis:** invest in growth, AI and distribution away from public-market pressure
- **Banks involved:** committed debt from JPMorgan, Citi, BofA, Jefferies, MUFG, SMBC, UBS and Morgan Stanley; Goldman Sachs was the special committee's advisor; Jefferies and Citi represented the buyers
- **Lesson:** an asset manager's value walks around on two legs; without team backing and client consents, a bigger headline bid can still lose
- **Interview angle:** at Citi or BofA, mention the firm's financing or advisory role` },
  { id: 'am-h005', t: 'am', q: `What is the Victory Capital–First Eagle deal, and why does it matter?`, a: `**One deal that delivers both scale and an alternatives arm (announced Aug 26, 2026; verify current).**
- **Consideration:** ~$7.0B = ~$4.4B cash + ~$2.0B of new Victory stock + $575M of assumed 7.25% notes due 2032
- **Scale:** ~$222B of First Eagle AUM → ~$571B pro forma
- **Capability:** First Eagle's ~$41B CLO and alternative-credit business becomes Victory's alternatives platform
- **Integration model:** First Eagle keeps its brand and investment independence on Victory's shared operating and distribution platform → cost saves without losing the investment teams
- **Timing:** expected to close by the end of 1Q27
- **Advisors:** PJT (lead) and RBC for Victory; UBS for First Eagle
- **Context:** Victory had earlier made a rival bid for Janus Henderson; this is a serial consolidator finding another route to scale` },
  { id: 'am-h006', t: 'am', q: `What was the LPL–Commonwealth deal, and what does it teach about wealth M&A economics?`, a: `**In wealth management you're buying advisors who can leave, so retention is the deal (verify current).**
- **Deal:** LPL paid ~$2.7B in cash for Commonwealth (~3,000 advisors, ~$285–305B of assets); announced Mar 2025, closed Aug 1, 2025
- **Target:** ~90% advisor retention, with full asset conversion expected by 4Q26
- **Recruiting war:** rivals reportedly offered more than 100% of an advisor's trailing-12-month compensation; LPL reportedly paid retention bonuses worth ~10–50 bps of assets; trackers counted ~650 advisor departures in 2025
- **Platform economics:** revenue = advisory fees + commissions + product fees + net interest on swept client cash; independent broker-dealers pay most of it out to advisors (LPL's payout runs in the high-80s %)
- **Lesson:** model retention scenarios, not just the purchase price; every departing advisor takes revenue along` },
  // ─── fin ───
  { id: 'fin-h001', t: 'fin', q: `Listed vs non-traded BDCs: how do they differ, and how did BDCs hold up in the 2026 private-credit stress?`, a: `**Same kind of loans, different liquidity: listed BDCs trade on an exchange, non-traded BDCs redeem at NAV but ration redemptions.**
## Structure
- Both are regulated closed-end vehicles that make mostly senior secured, floating-rate loans to mid-sized private companies; they distribute ≥90% of taxable income and must keep 150% asset coverage (at most ~2.0x debt/equity; most run ~1.0–1.25x)
- **Listed:** daily liquidity at the market price, so shares can sit well below NAV in stress
- **Non-traded (perpetual):** subscribe and redeem at NAV, but redemptions are usually capped at ~5% of NAV per quarter
## The 2026 stress (verify current)
- 1Q26 redemption requests at non-traded BDCs averaged ~12.3% of NAV, ~2.4x what was paid out; most funds held the 5% cap, a few raised it with sponsor support (BCRED paid 7.9%)
- Listed BDCs averaged ~0.85x price-to-NAV in late April 2026
- Top-20 listed BDCs: ~2.1% average non-accruals; PIK ~8.1% of income
- Pain concentrated in corporate direct lending; asset-based finance held up better` },
  { id: 'fin-h002', t: 'fin', q: `Why are banks lending to nonbank lenders, and what's the evidence?`, a: `**Banks are financing the lenders that took share from them: partner rather than compete head-on.**
- **Evidence:** the FDIC reported bank loans up 6.8% y/y in 2Q26, with growth led by loans to nondepository financial institutions (NDFIs) and loans to purchase or carry securities (verify current)
- **How:** subscription lines to private-credit funds, warehouse lines to consumer and mortgage lenders, asset-based facilities and back leverage
- **Why banks like it:** senior, secured, diversified exposure that sits ahead of the fund's equity, plus fee and deposit relationships with large asset managers
- **Why nonbanks need it:** without insured deposits, bank leverage is how they fund growth and lift returns
- **Risks:** opacity and interconnectedness, concentration in a few sponsors, correlated losses if private credit turns
- **Interview hook:** it's the clearest sign that banks, private credit and insurers are converging` },
  // ─── mkt ───
  { id: 'mkt-g001', t: 'mkt', q: `Explain the difference between a bond's coupon rate, its current yield and its yield to maturity.`, a: `**The coupon is fixed cash interest on par; current yield is that coupon over today's price; YTM is your full annualized return if you buy now and hold to maturity.**
- **Coupon rate:** annual interest ÷ par, set at issuance. 6% on $1,000 par = $60 a year.
- **Current yield:** annual coupon ÷ market price. At $1,080: $60 / $1,080 ≈ 5.6%.
- **YTM:** the discount rate (IRR) that makes the PV of all remaining coupons and principal equal the price; assumes no default and coupons reinvested at that same rate.
- **Ordering:** premium bond (price above par): coupon > current yield > YTM, because the $80 premium is lost by maturity. For a discount bond the order flips.
- So in this example YTM must be below ~5.6%; the exact figure needs the maturity.` },
  { id: 'mkt-g002', t: 'mkt', q: `How do you value a bond?`, a: `**Discount its coupons and principal at the yield investors demand today on comparable bonds, then add them up.**
- The discount rate is the current market yield on bonds of similar credit quality and maturity, not the bond's own coupon.
- Price = sum of each coupon ÷ (1 + y)^t, plus par ÷ (1 + y)^n.
- Example: a 10-year 5% coupon bond when comparable bonds yield 6% → every cash flow discounted at 6% → price ≈ $92.6 per $100 of par (a discount).
- Price and yield move inversely: if comparable yields fall below the coupon, the bond trades above par.

**FIG angle:** banks and insurers carry AFS bond portfolios at these market prices, so rising yields flow straight into AOCI and tangible book value.` },
  { id: 'mkt-g003', t: 'mkt', q: `How can you quickly approximate a bond's yield to maturity? Try (a) $100 face bought at $95 with an 8% coupon and 5 years left, and (b) a 10% coupon bond at 50 with 5 years left.`, a: `**Approximate YTM ≈ [annual coupon + (face − price) ÷ years] ÷ [(face + price) ÷ 2].**
- Intuition: the coupon plus the discount accreting toward par each year, measured against the average amount invested.
## (a) Bought at 95
- [8 + (100 − 95) / 5] / 97.5 = 9 / 97.5 ≈ 9.2%.
- Mental check: 9/100 = 9% and 9/90 = 10%, so "just over 9%." Exact ≈ 9.3%.
## (b) Deep discount at 50
- [10 + (100 − 50) / 5] / 75 = 20 / 75 ≈ 27%.
- Exact ≈ 30% with semiannual coupons (~31% annual): the shortcut understates yields on deep-discount bonds.
- Caveat: YTM assumes every coupon and all principal are paid on time; for distressed debt that's unlikely, so the quoted YTM overstates the expected return.` },
  { id: 'mkt-g004', t: 'mkt', q: `Which bond is more sensitive to interest-rate changes: a 10% coupon bond or a 5% coupon bond with the same maturity and yield?`, a: `**The 5% coupon bond: more of its value rides on the distant principal payment, so its duration is longer.**
- High-coupon bonds return more cash early; low-coupon bonds back-load value into the final repayment.
- Distant cash flows are hit hardest when the discount rate changes, so a lower coupon means higher duration and bigger % price swings.
- Example (10-year bonds at a 7% yield): Macaulay duration ≈ 7.1 years for the 10% coupon vs. ≈ 7.9 years for the 5% coupon. A zero-coupon bond's duration equals its maturity.
- Same logic: longer maturity → higher duration.

**FIG angle:** banks bought low-coupon, long-dated MBS and Treasuries in 2020–21; when rates jumped, those long durations produced large AOCI and HTM losses (e.g., SVB).` },
  { id: 'mkt-g005', t: 'mkt', q: `What is yield to worst, and how does it compare with yield to maturity for bonds trading at a discount vs. a premium?`, a: `**Yield to worst (YTW) is the lowest yield you can earn absent a default: the minimum of the YTM and the yield to each possible call date.**
- **Yield to call (YTC):** your IRR if the issuer repays early on a call date, usually at a small premium to par.
- **Discount bond: YTW = YTM.** An early call hands you par sooner, so you collect the discount over fewer years and your yield goes up; the worst case is holding to maturity.
- **Premium bond: YTW ≤ YTM.** An early call cuts short the years of above-market coupons that offset the premium you paid, and the call premium may not compensate.
- Callable bonds are typically quoted and compared on YTW.

**FIG angle:** bank preferreds and subordinated notes are usually callable (often at the first reset date), so investors focus on yield to call and yield to worst.` },
  { id: 'mkt-g006', t: 'mkt', q: `What's your read on recent equity market and deal-making conditions? How should you structure the answer?`, a: `**Give a crisp 60–90 second view: markets, rates and credit, deal activity, then what it means for FIG deal flow.**
1. **Markets:** where the S&P 500 and bank stocks (KBW Bank Index, KRE) stand and the recent direction.
2. **Rates and credit:** the Fed's path, the 10-year yield and curve shape, investment-grade and high-yield spreads.
3. **Deal activity:** M&A volume and themes, whether the IPO/ECM window is open, debt financing conditions, sponsor and private credit activity.
4. **FIG specifics:** bank stocks vs. the market, pace of bank M&A and regulatory approvals, and 2–3 recent deals you can discuss (parties, size, rationale).
5. **Your view:** what it all means for deal flow over the next 12 months, plus one key risk.
- Refresh every number the week of the interview (verify current); precise figures beat vague adjectives.
- Take a position, but acknowledge the other side.` },
  { id: 'mkt-h001', t: 'mkt', q: `What do the latest FDIC numbers say about the US banking industry (2Q26)?`, a: `**Healthy and improving: steady margins, higher profits, better credit (FDIC, 2Q26; verify current).**
- **NIM ~3.3%** (3.32%, up 1 bp q/q) and **ROA ~1.4%** (1.37%)
- **Net income ~$90B** for the quarter, up ~12% q/q
- **Loans +1.8% q/q, +6.8% y/y**, with growth led by loans to nondepository financial institutions (NDFIs) and margin-type lending against securities
- **Domestic deposits +0.8% q/q**, the eighth quarterly increase in a row
- **Credit:** delinquencies, nonaccruals and net charge-offs all declined
- ~4,240 insured institutions, 47 on the problem-bank list; Deposit Insurance Fund reserve ratio ~1.48%
- **So what:** banks are growing by financing private-credit and specialty lenders rather than fighting them, and improving credit plus stable margins support earnings and capital return` },
  // ─── acc ───
  { id: 'acc-g001', t: 'acc', q: `How do you calculate EBIT and EBITDA for a public company from its filings?`, a: `**Start from reported operating income, strip out one-offs to get EBIT, then add D&A from the cash flow statement to get EBITDA.**
1. **EBIT:** take operating income from the income statement.
2. Add back non-recurring charges that reduced it (restructuring, impairments, litigation, deal costs) and remove one-time gains.
3. **EBITDA:** adjusted EBIT + D&A.
- Take D&A from the cash flow statement: on the income statement it is often folded into COGS and SG&A, so a separate line may understate it or not exist.
- Use the footnotes and MD&A to judge what is truly non-recurring, and apply the same adjustments to every company in the peer set.

**FIG angle:** you won't build EBITDA for a bank or insurer (interest and investment income are operating items), but you will for brokers, payments companies and asset managers.` },
  { id: 'acc-i001', t: 'acc', q: `How might a UK or German company's financial statements differ from a US company's?`, a: `**Income statements and balance sheets look broadly alike; the main differences are in the cash flow statement and leases.**
- **Cash flow starting point:** IFRS filers often start from operating profit or profit before tax instead of net income, and some use the direct method (cash received from customers less cash paid out).
- **Classification choices:** IFRS lets companies place interest paid and dividends in different sections (operating or financing), so rearrange the statement to match US peers before comparing. IFRS 18, effective in 2027, narrows these choices.
- **Leases:** IFRS 16 treats nearly all leases like finance leases (depreciation plus interest), so EBITDA is higher than at a US company paying the same rent as an operating lease expense.
- **Other:** IFRS bans LIFO and allows some impairment reversals (never for goodwill).

**FIG angle:** Barclays reports under IFRS. Its loan loss reserves follow IFRS 9's three stages (12 months of expected losses for performing loans, lifetime losses once credit risk rises significantly), not US CECL's lifetime losses from day one, so reserves and provisions aren't directly comparable with Citi, BofA or Wells.` },
  { id: 'acc-i002', t: 'acc', q: `How do you decide whether a revenue or expense item belongs on the income statement?`, a: `**Two tests: the item must belong entirely to this period, and it must change the profit available to common shareholders.**
1. **This period only:** revenue and expenses follow delivery. A service delivered in Year 1 counts only in Year 1. A factory that will be used for 20 years can't be expensed when bought; it's capitalized and depreciated over its life.
2. **Affects common shareholders' income:** if an item doesn't change what's left for the common owners, it stays off the income statement.
- That's why preferred dividends are subtracted to reach net income to common (preferred holders are paid ahead of common), while common dividends are not an expense: they distribute profit already earned.
- Debt and equity issuance, principal repayment and capex fail these tests, so they appear only on the CFS and BS.

**FIG angle:** banks issue preferred stock to fill Additional Tier 1 capital, so their EPS, ROE and ROTCE are all calculated on net income available to common, after preferred dividends.` },
  { id: 'acc-i003', t: 'acc', q: `Why is accounts receivable an asset but deferred revenue a liability? And why do companies bill a year of service upfront?`, a: `**They're mirror images: AR is delivered but not yet paid for; deferred revenue is paid for but not yet delivered.**
- **AR = asset:** the company has done the work and is owed cash, a future benefit.
- **Deferred revenue = liability:** the company holds the cash but still owes the product or service, an obligation it must spend money to fulfil.
## Billing upfront
- Only companies with pricing power and sticky customers can do it; cash today is worth more than cash later, and it funds growth.
- Collecting $1,200 for a year of service: deferred revenue +$1,200, a positive in CFO right away.
- Each month $100 is recognized as revenue and deferred revenue falls $100, a negative CFS adjustment, because that cash came in earlier.

**FIG angle:** insurers work the same way. Premiums collected upfront sit in the unearned premium reserve (a liability) and are earned over the policy term; that cash, plus loss reserves, is the float insurers invest.` },
  { id: 'acc-i004', t: 'acc', q: `What are deferred taxes, how do they show up on the cash flow statement, and how do NOLs create a deferred tax asset?`, a: `**Deferred taxes bridge book taxes (on the income statement) and the cash taxes actually paid; a CFS line adjusts net income for the difference.**
- **Cash taxes below book taxes → positive CFS adjustment, DTL builds.** Example: tax depreciation exceeds book depreciation by $40; at 25%, cash taxes are $10 lower, so the deferred tax line is +$10 and the DTL rises $10. It reverses as the asset ages.
- **Cash taxes above book taxes → negative CFS adjustment, DTA builds.** Example: $20 of stock-based comp or an impairment is expensed now but deductible only later (at vesting or exercise, or when the asset is sold), so cash taxes run $5 above book taxes until then.
- **NOLs:** past losses offset future taxable income; the DTA ≈ NOL × tax rate. $400 of NOLs at 25% → about a $100 DTA (less a valuation allowance if future profits are doubtful).` },
  { id: 'acc-i005', t: 'acc', q: `How do you calculate free cash flow in its simplest form, and what does it tell you?`, a: `**Simplest version: FCF = cash flow from operations − capex, the cash left after running and maintaining the business and paying interest.**
- CFO items are largely unavoidable, while most of CFI and CFF is discretionary (acquisitions, buybacks, dividends). Capex is the exception the business needs to keep operating, so it's deducted.
- Interest is already inside CFO, so this is a levered measure (close to levered FCF before debt repayment).
- **Positive and growing:** the company funds itself and can hire, reinvest, acquire, pay dividends or buy back stock.
- **Negative or shrinking:** it may need to raise capital, cut costs, restructure or grow fast enough to fix it.
- Example: CFO $150, capex $60 → FCF $90.

**FIG angle:** for a bank, the equivalent is the earnings it can distribute while keeping CET1 at target: profits minus the capital needed to support balance sheet growth. That's what a bank DDM discounts.` },
  { id: 'acc-i006', t: 'acc', q: `What does positive or negative working capital tell you, and what does the change in working capital tell you?`, a: `**Use operating working capital (operating current assets − operating current liabilities, excluding cash, investments and debt) and read the sign by asking what causes it.**
## The level
- Shows whether the business ties up more in operating assets (receivables, inventory) than it gets from operating liabilities (payables, deferred revenue).
- **Negative because customers prepay** (large deferred revenue, little inventory or AR): a sign of efficiency and pricing power.
- **Positive because receivables are piling up** from slow collections: a warning sign.
- Long-term operating items, such as long-term deferred revenue, can be included.
## The change
- Tells you whether growth **consumes** cash (spending ahead of sales) or **generates** it.
- **Retailers:** inventory is bought before it sells, so growth usually uses cash.
- **Subscription software:** upfront billing raises deferred revenue, so growth adds cash.
- It feeds FCF and helps explain why cash flow differs from net income.` },
  { id: 'acc-i007', t: 'acc', q: `A company's EBITDA grew 20% a year for three years and management calls it a proxy for operating cash flow, yet the company went bankrupt. How?`, a: `**EBITDA leaves out many real cash uses, so a company can post rising EBITDA while burning cash.**
- **Interest and debt maturities:** heavy leverage can absorb all operating cash, and a maturity it can't refinance forces a filing.
- **Capex:** capital-intensive growth can cost more than EBITDA brings in.
- **Working capital:** fast growth can trap cash in receivables and inventory.
- **Acquisitions:** a costly or failed deal drains cash that never shows up in EBITDA.
- **Taxes and one-time items:** restructuring, litigation and other "non-recurring" charges that get adjusted away still cost cash.
- Bankruptcy is about liquidity (running out of cash or failing to refinance), not reported profit.

**FIG angle:** this is why lenders, including private credit funds and BDCs, underwrite on cash coverage (fixed-charge coverage, free cash flow) and scrutinize EBITDA add-backs rather than trust headline EBITDA.` },
  { id: 'acc-i008', t: 'acc', q: `How do you calculate ROIC, and what does it tell you?`, a: `**ROIC = NOPAT ÷ average invested capital: after-tax operating profit earned on all the capital, debt and equity, put into the business.**
- **NOPAT** = operating income × (1 − tax rate).
- **Invested capital** = common equity + debt + preferred − cash (variants exist; be consistent across peers).
- **Example:** operating income $200 at a 25% tax rate → NOPAT $150. Average equity $600 + debt $400 + preferred $0 − cash $100 = $900 invested capital → ROIC ≈ 16.7%.
- **Reading it:** ROIC above WACC creates value; among similar companies, the one with higher ROIC usually deserves the higher multiple because each dollar invested earns more.
- It ignores capital structure, so it compares companies with different leverage fairly.

**FIG angle:** ROIC isn't used for banks or insurers, because debt and deposits are their raw material rather than financing. Use ROE, ROTCE and ROA against the cost of equity.` },
  { id: 'acc-i009', t: 'acc', q: `What are the pros and cons of ROE, ROA and ROIC as performance measures?`, a: `**All three measure after-tax profit per dollar of a capital base; they differ in what goes in the numerator and denominator.**
- **ROE = net income ÷ average equity.** General-purpose and based on real reported earnings, but leverage flatters it: more debt and less equity lift ROE without improving the business.
- **ROA = net income ÷ average assets.** Best where the assets are the business (banks, insurers); it also uses net income, so capital structure still matters.
- **ROIC = NOPAT ÷ invested capital.** Neutral to capital structure, so good for comparing operations, but NOPAT is a constructed figure that never appears on the statements and sits further from actual cash.
- Link: ROE ≈ ROA × (assets ÷ equity).

**FIG angle:** banks are judged on ROA (about 1.0–1.3% is solid) and ROTCE. At 10x leverage a 1.2% ROA becomes a 12% ROE, which is why regulators cap leverage and investors compare ROTCE with the cost of equity.` },
  { id: 'acc-i010', t: 'acc', q: `A company hires an employee at a total cost of $100K a year. Walk through the statements (25% tax rate).`, a: `**A plain cash operating expense: net income and cash both fall $75K.**
- **IS:** operating expenses +$100K → pre-tax income −$100K → taxes −$25K → net income −$75K.
- **CFS:** net income −$75K, no non-cash or working capital items → cash −$75K.
- **BS:** cash −$75K → assets −$75K; retained earnings −$75K → liabilities + equity −$75K. Balanced.
- **Intuition:** $100K spent, $25K saved in taxes.
- If part of the pay is accrued but unpaid at year-end (e.g., a bonus), accrued expenses rise and cash falls less.` },
  { id: 'acc-i011', t: 'acc', q: `An agency delivers a $10K campaign and invoices with 60 days to pay. Walk through the statements now, then when the bill is paid (25% tax rate).`, a: `**Expense now, cash later: accounts payable bridges the gap.**
## When invoiced
- **IS:** operating expenses +$10K → net income −$7.5K.
- **CFS:** net income −$7.5K, increase in AP +$10K → cash +$2.5K.
- **BS:** cash +$2.5K; AP +$10K, retained earnings −$7.5K → L + E +$2.5K. Balanced.
- Cash rises because the tax saving arrives before the bill is paid.
## When paid (this step only)
- **IS:** no change; the expense was already recorded.
- **CFS:** decrease in AP −$10K → cash −$10K.
- **BS:** cash −$10K; AP −$10K. Balanced.
## Start to finish
- Cash −$7.5K ($10K paid less $2.5K of tax savings); AP back where it started; equity −$7.5K.` },
  { id: 'acc-i012', t: 'acc', q: `A company borrows $200 at 10%. Walk through the first year, combining issuance and interest; then add a 20% principal repayment on December 31 (25% tax rate).`, a: `**Issuance touches only the CFS and BS; interest hits the IS; principal repayment is never an expense.**
## Issuance + a full year of interest
- **IS:** interest $20 → pre-tax −$20 → net income −$15.
- **CFS:** net income −$15; debt issued +$200 in CFF → cash +$185.
- **BS:** cash +$185; debt +$200, retained earnings −$15 → L + E +$185. Balanced.
- Intuition: $200 raised, $20 of interest paid, $5 tax shield.
## Add 20% amortization on December 31
- Repayment = 20% × $200 = $40; not deductible, and interest stays $20 because the full principal was outstanding all year.
- **IS:** unchanged; net income −$15.
- **CFS:** extra −$40 in CFF → cash +$145.
- **BS:** cash +$145; debt +$160, retained earnings −$15 → L + E +$145. Balanced.` },
  { id: 'acc-i013', t: 'acc', q: `Under US GAAP, a company signs a 10-year operating lease on January 1 at $160 a year with a 5% discount rate (PV ≈ $1,200). Walk through year 1 (25% tax rate).`, a: `**One rent line on the IS; the right-of-use asset and lease liability sit on the BS and shrink by the implied principal.**
- **Setup:** ROU asset and lease liability +$1,200. Implied interest = 5% × $1,200 = $60, so implied principal (and ROU amortization) = $160 − $60 = $100.
- **IS:** rent expense $160 → pre-tax −$160 → net income −$120.
- **CFS:** net income −$120. The $1,200 asset and liability additions offset, as do the $100 declines in each → cash −$120 (the whole payment sits in CFO).
- **BS:** cash −$120, ROU asset +$1,100 → assets +$980; lease liability +$1,100, retained earnings −$120 → L + E +$980. Balanced.
- **Intuition:** a $160 cash expense less $40 of tax savings. With a level payment, the interest piece shrinks and the principal piece grows each year.` },
  { id: 'acc-i014', t: 'acc', q: `Walk through the same lease ($160 a year, 10 years, 5%, PV ≈ $1,200) under IFRS 16, or as a US GAAP finance lease (25% tax rate).`, a: `**Rent is replaced by depreciation plus interest: EBITDA rises, but year-1 net income falls more than under an operating lease.**
- **Setup:** depreciation = $1,200 ÷ 10 = $120; interest = 5% × $1,200 = $60; principal repaid = $160 − $60 = $100.
- **IS:** depreciation $120 + interest $60 → pre-tax −$180 → net income −$135.
- **CFS:** net income −$135, add back depreciation +$120 → CFO −$15; lease principal −$100 in CFF → cash −$115. (The $1,200 asset and liability additions are non-cash and offset.)
- **BS:** cash −$115, lease asset +$1,080 ($1,200 − $120) → assets +$965; lease liability +$1,100, retained earnings −$135 → L + E +$965. Balanced.
- **Intuition:** −$160 of cash rent plus a tax benefit on $180 of expense (25% × $180 = $45) → −$115.
- Expense is front-loaded: interest shrinks each year, so later years' total expense drops below $160.` },
  { id: 'acc-i015', t: 'acc', q: `A company buys a $200 factory with $200 of debt. In year 1 it pays 10% interest, depreciates 10% of the factory and repays 5% of principal; then it sells the factory for $220 and repays the remaining debt. Walk through year 1 and the sale separately (25% tax rate).`, a: `**Year 1: cash −$20. Sale: cash +$20.** (The purchase itself: PP&E +$200, debt +$200, no IS or net cash change.)
## Year 1
- Interest $20, depreciation $20, principal repaid $10.
- **IS:** pre-tax −$40 → net income −$30.
- **CFS:** −$30 + $20 depreciation → CFO −$10; −$10 principal in CFF → cash −$20.
- **BS:** cash −$20, PP&E −$20 → assets −$40; debt −$10, retained earnings −$30 → L + E −$40. Balanced.
## Sale at $220 (book value $180, debt left $190)
- **IS:** gain $40 → net income +$30.
- **CFS:** +$30, subtract the $40 gain in CFO; +$220 in CFI; −$190 in CFF → cash +$20.
- **BS:** cash +$20, PP&E −$180 → assets −$160; debt −$190, retained earnings +$30 → L + E −$160. Balanced.
- **Intuition:** $220 of proceeds, less $10 of tax on the gain, less $190 of debt repaid = +$20.` },
  { id: 'acc-i016', t: 'acc', q: `A retailer buys $200 of inventory on credit, then sells it for $400, incurs $100 of operating expenses and pays the supplier. Walk through each step separately (25% tax rate).`, a: `**Step 1 changes only the balance sheet; step 2 leaves cash up by the $75 after-tax profit.**
## Step 1: buy on credit
- **IS:** no change.
- **CFS:** inventory up (−$200) and AP up (+$200) offset → cash unchanged.
- **BS:** inventory +$200; AP +$200. Balanced.
- AP doesn't have to match an income statement expense; here it funds inventory.
## Step 2: sell, pay opex and pay the supplier
- **IS:** revenue $400 − COGS $200 − opex $100 → pre-tax +$100 → net income +$75.
- **CFS:** +$75; inventory falls (+$200); AP falls (−$200) → cash +$75.
- **BS:** cash +$75, inventory −$200 → assets −$125; AP −$200, retained earnings +$75 → L + E −$125. Balanced.
- **Combined:** assets and L + E both +$75, the after-tax profit.` },
  // ─── ev ───
  { id: 'ev-g001', t: 'ev', q: `For forward multiples (e.g., EV / next-year EBITDA), do you use today's EV or a projected future EV?`, a: `**Always today's equity value or EV; only the denominator looks forward.**
- Today's price already reflects the market's view of both past results and future prospects; a forward multiple simply shows what investors pay now for next year's earnings.
- Projecting EV or equity value would mean predicting what the market will believe at a future date, which no one can do.
- So: current EV ÷ NTM or Year-2 EBITDA; current share price ÷ next-year EPS.
- Keep periods consistent across the peer set (calendarize fiscal years).` },
  { id: 'ev-g002', t: 'ev', q: `Revenue $100, 15% EBIT margin, D&A 5% of revenue, equity value $100, cash $20, debt $40, lease liabilities $30. What's TEV/EBITDA?`, a: `**6.0x, assuming US GAAP operating leases.**
1. EBITDA = EBIT $15 + D&A $5 = $20.
2. TEV = $100 equity − $20 cash + $40 debt = $120.
3. TEV/EBITDA = $120 / $20 = 6.0x.
- **The lease judgment:** under US GAAP operating leases, rent is an operating expense that already reduces EBITDA, so leave the $30 liability out of TEV; counting it in both places penalizes the company twice.
- If these were finance leases or IFRS 16 figures, the lease cost sits in D&A and interest (below EBITDA), so add the liability: ($120 + $30) / $20 = 7.5x.
- Good interview move: ask which accounting regime and lease type apply before answering.` },
  { id: 'ev-g003', t: 'ev', q: `How does reporting under IFRS 16 instead of US GAAP (operating leases) change EBIT margin, D&A as a % of revenue and TEV/EBITDA?`, a: `**IFRS 16 moves lease cost out of operating expenses into depreciation and interest, so EBIT, D&A and EBITDA all rise, and TEV rises because lease liabilities are added.**
- **US GAAP operating lease:** one straight-line rent charge inside operating expenses, above EBIT and EBITDA.
- **IFRS 16:** the cost splits into right-of-use asset depreciation (inside D&A) and lease interest (below EBIT).
- **EBIT margin rises:** only the depreciation piece is deducted, not the full rent.
- **D&A as % of revenue rises:** it now includes lease depreciation.
- **EBITDA rises by the full lease cost.**
- **TEV rises:** lease liabilities are treated as debt-like and added.
- **TEV/EBITDA:** numerator and denominator both increase, so the multiple moves only modestly, and you need the actual figures to know which way.` },
  { id: 'ev-g004', t: 'ev', q: `When should you use EBITDAR and a lease-adjusted EV (e.g., for retail or global logistics comps)?`, a: `**When lease-heavy peers report under different rules or have very different lease mixes: lease-adjusted TEV / EBITDAR puts them on the same footing.**
- **The problem:** IFRS 16 puts almost all lease cost below EBITDA; US GAAP keeps operating lease rent above EBITDA but finance lease cost below it.
- So an IFRS filer, or a US company with mostly finance leases, shows a flattered EBITDA next to a US peer that mostly uses operating leases. Owning vs. leasing stores, ships or warehouses distorts the comparison further.
- **The fix:** EBITDAR = EBITDA + rent/lease expense; numerator = TEV + all lease liabilities.
  - IFRS filers have little rent left to add back; US GAAP filers add back operating lease rent.
- If every peer reports under IFRS, plain TEV/EBITDA with leases in TEV is usually enough; EBITDAR matters once US GAAP filers or very different lease mixes enter the set.
- Consistency rule: whatever lease claim goes into the numerator, the matching cost must come out of the denominator.` },
  { id: 'ev-g005', t: 'ev', q: `What are the pros and cons of TEV/EBITDA vs. TEV/EBIT vs. P/E?`, a: `**TEV/EBITDA is the cleanest comparison, TEV/EBIT reflects capital intensity, and P/E is the most familiar but the noisiest, except in FIG, where it leads.**
- **TEV/EBITDA:** neutral to capital structure, depreciation policy and tax. Best when capex needs are similar or small. Con: ignores capex, so it flatters capital-heavy businesses.
- **TEV/EBIT:** still financing-neutral, but depreciation acts as a proxy for past capex, so capital-hungry companies look more expensive. Use it when peers' reinvestment needs differ.
- **P/E:** universally quoted and tied to EPS, but it absorbs leverage, tax rates, non-core income and one-offs, so it normalizes poorly across companies.

**FIG angle:** for banks and insurers, interest and investment income are operating items, so EV metrics don't work; P/E (with P/TBV or P/BV) is the primary multiple.` },
  { id: 'ev-g006', t: 'ev', q: `A company trading at 10x TEV/EBITDA sells an operating asset for 2x that asset's EBITDA. What happens to EV, equity value, TEV/EBITDA and P/E?`, a: `**EV falls, equity value stays flat absent a gain or loss, and both multiples most likely rise.**
## Example
- EBITDA $100 (the asset contributes $20); EV = $1,000 (10x).
- Proceeds = 2 × $20 = $40 of cash.
- **EV:** an operating asset turned into cash, which EV nets out → $1,000 − $40 = $960.
- **TEV/EBITDA:** $960 / $80 = 12x; the company gave up EBITDA far more cheaply than the 10x the market pays for the whole.
## Equity side
- **Equity value:** unchanged mechanically if the asset sells at book value (net assets are the same); it moves only if a gain or loss flows through net income. In practice the market may mark the stock down for a value-destroying sale.
- **P/E:** likely rises, since net income loses the asset's earnings while equity value holds. Not certain: interest on the $40 offsets a little, and the asset's own leverage and tax profile may differ from the company's.` },
  { id: 'ev-g007', t: 'ev', q: `Company A: P/E 15x, net income $120, TEV/EBITDA 15x, EBITDA $150. Company B: P/E 15x, net income $100, TEV/EBITDA 10x, EBITDA $200. Which has more net debt?`, a: `**B. Back out equity value and EV from the multiples, then take the difference.**
- **A:** equity value = 15 × $120 = $1,800; EV = 15 × $150 = $2,250 → net debt ≈ $450.
- **B:** equity value = 15 × $100 = $1,500; EV = 10 × $200 = $2,000 → net debt ≈ $500.
- This assumes no other bridge items; if preferred, NCI or equity investments exist, EV minus equity value captures all of them, not just net debt.
- Takeaway: identical P/Es say nothing about leverage; the gap between the equity and EV multiples does.` },
  { id: 'ev-g008', t: 'ev', q: `Operating income $100, $500 of debt at 4%, $100 of cash earning nothing, equity value $600, P/E 12x, 25% tax. What can you infer about EV?`, a: `**About $10 of earnings goes to someone other than common shareholders, most likely preferred holders, so EV must exceed $1,000.**
1. Net income implied by P/E: $600 / 12 = $50.
2. Net income built up: ($100 − $20 interest) × (1 − 25%) = $60.
3. The ~$10 gap: P/E uses net income to common, so a claim sits in between. Most likely preferred dividends (not tax-deductible); a noncontrolling interest's share is the other candidate.
4. EV = $600 − $100 + $500 + that claim = $1,000 + preferred (or NCI). At an 8% dividend rate, ~$125 of preferred → EV ≈ $1,125.

**FIG angle:** many banks have preferred outstanding; EPS and P/E are measured after preferred dividends, and the preferred counts as Additional Tier 1 capital, not common equity.` },
  { id: 'ev-j001', t: 'ev', q: `What do equity value and enterprise value really mean, and why do you need both? Explain with an analogy.`, a: `**Equity value is everything the company owns net of everything it owes, but only for common shareholders; EV is just the core business, but for every investor group.**
- **Equity value:** the market value of net assets (total assets − total liabilities), owned by common shareholders.
- **Enterprise value:** the value of net operating assets (operating assets − operating liabilities), owned by equity, debt, preferred and other capital providers together.

## Analogy
- You buy a $500K home with $100K down: the home (EV) is $500K, your equity is $100K.
- Put $250K down instead: your equity becomes $250K, but the home is still worth $500K. Financing changes equity value, not EV.

## Why you need both
- Some methods output EV (a DCF on unlevered FCF, EV/EBITDA comps); others output equity value (P/E), so you must bridge between them to compare.
- EV lets you compare businesses with different leverage; equity value answers what the shares are worth, which is what most clients care about.` },
  { id: 'ev-j002', t: 'ev', q: `What's the difference between current and implied enterprise value? Give a real-life example.`, a: `**Current EV is what the market says the business is worth today; implied EV is what your analysis says it should be worth.**
- **Current:** built from today's share price, diluted share count and latest balance sheet (+ debt, + preferred, − cash, etc.).
- **Implied:** the output of a valuation method, such as a DCF, trading comps or precedents.
- **Example:** a house is listed at $500K (current). After studying nearby sales and local trends, you think it's worth $450K (implied), so it looks overpriced.
- Comparing the two is the point of valuation work: implied above current suggests the company is undervalued, and vice versa.
- The same applies to equity value: current = diluted shares × today's price; implied = implied EV bridged back to equity.` },
  { id: 'ev-j003', t: 'ev', q: `How do you treat pensions in the enterprise value bridge?`, a: `**Add only the unfunded portion of defined-benefit plans, usually after tax.**
- **Defined-contribution plans:** ignore them. The company's obligation ends once it contributes, so there's no balance sheet liability.
- **Defined-benefit plans:** add max(0, pension obligations − plan assets). A surplus is usually ignored (some treat it as a non-operating asset).
- **Why it's debt-like:** employees accepted lower pay today in exchange for promised retirement payments, so they're effectively another group of creditors.
- **Tax effect:** if contributions to fund the deficit are tax-deductible, add deficit × (1 − tax rate).
- **Example:** obligations $500, plan assets $400, 25% tax → add $100 × 0.75 = $75.

**FIG angle:** life insurers take these liabilities onto their own balance sheets through pension risk transfer (PRT) deals, so the same funded-status math drives that business.`, adv: true },
  { id: 'ev-j004', t: 'ev', q: `What two rules tell you how a transaction changes equity value and EV? Give an example of each type of change.`, a: `**Equity value moves with common shareholders' equity; EV moves with net operating assets. How the deal is financed doesn't matter.**
1. **Does common shareholders' equity (CSE) change?** Equity value changes by the same amount. Drivers: net income, dividends, stock issuance, buybacks.
2. **Do net operating assets (NOA) change?** EV changes by the same amount, whichever investor group paid for it.

## Examples
- **Equity value only:** issue $100 of stock and keep the cash → CSE +$100, NOA flat.
- **EV only:** borrow $100 and buy a factory → NOA +$100, CSE flat.
- **Both:** issue $100 of stock and buy a factory → CSE +$100 and NOA +$100.
- **Bridge check (debt case):** equity value flat, debt +$100 → EV +$100.

(Assumes assets are worth what was paid for them.)` },
  { id: 'ev-j005', t: 'ev', q: `A company issues $200 of stock. How do equity value and EV change if it (a) holds the cash, (b) spends $100 buying a business, or (c) spends $100 on a single asset?`, a: `**Equity value rises $200 in every case; EV rises only by the operating assets acquired.**
- **(a) Hold the cash:** CSE +$200 → equity value +$200. Cash isn't operating, so NOA is flat → EV unchanged (the extra $200 of cash offsets the higher equity value).
- **(b) Buy a business for $100:** equity value still +$200. $100 stays as cash; $100 becomes acquired operating assets → NOA +$100 → EV +$100.
- **(c) Buy one asset for $100:**
  - Operating asset, such as a factory: NOA +$100 → EV +$100.
  - Non-operating asset, such as short-term investments: NOA flat → EV unchanged.
- Rule: equity value follows common equity; EV follows net operating assets.` },
  { id: 'ev-j006', t: 'ev', q: `A company issues $100 of common and $100 of preferred stock and holds the cash, then pays $10 of common and $10 of preferred dividends. What happens to equity value and EV at each step?`, a: `**Step 1: equity value +$100, EV unchanged. Step 2: equity value −$20, EV unchanged.**

## Step 1: issuance
- Common stock raises CSE by $100 → equity value +$100.
- Preferred stock belongs to a separate investor group, so it doesn't change equity value.
- NOA is flat (it's all cash) → EV unchanged. Bridge: +$100 equity value + $100 preferred − $200 of extra cash = 0.

## Step 2: dividends
- Both common and preferred dividends are paid out of retained earnings, which sit in CSE → equity value −$20.
- NOA is flat → EV unchanged; the $20 drop in cash offsets the lower equity value.` },
  { id: 'ev-j007', t: 'ev', q: `Funded by $150 of new debt plus $50 of new stock, a company buys $175 of PP&E and $25 of short-term investments. What happens to equity value and EV?`, a: `**Equity value +$50; EV +$175.**
- **Equity value:** only the $50 stock issuance touches common equity → +$50. The debt doesn't.
- **EV:** PP&E is an operating asset → NOA +$175 → EV +$175. Short-term investments are non-operating, so the $25 adds nothing.
- **Bridge check:** cash raised and spent nets to zero, so +$50 equity value + $150 debt − $25 of new short-term investments = +$175.
- Financing mix decides the equity value change; what the money buys decides the EV change.` },
  { id: 'ev-j008', t: 'ev', q: `A company borrows $50 to buy a factory, but its EV rises by $100. A colleague says the debt explains it. Is he right?`, a: `**No. Financing never explains an EV change; only the change in net operating assets does.**
- If the factory were worth exactly what was paid, EV would rise $50 whether debt, stock or cash funded it.
- The extra $50 most likely means the market values the factory at ~$100 (the PV of its future cash flows) even though it cost $50 on the books.
- In effect the company bought the asset at a discount, and EV, a market value, reflects that.
- **Bridge view:** debt +$50, and the share price rises enough to add ~$50 of equity value → EV +$100. Shareholders capture the bargain.` },
  { id: 'ev-j009', t: 'ev', q: `A company buys $100 of inventory with cash, then later sells it for $200 (25% tax). How do equity value and EV change after step 1, and after both steps?`, a: `**Step 1: equity value flat, EV +$100. Both steps together: equity value +$75, EV unchanged.**

## Step 1: buy the inventory
- Nothing is sold yet, so no income statement impact → CSE and equity value unchanged.
- Cash (non-operating) becomes inventory (operating) → NOA +$100 → EV +$100.

## Steps 1 and 2 combined
- Revenue +$200, COGS −$100 → pre-tax income +$100 → net income +$75.
- Inventory goes up and back down (net zero); cash ends +$75 (−$100 + $200 − $25 tax).
- CSE +$75 → equity value +$75.
- NOA ends where it started → EV unchanged.
- Intuition: earning a profit and leaving it in cash doesn't make the core business more valuable.` },
  { id: 'ev-j010', t: 'ev', q: `10,000 shares at $20; 100 options with a $10 strike; 50 RSUs; 100 convertible bonds ($100 par, $10 conversion price). What's the diluted equity value?`, a: `**Diluted shares 11,100; diluted equity value $222,000 (vs. $200,000 basic).**
1. **Options (treasury stock method):** in the money ($10 < $20) → 100 new shares; the $1,000 of exercise proceeds buys back 50 → +50 net.
2. **RSUs:** no strike price, so add all 50 → +50.
3. **Convertibles (if-converted):** $10 conversion price < $20 → they convert. Shares per bond = $100 ÷ $10 = 10 → 100 bonds × 10 = +1,000.
4. **Total:** 10,000 + 50 + 50 + 1,000 = 11,100 × $20 = $222,000.
- In the EV bridge, drop the converted $10,000 of bonds from debt so they aren't counted twice.
- Tip: ask to write the numbers down before you start.` },
  // ─── val ───
  { id: 'val-g001', t: 'val', q: `Why do bankers use a DCF, and why is it split into an explicit forecast period and a terminal period?`, a: `**A company is worth the present value of its future cash flows; the two-stage split lets assumptions change over time before settling into a steady state.**
- A single perpetuity formula, cash flow ÷ (discount rate − growth), only works if growth and risk never change, which is unrealistic for most companies.
- **Explicit forecast (typically 5–10 years):** growth, margins, reinvestment and even the discount rate can vary year by year.
- **Terminal period:** steady-state assumptions, captured by a perpetuity growth rate or an exit multiple.
- Discount both periods' cash flows and add them up to get implied value.
- Compare implied value with the current market value or asking price to judge whether the company looks over- or undervalued.` },
  { id: 'val-g002', t: 'val', q: `How does a levered DCF differ from an unlevered DCF, and should the two give the same value?`, a: `**A levered DCF values equity directly: equity cash flows, the cost of equity, an equity-based terminal value and no EV bridge. In practice the two rarely match.**
## Differences
- **Cash flows:** levered FCF deducts net interest (before taxes) and includes debt issued and repaid.
- **Discount rate:** cost of equity, since the cash flows belong only to common shareholders.
- **Terminal value:** an equity multiple such as P/E, or equity value ÷ levered FCF.
- **Bridge:** none; PV of levered FCF + PV of terminal value = implied equity value.
## Why the answers differ
- The unlevered DCF captures debt cost only indirectly through WACC; the levered DCF deducts interest directly.
- Levered FCF swings with borrowing and repayment, so it's lumpy.
- Truly consistent assumptions are very hard to build, and levered DCFs are rarely used for corporates anyway.

**FIG angle:** a bank DDM uses the same equity-level logic: equity cash flows (dividends or excess capital) discounted at the cost of equity.` },
  { id: 'val-g003', t: 'val', q: `A client plans to raise debt from 10% to 30% of total capital. A colleague says an unlevered DCF won't be affected. Is that right?`, a: `**No. Unlevered FCF doesn't change, but the discount rate does.**
- UFCF excludes interest, so the cash flows themselves are unaffected (ignoring any operating effects).
- WACC changes: the weights shift toward cheaper after-tax debt, the cost of debt likely rises, and the relevered beta lifts the cost of equity.
- Moderate leverage usually lowers WACC and raises value; excessive leverage does the opposite.
- **How to model it:** calculate WACC under both the 10% and 30% structures, and if leverage changes gradually, use a year-by-year WACC across the forecast.
- Takeaway: no DCF is truly independent of capital structure.` },
  { id: 'val-g004', t: 'val', q: `What test decides which items belong in unlevered FCF? For example, why does the change in working capital count but net interest expense doesn't?`, a: `**UFCF pairs with enterprise value, so it includes only items that are recurring, tied to core operations and available to all capital providers.**
- Leave out anything non-recurring, unrelated to the core business, or belonging to just one group of investors.
- **Change in working capital:** recurring, operational and affects every investor → included.
- **Net interest expense:** a financing cost paid only to lenders → excluded; lenders' claim is handled through WACC and the bridge.
- Other examples: capex and D&A are in; dividends, debt repayment and one-time items such as gains on asset sales are out.` },
  { id: 'val-g005', t: 'val', q: `If an expense is deducted in a DCF's free cash flow, how should its related liability be treated in the EV-to-equity bridge? Apply the rule to leases.`, a: `**Count each claim once: deduct the expense in FCF or subtract the liability in the bridge, never both.**
- Expense deducted in FCF → leave the related liability out of the bridge, or you double count.
- Expense excluded from FCF → subtract the liability in the bridge instead.
- Classic case: UFCF ignores interest, so debt is subtracted in the bridge.
- The same rule covers pensions, leases and other debt-like items.
## Leases: two consistent options
1. **Simplest:** treat all lease expense as a cash operating cost in FCF, and keep lease liabilities out of both the bridge and WACC.
2. **Lease-as-debt:** exclude lease expense from FCF (deduct the change in lease liabilities instead), subtract lease liabilities in the bridge and include them in WACC.
- Option 2 is far more work and usually barely moves the answer; consistency is what matters.` },
  { id: 'val-g006', t: 'val', q: `When using an exit multiple for terminal value, should it come from trading comps or from precedent transactions?`, a: `**Trading comps, ideally forward multiples one or two years out.**
- Precedent multiples include a control premium, which doesn't belong in a standalone valuation of the company.
- Today's trading multiples may be inflated or depressed by current market conditions; consider longer-run averages too.
- Sanity check: back out the perpetuity growth rate the chosen multiple implies; if it's unreasonable, move the multiple up or down.` },
  { id: 'val-g007', t: 'val', q: `When might a DCF assume cash flows shrink forever (a negative terminal growth rate)? Give an example.`, a: `**When the business is in permanent decline, e.g., a drug company whose key product loses patent protection and is never replaced.**
- The perpetuity formula still works with g below zero: TV = FCF × (1 + g) ÷ (r − g); the denominator simply gets larger.
- Example: final-year FCF $100, r = 10%, g = −2% → TV = $98 / 12% ≈ $817, vs. $1,275 at +2% growth.
- A negative rate implies the business slowly winds down toward zero cash flow, but it is still worth something today.
- Other candidates: legacy media, declining physical products, businesses in run-off.

**FIG angle:** insurers' closed blocks and run-off books are valued on cash flows that shrink as policies mature.` },
  { id: 'val-g008', t: 'val', q: `What red flags in a finished DCF suggest the assumptions need rework, and what happens if you lengthen the forecast from 10 to 20 years?`, a: `**Look for growth and margins that never stabilize, a terminal value that dominates, double counting and unrealistic reinvestment.**
## Red flags
- Revenue and FCF growth still high in the final year; they should taper toward GDP or inflation-level growth.
- PV of terminal value near ~90%+ of the total: lengthen the forecast and recheck the implied growth rate and multiple.
- Margins still climbing late in the forecast instead of leveling off.
- Capex at or below D&A in later years and the terminal period even though growth is assumed to continue.
- Double counting: an expense deducted in UFCF whose liability also appears in the bridge.
## Lengthening the forecast (fast grower)
- The terminal value's share of total value falls (e.g., from ~70% to ~50%).
- Total value can rise or fall: it depends on the cash flows assumed for years 11–20 vs. what the old terminal value implied.` },
  { id: 'val-g009', t: 'val', q: `When do you need a stub period in a DCF, and how do you adjust the first year's cash flow and the discount periods?`, a: `**When the valuation date falls partway through the fiscal year: count only the cash flow still to come and shorten the first discount period.**
- A DCF values only future cash flows, so remove the part of the current year that has already happened.
- Example: valuing on September 30 with a December 31 year-end → include only Q4's FCF (3 months), discounted at 0.25 years (3 ÷ 12).
- Later years are discounted at 1.25, 2.25, 3.25 and so on.
- With the mid-year convention: the stub sits at 0.125 years (half of 0.25), then 0.75, 1.75, 2.75 and so on.` },
  { id: 'val-g010', t: 'val', q: `If the central bank raises short-term rates from 2% to 5%, how do WACC and DCF value likely change, and what's the caveat?`, a: `**Most likely WACC rises and value falls, but only to the extent long-term yields, the DCF's risk-free input, actually move.**
- A higher risk-free rate lifts the cost of equity (Rf + beta × ERP) and the cost of new debt, so WACC rises and present values fall.
- **Caveat:** DCFs use long-term government yields (e.g., the 10-year) for Rf, and short-term hikes don't always lift long-term yields; the curve can flatten or invert.
- If the 10-year yield, credit spreads and other inputs stay put, the valuation doesn't change.
- Second-order effects can matter too: slower growth forecasts, wider credit spreads, a different ERP.

**FIG angle:** for banks, higher short rates also change the cash flows: asset-sensitive banks earn more NII until deposit costs catch up, while fixed-rate bond portfolios lose value.` },
  { id: 'val-g011', t: 'val', q: `Which moves DCF value more: cutting average revenue growth from 10% to 5%, or cutting the discount rate from 10% to 5%? Why?`, a: `**Most likely the discount rate cut: it changes the PV of every cash flow and the terminal value, and the effect compounds.**
- **Discount rate:** with 2% terminal growth, r − g falls from 8% to 3%, so a perpetuity-growth terminal value rises ~2.7x before discounting (1/0.03 vs. 1/0.08), and every forecast cash flow is discounted less.
- **Growth cut:** year-10 revenue ends ~37% lower (1.05^10 ÷ 1.10^10 ≈ 0.63), and FCF may not fall proportionally: a big hit, but a more limited one.
- The exact answer depends on margins and the terminal value method, but a discount rate change of this size usually dominates.` },
  { id: 'val-g012', t: 'val', q: `How would a corporate tax cut from 35% to 20% affect a company's WACC and its DCF value?`, a: `**WACC edges up if the company has debt, but higher after-tax cash flows usually win, so value most likely rises.**
- **Cash flows:** NOPAT = EBIT × (1 − t) rises from 65% to 80% of EBIT, about 23% more after-tax operating profit.
- **Cost of debt:** a smaller tax shield raises the after-tax cost, e.g., 6% × 0.65 = 3.9% → 6% × 0.80 = 4.8%.
- **Cost of equity:** relevering uses (1 − t), so levered beta and the cost of equity rise slightly.
- WACC therefore rises modestly, but the cash flow increase usually outweighs it.
- **No debt:** WACC is unchanged and FCF rises, so value definitely increases.` },
  { id: 'val-g013', t: 'val', q: `How do you set discount rate inputs for a company operating across countries, and why is an emerging-market company worth less than an identical developed-market twin?`, a: `**Match the risk-free rate to the currency of the cash flows, weight country risk by where revenue comes from, and expect higher discount rates (lower value) in riskier markets.**
## Risk-free rate: match the currency
- USD cash flows → 10-year US Treasury; EUR → a euro-area government bond (typically German Bunds); GBP → 10-year gilts.
## Equity risk premium across countries
- Revenue-weighted ERP: each country's share of revenue × that country's ERP, summed.
- Country ERP = long-run stock market return minus that country's risk-free rate; if data is thin, start from the US ERP and add a country default spread.
## Emerging vs. developed twin
- Same financials, but the EM company faces more political, currency and default risk → higher Rf, ERP and cost of debt → higher discount rate → lower value.
- In reality faster growth might offset that, but the question holds the cash flows equal.` },
  { id: 'val-g014', t: 'val', q: `In plain terms, what do the discount rate, the cost of equity and WACC represent?`, a: `**All three are required returns: what investors could expect to earn elsewhere for taking similar risk.**
- **Discount rate:** the opportunity cost of capital, the return available on alternatives with comparable risk. Higher risk → higher rate → lower present value. It always depends on capital structure, since debt and equity levels change each group's risk.
- **Cost of equity:** the long-run annual return shareholders expect (price gains plus dividends) for bearing the stock's risk. To the company, it is the cost of funding with new shares, paid through dividends and dilution.
- **WACC:** the blended return from owning a proportional slice of all the company's capital (debt, preferred, equity). To the company, it is the average cost of funding operations with its current mix.
- **Hurdle rate:** investors buy in, and companies pursue projects or acquisitions, when the expected IRR exceeds WACC.

**FIG angle:** bank DDMs discount equity cash flows at the cost of equity, often around 10–12% for US banks (verify current).` },
  { id: 'val-g015', t: 'val', q: `What does beta tell you about a stock, and how do levered and unlevered beta differ? If a stock's beta is 2.0 and the market falls 10%, what should it do?`, a: `**Beta measures how much a stock tends to move with the market; a 2.0-beta stock should fall about 20%.**
- **Beta 1.0:** moves in line with the market (market +10% → stock ~+10%).
- **Beta 2.0:** amplifies both directions (market −10% → ~−20%; +10% → ~+20%).
- **Beta below 1.0:** more defensive (e.g., utilities, staples).
- **Levered beta** (what you observe) reflects business risk plus financial leverage risk; **unlevered beta** strips out leverage, leaving business risk only, so it is never higher than levered beta.
- In CAPM, higher beta → higher cost of equity: Ke = Rf + beta × ERP.

**FIG angle:** for banks, use observed levered beta directly; leverage is part of the business model, so unlevering and relevering doesn't apply.` },
  { id: 'val-g016', t: 'val', q: `Write out the beta unlevering and relevering formulas, including preferred stock, and explain the role of each term.`, a: `**Unlevered beta = levered beta ÷ [1 + (1 − t) × D/E + Pref/E]; relevered beta = unlevered beta × [1 + (1 − t) × D/E + Pref/E].**
- **The leading 1:** equity's own business risk, which is why unlevered beta can't exceed levered beta.
- **(1 − t) × D/E:** debt adds risk for shareholders, softened because interest is tax-deductible.
- **Pref/E:** preferred also ranks ahead of common and adds risk; no tax adjustment, since preferred dividends aren't deductible.
- **Dividing** strips each comp's leverage out; **multiplying** applies the target's own capital structure.
- Purpose: isolate pure business risk from comparables, then add back the target's financial risk when building its cost of equity.
- Example: levered beta 1.2, D/E 50%, t = 25%, no preferred → unlevered = 1.2 ÷ 1.375 ≈ 0.87.` },
  { id: 'val-g017', t: 'val', q: `Where do the cost of debt and cost of preferred in WACC come from, and why is only one of them tax-effected?`, a: `**Both reflect what the company would pay to issue new debt or preferred today, i.e., the yield investors earn holding them; only debt gets a tax adjustment.**
- **Cost of debt:** the YTM on the company's existing bonds, which reflects market prices rather than coupons; a 5% coupon bond trading below par has a YTM above 5%.
- **Fallbacks:** the risk-free rate plus a default spread for the company's (expected) rating, or a weighted-average interest rate on existing debt (less accurate if rates have moved).
- **Cost of preferred:** found the same way (the yield on its preferred), but it gets no (1 − t), because preferred dividends aren't tax-deductible.
- In WACC: Kd × (1 − t) × % debt + Kp × % preferred + Ke × % equity.` },
  { id: 'val-g018', t: 'val', q: `What is a liquidation valuation, how do you perform one, and when is it useful?`, a: `**Mark every asset to what it would fetch in a sale, subtract all liabilities, and what's left is the implied equity value.**
## Mechanics
- Book value × an assumed recovery rate for each asset:
  - Cash ~100%.
  - Receivables, inventory and other current assets ~50–90%.
  - PP&E varies widely (land and buildings vs. specialized equipment); may need an appraisal.
  - Goodwill 0%; other intangibles cut by half or more.
- Liabilities at ~100%, plus extras such as penalties or accrued interest.
- Adjusted assets − adjusted liabilities = implied equity value; ÷ diluted shares for per-share value (zero if negative).
## When it's useful
- Distressed companies: sets the worst-case floor and shows each creditor class's likely recovery. A Chapter 11 plan must give dissenting creditors at least their liquidation recovery (the best-interests test).
- Poor fit for healthy, growing companies: going-concern value is far higher, so it badly understates value.

**FIG angle:** it parallels the tangible book lens for banks: under stress, goodwill and intangibles are worth little.` },
  { id: 'val-g019', t: 'val', q: `A public company already has a share price and market cap. Why would you still need to value it?`, a: `**Because the market price is just today's consensus, and it can be wrong; valuation tests it under your own assumptions.**
- A buyer needs to know what the company is worth to it (including synergies) to decide what to offer; a seller needs to know what to accept.
- Investors use valuation to judge whether the stock is cheap or expensive.
- It shows how value changes under different assumptions (growth, margins, rates).
- Analogy: a home listed at $500K that your research says is worth about $450K gets a lower bid.` },
  { id: 'val-g020', t: 'val', q: `What are the main strengths and weaknesses of trading comps, precedent transactions and the DCF?`, a: `**Comps and precedents are market-based but depend on finding true peers; the DCF is the most theoretically grounded but rests on long-range assumptions.**
## Trading comps
- **Pros:** based on live market prices; quick to build and explain; no long-term forecast needed.
- **Cons:** true peers may not exist; unreliable for volatile or thinly traded stocks; can miss long-term potential.
## Precedent transactions
- **Pros:** real prices paid for whole companies, including control; can capture sector M&A trends.
- **Cons:** patchy or unreliable data; few truly similar deals; deal terms and the market at the time distort multiples.
## DCF
- **Pros:** grounded in finance theory; driven by the company's own fundamentals; less affected by short-term market swings.
- **Cons:** very sensitive to distant assumptions (terminal value, discount rate); no consensus on estimating the cost of equity and WACC.` },
  { id: 'val-g021', t: 'val', q: `A healthcare company and an industrial company each have $500M of EBITDA with equal growth and margins. Which is likely worth more?`, a: `**Probably the healthcare company, because it usually converts more EBITDA into free cash flow.**
- Many healthcare businesses are less asset-heavy: lower capex and working capital needs, so more of each EBITDA dollar becomes FCF.
- Example (pre-tax): if capex and working capital absorb 20% of EBITDA for one and 45% for the other, the same $500M yields $400M vs. $275M of cash flow.
- Many healthcare subsectors are also viewed as structurally higher-growth.
- Its discount rate could be higher, but stronger cash conversion and growth usually more than offset that.
- Flag it as a generalization; a real answer needs capex, working capital and risk details.` },
  { id: 'val-g022', t: 'val', q: `Walk me through how you use trading comps and precedent transactions to value a company, and how you choose the metrics and multiples.`, a: `**Pick peers, pick the multiples, take the range, and apply it to your company's metrics.**
1. **Select** peers and deals by industry, size and geography (plus a time window for deals).
2. **Choose metrics:** usually one sales-based multiple and one or two profit-based ones (e.g., TEV/Revenue, TEV/EBITDA, P/E), capturing both scale and profitability. Revenue multiples can be dropped when profits are stable and comparable.
3. **Match numerators:** EV for pre-interest metrics, equity value for post-interest metrics.
4. **Compute** the range for each multiple: low, 25th percentile, median, 75th percentile, high.
5. **Apply** them to your company's matching metric: e.g., $100M LTM EBITDA × 7.0x median LTM TEV/EBITDA = $700M implied EV.
6. **Repeat** for each multiple to build a range, then bridge to equity value and per-share value.

**FIG angle:** for banks, P/E and P/TBV (read against ROTCE) replace EV multiples; for bank deals, add the core deposit premium.` },
  { id: 'val-g023', t: 'val', q: `How do you interpret comps? If a company trades at 15x TEV/EBITDA while its peer median is 10x, what's the likely explanation?`, a: `**Read multiples against fundamentals: a premium usually reflects faster expected growth, better margins or lower risk; if fundamentals match, the stock may be mispriced.**
- Compare growth and margins first; multiples only mean something next to them.
- Most telling: peers all grow 10–15% with 10–15% EBITDA margins, yet your company trades at 6–8x vs. peers at 10–12x → possibly undervalued, or a hidden issue.
- **15x vs. a 10x median within the same industry and size range:** most likely higher expected cash flow growth (e.g., ~15% vs. ~5%). Risk, and so discount rates, should be similar, so in CF ÷ (r − g) terms a higher g lifts the multiple.
- One-off factors (takeover speculation, temporarily depressed EBITDA, recent news) could also explain it; you'd need more information.

**FIG angle:** regress P/TBV on ROTCE across banks; banks below the line look cheap, and a premium P/TBV usually reflects a higher sustainable ROTCE.` },
  { id: 'val-g024', t: 'val', q: `What is a premiums-paid analysis, and how do you use it to value a company?`, a: `**Measure the premiums buyers paid over targets' unaffected share prices in similar deals, then apply that range to your company's price.**
- Works only for public targets.
- Premium = offer price ÷ unaffected price − 1: a $15.00 offer vs. $12.00 → 25%.
- Apply the median premium to your company: 20% on a $10.00 stock → $12.00 per share.
- Use the unaffected price (before leaks or rumors), often measured 1 day, 1 week and 4 weeks before announcement.
- Supplements precedent multiples as another reference point.
- **Limitation:** anchored to the current price, so it can't show the stock is undervalued today.

**FIG angle:** bank deal comps report the market premium alongside P/TBV, P/E and the core deposit premium.` },
  { id: 'val-g025', t: 'val', q: `When does a sum-of-the-parts valuation make sense, and what are its drawbacks?`, a: `**Value each division separately (its own comps, precedents and DCF) and add them up: ideal for conglomerates, but labor- and data-intensive.**
## Advantages
- Fits companies whose segments sit in very different industries, where no single peer set or multiple works.
- Shows which segments drive value and whether a breakup or sale could unlock it.
## Disadvantages
- Far more work: separate peer sets and models for every division.
- Segment disclosure is often thin (EBIT, capex or working capital by division may be missing).
- Unallocated corporate overhead must be deducted at the end, and it may not be disclosed; a conglomerate discount may also apply.

**FIG angle:** used for diversified financials, e.g., a bank or insurer with sizable wealth management, asset management or card businesses that deserve their own multiples.` },
  { id: 'val-g026', t: 'val', q: `What is a valuation multiple in theory? Explain it with a real-life analogy.`, a: `**A multiple is a condensed DCF: it packs cash flow, growth and the discount rate into one number.**
- Value = cash flow ÷ (discount rate − growth rate), with growth below the discount rate.
- So a multiple ≈ 1 ÷ (r − g): r = 10%, g = 2% → 12.5x cash flow.
- Higher growth or lower risk → higher multiple, which is why multiples differ across companies.
- **Analogy:** price per square foot for homes, which lets you compare properties (or companies) of different sizes on one scale.

**FIG angle:** justified P/E and P/TBV for banks come from the same Gordon growth logic, e.g., P/TBV = (ROTCE − g) ÷ (cost of equity − g).` },
  { id: 'val-g027', t: 'val', q: `If companies are valued on cash flow, why do bankers use EBIT and EBITDA, which aren't true cash flow?`, a: `**Convenience and comparability: they're quick to calculate and consistent across companies, while FCF is slower to build and noisier.**
- FCF requires working through the whole cash flow statement and adjusting it.
- FCF components (working capital, capex, cash taxes, other items) vary widely by company, industry, region and accounting system.
- EBIT and EBITDA come mostly from the income statement (plus CFS D&A for EBITDA), so they normalize better across peers.
- They're proxies: FCF remains the more accurate cash measure, which is why the DCF uses it.` },
  { id: 'val-i001', t: 'val', q: `Explain the time value of money. Is a dollar today worth more than a dollar next year because of inflation?`, a: `**Mainly because of opportunity cost, not inflation: a dollar in hand today can be invested and earn a return by next year.**
- At a 10% available return, $100 today grows to $110 in a year, so $100 received a year from now is worth only about $90.91 today ($100 ÷ 1.10).
- Inflation is a separate effect: it erodes what money buys. It feeds into the returns investors demand (nominal rates include expected inflation), but the idea would hold even with zero inflation.
- Risk widens the gap: a promised future dollar may never arrive, so riskier cash flows are discounted at higher rates.
- Every DCF rests on this: future cash flows are converted into today's dollars at a rate reflecting what the money could earn elsewhere.` },
  { id: 'val-i002', t: 'val', q: `If a company could deliver higher returns, why does it get a higher discount rate rather than a lower one?`, a: `**Because big potential returns and big risk travel together, and the discount rate is the return investors require for bearing that risk.**
- A stock that might rise 10x also has a far wider range of outcomes, including heavy losses, than one that might rise 2x.
- No free lunch: investors accept that uncertainty only if they expect to be paid for it, so they demand a higher return.
- The discount rate is that required return. Applied to the company's projected cash flows, it makes risky, uncertain cash flows worth less today, however large the upside.
- Value rises from bigger or more certain cash flows, not from giving a riskier business a lower rate.

**FIG angle:** the same logic explains why a bank with a volatile, credit-heavy loan book carries a higher cost of equity, and a lower P/TBV at the same ROTCE, than a steadier peer.` },
  { id: 'val-i003', t: 'val', q: `What would you pay for a business producing $100 of cash flow a year forever? What if that cash flow grows 5% a year and similar investments return 10%?`, a: `**Divide the cash flow by the gap between your required return and the growth rate: value = CF ÷ (r − g), valid only when g is below r.**
## No growth
- Value = CF ÷ r.
- Require 10%: $100 ÷ 10% = **$1,000**. Require 20%: $100 ÷ 20% = **$500**. A higher required return means a lower price.
## 5% growth, 10% required return
- Quick answer: $100 ÷ (10% − 5%) = **$2,000**.
- Precision point: the formula uses next year's cash flow. If $100 is today's figure, next year's is $105, so value = $105 ÷ 5% = **$2,100**. Mentioning this shows you know the formula.
- Growth raises value and a higher discount rate lowers it; the closer g gets to r, the more sensitive the result.

**FIG angle:** this is the Gordon growth DDM used for banks: a $2.00 dividend next year, 10% cost of equity and 4% growth → $2.00 ÷ 6% = $33.33 per share.` },
  { id: 'val-i004', t: 'val', q: `What is present value, what moves it, and how does it differ from net present value? How do you use them to decide whether to invest?`, a: `**PV is what future cash flows are worth today; NPV subtracts the price you'd have to pay for them.**
- **PV:** divide each future cash flow by (1 + r)^t and add them up. At 10%, $110 in one year → $100 today; $121 in two years → also $100.
- **PV rises** with higher expected cash flows or growth, or a lower discount rate; it falls when the opposite happens.
- **NPV = PV of future cash flows − upfront cost.** Pay $90 today for that $110 next year: NPV = +$10.
- **Decision rule:** invest if NPV is positive (PV exceeds the price); pass if it's negative.
- **Same answer with IRR:** invest if the IRR beats the discount rate. For a standard investment (one cost upfront, inflows after), the two tests agree.` },
  { id: 'val-i005', t: 'val', q: `What drives IRR, and how do those drivers differ from what drives present value?`, a: `**Cash flow assumptions move both; the discount rate moves only PV, and the purchase price moves only IRR.**
- **Shared drivers:** higher cash flows, faster growth or a higher exit value raise both PV and IRR; lower ones reduce both.
- **Discount rate:** changes PV but not IRR, because IRR is the rate you solve for (the rate that makes NPV zero).
- **Upfront price:** enters IRR as the first, negative cash flow, so paying more lowers IRR; PV ignores it.
- **So compare** PV with the price, or IRR with the discount rate.
- **Example:** pay $1,000 today for $2,000 in five years → IRR ≈ 14.9% (2^(1/5) − 1). At a 10% discount rate, PV = $2,000 ÷ 1.61 ≈ $1,242, above the $1,000 price. Both tests say invest.` },
  { id: 'val-l001', t: 'val', q: `Private Companies: how does valuing a small private company differ from valuing a public one, including the statement adjustments and WACC?`, a: `**Normalize the financials first, then haircut the valuation for illiquidity, size and key-person risk.**
## Adjust the statements
- Mostly for small businesses; VC-backed and large private firms usually report under GAAP or IFRS already.
- Recast into standard lines (revenue, COGS, SG&A); treat owner draws as market-rate pay; strip personal expenses run through the business.
- Tax at a normal corporate rate rather than the owner's personal rate.
## Value it
- Discount comps multiples (often ~20–40%), haircut the terminal value, and consider a key-person discount on cash flows.
- **WACC:** no share price or beta, so relever the comps' median unlevered beta at the comps' median capital structure; cost of debt from comps or risk-free plus an estimated spread; often add a size/illiquidity premium.
- Deals are priced on EV multiples, cash-free/debt-free, often with earnouts.` },
  // ─── ma ───
  { id: 'ma-g001', t: 'ma', q: `What is a letter of intent (LOI), and how does it differ from an indication of interest (IOI)?`, a: `**An IOI is an early, non-binding price range; an LOI is a later, more detailed offer that usually locks the seller into exclusive talks.**
- **IOI:** submitted after the first round on the CIM; a valuation range, financing sources, key assumptions and diligence needs. Used to narrow the field.
- **LOI:** submitted after more diligence; proposed price and structure (cash vs. stock, earnouts), key terms, conditions and timeline.
- Largely non-binding on price and terms, but certain clauses are binding: **exclusivity (no-shop)** for a set period, confidentiality and sometimes expense terms.
- Signing kicks off confirmatory diligence and drafting of the definitive purchase or merger agreement.
- LOIs are standard in private and middle-market deals; in public-company auctions, bidders more often move from IOIs straight to marked-up merger agreements.` },
  { id: 'ma-g002', t: 'ma', q: `What is a roll-up (platform plus add-on) strategy, and why do buyers pursue it?`, a: `**Buy a platform company in a fragmented industry, then bolt on many smaller firms to build scale.**
## Value drivers
- **Multiple arbitrage:** small add-ons might be bought at, say, 6–8x EBITDA, while the larger combined business can command a meaningfully higher multiple.
- Shared overhead and systems, better supplier or carrier terms, cross-selling and margin expansion.
## Risks
- Integration and culture problems; add-on prices rise as rival consolidators compete; leverage builds up; acquired growth can mask weak organic growth.

**FIG angle:** the classic FIG roll-ups are insurance brokerages (e.g., Gallagher / AssuredPartners) and RIA/wealth aggregators, often sponsor-backed and frequent users of FIG M&A and LevFin. Expect follow-ups on how much of a broker's growth is organic.` },
  { id: 'ma-g003', t: 'ma', q: `Walk me through a buy-side M&A process.`, a: `**The mirror image of a sell-side: find the right target, avoid overpaying and win good terms.**
1. **Define criteria** with the client: strategic goals, size, geography, budget and form of payment.
2. **Screen** dozens or hundreds of candidates into a long list, then a short list.
3. **Approach** the most attractive targets, often discreetly, to test their willingness to sell, or enter an auction already underway.
4. **Diligence and valuation:** comps, precedents, DCF, accretion/dilution and synergies; recommend an offer range and structure.
5. **Negotiate** price and the purchase agreement, line up financing, sign and announce; then regulatory approvals and closing.
- Value-add: sourcing ideas, disciplined valuation, negotiating leverage and process management.

**FIG angle:** in bank deals the buy-side work centers on pro forma capital, TBV dilution and earnback, credit marks and whether regulators will approve.` },
  { id: 'ma-g004', t: 'ma', q: `A client hires your bank to help it grow. How would you approach the mandate, and where would you add value?`, a: `**Define what growth means, check what the balance sheet can support, then match the tool to the goal.**
1. **Clarify the objective:** a revenue or EPS target, new markets, new products, or scale against competitors.
2. **Assess capacity:** leverage, cash, the strength of its stock as a currency, competitive position and, for FIs, regulatory capital.
3. **Lay out options:** acquisitions, partnerships or joint ventures, organic investment, and the capital raise to fund it (debt, equity or hybrid).
4. **Fit options to constraints:** a highly levered, cash-poor client is better served by a partnership or an equity raise funding organic growth than by a debt-financed acquisition.
- Value-add: introductions to targets and partners, valuation and structuring, negotiation and running the process end to end.

**FIG angle:** for a bank, growth usually means whole-bank M&A, branch or loan portfolio purchases, or building fee businesses, each screened against CET1, TBV dilution and approval risk.` },
  { id: 'ma-g005', t: 'ma', q: `Management is torn between an IPO and selling the company. How would you frame the choice?`, a: `**Lay out the trade-offs and let the owners' goals decide rather than pushing one answer.**
- **Sale:** liquidity and certainty of value now, usually faster and simpler; but owners give up control and future upside, and deals can fall apart.
- **IPO:** sells only a minority stake, gives shareholders and employees some liquidity, creates a public currency and keeps independence; but it is slow, costly and market-dependent, comes with an IPO discount, lock-ups and public scrutiny, and doesn't guarantee a higher eventual price.
## Deciding factors
- Management committed for the long haul and a long growth runway → lean IPO.
- Owners want out, or the business is near its ceiling → lean sale.
- Market window: IPO receptivity vs. buyer appetite and valuations.
- Many companies run a **dual track**, preparing both to keep leverage until the end.

**FIG angle:** a frequent question for sponsor-owned fintechs, specialty insurers and asset managers deciding between a listing and a sale to a strategic.` },
  { id: 'ma-j001', t: 'ma', q: `How do you set the purchase price in an M&A deal for a public target vs. a private target?`, a: `**Public target: a premium to the current share price. Private target: a multiple of EBITDA, EBIT or revenue. Cross-check both with valuation work.**

## Public target
- Start from the unaffected share price and apply a premium in line with comparable deals (often ~20–40% for US targets).
- Sanity-check the implied price against a DCF, trading comps and precedent transactions.

## Private target
- There's no share price, so value it with comps, precedents and a DCF, and express the price as an EV multiple (e.g., 10x EBITDA).

## Synergies
- A buyer can rationally pay a bigger premium if the PV of the synergies it expects exceeds that premium; competition among bidders decides how much of that value goes to the seller.

**FIG angle:** bank deals are priced on equity metrics instead: price / TBV, price / forward EPS (with cost saves) and the core deposit premium.` },
  { id: 'ma-j002', t: 'ma', q: `Is the "true price" of an acquisition the purchase equity value or the purchase enterprise value? Why?`, a: `**Purchase EV is closer to the true economic price, but you need both.**
- **Purchase EV:** what the buyer effectively pays all the target's investors (shareholders, lenders and other claimholders) for the core business. Assuming $200 of target debt is part of the cost even if no cash changes hands for it at close.
- **Not the same as upfront cash:** assumed debt may stay in place, and the target's cash offsets part of the price.
- **Purchase equity value:** what selling shareholders receive; it's the basis for the premium and usually drives how much cash, debt and stock the buyer must raise.
- Match multiples accordingly: purchase EV with EBITDA, purchase equity value with net income.

**FIG angle:** for bank targets the headline price is equity value (deal value, P/TBV, P/E), because deposits and borrowings are operating liabilities, not acquisition debt.` },
  { id: 'ma-j003', t: 'ma', q: `When does EPS accretion/dilution matter less, and what other analyses can you use to judge an M&A deal?`, a: `**EPS is one lens; it means little when the buyer is private, loss-making or far larger than the target.**

## When EPS matters less
- Private buyers, including PE sponsors, don't answer to public EPS investors.
- A buyer with negative EPS has no meaningful accretion figure.
- A target that's 1–10% of the buyer's size barely moves EPS.

## Other analyses
- **Qualitative fit:** strategy, markets, products, management.
- **IRR vs. discount rate:** does the return on the price paid beat the buyer's cost of capital?
- **Value vs. price:** the target's standalone value plus the PV of synergies, compared with the purchase price.
- **Contribution analysis:** in an all-stock deal, each side's share of combined revenue, EBITDA and net income vs. its pro forma ownership.
- **Value creation analysis:** estimate the combined company's share price after closing.

**FIG angle:** bank investors weigh TBV dilution and earnback, pro forma CET1 and ROTCE alongside EPS.` },
  { id: 'ma-j004', t: 'ma', q: `How do cash-free, debt-free deal assumptions for a private target differ from a standard public-company acquisition?`, a: `**The buyer pays an enterprise value; the seller settles its debt and keeps excess cash, so the business transfers with normal operating cash and no legacy debt.**
- **Pricing:** a multiple such as TEV/EBITDA or TEV/revenue, not a premium to a share price.
- **At close:** the target's existing cash and debt go to zero and are replaced. Cash is reset to a minimum operating level; any debt the business carries afterward is newly issued (often a similar amount).
- **Debt > cash:** the target's cash repays what it can, and the remaining debt comes out of the sellers' proceeds.
- **Cash > debt:** all debt is repaid, and leftover cash goes to sellers, so equity proceeds = EV − debt + excess cash.
- **Sources & uses:** uses = purchase EV + minimum cash for the target + transaction and financing fees; sources = the usual cash, new debt and stock.
- Real deals also set a normalized working-capital target (a "peg") that adjusts the price at closing.`, adv: true },
  { id: 'ma-j005', t: 'ma', q: `How would you estimate revenue and cost synergies, and why do merger models often overstate them?`, a: `**Build synergies bottom-up from specific actions, net out what they cost, and phase them in.**

## Revenue synergies (example)
- Cross-selling: 1,000 of the buyer's 100,000 customers buy the target's $10 product → $10,000 of revenue.
- Subtract the cost to make and deliver it: at $5 a unit, only $5,000 of pre-tax profit.

## Cost synergies (example)
- Consolidate overlapping offices and back-office functions (IT, finance, HR): 10 offices cut to 8 at $100,000 each → $200,000 pre-tax.

## Why models overstate them
- Revenue synergies are counted without their COGS and operating costs.
- Full run-rate savings are assumed from year 1, when they usually build over several years.
- One-time integration and severance costs are left out.

**FIG angle:** bank cost saves are sized as a % of the target's non-interest expense (higher with branch overlap), and investors give little credit for revenue synergies.` },
  { id: 'ma-j006', t: 'ma', q: `Buyer: 10 shares at $25, net income $10. Target: purchase equity value $150, net income $10; 25% tax. Accretive if funded 100% with stock, with cash earning 4%, or with 10% debt?`, a: `**Stock: 25% accretive. Cash: accretive. Debt: dilutive.**
- Setup: buyer EPS = $10 ÷ 10 = $1.00; target yield = $10 ÷ $150 ≈ 6.7%.
- **100% stock:** buyer P/E 25x → 4% cost. New shares = $150 ÷ $25 = 6 → 16 total. Combined NI $20 → EPS $1.25 → **+25%**.
- **100% cash:** after-tax cost 4% × 0.75 = 3% < 6.7%. Lost interest $150 × 3% = $4.50 → NI $15.50 → EPS $1.55 → **+55%**.
- **100% debt:** after-tax cost 10% × 0.75 = 7.5% > 6.7%. New interest $150 × 7.5% = $11.25 → NI $8.75 → EPS $0.875 → **−12.5%**.
- Rule: accretive when the after-tax cost of funding is below the target's yield at the purchase price.` },
  { id: 'ma-j007', t: 'ma', q: `Buyer P/E 11x; new debt costs 8%, cash earns 4%; 25% tax. It buys a target at a 20x P/E using one-third each of stock, debt and cash. Accretive or dilutive?`, a: `**Dilutive: the ~6% weighted cost exceeds the 5% target yield.**
- Cost of stock = 1 ÷ 11 ≈ 9.1%.
- Cost of debt = 8% × (1 − 25%) = 6.0%.
- Cost of cash = 4% × (1 − 25%) = 3.0%.
- Weighted cost = (9.1% + 6.0% + 3.0%) ÷ 3 ≈ 6.0%.
- Target yield = 1 ÷ 20 = 5.0% → 6.0% > 5.0% → dilutive before synergies.
- Breakeven: with this funding mix, the purchase P/E would need to fall below ~16.6x (1 ÷ 6.0%).` },
  { id: 'ma-j008', t: 'ma', q: `A buyer at a 20x P/E acquires a target at a 10x P/E using 100% debt. What interest rate would make the deal dilutive (25% tax)?`, a: `**Above ~13.3% pre-tax, so the deal is almost certainly accretive.**
- Target yield = 1 ÷ 10 = 10%.
- The deal turns dilutive once the after-tax cost of debt exceeds 10%.
- Pre-tax rate = 10% ÷ (1 − 25%) ≈ 13.3% (check: 75% of 13.3% ≈ 10%).
- Few acquirers borrow at 13%+, so debt funding makes this deal accretive.
- The buyer's 20x P/E is irrelevant here: no stock is issued, so only the cost of debt competes with the target's yield.` },
  { id: 'ma-j009', t: 'ma', q: `Buyer: equity value $2,000, net income $200. Target: purchase equity value $1,200, net income $100. What synergies make an all-stock deal accretive (25% tax)?`, a: `**More than ~$27 of pre-tax synergies ($20 after tax).**
- Buyer P/E = $2,000 ÷ $200 = 10x → cost of stock 10%.
- Purchase P/E = $1,200 ÷ $100 = 12x → target yield ≈ 8.3% → dilutive before synergies.
- Breakeven needs a 10% yield on $1,200 = $120 of target earnings (a 10x purchase P/E).
- Gap = $120 − $100 = $20 after tax → $20 ÷ 0.75 ≈ $26.7 pre-tax.
- **EPS check** (buyer has 200 shares at $10): 120 new shares → 320 total. Holding EPS at $1.00 needs $320 of combined NI = $200 + $100 + $20.` },
  { id: 'ma-j010', t: 'ma', q: `A buyer (200 shares at $10) pays $1,200 in stock for a target worth $1,000, with a fixed share count. If the market rejects the premium, where does the buyer's stock go? Would cash have avoided it?`, a: `**About $9.38 in the stock deal; an all-cash deal would take it to $9.00, so no.**

## All stock
- New shares = $1,200 ÷ $10 = 120 → 320 total.
- Combined equity value before the reaction = $2,000 + $1,200 = $3,200.
- The market strips out the $200 premium → $3,000 ÷ 320 ≈ $9.38, down ~6.2% (= $200 ÷ $3,200).

## All cash (or debt)
- Sellers still get $1,200, so the $200 overpayment still destroys value; combined EV rises $1,000, not $1,200.
- The whole loss falls on the buyer's 200 existing shares: $200 ÷ 200 = $1.00 → $9.00.
- Lesson: financing changes who bears an overpayment, not whether it happens. With stock, target holders (37.5% of the combined company) share the loss.` },
  { id: 'ma-j011', t: 'ma', q: `Buyer equity value $500M, EV $600M. Target purchase equity value $100M, purchase EV $150M. What are combined equity value and EV in an all-stock deal, and in a 50/50 cash-stock deal?`, a: `**Combined EV is $750M either way; combined equity value is $600M (all stock) or $550M (50/50).**
- **Combined EV** = buyer EV + target purchase EV = $600M + $150M = $750M. Financing doesn't matter: cash used or debt raised just moves between bridge lines.
- **Combined equity value** = buyer equity value + market value of stock issued.
  - All stock: $500M + $100M = $600M.
  - 50% cash / 50% stock: $500M + $50M = $550M.
- Caveats: ignores synergies and fees, and the buyer's share price can move after announcement.` },
  { id: 'ma-j012', t: 'ma', q: `Same deal, plus net income ($50M buyer, $10M target) and EBITDA ($100M, $15M). What are combined P/E and TEV/EBITDA if it's all stock vs. all debt at 8% (25% tax)?`, a: `**TEV/EBITDA is ~6.5x either way; P/E is 10.0x with stock and ~9.3x with debt.**

## All stock
- Combined EV $750M ÷ EBITDA $115M ≈ 6.5x.
- Combined equity value $600M ÷ net income $60M = 10.0x.

## All debt at 8%
- EV and EBITDA don't depend on financing → still ~6.5x.
- Equity value = the buyer's $500M (no stock issued).
- Net income = $60M − $100M × 8% × (1 − 25%) = $60M − $6M = $54M.
- P/E = $500M ÷ $54M ≈ 9.3x.
- Takeaway: EV-based combined multiples ignore financing; equity-based ones don't.` },
  { id: 'ma-j013', t: 'ma', q: `Will combined TEV/EBITDA and P/E multiples always fall between the buyer's standalone multiples and the target's purchase multiples?`, a: `**EV-based multiples: yes (ignoring synergies and deal effects). Equity-based multiples: usually, but not necessarily.**
- **TEV/EBITDA:** combined EV and EBITDA are simple sums, so the result is an EBITDA-weighted average of the two multiples and must land between them.
- **P/E:** combined net income picks up new interest expense and lost interest income, and combined equity value depends on how much stock is issued, so it can land outside the range when financing or capital structures differ a lot.
  - Example: buyer at $500M ÷ $50M = 10x and target bought at $100M ÷ $10M = 10x, yet the debt-funded combination trades at ~9.3x.
- The result sits closer to the larger company's multiple (usually the buyer's), weighted by size rather than a simple average.` },
  // ─── lbo ───
  { id: 'lbo-g001', t: 'lbo', q: `What is a search fund?`, a: `**A vehicle in which an entrepreneur raises money first to find, then buy and run, one small private company.**
1. **Search phase:** investors fund the searcher's salary and costs for roughly 1–2 years in exchange for the right (not the obligation) to invest in the eventual deal.
2. **Acquisition:** the searcher signs an LOI with a stable, smaller business (often a founder looking to retire), runs diligence and funds the purchase with debt plus investor equity, effectively a small LBO.
3. **Operation:** the searcher usually becomes CEO and earns a growing equity stake tied to returns.
- Typical targets: steady cash flow, a fragmented niche, modest capex needs.
- Interview tip: it's a common MBA path, so if it's on your radar, be ready to explain why advising on many deals as a banker beats owning one company.` },
  { id: 'lbo-g002', t: 'lbo', q: `What happens in an LBO, and how does a sale to private equity buyers typically run? Where does the bank's financing come in?`, a: `**A sponsor buys a company with mostly borrowed money plus its own equity, improves it for several years and exits; the sale process is an auction aimed at financial buyers.**
## The LBO
- Debt (often 50–70% of the price) is serviced by the target's cash flow; returns come from EBITDA growth, debt paydown and any multiple expansion at exit.
## The sponsor sale process
1. Prepare the teaser, CIM and model; build a list of sponsors whose fund size and strategy fit.
2. Outreach, NDAs, management meetings and Q&A.
3. First-round IOIs narrow the field; finalists get full diligence and submit binding bids.
4. Negotiate with the winner, sign and close.
## The bank's financing role
- The sell-side bank may offer **stapled financing**: a pre-arranged debt package any bidder can use, which speeds up bids and signals achievable leverage. Whether it's offered depends on the bank, region and deal, and it can raise conflict questions.

**FIG angle:** sponsor processes are common for insurance brokers, wealth managers/RIAs, fintech and specialty finance; rare for banks, where control rules limit PE ownership.` },
  { id: 'lbo-g003', t: 'lbo', q: `How do you use an LBO analysis as a valuation method, and how do you back-solve the price a sponsor can pay?`, a: `**Fix the sponsor's target IRR, leverage and exit multiple, then solve for the highest entry price that still hits the return.**
## Steps
1. Project EBITDA and free cash flow; size debt at a market leverage multiple.
2. Exit equity = exit EV − remaining net debt.
3. Required entry equity = exit equity ÷ (1 + target IRR)^years.
4. Maximum price (EV) = required equity + entry debt (Goal Seek in a full model).
## Example
- EBITDA $100 today, $150 in year 5; entry debt 5.0x = $500, paid down to $300.
- Exit at 10x → EV $1,500 → equity $1,200.
- 20% IRR over 5 years → 1.2^5 ≈ 2.49x → entry equity ≈ $1,200 / 2.49 ≈ $482.
- Max price ≈ $482 + $500 ≈ $982, about 9.8x EBITDA (before fees).
## Uses
- Shows what a financial buyer can pay vs. a strategic with synergies; often sets a floor in a sale; screens LBO candidates.

**FIG angle:** relevant for sponsor-owned targets such as insurance brokers, wealth managers and payments firms; rarely for banks.` },
  { id: 'lbo-j001', t: 'lbo', q: `Which assumptions have the biggest impact on LBO returns?`, a: `**Entry and exit multiples first, then leverage, then operating performance; debt terms matter least.**
1. **Purchase and exit multiples:** they set the price paid and most of the exit value. A lower entry or higher exit multiple lifts returns directly.
2. **Leverage:** debt as a multiple of EBITDA or a % of the price. More debt magnifies the outcome, good or bad.
3. **Operations:** revenue growth, EBITDA margins and cash conversion drive exit EBITDA and how much debt gets repaid.
4. **Debt terms:** interest rates, amortization and fees move returns, but usually less than the above.
- That's why LBO sensitivity tables usually flex entry vs. exit multiple, and leverage vs. EBITDA growth.` },
  { id: 'lbo-j002', t: 'lbo', q: `How do you choose the purchase and exit multiples in an LBO model?`, a: `**Entry: a market-based price checked against valuation work. Exit: usually about the entry multiple, then sensitized.**

## Purchase multiple
- **Public target:** assume a premium to the share price (e.g., 30%), then check the implied EV/EBITDA (say ~10x) against comps, precedents and a DCF.
- **Private target:** set it directly from comps, precedent transactions and a DCF.

## Exit multiple
- Base case: at or near the entry multiple, so returns don't depend on multiple expansion.
- Go higher only if growth, margins or ROIC at exit justify it; go lower if the business or its market will be more mature.
- Always show a sensitivity table across a range of entry and exit multiples.` },
  { id: 'lbo-j003', t: 'lbo', q: `How do you calculate free cash flow in an LBO, how is it different from EBITDA, and why do you need both?`, a: `**FCF is the cash actually available to repay debt; EBITDA is a quick, financing-neutral proxy for operating cash flow.**

## FCF in an LBO
- FCF = net income + D&A ± change in working capital − capex.
- Or: EBITDA − net interest expense − cash taxes ± change in working capital − capex.

## Why it differs from EBITDA
- EBITDA ignores interest, taxes, working capital and capex, yet each uses cash that could otherwise repay debt.
- LBO FCF is levered: it reflects the capital structure because interest is deducted.

## Why both
- EBITDA sets the purchase and exit prices and the leverage tests (Debt/EBITDA, EBITDA/interest).
- FCF drives debt paydown and therefore the equity value at exit.` },
  { id: 'lbo-j004', t: 'lbo', q: `How is annual debt repayment set up in an LBO model? Link free cash flow to mandatory and optional repayments.`, a: `**FCF funds repayment, but only after the company keeps its minimum cash and pays scheduled amortization.**
- **Cash available for optional repayment** = beginning cash + FCF − minimum cash − mandatory repayments.
- **Mandatory repayment (each tranche)** = MIN(amortization % × original principal, balance outstanding).
  - Example: 20% × $100M = $20M a year, but if only $10M remains, repay $10M.
- **Optional repayment (cash sweep)** = MIN(cash available, balance outstanding), usually revolver first, then prepayable term loans.
  - Example: $100M available vs. $250M owed → repay $100M; if only $50M is owed → repay $50M.
- If cash available is negative, the company draws on its revolver instead.`, adv: true },
  { id: 'lbo-j005', t: 'lbo', q: `What are the main exit routes in an LBO, and which do PE firms usually prefer?`, a: `**Usually a sale (an M&A exit); an IPO is the main alternative.**
- **Sale to a strategic or another sponsor:** clean, with all proceeds at close; a strategic may pay up for synergies.
- **IPO:** the company lists and the sponsor sells down in follow-on offerings over several years. Selling the whole stake at the IPO would signal a lack of confidence. Slower, exposed to market swings, and lock-ups delay sales.
- **Dividend recaps:** return cash without selling; a partial "exit" that lifts IRR but leaves the sponsor holding the business.
- **Continuation vehicles:** the sponsor sells the company to a new fund it also manages, giving existing LPs liquidity.
- Preference: M&A for certainty and speed; IPOs when public valuations are rich or the company is too big for most buyers.

**FIG angle:** insurance brokers and wealth managers often pass from one sponsor to the next, and continuation vehicles are a fast-growing product for the alternative asset managers FIG bankers cover.` },
  { id: 'lbo-j006', t: 'lbo', q: `How could a PE firm boost its returns in an LBO? What levers does it control?`, a: `**Pull the three return drivers: multiple expansion, EBITDA growth, and debt paydown/cash generation.**
- **Multiple expansion:** pay less at entry (negotiate harder, buy smaller companies at lower multiples and combine them) or exit higher by improving growth and ROIC.
- **EBITDA growth:** faster revenue growth (pricing, new products, add-on acquisitions) or wider margins from cost cuts.
- **Debt paydown and cash generation:** raise FCF by trimming capex and working capital and cutting expenses.
- **More leverage:** if the company easily repays its initial debt, more debt up front can raise returns (with more risk).
- **Timing:** returning cash early, such as through a dividend recap, lifts IRR.` },
  { id: 'lbo-j007', t: 'lbo', q: `How do you decide how much debt to use in an LBO and how many tranches?`, a: `**Benchmark against recent comparable LBOs, then stress-test the credit statistics.**
1. **Precedents:** look at median total and senior Debt/EBITDA in recent similar LBOs (and highly levered public peers).
2. **Draft a structure:** e.g., 5.0x total = 2.0x term loans + 3.0x subordinated notes.
3. **Project credit stats:** Debt/EBITDA and EBITDA/interest each year, in base and downside cases.
4. **Iterate:** if coverage stays comfortably above ~2.0x and leverage falls over time, keep it; if not, cut debt or change the tranche mix.
- Lender appetite and market conditions cap the total; ratings and covenants shape the mix.

**FIG angle:** lenders tend to allow higher leverage for recurring-revenue, capex-light FIG targets such as insurance brokers, and private credit funds often replace separate tranches with a single unitranche loan.` },
  { id: 'lbo-j008', t: 'lbo', q: `What types of debt might a PE firm use in an LBO, and how do secured and unsecured debt differ?`, a: `**Secured bank debt is cheaper but tighter; unsecured bonds cost more but are more flexible.**

## Secured (bank / senior): revolvers and term loans
- Backed by collateral; lower, floating rates.
- Often amortizes (scheduled principal payments).
- Maintenance covenants tested regularly (e.g., max Debt/EBITDA, min EBITDA/interest).
- Can be prepaid; shorter maturities (~5–7 years, sometimes longer).
- Lenders: banks, CLOs and other conservative institutions.

## Unsecured (high-yield / junior): senior notes, subordinated notes, mezzanine
- No collateral; higher, usually fixed rates; repaid in a lump sum at maturity.
- Incurrence covenants: limits on actions such as new borrowing, asset sales or dividends.
- Early repayment restricted (call protection); longer maturities (~7–10+ years).
- Investors: high-yield and hedge funds, mezzanine and credit funds.

**FIG angle:** CLOs and direct lenders buy most leveraged term loans, so leveraged-finance demand links directly to the asset managers, BDCs and private credit funds that FIG bankers cover.` },
  { id: 'lbo-j009', t: 'lbo', q: `When does an LBO model draw on the revolver? Walk through an example.`, a: `**Draw on the revolver when cash flow can't cover mandatory repayments while keeping minimum cash; repay it first once cash allows.**
- Cash available = beginning cash + FCF − minimum cash − mandatory repayments.
- **Example:** beginning cash $50, FCF $75, minimum cash $100, mandatory repayments $100.
  - $50 + $75 − $100 − $100 = −$75 → draw $75.
  - Check: $50 + $75 + $75 − $100 = $100, exactly the minimum cash.
- The drawn balance accrues interest, and the undrawn amount pays a commitment fee.
- In later years excess cash repays the revolver first, freeing the capacity for the next shortfall.`, adv: true },
  { id: 'lbo-j010', t: 'lbo', q: `In an LBO, which matters more: a high IRR or a high money-on-money multiple?`, a: `**It depends on the holding period: funds are measured on IRR, but a high IRR over a very short hold makes little money.**
- **Short hold:** a 50% IRR over 6 months is only ~1.22x (1.5^0.5), a small dollar gain, and the capital must be redeployed.
- **Long hold:** 3x over 10 years is only ~11.6% IRR (3^0.1), below most sponsors' targets.
- **LP view:** LPs rank funds by IRR (and increasingly by DPI), but they don't want capital returned too quickly, since they must then find a new home for it.
- **After the hurdle:** once the fund clears its preferred return (often ~8%), the GP earns carry on total profits, so the multiple matters more.
- Answer: IRR matters most for fundraising; over short horizons favor a higher multiple, over long horizons a high IRR.` },
  { id: 'lbo-j011', t: 'lbo', q: `Buy a company with $100M of EBITDA at 10x using 60% debt. EBITDA reaches $150M in year 5, the exit multiple falls to 9x, and $250M of debt is repaid. MOIC and IRR?`, a: `**2.5x MOIC, ~20% IRR.**
1. Entry EV = 10 × $100M = $1,000M; debt $600M → sponsor equity $400M.
2. Exit EV = 9 × $150M = $1,350M (mental math: $1,500M − $150M).
3. Debt at exit = $600M − $250M = $350M → exit equity $1,000M.
4. MOIC = $1,000M ÷ $400M = 2.5x → IRR ≈ 20% (2.5^(1/5) ≈ 1.20).
- **Value bridge:** EBITDA growth +$500M (at 10x), multiple contraction −$150M, debt paydown +$250M → +$600M of equity.` },
  { id: 'lbo-j012', t: 'lbo', q: `Buy at 12x $100 of EBITDA with 5x debt; EBITDA reaches $200 in year 5. What exit multiple gives a 25% IRR with no debt paydown? With 75% of the debt repaid?`, a: `**About 13x with no paydown; about 11x if 75% of the debt is repaid.**
- Entry EV = $1,200; debt = 5 × $100 = $500 → equity $700.
- 25% over 5 years ≈ 3x (1.25^5 ≈ 3.05) → exit equity needed ≈ $2,100.

## No debt repaid
- Exit EV = $2,100 + $500 = $2,600 → $2,600 ÷ $200 = 13.0x.

## 75% repaid
- Debt left = 25% × $500 = $125.
- Exit EV = $2,100 + $125 = $2,225 → ≈ 11.1x.
- Each $100 of paydown cuts the required exit multiple by 0.5x here ($100 ÷ $200 of EBITDA).
- Using the exact 3.05x adds ~$35 of required equity, about +0.2x to each answer.` },
  { id: 'lbo-j013', t: 'lbo', q: `An LBO shows a 20% five-year IRR. EBITDA grows from $100 to $150, entry is 10x, exit is 11x, and initial debt is 5x EBITDA. How much debt was repaid?`, a: `**About $100.**
1. 20% over 5 years ≈ 2.5x (1.2^5 ≈ 2.49).
2. Entry EV = $1,000; debt = $500 → equity $500.
3. Required exit equity = $500 × 2.5 = $1,250.
4. Exit EV = 11 × $150 = $1,650 (mental math: $1,500 + $150).
5. Net debt at exit = $1,650 − $1,250 = $400 → $500 − $400 = $100 repaid (assuming cash is unchanged).
- Most of the return here comes from EBITDA growth and the 1x of multiple expansion; paydown is modest.` },
  { id: 'lbo-j014', t: 'lbo', q: `Buy at 10x $100 of EBITDA with 6x debt; EBITDA reaches $150 in year 5 and $300 of debt is repaid. What exit multiple is needed for a 25% IRR?`, a: `**10x, the same as the entry multiple.**
1. Entry EV = $1,000; debt = $600 → equity $400.
2. 25% over 5 years ≈ 3x → exit equity needed ≈ $1,200.
3. Debt at exit = $600 − $300 = $300.
4. Exit EV needed = $1,200 + $300 = $1,500 → $1,500 ÷ $150 = 10.0x.
- EBITDA growth (+$500 of EV at 10x) plus $300 of paydown deliver the ~3x with no multiple expansion.` },
  // ─── wmt ───
  { id: 'wmt-h001', t: 'wmt', q: `How is a FIG group organized (take Bank of America), and what do FIG bankers actually work on?`, a: `**FIG is split by sub-sector; at BofA that means four teams (verify current).**
## Bank of America's FIG teams
- **BCM:** banks and other depositories
- **INS:** insurance carriers and brokers
- **WAM:** wealth and asset management
- **Specialty Finance:** nonbank lenders, BDCs, mortgage and consumer finance
- Payments and fintech sit in BofA's **Technology** group, not FIG; coverage maps vary by firm (fintech or exchanges may live inside FIG elsewhere), so check each firm's setup
## The work
- **M&A:** bank mergers, insurer and block deals, asset-manager consolidation, RIA roll-ups, take-privates (e.g., Janus Henderson, 2026)
- **Capital raising:** common and preferred equity, holdco senior and subordinated debt; for insurers, surplus notes and reinsurance-backed capital
- **Capital management:** reinsurance and block trades, repositioning securities portfolios, buyback and dividend strategy
- **Strategic advice:** crossing the $10B / $100B / $250B thresholds, moving into wealth, payments or private credit, activist defense` },
  // ─── fit ───
  { id: 'fit-a001', t: 'fit', q: `What should you have ready before any fit or behavioral interview, in person or on recorded video?`, a: `**Four assets, drafted in writing and rehearsed aloud: your story, three stories, strengths and weaknesses, and answers to likely objections.**
1. **Your story** ("walk me through your resume"): a short outline (~100–150 words) plus a full spoken version (~200–300 words, about 90 seconds).
2. **Three reusable stories:** a success, a failure and a leadership example, ideally from work.
3. **Strengths and weaknesses:** three of each; weaknesses must be real but not disqualifying for an associate.
4. **Objection responses:** compare your profile with the "ideal" candidate and prepare a short answer for your biggest gap (for a career switcher: "can you do the technical work?").
- Add "why FIG" and "why this bank" answers that grow out of the same story.
- Pitfall: memorized scripts sound robotic, especially on video; know the beats, not the exact words.` },
  { id: 'fit-a002', t: 'fit', q: `Which three short stories should you prepare for behavioral questions, and how does each one differ?`, a: `**A success, a failure and a leadership story; together they can answer most behavioral questions.**
- **Success:** a result you drove with clear impact, e.g., [analysis you built in your pre-MBA role] that led to [a decision, deal or savings]. Numbers- or deal-heavy is ideal.
- **Failure:** a genuine miss against a goal you set, e.g., [initiative you launched] that fell short because of [your misjudgment]. Must show ownership and a lesson.
- **Leadership:** unlike the success story, it must involve organizing other people to fix a problem, e.g., rallying [team] when [a crisis or deadline] hit.
- Prefer work examples; MBA clubs or case competitions are a backup.
- Reuse them: the same three cover teamwork, conflict, pressure, initiative and "proudest achievement" with a different emphasis.
- Pitfall: stories where "we" did everything; interviewers want your specific actions.
- FIG tie: if one story involves a financial institution (a bank client, a lending or regulatory project), make it your success story.` },
  { id: 'fit-a003', t: 'fit', q: `Which strengths work best in a banking interview, and how do you answer "What's your greatest strength?"`, a: `**Pick strengths that map to the associate job, and prove each one with a short story.**
## Strengths that work
- Analytical and quantitative ability, attention to detail.
- Work ethic and delivering under deadlines and long hours.
- Client management, communication, teamwork and leadership (key for associates who manage analysts and face clients).
- Accounting and finance knowledge.
## The "greatest strength" answer
- One strength, one 3–4 sentence story, one result. The question mostly checks that you prepared.
- Skeleton: "My biggest strength is [communication]. At [pre-MBA firm], [team] was struggling because [problem]. I [specific action]. As a result, [measurable outcome]."
- Pitfalls: a list of adjectives with no evidence; a strength unrelated to banking.
- FIG tie: if you can, choose a strength you showed with [financial institution clients, credit data or regulators].` },
  { id: 'fit-a004', t: 'fit', q: `What makes a weakness acceptable in a banking interview, and how do you answer "What's your biggest weakness?"`, a: `**Pick a genuine weakness that isn't fatal for the job, prove it with a short story, then show briefly how you're fixing it.**
## Acceptable vs. not
- Good: management or leadership-style issues such as delegating too little, slow decisions, not flagging problems early, giving teammates too little direct feedback.
- Avoid: weak math or attention to detail, trouble with long hours, discomfort with financial statements, disguised strengths ("I work too hard").
## Structure
1. Name it plainly.
2. A brief example: at [pre-MBA role], you knew [a project or hire] wasn't working but waited months to act, which cost [time or results].
3. The fix: e.g., setting yourself deadlines for decisions every week, even small ones.
- Keep it to about 45 seconds.
- Associate angle: associates manage analysts and deadlines, so a delegation weakness is credible if you show a concrete fix.` },
  { id: 'fit-a005', t: 'fit', q: `How do you answer "What are your strengths and weaknesses?" and its variant "What feedback did you get in your last job or internship?"`, a: `**Give 2–3 strengths and 2–3 weaknesses, each tied to a quick example, in roughly 150 words.**
- One story can illustrate several traits, or use one for strengths and another for weaknesses.
- Skip the "how I'm fixing it" detail unless asked; save it for the follow-up.
- Skeleton: "My strengths are [work ethic], [quant skill] and [delivering under pressure]: at [firm] I [example with result]. Where I'm working to improve is [slow decisions] and [speaking up in groups]: on [team project] I waited too long to [act], which [cost the team X]."
## The feedback variant
- Same question in disguise: offer only 1–2 positives and 1–2 development areas, keeping the rest in reserve for follow-ups.
- Back the praise with a story (e.g., valuing [an inbound opportunity] over a holiday weekend before a bid deadline).
- Development areas should be real but not fatal (e.g., following through on existing work before chasing new projects).
- Expect follow-ups that recombine traits and stories; know them well enough to swap on the fly.` },
  { id: 'fit-a006', t: 'fit', q: `How do you identify the likely objections to your background, and how do you neutralize them?`, a: `**Compare yourself with the "ideal" candidate, find your biggest gap, and answer it briefly with an improvement trend or a compensating strength.**
## The profile bankers picture
- Strong school and grades, relevant finance experience, solid technical knowledge, proof of long hours, interesting outside interests, personable.
## Typical objections
- Lower grades or a less-known school, limited accounting and finance, no relevant work experience, few outside interests. For MBA career switchers: "can you handle the technical work and the hours?"
## Two ways to neutralize
1. **Improvement trend:** the problem is behind you and results have risen since (grades, recent finance coursework, technical prep).
2. **Compensating factor:** other experience built the same skills ([pre-MBA role] gave you modeling, client work or long hours).
## Guiding principle
- Keep it short and factual: the longer you justify a flaw, the more it looks like you're hiding something.
- Prepare only the objections that genuinely apply to you; they matter less than leadership and strengths/weaknesses questions, but a shaky answer can still sink you.` },
  { id: 'fit-a007', t: 'fit', q: `What are the "Big 5" fit questions to expect in virtually every banking interview?`, a: `**Prepare these first; strong answers make the rest of the fit interview much easier.**
1. **Walk me through your resume** (or tell me about yourself, or why are you here today).
2. **Why investment banking?**
3. **Why our bank?**
4. **What are your strengths and weaknesses?**
5. **Explain your most obvious weakness**, i.e., the main objection to your background (for an MBA switcher: "why now, and can you handle the technical side?").
- Add a sixth for FIG interviews: **Why FIG?**
- All of them should tell one consistent story; interviewers ask variants to test consistency.
- Rehearse aloud until you can deliver each in 60–90 seconds without notes.` },
  { id: 'fit-a008', t: 'fit', q: `How do you build a "tell me about yourself" answer as a career switcher whose background is finance-adjacent but has no banking?`, a: `**Treat "walk me through your resume," "tell me about yourself" and "why are you here" as one question, and tell it as a deliberate progression toward banking.**
- It's the most important answer of the interview: invest real time, draft a short outline first, then a ~90-second spoken version.
## Structure
1. **Start:** a one-line hook and where you began ([undergrad, first role]).
2. **Progression:** each role moved you closer to deals but lacked something, e.g., [audit / consulting / corporate finance] gave you [deep financial statement work] but no [valuation or transaction exposure].
3. **Spark:** when you saw deals up close ([a transaction you supported or followed]).
4. **Commitment:** what you've done since: the MBA, [finance coursework], [FIG club or case competition], conversations with bankers.
5. **Close:** why this group, linking your background to what it's known for (e.g., [bank or insurance clients you served] → FIG coverage).
- Pitfalls: a chronological list with no "why," apologizing for your path, running past two minutes.` },
  { id: 'fit-a009', t: 'fit', q: `Why do you want to work in investment banking?`, a: `**Because you want to work on transactions end to end, from pitch to close, across many deals, and your prior roles only let you see part of that.**
- **Core logic:** banking offers depth (owning the full process) and breadth (many deals over time). Buy-side firms see lots of deals but drop most early; corporates do one every few years.
- **Evidence:** the exposure that sparked it: [a deal you supported in your pre-MBA job], [MBA coursework or a FIG case competition].
- **What was missing:** e.g., at [Big 4 / consulting / corporate role] you handled one slice of a deal, such as [diligence or purchase accounting], never the whole transaction.
- **Associate angle:** you want to own execution, manage analysts and build client relationships.
- Avoid: "to learn a lot," exit opportunities, craving a high-pressure environment, money.
- Keep it consistent with your resume story; this question often checks whether your narrative holds together.
- FIG tie: finish with why financial institutions' deals (M&A, capital raises, regulatory complexity) appeal to you.` },
  { id: 'fit-a010', t: 'fit', q: `Why didn't you go into investment banking earlier, and why make the switch now?`, a: `**Expect it as a career switcher: show the interest grew out of your work, then describe a deliberate plan to get here.**
## Credible framings
- Your interest formed after the undergrad recruiting window had passed, often because you first saw deals once you were working.
- You started on another path ([consulting / Big 4 / corporate finance / military]) and the work itself pointed you toward transactions.
## Skeleton
"At [pre-MBA firm] I worked on [a project touching a deal or financial institutions] and realized I wanted to [advise on the whole transaction]. I tested that by [talking with bankers, technical prep], and the MBA is the structured path into an associate role. Now I want to apply [skills] across the full deal process in FIG."
- Keep it short and forward-looking: no regret, no long account of past setbacks.` },
  { id: 'fit-a011', t: 'fit', q: `What is the STAR method, and how long should a behavioral answer run?`, a: `**Situation, Task, Action, Result, delivered in about 100–150 words, under a minute.**
- **Situation:** one or two sentences of context.
- **Task:** your specific responsibility or goal.
- **Action:** the bulk of the answer: what you did, step by step, and why. Say "I," not "we."
- **Result:** a concrete, ideally quantified outcome, plus what you learned if relevant.
- Keep the setup short, especially for leadership and challenge questions, where the interviewer cares about your actions.
- Pitfalls: long background, no clear result, or a role that stays vague.` },
  { id: 'fit-a012', t: 'fit', q: `Describe a team project or group activity you contributed to.`, a: `**Use your success story in STAR form, making the team, your role and the constraints clear.**
## Skeleton
- **Situation:** "At [pre-MBA firm], our team of [N] had [deadline or deliverable] while [constraint: a stretched colleague, a compressed timeline]."
- **Task:** "I owned [analysis or workstream]."
- **Action:** "I [specific contribution, e.g., built a faster, automated way to analyze the reports], coordinated with [teammates or other departments] and worked [evenings and weekends] to hold the schedule."
- **Result:** "[Tangible outcome: on-time delivery, a finding that changed a decision, dollars saved]."
- What it should show: you contribute beyond your lane, communicate and deliver under pressure, which is daily life for an associate.
- Pitfalls: claiming credit for the whole team's work; a result with no numbers.` },
  { id: 'fit-a013', t: 'fit', q: `How do you answer "What's your biggest failure?" or "Tell me about a team that didn't work the way it was supposed to"?`, a: `**Use your failure story: a real setback, your part in it, the outcome and the lesson.**
## What makes it credible
- A substantive miss (a project, launch, internship or venture that underdelivered), not one mediocre grade.
- Ideally linked to a weakness you've named, so your answers reinforce each other.
## Skeleton
1. **Goal:** "At [pre-MBA firm or MBA club], I set out to [ambitious goal]."
2. **What went wrong and your role:** "I [took on too much / didn't delegate / misjudged the team], so [problem]."
3. **Honest outcome:** "We [scaled back / missed the target by X]."
4. **Lesson and change:** "Now I [separate doing the work from managing it / flag risks early], which helped when [later example]."
- Pitfalls: blaming teammates, a "failure" that is secretly a success, no lesson.
- Associate angle: lessons about managing people and workstreams land best.` },
  { id: 'fit-a014', t: 'fit', q: `Describe an ethical dilemma you faced with a teammate or colleague.`, a: `**Focus on a disagreement about the right thing to do, how you raised it constructively, and the cost you accepted.**
- It needn't be dramatic or illegal; a questionable shortcut is enough (reusing someone else's work, shading numbers, skipping a required check).
## Skeleton
- **Situation:** "On [project or case competition], a teammate suggested [a shortcut that broke the rules]."
- **Action:** "I explained why it crossed the line, offered an alternative ([I'll build the original analysis myself]), and we agreed to do it properly."
- **Result:** "[Outcome, even if costly: placed second, missed a soft deadline], but it was the right call and the work stood up."
- Show judgment, respect for the colleague and willingness to bear the cost.
- Avoid preachiness, or stories where you escalated without first trying to resolve it.
- FIG tie: financial institutions are heavily regulated, and bankers handle confidential information daily, so integrity is non-negotiable.` },
  { id: 'fit-a015', t: 'fit', q: `How do you answer "What was your toughest leadership challenge?" and "Tell me about a time you led without a formal title"?`, a: `**Use your leadership story, keep the background short and spend most of the answer on what you did.**
## Toughest challenge
- Center it on the problem: e.g., [a teammate dropped out a week before a deadline with nothing done]; you [re-scoped, reassigned pieces, kept morale up] and the team [delivered].
- Add the judgment you showed afterward (how you'd staff or plan differently).
## Leading without a title
- Show initiative when those in charge weren't available: e.g., during [quarter-end at your pre-MBA job], with [your manager away], you [gathered data from other departments to finish the reporting].
- Keep supervisors in the loop and get their sign-off; that shows judgment, not just hustle.
- Result: deadline met, errors caught or a process improved.
## Why it matters for associates
- Associates coordinate analysts, VPs and client teams with limited formal authority, so show you can influence, not just direct.
- Pitfall: talking about a title you held without describing real action.` },
  { id: 'fit-a016', t: 'fit', q: `Why aren't your grades stronger?`, a: `**Own the early problem briefly, then show the upward trend.**
- Expect it below roughly a 3.5 GPA (US) or a 2:1 (UK), or with weak test scores.
## Skeleton
"Early on I [lacked focus / switched majors / prioritized athletics or a job]. Once I committed to [field], my results improved: [GPA in major, final two years, MBA core courses], while I was also [working, competing, leading]."
- Add a compensating factor if useful: a strong quant test score, finance coursework, CFA progress.
- Keep it to about 30 seconds; no excuses, no blaming professors.` },
  { id: 'fit-a017', t: 'fit', q: `You haven't taken much accounting or finance, and your background isn't quantitative. How do we know you can handle the technical work?`, a: `**Explain why formal coursework came late, then point to concrete proof that you've built the skills.**
- **Why:** you came to finance after committing to another major or career, so formal classes weren't possible earlier.
- **Proof:** MBA finance and accounting courses, self-study with technical guides, online modeling courses, CFA Level I progress, stock pitches or FIG case competitions.
- **Quant evidence outside class:** e.g., [forecasting a budget in Excel as a club treasurer], [pricing or market analysis in a prior role], [KPIs you owned].
- Convey genuine comfort with numbers and spreadsheets.
- Don't offer an unprompted quiz; it reads as defensive. Let the interviewer decide whether to test you, and be ready if they do.
- FIG tie: mention you've worked through bank and insurer financials specifically (NIM, provisions, CET1, combined ratio).` },
  { id: 'fit-a018', t: 'fit', q: `How do you handle questions about resume gaps, a school far from New York, or a skill other candidates have (e.g., European languages)?`, a: `**Acknowledge the fact, explain it constructively in a sentence or two, then pivot to a strength.**
## Resume gaps
- Show the time was used well: volunteering, certifications (e.g., CFA Level I), new skills, short projects; note they were left off for space. Stay truthful and brief.
## School far from a financial center
- Give a concrete reason it made sense: you were working in that region (e.g., a part-time or evening program), a regional industry focus, a scholarship, family.
- Cite the program's banking placement and alumni network, then your long-term goal of working in [New York or the target office] and any personal ties there.
## A missing skill (e.g., languages for London)
- Acknowledge it without excuses and offer substitutes: excellent writing and proofreading for deal documents, sector expertise, coding (VBA, Python) to automate work.` },
  { id: 'fit-a019', t: 'fit', q: `You've never worked in banking. What makes you think your skills transfer?`, a: `**Lay out what the associate job demands, then map each demand to evidence from your past.**
## What the job demands
- Long, intense hours and tight deadlines.
- Analytical and financial skill with high attention to detail.
- Managing analysts and working with internal teams and clients.
## Mapping skeleton
- "At [pre-MBA firm], I [met tight deadlines on X / reviewed hundreds of pages of documents overnight]."
- "I built [models or analyses] that drove [decision], the core of associate work."
- "I managed [team or stakeholders], much like coordinating analysts and clients."
- "I've added [MBA finance coursework, technical prep, FIG-specific study]."
- Close: "So I'm confident I can add value on the technical work and the deal process from day one."
- FIG tie: if your prior work touched banks, insurers, asset managers or regulators, lead with it; sector knowledge is a real differentiator for a FIG associate.` },
  { id: 'fit-a020', t: 'fit', q: `Your background includes private equity or other buy-side work. How do we know you won't head back there?`, a: `**Present the buy-side stint as what convinced you that banking is the better fit, with specific reasons.**
## Reasons that ring true
- Much buy-side time goes to sourcing, screening and monitoring; most deals die early, so you rarely see one through.
- You want to execute many transactions across the full process, not oversee a handful of portfolio companies.
- You prefer the advisory seat: client relationships, broad deal exposure and seeing a sector like FIG from every angle.
## Skeleton
"At [firm], I looked at [N] opportunities and only [a few] got past the first screen. What I enjoyed most was [diligence / negotiating / working with the bankers on the deal that closed]. That's the core of banking, so I'd rather execute transactions than screen and pass on most of them."
- Avoid criticizing PE or implying banking is a stepping stone back to it.` },
  { id: 'fit-a021', t: 'fit', q: `Another candidate has a perfect GPA from a top-target school. Why should we pick you?`, a: `**Argue that on-the-job performance depends on the individual, then prove your drive and relevant experience, confidently and without knocking the other candidate.**
- **Drive:** show what it took to get here, with numbers: [N networking conversations], [technical prep], [the career change you executed].
- **Relevant experience:** e.g., [years of client-facing or analytical work], [results in your pre-MBA role], [promotions or rankings vs. peers].
- **Commitment:** you chose banking, and FIG specifically, as a long-term career.
- **Value-add:** what your background brings that a pure academic record doesn't ([knowledge of financial institutions, managing teams, client experience]).
- Tone: calm and positive, never defensive or dismissive.` },
  { id: 'fit-a022', t: 'fit', q: `You did a banking internship but didn't stay in banking (no return offer). How do you explain it?`, a: `**Be upfront, since interviewers will assume it: own it briefly, explain what you learned and show how you've improved.**
- **Context:** a plausible, honest reason: early mistakes, a group that made no offers, a mid-summer team switch, a deal-flow slump.
- **Ownership:** what you'd do differently, e.g., communicating status earlier, clarifying requirements before starting, checking work more carefully.
- **What came next:** framed as purposeful: [a role that built modeling skills and full-time experience], [technical work], then reapplying with a sharper skill set.
- **Close:** why you're a stronger candidate now and still committed to banking.
- Skeleton: "I didn't receive a return offer. Looking back, I [mistake]. Since then I [built X skill at Y], and on [example] I [applied the lesson], which is why I'm ready now."
- Pitfalls: blaming the bank or the staff; vagueness that invites more probing.` },
  { id: 'fit-b001', t: 'fit', q: `How do you answer "Where else are you interviewing?" and "Do you have other offers?"`, a: `**Be honest, name credible peer firms, give concrete stages, and make clear this firm is your first choice.**
## Where else
- Name a handful of firms in the same tier: interviewing at Citi, BofA, Barclays or Wells Fargo, cite other bulge brackets.
- Credible peers act as social proof that other banks value you.
- Avoid firms from a very different tier; it can signal you doubt your odds here or lack focus.
- Saying you're recruiting for FIG at each reinforces a consistent story.
## Offers and progress
- If you hold an offer, say so; it raises your perceived value.
- If not, give concrete stages ("first rounds at two banks, a superday next week").
- A final round you're still waiting on can be left out; never claim an offer you don't have.
- Close: "[This firm] is my first choice because [specific reason]."` },
  { id: 'fit-b002', t: 'fit', q: `Which groups at the bank would you most like to join, and why a sector team like FIG over a product group like M&A?`, a: `**Say you'd be happy in any group, then give a short, reasoned preference that includes the interviewer's group.**
## Which groups
- No strict ranking needed: name 2–3 preferences, with the interviewer's group among them.
- MBA associates are expected to bring a sector angle from their pre-MBA background; candidates without one are at a disadvantage.
- FIG version: "FIG first, given [my work with banks / insurers / asset managers / fintech], and I'd also welcome [an adjacent team, e.g., financial sponsors or M&A]."
## Sector team vs. product group
- **Industry group (FIG):** deep sector expertise and long-term client relationships across every deal type.
- **Product group (M&A, ECM, DCM, LevFin):** one deal type across sectors, with depth in execution mechanics.
- FIG pitch: you want to master how financial institutions earn money, are regulated and are valued, and advise them on M&A, capital raising and capital planning.
- M&A pitch (if asked the reverse): you enjoy deal mechanics and negotiation across industries; cite a deal or competition.
- Never cite exit opportunities or an easier route to PE.` },
  { id: 'fit-b003', t: 'fit', q: `Why this industry group rather than the bank's other sector teams? (For you: why FIG?)`, a: `**Ground it in your own experience, and frame it as wanting to advise FIG companies on deals, not to operate inside one.**
- **Personal hook first:** [pre-MBA work with banks, insurers, asset managers or fintechs], [family or friends in the industry], [an MBA course, club or FIG case competition], [a deal you followed closely].
- **Advisory angle:** you want to work on M&A, capital raises and strategic decisions for FIs; if you wanted to run a bank, you'd join one.
- **Then, briefly, the sector:** distinct accounting and regulation, ongoing consolidation (bank M&A, broker roll-ups), capital needs that create recurring deal flow.
- Don't lead with generic sector economics; save that for "tell me about the industry."
## Skeleton
"At [pre-MBA firm] I [worked on X involving financial institutions], which showed me [insight]. I'd rather advise on deals like [recent FIG deal] than work inside one institution, and FIG's mix of [M&A and capital markets work] is where I want to build expertise."` },
  { id: 'fit-b004', t: 'fit', q: `You were turned down by our program before. What went wrong, and what's different now?`, a: `**Give a short, non-defensive reason, then spend most of the answer on concrete improvements since.**
- Assume someone may remember you, even if the bank doesn't formally track past applicants.
- **Reason:** e.g., weaker technical knowledge, thinner relevant experience or lower grades at the time.
- **What changed:** [a relevant role or internship], [MBA finance and accounting coursework], [stronger technical and FIG-specific prep], [more time getting to know the team].
- **Why you're back:** reapplying shows persistence and real interest in this firm.
- Skeleton: "Last time, my [technical skills] weren't where they needed to be. Since then I've [specific steps], and I'm a much stronger candidate for [this group]."
- Pitfalls: blaming the interviewer or the process; overexplaining.` },
  { id: 'fit-b005', t: 'fit', q: `How do you handle "What questions do you have for me?" at the end of an interview?`, a: `**Ask 2–3 genuine questions tailored to the interviewer, and avoid topics that make you look unprepared or transactional.**
## Good questions
- Their path: how they joined the group and what surprised them most.
- Current activity: which sub-sectors are busiest, how the group sees bank M&A or insurance deal flow over the next year.
- Success: what set apart the strongest summer or new associates.
- Development: how associates build exposure across banks, insurance, asset management and fintech.
## Avoid
- Compensation, hours or perks.
- Anything easy to look up (a generic "day in the life," basic facts about the bank).
## Late in a superday
- It's fine to say earlier conversations answered your main questions, then ask one light, personal one ("Which deal have you enjoyed most?").` },
  { id: 'fit-b006', t: 'fit', q: `How should you prepare for questions about your own resume, and how do you answer "Which three experiences are you proudest of?"`, a: `**Know every line cold, never stretch the truth, and lean on your prepared stories.**
## Preparing
- Interviewers test whether you truly understand everything you listed: know the details, numbers, your exact role and the outcome of each entry.
- Never exaggerate; inflated claims collapse after two follow-up questions.
- Build a few core stories first (success, leadership, failure) and reuse them across resume and behavioral questions.
## "Proudest three"
- One or two sentences each, each with a quantified result.
- Choose a mix: analytical impact, initiative or leadership, results under pressure.
- An ambitious failure can still qualify (e.g., launching a venture while in school): stress what you achieved and why you moved on.
- Skeleton: "First, [analysis or deal at pre-MBA firm] that [result]. Second, [leadership example] where [outcome]. Third, [MBA or personal achievement], because [what it shows]."` },
  { id: 'fit-b007', t: 'fit', q: `What were your key takeaways from your most recent role or internship?`, a: `**Use one of your prepared stories, and emphasize the overlap with what a banking associate does.**
- Overlap to highlight: client materials or presentations, deals or clients you supported, industry and market research, valuation or modeling, urgent work under pressure.
- Describe specific tasks, then the lesson: e.g., "I [pulled comparable transactions and valued X], which taught me [how buyers think about value and who the likely acquirers are]."
- MBA candidates: apply it to the pre-MBA role and any MBA internship, ending with how it prepares you for associate work (owning analysis, guiding junior teammates, client communication).
- FIG tie: if the role touched financial institutions (lending decisions, regulatory reporting, an insurance or asset management client), say so explicitly.` },
  { id: 'fit-b008', t: 'fit', q: `You were promoted twice at your last employer. Why walk away from that?`, a: `**Acknowledge the success, give a concrete trigger that pulled you toward banking, and explain why an internal move wasn't enough.**
- **Success:** you performed well and liked the team; leaving reflects changed goals, not problems.
- **Trigger:** e.g., working on [your employer's acquisition or capital raise] made deal work more compelling than [recurring reporting, operations or consulting work].
- **Why not internally:** e.g., [corporate development was tiny or hired only former bankers], so the deal exposure you wanted wasn't available.
- **Path:** each step since (the MBA, technical prep, networking) builds toward banking.
- Skeleton: "I enjoyed [firm] and was promoted to [title], but helping on [transaction] showed me I wanted to work on deals full time. [The internal route] wasn't realistic, so I chose the MBA to move into banking, and FIG lets me build on [sector experience]."
- Pitfall: sounding as if you're running away from something.` },
  { id: 'fit-b009', t: 'fit', q: `Why did you choose your undergraduate school (or your MBA program)?`, a: `**Any sensible, honest reason works; keep it short and connect it to your story where you can.**
- It mostly comes up for less familiar or non-target schools.
- Good reasons: a strong program in your field, a large scholarship, cost and graduating with little debt, location or family ties, athletics, campus life.
- If you passed on higher-ranked options, give the practical reason (e.g., much lower cost).
- Don't sound apologetic; the point is that it was a deliberate choice.
- For the MBA version: recruiting access, a finance or FIG focus, location, scholarship.` },
  { id: 'fit-b010', t: 'fit', q: `With several years of experience, why did you go back for an MBA instead of moving straight into banking?`, a: `**Because for a true career changer the MBA is the established path in, and you tested the direct route first.**
- Changers from unrelated fields struggle to network into banking after several years of work, and it gets harder with time, even from adjacent roles such as Big 4 advisory.
- Show you tried: e.g., [months of networking and applications with limited traction].
- Cite banker feedback: you'd be seen as a career changer, and a strong MBA plus a summer associate role is the standard route.
- Present the MBA as a deliberate investment in a long-term banking career: [finance coursework], [FIG club or case competitions], [structured recruiting].
- Skeleton: "After [N] years in [field], I knew I wanted banking. I spoke with [bankers] and tried [the direct route]; the consistent advice was that the MBA and summer associate path was the right way in, so I invested in it and used it to [build technical skills and focus on FIG]."
- Pitfall: implying the MBA was a fallback or a break.` },
  { id: 'fit-b011', t: 'fit', q: `What do investment bankers actually do for clients, and how does a company choose its bankers?`, a: `**Bankers advise on M&A and raise equity and debt capital; they win mandates mainly through long relationships, expertise and competitive pitches.**
## What they do
- Advise on selling, buying or merging companies and on raising equity and debt.
- Execute: valuation, marketing materials, finding buyers, targets or investors, negotiating terms and running the process.
- Coverage (industry) groups own client relationships; product groups (M&A, ECM, DCM, LevFin) execute specific deal types.
## How mandates are won
- Long relationships: bankers often advise informally for years before a deal happens.
- Track record and specialization (e.g., a reputation for selling companies in a niche at strong valuations).
- Competitive pitches ("bake-offs") just before a deal; the client picks the team it trusts most with the best ideas.
- Sometimes opportunistic: a well-timed idea triggers the deal.
- Large banks can use lending and treasury relationships to help win advisory roles.

**FIG angle:** at a big bank, FIG clients are also counterparties, borrowers and markets clients, so coverage relationships run deep across the firm.` },
  { id: 'fit-b012', t: 'fit', q: `What goes into a pitch book?`, a: `**Everything needed to convince a client to hire the bank for a specific transaction.**
- **Credentials:** the bank's relevant track record and comparable deals.
- **Situation overview:** the client's position and the market backdrop.
- **Strategic alternatives and recommendations:** what the client could do and what the bank advises.
- **Valuation and supporting analysis:** comps, precedents, DCF; for financings, current vs. pro forma capitalization and credit metrics.
- **Counterparties:** potential buyers (sell-side), targets (buy-side) or investors (financings).
- **Summary and next steps:** top recommendations and a proposed timeline.

**FIG angle:** FIG pitch books add sector analytics: P/TBV vs. ROTCE scatterplots, pro forma CET1, TBV dilution and earnback, and deposit franchise and credit quality comparisons.` },
  { id: 'fit-b013', t: 'fit', q: `How are investment banking teams organized, and what does each type of group do?`, a: `**Two main types, industry (coverage) groups and product groups, which team up on most deals.**
- **Industry groups** (e.g., FIG, healthcare, TMT, energy, consumer): cover one sector across all deal types, building client relationships and sector knowledge.
- **Product groups** (M&A, ECM, DCM, leveraged finance; often also restructuring and sponsors): specialize in executing one deal type across sectors.
- Typical split: coverage originates and manages the relationship; product brings execution expertise and market access.
- Groups differ in hours, technical intensity and deal mix; never bring up exit opportunities in an interview.

**FIG angle:** FIG bankers pair with M&A on bank and insurance mergers, with DCM on senior, subordinated and preferred issuance, and with ECM on capital raises and IPOs for fintechs and insurers.` },
  { id: 'fit-b014', t: 'fit', q: `Where do you want to be in five to ten years? Is banking a long-term plan for you?`, a: `**For an MBA associate, the only strong answer is a clear commitment to a long-term banking career.**
- Anything less (vague openness, hints of corporate development or PE) is a red flag at the associate level; analysts get more latitude.
- FIG version: growing into a senior FIG banker with deep expertise and your own client relationships in, e.g., [banks and specialty finance] or [insurance].
- Skeleton: "In five years I'd like to be a strong VP running FIG deals and developing teams; in ten, a senior banker that [type of FI clients] trust on their most important decisions."
- Show you understand the progression (associate → VP → director/MD) and what each step requires.
- Never mention exit opportunities or banking as a stepping stone.` },
  { id: 'fit-b015', t: 'fit', q: `How do you handle questions about firm size, such as "Would you leave us for a bigger bank?" or "Why leave a big bank for a smaller firm?"`, a: `**Show that the choice is about fit (deal mix, team, client exposure), not prestige, and that you'd stay.**
## Moving up (e.g., boutique → larger bank)
- You chose this firm for its balance of deal size and complexity with client interaction.
- Acknowledge a bigger bank might offer bigger deals, but you value this team's size, culture and client exposure, so you'd stay.
## Moving down (big bank → smaller firm)
- If there was no return offer, own it like a failure question and show how you've improved.
- If there was one, give real reasons: focus on particular deal types (M&A advisory, restructuring), more client exposure on lean teams, culture, more independent work over a long career.
## For bulge-bracket FIG interviews
- Expect the reverse: why a large platform (balance sheet, capital markets reach, FI client franchise) rather than a boutique.` },
  { id: 'fit-b016', t: 'fit', q: `What is the "airport test," and how do you answer "Tell me something about yourself that isn't on your resume"?`, a: `**Interviewers are asking whether they'd enjoy being stuck with you for a day, so be relaxed, genuine and brief.**
## The airport test
- Picture a long flight delay with the candidate: would it be pleasant? Personality and judgment count alongside polish.
- You can't script these; know the usual types (life outside the resume, hypothetical spending, personality comparisons), show some humor and steer clear of controversial topics.
## "Something not on your resume"
- Choose something a resume would never capture: travel, family, an unusual activity, sport or hobby, often from earlier in life.
- Tell it as a short, vivid story and link it to who you are now (e.g., [an early experience abroad] that led to [studying or working internationally]).
- Avoid anything controversial, embarrassing or obviously rehearsed.` },
  { id: 'fit-b017', t: 'fit', q: `How should you handle curveball personal questions, such as what you'd do with $1 million, your future headline, which animal you are, or your "beta"?`, a: `**Keep answers short, genuine and a little fun; they reveal personality and values, and there is no single right answer.**
- **$1 million you can't invest:** admit a modest splurge (a trip, a home upgrade), then direct most of it to something tied to your interests that helps others (e.g., [a community facility or program]).
- **Front-page headline in 30 years:** ambitious but plausible (founding a company, a bestselling book, funding a scientific breakthrough) and tied to a real interest; avoid pure science fiction.
- **Animal:** don't overthink it; hint at traits banks value (teamwork, stamina, adaptability) with a light touch.
- **Your beta:** show you know the concept (sensitivity to market moves, the risk input in CAPM), then pick moderately above 1.0, e.g., ~1.3–1.5: more ambitious and risk-tolerant than average but not reckless. Support it with [a career risk you took, balanced by time at an established firm].
- Pitfalls: long-winded answers, controversial topics, treating the question as a trap.` },
  { id: 'fit-b018', t: 'fit', q: `Why restructuring? What makes it appealing compared with other banking groups?`, a: `**It draws on the widest skill set in banking and offers live, negotiation-heavy work with varied outcomes.**
- **Skills:** combines M&A, valuation, credit analysis and bankruptcy law.
- **Outcomes vary:** refinancing, a sale, a debt exchange or a court filing, rather than the close/no-close result of a typical sell-side process.
- **Mostly live mandates** rather than pitching, with heavy negotiation among many parties.
- **Both sides of the table:** you see companies from the debtor's and the creditors' perspectives.
- For a FIG candidate asked about RX: show respect for it, then tie back to FIG, which also blends credit, regulation and capital structure (bank failures, recapitalizations, distressed sales).
- Avoid making countercyclical job security your main reason.` },
  { id: 'fit-i001', t: 'fit', q: `Tell me about a recent deal in the news. How should you structure the answer?`, a: `**Pick one deal you know cold, ideally from the group you're interviewing with, and cover it in four parts in about two minutes.**
1. **Background:** who the buyer and seller are, what they do and how big they are (revenue and EBITDA; for a bank, total assets and deposits; for a debt or equity deal, the issuer's standalone figures).
2. **Rationale:** why the buyer wanted it (scale, geography, products, cost saves), or why the issuer raised capital.
3. **Price and terms:** deal value, premium and multiples; coupon and credit stats for a debt deal; anything unusual.
4. **Your view:** does it work for the buyer, the seller and their shareholders, and why? Back it with one or two numbers.
- Career switchers aren't expected to know every mechanic, but the headline numbers must be right.

**FIG angle:** for FIG interviews, prepare one bank deal from the Deal Book (e.g., Fifth Third / Comerica) with price/TBV, TBV dilution and earnback, cost saves and approval timing, plus one non-bank deal (payments, insurance or asset management).` },
  { id: 'fit-i002', t: 'fit', q: `In the buyer's or investors' shoes, would you have done this deal? How do you defend that opinion?`, a: `**Take a clear side, support it with two or three data points, and say what would have changed your mind.**
- **Price:** the multiple or premium paid vs. peers, precedents and the target's growth: "[X]x EBITDA against a sector median near [Y]x is hard to justify at [Z]% growth."
- **Financial impact:** EPS accretion/dilution and pro forma leverage; for a bank, TBV dilution, earnback and pro forma CET1.
- **Strategy and risk:** fit, customer overlap or cannibalization, integration, and how similar deals in the sector have worked out.
- **Better alternative:** a lower price, a different cash/stock mix, or a larger multi-year earnout tied to revenue, EBITDA or synergy targets so the seller shares the risk.
- **Reality check:** a public target can't be bought below its market price, so a "fair" price may never have been available; say so.
- Same approach for a deal you worked on: lead with data, don't hedge, and stay professional about a former client's decision.` },
  { id: 'fit-i003', t: 'fit', q: `Were there any unusual terms in the deal, and what were its main risks?`, a: `**For terms, name the feature and judge whether it's big enough to matter. For risks, tie each one back to the price paid.**
## Unusual terms
- Look for earnouts, collars or fixed exchange ratios, unusual termination fees, contingent value rights, or financing quirks (an original issue discount, a high coupon).
- Test materiality: an earnout worth ~2% of deal value barely moves accretion/dilution or IRR; one tied to multi-year EBITDA or synergy delivery would genuinely shift risk to the seller.
## Main risks
- **Valuation:** a premium multiple paid for growth that may not last.
- **Overlap:** cannibalization if the customer bases already overlap; revenue synergies that assume channels the buyer already has.
- **Balance sheet:** higher pro forma leverage that limits future deals.
- **Execution:** integration, retention of key people and regulatory approval.

**FIG angle:** in bank deals the classic risks are deposit runoff after close, credit marks proving too light, cost saves slipping and approval delays; the terms to discuss are the exchange ratio, any collar and the termination fee.` },
  { id: 'fit-i004', t: 'fit', q: `Tell me about a deal from your most recent job or internship. What if you're a career switcher without banking deals?`, a: `**Choose a deal, or deal-like project, where you personally did meaningful work and can quote the key numbers, then walk through it in four parts.**
## Picking it
- Closed beats pending or failed; M&A or restructuring beats a capital markets deal.
- Career switcher: use the closest equivalent from [your pre-MBA role] (an acquisition you analyzed, a loan you underwrote, a diligence or strategy project) or a public deal you followed closely, and say plainly which it is.
## Four-part outline
1. **Background:** the company, its size (revenue, growth, EBITDA) and its market.
2. **Motivation:** why the deal or project happened.
3. **Your contributions:** the analysis you owned and what it changed.
4. **Status:** closed (and how it was funded) or pending.
## If asked about status
- Not closed: call it pending or ongoing.
- If it fell apart publicly, admit it, since it's easy to check. Staying vague only works for a confidential deal described without names.` },
  { id: 'fit-i005', t: 'fit', q: `For a deal you worked on or followed, what kind of sale process was run, and how did you think about valuation?`, a: `**Explain why the process fit the situation, and anchor valuation in real numbers compared with the market.**
## Process
- **Broad auction:** dozens of strategic and financial buyers to maximize competition; slower, costlier, more leak risk.
- **Targeted:** a handful of logical buyers; faster, more confidential, less disruptive.
- Justify the choice: how many logical buyers existed, sponsor vs. strategic appetite, confidentiality, and whether an inbound offer was already attractive (e.g., a pre-emptive sponsor approach plus calls to [~10] other parties).
## Valuation
- Public target: the premium to the undisturbed share price.
- Trailing and forward multiples vs. peer medians and precedents.
- Whether the DCF's growth and margin assumptions match recent operating trends.
- Your view: what has to go right (cost cuts, synergies) for the price to work.
- Career switcher: apply this to a deal you followed, or to how [your pre-MBA employer] valued an acquisition or investment.

**FIG angle:** bank sales are usually narrow and confidential (few logical partners, regulatory approval, depositor sensitivity), and value is framed as price/TBV, P/E on forward earnings with cost saves, and the core deposit premium.` },
  { id: 'fit-i006', t: 'fit', q: `What were your unique contributions to a deal or project, and how did you move it forward?`, a: `**Be specific and credible: interviewers know junior team members rarely change a deal's outcome, so don't overclaim.**
- **Good examples:** catching errors in the financials, proposing better assumptions, finding a buyer or target others missed, a diligence finding, or handling investor questions well.
- **Show the effect:** e.g., you showed a key metric was slipping because of a few large customer losses rather than broad churn, which kept two bidders in the process and added competitive tension.
- **Structure:** the problem → what you did → what changed.
- Career switcher: same structure for [your pre-MBA role]: "I [built the analysis on X], which [changed the decision or kept the process on track]."
- Use "we" for the team's work and "I" for your own.` },
  { id: 'fit-k001', t: 'fit', q: `For an MBA associate, how do product and coverage groups compare day to day, and how should you decide between them?`, a: `**Product groups give depth in one deal type across sectors; coverage groups give depth in one sector across deal types. Choose by the work you want to master.**
- **Deal exposure:** product goes deep on M&A, debt or equity; coverage sees every deal type within its sector.
- **Expertise:** product associates are cross-sector generalists; coverage associates become sector specialists.
- **Hours:** M&A and LevFin are hardest on live deals; ECM and DCM are steadier; coverage swings with sector activity.
- **Client contact:** product work reaches clients mostly through senior bankers; coverage tends to bring it earlier.
- **Modeling:** heaviest in product; coverage mixes models with pitching and sector analytics.
- **Seats:** coverage groups together usually hire more associates; M&A is selective.
- **Decide:** rank what matters to you (type of work, sector interest, hours, long-term role).

**FIG angle:** FIG is coverage with real technical depth (bank merger math, capital, insurance accounting), so it blends both. In interviews, state a clear preference that includes the interviewer's group, and never cite exits.` },
  { id: 'fit-k002', t: 'fit', q: `Why FIG rather than TMT, healthcare or energy?`, a: `**Show you understand the other sectors, then explain why FIG's problems fit you better; never knock another group.**
## Quick contrast
- **TMT:** growth and technology drive value; high-profile M&A, tech IPOs and software LBO financings.
- **Healthcare:** clinical, IP and regulatory risk layered on top of the financials.
- **Energy:** commodity prices and reserve-based (NAV) valuation drive everything.
- **Industrials/consumer:** broad deal mix across manufacturing, brands and retail.
- **FIG:** the balance sheet is the product; capital, rates, credit and regulation set value, and FIs finance every other sector.
## Skeleton
"TMT and healthcare are exciting, but my work at [pre-MBA role] centered on [credit / capital / regulation / FI clients], and I want to build on it. FIG's mix of [bank consolidation, insurance and asset manager deals, constant capital raising] is where that knowledge compounds."
- Avoid: "FIG is less competitive" or dismissing a sector as hype.` },
  { id: 'fit-k003', t: 'fit', q: `Bulge bracket vs. elite boutique vs. middle market: how do they differ for an MBA associate, and why a large bank for FIG?`, a: `**The core difference is platform: full service with a balance sheet, pure advisory, or smaller deals with earlier ownership.**
- **Bulge bracket:** advisory plus lending and capital markets, large-cap focus, structured associate training, bigger classes, global brand.
- **Elite boutique:** advisory only (no balance sheet), large-cap M&A, lean teams, small classes, learning by doing.
- **Middle market:** smaller deals, more end-to-end ownership early, somewhat steadier hours, brand strongest in its segment.
## FIG twist
- FIG specialists such as KBW (Stifel) and Piper Sandler advise on many small and mid-size bank deals; large FI mandates and capital raises lean toward big banks.
## Why a large bank for FIG
- FI clients issue senior debt, sub debt, preferreds and equity constantly and value financing relationships, so FIG at Citi, Barclays, BofA or Wells Fargo spans advisory, DCM, ECM and the balance sheet.
- Add one reason specific to the bank, and frame it as fit, never prestige.` },
  { id: 'fit-k004', t: 'fit', q: `Which office should you target for FIG, and how do you answer "Why this office?"`, a: `**For FIG, New York is the default; if you name another office, tie it to the work done there and to genuine personal ties.**
## The map
- **New York:** the widest range of groups and most FIG coverage, and the most competition for seats.
- **Charlotte:** a major hub for Bank of America and Wells Fargo; check which teams sit there (verify current).
- **San Francisco:** technology and fintech; **Houston:** energy; **Boston:** healthcare and life sciences.
- **Chicago:** industrials, consumer and middle market; **Los Angeles:** media and consumer.
- Regional offices can be easier to break into, with smaller teams and sometimes faster responsibility, but offer fewer groups.
## Answering "Why this office?"
1. The clients and deals the office covers.
2. Your ties to the city (family, prior work, [your link]).
3. A long-term commitment to staying.
- Avoid leading with lifestyle or cost of living.` },
  { id: 'fit-k005', t: 'fit', q: `What does an MBA associate actually do, and how does the role differ from analyst and VP? What does that look like in FIG?`, a: `**The associate owns the quality of the team's work and the link between analysts and senior bankers.**
## Roles on a deal team
- **Analyst:** first drafts of models, comps and pages; data and diligence logistics.
- **Associate:** checks and improves analyst work, drafts the storyline, turns comments from the VP and MD, runs workstreams and coordinates with product partners, lawyers and client staff.
- **VP:** runs execution and the day-to-day client dialogue; manages associates.
- **Director/MD:** client relationships, origination and senior advice.
- Promotion to VP typically comes after about three years (verify current) and rests on judgment and ownership, not volume.
## In FIG
- Pitch books with P/TBV vs. ROTCE, pro forma capital, TBV dilution and earnback.
- Execution alongside M&A, ECM and DCM partners, with regulatory approval and capital questions in every analysis.
- Interview use: show you expect to be in the details and to manage analysts, not to lead deals on day one.` },
  { id: 'fit-k006', t: 'fit', q: `What will your first months as an associate really be like, and how would you handle working with analysts who know the systems better than you?`, a: `**Expect to earn credibility through accuracy and reliability; the MBA got you the job, not the team's trust.**
## Reality
- Most time goes to models, pitch books and internal processes, not live deal leadership.
- Analysts often know the templates, data tools and formatting standards better than you.
- Long hours, especially in the first six months; comp is strong but modest per hour worked.
## A typical day
- Early: email, markets, overnight requests from senior bankers.
- Midday: check-ins, model and comps updates, client diligence requests, page drafting.
- Evening: review analyst output, send to the VP/MD, turn comments, final checks late at night.
## Interview answer
"I'd learn from the analysts quickly and openly, then add value through careful review, [prior client or team leadership experience] and anticipating the VP's next question."` },
  { id: 'fit-k007', t: 'fit', q: `How does your pre-MBA background map to a banking group, and which backgrounds play best in FIG?`, a: `**FIG rewards backgrounds that give you credibility with financial institution clients or a credit and regulatory toolkit.**
## Strong FIG feeders
- Commercial or corporate banking, credit analysis, lending.
- Regulators, government, policy or military roles with financial oversight.
- Audit or advisory with bank, insurance or asset manager clients.
- Consulting in a financial services practice; insurance, asset management, wealth or fintech roles.
## Other common mappings
- Consulting → M&A or coverage; tech → TMT or ECM; healthcare → healthcare; oil and gas → energy; accounting → M&A, LevFin or any coverage.
## If your background isn't FI-related
- Lead with transferable skills, then prove commitment: [FIG coursework], [finance club or case competition], fluency in bank and insurer metrics.
## Skeleton
"At [pre-MBA role] I [worked with or on X], which gives me [credibility with FI clients / a grounding in credit and regulation] that I want to apply in FIG."` },
  { id: 'fit-k008', t: 'fit', q: `Where do bankers typically go after each group, and how should exits factor into your choice?`, a: `**Know the patterns for your own planning, but never raise exits in an associate interview; banks expect associates to commit to a long-term banking career.**
- **M&A:** buyout PE and corporate development are the strongest paths.
- **LevFin:** PE, credit funds and direct lending.
- **ECM:** equity research, growth investing, investor relations. **DCM:** corporate treasury, fixed-income asset management.
- **RX:** distressed and special situations funds, credit funds, turnaround advisory.
- **Coverage:** sector-focused PE, growth equity and corporate development in that sector.
- **FIG:** corporate development at banks, insurers and asset managers; financial-services PE and fintech investing; regulatory and policy roles. Generalist buyout PE is harder because FIG models are specialized.
- **Staying in banking:** coverage plus M&A skills, since client relationships are the route to MD.`, adv: true },
  { id: 'fit-k009', t: 'fit', q: `What does the MBA associate recruiting timeline look like, and what should a first-year be doing in November?`, a: `**Recruiting is front-loaded into the first-year fall; by November you should be in application and interview mode.**
## Typical sequence (dates vary by bank and school rules; verify current)
1. **Summer before the MBA:** research groups; first alumni outreach.
2. **Early fall:** bank presentations, intensive networking with second-years and bankers, story refined.
3. **Late fall:** applications; final technical drilling.
4. **Winter (often January, sometimes earlier):** first rounds and superdays; offers can come within days, with short deadlines.
5. **Spring:** technical prep; keep in touch with your future team.
6. **Summer:** internship, aiming for a full-time offer.
## Now (November)
- Applications submitted; story and technicals rehearsed aloud.
- A short update to every FIG contact at Citi, Barclays, BofA and Wells Fargo.
- Rank banks and groups now, so you can respond to an exploding offer quickly and professionally.` },
  { id: 'fit-k010', t: 'fit', q: `How do you convert a summer associate internship into a full-time offer?`, a: `**Treat the summer as a ten-week interview: the group decides return offers at the end, based on work quality, attitude and fit.**
## Before you start
- Refresh technicals in the spring, practice Excel and PowerPoint speed, follow FIG news and your group's recent deals.
## During the summer
- Zero-error work: check everything twice before it leaves your desk.
- Respond fast, ask for comments early and never repeat a mistake.
- Act like an associate: own workstreams, review analyst work, anticipate the next request.
- Build relationships at every level (analysts, associates, VPs, MDs), not just upward.
- Ask for staffing across FIG sub-sectors (banks, insurance, asset management, specialty finance).
- Take the mid-summer review seriously and act on it visibly.
## Avoid
- Complaining about hours, disappearing on weekends without telling the team, or networking at the expense of deliverables.` },
  { id: 'fit-k011', t: 'fit', q: `How should you network into a bank's FIG group? What are the rules and the outreach sequence?`, a: `**Be specific, memorable and politely persistent, and reach FIG bankers through second-years who interned at the bank.**
## Rules
- Ask about a deal, the group or a part of the job, never "banking in general."
- Follow up with a thank-you that references something specific.
- One polite nudge after about a week of silence; no more.
## Sequence
1. Email second-years who interned at your target bank (ideally in FIG); they answer most often.
2. Ask them to introduce you to a FIG associate or VP.
3. Hold a short call (about 20 minutes) with three prepared questions; take notes; send a thank-you the same day.
4. Stay in touch about monthly, e.g., a note on a deal their group announced.
5. When applications open, tell your contacts you've applied and ask for advice.
- Track every contact (date, takeaways, next touch) and aim for several FIG contacts at each target bank across levels.` },
  { id: 'fit-k012', t: 'fit', q: `What should you ask, and avoid, in a short networking call with a FIG banker?`, a: `**Ask three specific questions that show homework and give you something concrete to mention in your follow-up.**
## Good questions
- **Deal:** "On [recent FIG deal], what drove [the structure or pricing], and what did the associate own?"
- **Group:** "Which FIG sub-sectors are busiest for the group right now, and how are associates staffed across them?"
- **Success:** "What set the strongest summer associates apart last year?"
- **Person:** "What surprised you most about moving into FIG from [their prior role]?"
## Conduct
- Have a 30-second introduction ready, keep to time, take notes.
- Close by asking who else in the group you should speak with.
## Avoid
- Compensation or hours, anything on the bank's website, asking for a job or referral outright on a first call, and long monologues about yourself.` },
  { id: 'fit-k013', t: 'fit', q: `How technical are MBA associate interviews, and how should you plan your technical prep?`, a: `**Expect roughly half the interview to be technical, at the level of a strong first-year analyst.**
## Priorities
1. **Must be flawless:** the three statements, equity value to EV, DCF (WACC, terminal value), LBO basics.
2. **Strong:** comps and multiples, accretion/dilution, capital structure, credit metrics.
3. **Then:** precedent transactions and FIG valuation (P/TBV vs. ROTCE, DDM, bank merger math, insurer and asset manager basics).
## Method
- Build a DCF, an LBO and a merger model from scratch; reading is not enough.
- Answer questions aloud under time pressure; drill weak decks until they stick.
- Use a modeling course, a standard IB valuation textbook and free technical guides alongside this app.
## Habits
- Read financial news daily and keep about three recent FIG deals ready (see the Deal Book).
- Use finance club pitches or case competitions to practice presenting valuations under pressure.` },
  // ─── prod ───
  { id: 'prod-g001', t: 'prod', q: `Should a company raise debt or equity? How would you structure the analysis?`, a: `**Debt is usually cheaper and non-dilutive, so start there; switch to equity or a mix when the company can't safely carry the debt or when equity is cheaper.**
## Why debt first
- Lower required return, tax-deductible interest, no dilution for existing shareholders.
- Fits the typical borrower: mature, stable and cash-generative.
## Framework
1. **Profile:** growth vs. mature; compare the after-tax cost of debt with the cost of equity and how WACC moves.
2. **Capacity:** pro forma Debt/EBITDA and EBITDA/interest vs. the company's targets, rating thresholds and lender limits.
3. **Stress test:** project under the proposed terms and covenants, including a downside case (slower growth, lower margins).
4. **Decide:** passes in the downside → debt. Fails → a debt/equity mix, or a convertible if straight debt's cash interest is the problem. High-multiple growth companies (cheap equity) lean to equity.

**FIG angle:** banks choose by regulatory capital: common equity builds CET1, preferreds count as AT1, sub debt as Tier 2, and senior holdco debt toward TLAC. The cheapest instrument that fills the binding constraint wins.` },
  { id: 'prod-g002', t: 'prod', q: `A utility, a railroad and a branded pharma company all need capital. Which suits 100% debt, a 50/50 debt-equity mix and 100% equity?`, a: `**Utility: all debt. Railroad: half and half. Branded pharma: all equity. Debt capacity tracks predictability and collateral.**
- Lenders care most about not losing money; equity investors want upside.
- **Utility → 100% debt:** an essential service, often a regulated local monopoly, with steady demand, predictable cash flow and limited growth.
- **Railroad → 50/50:** volumes and pricing swing with the economy, but downturns can be sized from past cycles, and it owns heavy physical collateral.
- **Branded pharma → 100% equity:** patents expire so products must keep being replaced, outcomes are binary, and a breakthrough offers the kind of upside equity investors pay for.` },
  { id: 'prod-g003', t: 'prod', q: `How would you decide whether a company should borrow through term loans or subordinated notes?`, a: `**Start with the cheapest option, term loans, and move down the capital structure only if the company can't live with their covenants.**
1. **Term loans first:** lowest rate, but maintenance covenants tested every quarter (e.g., Debt/EBITDA no higher than 5.0x).
2. **Stress test:** project cash flows across operating scenarios and check covenant compliance in the downside cases.
3. **Covenants hold → term loans. They don't → subordinated notes:** looser, usually incurrence-only covenants, but a higher rate.
4. **Coverage still breaks** (e.g., EBITDA/interest of 1.5x vs. a 2.0x minimum) or note interest is hard to afford → a term loan plus notes mix, then add equity.
- Run a qualitative screen first: a pre-revenue biotech can't raise either; a mature industrial can raise both.` },
  { id: 'prod-g004', t: 'prod', q: `A company's leverage stays under 4.0x and interest coverage above 2.0x, yet its DSCR falls below 1.5x in the downside case. Why, and how could it improve?`, a: `**DSCR measures cash available to meet all fixed obligations, so it can fail while EBITDA-based ratios pass.**
- **Definition (varies):** cash flow available for debt service ÷ (interest + other fixed charges such as leases); many versions also include scheduled principal.
## Why it fails
- Weak cash conversion (FCF/EBITDA): heavy capex, working-capital build or other cash drains that EBITDA doesn't see.
- Large non-interest fixed charges, such as lease payments or principal amortization.
## Fixes
- Cut or defer capex; tighten working capital (collect faster, carry less inventory).
- Reduce or renegotiate lease commitments.
- Refinance at a lower rate or extend amortization so annual debt service falls.

**FIG angle:** DSCR is a core underwriting metric in bank CRE and commercial lending, and covenant pressure often shows up there first.` },
  { id: 'prod-g005', t: 'prod', q: `A company wants a lower coupon on its debt, but lenders insist on keeping or raising their yield. What can it offer them?`, a: `**Trade the coupon cut for other sources of yield or protection.**
- **Original issue discount (OID):** lenders fund below par (e.g., at 98), so their effective yield rises without a higher coupon.
- **Call protection:** non-call periods, higher call premiums or a make-whole, so repaying early costs the company a penalty.
- **Tighter terms:** stronger covenants or more collateral, which lower lenders' risk for the same yield.
- **In stressed situations:** equity sweeteners such as warrants, or a partial debt-for-equity swap.` },
  { id: 'prod-g006', t: 'prod', q: `Yields are ~2% lower than when a company issued an 8%, 7-year bond. Why might the same investors resist a new 6%, 10-year refinancing bond?`, a: `**Because the new bond carries much more duration (interest-rate risk), and bond investors manage to duration targets.**
- A longer maturity and a lower coupon both raise duration.
- Illustration, both priced at par: 8% 7-year bond, Macaulay duration ≈ 5.6 years; 6% 10-year bond ≈ 7.8 years, roughly 40% more rate sensitivity.
- Lower rates don't make investors willing to blow through their portfolio duration limits.
## Fixes
- Shorten the maturity (e.g., back to 7 years).
- Lift the effective yield or protection: issue at a discount (OID), or add call protection or early-repayment premiums.` },
  { id: 'prod-g007', t: 'prod', q: `What could cause a company's credit rating to be upgraded or downgraded?`, a: `**Big moves in leverage and coverage relative to peers with the same rating, or qualitative changes in business risk.**
- **Quantitative:** Debt/EBITDA and EBITDA/interest vs. same-rated peers. If BB+ peers run 4–5x and the company jumps to 6x after a debt-funded deal, expect a downgrade; deleveraging below the range supports an upgrade.
- **Qualitative:** an industry downturn, a major new competitor, weaker growth prospects, governance problems or aggressive financial policy (big buybacks, leveraged M&A) can move a rating even with unchanged financials.
- Agencies also weigh scale, diversification and liquidity.

**FIG angle:** for banks and insurers, agencies focus on capital (CET1, RBC), asset quality, funding and liquidity, and earnings rather than Debt/EBITDA; bank holdco ratings also reflect structural subordination and potential government support.` },
  { id: 'prod-g008', t: 'prod', q: `In a comparable debt issuances analysis, how do you choose the comps and which statistics matter most?`, a: `**Screen for similar issuers and deals, then use the medians to set the terms of your client's issue.**
- **Screens:** industry, geography, issuer size, time period, credit rating and deal size (e.g., US investment-grade issuers in one sector over the last few years, above a minimum size).
- **Statistics:** coupon, offering size, issue price, maturity, YTW and YTM (or spread to Treasuries), plus the issuers' leverage and coverage ratios.
- **Output:** a recommended coupon or spread range, size, tenor and structure for the client.
- **Convertibles:** also benchmark the conversion premium and conversion ratio against recent deals.

**FIG angle:** e.g., pricing a regional bank's subordinated notes off recent bank sub debt deals of similar rating, size and tenor, adjusting for call and rate-reset features.` },
  { id: 'prod-g009', t: 'prod', q: `If you were staffed on a client's IPO, what would you do? Walk through the process.`, a: `**The goal: a strong valuation, a high-quality institutional investor base and a stock that trades well after listing.**
1. **Kickoff and diligence:** meet management; gather data on the business, its market and customers.
2. **Registration statement:** draft the S-1 (in the US) with lawyers and the other underwriters; respond to SEC comments and refile.
3. **Valuation and positioning:** comps-based valuation, the equity story, analyst education.
4. **Roadshow:** a few weeks of investor meetings; build the order book and gather price indications.
5. **Pricing and allocation:** set the offer price and allocate shares; trading begins (with the greenshoe and stabilization).
- **Hardest part:** balancing issuer and investor interests; aim for a modest first-day gain without overpricing or leaving too much money on the table.
- Associate role: running the drafting and diligence workstreams and the valuation materials, and managing analysts.

**FIG angle:** FIG IPOs include fintechs, insurers and asset managers, often sponsor-backed exits.` },
  { id: 'prod-g010', t: 'prod', q: `How does a debt issuance (bond or loan) deal work from start to finish?`, a: `**It depends on whether the debt is syndicated to investors or held on the bank's balance sheet; either way, the issuer wants the lowest cost and loosest terms.**
1. **Gather data:** financials, projections, market conditions and comparable issuances.
2. **Credit analysis:** DCM or LevFin builds a credit model, tests credit stats across cases (especially downside) and proposes size, tenor, pricing and covenants.
3. **Approval:** an internal credit committee memo if the bank commits capital or holds the debt.
4. **Marketing (if syndicated):** offering document or investor memo, ratings, investor calls or a roadshow; build the book.
5. **Pricing and allocation:** set the coupon or spread from demand, then close and fund.
- Investment-grade bonds can launch and price within a day; high-yield bonds and leveraged loans need longer marketing.

**FIG angle:** banks and insurers regularly issue senior, subordinated and preferred securities, so debt deals are a big part of FIG coverage.` },
  { id: 'prod-g011', t: 'prod', q: `Who can restructuring bankers advise, and how do you find out which side a bank usually takes?`, a: `**Either the company (debtor side) or its lenders and bondholders (creditor side).**
- **Debtor side:** advise the company on fixing its balance sheet (refinancing, exchange, sale or Chapter 11); similar to sell-side M&A.
- **Creditor side:** advise an ad hoc group or official committee of lenders or bondholders trying to maximize recovery; similar to buy-side.
- Most RX teams do both but lean one way; check league tables and recent mandates before interviewing.
- Banks that also lend to the company can face conflicts that limit which side they take.` },
  { id: 'prod-g012', t: 'prod', q: `What separates a stressed, a distressed and a bankrupt company, and what pushes a company from one stage to the next?`, a: `**Stressed companies still pay but face a squeeze; distressed ones have defaulted; bankrupt ones have filed.**
- **Stressed:** current on interest, but facing a looming maturity, shrinking liquidity or tightening covenants.
- **Distressed:** in default (a missed interest or principal payment, or a covenant breach such as maximum Debt/EBITDA). Market shorthand: bonds trading roughly 1,000 bp or more over Treasuries.
- **Bankrupt:** filed for Chapter 11 (reorganization) or Chapter 7 (liquidation).
## Causes of stress
- Macro: sector downturns, energy or commodity shocks, pandemics, sharp rate moves.
- Company-specific: too much leverage, poor strategy, value-destroying acquisitions.
## Trigger into distress
- A missed payment, covenant breach, rating downgrade or cash falling below a required minimum.

**FIG angle:** the 2022–23 rate spike created large securities losses; once uninsured depositors ran, several regional banks failed within weeks (SVB, Signature, First Republic).` },
  { id: 'prod-g013', t: 'prod', q: `You're advising a struggling company. What are its strategic alternatives, and what are the trade-offs of each?`, a: `**Refinance, sell, restructure out of court or file; each step down the list is more disruptive but more powerful.**
- **Refinance (new debt or equity):** least disruptive, but investors avoid companies near bankruptcy, so it is often hard to do.
- **Sell the company or its pieces (or liquidate):** likely repays at least some creditors, but at a depressed price.
- **Out-of-court restructuring:** amend-and-extend, exchange offers, debt-for-equity swaps; avoids court costs and publicity but needs nearly every holder to agree.
- **Chapter 11:** disruptive and usually wipes out shareholders, but court tools (automatic stay, DIP financing, binding holdouts through cramdown) can make a deal and new money possible.

**FIG angle:** a stressed bank raises capital, sells assets or merges; if it fails, the FDIC takes it into receivership and sells it (e.g., First Republic to JPMorgan, 2023).` },
  { id: 'prod-g014', t: 'prod', q: `How does a Chapter 7 bankruptcy differ from Chapter 11, and how are failed banks and insurers handled instead?`, a: `**Chapter 7 liquidates the company; Chapter 11 reorganizes it while it keeps operating.**
- **Chapter 7:** a trustee sells the assets and pays creditors in priority order; the business shuts down.
- **Chapter 11:** the company keeps operating, usually as debtor-in-possession, and renegotiates or swaps its debt under a court-confirmed plan; creditors receive cash, new debt or new equity, and existing shareholders are often wiped out.
- Both trigger an **automatic stay** that halts creditor collection efforts.

**FIG angle:** insured banks can't use the Bankruptcy Code; the FDIC resolves them through receivership. Their holding companies can file Chapter 11 (SVB Financial Group, March 2023). Insurers go through state rehabilitation or liquidation run by the insurance regulator.` },
  { id: 'prod-g015', t: 'prod', q: `What is debtor-in-possession (DIP) financing, why do lenders see it as safe, and how do distressed companies use it?`, a: `**New money lent to a company in Chapter 11, with court-approved priority over pre-filing claims.**
- **Priority:** super-priority administrative status, often with liens that prime existing secured debt.
- **Protections:** tight covenants, milestones, fees and a 13-week cash flow budget make lenders view it as low risk.
- **Uses:** funds operations through the case and supports emergence; access to DIP money can itself be a reason to file.
- **Roll-ups:** existing lenders who provide the DIP sometimes convert part of their pre-filing debt into DIP debt.
- **Downside:** some lenders use the DIP and their collateral to steer the case and take control cheaply (loan-to-own).
- Providers: existing lenders, banks, private credit funds and BDCs.` },
  { id: 'prod-g016', t: 'prod', q: `What is a Section 363 sale, what does the stalking horse bidder do, and why would a debtor choose this route?`, a: `**A court-supervised sale of assets during bankruptcy, typically faster than a full plan, with a stalking horse bid setting the floor price.**
- **Stalking horse:** the debtor selects a lead bidder whose offer sets the minimum; in return it gets a break-up fee, expense reimbursement and other protections.
- **Process:** the court approves bidding procedures → an auction tries to beat the floor → the court approves the winning sale.
- **Why debtors use it:** speed, competitive tension and more control than a Chapter 7 liquidation.
- **Why buyers like it:** assets usually come free and clear of liens and claims.
- Creditors can object to specific sales, and secured lenders can credit-bid their debt.` },
  { id: 'prod-g017', t: 'prod', q: `What is a 13-week cash flow model, and how is it used when a company is distressed?`, a: `**A weekly, cash-only forecast covering one quarter, used to manage liquidity week by week.**
- Far more granular in timing and line items than normal financial statements.
- **Built from:** operating receipts (customer collections); operating disbursements (payroll, suppliers, rent); non-operating disbursements (interest, principal, restructuring and professional fees).
- **Rolls cash forward** each week to show the liquidity runway and when the revolver or DIP must be drawn.
- **Variance reporting:** actual results are compared with the forecast every week, and lenders watch closely.
- Almost always required by DIP lenders as a condition of funding.` },
  { id: 'prod-g018', t: 'prod', q: `How does your valuation approach change when the company you're valuing is distressed?`, a: `**Same tools, but normalize for distress, lean to the low end, focus on enterprise value and add a liquidation floor.**
- **Comps and precedents:** use the low end of the ranges, or distressed-deal precedents.
- **Normalize:** remove distress-driven noise such as inflated COGS, bloated working capital and one-time costs.
- **DCF:** build around a multi-year turnaround with several scenarios.
- **EV focus:** equity may be worth close to zero, so EV-based multiples matter most; the real question is how EV splits among creditors.
- **Liquidation analysis:** sets the worst-case floor.
- Sometimes value the assets alone, assuming only current liabilities, since the debt will be restructured anyway.` },
  { id: 'prod-g019', t: 'prod', q: `A distressed company with $100 of EBITDA sells for 3x. It has $50 of cash, a $100 revolver, a $300 term loan and $200 of subordinated notes. What does each tranche recover?`, a: `**Pay strictly by seniority: revolver 100%, term loan ~83%, subordinated notes 0%.**
1. Value available: 3 × $100 = $300 sale price + $50 cash = $350.
2. Revolver (most senior): $100 → 100% recovery; $250 left.
3. Term loan: $250 of $300 → ~83%.
4. Subordinated notes: nothing left → 0%.
- Each junior tranche receives only what remains after more senior claims are paid in full.` },
  { id: 'prod-g020', t: 'prod', q: `A holdco has $100 of its own debt and owns 100% of A (EV $100, debt $20), B (EV $50, debt $100) and C (EV $100, debt $50). What do creditors recover in a liquidation?`, a: `**Work entity by entity: subsidiary creditors are paid first from each subsidiary's value, and holdco creditors get only the equity left over.**
## Subsidiary level
- A: $100 covers $20 → 100%; $80 of equity left.
- B: $50 against $100 → 50%; nothing left.
- C: $100 covers $50 → 100%; $50 left.
## Holdco level
- Residual equity flowing up: $80 + $0 + $50 = $130, so the $100 of holdco debt recovers 100% and $30 is left for holdco shareholders.
## Pooled shortcut
- If everything were pooled (cross-guarantees or substantive consolidation): $250 of total EV ÷ $270 of total debt ≈ 93% for every creditor.
- The answer depends on guarantees; without them, B's lenders can't reach A's or C's value.

**FIG angle:** bank holdco debt is structurally subordinated to the bank's deposits and other liabilities, which is the basis of single-point-of-entry resolution and TLAC.` },
  { id: 'prod-g021', t: 'prod', q: `A distressed company has $50 of EBITDA, $150 of secured notes and $100 of unsecured notes; healthy peers trade at 5x. Where should each tranche trade?`, a: `**Price distressed debt off expected recovery, not its coupon: here, secured near par and unsecured near zero.**
- If healthy: 5 × $50 = $250 of EV covers all $250 of debt, so both tranches would trade near par.
- Distressed companies trade and sell at lower multiples; at ~3x, EV is only $150.
- At 3x the secured notes are fully covered (~100%) and the unsecured notes get nothing (~0%).
- In practice secured trades a bit below par (risk of an even lower multiple) and unsecured a bit above zero (option value of a turnaround).
- Sensitivity: at 4x, EV of $200 would give the unsecured notes 50%, so each turn of multiple matters enormously for the junior tranche.` },
  { id: 'prod-g022', t: 'prod', q: `A distressed bond ($100 face, 10% coupon, 5 years left) trades at 50% of par, so recent buyers expect a high return. How would you size a debt-for-equity swap?`, a: `**Work backward from the return the new holders expect, then convert it into a share of future equity value.**
1. **Their yield:** approximate YTM = [$10 + ($100 − $50) / 5] / [($100 + $50) / 2] = $20 / $75 ≈ 27% (exact ≈ 30%).
2. **As a multiple:** ~25% a year for 5 years ≈ 3.0x (30% ≈ 3.7x).
3. **Value they need:** bought at $50, so ~$50 × 3.0 ≈ $150 of value in year 5 (~$186 at 30%).
4. **Equity stake:** divide by projected year-5 equity value from the turnaround plan and peer multiples: $150 / $1,500 ≈ 10% of the equity (~12% at the exact yield).
- Offer more if holders doubt the plan or bear more execution and market risk; this is the anchor for negotiation.` },
  { id: 'prod-g023', t: 'prod', q: `In a bankruptcy or liquidation, in what order are claims repaid, and what is the absolute priority rule? How is a failed bank different?`, a: `**Absolute priority: each class must be paid in full before any more junior class receives anything.**
## Typical corporate order
1. DIP loans and administrative claims (including professional fees).
2. Secured debt (revolver, term loans), up to the value of its collateral.
3. Senior unsecured debt and general unsecured claims, including trade claims.
4. Subordinated debt.
5. Preferred equity.
6. Common equity, usually wiped out.
- An undersecured lender's shortfall becomes an unsecured claim.
- Holdco creditors are structurally subordinated to operating-subsidiary creditors.
## Failed US banks (depositor preference)
- Receivership costs → domestic deposits → general unsecured creditors → subordinated debt → shareholders.
- Credit Suisse's 2023 AT1 write-off was controversial because AT1 holders were zeroed while shareholders still received value, inverting the usual hierarchy.` },
  { id: 'prod-g024', t: 'prod', q: `How does an IPO model work, from a comps-based valuation to the offer price, new shares and % sold, and what does it actually determine?`, a: `**The model sizes the deal and the ownership split; the valuation comes from comps (often backed by a DCF), and the final price from bookbuilding.**
## Steps (ignoring fees)
1. Forward peer multiple × projected EBITDA → post-money EV at trading: 14x × $160M = $2,240M.
2. Less debt ($300M), plus existing cash ($60M) and IPO proceeds ($500M) → post-money equity value at trading = $2,500M.
3. Apply an IPO discount (~10–20%; here 20%) → post-money equity value at pricing = $2,000M.
4. Offer price = (equity value at pricing − primary proceeds) ÷ pre-IPO diluted shares = ($2,000M − $500M) / 30M = $50.
5. New primary shares = $2,000M / $50 − 30M = 10M, raising $500M.
6. % sold = 10M / 40M = 25%; then layer in secondary shares and the greenshoe, and compare multiples at pricing vs. at trading.
## What it determines
- How many shares to sell, at what discount, and who owns what afterward.` },
  { id: 'prod-g025', t: 'prod', q: `What's the difference between primary and secondary shares in an IPO or follow-on, and why does the mix matter?`, a: `**Primary shares are new shares whose proceeds go to the company; secondary shares are sold by existing holders, who keep the cash.**
- **Primary:** newly issued; funds growth, debt paydown or acquisitions; dilutes existing holders.
- **Secondary:** sold by founders or PE/VC investors; no new shares and no dilution, and the company receives nothing.
- **The mix signals intent:** a deal that's ~90% secondary makes investors wonder why insiders are so eager to sell; a balanced mix reassures.
- Don't confuse "secondary shares" with "secondary offering," a loose term for any follow-on.

**FIG angle:** a bank raising capital issues primary shares (which add to CET1); sponsor exits from insurers or fintechs are often mostly secondary.` },
  { id: 'prod-g026', t: 'prod', q: `What is a greenshoe (overallotment option), how does it change an IPO or follow-on, and why do banks use it?`, a: `**An option for the underwriters to sell up to ~15% more shares than the base deal, used to meet strong demand and stabilize the stock.**
- **Example:** base deal of 10M shares at $10 = $100M; a full 15% greenshoe adds 1.5M shares → 11.5M shares, $115M.
- Increases the deal size and the % of the company sold.
## Mechanics
- At pricing, underwriters over-allot (sell 115% of the base deal), creating a short position.
- **Stock rises:** they exercise the option and buy the extra shares from the issuer (or selling holders) at the offer price.
- **Stock falls:** they cover by buying shares in the market, which supports the price (stabilization).` },
  { id: 'prod-g027', t: 'prod', q: `What drives a follow-on equity offering model, and how does it differ from an IPO model?`, a: `**It starts from the current share price and an offering discount rather than a comps-based valuation.**
- **Shares issued = capital needed ÷ discounted offer price;** a bigger discount means more shares.
- Add the greenshoe and the primary vs. secondary split.
- **Net proceeds** = primary shares × offer price − fees.
- **% sold** = primary shares ÷ post-offering share count.
## Bank example
- A bank needs $500M to fund an acquisition; stock at $50, 4% discount → $48 offer price.
- Shares = $500M / $48 ≈ 10.4M; with 200M existing, that's ~5% of the post-offering count.
- With a ~2% gross spread, net proceeds ≈ $490M.

**FIG angle:** banks use follow-ons to fund acquisitions or rebuild CET1, and investors weigh the EPS and TBV dilution against what the money buys.` },
  { id: 'prod-g028', t: 'prod', q: `How does a SPAC take a private company public, and what are the pros and cons vs. a traditional IPO?`, a: `**A sponsor lists an empty shell with cash held in trust, then merges it with a private company (the de-SPAC).**
## Mechanics
1. **SPAC IPO:** typically $10.00 per unit, with proceeds held in trust. Public investors end up with ~80%; the sponsor's "promote" gives it ~20% for very little capital.
2. The sponsor also buys warrants (strike modestly above $10), which funds the upfront costs.
3. **De-SPAC:** the SPAC merges with a target, whose owners usually end up with the large majority of the combined company.
4. After the shareholder vote and redemptions, remaining trust cash plus any PIPE money goes onto the company's balance sheet.
## Pros
- Faster (months rather than a year or more), a negotiated price with no IPO discount, a lighter process.
## Cons
- More dilution (promote, warrants, redemptions), fees as high as an IPO's or higher, weaker reputation and mixed post-deal performance.
- SEC rules adopted in 2024 narrowed the disclosure and liability gap with IPOs (verify current).

**FIG example:** SoFi went public through a SPAC merger in 2021.` },
  { id: 'prod-g029', t: 'prod', q: `How does a convertible bond work? Define the conversion price, conversion ratio and conversion premium, and describe its payoff.`, a: `**A lower-coupon bond the holder can exchange for a fixed number of shares: roughly a straight bond plus a call option on the stock.**
- **Conversion ratio** = par ÷ conversion price: $1,000 / $50 = 20 shares.
- **Conversion premium** = conversion price ÷ share price at issuance − 1: $50 vs. $40 = 25% (typically ~20–40%).
- **Payoff line:** flat at the bond's value below the conversion price, then rising with the stock above it.
- **Market price:** rises above that line even before the stock reaches the conversion price (the option has time value while out of the money) and stays above it afterward (the bond floor still limits the downside).
- **In valuation:** in the money → count the shares (if-converted) and drop the bond from debt; out of the money → treat it as debt.

**FIG angle:** high-growth fintechs with volatile, high-multiple stocks have been frequent convertible issuers.` },
  { id: 'prod-g030', t: 'prod', q: `Convertibles carry lower coupons. Why aren't they truly cheaper than straight debt for the issuer, and why would investors ever buy the common stock instead?`, a: `**The low coupon is paid for with an equity option: the issuer gives up upside, and investors pay extra for downside protection.**
## For the issuer
- Cash interest is below straight debt, but the embedded option has real value; around and above the conversion price the bond behaves like equity.
- Counting potential dilution, the all-in cost exceeds straight debt, though it's usually below the cost of issuing common equity.
- Issuers often buy capped calls to raise the effective conversion price and limit dilution.
## For the investor
- The protection isn't free: with a 30% conversion premium, getting the same shares through the convertible costs at least 30% more than buying them outright.
- Investors give up some upside per dollar in exchange for the bond floor, so it isn't "too good to be true."` },
  { id: 'prod-g031', t: 'prod', q: `What is a PIPE (private investment in public equity), and why do SPAC mergers and stressed banks use them?`, a: `**A private sale of new shares (common, preferred or convertible) in a public company to a few institutional or PE investors, usually at a discount.**
- Faster and more certain than a marketed offering: no roadshow, and the shares are registered for resale afterward.
- **SPACs:** PIPE money tops up the trust cash to fund the merger and offset redemptions.
- **Banks:** a quick way to rebuild capital or fund a merger under stress, e.g., PacWest / Banc of California (2023, ~$400M from two PE firms) and New York Community Bancorp (2024, ~$1B+) (verify current).
- **Bank structuring:** investors usually keep voting stakes below ~10% to avoid change-in-control approvals, taking extra exposure through non-voting shares.` },
  { id: 'prod-k001', t: 'prod', q: `What does an M&A associate do day to day, and who is the group a good fit for?`, a: `**M&A associates are the analytical and process engine of buy-side and sell-side advisory mandates, across every sector.**
## Day to day
- Check and refine merger, DCF and LBO models built by analysts, and own the outputs.
- Draft and review pitch books, teasers and CIMs.
- Coordinate diligence and the data room, and keep the other advisors (lawyers, accountants, the other side's bankers) on schedule.
- Prepare materials for MDs, boards and clients.
## Skills built
- Valuation depth, deal structuring, negotiation and running multi-party processes.
## FIG link
- Bank and insurance deals add workstreams such as TBV dilution and earnback, pro forma capital and regulatory approvals; FIG coverage and M&A often staff these jointly (varies by bank).

**Suits you if:** you love modeling and orchestrating complex processes and accept the toughest hours on live deals.` },
  { id: 'prod-k002', t: 'prod', q: `What does a leveraged finance associate do day to day, and how is LevFin different from DCM?`, a: `**LevFin associates structure and underwrite debt for sub-investment-grade borrowers, mostly in sponsor-backed deals.**
## Day to day
- Structure leveraged loans and high-yield bonds for LBOs, acquisitions, dividend recaps and refinancings.
- Build credit models: cash flow, leverage and coverage by year, with downside cases.
- Write credit memos for the bank's commitment committee.
- Work with PE sponsors and with the syndicate desks that place the debt.
## LevFin vs. DCM
- **LevFin:** sub-IG, sponsor-heavy, covenants and underwriting risk, closely tied to M&A.
- **DCM:** investment-grade issuers, ratings-driven, priced as a spread over Treasuries, higher volume and steadier hours.
## FIG link
- Sponsor-owned insurance brokers, specialty lenders and fintechs borrow in leveraged markets; private credit funds are both competitors and clients.

**Suits you if:** you enjoy credit and sponsor work, especially with a commercial banking or credit background.` },
  { id: 'prod-k003', t: 'prod', q: `What does an ECM associate do day to day, and how does ECM work with FIG?`, a: `**ECM associates execute equity raises: IPOs, follow-ons, block trades and convertibles.**
## Day to day
- Valuation and pricing analyses, offering timetables and market updates.
- Input to registration statements and roadshow materials.
- Work with the syndicate desk on investor demand, allocation and pricing.
- Watch market conditions, because issuance depends on open windows.
## Character
- Markets-facing and fast: a marketed offering can launch and price within days, and the full process usually runs shorter than an M&A sale.
- Hours are generally more predictable than M&A outside launch periods.
## FIG link
- Common and preferred raises for banks and insurers, often alongside a merger; IPOs of fintechs, insurers and asset managers; sponsor sell-downs in FIG companies.

**Suits you if:** you like markets, investor dynamics and quick execution.` },
  { id: 'prod-k004', t: 'prod', q: `What does a DCM associate do day to day, and why does DCM matter so much in FIG?`, a: `**DCM associates help investment-grade issuers raise bonds and manage their debt.**
## Day to day
- New-issue pricing analyses against comparable bonds and spreads, plus timing ideas.
- Support for rating agency presentations and debt capacity and credit metric analyses.
- Liability management ideas: tenders, exchanges and refinancings.
- Market updates for issuers and coordination with the syndicate desk and investors.
## Character
- Clients include large corporates, financial institutions, sovereigns, supranationals and agencies.
- Process-driven and high volume, usually with better hours than M&A.
## FIG link
- Banks and insurers are among the largest bond issuers: holdco senior and TLAC debt, subordinated (Tier 2) debt, preferreds, insurer senior and surplus notes. Many banks run a dedicated FIG DCM team.

**Suits you if:** you enjoy fixed income markets and want more regular hours.` },
  { id: 'prod-k005', t: 'prod', q: `What does a restructuring associate do day to day, and where does RX touch FIG?`, a: `**RX associates model and negotiate outcomes for companies or creditors when a capital structure no longer works.**
## Day to day
- Liquidity and 13-week cash flow analysis, distressed valuation, and recovery waterfalls by creditor class.
- Materials for negotiations among the company, lenders and bondholders.
- Support for court work in Chapter 11: plan of reorganization and disclosure statement analyses.
- Advising creditor committees on maximizing recoveries.
## Character
- Countercyclical, legally intensive (bankruptcy code, creditor rights) and adversarial.
## FIG link
- Failed banks go through FDIC resolution rather than Chapter 11, but their holding companies can file (SVB Financial Group, 2023), and specialty lenders, mortgage firms and fintech lenders can need RX advice.

**Suits you if:** you enjoy complexity and adversarial negotiation and accept a specialized track.` },
  { id: 'prod-k006', t: 'prod', q: `Why do companies use debt, and what determines the optimal capital structure? (MM, tax shield, distress costs, pecking order)`, a: `**Debt adds value until rising distress costs outweigh its tax and cost advantages; the classic theories explain each piece.**
- **Modigliani-Miller:** with no taxes, distress costs or information gaps, the debt/equity mix doesn't change firm value. It's the baseline; real-world reasons for an optimal mix come from relaxing those assumptions.
- **Tax shield:** interest is deductible, so permanent debt adds roughly tax rate × debt in value.
- **Distress costs:** more leverage raises default risk and its costs (lost customers, legal fees, management distraction). The trade-off between shield and distress sets the optimum, where WACC is lowest.
- **Pecking order:** managers know more than investors, so issuing equity can signal overvaluation. Firms prefer internal cash, then debt, then equity.
- Also: debt disciplines management; flexibility and rating targets keep firms below the theoretical maximum.

**FIG angle:** banks are different: deposit insurance and regulation break MM, so regulatory minimums plus buffers set capital, and banks hold close to target and return the excess.` },
  { id: 'prod-l001', t: 'prod', q: `Financial Sponsors Group: when should you pitch a PE client to exit a portfolio company, or to deploy its remaining committed capital?`, a: `**Time pitches to the sponsor's fund cycle and to market conditions.**
## Exit (sale or IPO)
- Holding period: sponsors typically hold ~5–7 years, so pitch as an asset nears that window.
- Fundraising: realized wins help market the next fund, so an upcoming raise argues for exiting strong assets.
- Markets: weak M&A or IPO windows argue for waiting, unless the slump looks prolonged.
## Deploy capital
- Best pitched before the next fundraise: LPs want to see earlier commitments put to work.
- GPs may invest from a new fund before final close (e.g., once ~30% of the target is raised) to show prospective LPs the strategy in action.

**FIG angle:** the same logic applies when sponsors own insurance brokers, wealth managers or specialty lenders that FIG bankers sell.` },
  { id: 'prod-l002', t: 'prod', q: `Financial Sponsors Group: what types of private equity deals might you advise on?`, a: `**Sponsors buy, build, recapitalize and sell; each step is a banking mandate.**
- **Carve-out:** buy a non-core division from a corporate and stand it up on its own.
- **Founder succession:** buy a majority stake from a retiring founder and professionalize management.
- **Management buyout:** managers team up with a sponsor to buy the business they run.
- **Take-private:** acquire and delist a public company.
- **Add-on:** a portfolio company buys smaller rivals (buy-and-build).
- **Dividend recap:** new debt funds a payout to the sponsor before exit.
- **Secondary buyout:** one sponsor sells a whole company to another (not the same as a fund-stake secondaries deal).

**FIG angle:** insurance brokers, RIAs and fund administrators are classic sponsor platforms for add-ons and secondary buyouts.` },
  { id: 'prod-l003', t: 'prod', q: `Private Capital Advisory: what do TVPI, DPI and RVPI measure, and how would you price a $100M LP stake at 2.0x TVPI, 0.2x DPI and 1.8x RVPI?`, a: `**TVPI = DPI + RVPI: cash already returned plus remaining marked value, per dollar paid in.**
- Here (assuming the $100M is fully called): $20M distributed and $180M of NAV remaining.
- **Pricing drivers:**
  - Fund age: a NAV-heavy profile is normal in year 3 but a warning sign in year 9.
  - Asset quality: are the companies performing, and do the marks line up with public comps and deals?
  - The GP's track record and how conservatively it marks.
- **Return math:** a buyer paying par for $180M of NAV needs $270M back to earn 1.5x, i.e., a fund TVPI of ~2.9x (0.2x + 2.7x). At a 10% discount ($162M paid), it needs $243M, or ~2.6x.

**FIG angle:** alternative managers report these fund metrics; at the firm level they're valued on FRE vs. carry, AUM growth and TEV/AUM.` },
  { id: 'prod-l004', t: 'prod', q: `Private Capital Advisory: how do LP-led and GP-led secondaries differ, for investors and for the advising banker?`, a: `**LP-led sells an existing fund interest; GP-led moves specific assets into a new vehicle.**
## LP-led
- An LP (e.g., a pension) sells its interest in a fund to a secondary buyer, who diligences the fund and its holdings.
- Banker role: a high-volume intermediary running the sale and diligence, with no company-level CIMs or models; lower fees, large sizes, steadier through cycles.
## GP-led
- The GP sets up a continuation vehicle funded by secondary investors, which buys one or a few assets from the old fund. Existing LPs choose to cash out or roll over.
- Banker role: M&A-like (materials, valuation, buyer outreach, closing); higher fees, more cyclical, busiest when dry powder is ample and markets are calm.` },
  { id: 'prod-l005', t: 'prod', q: `Private Capital Advisory: why do LPs sell fund stakes early, even in good funds, and why do GPs set up continuation funds?`, a: `**LPs sell for portfolio reasons, not just performance; GPs use continuation funds to hold winners longer.**
## Why LPs sell
- **Denominator effect:** public markets fall, so private equity becomes overweight and must be trimmed.
- Institutional change: a new CIO or committee prunes non-core holdings.
- Strategy, return-target or political shifts, or a plain need for liquidity.
## Why GPs form continuation funds
- Offer existing LPs liquidity.
- Keep compounding a strong asset beyond the fund's term.
- Reset fee and carry economics.
- Raise fresh capital for follow-ons and add-ons, and bring in new LPs.` },
  // ─── ind ───
  { id: 'ind-a001', t: 'ind', q: `How is modeling and valuing a consumer/retail company different from a typical corporate, and which operating drivers would you project?`, a: `**Accounting and valuation are standard (EV/EBITDA, P/E, DCF); the differences sit in the operating drivers and a few sector metrics.**
## Drivers to project
- Store count (openings and closures) and sales per store.
- Same-store (comparable) sales growth, kept separate from growth driven by new stores.
- Total square footage and sales per square foot.
- Gross margin by product or segment; segment or geographic operating margin.
- Capex split into maintenance vs. growth, since opening a store costs far more than keeping one running.
## Sector metrics
- Store-level (4-wall) EBITDA and lease-adjusted EBITDAR.
- Know the vertical (staples, discretionary, pure retail): cyclicality drives beta and multiples.` },
  { id: 'ind-a002', t: 'ind', q: `What are the main consumer/retail verticals, and how would their valuations differ across the economic cycle?`, a: `**Staples are defensive, discretionary is cyclical, and retailers fall in between depending on what they sell.**
- **Staples:** necessities such as household products, food and personal care; demand holds up in recessions → lower beta, steadier multiples.
- **Discretionary:** optional purchases such as autos, appliances, apparel, restaurants and travel; demand swings with the economy → higher beta.
- **Pure retailers** (they sell but don't manufacture) are sometimes a third group; they trade like whichever category their product mix resembles.
- Cycle pattern: discretionary names usually command higher multiples in expansions and lower ones in downturns; staples are more stable.

**FIG angle:** discretionary spending is a key read-across for card issuers' purchase volumes and credit losses, payment networks and BNPL providers.` },
  { id: 'ind-a003', t: 'ind', q: `Should a franchised restaurant chain or one that owns and operates its locations trade at a higher multiple? Why?`, a: `**Usually the franchisor.**
- **Capital-light:** franchisees fund build-outs and run the units; the franchisor earns royalties and fees for the brand and system.
- Growth needs little capex, margins are high and royalty streams are predictable, so cash conversion is strong and risk lower → higher multiple.
- Company-operated chains keep all store profit but carry the capex, labor and lease burden, and earnings swing more with sales.
- Caveat: the franchisor depends on franchisee health; weak operators can damage the brand, so a poorly run system still deserves a discount.` },
  { id: 'ind-a004', t: 'ind', q: `What is a retailer's 4-wall EBITDA, and how does it differ from regular EBITDA?`, a: `**Store-level profit: store revenue minus COGS and the costs of running that store, before corporate overhead.**
- Deducts: COGS, store rent, store staff wages and benefits, utilities and other in-store costs.
- Excludes: headquarters overhead such as finance, IT, HR and corporate marketing.
- Some companies also exclude store opening and closing costs; debatable, since those recur while the chain is growing.
- Use: isolates unit economics (4-wall margin, payback on a new store), while company EBITDA blends store performance with corporate costs.
- The gap between total 4-wall EBITDA and company EBITDA is the overhead burden.` },
  { id: 'ind-a005', t: 'ind', q: `How would you estimate a property's value from the cap rates of comparable properties?`, a: `**Value ≈ net operating income (NOI) ÷ a cap rate taken from comparable recent sales.**
- Cap rate = NOI / property value, essentially an unlevered yield on the property.
- Example: NOI of $5M and comps at a 6.25% cap rate → value ≈ $5M / 6.25% = $80M.
- Adjust for what the comps miss: location, age and condition, tenant quality, lease terms. A lower cap rate means a higher value.

**FIG angle:** rising cap rates cut collateral values behind bank CRE loans. If the cap rate moves to 7.5%, value drops to ~$66.7M and a $52M loan goes from 65% to ~78% loan-to-value, raising credit and refinancing risk.` },
  { id: 'ind-l001', t: 'ind', q: `Healthcare: how does valuation differ across the main verticals, and what drives a facilities operator such as a nursing-home chain?`, a: `**Mostly standard (DCF, TEV/EBITDA, P/E); branded drugs and facilities need sector-specific forecasts.**
- **Verticals:** pharma, biotech and life-science tools vs. equipment and services (hospitals, labs, managed care, devices).
- **Branded pharma with a pipeline:** forecast each marketed drug to patent expiry, then cut its revenue sharply as generics arrive; weight pipeline drugs by approval odds. Haircut the terminal value or use negative growth, since products must keep being replaced.
- **Facilities:** sites × beds × occupancy × revenue per occupied bed (driven by price per admission and length of stay); staffing and costs scale with beds; capex funds new sites and upkeep.

**FIG angle:** managed care companies are insurers in substance (premiums, medical loss ratios) but are usually covered by healthcare bankers rather than FIG.` },
  { id: 'ind-l002', t: 'ind', q: `Biotech: how would you value a clinical-stage (e.g., Phase II) company with no revenue, and which multiples are useful?`, a: `**A risk-adjusted DCF built drug by drug, cross-checked against forward-revenue multiples.**
1. Project the R&D needed to finish trials and win approval, weighted by the odds of reaching each phase.
2. Commercial revenue = addressable patients × market share × price per patient, times the cumulative probability of approval.
3. Cut revenue steeply (often ~90%) when exclusivity ends; most costs scale with revenue.
4. Discount unlevered FCF with no terminal value. With several drugs, sum each drug's value and subtract capitalized corporate overhead; then bridge to equity value.
- **Multiples** (once long-range forecasts are credible): TEV / peak sales and TEV / revenue five years after launch.` },
  { id: 'ind-l003', t: 'ind', q: `Industrials: what sets the sector apart, and how do backlog and book-to-bill work for manufacturers with long lead times?`, a: `**Standard accounting and valuation, but highly cyclical and run on sector KPIs.**
- Customers are mostly businesses and governments; results swing with GDP, credit, interest rates and trade policy.
- **Verticals:** capital goods (aerospace/defense, machinery, building products), transportation (airlines, rail, shipping, freight) and commercial services.
- **Long lead times** (aircraft, rail cars): ending backlog = beginning backlog + new orders − revenue recognized. Book-to-bill = orders ÷ revenue; above 1.0x means the backlog is growing.
- Contract assets, contract liabilities and work in progress can swing working capital sharply.
- **SOTP** helps for conglomerates or shippers with mixed fleets; it adds little for pure plays such as a single airline.` },
  { id: 'ind-l004', t: 'ind', q: `Industrials: how would you forecast an airline, and what is different about valuing shipping companies?`, a: `**Airlines run on capacity and yield; shippers are valued more on fleet assets and post-capex cash flow.**
## Airline
- Capacity in available seat miles (ASMs) × load factor = revenue passenger miles (RPMs).
- Passenger revenue = RPMs × yield (revenue per RPM), plus ancillary and cargo revenue.
- Costs split into fuel and non-fuel (labor, maintenance, rent); heavy D&A and aircraft capex.
## Shipping
- Some use partnership (GP/LP) structures, so distributions are split between holders.
- Capex is so large that EBITDA − capex (distributable cash flow) matters more than EBITDA; EBITDAR normalizes lease mix and accounting regimes.
- NAV = market value of the fleet less liabilities; compare via P/NAV.` },
  { id: 'ind-l005', t: 'ind', q: `Metals & Mining: how do producers and miners differ in valuation, and how would you value a steel producer?`, a: `**Producers are manufacturers valued normally; miners are valued on decades of reserves.**
- **Miners:** NAV model (a long DCF with no terminal value), P/NAV, TEV/reserves, TEV/resources.
- **Steel producer:** volume = capacity × utilization; revenue at the realized price per ton; gross margin per ton less opex gives EBITDA. Split maintenance capex from growth capex (new mills add capacity).
- Run DCF scenarios on steel prices and spreads; comps on TEV/EBITDA and P/E.
- **TEV/NOPAT vs. TEV/EBITDA:** NOPAT is after D&A and tax, so it captures capital intensity and tax differences. Use it if those drive value; EBITDA is better for normalizing across different policies.` },
  { id: 'ind-l006', t: 'ind', q: `Mining: walk me through a NAV model for a gold miner. Which reserve categories go in, and should short-term NAV growth drive P/NAV?`, a: `**Model each mine to the end of its economic life, discount, and bridge to equity.**
1. Existing mines produce until uneconomic; new mines get development capex, a ramp-up, a peak and a decline.
2. Revenue from a gold price deck (high/base/low).
3. Mine-level capex and opex (a fixed per-mine amount plus a cost per ounce); add corporate overhead and taxes.
4. Discount with no terminal value at a sector-norm rate (often ~5% for gold, higher for copper), add cash, subtract debt → NAV vs. market cap.
- **Reserves** (proved, probable) are economically recoverable; **resources** (measured, indicated, inferred) are broader and less certain. Base the case on reserves; risk-weight anything more speculative.
- A year or two of NAV growth barely moves a multi-decade value, so expect little correlation with P/NAV.` },
  { id: 'ind-l007', t: 'ind', q: `Mining: which multiples and comps criteria are sector-specific, why might gold miners trade richer than copper miners, and what are metal-equivalent units?`, a: `**Miners trade on what's in the ground, so multiples and comps key off reserves and production.**
- **Multiples:** P/NAV, TEV/reserves, TEV/resources, and P/cash flow (which captures capex, tax and working capital, unlike EBITDA).
- **Comps:** size by reserves, resources or annual production; screen by primary metal; use broad regions since miners operate globally.
- **Gold vs. copper:** gold miners often trade near or above 1.0x P/NAV and copper miners below it; gold is a store of value with steadier perceived demand, while copper tracks industrial cycles.
- **Metal equivalents** convert a mix into one unit at relative prices: 1,000 oz gold + 10,000 lb copper at $2,000/oz and $4/lb → 1,000 + (10,000 × $4 ÷ $2,000) = 1,020 gold-equivalent oz.` },
  { id: 'ind-l008', t: 'ind', q: `Oil & Gas: what are the main verticals, and how does valuation differ across E&P, midstream and downstream?`, a: `**E&P is the specialized one; midstream adds MLP and yield quirks; the rest are fairly standard.**
- **Upstream (E&P):** price-takers with depleting reserves → NAV model, TEV/EBITDAX, TEV/proved reserves, TEV/daily production.
- **Midstream** (pipelines, storage): forecast capacity × utilization × fee; DCF and TEV/EBITDA, plus distribution yield, CAFD, P/CAFD or a DDM given high payouts.
  - MLPs pay no entity-level tax, distribute most cash and raise capital constantly; GP and LP payouts differ under the partnership agreement, so value differs by holder.
- **Downstream (refiners):** standard DCF, TEV/EBITDA, P/E; drivers are refinery count, capacity, utilization and refining margins (crack spreads).
- Oilfield services and integrateds: mostly standard.` },
  { id: 'ind-l009', t: 'ind', q: `Oil & Gas: walk me through a NAV model for an E&P company. How would you choose its comps?`, a: `**A well-level DCF of the reserve base with no terminal value.**
1. Existing wells decline until proved developed reserves are no longer economic.
2. Undeveloped inventory (PUDs; optionally probable/possible) is drilled at X wells a year; each well starts at its initial production rate and declines toward its estimated ultimate recovery (EUR).
3. Revenue = volumes × price deck (oil, gas, NGLs; high/mid/low cases).
4. Costs: drilling and completion capex, lease operating expense, production taxes, transport; then cash taxes and G&A at the corporate level.
5. Discount at the customary 10%, add cash and undeveloped acreage, subtract debt and preferred → NAV, compared with market cap.
- **Comps:** size on proved reserves or production; keep pure E&Ps apart from integrateds; avoid mixing US GAAP and IFRS reporters.` },
  { id: 'ind-l010', t: 'ind', q: `Oil & Gas: how do you calculate a single well's IRR, and a gas-weighted producer's reserve life?`, a: `**Well IRR: net upfront cost vs. net cash flows. Reserve life: reserves ÷ annual production in common units.**
## Well IRR (80% working interest, 10% royalty, $10M well cost)
- Upfront cost = 80% × $10M = $8M.
- Year 1: 1,000 bbl/day × 365 = 365,000 bbl, declining 20% a year until cumulative output reaches the 1M bbl EUR.
- Company revenue = volume × price × 80% × (1 − 10%), i.e., 72% of gross.
- Deduct its share of LOE, production taxes and transport; IRR on −$8M then the yearly cash flows.
## Reserve life
- 6 Mcf of gas ≈ 1 bbl: 50 MBbl of oil = 300 MMcfe, so output = 600 + 300 = 900 MMcfe a year.
- 10 Bcfe = 10,000 MMcfe; 10,000 ÷ 900 ≈ 11.1 years.`, adv: true },
  { id: 'ind-l011', t: 'ind', q: `Oil & Gas: how do successful efforts and full cost accounting differ? And an E&P with a $5B internal NAV but a $3B market cap says it's undervalued: is it?`, a: `**Normalize accounting with EBITDAX; be skeptical when reserve metrics are weak.**
## Successful efforts vs. full cost
- Productive wells are capitalized under both; dry holes are expensed under SE but capitalized under FC.
- SE → lower operating income, net income and PP&E; FC → higher DD&A and more frequent ceiling-test write-downs.
- EBITDAX adds back exploration expense to put both on one basis.
## The undervaluation claim (reserve life 7.0, replacement 80%)
- Reserve life = proved reserves ÷ annual production; 7 years is short.
- Replacing only 80% of output means proved reserves are shrinking.
- The internal NAV likely leans on probable/possible reserves or rosy prices. It might be cheap, but aggressive assumptions are the likelier explanation.`, adv: true },
  { id: 'ind-l012', t: 'ind', q: `Power & Utilities: how does valuation differ between regulated utilities and independent power producers, and why use TEV/rate base?`, a: `**IPPs are valued like normal companies; regulated utilities are valued on their rate base and allowed returns.**
- **Verticals:** regulated electric, gas and water utilities; unregulated IPPs; multi-utilities.
- **Regulated:** the regulator sets the rate base (roughly net PP&E), allowed debt/capital and allowed ROE, and customer rates are backed into from those.
- **Multiples:** TEV/rate base and TEV per MW size the asset base regardless of capital structure or local rules; EBITDA is effectively capped by equity × allowed ROE, so it embeds those choices. P/BV and P/TBV also matter.
- **IPP vs. regulated:** IPPs gain when power prices are high relative to fuel (wide spark/dark spreads) and suffer when spreads compress, so they carry higher betas; which trades richer depends on the cycle.` },
  { id: 'ind-l013', t: 'ind', q: `Power & Utilities: back into a regulated electric utility's rate: $2,000M rate base, 50% debt, 12% allowed ROE, 6% cost of debt, $60M O&M, $20M depreciation, 1,500 GWh sold, 25% tax.`, a: `**Build the revenue requirement up from the allowed profit, then divide by volume.**
1. Equity = 50% × $2,000M = $1,000M; allowed net income = 12% × $1,000M = $120M.
2. Pre-tax income = $120M ÷ (1 − 25%) = $160M.
3. Add interest (6% × $1,000M = $60M), O&M $60M and depreciation $20M → revenue requirement = $300M.
4. Rate = $300M ÷ 1,500 GWh (1.5 billion kWh) = $0.20 per kWh.
- **Multi-utility SOTP:** the segment with the highest allowed ROE and rate-base growth usually earns the top multiple; with similar ROEs, lower operating costs leave room for rate increases.

**FIG angle:** utility earnings = allowed ROE × regulated equity, much as a bank's growth is capped by regulatory capital; both trade on P/BV relative to ROE.` },
  { id: 'ind-l014', t: 'ind', q: `Project Finance: how does it differ from corporate finance, and how would a lender stress-test an infrastructure asset?`, a: `**Project finance lends to one asset, not a company, and is repaid only from that asset's cash flows.**
- **Structure:** a special-purpose vehicle with a finite life; debt is non- or limited-recourse to the sponsor.
- **Credit:** long-term contracts (PPAs, concessions, tolls) support high leverage; debt is sized and sculpted to CFADS against a minimum DSCR rather than to EBITDA multiples.
- **Corporate finance:** many assets, indefinite life, balance-sheet credit, leverage multiples and covenants.
- **Lender stress test:** model construction overruns and delays, opex inflation and downtime, combine them into a worst case, and check that DSCRs hold and debt repays within its tenor.

**FIG angle:** banks, life insurers (via long-dated private placements) and private credit funds are the main project lenders; infrastructure debt suits insurers' long-duration liabilities.` },
  { id: 'ind-l015', t: 'ind', q: `Project Finance: walk me through a brownfield acquisition model, and what changes for a greenfield project?`, a: `**Brownfield: forecast CFADS, size the debt off it, and compute equity returns. Greenfield adds a construction phase first.**
## Brownfield
1. Price, dates and flags for each operating phase.
2. Volume drivers (MWh, tonnes, traffic) → CFADS = EBITDA − cash taxes − maintenance capex ± working capital ± reserve account movements.
3. Size and sculpt debt to a minimum DSCR or LLCR.
4. Cash flow to equity = CFADS − debt service → IRR and MOIC.
## Greenfield
- Equity and a construction loan fund the build; interest and fees during construction are capitalized or paid with equity.
- At completion, a term loan sized on DSCR/LLCR refinances the construction loan.
- Circularity: fees and capitalized interest depend on loan size and vice versa; fix with hard-coded total costs (a paste macro) and interest on opening balances.`, adv: true },
  { id: 'ind-l016', t: 'ind', q: `Project Finance: why is debt sculpted to cash flows, what are DSCR and LLCR, and why is sculpting tricky in Excel?`, a: `**Debt service is set as a fraction of each period's cash flow, so repayment rises and falls with the asset.**
- **DSCR** = CFADS ÷ (interest + scheduled principal + fees), each period.
- **LLCR** = PV of CFADS over the remaining loan life ÷ debt outstanding.
- **Sculpting:** maximum debt service each period = CFADS ÷ target DSCR; debt = PV of those payments at the loan rate. E.g., $13M of CFADS at 1.30x → $10M of debt service.
- **Why:** contracted cash flows are predictable; lenders get repayment matched to cash flow; sponsors get more leverage.
- **Excel pain:** after-tax CFADS depends on interest, which depends on debt size (circular; use goal seek or a macro); uneven dates and rates; sweeps, reserve accounts, refinancings and revolvers.`, adv: true },
  { id: 'ind-l017', t: 'ind', q: `Project Finance: how would you forecast a gas-fired power plant, and how do an airport, a solar plant with a 10-year PPA and a merchant solar plant compare on risk?`, a: `**Plant revenue = capacity payments + energy payments; risk rises with market-price exposure and construction complexity.**
## Gas plant
- Generation (MWh) = capacity (MW) × hours × capacity factor (often 50%+ for gas).
- Revenue: fixed capacity payments plus variable energy payments, often with escalators set in a PPA.
- Costs: fuel and labor (variable), O&M tied to capacity; then D&A, interest, tax and maintenance capex.
## Risk ladder (lowest to highest)
1. **Solar with a 10-year PPA:** prices locked; limited upside.
2. **Merchant solar:** market prices cut both ways.
3. **Airport:** complex, overrun-prone build, but traffic and fees can grow and it can add terminals; highest return potential.` },
  { id: 'ind-l018', t: 'ind', q: `Real Estate: how do the main property types differ, and how do stabilized acquisition and development models work?`, a: `**Lease length and tenant type set the modeling approach; development adds construction and lease-up risk.**
- **Office, retail, industrial:** business tenants on 5–10 year leases with bespoke terms (free rent, reimbursements, tenant improvements); model lease by lease. Industrial is quicker to build, with fewer tenants.
- **Multifamily** (~1-year leases) and **hotels** (nightly): model average rent or ADR and occupancy. **Condos** are sold, often presold.
- **Stabilized acquisition:** price via cap rate or $/sq ft, fund with debt and equity, project the pro forma, exit at forward NOI ÷ cap rate → equity IRR.
- **Development:** buy land, fund construction with equity first and then a construction loan (capitalized interest), refinance into a permanent loan, lease up, sell on stabilized NOI.` },
  { id: 'ind-l019', t: 'ind', q: `Real Estate: walk me through a property pro forma. How do NOI, adjusted NOI and cash flow to equity differ?`, a: `**Start at potential rent and step down to what equity investors actually receive.**
1. Potential rent at full occupancy and market rates.
2. Less vacancy, free rent and loss to lease; plus expense reimbursements and percentage rent → effective gross income.
3. Less operating expenses and property taxes → **NOI**: the EBITDA analogue, before debt and most capital costs (capital reserves are treated inconsistently).
4. Less tenant improvements, leasing commissions and capex net of reserves → **adjusted NOI** (unlevered cash flow).
5. Less interest and principal → **cash flow to equity**.
- No corporate tax: properties sit in pass-through entities (partnerships, LLCs, REITs).
- NOI sets exit value; the debt-service line shows financing capacity.` },
  { id: 'ind-l020', t: 'ind', q: `Real Estate: what are the three main ways to value a property, and why can deals carry 60–70% leverage?`, a: `**Cap rates, DCF and replacement cost; leverage works because property cash flows are high-margin and steady.**
## Valuation
- **Cap rate:** forward stabilized NOI ÷ market cap rate (a 5% cap rate = 20x NOI).
- **DCF:** discount adjusted NOI plus an exit value.
- **Replacement cost:** what it would cost to build today vs. the asking price.
## Why 60–70% debt works
- NOI margins are often 50%+ with modest ongoing capex.
- Loans amortize over 20–30 years even when the hold is 5–10 years.
- Interest-only periods ease early debt service.

**FIG angle:** banks size CRE loans on loan-to-value and DSCR, so rising cap rates erode collateral coverage directly; CRE concentration is a core bank-credit topic.` },
  { id: 'ind-l021', t: 'ind', q: `Real Estate: what is a waterfall (promote) structure, and why is it common?`, a: `**Profits are split by IRR hurdles rather than pro rata to equity, so the developer or sponsor gets a bigger share as returns rise.**
- Illustration: investors fund 90%, the developer 10%. Up to a 10% IRR, cash splits 90/10; from 10% to 15%, the developer takes 20%; above 15%, 30%.
- Why: it rewards finishing on time and on budget and pushing rents, while investors, who fund most of the equity, still keep most of the profit.
- Mechanics mirror PE carried interest: return of capital, preferred return, sometimes a catch-up, then the promote split.

**FIG angle:** the same hurdle-and-carry logic drives alternative asset managers' performance fees.` },
  { id: 'ind-l022', t: 'ind', q: `REITs: what are the main requirements, why use FFO instead of net income, and how do US and IFRS REITs differ?`, a: `**REITs avoid corporate tax by paying out most income, so they constantly raise outside capital, and net income is a poor earnings gauge.**
- **US tests:** distribute at least 90% of taxable income; roughly 75%+ of assets and gross income real-estate related; ownership-dispersion rules.
- **FFO** = net income + real estate D&A − gains (+ losses) on property sales + impairments. **AFFO** also deducts recurring capex and leasing costs and adjusts for straight-line rent.
- **US vs. IFRS:** US REITs carry property at depreciated cost; IFRS REITs mark to fair value through income, so NAV is readily visible. Europe uses EPRA earnings in place of FFO.

**FIG angle:** mortgage REITs hold loans and MBS rather than buildings, trade on P/BV and dividend yield, and are often covered by FIG.` },
  { id: 'ind-l023', t: 'ind', q: `REITs: how do you value an equity REIT, and how does a REIT NAV model work?`, a: `**Comps, precedents and DCF still apply, but on REIT metrics, with NAV as a key cross-check.**
- **Multiples:** P/FFO, P/AFFO, TEV/EBITDA, dividend yield; IFRS REITs also on P/BV.
- **DCF vs. DDM:** an unlevered DCF is simplest; a levered DCF or DDM needs debt, equity and interest forecasts (the DDM adds FFO and a payout ratio). Worth it when dividends move around a lot.
## NAV model
Most useful for US REITs, carried at historical cost, after property values shift.
1. Forward NOI ÷ cap rate = gross property value; value fee or other income at a higher cap rate.
2. Add other assets; mark debt to market and subtract all liabilities.
3. NAV ÷ shares vs. share price (premium or discount to NAV).` },
  { id: 'ind-l024', t: 'ind', q: `REITs: how do REIT M&A deals differ from normal-company deals, and why do contribution and value creation analyses matter?`, a: `**REIT deals are mostly stock-funded, so ownership splits and the post-deal share price dominate.**
- **Why stock:** payout rules leave little cash, and leverage is usually already high.
- **Purchase accounting:** accumulated depreciation is eliminated, properties are written up to fair value, and lease intangibles (in-place leases, above/below-market leases) are recorded.
- **Target debt and preferred:** assume, refinance or bridge; the choice can swing the economics.
- **Accretion/dilution** on FFO or AFFO per share rather than EPS.
- **Contribution analysis:** does each side's ownership match its share of revenue, FFO and real estate assets?
- **Value creation analysis:** assume the larger combined REIT re-rates to a higher multiple, then back into the buyer's implied share price; speculative, so be wary if it needs a big re-rating.`, adv: true },
  { id: 'ind-l025', t: 'ind', q: `REITs: how does a REIT choose between debt and equity, and how is a REIT LBO different from a normal LBO?`, a: `**Payout rules mean REITs keep raising capital, which shapes both funding choices and buyout returns.**
- **Debt vs. equity:** debt is cheaper but capped by covenants (e.g., maximum debt/EBITDA). Run operating scenarios, borrow up to the covenant headroom, then issue equity, targeting the mix that minimizes WACC while staying compliant.
- **REIT LBO:** the company usually keeps REIT status, so it must keep paying large dividends; acquisitions and development continue, funded mostly with debt because the sponsor doesn't want to inject more equity.
- Returns come from EBITDA growth, multiple expansion and dividends, with little or no debt paydown, so exit timing matters even more.`, adv: true },
  { id: 'ind-l026', t: 'ind', q: `Renewables: what are the main verticals, and which metrics and multiples are used to value them?`, a: `**Mostly standard valuation; the drivers borrow from power, industrials or oil & gas depending on the vertical.**
- **Verticals:** solar, wind, storage/batteries, biofuels, EVs and diversified platforms; smaller hydro, geothermal, hydrogen and carbon capture.
- **Power producers:** TEV/MW separates installed capacity from how well it's monetized.
- **Asset-holding yieldcos:** spending is front-loaded capex, so cash yields are high; valued on dividend yield, CAFD and equity value/CAFD, much like MLPs or REITs.
- **Manufacturers and services:** the usual TEV/revenue, TEV/EBITDA, P/E.
- **Biofuels/RNG:** producers resemble chemicals companies (realized price vs. feedstock cost); transporters resemble midstream (capacity, utilization, fees), with yield metrics and a DDM if structured as MLPs.` },
  { id: 'ind-l027', t: 'ind', q: `Renewables: two solar developers each hold 2,000 MW with similar revenue and EBITDA, yet one trades 30% higher. Why? And how do solar and wind assets compare?`, a: `**Same headline size, different asset quality and economics.**
- **Contracts:** longer remaining PPA tenor (e.g., 20 vs. 10 years), better pricing and escalators.
- **Location:** stronger sun, grid access and power markets.
- **Project financing:** the debt and tax equity attached to each plant change what common equity actually owns.
- **Execution:** lower build cost per MW or faster completion.
## Solar vs. wind
- Onshore wind is larger, riskier and costlier than solar; offshore wind is the riskiest, with frequent delays and overruns.
- Wind's higher output potential supports higher $/MW values, but with a wider spread.` },
  { id: 'ind-l028', t: 'ind', q: `TMT: what are the main verticals, and how do software, telecom, semiconductors and hardware differ for valuation?`, a: `**Standard methods throughout; the differences are capital intensity, cyclicality, regulation and operating metrics.**
- **Verticals:** technology (software, internet, hardware, semiconductors, IT services), media, telecom.
- **Software:** labor-heavy, light capex; subscription metrics (churn, ARPU, LTV/CAC); NOLs often matter in the DCF.
- **Telecom:** capex-heavy, regulated, inelastic demand; holding-company structures make SOTP common.
- **Semis that fabricate** (TSMC, unlike a fabless designer such as Nvidia): heavy capex plus high R&D; more cyclical and theme-driven (AI, crypto); watch book-to-bill and utilization.
- **Hardware:** gross margin and capex efficiency drive relative value.
- **Media:** content amortization matters.` },
  { id: 'ind-l029', t: 'ind', q: `TMT: your Netflix FCF conversion is over 70%, but a colleague says the real figure is about half that. Who's right?`, a: `**The colleague: content spending is the hidden capex.**
- Content amortization sits in cost of revenue, reducing EBITDA, then is added back as non-cash in cash from operations.
- Cash spent on new content shows up as additions to content assets, a large outflow that behaves like capex.
- An EBITDA-based FCF that skips those additions overstates conversion; include all content cash flows (or start from CFO) and conversion drops well below 70%.
- Lesson: for any content company, compare cash content spend with amortization.` },
  { id: 'ind-l030', t: 'ind', q: `TMT: a SaaS company signs a $240, 2-year contract on Jan 1, billed every 6 months with 2 months to collect. Walk through bookings, billings, revenue, AR and deferred revenue for January and February.`, a: `**Bookings = contract value signed; billings = invoices sent; revenue = service delivered.**
## January
- Bookings $240; billings $240 ÷ 4 invoices = $60; revenue $240 ÷ 24 months = $10.
- The Jan 1 invoice adds $60 to AR and $60 to deferred revenue; after $10 is earned, deferred revenue ends January at $50.
## February
- Bookings $0, billings $0 (next invoice July 1), revenue $10.
- AR stays $60 until collected on March 1; deferred revenue ends February at $40.` },
  { id: 'ind-l031', t: 'ind', q: `TMT: estimate customer LTV ($10K a year, 10% annual churn, 5% price rise every 2 years). What does a 4.0x LTV/CAC with a 24-month CAC payback tell you, and how is SaaS valued?`, a: `**LTV ≈ $110K; trust the payback period over the ratio; value on ARR and growth.**
- **LTV:** average life ≈ 1 ÷ 10% = 10 years. Annual value steps $10.0K, $10.5K, ~$11.0K, ~$11.6K, ~$12.2K (two years each), averaging ~$11.05K → LTV ≈ $110K undiscounted (lower once discounted).
- **LTV/CAC vs. payback:** LTV rests on churn, pricing and margin assumptions; payback uses actual contract terms. Under ~12 months is a common target, so 24 months suggests the 4.0x relies on optimistic inputs.
- **Valuation:** screen on revenue and growth; pair ARR with EV; revenue multiples while unprofitable, EBITDA or UFCF later (UFCF captures upfront cash from growing deferred revenue); a longer DCF with a discount rate that falls as the company matures.`, adv: true },
];
