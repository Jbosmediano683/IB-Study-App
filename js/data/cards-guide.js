// Flashcards written to cover the study guides the user uploaded.
// Original wording — no text is copied from the guides. Topics map to the app's decks.
export default [
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
  // ─── acc ───
  { id: 'acc-g001', t: 'acc', q: `How do you calculate EBIT and EBITDA for a public company from its filings?`, a: `**Start from reported operating income, strip out one-offs to get EBIT, then add D&A from the cash flow statement to get EBITDA.**
1. **EBIT:** take operating income from the income statement.
2. Add back non-recurring charges that reduced it (restructuring, impairments, litigation, deal costs) and remove one-time gains.
3. **EBITDA:** adjusted EBIT + D&A.
- Take D&A from the cash flow statement: on the income statement it is often folded into COGS and SG&A, so a separate line may understate it or not exist.
- Use the footnotes and MD&A to judge what is truly non-recurring, and apply the same adjustments to every company in the peer set.

**FIG angle:** you won't build EBITDA for a bank or insurer (interest and investment income are operating items), but you will for brokers, payments companies and asset managers.` },
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
];
