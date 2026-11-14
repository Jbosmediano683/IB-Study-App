// Equations / formula sheet
export const FORMULA_CATS = [
  { id: 'val', name: 'Valuation & DCF' },
  { id: 'ma', name: 'M&A & LBO' },
  { id: 'bank', name: 'Bank Metrics' },
  { id: 'cap', name: 'Capital & Liquidity' },
  { id: 'bval', name: 'Bank Valuation & M&A' },
  { id: 'ins', name: 'Insurance' },
  { id: 'am', name: 'Asset Management' },
  { id: 'pay', name: 'Payments & Consumer Finance' },
  { id: 'mkt', name: 'Rates & Fixed Income' },
];

export const FORMULAS = [
  // ───────────── Valuation & DCF ─────────────
  { id: 'ev', cat: 'val', name: 'Enterprise value (EV)',
    f: `EV = Equity value + Debt + Preferred stock + Noncontrolling interest − Cash & equivalents
Also subtract equity-method investments and other non-operating assets`,
    note: `EV is the value of the core operations to all capital providers; pair it with pre-interest metrics (revenue, EBITDA, EBIT, UFCF). Not meaningful for banks, where deposits and borrowings are operating liabilities, not financing.`,
    ex: `Equity value $800M + debt $300M + preferred $50M + NCI $20M − cash $70M = EV $1,100M.` },

  { id: 'equity-value', cat: 'val', name: 'Equity value (market cap)',
    f: `Equity value = Diluted shares outstanding × Share price`,
    note: `Use diluted shares: treasury stock method for options and warrants, all RSUs, if-converted for in-the-money convertibles. For banks and insurers, equity value is the starting point for every multiple.`,
    ex: `50M diluted shares × $40 = $2.0B.` },

  { id: 'tsm', cat: 'val', name: 'Diluted shares (treasury stock method)',
    f: `Net new shares = ITM options − (ITM options × Strike ÷ Share price)
Diluted shares = Basic shares + Net new shares (+ RSUs, + if-converted shares)`,
    note: `Assumes option exercise proceeds are used to repurchase shares at the current price. Include only in-the-money options; out-of-the-money options are ignored.`,
    ex: `100M basic shares, price $20, 10M options at a $10 strike: $100M proceeds buy back 5M shares, so +5M net → 105M diluted shares.` },

  { id: 'ufcf', cat: 'val', name: 'Unlevered free cash flow (UFCF)',
    f: `UFCF = EBIT × (1 − t) + D&A − Capex − ΔNWC`,
    note: `Cash flow available to all capital providers before interest; discount at WACC to get enterprise value. Some practitioners also deduct stock-based comp as a real cost. Not used for banks (use dividends / excess capital instead).`,
    ex: `EBIT 100, tax 25%, D&A 20, capex 30, ΔNWC 5 → 75 + 20 − 30 − 5 = 60.` },

  { id: 'fcfe', cat: 'val', name: 'Levered free cash flow (FCFE)',
    f: `FCFE = Net income + D&A − Capex − ΔNWC + Net borrowing
Net borrowing = New debt issued − Debt repaid`,
    note: `Cash flow available to equity holders after interest and debt service; discount at the cost of equity to get equity value directly. The bank analog is distributable excess capital in a DDM.`,
    ex: `NI 50 + D&A 20 − capex 30 − ΔNWC 5 − debt repaid 10 = FCFE 25.` },

  { id: 'wacc', cat: 'val', name: 'Weighted average cost of capital (WACC)',
    f: `WACC = (E ÷ V) × Ke + (D ÷ V) × Kd × (1 − t) + (P ÷ V) × Kp
V = E + D + P (market values or target capital structure)`,
    note: `Use market-value (or target) weights. Debt is tax-deductible, so its after-tax cost is used. For banks you don't compute a WACC: discount equity cash flows at the cost of equity.`,
    ex: `E 70% at Ke 10%, D 30% at Kd 6%, tax 25% → 7.00% + 1.35% = 8.35%.` },

  { id: 'capm', cat: 'val', name: 'Cost of equity (CAPM)',
    f: `Ke = Rf + β × (Rm − Rf) = Rf + β × ERP`,
    note: `Rf = 10-year Treasury yield (some use 20-year); ERP roughly 4.5–6% (verify current Kroll/Damodaran estimates); β = levered beta. For a bank, use its own observed beta — no unlevering/relevering, because leverage is part of the business model.`,
    ex: `Rf 4.25%, β 1.1, ERP 5.5% → 4.25% + 6.05% = 10.3%.` },

  { id: 'beta-unlever', cat: 'val', name: 'Unlevered beta',
    f: `βU = βL ÷ [1 + (1 − t) × D ÷ E]`,
    note: `Strips out each comparable's capital structure (Hamada formula; assumes a debt beta of zero). Take the median unlevered beta of the comps, then relever at the target's capital structure.`,
    ex: `βL 1.30, tax 25%, D/E 0.5 → 1.30 ÷ 1.375 = 0.95.` },

  { id: 'beta-relever', cat: 'val', name: 'Relevered beta',
    f: `βL = βU × [1 + (1 − t) × D ÷ E]`,
    note: `Apply the target's (or target capital structure's) D/E. More leverage → higher equity beta → higher cost of equity.`,
    ex: `βU 0.95, tax 25%, D/E 0.25 → 0.95 × 1.1875 = 1.13.` },

  { id: 'tv-ggm', cat: 'val', name: 'Terminal value — perpetuity growth (Gordon growth)',
    f: `TV = FCFn × (1 + g) ÷ (WACC − g)`,
    note: `Value at the end of year n of all cash flows after year n; discount it back n years. g should not exceed long-run nominal GDP growth (~4% in the U.S.: ~2% real + ~2% inflation); 2–3% is the usual choice. In a bank DDM, use dividends and the cost of equity instead.`,
    ex: `FCF 100, g 2%, WACC 9% → 102 ÷ 0.07 = 1,457.` },

  { id: 'tv-exit', cat: 'val', name: 'Terminal value — exit multiple',
    f: `TV = Final-year EBITDA × Exit EV/EBITDA multiple
Banks: TV = Final-year EPS × P/E or TBV × P/TBV (gives equity value)`,
    note: `Market-based and easy to explain, but imports today's trading multiples into an intrinsic method. Cross-check by computing the implied perpetuity growth rate.`,
    ex: `EBITDA 200 × 9.0x = TV 1,800.` },

  { id: 'implied-g', cat: 'val', name: 'Implied perpetuity growth (from an exit-multiple TV)',
    f: `g = (TV × WACC − FCFn) ÷ (TV + FCFn)`,
    note: `Rearranged from TV = FCFn × (1 + g) ÷ (WACC − g). If the implied g is above long-run GDP growth, the exit multiple is aggressive.`,
    ex: `TV 1,800, WACC 9%, FCFn 100 → (162 − 100) ÷ 1,900 = 3.3%.` },

  { id: 'pv', cat: 'val', name: 'Present value & mid-year convention',
    f: `PV = CF ÷ (1 + r)^t
Mid-year convention: PV = CF ÷ (1 + r)^(t − 0.5)`,
    note: `Mid-year convention assumes cash flows arrive evenly through each year, which raises value slightly. With mid-year, discount a perpetuity-growth TV at n − 0.5 and an exit-multiple TV at n.`,
    ex: `100 received in 2 years at 10% → 100 ÷ 1.21 = 82.6.` },

  { id: 'dcf', cat: 'val', name: 'DCF enterprise value → share price',
    f: `EV = Σ UFCFt ÷ (1 + WACC)^t + TV ÷ (1 + WACC)^n
Equity value = EV − Debt − Preferred − NCI + Cash (and other non-operating assets)
Implied share price = Equity value ÷ Diluted shares`,
    note: `Terminal value is often 60–80% of the total, so always show sensitivity tables on WACC and g (or the exit multiple).` },

  { id: 'ggm', cat: 'val', name: 'Gordon growth model (dividends)',
    f: `P0 = D1 ÷ (Ke − g)
D1 = D0 × (1 + g)`,
    note: `Value of a stock whose dividend grows at a constant rate forever. It is the foundation of the justified P/TBV, P/BV and P/E formulas used for banks and insurers.`,
    ex: `D1 $2.00, Ke 10%, g 4% → $2.00 ÷ 0.06 = $33.33.` },

  { id: 'sustainable-growth', cat: 'val', name: 'Sustainable growth rate',
    f: `g = ROE × b
b = Retention ratio = 1 − Payout ratio`,
    note: `Growth a company can fund from retained earnings without changing leverage. For a bank holding its capital ratio constant, equity (and so RWA capacity) grows at ROE × retention.`,
    ex: `ROE 12%, payout 40% → g = 12% × 0.6 = 7.2%.` },

  { id: 'pe', cat: 'val', name: 'Price-to-earnings (P/E)',
    f: `P/E = Share price ÷ EPS = Equity value ÷ Net income`,
    note: `The primary multiple for banks, insurers and asset managers — usually on forward (NTM) consensus EPS. Affected by capital structure, tax rate and one-time items.`,
    ex: `Price $60, forward EPS $5.00 → 12.0x.` },

  { id: 'earnings-yield', cat: 'val', name: 'Earnings yield',
    f: `Earnings yield = EPS ÷ Price = 1 ÷ (P/E)`,
    note: `The acquirer's "cost of stock" in accretion/dilution analysis. 10x → 10%, 12.5x → 8%, 15x → 6.7%, 20x → 5%.` },

  { id: 'multiples-matching', cat: 'val', name: 'Matching multiples to the right value',
    f: `Enterprise value ÷ Revenue, EBITDA, EBIT, UFCF (pre-interest metrics)
Equity value ÷ Net income (P/E), Book value (P/BV), TBV (P/TBV), FCFE (post-interest metrics)`,
    note: `The numerator and denominator must belong to the same capital providers. For banks, interest is an operating cost, so only equity-value multiples apply.` },

  { id: 'cagr', cat: 'val', name: 'Compound annual growth rate (CAGR)',
    f: `CAGR = (Ending value ÷ Beginning value)^(1 ÷ n) − 1`,
    note: `n = number of years. Doubling in 5 years ≈ 14.9% a year; doubling in 7 years ≈ 10.4%.`,
    ex: `Revenue 100 → 150 over 4 years → 1.5^(0.25) − 1 = 10.7%.` },

  { id: 'rule-72', cat: 'val', name: 'Rule of 72',
    f: `Years to double ≈ 72 ÷ Annual rate (in %)
Rate needed to double ≈ 72 ÷ Years`,
    note: `Quick compounding and IRR math. 72 ÷ 8 = 9 years; doubling in 5 years needs ≈ 14.4% (exact: 14.9%).` },

  { id: 'leverage-coverage', cat: 'val', name: 'Leverage & coverage',
    f: `Net debt = Total debt − Cash
Leverage = Total debt (or net debt) ÷ EBITDA
Interest coverage = EBITDA ÷ Interest expense`,
    note: `Credit metrics for corporates, insurance brokers and fintechs. Banks are measured by capital ratios (CET1, leverage ratio) instead.`,
    ex: `Debt 500, cash 100, EBITDA 100 → 5.0x gross, 4.0x net leverage.` },

  { id: 'after-tax-kd', cat: 'val', name: 'After-tax cost of debt',
    f: `After-tax Kd = Pre-tax Kd × (1 − t)`,
    note: `Interest is tax-deductible for corporates. Used in WACC and in the weighted cost of an acquisition.`,
    ex: `8% pre-tax: 6.0% after tax at a 25% rate; 6.32% at 21%.` },

  { id: 'dupont', cat: 'val', name: 'DuPont ROE',
    f: `ROE = Net margin × Asset turnover × Equity multiplier
= (NI ÷ Revenue) × (Revenue ÷ Assets) × (Assets ÷ Equity)
Banks: ROE = ROA × (Assets ÷ Equity)`,
    note: `Shows whether returns come from profitability, efficiency or leverage. Banks run ~10x+ leverage, so small ROA differences become big ROE differences.`,
    ex: `Bank ROA 1.2% × 10x leverage = 12% ROE.` },

  { id: 'nwc', cat: 'val', name: 'Net working capital (NWC)',
    f: `NWC = (Accounts receivable + Inventory + Prepaid expenses) − (Accounts payable + Accrued expenses + Deferred revenue)
ΔNWC > 0 → cash outflow`,
    note: `Excludes cash and debt. Rising NWC (e.g., receivables growing faster than payables) ties up cash and reduces cash from operations. Not a meaningful concept for banks.` },

  // ───────────── M&A & LBO ─────────────
  { id: 'pf-eps', cat: 'ma', name: 'Pro forma EPS',
    f: `PF EPS = (NI acquirer + NI target + After-tax synergies − After-tax interest on new debt − After-tax foregone interest on cash used − After-tax new D&A / amortization) ÷ (Acquirer shares + New shares issued)`,
    note: `The core of a merger model. In bank deals, also add after-tax accretion of purchase-accounting marks and subtract after-tax CDI amortization.` },

  { id: 'accretion', cat: 'ma', name: 'Accretion / (dilution)',
    f: `Accretion/(dilution) % = Pro forma EPS ÷ Acquirer standalone EPS − 1`,
    note: `Positive = accretive. Bank deals usually show year 1 and year 2 with fully phased-in cost saves, presented alongside TBV dilution and earnback.`,
    ex: `Standalone EPS $10.00, pro forma $10.40 → +4.0% accretive.` },

  { id: 'new-shares', cat: 'ma', name: 'New shares issued & exchange ratio',
    f: `New shares = Stock consideration ÷ Acquirer share price
Exchange ratio = Offer price per target share ÷ Acquirer share price`,
    note: `Bank deals typically use a fixed exchange ratio, so the value target holders receive floats with the acquirer's stock until closing.`,
    ex: `$1.2B of stock at $150/share → 8.0M new shares. Offer $45 per target share with the acquirer at $150 → 0.30x exchange ratio.` },

  { id: 'offer-premium', cat: 'ma', name: 'Offer premium',
    f: `Premium = Offer price per share ÷ Unaffected share price − 1`,
    note: `Measure against the unaffected price (before leaks or rumors). US public deals are often ~20–40%; bank mergers of equals can carry little or no premium.`,
    ex: `Offer $36 vs. unaffected $30 → 20% premium.` },

  { id: 'stock-pe-rule', cat: 'ma', name: 'All-stock accretion rule of thumb',
    f: `All-stock deal is EPS accretive (before synergies) if Acquirer P/E > P/E paid for the target`,
    note: `Equivalent: the target's earnings yield (NI ÷ purchase price) exceeds the acquirer's earnings yield (1 ÷ P/E). Ignores synergies, new intangible amortization and fees.`,
    ex: `Acquirer at 15x buys a target at 12x (including premium) with stock → accretive.` },

  { id: 'weighted-cost', cat: 'ma', name: 'Weighted cost of acquisition',
    f: `Cost = %Cash × Foregone interest rate × (1 − t) + %Debt × Kd × (1 − t) + %Stock × (1 ÷ Acquirer P/E)
Accretive if Cost < Target earnings yield (Target NI ÷ Purchase price)`,
    note: `Fast way to judge accretion with mixed consideration. Synergies push toward accretion; amortization of new intangibles pushes toward dilution.`,
    ex: `50% debt at 6% pre-tax (25% tax) + 50% stock at 15x → 0.5 × 4.5% + 0.5 × 6.7% = 5.6%. Buying at 12x (8.3% yield) → accretive.` },

  { id: 'goodwill', cat: 'ma', name: 'Goodwill',
    f: `Goodwill = Purchase price − Fair value of identifiable net assets
FV of net assets = Book value − Existing goodwill + Write-ups (incl. new intangibles) − Write-downs − New DTL`,
    note: `Not amortized under US GAAP; tested for impairment. For banks, goodwill and intangibles (net of DTL) are deducted from TBV and CET1 — which is why paying a premium creates TBV dilution.`,
    ex: `Price 1,000; target book 600 (no existing goodwill); new intangibles 100 with a 25% DTL (25) → FV net assets 675 → goodwill 325.` },

  { id: 'dtl-writeup', cat: 'ma', name: 'DTL on asset write-ups (stock deal)',
    f: `New DTL = Asset write-up × Tax rate`,
    note: `In a stock purchase there's no tax step-up: book basis rises but tax basis doesn't, creating a DTL that unwinds as the write-up is depreciated or amortized. In an asset deal or 338(h)(10) election, the step-up is tax-deductible and no DTL is created.`,
    ex: `$200M write-up × 25% = $50M DTL.` },

  { id: 'breakeven-synergies', cat: 'ma', name: 'Synergies needed to break even',
    f: `Breakeven pre-tax synergies = (Standalone EPS × PF shares − PF NI before synergies) ÷ (1 − t)`,
    note: `The pre-tax synergies required for zero EPS dilution — a quick test of whether the announced cost-save target is credible.`,
    ex: `Standalone EPS $2.00, PF shares 110, PF NI before synergies 210, tax 25% → (220 − 210) ÷ 0.75 = 13.3.` },

  { id: 'moic-irr', cat: 'ma', name: 'MOIC and IRR',
    f: `MOIC = Total equity proceeds ÷ Equity invested
IRR (single entry and exit) = MOIC^(1 ÷ n) − 1`,
    note: `IRR rewards speed (early distributions, dividend recaps); MOIC ignores time. Rules of thumb: 2x in 3 yrs ≈ 26%; 2x in 5 yrs ≈ 15%; 2.5x in 5 yrs ≈ 20%; 3x in 5 yrs ≈ 25%.`,
    ex: `$400 in, $900 out after 5 years → 2.25x MOIC, IRR ≈ 17.6%.` },

  { id: 'lbo-returns', cat: 'ma', name: 'LBO entry and exit equity',
    f: `Entry equity = Entry EV + Fees − New debt raised
Exit equity = Exit EBITDA × Exit multiple − Net debt at exit`,
    note: `Return drivers: EBITDA growth, multiple expansion and debt paydown. Sponsors typically underwrite high-teens to 20%+ IRRs (verify current).`,
    ex: `Buy at 10x $100 EBITDA = $1,000 with $600 debt → $400 equity. Exit at 10x $130 = $1,300 with $400 debt left → $900 equity (2.25x).` },

  { id: 'sources-uses', cat: 'ma', name: 'Sources & uses',
    f: `Uses = Purchase equity + Refinanced debt + Fees & expenses
Sources = New debt tranches + Sponsor equity + Rollover equity + Cash on balance sheet
Sources = Uses`,
    note: `The first table of any LBO or cash-funded acquisition. The sponsor equity check is the plug.` },

  // ───────────── Bank Metrics ─────────────
  { id: 'nii', cat: 'bank', name: 'Net interest income (NII)',
    f: `NII = Interest income − Interest expense`,
    note: `The largest revenue line for most banks (often ~60–80% of revenue at regionals). Grows with earning-asset balances and NIM.`,
    ex: `Interest income $5.5B − interest expense $2.0B = NII $3.5B.` },

  { id: 'nim', cat: 'bank', name: 'Net interest margin (NIM)',
    f: `NIM = Net interest income ÷ Avg. interest-earning assets
Annualize quarterly NII; often shown on a fully taxable-equivalent (FTE) basis`,
    note: `Core spread profitability. Drivers: asset yields and mix, deposit costs and betas, rate level and curve shape, hedges. US banks are typically ~2.5–3.5% (verify current).`,
    ex: `NII $3.5B ÷ $110B average earning assets = 3.18%.` },

  { id: 'yield-iea', cat: 'bank', name: 'Yield on interest-earning assets',
    f: `Yield on earning assets = Interest income ÷ Avg. interest-earning assets`,
    note: `Rises with higher rates, more loans relative to cash and securities, riskier loan types and fixed-rate assets repricing higher as they roll over.`,
    ex: `$5.5B ÷ $110B = 5.0%.` },

  { id: 'cost-of-funds', cat: 'bank', name: 'Cost of funds & cost of deposits',
    f: `Cost of funds = Interest expense ÷ Avg. total funding (deposits + borrowings)
Cost of interest-bearing deposits = Deposit interest expense ÷ Avg. interest-bearing deposits
Total deposit cost = Deposit interest expense ÷ Avg. total deposits`,
    note: `Total deposit cost includes non-interest-bearing deposits at 0%, so it's lower than the interest-bearing cost. A high non-interest-bearing mix is the hallmark of a valuable franchise.`,
    ex: `Deposit interest $1.6B ÷ $80B interest-bearing = 2.0%; ÷ $100B total deposits = 1.6% total deposit cost.` },

  { id: 'spread', cat: 'bank', name: 'Net interest spread',
    f: `Net interest spread = Yield on interest-earning assets − Cost of interest-bearing liabilities`,
    note: `Spread ignores the benefit of free funding (non-interest-bearing deposits and equity); NIM captures it, so NIM is usually higher than spread.`,
    ex: `5.0% yield − 2.4% cost of interest-bearing liabilities = 2.6% spread.` },

  { id: 'fte', cat: 'bank', name: 'Fully taxable-equivalent (FTE) adjustment',
    f: `FTE tax-exempt income = Tax-exempt interest ÷ (1 − t)
FTE adjustment = FTE tax-exempt income − Tax-exempt interest`,
    note: `Grosses up tax-exempt income (e.g., municipal bonds and loans) so NIM and efficiency ratios are comparable across banks.`,
    ex: `$21M of tax-exempt interest at a 21% rate → $26.6M FTE (adjustment +$5.6M).` },

  { id: 'efficiency', cat: 'bank', name: 'Efficiency ratio',
    f: `Efficiency ratio = Non-interest expense ÷ (NII [FTE] + Non-interest income)`,
    note: `Cost per dollar of revenue — lower is better. Roughly: below 55% strong, 55–65% average, above 65% weak (verify against the peer set). Usually adjusted for intangible amortization and merger charges.`,
    ex: `Expenses $2.4B ÷ ($3.5B + $1.0B) = 53.3%.` },

  { id: 'ppnr', cat: 'bank', name: 'Pre-provision net revenue (PPNR)',
    f: `PPNR = NII + Non-interest income − Non-interest expense`,
    note: `Core earnings power before credit costs — the bank's first line of defense against losses and the starting point of stress tests.`,
    ex: `$3.5B + $1.0B − $2.4B = $2.1B.` },

  { id: 'operating-leverage', cat: 'bank', name: 'Operating leverage',
    f: `Operating leverage = Revenue growth % − Expense growth %`,
    note: `Positive operating leverage (revenue growing faster than expenses) means the efficiency ratio is improving — a common management target.`,
    ex: `Revenue +6%, expenses +3% → +3 points of positive operating leverage.` },

  { id: 'roa', cat: 'bank', name: 'Return on assets (ROA)',
    f: `ROA = Net income ÷ Avg. total assets`,
    note: `About 1.0–1.3% is solid for a US commercial bank (verify current). ROA × leverage (assets ÷ equity) = ROE.`,
    ex: `NI $1.4B ÷ $120B average assets = 1.17%.` },

  { id: 'roe', cat: 'bank', name: 'Return on equity (ROE)',
    f: `ROE = Net income to common ÷ Avg. common equity`,
    note: `Compare to the cost of equity (~10–12% for US banks; verify current). Book equity includes goodwill, so acquisitive banks show lower ROE than ROTCE.`,
    ex: `$1.4B ÷ $12.0B = 11.7%.` },

  { id: 'rotce', cat: 'bank', name: 'Return on tangible common equity (ROTCE)',
    f: `ROTCE = (NI to common + After-tax amortization of intangibles) ÷ Avg. tangible common equity`,
    note: `The most important bank profitability metric — it drives P/TBV. Strips out acquisition accounting so serial acquirers and organic growers are comparable. Top performers run ~15–20% (verify current).`,
    ex: `NI to common $1.4B + after-tax amortization $0.1B = $1.5B ÷ average TCE $9.0B = 16.7%.` },

  { id: 'tce', cat: 'bank', name: 'Tangible common equity (TCE)',
    f: `TCE = Common equity − Goodwill − Other intangibles (net of related DTL)
Common equity = Total equity − Preferred stock`,
    note: `The bank's loss-absorbing common equity base — the closest accounting analog to CET1 capital.`,
    ex: `Total equity $13.0B − preferred $1.0B − goodwill $2.5B − intangibles $0.5B = TCE $9.0B.` },

  { id: 'tbvps', cat: 'bank', name: 'Tangible book value per share (TBVPS)',
    f: `TBVPS = Tangible common equity ÷ Common shares outstanding`,
    note: `The denominator of P/TBV and the per-share metric tracked for dilution in bank M&A. Grows with retained earnings and AOCI recovery; falls with AOCI losses, buybacks above TBV and acquisitions at a premium.`,
    ex: `TCE $9.0B ÷ 300M shares = $30.00.` },

  { id: 'tce-ratio', cat: 'bank', name: 'TCE ratio',
    f: `TCE ratio = TCE ÷ Tangible assets
Tangible assets = Total assets − Goodwill − Other intangibles`,
    note: `A simple, non-risk-weighted capital measure that investors watch, especially because it includes AOCI losses. Typically ~6–9% (verify current).`,
    ex: `$9.0B ÷ ($123B − $3B) = 7.5%.` },

  { id: 'ltd', cat: 'bank', name: 'Loan-to-deposit ratio',
    f: `Loan-to-deposit ratio = Total loans ÷ Total deposits`,
    note: `Funding and liquidity gauge: high (above ~90–100%) means reliance on wholesale funding; low (below ~70%) means excess liquidity sitting in cash and securities. Typical ~70–90%.`,
    ex: `Loans $85B ÷ deposits $100B = 85%.` },

  { id: 'deposit-beta', cat: 'bank', name: 'Deposit beta',
    f: `Deposit beta = Δ Cost of deposits ÷ Δ Fed funds rate (cumulative over the cycle)`,
    note: `Share of rate moves passed through to depositors. Low beta = sticky, valuable deposits. Betas matter in both directions: "down betas" determine how fast deposit costs fall when the Fed cuts.`,
    ex: `Fed funds +5.00%, deposit cost 0.20% → 2.20% (+2.00%) → 40% cumulative beta.` },

  { id: 'nco-ratio', cat: 'bank', name: 'Net charge-off (NCO) ratio',
    f: `NCO ratio = Annualized net charge-offs ÷ Avg. total loans
Net charge-offs = Gross charge-offs − Recoveries`,
    note: `Realized credit losses. Varies hugely by loan type — credit cards often ~3–6%, commercial books far lower — so compare against loan mix (verify current levels).`,
    ex: `Quarterly NCOs $150M × 4 ÷ $100B average loans = 0.60%.` },

  { id: 'provision', cat: 'bank', name: 'Provision for credit losses',
    f: `Provision = Net charge-offs + Reserve build (− Reserve release)
Reserve build = Ending ACL − Beginning ACL`,
    note: `The provision is the income-statement expense; charge-offs reduce the allowance. Under CECL, provisions rise when loan growth accelerates or the economic forecast worsens.`,
    ex: `NCOs $500M; ACL rises from $1.5B to $1.7B → provision $700M.` },

  { id: 'acl-rollforward', cat: 'bank', name: 'Allowance (ACL) roll-forward',
    f: `Ending ACL = Beginning ACL + Provision − Net charge-offs (± other, e.g., acquired-loan allowances)`,
    note: `Use it to back into any missing piece — a favorite quick-math check.`,
    ex: `Begin $1.5B + provision $0.7B − NCOs $0.5B = $1.7B.` },

  { id: 'reserve-ratios', cat: 'bank', name: 'Reserve ratio & NPL coverage',
    f: `Reserve (ACL) ratio = ACL ÷ Total loans
NPL coverage = ACL ÷ Non-performing loans`,
    note: `A higher reserve ratio means more cushion for expected lifetime losses under CECL; card-heavy books carry far higher reserve ratios than commercial books.`,
    ex: `ACL $1.7B ÷ loans $100B = 1.70%; ÷ NPLs $0.85B = 200% coverage.` },

  { id: 'npa-ratio', cat: 'bank', name: 'Non-performing assets (NPA) ratio',
    f: `NPA ratio = (Nonaccrual loans + OREO + Other repossessed assets) ÷ (Total loans + OREO)
Some banks use ÷ Total assets`,
    note: `A leading indicator of future charge-offs; also watch criticized/classified loans and delinquencies.`,
    ex: `($600M + $50M) ÷ ($100B + $0.05B) = 0.65%.` },

  { id: 'fee-ratio', cat: 'bank', name: 'Fee income ratio',
    f: `Fee income ratio = Non-interest income ÷ (NII + Non-interest income)`,
    note: `A higher fee mix (wealth, treasury management, cards, capital markets) means less rate sensitivity, less capital intensity and usually a higher valuation multiple.`,
    ex: `$1.0B ÷ $4.5B = 22%.` },

  { id: 'payout', cat: 'bank', name: 'Dividend & total payout ratio',
    f: `Dividend payout = Common dividends ÷ NI to common
Total payout = (Common dividends + Buybacks) ÷ NI to common`,
    note: `Large banks often return ~70–100%+ of earnings when capital is above target; the rest funds RWA growth.`,
    ex: `Dividends $0.5B + buybacks $0.6B on NI $1.4B → 79% total payout.` },

  // ───────────── Capital & Liquidity ─────────────
  { id: 'cet1', cat: 'cap', name: 'CET1 ratio',
    f: `CET1 ratio = CET1 capital ÷ Risk-weighted assets
CET1 capital ≈ Common equity − Goodwill & intangibles (net of DTL) − Certain DTAs & other deductions (± AOCI, per rules)`,
    note: `The binding capital measure for most banks. Minimum 4.5% plus buffers; large US banks typically operate ~10–14% (verify current).`,
    ex: `CET1 $11B ÷ RWA $100B = 11.0%.` },

  { id: 'tier1-total', cat: 'cap', name: 'Tier 1 and total capital ratios',
    f: `Tier 1 ratio = (CET1 + Additional Tier 1) ÷ RWA
Total capital ratio = (Tier 1 + Tier 2) ÷ RWA`,
    note: `AT1 = non-cumulative perpetual preferred (CoCos in Europe); Tier 2 = qualifying subordinated debt plus part of the ACL. Basel minimums before buffers: CET1 4.5%, Tier 1 6%, total 8%.` },

  { id: 'leverage-ratio', cat: 'cap', name: 'Tier 1 leverage ratio',
    f: `Tier 1 leverage ratio = Tier 1 capital ÷ Avg. total consolidated assets
Minimum 4%; 5% to be well capitalized (bank level)`,
    note: `A non-risk-based backstop. It can bind for banks holding lots of low-risk-weight assets (cash, Treasuries).`,
    ex: `Tier 1 $12B ÷ average assets $150B = 8.0%.` },

  { id: 'slr', cat: 'cap', name: 'Supplementary leverage ratio (SLR)',
    f: `SLR = Tier 1 capital ÷ Total leverage exposure (on-balance-sheet + off-balance-sheet)`,
    note: `Applies to Category I–III banks (3% minimum); US G-SIBs face an enhanced SLR. A Nov 2025 final rule (effective Apr 2026) recalibrated the eSLR — holdco buffer = 50% of the G-SIB method 1 surcharge, bank-subsidiary buffer capped at 1% — to ease Treasury-market intermediation (verify current).` },

  { id: 'required-cet1', cat: 'cap', name: 'Required CET1 (large US bank)',
    f: `Required CET1 = 4.5% minimum + Stress capital buffer (≥ 2.5%) + G-SIB surcharge (if applicable)`,
    note: `Management targets often add a cushion on top (e.g., 50–100bp). Smaller banks use the static 2.5% capital conservation buffer instead of an SCB.`,
    ex: `4.5% + SCB 3.0% + G-SIB surcharge 1.5% = 9.0% required; management target ~10%.` },

  { id: 'scb', cat: 'cap', name: 'Stress capital buffer (SCB)',
    f: `SCB = Max(2.5%, Starting CET1 ratio − Minimum projected CET1 ratio + 4 quarters of planned common dividends ÷ RWA)`,
    note: `Set from the Fed's severely adverse stress test for banks with $100B+ of assets. A bigger projected drawdown → higher buffer → less capital available for buybacks. A Sep 2026 final rule averages the decline over the two latest stress tests and makes SCBs effective each Jan 1 (verify current).`,
    ex: `CET1 falls from 12.0% to 9.6% (2.4%) + dividends of 0.6% of RWA → SCB 3.0%.` },

  { id: 'excess-capital', cat: 'cap', name: 'Excess capital',
    f: `Excess CET1 = CET1 capital − Target CET1 ratio × RWA`,
    note: `Capital available for buybacks, special dividends or M&A — the key input to bank DDM / excess-capital valuations.`,
    ex: `CET1 $12.0B − 10.5% × $100B = $1.5B excess.` },

  { id: 'capital-for-growth', cat: 'cap', name: 'Capital needed to fund growth',
    f: `Capital needed = Δ RWA × Target CET1 ratio
Δ RWA = Δ Assets × Risk weight`,
    note: `Organic capital generation (net income − dividends) funds growth first; anything left over is available for buybacks.`,
    ex: `$10B of new commercial loans at 100% risk weight, 11% target → $1.1B of CET1.` },

  { id: 'capital-generation', cat: 'cap', name: 'Organic capital generation',
    f: `Capital generation (bps of RWA) = (NI to common − Common dividends) ÷ RWA × 10,000`,
    note: `Banks often frame capacity as "we generate ~X bps a quarter and growth consumes Y."`,
    ex: `Quarterly NI $400M − dividends $150M = $250M on $100B RWA → 25 bps per quarter.` },

  { id: 'rwa', cat: 'cap', name: 'Risk-weighted assets (RWA)',
    f: `RWA = Σ (Exposure × Risk weight) [+ market risk RWA + operational risk RWA under advanced approaches]`,
    note: `US standardized examples: cash and Treasuries 0%, GNMA MBS 0%, GSE MBS 20%, qualifying residential mortgages 50%, most C&I and consumer loans 100%, HVCRE 150%.`,
    ex: `$20B Treasuries (0%) + $10B GSE MBS (20%) + $70B loans (100%) = $72B RWA.` },

  { id: 'lcr', cat: 'cap', name: 'Liquidity coverage ratio (LCR)',
    f: `LCR = High-quality liquid assets (HQLA) ÷ Total net cash outflows over a 30-day stress ≥ 100%`,
    note: `Applies fully to the largest banks, reduced or not at all for smaller categories. Level 1 HQLA: cash/reserves, Treasuries, GNMA; Level 2A (with haircut): GSE MBS.` },

  { id: 'nsfr', cat: 'cap', name: 'Net stable funding ratio (NSFR)',
    f: `NSFR = Available stable funding ÷ Required stable funding ≥ 100% (1-year horizon)`,
    note: `Longer-horizon funding stability: stable deposits, long-term debt and equity provide funding; loans and illiquid assets require it.` },

  { id: 'pca', cat: 'cap', name: 'Well-capitalized thresholds (PCA)',
    f: `Well capitalized (bank level): CET1 ≥ 6.5%, Tier 1 ≥ 8%, Total capital ≥ 10%, Tier 1 leverage ≥ 5%`,
    note: `Prompt Corrective Action thresholds — dropping below triggers restrictions. Large banks run well above them because of buffers and targets.` },

  // ───────────── Bank Valuation & M&A ─────────────
  { id: 'ptbv-justified', cat: 'bval', name: 'Justified P/TBV',
    f: `P/TBV = (ROTCE − g) ÷ (Ke − g)`,
    note: `Derived from the Gordon growth model. A bank earning exactly its cost of equity should trade at ~1.0x TBV; ROTCE above Ke earns a premium. The logic behind the ROTCE vs. P/TBV regression.`,
    ex: `ROTCE 15%, Ke 10%, g 4% → 11% ÷ 6% = 1.83x.` },

  { id: 'pe-from-ptbv', cat: 'bval', name: 'P/E from P/TBV and ROTCE',
    f: `P/E = (P/TBV) ÷ ROTCE (forward ROTCE, consistent basis)`,
    note: `Because earnings ≈ ROTCE × TBV. A quick consistency check between the two main bank multiples.`,
    ex: `1.8x TBV ÷ 15% ROTCE = 12.0x P/E.` },

  { id: 'core-deposit-premium', cat: 'bval', name: 'Core deposit premium',
    f: `Core deposit premium = (Deal value − Target TBV) ÷ Core deposits
Core deposits = Total deposits − Large time deposits − Brokered deposits`,
    note: `Premium over tangible book per dollar of core deposits — the value placed on the deposit franchise. Definitions vary (e.g., CDs above $100K or $250K), so state yours.`,
    ex: `($2.4B − $1.6B) ÷ $10B core deposits = 8.0%.` },

  { id: 'tbv-dilution', cat: 'bval', name: 'TBV per share dilution',
    f: `TBV dilution % = Pro forma TBVPS at close ÷ Acquirer standalone TBVPS − 1`,
    note: `Driven by goodwill and intangibles created, purchase-accounting marks, merger charges and any day-2 CECL reserve. Investors weigh it against EPS accretion via the earnback period.`,
    ex: `Standalone TBVPS $30.00, pro forma $28.80 → −4.0%.` },

  { id: 'tbv-earnback', cat: 'bval', name: 'TBV earnback period',
    f: `Simple: Earnback (years) = TBVPS dilution at close ÷ Annual EPS accretion per share
Crossover: Years until pro forma TBVPS ≥ standalone TBVPS projection`,
    note: `Investors generally prefer about 3 years or less; much beyond ~5 years draws skepticism (verify current norms). Always say which method you're using.`,
    ex: `Dilution $1.20 per share ÷ accretion $0.40 per share per year = 3.0 years.` },

  { id: 'tbv-stock-rule', cat: 'bval', name: 'All-stock TBV dilution rule',
    f: `All-stock deal is TBVPS dilutive if Deal P/TBV (on target's adjusted TBV) > Acquirer's own P/TBV`,
    note: `Each new share issued brings in less tangible book than the acquirer's existing TBVPS. In an all-cash deal, any price above adjusted TBV is dilutive, since there are no new shares to spread the cost.`,
    ex: `Acquirer at 1.5x TBV pays 2.0x TBV in stock → dilutive.` },

  { id: 'bank-ddm', cat: 'bval', name: 'Bank DDM / excess-capital model',
    f: `Equity value = Σ Distributable capital_t ÷ (1 + Ke)^t + TV ÷ (1 + Ke)^n
Distributable capital_t = Net income_t − Δ RWA_t × Target CET1 ratio (+ initial excess capital)
TV = Final-year NI × P/E, or TBV × P/TBV, or Dividend_n+1 ÷ (Ke − g)`,
    note: `Discount at the cost of equity, not WACC. Key sensitivities: Ke, ROTCE, growth and the target CET1 ratio.` },

  { id: 'cash-eps', cat: 'bval', name: 'Cash (tangible) EPS',
    f: `Cash EPS = (NI to common + After-tax amortization of intangibles) ÷ Diluted shares`,
    note: `Excludes non-cash CDI amortization created in acquisitions; consistent with ROTCE and commonly used in bank accretion analysis.`,
    ex: `NI $1,000M + CDI amortization $80M × 0.75 = $1,060M ÷ 400M shares = $2.65.` },

  { id: 'cdi', cat: 'bval', name: 'Core deposit intangible (CDI)',
    f: `CDI = Core deposits × CDI % (present value of the funding-cost advantage)
After-tax EPS drag = Annual CDI amortization × (1 − t) ÷ Shares`,
    note: `CDI % rises with interest rates — cheap deposits are worth more when market rates are high (verify current deal ranges). Amortized over roughly 7–10 years, often on an accelerated schedule.`,
    ex: `$10B core deposits × 2.5% = $250M CDI; straight-line over 10 years ≈ $25M a year.` },

  // ───────────── Insurance ─────────────
  { id: 'loss-ratio', cat: 'ins', name: 'Loss ratio',
    f: `Loss ratio = (Losses + Loss adjustment expenses) ÷ Net earned premiums`,
    note: `Includes catastrophe losses and prior-year reserve development; analysts also show an accident-year, ex-cat loss ratio to see the underlying trend.`,
    ex: `Losses & LAE $650M ÷ NEP $1,000M = 65%.` },

  { id: 'expense-ratio', cat: 'ins', name: 'Expense ratio',
    f: `Expense ratio = Underwriting expenses (commissions, acquisition costs, G&A) ÷ Net earned premiums
Statutory "trade basis": ÷ Net written premiums`,
    note: `Structure differs by line and distribution model (agents, brokers, direct), so compare within a peer group.`,
    ex: `$280M ÷ $1,000M = 28%.` },

  { id: 'combined-ratio', cat: 'ins', name: 'Combined ratio',
    f: `Combined ratio = Loss ratio + Expense ratio (+ Policyholder dividend ratio)
Below 100% = underwriting profit`,
    note: `The headline P&C profitability metric. A combined ratio above 100% can still be profitable overall if investment income on float covers the underwriting loss (common in long-tail lines).`,
    ex: `65% + 28% = 93% → 7% underwriting margin.` },

  { id: 'uw-income', cat: 'ins', name: 'Underwriting income',
    f: `Underwriting income = Net earned premiums × (1 − Combined ratio)
= NEP − Losses & LAE − Underwriting expenses`,
    ex: `$1,000M × (1 − 0.93) = $70M.` },

  { id: 'operating-ratio', cat: 'ins', name: 'Operating ratio',
    f: `Operating ratio = Combined ratio − Net investment income ratio
Net investment income ratio = Net investment income ÷ Net earned premiums`,
    note: `Below 100% means underwriting plus investing is profitable before taxes and realized gains.`,
    ex: `Combined 102% − investment income 9% of NEP = 93% operating ratio → 7% pretax margin despite an underwriting loss.` },

  { id: 'pc-pretax', cat: 'ins', name: 'P&C pretax operating income',
    f: `Pretax operating income = Underwriting income + Net investment income (+ other income)`,
    ex: `$70M underwriting income + $90M investment income = $160M.` },

  { id: 'earned-premium', cat: 'ins', name: 'Written vs. earned premiums',
    f: `Net earned premiums = Net written premiums − Δ Unearned premium reserve
Retention ratio = Net written premiums ÷ Gross written premiums`,
    note: `Premiums are earned pro rata over the policy term; the unearned portion sits in the UPR liability. Retention shows how much risk is kept vs. ceded to reinsurers.`,
    ex: `NWP $1,100M with UPR up $100M → NEP $1,000M. GWP $1,400M → retention 79%.` },

  { id: 'premium-leverage', cat: 'ins', name: 'Premium leverage (writings ratio)',
    f: `Premium leverage = Net written premiums ÷ Policyholders' surplus`,
    note: `Traditional capital adequacy gauge — more premium per dollar of surplus means more underwriting risk. About 3:1 has long been cited as a ceiling, with most carriers well below (verify norms by line).`,
    ex: `NWP $1.1B ÷ surplus $1.0B = 1.1x.` },

  { id: 'pc-roe', cat: 'ins', name: 'P&C ROE decomposition',
    f: `ROE ≈ [Underwriting margin × (Premiums ÷ Equity) + Investment yield × (Invested assets ÷ Equity)] × (1 − t)
Underwriting margin = 1 − Combined ratio`,
    note: `Shows how both underwriting and float drive returns; long-tail lines carry more invested assets per dollar of premium.`,
    ex: `Margin 5%, premiums/equity 1.0x, yield 4.5%, invested assets/equity 3.0x, tax 21% → (5.0% + 13.5%) × 0.79 = 14.6%.` },

  { id: 'float', cat: 'ins', name: 'Float',
    f: `Float ≈ Loss & LAE reserves + Unearned premium reserve − Premiums receivable − Reinsurance recoverables − Deferred acquisition costs`,
    note: `Money held between collecting premiums and paying claims, invested for the insurer's benefit. With a combined ratio below 100%, the float costs less than nothing.` },

  { id: 'rbc', cat: 'ins', name: 'Risk-based capital (RBC) ratio',
    f: `RBC ratio = Total adjusted capital ÷ Authorized control level RBC`,
    note: `NAIC statutory measure. The company action level (CAL) is 200% of authorized control level (ACL). Watch the basis: US life insurers usually quote TAC ÷ CAL and target ~350–450%+ (≈700–900%+ on the ACL basis above); verify by company.` },

  { id: 'life-spread', cat: 'ins', name: 'Life / annuity spread',
    f: `Spread = Portfolio (earned) yield − Crediting rate
Spread income ≈ Spread × Average invested assets backing the liabilities`,
    note: `The core earnings engine for fixed and fixed-indexed annuity writers. Higher rates widen new-money spreads; alternative-asset-backed insurers seek extra yield through private credit.`,
    ex: `5.4% yield − 3.4% crediting rate = 2.0% × $50B = $1.0B of spread income.` },

  { id: 'pbv-insurer', cat: 'ins', name: 'P/BV (insurers)',
    f: `P/BV = Share price ÷ Book value per share (often ex-AOCI)
Justified P/BV = (ROE − g) ÷ (Ke − g)`,
    note: `Same Gordon-growth logic as banks. Insurers are mainly valued on book value (ex-AOCI, because bond unrealized losses swing reported book) and P/E.`,
    ex: `ROE 14%, Ke 9%, g 4% → 10% ÷ 5% = 2.0x.` },

  // ───────────── Asset Management ─────────────
  { id: 'aum-rollforward', cat: 'am', name: 'AUM roll-forward',
    f: `Ending AUM = Beginning AUM + Net flows (inflows − outflows) + Market appreciation/(depreciation) (± FX, acquisitions/dispositions)`,
    note: `Separates client demand (flows) from things management doesn't control (markets, FX).`,
    ex: `$500B + $10B net flows + $40B market gains = $550B.` },

  { id: 'organic-growth', cat: 'am', name: 'Organic growth rate',
    f: `Organic growth = Net flows ÷ Beginning AUM (annualize quarterly flows)`,
    note: `The single biggest valuation driver for asset managers. Some firms report organic base-fee growth (flows weighted by fee rate).`,
    ex: `$10B ÷ $500B = 2.0%.` },

  { id: 'mgmt-fees', cat: 'am', name: 'Management fee revenue',
    f: `Management fees = Average AUM × Fee rate (bps ÷ 10,000)`,
    note: `Use average, not ending, AUM. Revenue moves roughly with markets, while costs are largely fixed — hence operating leverage.`,
    ex: `$520B average AUM × 45 bps = $2.34B.` },

  { id: 'fee-rate', cat: 'am', name: 'Fee rate (bps)',
    f: `Fee rate (bps) = Management fee revenue ÷ Average AUM × 10,000`,
    note: `Mix-driven: passive equity a few bps, active equity roughly 40–70 bps, alternatives ~1–2% (verify current). A falling fee rate usually signals mix shift toward passive or lower-fee products.`,
    ex: `$2.34B ÷ $520B × 10,000 = 45 bps.` },

  { id: 'am-margin', cat: 'am', name: 'Operating margin & comp ratio',
    f: `Operating margin = Operating income ÷ Revenue (often adjusted, net of distribution costs)
Comp ratio = Compensation & benefits ÷ Revenue`,
    note: `Scaled traditional managers often run ~30–45% adjusted margins (verify current). High fixed costs mean profits move more than revenue when markets swing.` },

  { id: 'fre', cat: 'am', name: 'Fee-related earnings (FRE)',
    f: `FRE = Management fees + Fee-related performance revenues + Transaction & other fees − Fee-related compensation − Other operating expenses
FRE margin = FRE ÷ Fee-related revenues`,
    note: `The stable, recurring earnings of alternative managers — valued at much higher multiples than carried interest.` },

  { id: 'de', cat: 'am', name: 'Distributable earnings (DE)',
    f: `DE = FRE + Realized net performance revenues (carry) + Realized principal investment income − Interest expense − Taxes`,
    note: `The basis for alternative managers' dividends. Sum-of-the-parts: FRE × high multiple + net realized carry × lower multiple + balance-sheet investments.` },

  { id: 'carry', cat: 'am', name: 'Carried interest (simplified)',
    f: `Carry = Carry % × Fund profits (subject to the preferred return/hurdle and GP catch-up)
Typical PE terms: 20% carry, 8% hurdle, full catch-up`,
    note: `With a full catch-up, the GP ends up with 20% of all profits once profits are large enough to complete the catch-up (≥ preferred return ÷ 0.8); below that the GP gets less. Realized on exits and subject to clawback.`,
    ex: `Fund invests $1,000 and returns $1,600 after 5 years (8% compounding pref): LPs get the pref (~$469), the GP catches up ~$117, the last ~$13 splits 80/20 → GP $120 (20% of $600), LPs $480.` },

  { id: 'pct-aum', cat: 'am', name: 'Valuation: % of AUM and multiples',
    f: `EV ÷ AUM (%) = Enterprise value ÷ AUM
Traditional managers: P/E, EV/EBITDA
Alternative managers: P/DE, P/FRE`,
    note: `% of AUM is a rough transaction yardstick that depends heavily on fee rate and margin — always cross-check with earnings multiples.`,
    ex: `$3.0B EV ÷ $150B AUM = 2.0% of AUM.` },

  { id: 'sweep-nii', cat: 'am', name: 'Brokerage / wealth sweep NII',
    f: `Sweep NII ≈ Client cash balances × (Yield earned − Rate paid to clients)`,
    note: `Very rate-sensitive for brokers and wealth managers; "cash sorting" (clients moving cash into higher-yielding products) shrank balances in 2022–23.`,
    ex: `$100B of sweep cash × (4.0% − 0.5%) = $3.5B.` },

  // ───────────── Payments & Consumer Finance ─────────────
  { id: 'take-rate', cat: 'pay', name: 'Take rate',
    f: `Take rate = Net revenue ÷ Total payment volume (TPV)`,
    note: `How well a payments company monetizes volume. Compare on a net basis (revenue less interchange and network pass-through costs) — gross revenue looks inflated for processors that pass through interchange.`,
    ex: `Net revenue $900M ÷ TPV $300B = 0.30% (30 bps).` },

  { id: 'mdr', cat: 'pay', name: 'Merchant discount rate (MDR)',
    f: `MDR = Interchange (to issuer) + Network/scheme fees + Acquirer markup`,
    note: `What merchants pay per card transaction; interchange is the biggest piece. Regulated debit interchange (Durbin; issuers with $10B+ in assets) is capped by Reg II at 21¢ + 0.05% of the transaction (+1¢ fraud-prevention adjustment); that standard is under court challenge (verify current).`,
    ex: `$100 purchase: interchange $1.80 + network $0.13 + acquirer $0.30 = $2.23 MDR (2.23%).` },

  { id: 'risk-adj-margin', cat: 'pay', name: 'Risk-adjusted margin (card issuers)',
    f: `Risk-adjusted margin = (Net interest income + Non-interest income − Net charge-offs) ÷ Average loans`,
    note: `The key card-issuer metric: revenue yield after credit losses. Rewards costs (contra-revenue) reduce it.`,
    ex: `(NII $11B + fees $3B − NCOs $5B) ÷ $100B average loans = 9.0%.` },

  { id: 'excess-spread', cat: 'pay', name: 'Excess spread (ABS)',
    f: `Excess spread = Portfolio yield − Investor coupon − Servicing fee − Charge-offs`,
    note: `The first line of credit enhancement in card and consumer-loan securitizations; if it turns negative, early amortization triggers can kick in.`,
    ex: `18% yield − 5% coupon − 2% servicing − 5% charge-offs = 6% excess spread.` },

  { id: 'rule-40', cat: 'pay', name: 'Rule of 40',
    f: `Revenue growth % + EBITDA (or FCF) margin % ≥ 40%`,
    note: `Shorthand for balancing growth and profitability at fintech and software-like companies.`,
    ex: `25% growth + 18% margin = 43 → passes.` },

  { id: 'ltv-cac', cat: 'pay', name: 'Customer LTV / CAC',
    f: `LTV = Annual contribution margin per customer × Average customer life (≈ 1 ÷ annual churn)
LTV ÷ CAC ≥ ~3x is a common benchmark`,
    note: `Unit-economics test for fintech lenders, neobanks and payments companies; define contribution margin after credit losses for lenders.`,
    ex: `$120 a year × 5 years = $600 LTV ÷ $150 CAC = 4.0x.` },

  // ───────────── Rates & Fixed Income ─────────────
  { id: 'duration', cat: 'mkt', name: 'Price change from a yield change (duration)',
    f: `% Δ Price ≈ −Modified duration × Δ Yield (+ ½ × Convexity × Δ Yield²)`,
    note: `Why rising rates create unrealized losses on bank and insurer bond portfolios (AOCI / HTM). Agency MBS have negative convexity: prepayments rise when rates fall (capping price gains) and slow when rates rise (extending duration as prices fall).`,
    ex: `Duration 6, yields +1.00% → price ≈ −6%.` },

  { id: 'dv01', cat: 'mkt', name: 'DV01',
    f: `DV01 ≈ Modified duration × Market value × 0.0001`,
    note: `Dollar change for a 1bp move in yield — used to size hedges such as pay-fixed swaps against fixed-rate assets.`,
    ex: `$100M position, duration 5 → about $50,000 per bp.` },

  { id: 'bond-price', cat: 'mkt', name: 'Bond price',
    f: `Price = Σ Coupon ÷ (1 + y)^t + Face value ÷ (1 + y)^n`,
    note: `Price and yield move inversely. A bond trades at par when coupon = yield and at a discount when yield > coupon (e.g., low-coupon bonds bought in 2020–21).` },

  { id: 'twos-tens', cat: 'mkt', name: '2s10s curve spread',
    f: `2s10s spread = 10-year Treasury yield − 2-year Treasury yield`,
    note: `A positive (steep) curve generally helps banks that fund short and lend long. The curve was inverted from mid-2022 into 2024 (verify current level).` },

  { id: 'fisher', cat: 'mkt', name: 'Real vs. nominal rates (Fisher)',
    f: `Real rate ≈ Nominal rate − Expected inflation`,
    ex: `10-year yield 4.3% with ~2.3% breakeven inflation → ~2.0% real yield.` },

  { id: 'repricing-gap', cat: 'mkt', name: 'Repricing gap',
    f: `Gap = Rate-sensitive assets − Rate-sensitive liabilities (within a time bucket)
Δ NII ≈ Gap × Δ Rate`,
    note: `A positive gap means the bank is asset-sensitive: NII rises when rates rise and falls when they're cut.`,
    ex: `Gap +$5B × +1.00% ≈ +$50M of annual NII.` },

  { id: 'eve', cat: 'mkt', name: 'EVE vs. NII sensitivity',
    f: `Δ EVE = Δ PV(Assets) − Δ PV(Liabilities) under a rate shock (e.g., ±100/200bp)
NII sensitivity = Δ 12-month NII under the same shocks`,
    note: `Two complementary interest-rate-risk views: value (EVE) vs. earnings (NII). Assumptions about how long core deposits stay drive the results.` },
];
