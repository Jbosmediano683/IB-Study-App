// Core technical flashcards: Accounting, EV, Valuation & DCF, M&A, LBO
export default [
  // ── Accounting ──────────────────────────────────────────────
  { id: 'acc-01', t: 'acc', q: `Walk me through the three financial statements.`, a: `**Three views of one business: performance (income statement), position (balance sheet) and cash (cash flow statement).**
- **Income statement:** revenue less COGS, operating expenses, D&A, interest and taxes over a period → net income.
- **Balance sheet:** a snapshot at a point in time — assets = liabilities + shareholders' equity.
- **Cash flow statement:** starts with net income, adds back non-cash items and adjusts for working capital (CFO), then investing (CFI: capex, acquisitions) and financing (CFF: debt, equity, dividends) → net change in cash.
- **Links:** net income flows to the top of the CFS and into retained earnings; ending cash on the CFS becomes cash on the balance sheet.` },

  { id: 'acc-02', t: 'acc', q: `How do the three statements link together?`, a: `**Net income and cash are the two main bridges.**
- Net income (IS) → first line of the CFS and → retained earnings (BS).
- Non-cash expenses (D&A, SBC, impairments) are added back on the CFS and reduce the related asset (PP&E, intangibles) or increase equity (SBC) on the BS.
- Changes in working capital on the CFS mirror changes in BS operating assets and liabilities.
- Capex (CFI) increases PP&E; debt/equity issuance, repayments and dividends (CFF) change BS debt and equity.
- Beginning cash + net change in cash (CFS) = ending cash on the BS.` },

  { id: 'acc-03', t: 'acc', q: `Depreciation increases by $10. Walk me through the three statements (25% tax rate).`, a: `**Net income falls $7.50, cash rises $2.50, and the balance sheet balances.**
- **IS:** operating income −$10 → taxes −$2.50 → net income −$7.50.
- **CFS:** net income −$7.50, add back depreciation +$10 → cash +$2.50 (the depreciation tax shield).
- **BS:** cash +$2.50, PP&E −$10 → assets −$7.50; retained earnings −$7.50 → liabilities + equity −$7.50. Balanced.` },

  { id: 'acc-04', t: 'acc', q: `If you could use only one financial statement to evaluate a company, which would you pick?`, a: `**For a typical corporate: the cash flow statement** — it shows how much cash the business actually generates and where it goes, cutting through accrual accounting choices.
- Some argue for the balance sheet, since assets drive future earnings — either answer works if you justify it.

**FIG angle:** for a bank, pick the **balance sheet**. Loans, securities, deposits and capital ARE the business — net interest income, credit costs and capital ratios all flow from it, while the cash flow statement says little about a bank.` },

  { id: 'acc-05', t: 'acc', q: `If you could use two statements, which would you pick and why?`, a: `**The income statement and the balance sheet.**
- With beginning and ending balance sheets plus the income statement for the period, you can reconstruct the cash flow statement: net income + non-cash items ± the change in each balance sheet account.` },

  { id: 'acc-06', t: 'acc', q: `A company buys $100 of inventory with cash. Walk me through the statements.`, a: `**No income statement impact until the inventory is sold.**
- **IS:** no change.
- **CFS:** increase in inventory → CFO −$100.
- **BS:** cash −$100, inventory +$100 → total assets unchanged; liabilities + equity unchanged.` },

  { id: 'acc-07', t: 'acc', q: `The company sells that $100 of inventory for $150 in cash. Walk me through the statements (25% tax rate).`, a: `**Net income +$37.50; cash +$137.50.**
- **IS:** revenue +$150, COGS +$100 → pre-tax income +$50 → taxes $12.50 → net income +$37.50.
- **CFS:** net income +$37.50, decrease in inventory +$100 → CFO +$137.50.
- **BS:** cash +$137.50, inventory −$100 → assets +$37.50; retained earnings +$37.50. Balanced.

(Assumes taxes are paid in cash in the period.)` },

  { id: 'acc-08', t: 'acc', q: `A company raises $100 of debt at 10% to buy $100 of PP&E (10-year life, straight-line). Walk through the statements at the end of year 1 (25% tax, no principal repayment).`, a: `**At purchase:** CFF +$100, CFI −$100; BS: PP&E +$100, debt +$100 — no IS impact.

**End of year 1:**
- **IS:** depreciation $10 + interest $10 → pre-tax income −$20 → net income −$15.
- **CFS:** net income −$15, add back depreciation +$10 → CFO −$5. With financing +$100 and capex −$100, net change in cash −$5.
- **BS:** cash −$5, PP&E +$90 (100 − 10) → assets +$85. Debt +$100, retained earnings −$15 → liabilities + equity +$85. Balanced.` },

  { id: 'acc-09', t: 'acc', q: `What is working capital, and why does an increase in it reduce cash flow?`, a: `**Operating working capital = operating current assets − operating current liabilities** (AR + inventory + prepaids − AP − accrued expenses − deferred revenue). It excludes cash and debt.
- An increase means cash is tied up in operations — e.g., AR grows because sales haven't been collected, or inventory builds ahead of sales → lower CFO.
- A decrease (stretching payables, collecting cash upfront) releases cash.

**FIG angle:** working capital isn't a meaningful concept for banks — loans and deposits are the core business, not working capital.` },

  { id: 'acc-10', t: 'acc', q: `A company writes down $100 of inventory. Walk me through the statements (25% tax rate).`, a: `**Net income −$75; cash +$25 from the tax savings.**
- **IS:** write-down (typically in COGS) $100 → pre-tax income −$100 → net income −$75.
- **CFS:** net income −$75, add back the non-cash write-down +$100 → CFO +$25.
- **BS:** cash +$25, inventory −$100 → assets −$75; retained earnings −$75. Balanced.` },

  { id: 'acc-11', t: 'acc', q: `Goodwill is impaired by $100. Walk me through the statements.`, a: `**Standard answer (assume tax-deductible, 25% rate):**
- **IS:** impairment $100 → pre-tax income −$100 → net income −$75.
- **CFS:** net income −$75, add back the non-cash impairment +$100 → cash +$25.
- **BS:** goodwill −$100, cash +$25 → assets −$75; retained earnings −$75. Balanced.

**Nuance:** goodwill from a stock acquisition usually isn't tax-deductible, so there's no tax benefit — net income −$100, cash unchanged, goodwill −$100, retained earnings −$100.

**FIG angle:** goodwill is already excluded from tangible book value and CET1, so an impairment hits GAAP earnings and book value but leaves TBV and regulatory capital essentially unchanged.` },

  { id: 'acc-12', t: 'acc', q: `What are deferred tax liabilities (DTLs) and deferred tax assets (DTAs)? Give examples.`, a: `**They come from timing differences between book (GAAP) and tax accounting.**
- **DTL:** book taxes exceed cash taxes today, so more tax is owed later. Examples: accelerated tax depreciation vs. straight-line book depreciation; asset write-ups in a stock acquisition (no tax step-up).
- **DTA:** taxes paid now, or deductions available, that will reduce future taxes. Examples: net operating loss (NOL) carryforwards; expenses accrued for books but deductible later for tax.

**FIG angle:** banks carry sizable DTAs from their allowance for credit losses — loan losses are generally tax-deductible only when charged off. DTAs from NOL and tax-credit carryforwards are deducted from CET1, and temporary-difference DTAs are deducted above threshold limits.` },

  { id: 'acc-13', t: 'acc', q: `How does $10 of stock-based compensation flow through the statements (25% tax rate)?`, a: `**A non-cash expense with a real economic cost — dilution.**
- **IS:** compensation expense +$10 → net income −$7.50.
- **CFS:** net income −$7.50, add back SBC +$10 → cash +$2.50.
- **BS:** cash +$2.50; equity: common stock/APIC +$10, retained earnings −$7.50 → equity +$2.50. Balanced.
- In valuation, many practitioners treat SBC as a real expense (no add-back in FCF) or capture it through the diluted share count.

(Simplified: assumes the tax benefit is realized as the expense is recognized.)` },

  { id: 'acc-14', t: 'acc', q: `What's the difference between cash and accrual accounting?`, a: `**Accrual accounting records revenue when earned and expenses when incurred (the matching principle), regardless of when cash moves; cash accounting records transactions only when cash changes hands.**
- Public companies use accrual accounting (GAAP/IFRS) — which is why the cash flow statement exists to reconcile net income to cash.
- Timing gaps show up as accounts receivable (earned, not collected), deferred revenue (collected, not earned) and accrued expenses (incurred, not paid).` },

  { id: 'acc-15', t: 'acc', q: `A company collects $100 upfront for a one-year subscription. Walk through the statements when the cash is received and when the revenue is earned (25% tax rate).`, a: `**When cash is received:**
- **IS:** no change.
- **CFS:** increase in deferred revenue → CFO +$100.
- **BS:** cash +$100, deferred revenue (a liability) +$100. Balanced.

**When the service is delivered:**
- **IS:** revenue +$100 → net income +$75 (no associated costs assumed).
- **CFS:** net income +$75, decrease in deferred revenue −$100 → CFO −$25 (the tax paid).
- **BS:** cash −$25; deferred revenue −$100 and retained earnings +$75 → liabilities + equity −$25. Balanced.
- Combined: cash +$75, equal to the after-tax profit.` },

  { id: 'acc-16', t: 'acc', q: `What are the main ways to account for an investment in another company?`, a: `**It depends on ownership and influence:**
- **Under ~20% (no significant influence):** equity securities generally at fair value, with changes through net income (ASU 2016-01 eliminated the available-for-sale category for equity securities).
- **~20–50% (significant influence):** equity method — carry the investment at cost, add your share of the investee's net income (also shown on your IS), subtract dividends received.
- **Over 50% (control):** consolidate 100% of the subsidiary's financials and show the portion you don't own as noncontrolling interest.

**FIG angle:** debt securities have their own buckets — trading (fair value through net income), available-for-sale (fair value through OCI) and held-to-maturity (amortized cost) — critical for bank capital and tangible book value.` },

  { id: 'acc-17', t: 'acc', q: `A company issues $100 of new common equity. Walk me through the statements.`, a: `**Cash and equity both rise $100; no income statement impact.**
- **IS:** no change.
- **CFS:** CFF +$100.
- **BS:** cash +$100; common stock/APIC +$100. Balanced.

**FIG angle:** for a bank, new common equity adds directly to CET1 capital — banks issue equity to rebuild capital ratios or to help fund acquisitions.` },

  { id: 'acc-18', t: 'acc', q: `A company pays a $10 dividend. Walk me through the statements.`, a: `**Cash and retained earnings fall $10; no income statement impact.**
- **IS:** no change — dividends are a distribution of profits, not an expense.
- **CFS:** CFF −$10.
- **BS:** cash −$10; retained earnings −$10. Balanced.

**FIG angle:** dividends and buybacks reduce a bank's CET1 capital, so capital return is sized to keep ratios above regulatory minimums plus buffers (e.g., the stress capital buffer) and management's targets.` },

  { id: 'acc-19', t: 'acc', adv: true, q: `How do operating and finance leases show up in the financial statements under ASC 842?`, a: `**Both go on the balance sheet as a right-of-use (ROU) asset and a lease liability; the difference is income statement and cash flow presentation.**
- **Finance lease:** amortization of the ROU asset + interest on the liability (front-loaded expense). CFS: principal in CFF, interest in CFO.
- **Operating lease:** a single straight-line lease expense within operating expenses. CFS: payments in CFO.
- **Valuation:** finance lease liabilities are debt-like (add to EV). For operating leases be consistent — if you add them to EV, pair with EBITDAR rather than EBITDA.` },

  { id: 'acc-20', t: 'acc', q: `What is EBITDA, why is it used, and what are its limitations?`, a: `**Earnings before interest, taxes, depreciation and amortization — a rough proxy for operating cash flow.**
- **Why:** capital-structure neutral (pre-interest) and excludes non-cash D&A and differing tax rates → easy to compare across companies; base for EV/EBITDA and leverage (Debt/EBITDA).
- **Limitations:** ignores capex, working capital, taxes and SBC; often "adjusted" aggressively; not a GAAP measure.

**FIG angle:** EBITDA is meaningless for banks and insurers — interest and investment income are core operating items. Use net income, PPNR, P/E and P/TBV instead. Capital-light FIG businesses (insurance brokers, payments, fintech) do use EBITDA.` },

  { id: 'acc-21', t: 'acc', q: `A company sells $20 of product on credit (ignore COGS; 25% tax rate). Walk me through the statements.`, a: `**Net income +$15, but cash −$5 until the customer pays.**
- **IS:** revenue +$20 → net income +$15.
- **CFS:** net income +$15, increase in accounts receivable −$20 → CFO −$5 (taxes paid, no cash collected yet).
- **BS:** AR +$20, cash −$5 → assets +$15; retained earnings +$15. Balanced.
- When the customer pays: cash +$20, AR −$20 — no income statement impact.` },

  { id: 'acc-22', t: 'acc', q: `What's the difference between a capital expenditure and an operating expense?`, a: `**Capex buys a long-lived asset: it's capitalized on the balance sheet and expensed over time through depreciation. An operating expense hits the income statement in full in the period incurred.**
- Capex appears in CFI; operating expenses reduce net income and CFO.
- Test: does the benefit extend beyond a year? (A new machine vs. routine repairs.)
- Capitalization choices (e.g., software development costs) affect EBITDA and margins — worth normalizing in comps.` },

  { id: 'acc-23', t: 'acc', q: `Why does cash flow from operations differ from net income?`, a: `**CFO = net income + non-cash items ± changes in working capital.**
- Non-cash adjustments: D&A, SBC, impairments, deferred taxes; gains/losses on asset sales are removed (the proceeds go in CFI).
- Working capital: AR, inventory, payables, deferred revenue, accruals.
- A persistent gap (CFO well below net income) can flag aggressive revenue recognition or working-capital strain.

**FIG angle:** for banks, the provision for credit losses is a large non-cash expense — provisions reduce net income, while actual charge-offs are absorbed by the allowance.` },

  { id: 'acc-24', t: 'acc', q: `LIFO vs. FIFO when prices are rising — what's the impact?`, a: `**LIFO (last-in, first-out) expenses the newest, most expensive inventory first:**
- Higher COGS → lower pre-tax income → lower taxes → lower net income but **higher cash flow** (tax savings).
- Lower ending inventory on the balance sheet (older, cheaper costs remain).
- **FIFO** is the opposite: lower COGS, higher net income and inventory, higher taxes.
- US GAAP permits LIFO; IFRS does not.` },

  { id: 'acc-25', t: 'acc', q: `A company sells a building with a $60 book value for $100 in cash (25% tax rate). Walk me through the statements.`, a: `**Net income +$30; cash +$90.**
- **IS:** gain on sale +$40 → taxes $10 → net income +$30.
- **CFS:** net income +$30, subtract the gain −$40 (the full proceeds are shown in CFI) → CFO −$10; CFI +$100 → net change in cash +$90.
- **BS:** cash +$90, PP&E −$60 → assets +$30; retained earnings +$30. Balanced.` },

  // ── EV & Equity Value ───────────────────────────────────────
  { id: 'ev-01', t: 'ev', q: `What's the difference between enterprise value and equity value?`, a: `**Equity value is what the business is worth to common shareholders; enterprise value is what the core operations are worth to all capital providers.**
- **Equity value** = diluted shares × share price.
- **Enterprise value** = equity value + debt + preferred stock + noncontrolling interest − cash (and other non-operating assets).
- EV is capital-structure neutral — two identical businesses with different leverage have the same EV but different equity values.

**FIG angle:** for banks, deposits and borrowings are operating "raw material," so EV isn't meaningful — banks are valued on equity value (P/E, P/TBV).` },

  { id: 'ev-02', t: 'ev', q: `Why do you subtract cash when calculating enterprise value?`, a: `**Cash is a non-operating asset, and EV is meant to capture the value of the core business.**
- An acquirer effectively "gets the cash back" — it can use it to pay down debt or offset the purchase price.
- Consistency: interest income on cash isn't in EBITDA or EBIT, so the cash shouldn't be in EV.
- Strictly, it's excess cash; in practice most models subtract all cash and equivalents.` },

  { id: 'ev-03', t: 'ev', q: `Why do you add noncontrolling interest and subtract equity-method investments in the EV bridge?`, a: `**Consistency between EV and the metric it's paired with.**
- **Noncontrolling interest:** if the parent owns more than 50% of a subsidiary, it consolidates 100% of that sub's revenue and EBITDA. EV must therefore include 100% of the sub's value → add the minority holders' share.
- **Equity-method investments (20–50% stakes):** only your share of their net income shows up, below EBITDA → their value isn't reflected in EBITDA, so subtract it from EV.` },

  { id: 'ev-04', t: 'ev', q: `Can enterprise value be negative? Can equity value?`, a: `**EV can be negative; equity value (market cap) can't.**
- Negative EV: cash exceeds equity value + debt — e.g., a cash-rich company the market expects to burn its cash, or one with little perceived operating value.
- Market capitalization is never below zero, though **book** equity can be negative (e.g., after large buybacks or accumulated losses).` },

  { id: 'ev-05', t: 'ev', q: `A company raises $100 of debt and holds it as cash. How do equity value and EV change?`, a: `**Neither changes initially.**
- Equity value: no change — cash +$100 is offset by debt +$100, so the shareholders' claim is the same.
- EV: +$100 debt − $100 cash = no change.
- If the debt funds a dividend instead: equity value falls ~$100, EV unchanged (more debt, less equity).
- If it funds an acquisition: EV rises to reflect the new operating assets.` },

  { id: 'ev-06', t: 'ev', q: `How do you calculate diluted shares outstanding using the treasury stock method?`, a: `**Assume in-the-money options and warrants are exercised, and the proceeds are used to buy back stock at the current price.**
- Net new shares = ITM options − (ITM options × strike ÷ share price).
- Example: 100 basic shares, price $20, 10 options at a $10 strike → proceeds $100 buy back 5 shares → +5 net → **105 diluted shares**.
- RSUs: add them all (no strike). Out-of-the-money options: ignore.
- Convertibles: if-converted method — if in the money, add the conversion shares and remove the bond from debt in EV.
- In M&A, use the offer price rather than the current price.` },

  { id: 'ev-07', t: 'ev', q: `How do you match valuation multiples to enterprise value vs. equity value?`, a: `**Match the numerator to the capital providers the denominator belongs to.**
- **EV** ↔ pre-interest, all-capital metrics: revenue, EBITDA, EBIT, unlevered FCF.
- **Equity value** ↔ post-interest, equity-only metrics: net income/EPS (P/E), levered FCF, book value (P/B, P/TBV).
- A mismatch to avoid: EV ÷ net income — net income is after interest paid to lenders, but EV includes the debt.

**FIG angle:** bank multiples are all equity-based (P/E, P/TBV, P/BV, dividend yield) because interest is an operating cost.` },

  { id: 'ev-08', t: 'ev', q: `Two companies trade at the same EV/EBITDA but very different P/E multiples. Why? Is P/E affected by capital structure?`, a: `**P/E reflects everything between EBITDA and net income — EV/EBITDA doesn't.**
- **Capital structure:** leverage changes both interest expense (net income) and equity value, so P/E moves while EV/EBITDA is largely capital-structure neutral.
- **D&A intensity:** a capital-heavy business has more D&A and lower net income.
- **Tax rates**, **non-operating income/expense** and **one-time items** below EBITDA.

**FIG angle:** for banks, leverage is part of the operating model, so equity multiples (P/E, P/TBV) are the standard — and on a consistent basis P/E ≈ (P/TBV) ÷ ROTCE.` },

  { id: 'ev-09', t: 'ev', q: `Besides debt and cash, which items bridge equity value to enterprise value?`, a: `**Add other claims on the business:**
- Preferred stock, noncontrolling interest, finance lease liabilities (operating leases too if you use EBITDAR), unfunded pension obligations (often tax-effected), convertible debt that's out of the money.

**Subtract non-operating assets:**
- Cash and equivalents, short-term investments, equity-method investments, other non-core assets (e.g., assets held for sale); some also subtract the value of NOLs.` },

  { id: 'ev-10', t: 'ev', q: `If a company's share price rises 10%, what happens to its enterprise value?`, a: `**EV rises by the same dollar amount as equity value — so by less than 10% if net debt is positive.**
- Example: equity value $1,000, net debt $500 → EV $1,500. Price +10% → equity value $1,100 → EV $1,600, up ~6.7%.
- With net cash, EV rises by more than 10% in percentage terms.` },

  { id: 'ev-11', t: 'ev', q: `What's the difference between basic and diluted shares, and which should you use in valuation?`, a: `**Use diluted shares.**
- **Basic:** shares actually outstanding today.
- **Diluted:** basic + potential shares from in-the-money options, warrants, RSUs/PSUs and convertibles (treasury stock and if-converted methods).
- Using basic shares overstates per-share value. Take the latest basic count from the 10-Q/10-K cover page and dilutive securities from the equity footnotes.` },

  // ── Valuation & DCF ─────────────────────────────────────────
  { id: 'val-01', t: 'val', q: `What are the main valuation methodologies?`, a: `**Intrinsic and relative approaches, usually shown together on a "football field."**
- **Intrinsic:** DCF (for banks, a dividend discount / excess capital model).
- **Relative:** trading comparables (public peers' multiples) and precedent transactions (multiples paid in past M&A).
- **Other reference points:** LBO analysis (what a sponsor could pay), sum-of-the-parts, 52-week trading range, analyst price targets, liquidation value.

**FIG angle:** for banks, lead with P/E and P/TBV comps (vs. ROTCE), precedent P/TBV and core deposit premiums, and a DDM.` },

  { id: 'val-02', t: 'val', q: `Rank the valuation methodologies from typically highest to lowest value.`, a: `**Usually precedents > DCF (most variable) > trading comps > LBO — but it depends on assumptions and market conditions.**
- **Precedent transactions** are typically highest — they include a control premium and often synergies.
- **DCF** can land anywhere; it's very sensitive to WACC, growth and terminal value.
- **Trading comps** reflect minority, non-control stakes.
- **LBO** often sets a floor — a sponsor's return hurdle caps what it can pay.` },

  { id: 'val-03', t: 'val', q: `Walk me through a DCF.`, a: `**A DCF values a business as the present value of its future cash flows.**
1. Project unlevered free cash flow for 5–10 years: EBIT × (1 − t) + D&A − capex − Δ net working capital.
2. Calculate terminal value: perpetuity growth (next year's FCF ÷ (WACC − g)) or exit multiple (e.g., EV/EBITDA × final-year EBITDA).
3. Discount the cash flows and terminal value to today at WACC.
4. Sum = enterprise value. Subtract net debt and other bridge items → equity value; ÷ diluted shares → implied share price.

**FIG angle:** for banks, use a DDM — project the dividends a bank can pay (earnings less capital retained to hold a target CET1 ratio), discount at the cost of equity → equity value directly.` },

  { id: 'val-04', t: 'val', q: `How do you calculate WACC?`, a: `**WACC = E/(D + E) × Ke + D/(D + E) × Kd × (1 − t)** (add a preferred term if relevant).
- **Weights:** market values, ideally a target capital structure (often based on comps).
- **Ke:** CAPM = Rf + β × ERP (plus a size or company-specific premium if warranted).
- **Kd:** current yield to maturity on the company's debt, or the yield implied by its credit rating; tax-effected because interest is deductible.

**FIG angle:** banks aren't valued with WACC — discount equity cash flows (dividends) at the cost of equity.` },

  { id: 'val-05', t: 'val', q: `How do you calculate the cost of equity?`, a: `**CAPM: Ke = Rf + β × (Rm − Rf).**
- **Rf:** yield on the 10-year (sometimes 20-year) Treasury, matching long-lived cash flows.
- **β:** the stock's sensitivity to market moves — typically from comps' betas, unlevered and re-levered at the target capital structure.
- **Equity risk premium (Rm − Rf):** expected market return over the risk-free rate — from historical excess returns, implied-ERP estimates or a provider's recommended figure; typically mid-single digits.
- Add a size or country premium where appropriate.

**FIG angle:** for banks, use the observed levered beta (or a peer median) directly — leverage is part of the business, so you don't unlever and relever.` },

  { id: 'val-06', t: 'val', q: `How do you unlever and relever beta, and why?`, a: `**Comps' observed betas reflect their own capital structures; unlever them to isolate business risk, then relever at your target's structure.**
- **Unlever:** βu = βL ÷ [1 + (1 − t) × D/E]
- **Relever:** βL = βu × [1 + (1 − t) × D/E]
- Take the median unlevered beta of the comps and relever it using the target's (or a target) D/E.
- This standard (Hamada) formula assumes debt has a beta of zero.

**FIG angle:** not done for banks — deposits and borrowings are operating liabilities, so you use levered betas as-is.` },

  { id: 'val-07', t: 'val', q: `Why use the 10-year Treasury yield as the risk-free rate?`, a: `**It best matches the long duration of a going concern's cash flows while staying liquid and widely quoted.**
- Short-term bill yields would understate the long-horizon risk-free return; some practitioners use 20- or 30-year yields for even longer-duration cash flows.
- Stay consistent: the equity risk premium you use should be measured against the same risk-free benchmark.` },

  { id: 'val-08', t: 'val', q: `Perpetuity growth vs. exit multiple for terminal value — pros and cons?`, a: `**Perpetuity (Gordon) growth:** TV = FCF(n) × (1 + g) ÷ (WACC − g)
- Pro: intrinsic — ties value to cash flow fundamentals.
- Con: very sensitive to g and WACC; g should not exceed long-run economic growth (2–3% is typical).

**Exit multiple:** TV = final-year EBITDA × EV/EBITDA multiple
- Pro: market-based, easy to explain, mirrors how buyers think about exits.
- Con: imports relative valuation (and today's market mood) into an "intrinsic" method.

**Best practice:** use one and cross-check with the other — the implied exit multiple from the growth method, and the implied growth rate from the multiple method.

**FIG angle:** bank DDMs usually use an exit P/E or P/TBV multiple, or a growth-based terminal value on terminal dividends.` },

  { id: 'val-09', t: 'val', adv: true, q: `How do you back out the implied perpetuity growth rate from an exit-multiple terminal value?`, a: `**Rearrange the Gordon growth formula:** TV = FCF(n) × (1 + g) ÷ (WACC − g) → **g = (TV × WACC − FCF(n)) ÷ (TV + FCF(n))**.
- Example: TV $1,000, final-year FCF $50, WACC 10% → g = (100 − 50) ÷ 1,050 ≈ 4.8%.
- An implied g above long-run economic growth suggests the exit multiple is too aggressive.
- The reverse check: implied EV/EBITDA = perpetuity-growth TV ÷ final-year EBITDA.

(Assumes end-of-year discounting.)` },

  { id: 'val-10', t: 'val', adv: true, q: `What is the mid-year convention and how does it affect a DCF?`, a: `**It assumes cash flows arrive evenly through each year — on average at mid-year — rather than all at year-end.**
- Discount periods become 0.5, 1.5, 2.5… instead of 1, 2, 3… → a slightly **higher** valuation.
- Terminal value: with the perpetuity growth method, discount TV using the same mid-year period as the final year's cash flow (n − 0.5); with the exit multiple method, discount TV at the full n, since the multiple reflects a year-end value.` },

  { id: 'val-11', t: 'val', q: `What happens to a DCF valuation if WACC increases? If the terminal growth rate increases?`, a: `**WACC ↑ → value ↓; terminal growth ↑ → value ↑.**
- Higher WACC discounts future cash flows — and especially the terminal value — more heavily.
- Higher g raises the terminal value, and the effect accelerates as g approaches WACC.
- Terminal value is often 60–80%+ of total DCF value, which is why sensitivity tables (WACC × g, WACC × exit multiple) are standard.` },

  { id: 'val-12', t: 'val', q: `Which is higher, the cost of equity or the cost of debt? Why?`, a: `**The cost of equity.**
- Equity is the residual claim — paid after lenders, with no contractual return — so investors demand more.
- Debt is senior, has fixed payments and often collateral.
- Interest is tax-deductible, which lowers the after-tax cost of debt further.` },

  { id: 'val-13', t: 'val', q: `How does adding debt affect WACC? Is more debt always better?`, a: `**WACC initially falls (debt is cheaper and tax-deductible), but beyond an optimal point it rises.**
- More debt → higher default risk → a higher cost of debt AND a higher cost of equity (higher levered beta).
- WACC traces a U-shape against leverage; the optimal capital structure minimizes it.

**FIG angle:** for banks, leverage is capped by regulatory capital requirements rather than just this trade-off.` },

  { id: 'val-14', t: 'val', q: `How do you select comparable companies?`, a: `**Screen for businesses investors would treat as substitutes.**
- Industry and business model, size (market cap, revenue; total assets for banks), geography, growth and profitability, risk profile.
- Spread LTM and NTM multiples; focus on the median and interquartile range; explain any outliers you exclude.

**FIG angle:** be granular — e.g., regional banks of similar asset size, loan mix, deposit franchise and ROTCE; P&C vs. life insurers; traditional vs. alternative asset managers. FIG sub-sectors trade on very different metrics.` },

  { id: 'val-15', t: 'val', q: `How do precedent transactions differ from trading comps?`, a: `**Precedents show what acquirers actually paid for whole companies; comps show where minority stakes trade today.**
- Precedents include a **control premium** and often expected synergies → typically higher multiples.
- Backward-looking: they reflect the market conditions, rates and strategic context at the time of each deal.
- Fewer and less comparable data points; deal terms (cash vs. stock, distress) matter.

**FIG angle:** bank precedents are quoted on P/TBV, P/E (with and without cost saves), core deposit premium and market premium.` },

  { id: 'val-16', t: 'val', q: `Why do bankers often prefer forward (NTM) multiples to LTM multiples?`, a: `**Markets price companies on expected future earnings.**
- Forward multiples strip out one-time items in historical results and better reflect growth or recovery.
- More comparable across companies at different stages of growth.
- LTM is useful when forecasts are unreliable, and for precedent transactions (based on figures available at announcement).

**FIG angle:** bank P/E is typically quoted on consensus forward EPS; P/TBV on the latest reported tangible book value.` },

  { id: 'val-17', t: 'val', q: `What's a typical control premium in a public M&A deal?`, a: `**Roughly 20–40% over the unaffected share price for US public targets — but it varies widely.**
- Depends on synergies, competition among bidders, the target's recent trading and its strategic value.
- Measure it against the "unaffected" price, before deal rumors moved the stock.

**FIG angle:** bank mergers of equals often carry little or no premium; failed or distressed bank deals can price at a discount.` },

  { id: 'val-18', t: 'val', q: `How would you value a company with negative earnings?`, a: `**Move up the income statement or to operating metrics.**
- EV/revenue, EV/gross profit, or a forward EV/EBITDA several years out (discounted back).
- Operating metrics — users, payment volume, subscribers, AUM — paired with unit economics (LTV/CAC).
- A DCF with a longer projection period until margins reach steady state, plus scenario weighting.

**FIG angle:** for fintechs, EV/revenue and EV/gross profit are common, and investors often reference the "Rule of 40" (growth % + margin %).` },

  { id: 'val-19', t: 'val', q: `What is a sum-of-the-parts valuation, and when would you use it?`, a: `**Value each segment separately with the method and multiple that fit it, then add them up (less holding-company costs and net debt).**
- Use it when segments have very different growth, margins or risk — a single blended multiple would mislead.
- Can reveal a "conglomerate discount" and support breakups or spin-offs.

**FIG angle:** common for diversified financials — e.g., a bank with a large wealth or asset management arm, an insurer that owns an asset manager, or an exchange with data and index businesses.` },

  { id: 'val-20', t: 'val', q: `Unlevered vs. levered free cash flow — what's the difference and when do you use each?`, a: `**Unlevered FCF (to all capital providers):** EBIT × (1 − t) + D&A − capex − ΔNWC → discount at **WACC** → enterprise value.

**Levered FCF (to equity holders):** net income + D&A − capex − ΔNWC − net debt repayments → discount at the **cost of equity** → equity value.
- Unlevered is standard because it's capital-structure neutral; levered is used when leverage is integral or changing (e.g., LBOs).

**FIG angle:** bank valuation uses an equity cash flow (dividend) model because leverage is part of operations — effectively levered cash flow after retaining the capital needed to meet regulatory ratios.` },

  { id: 'val-21', t: 'val', q: `What are the most important assumptions in a DCF, and how do you sanity-check them?`, a: `**Terminal value assumptions (g or exit multiple) and WACC matter most, followed by revenue growth and margins.**
- Implied exit multiple vs. where comps trade today; implied perpetuity growth vs. long-run economic growth.
- Terminal value as a % of EV — 60–80% is common; much higher means the projection period is doing little work.
- Margins vs. peers; reinvestment (capex, working capital) consistent with the growth assumed.
- Always show sensitivity tables (WACC × g, WACC × exit multiple).` },

  // ── M&A ─────────────────────────────────────────────────────
  { id: 'ma-01', t: 'ma', q: `Walk me through a basic merger model.`, a: `**Goal: determine whether the deal increases (accretion) or decreases (dilution) the buyer's EPS.**
1. Set deal terms: purchase price and premium, consideration mix (cash/stock/debt), financing costs, fees.
2. Project the acquirer's and target's net income.
3. Pro forma net income = acquirer NI + target NI + after-tax synergies − after-tax interest on new debt − after-tax foregone interest on cash used − after-tax amortization of new intangibles.
4. Pro forma shares = acquirer shares + new shares issued.
5. Compare pro forma EPS with standalone EPS → accretion/dilution; also compute breakeven synergies.

**FIG angle:** bank deals add TBV per share dilution and earnback, pro forma capital ratios (CET1), IRR and purchase-accounting marks on loans and deposits.` },

  { id: 'ma-02', t: 'ma', q: `What determines whether a deal is accretive or dilutive? What's the quick rule?`, a: `**Compare the acquirer's cost of each funding source with the target's earnings yield (target net income ÷ purchase price).**
- **Cash:** after-tax foregone interest rate on the cash.
- **Debt:** after-tax interest rate on the new debt.
- **Stock:** the acquirer's earnings yield = 1 ÷ acquirer P/E.
- If the weighted cost < the target's earnings yield → **accretive** (before synergies, fees and new amortization).
- All-stock shortcut: accretive if the acquirer's P/E > the P/E paid for the target.` },

  { id: 'ma-03', t: 'ma', q: `An acquirer trading at 15x earnings buys a target at 10x earnings in an all-stock deal. Accretive or dilutive?`, a: `**Accretive.**
- Cost of stock = 1 ÷ 15 ≈ 6.7%; target earnings yield = 1 ÷ 10 = 10% → the target's yield exceeds the cost.
- Intuition: the acquirer pays $10 of stock per $1 of target earnings, while the market values its own stock at $15 per $1 of earnings — so earnings per share rise.
- Flip the multiples (acquirer at 10x buying at 15x) → dilutive.

(Ignores synergies, fees and purchase accounting.)` },

  { id: 'ma-04', t: 'ma', q: `Why might a dilutive deal still make sense?`, a: `**EPS is one lens — strategy and long-term value matter more.**
- Strategic value: new markets, products, capabilities, scale or defensive positioning.
- Synergies that phase in over time (accretive by year 2), or revenue synergies not in the model.
- Higher-growth or higher-quality earnings — the target's higher P/E may be deserved.
- An IRR above the acquirer's cost of capital even if near-term EPS is diluted.

**FIG angle:** bank investors weigh EPS accretion against TBV dilution and earnback, ROTCE improvement and the value of the target's deposit franchise.` },

  { id: 'ma-05', t: 'ma', q: `What is goodwill, and how is it created?`, a: `**Goodwill = purchase price − fair value of the target's identifiable net assets.**
- Start with the target's book value → write assets and liabilities up or down to fair value → recognize new identifiable intangibles (customer relationships, trade names, technology) → record deferred taxes on the write-ups → the remainder is goodwill.
- US GAAP (public companies): goodwill isn't amortized; it's tested for impairment at least annually. Finite-lived intangibles are amortized.

**FIG angle:** goodwill and intangibles are deducted from tangible book value and CET1, so paying a premium directly consumes regulatory capital.` },

  { id: 'ma-06', t: 'ma', q: `Walk me through purchase price allocation (PPA).`, a: `**Allocate the purchase price to fair-valued assets and liabilities; the residual is goodwill.**
1. Start with the equity purchase price.
2. Subtract the target's existing book value (its old goodwill is eliminated).
3. Allocate the excess: write tangible assets and liabilities up or down to fair value; recognize new identifiable intangibles.
4. Record a DTL on the write-ups (in a stock deal the tax basis doesn't step up): DTL = write-up × tax rate.
5. The remainder is goodwill.
- Write-ups increase future D&A and amortization → lower pro forma net income.

**FIG angle:** bank PPAs mark loans (credit and interest-rate marks), securities, time deposits and debt, and create a core deposit intangible.` },

  { id: 'ma-07', t: 'ma', adv: true, q: `Stock purchase vs. asset purchase — what are the key differences?`, a: `**Stock purchase:** the buyer acquires the shares, and all assets and liabilities (including unknown ones) come with them. The tax basis carries over — no step-up — so book write-ups create DTLs and the new D&A isn't tax-deductible. Simpler for sellers, who are taxed once at the shareholder level.

**Asset purchase:** the buyer picks specific assets and liabilities. The tax basis steps up to fair value, so depreciation and amortization (including goodwill, over 15 years in the US) are tax-deductible. C-corp sellers can face double taxation.

**Hybrid:** a Section 338(h)(10) or 336(e) election treats a stock purchase as an asset purchase for tax purposes.` },

  { id: 'ma-08', t: 'ma', q: `How do synergies factor into a merger model?`, a: `**Add after-tax synergies to pro forma net income, phased in over time.**
- **Cost synergies** (overlapping locations, headcount, technology, overhead) are more reliable and usually get credit.
- **Revenue synergies** (cross-selling, pricing) are less certain — often excluded or haircut.
- Model one-time integration and restructuring costs; they're often excluded from "run-rate" accretion but still hit cash and book value.
- **Breakeven synergies:** the synergy level needed for pro forma EPS to equal standalone EPS.

**FIG angle:** bank deals center on cost saves, expressed as a % of the target's non-interest expense — larger for in-market deals with branch overlap than for out-of-market deals.` },

  { id: 'ma-09', t: 'ma', q: `What factors determine whether a buyer pays with cash, stock or debt?`, a: `**Cost, capacity, valuation and risk sharing.**
- **Cost:** compare after-tax cost of debt and foregone interest on cash with the buyer's earnings yield (1 ÷ P/E); a high P/E makes stock cheap.
- **Capacity:** available cash, debt capacity and credit-rating impact.
- **Valuation view:** buyers lean toward stock when they think their shares are richly valued.
- **Risk sharing:** stock lets target holders share in the upside — and the integration risk.
- **Seller preferences:** cash = certainty; stock = potential tax deferral in a qualifying reorganization.
- **Ownership dilution** for the buyer's existing shareholders.

**FIG angle:** most bank deals are all-stock, because cash deals consume regulatory capital — goodwill is deducted from CET1 while the cash leaves.` },

  { id: 'ma-10', t: 'ma', q: `What's the difference between a fixed exchange ratio and a fixed price (floating ratio) structure?`, a: `**Fixed exchange ratio:** target holders receive a fixed number of acquirer shares per target share — the value they get moves with the acquirer's stock price, but the ownership split is locked. Most common in stock-for-stock deals, including bank mergers.

**Fixed price (floating ratio):** the value per target share is fixed; the number of acquirer shares issued floats with the acquirer's price, so ownership dilution is uncertain.

**Collars** limit how far the price or ratio can move between signing and closing, sometimes with walk-away rights.` },

  { id: 'ma-11', t: 'ma', q: `What is a merger of equals (MOE)?`, a: `**A combination of two similarly sized companies, typically all-stock with little or no premium.**
- Shared governance is central: board seats split (often roughly evenly), CEO/chair roles and succession agreed, headquarters and brand decided.
- Rationale: scale, cost synergies and a stronger market position without paying a big premium.
- Risks: cultural integration, "social issues" and unclear decision-making.

**FIG angle:** common in banking — e.g., BB&T and SunTrust combining to form Truist (announced 2019).` },

  { id: 'ma-12', t: 'ma', q: `Why do acquirers pay a control premium?`, a: `**Control is worth more than a minority stake.**
- **Control:** the ability to direct strategy, cash flows, capital allocation and management.
- **Synergies:** the buyer can create value the standalone company can't, and shares part of it with sellers through the premium.
- **Inducement:** shareholders must be persuaded to sell, and competing bidders push premiums up.` },

  { id: 'ma-13', t: 'ma', q: `How would you evaluate whether an acquisition is a good idea for the buyer?`, a: `**Use a strategic, financial and execution lens.**
- **Strategic:** does it add markets, products, capabilities or scale? Is it a better use of capital than buybacks or organic growth?
- **Financial:** EPS accretion/dilution, IRR vs. cost of capital, price paid vs. comps and precedents, pro forma leverage and credit profile.
- **Execution:** synergy achievability, integration and cultural risk, regulatory approval risk, retention of key people.

**FIG angle:** for a bank deal, add TBV dilution and earnback, pro forma CET1 and ROTCE, deposit franchise quality, credit diligence (loan marks) and regulatory approval timing.` },

  { id: 'ma-14', t: 'ma', q: `Walk me through a sell-side M&A process.`, a: `**A typical broad or targeted auction:**
1. **Preparation:** engagement, valuation, teaser and confidential information memorandum (CIM), buyer list, data room; NDAs signed.
2. **First round:** buyers review the CIM and submit non-binding indications of interest (IOIs) with price ranges.
3. **Second round:** selected bidders get management presentations and full data-room diligence; the seller circulates a draft merger agreement.
4. **Final bids:** binding offers with a marked-up agreement; negotiate with the preferred bidder.
5. **Signing → closing:** board approval and fairness opinion, announcement, regulatory approvals and shareholder votes, then close.

**FIG angle:** bank sales are often narrow, confidential processes with a few logical partners, given regulatory approval needs and the sensitivity of depositors and employees.` },

  { id: 'ma-15', t: 'ma', adv: true, q: `What are common deal-protection and risk-allocation provisions in a merger agreement?`, a: `**They balance deal certainty for the buyer against the target board's fiduciary duties.**
- **Termination (break-up) fee:** paid by the target if it walks for a superior proposal — commonly a low-single-digit % of equity value. A **reverse termination fee** may be owed by the buyer (e.g., for financing or regulatory failure).
- **No-shop** with a **fiduciary out** for unsolicited superior proposals; a **go-shop** instead allows a limited window to solicit bids.
- **Matching rights:** the buyer can match a competing offer.
- **MAC/MAE clause:** lets the buyer walk if the target suffers a material adverse change.
- **Closing conditions:** regulatory approvals, shareholder votes, no injunctions.` },

  { id: 'ma-16', t: 'ma', q: `In an all-stock deal, how do you calculate the new shares issued and the pro forma ownership split?`, a: `**Deal value ÷ acquirer share price = new shares.**
- Exchange ratio = offer price per target share ÷ acquirer share price; new shares = target diluted shares × exchange ratio.
- Target holders' pro forma ownership = new shares ÷ (acquirer shares + new shares).
- Example: acquirer has 100M shares at $50; target has 40M shares and the offer is $30/share → deal value $1.2B → 24M new shares (0.6x ratio) → target holders own 24 ÷ 124 ≈ 19.4%.` },

  // ── LBO ─────────────────────────────────────────────────────
  { id: 'lbo-01', t: 'lbo', q: `Walk me through an LBO model.`, a: `**A sponsor buys a company using mostly debt, pays the debt down with the company's cash flow, and sells in roughly 3–7 years.**
1. **Purchase price:** entry multiple × EBITDA, plus fees → sources & uses (debt tranches + sponsor equity).
2. **Project** the income statement and free cash flow; use FCF to pay interest and repay debt.
3. **Exit:** exit multiple × final-year EBITDA = EV; subtract remaining net debt → equity value at exit.
4. **Returns:** MOIC and IRR on the sponsor's equity.
- **Value drivers:** EBITDA growth, multiple expansion and debt paydown.` },

  { id: 'lbo-02', t: 'lbo', q: `What makes a good LBO candidate?`, a: `**Cash flow that can reliably service debt.**
- Stable, predictable cash flows; low capex and working-capital needs.
- Strong market position, defensible margins, room to cut costs or improve operations.
- Low existing leverage, assets that can support borrowing, a reasonable valuation and a clear exit path.

**FIG angle:** sponsors favor capital-light FIG businesses — insurance brokers, wealth managers and RIAs, asset managers, payments and fintech, insurance services. Banks are rarely LBO'd: capital rules limit leverage and bank holding company rules make sponsor control difficult.` },

  { id: 'lbo-03', t: 'lbo', q: `What IRRs do these returns imply: 2x in 3 years, 2x in 5 years, 2.5x in 5 years, 3x in 5 years?`, a: `**Memorize these — interviewers expect quick mental math.**
- 2x in 3 years ≈ 26%
- 2x in 5 years ≈ 15%
- 2.5x in 5 years ≈ 20%
- 3x in 5 years ≈ 25%
- Rule of 72: years to double ≈ 72 ÷ annual return % (15% → ~4.8 years; 24% → 3 years).` },

  { id: 'lbo-04', t: 'lbo', q: `Why does leverage increase returns in an LBO?`, a: `**Less equity is needed up front, so the same dollar gain is a larger percentage return.**
- Debt costs less than the return the business earns, and interest is tax-deductible.
- Paying down debt with cash flow shifts value from lenders to equity holders over time.
- Trade-off: more leverage means more default risk and less flexibility; lenders cap leverage (e.g., Debt/EBITDA, interest coverage).` },

  { id: 'lbo-05', t: 'lbo', q: `What are sources and uses in an LBO?`, a: `**Uses (where the money goes):** purchase of equity, refinancing existing debt, transaction fees and expenses (sometimes cash to the balance sheet).

**Sources (where it comes from):** new debt tranches (revolver, term loans, senior and subordinated notes, sometimes private credit), sponsor equity, management rollover equity, existing cash.
- Sources must equal uses; sponsor equity is usually the plug.` },

  { id: 'lbo-06', t: 'lbo', q: `Quick LBO math: buy at 10x $100M of EBITDA with 60% debt. EBITDA grows to $130M over 5 years, you exit at 10x, and debt is paid down to $400M. What are the MOIC and IRR?`, a: `**MOIC 2.25x; IRR ≈ 17.6%.**
- Entry EV = $1,000M; debt $600M → sponsor equity $400M.
- Exit EV = 10 × $130M = $1,300M; less $400M of debt → exit equity $900M.
- MOIC = 900 ÷ 400 = 2.25x; IRR = 2.25^(1/5) − 1 ≈ 17.6% — between the 2x (15%) and 2.5x (20%) benchmarks.
- Value creation of $500M: EBITDA growth adds $300M of EV, debt paydown $200M, no multiple expansion.

(Ignores fees and interim cash.)` },

  { id: 'lbo-07', t: 'lbo', q: `What's the difference between IRR and MOIC?`, a: `**MOIC measures how much; IRR measures how fast.**
- **MOIC** (multiple on invested capital) = total value returned ÷ equity invested — ignores time.
- **IRR** = the annualized discount rate that sets the NPV of all equity cash flows to zero — accounts for timing.
- A quick exit or early dividend boosts IRR but may lower MOIC; a long hold can deliver a high MOIC with a modest IRR. Sponsors track both, and LPs also watch DPI (cash actually distributed ÷ paid-in capital).` },

  { id: 'lbo-08', t: 'lbo', q: `What is a dividend recapitalization?`, a: `**The portfolio company raises new debt to pay a dividend to the sponsor.**
- Returns capital early → boosts IRR and de-risks the investment without selling the company.
- Raises leverage and default risk; depends on open credit markets and lender appetite.` },
];
