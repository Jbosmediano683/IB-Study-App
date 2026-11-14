// Procedurally generated mental-math drills. Every problem carries its own
// worked solution so a miss turns straight into a lesson (and an error-log entry).

export const DRILL_CATS = [
  { id: 'mix', name: 'Mixed' },
  { id: 'bank', name: 'Bank metrics' },
  { id: 'cap', name: 'Capital' },
  { id: 'bma', name: 'Bank val & M&A' },
  { id: 'ins', name: 'Insurance' },
  { id: 'am', name: 'Asset mgmt' },
  { id: 'val', name: 'Valuation & M&A' },
  { id: 'acc', name: 'Accounting' },
  { id: 'mkt', name: 'Rates' },
];
const FIG_CATS = new Set(['bank', 'cap', 'bma', 'ins', 'am']);

const rnd = (x, dp = 2) => {
  const f = 10 ** dp;
  return Math.round((x + Number.EPSILON) * f) / f;
};
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const rstep = (a, b, step) => rnd(a + step * rint(0, Math.round((b - a) / step)), 6);
export const fmt = (x, dp = 2) =>
  Number(x).toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp });
const f0 = (x) => fmt(x, 0);
const f1 = (x) => fmt(x, 1);
const f2 = (x) => fmt(x, 2);
/** Trim trailing zeros (3.250 → 3.25, 2.000 → 2). */
const ft = (x, dp = 3) => {
  const s = fmt(x, dp);
  return s.includes('.') ? s.replace(/\.?0+$/, '') : s;
};
/** Signed money: −$40M instead of $-40M. */
const money = (x, unit = '') => (x < 0 ? `−$${fx(-x)}${unit}` : `$${fx(x)}${unit}`);
/** Show a number with only the decimals it needs (max 2). */
const fx = (x) => (Number.isInteger(rnd(x, 6)) ? f0(x) : Number.isInteger(rnd(x * 10, 6)) ? f1(x) : f2(x));

const GENERATORS = [
  // ---------------- Bank metrics ----------------
  {
    type: 'nim',
    cat: 'bank',
    title: 'Net interest margin',
    gen() {
      const A = pick([40, 50, 60, 75, 80, 100, 120, 150, 200, 250]);
      const y = rstep(4.0, 6.5, 0.1);
      const ii = rnd((A * y) / 100, 1);
      const ie = rnd((A * rstep(1.2, Math.min(3.0, y - 1.8), 0.1)) / 100, 1);
      const nii = rnd(ii - ie, 1);
      const ans = rnd((nii / A) * 100, 2);
      return {
        q: `A bank has $${A}B of average interest-earning assets. Annual interest income is $${f1(ii)}B and interest expense is $${f1(ie)}B. What is its net interest margin?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.03,
        solution: `NII = $${f1(ii)}B − $${f1(ie)}B = $${f1(nii)}B\nNIM = NII ÷ avg. interest-earning assets = ${f1(nii)} ÷ ${A} = **${f2(ans)}%**`,
      };
    },
  },
  {
    type: 'eff',
    cat: 'bank',
    title: 'Efficiency ratio',
    gen() {
      const nii = rstep(2, 20, 0.5);
      const fee = rnd(nii * rstep(0.2, 0.6, 0.05), 1);
      const rev = rnd(nii + fee, 1);
      const exp = rnd(rev * rstep(0.48, 0.68, 0.01), 1);
      const ans = rnd((exp / rev) * 100, 1);
      return {
        q: `A bank reports NII of $${f1(nii)}B, non-interest income of $${f1(fee)}B and non-interest expense of $${f1(exp)}B. What is its efficiency ratio?`,
        answer: ans,
        unit: '%',
        dp: 1,
        tol: 0.15,
        solution: `Revenue = NII + fees = ${f1(nii)} + ${f1(fee)} = $${f1(rev)}B\nEfficiency ratio = non-interest expense ÷ revenue = ${f1(exp)} ÷ ${f1(rev)} = **${f1(ans)}%**\nLower is better; ~50–60% is typical, sub-50% is best-in-class.`,
      };
    },
  },
  {
    type: 'dupont',
    cat: 'bank',
    title: 'ROA → ROE (DuPont)',
    gen() {
      const roa = pick([0.8, 0.9, 1.0, 1.1, 1.2, 1.25, 1.3, 1.4, 1.5]);
      const lev = pick([8, 9, 10, 11, 12, 12.5]);
      const ans = rnd(roa * lev, 2);
      return {
        q: `A bank earns an ROA of ${fx(roa)}% and runs assets ÷ equity of ${fx(lev)}x. What is its ROE?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.06,
        solution: `ROE = ROA × leverage (assets ÷ equity) = ${fx(roa)}% × ${fx(lev)} = **${fx(ans)}%**\nThis is why small changes in ROA or capital levels swing bank returns.`,
      };
    },
  },
  {
    type: 'prov',
    cat: 'bank',
    title: 'Provision from the ACL roll-forward',
    gen() {
      const begin = rint(16, 60) * 25;
      const nco = rint(6, 60) * 5;
      const build = Math.max(rint(-8, 30) * 5, 10 - nco); // keep provision positive
      const end = begin + build;
      const ans = nco + build;
      return {
        q: `Beginning allowance for credit losses (ACL) was $${f0(begin)}M. Net charge-offs during the year were $${f0(nco)}M and the ending ACL is $${f0(end)}M. What provision expense did the bank book?`,
        answer: ans,
        unit: '$M',
        dp: 0,
        tol: 0.5,
        solution: `Ending ACL = beginning ACL + provision − NCOs\nProvision = NCOs + reserve build = ${f0(nco)} + (${f0(end)} − ${f0(begin)}) = ${f0(nco)} ${build >= 0 ? '+' : '−'} ${f0(Math.abs(build))} = **$${f0(ans)}M**\n${build >= 0 ? 'A reserve build means provision > NCOs.' : 'A reserve release means provision < NCOs.'}`,
      };
    },
  },
  {
    type: 'nco',
    cat: 'bank',
    title: 'NCO ratio (annualized)',
    gen() {
      const L = pick([20, 40, 50, 60, 80, 100, 120, 200]);
      const ratio = rstep(0.2, 1.6, 0.05);
      const q = Math.max(5, Math.round((L * 1000 * ratio) / 100 / 4 / 5) * 5);
      const ans = rnd(((q * 4) / (L * 1000)) * 100, 2);
      return {
        q: `A bank has $${L}B of average loans and reported $${f0(q)}M of net charge-offs this quarter. What is its annualized NCO ratio?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.02,
        solution: `Annualize: ${f0(q)} × 4 = $${f0(q * 4)}M\nNCO ratio = ${f0(q * 4)} ÷ ${f0(L * 1000)} = **${f2(ans)}%**`,
      };
    },
  },
  {
    type: 'beta',
    cat: 'bank',
    title: 'Deposit beta',
    gen() {
      const dff = pick([200, 250, 300, 400, 500, 525]);
      const beta = pick([0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6]);
      const start = pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5]);
      const end = rnd(start + (dff / 100) * beta, 3);
      const ans = rnd(beta * 100, 0);
      return {
        q: `Over a hiking cycle the fed funds rate rose ${dff}bp. The bank's cost of deposits went from ${fx(start)}% to ${ft(end)}%. What was its cumulative deposit beta?`,
        answer: ans,
        unit: '%',
        dp: 0,
        tol: 1,
        solution: `Δ deposit cost = ${ft(end)} − ${fx(start)} = ${ft(rnd(end - start, 3))}pp = ${ft((end - start) * 100, 1)}bp\nBeta = Δ deposit cost ÷ Δ fed funds = ${ft((end - start) * 100, 1)} ÷ ${dff} = **${ans}%**\nLower beta = stickier, more valuable deposit franchise.`,
      };
    },
  },
  {
    type: 'ppnr',
    cat: 'bank',
    title: 'PPNR & pre-tax income',
    gen() {
      const nii = rstep(3, 25, 0.5);
      const fee = rnd(nii * rstep(0.25, 0.6, 0.05), 1);
      const exp = rnd((nii + fee) * rstep(0.5, 0.65, 0.01), 1);
      const ppnr = rnd(nii + fee - exp, 1);
      const prov = rnd(ppnr * rstep(0.1, 0.35, 0.05), 1);
      const ans = rnd(ppnr - prov, 1);
      return {
        q: `NII $${f1(nii)}B, fee income $${f1(fee)}B, non-interest expense $${f1(exp)}B, provision $${f1(prov)}B. What is pre-tax income?`,
        answer: ans,
        unit: '$B',
        dp: 1,
        tol: 0.05,
        solution: `PPNR = NII + fees − expenses = ${f1(nii)} + ${f1(fee)} − ${f1(exp)} = $${f1(ppnr)}B\nPre-tax income = PPNR − provision = ${f1(ppnr)} − ${f1(prov)} = **$${f1(ans)}B**\nPPNR is the bank's loss-absorbing earnings power (key in stress tests).`,
      };
    },
  },
  {
    type: 'aoci',
    cat: 'bank',
    title: 'Rate shock → AOCI hit',
    gen() {
      const X = pick([10, 20, 25, 40, 50, 80, 100]);
      const D = pick([3, 4, 5, 6]);
      const dy = pick([100, 150, 200, 250, 300]);
      const pre = rnd((X * D * dy) / 10000, 2);
      const ans = rnd(pre * 0.75, 2);
      return {
        q: `A bank holds $${X}B of AFS securities with a duration of ${D}. Rates rise ${dy}bp. Roughly how big is the after-tax hit to AOCI (25% tax rate), in $B?`,
        answer: ans,
        unit: '$B',
        dp: 2,
        tol: 0.03,
        solution: `Price change ≈ −duration × Δy = −${D} × ${fx(dy / 100)}% = −${fx((D * dy) / 100)}%\nPre-tax loss ≈ ${X} × ${fx((D * dy) / 100)}% = $${fx(pre)}B\nAfter tax: ${fx(pre)} × (1 − 25%) = **$${fx(ans)}B** off AOCI (and TBV). If the bonds were HTM, nothing hits equity — but the loss is still economic.`,
      };
    },
  },

  // ---------------- Capital ----------------
  {
    type: 'cet1',
    cat: 'cap',
    title: 'CET1 ratio',
    gen() {
      const R = pick([80, 120, 150, 200, 300, 450, 600, 900, 1200]);
      const C = rnd((R * rstep(9.5, 14, 0.1)) / 100, 1);
      const ans = rnd((C / R) * 100, 2);
      return {
        q: `A bank has $${f1(C)}B of CET1 capital and $${f0(R)}B of risk-weighted assets. What is its CET1 ratio?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.03,
        solution: `CET1 ratio = CET1 ÷ RWA = ${f1(C)} ÷ ${f0(R)} = **${f2(ans)}%**`,
      };
    },
  },
  {
    type: 'excess',
    cat: 'cap',
    title: 'Excess capital vs target',
    gen() {
      const R = pick([100, 150, 200, 400, 800, 1200]);
      const tgt = pick([10, 10.5, 11, 11.5, 12]);
      const act = rnd(tgt + rstep(0.3, 2.5, 0.1), 1);
      const ans = rnd((R * (act - tgt)) / 100, 2);
      return {
        q: `RWA is $${f0(R)}B and the CET1 ratio is ${fx(act)}%. Management targets ${fx(tgt)}%. How much excess CET1 capital does the bank have, in $B?`,
        answer: ans,
        unit: '$B',
        dp: 2,
        tol: 0.03,
        solution: `Excess = (actual − target) × RWA = (${fx(act)}% − ${fx(tgt)}%) × ${f0(R)} = ${fx(rnd(act - tgt, 2))}% × ${f0(R)} = **$${fx(ans)}B** available for buybacks, dividends, growth or M&A.`,
      };
    },
  },
  {
    type: 'growcap',
    cat: 'cap',
    title: 'Capital needed for loan growth',
    gen() {
      const kind = pick([
        ['commercial (C&I) loans', 100],
        ['residential mortgages', 50],
        ['consumer loans', 100],
      ]);
      const tgt = pick([10, 10.5, 11, 12]);
      if (Math.random() < 0.5) {
        const X = pick([5, 8, 10, 15, 20, 25, 40]);
        const ans = rnd((X * kind[1] * tgt) / 10000, 3);
        return {
          q: `A bank wants to grow ${kind[0]} by $${X}B (risk weight ${kind[1]}%). It targets a ${fx(tgt)}% CET1 ratio. How much CET1 capital does that growth consume, in $B?`,
          answer: ans,
          unit: '$B',
          dp: 3,
          tol: 0.006,
          solution: `ΔRWA = $${X}B × ${kind[1]}% = $${fx((X * kind[1]) / 100)}B\nCapital needed = ΔRWA × ${fx(tgt)}% = **$${ft(ans)}B**`,
        };
      }
      const Y = pick([0.5, 0.6, 0.8, 1, 1.2, 1.5, 2]);
      const ans = rnd((Y * 10000) / (kind[1] * tgt), 2);
      return {
        q: `A bank retains $${fx(Y)}B of earnings this year and targets a ${fx(tgt)}% CET1 ratio. How many $B of ${kind[0]} (risk weight ${kind[1]}%) can that support?`,
        answer: ans,
        unit: '$B',
        dp: 2,
        tol: 0.05,
        solution: `Supportable RWA = capital ÷ target ratio = ${fx(Y)} ÷ ${fx(tgt)}% = $${fx(rnd((Y * 100) / tgt, 2))}B\nLoans = RWA ÷ risk weight = ${fx(rnd((Y * 100) / tgt, 2))} ÷ ${kind[1]}% = **$${fx(ans)}B**`,
      };
    },
  },
  {
    type: 'lev',
    cat: 'cap',
    title: 'Tier 1 leverage ratio',
    gen() {
      const A = pick([50, 80, 120, 200, 300, 500]);
      const T1 = rnd((A * rstep(6.5, 10, 0.1)) / 100, 1);
      const ans = rnd((T1 / A) * 100, 2);
      return {
        q: `Tier 1 capital is $${f1(T1)}B and average total assets are $${f0(A)}B. What is the Tier 1 leverage ratio — and is it above the 5% "well-capitalized" bank-level threshold?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.03,
        solution: `Tier 1 leverage = Tier 1 ÷ average total assets = ${f1(T1)} ÷ ${f0(A)} = **${f2(ans)}%** — ${ans >= 5 ? 'above' : 'below'} the 5% PCA well-capitalized level (4% is the minimum).`,
      };
    },
  },

  // ---------------- Bank valuation & M&A ----------------
  {
    type: 'ptbv',
    cat: 'bma',
    title: 'Justified P/TBV',
    gen() {
      const ke = pick([9, 10, 11, 12]);
      const g = pick([2, 3, 4].filter((x) => x < ke - 4));
      const roe = pick([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20]);
      const ans = rnd((roe - g) / (ke - g), 2);
      return {
        q: `A bank earns a sustainable ROTCE of ${roe}%, has a ${ke}% cost of equity and ${g}% long-term growth. What P/TBV multiple is justified?`,
        answer: ans,
        unit: 'x',
        dp: 2,
        tol: 0.03,
        solution: `P/TBV = (ROTCE − g) ÷ (Ke − g) = (${roe} − ${g}) ÷ (${ke} − ${g}) = ${roe - g} ÷ ${ke - g} = **${f2(ans)}x**\n${roe > ke ? 'ROTCE above the cost of equity ⇒ premium to TBV.' : roe === ke ? 'ROTCE = cost of equity ⇒ ~1.0x TBV.' : 'ROTCE below the cost of equity ⇒ discount to TBV.'}`,
      };
    },
  },
  {
    type: 'pe-tbv',
    cat: 'bma',
    title: 'P/E from P/TBV and ROTCE',
    gen() {
      const ptbv = rstep(1.0, 2.6, 0.1);
      const roe = pick([10, 12, 12.5, 13, 14, 15, 16, 18, 20]);
      const ans = rnd(ptbv / (roe / 100), 1);
      return {
        q: `A bank trades at ${f1(ptbv)}x tangible book and is expected to earn a ${fx(roe)}% ROTCE next year. What forward P/E does that imply?`,
        answer: ans,
        unit: 'x',
        dp: 1,
        tol: 0.1,
        solution: `Earnings = ROTCE × TBV, so P/E = (P/TBV) ÷ ROTCE = ${f1(ptbv)} ÷ ${fx(roe / 100)} = **${f1(ans)}x**`,
      };
    },
  },
  {
    type: 'tbvprice',
    cat: 'bma',
    title: 'Implied price from P/TBV',
    gen() {
      const tbv = rstep(18, 60, 0.5);
      const m = rstep(1.1, 2.5, 0.1);
      const ans = rnd(tbv * m, 2);
      return {
        q: `Peers trade at a median ${f1(m)}x TBV. Your bank's tangible book value per share is $${f2(tbv)}. What share price does the median imply?`,
        answer: ans,
        unit: '$',
        dp: 2,
        tol: 0.06,
        solution: `Implied price = P/TBV × TBVPS = ${f1(m)} × $${f2(tbv)} = **$${f2(ans)}**\nThen sanity-check: is this bank's ROTCE above or below the peer median?`,
      };
    },
  },
  {
    type: 'earnback',
    cat: 'bma',
    title: 'TBV earnback (simple)',
    gen() {
      const tbv = rstep(25, 55, 0.5);
      const dilPct = rstep(2, 8, 0.5);
      const dil = rnd((tbv * dilPct) / 100, 2);
      const acc = rnd(dil / rstep(1.5, 5.5, 0.25), 2);
      const pf = rnd(tbv - dil, 2);
      const ans = rnd(dil / acc, 1);
      return {
        q: `Standalone TBVPS is $${f2(tbv)}; pro forma TBVPS at close is $${f2(pf)}. The deal adds $${f2(acc)} of EPS per year once cost saves are phased in. What is the simple TBV earnback period (years)?`,
        answer: ans,
        unit: 'yrs',
        dp: 1,
        tol: 0.1,
        solution: `Dilution = ${f2(tbv)} − ${f2(pf)} = $${f2(dil)} per share (${fx(rnd((dil / tbv) * 100, 1))}%)\nSimple earnback = dilution ÷ annual EPS accretion = ${f2(dil)} ÷ ${f2(acc)} = **${f1(ans)} years**\nInvestors generally like ≲3 years; much beyond ~4–5 draws pushback.`,
      };
    },
  },
  {
    type: 'cdp',
    cat: 'bma',
    title: 'Core deposit premium',
    gen() {
      const D = pick([5, 8, 10, 12, 15, 20, 25, 40]);
      const T = rnd(D * rstep(0.08, 0.12, 0.005), 2);
      const prem = rstep(2, 12, 0.5);
      const V = rnd(T + (D * prem) / 100, 2);
      const ans = rnd(((V - T) / D) * 100, 1);
      return {
        q: `An acquirer pays $${fx(V)}B for a bank with $${fx(T)}B of tangible book value and $${D}B of core deposits. What is the core deposit premium?`,
        answer: ans,
        unit: '%',
        dp: 1,
        tol: 0.1,
        solution: `Core deposit premium = (deal value − TBV) ÷ core deposits = (${fx(V)} − ${fx(T)}) ÷ ${D} = ${fx(rnd(V - T, 2))} ÷ ${D} = **${f1(ans)}%**`,
      };
    },
  },
  {
    type: 'tbvrule',
    cat: 'bma',
    title: 'All-stock deal: TBVPS impact',
    gen() {
      const acq = rstep(1.2, 2.4, 0.1);
      let deal = rstep(1.0, 2.8, 0.1);
      if (Math.abs(deal - acq) < 0.15) deal = rnd(acq + 0.4, 1);
      const dil = deal > acq;
      return {
        q: `An acquirer trading at ${f1(acq)}x TBV buys a target for ${f1(deal)}x the target's (marked) TBV, paying entirely in stock. Is the deal accretive or dilutive to the acquirer's TBV per share at close?`,
        choices: ['Accretive', 'Dilutive'],
        answerIdx: dil ? 1 : 0,
        solution: `Rule: in an all-stock deal TBVPS is dilutive when the price/TBV paid exceeds the acquirer's own P/TBV.\nEach new share is issued at ${f1(acq)}x the acquirer's TBV but buys TBV at ${f1(deal)}x ⇒ **${dil ? 'Dilutive' : 'Accretive'}**.\n(In an all-cash deal, any premium over TBV is dilutive.)`,
      };
    },
  },

  // ---------------- Insurance ----------------
  {
    type: 'cr',
    cat: 'ins',
    title: 'Combined ratio',
    gen() {
      const P = rint(5, 50) * 100;
      const L = Math.round((P * rstep(55, 72, 0.5)) / 100);
      const E = Math.round((P * rstep(24, 33, 0.5)) / 100);
      const ans = rnd(((L + E) / P) * 100, 1);
      return {
        q: `A P&C insurer earned $${f0(P)}M of net premiums. Losses + LAE were $${f0(L)}M and underwriting expenses $${f0(E)}M. What is its combined ratio — and did it make an underwriting profit?`,
        answer: ans,
        unit: '%',
        dp: 1,
        tol: 0.15,
        solution: `Loss ratio = ${f0(L)} ÷ ${f0(P)} = ${f1((L / P) * 100)}%\nExpense ratio = ${f0(E)} ÷ ${f0(P)} = ${f1((E / P) * 100)}%\nCombined ratio = **${f1(ans)}%** → ${ans < 100 ? `underwriting profit of $${f0(P - L - E)}M` : `underwriting loss of $${f0(L + E - P)}M (investment income on float may still make it profitable)`}.`,
      };
    },
  },
  {
    type: 'pc-pretax',
    cat: 'ins',
    title: 'P&C pre-tax operating income',
    gen() {
      const P = rint(10, 80) * 100;
      const cr = rstep(88, 104, 0.5);
      const nii = Math.round((P * rstep(6, 14, 0.5)) / 100);
      const uw = rnd((P * (100 - cr)) / 100, 1);
      const ans = rnd(uw + nii, 1);
      return {
        q: `Net earned premiums $${f0(P)}M, combined ratio ${fx(cr)}%, net investment income $${f0(nii)}M. What is pre-tax operating income, in $M?`,
        answer: ans,
        unit: '$M',
        dp: 1,
        tol: 0.6,
        solution: `Underwriting income = NEP × (1 − CR) = ${f0(P)} × ${fx(rnd(100 - cr, 2))}% = ${money(uw, 'M')}\nPre-tax operating income = UW income + NII = ${money(uw, 'M')} + $${f0(nii)}M = **${money(ans, 'M')}**\nOperating ratio = CR − NII ratio = ${fx(cr)}% − ${fx(rnd((nii / P) * 100, 2))}% = ${fx(rnd(cr - (nii / P) * 100, 2))}%`,
      };
    },
  },
  {
    type: 'retention',
    cat: 'ins',
    title: 'Premium leverage',
    gen() {
      const S = pick([500, 800, 1000, 1500, 2000, 2500]);
      const ratio = rstep(0.8, 2.8, 0.1);
      const W = Math.round(S * ratio);
      const ans = rnd(W / S, 2);
      return {
        q: `An insurer wrote $${f0(W)}M of net premiums against $${f0(S)}M of statutory surplus. What is its premium leverage (NWP ÷ surplus)?`,
        answer: ans,
        unit: 'x',
        dp: 2,
        tol: 0.02,
        solution: `Premium leverage = NWP ÷ surplus = ${f0(W)} ÷ ${f0(S)} = **${f2(ans)}x**\nA common regulatory test (NAIC IRIS) flags writings above ~3x surplus.`,
      };
    },
  },

  // ---------------- Asset management ----------------
  {
    type: 'amrev',
    cat: 'am',
    title: 'Management fee revenue',
    gen() {
      const A = pick([50, 80, 100, 150, 250, 400, 600, 1000]);
      const bps = pick([15, 25, 30, 35, 40, 45, 50, 60, 75, 85, 100]);
      const ans = rnd((A * bps) / 10, 1);
      return {
        q: `An asset manager averages $${f0(A)}B of AUM at a blended fee rate of ${bps}bps. What is annual management fee revenue, in $M?`,
        answer: ans,
        unit: '$M',
        dp: 0,
        tol: 0.6,
        rtol: 0.005,
        solution: `Revenue = avg AUM × fee rate = $${f0(A)}B × ${bps}bps = ${f0(A * 1000)} × ${fx(bps / 100)}% = **$${f0(ans)}M**\nShortcut: $1B × 1bp = $0.1M.`,
      };
    },
  },
  {
    type: 'aum',
    cat: 'am',
    title: 'AUM roll-forward & organic growth',
    gen() {
      const B = pick([100, 150, 200, 250, 400, 500, 800]);
      const og = rstep(-6, 8, 0.5);
      const F = rnd((B * og) / 100, 1);
      const m = rstep(-10, 15, 1);
      const mkt = rnd((B * m) / 100, 1);
      if (Math.random() < 0.5) {
        const ans = rnd((F / B) * 100, 1);
        return {
          q: `Beginning AUM $${f0(B)}B; net flows ${F >= 0 ? '+' : '−'}$${fx(Math.abs(F))}B; market ${mkt >= 0 ? 'appreciation +' : 'depreciation −'}$${fx(Math.abs(mkt))}B. What was the organic growth rate?`,
          answer: ans,
          unit: '%',
          dp: 1,
          tol: 0.1,
          solution: `Organic growth = net flows ÷ beginning AUM = ${fx(F)} ÷ ${f0(B)} = **${f1(ans)}%**\nMarket moves don't count — organic growth is the valuation driver investors watch.`,
        };
      }
      const ans = rnd(B + F + mkt, 1);
      return {
        q: `Beginning AUM $${f0(B)}B; organic growth ${fx(og)}%; markets ${m >= 0 ? '+' : ''}${m}% (apply to beginning AUM). What is ending AUM, in $B?`,
        answer: ans,
        unit: '$B',
        dp: 1,
        tol: 0.15,
        solution: `Net flows = ${f0(B)} × ${fx(og)}% = ${fx(F)}\nMarket = ${f0(B)} × ${m}% = ${fx(mkt)}\nEnding AUM = ${f0(B)} + ${fx(F)} + ${fx(mkt)} = **$${fx(ans)}B**`,
      };
    },
  },
  {
    type: 'carry',
    cat: 'am',
    title: 'Carried interest',
    gen() {
      const fund = pick([500, 1000, 2000, 2500, 5000]);
      const moic = pick([1.5, 1.8, 2.0, 2.2, 2.5]);
      const profit = rnd(fund * (moic - 1), 1);
      const ans = rnd(profit * 0.2, 1);
      return {
        q: `A $${f0(fund)}M PE fund returns ${fx(moic)}x gross (all capital invested, full catch-up, so carry is 20% of total profit). How much carried interest does the GP earn, in $M?`,
        answer: ans,
        unit: '$M',
        dp: 0,
        tol: 0.6,
        solution: `Total value = ${f0(fund)} × ${fx(moic)} = $${f0(fund * moic)}M → profit $${f0(profit)}M\nWith a full catch-up the GP ends up with 20% of all profit: 20% × ${f0(profit)} = **$${f0(ans)}M**\nCarry is volatile, so it earns a lower multiple than fee-related earnings.`,
      };
    },
  },

  // ---------------- Valuation & M&A ----------------
  {
    type: 'ev',
    cat: 'val',
    title: 'Equity value → enterprise value',
    gen() {
      const p = rint(15, 90);
      const s = pick([50, 80, 100, 120, 150, 200]);
      const eq = p * s;
      const debt = Math.round((eq * rstep(0.1, 0.6, 0.05)) / 50) * 50;
      const pref = pick([0, 0, 100, 200, 250]);
      const nci = pick([0, 50, 100, 150]);
      const cash = Math.round((eq * rstep(0.03, 0.2, 0.01)) / 25) * 25;
      const ans = eq + debt + pref + nci - cash;
      return {
        q: `Share price $${p}, ${s}M diluted shares, debt $${f0(debt)}M, preferred stock $${f0(pref)}M, noncontrolling interest $${f0(nci)}M, cash $${f0(cash)}M. What is enterprise value, in $M?`,
        answer: ans,
        unit: '$M',
        dp: 0,
        tol: 0.5,
        solution: `Equity value = ${p} × ${s} = $${f0(eq)}M\nEV = equity + debt + preferred + NCI − cash = ${f0(eq)} + ${f0(debt)} + ${f0(pref)} + ${f0(nci)} − ${f0(cash)} = **$${f0(ans)}M**\n(For a bank you'd stop at equity value — EV isn't meaningful.)`,
      };
    },
  },
  {
    type: 'tsm',
    cat: 'val',
    title: 'Diluted shares (treasury stock method)',
    gen() {
      const p = pick([20, 25, 40, 50, 80]);
      const k = rnd(p * pick([0.4, 0.5, 0.6, 0.75, 0.8]), 2);
      const O = pick([2, 4, 5, 8, 10]);
      const B = pick([50, 80, 100, 120, 200]);
      const bought = rnd((O * k) / p, 4);
      const ans = rnd(B + O - bought, 2);
      return {
        q: `${B}M basic shares, share price $${p}. There are ${O}M options outstanding with a $${fx(k)} strike. How many diluted shares (M) using the treasury stock method?`,
        answer: ans,
        unit: 'M',
        dp: 2,
        tol: 0.02,
        solution: `Option proceeds = ${O}M × $${fx(k)} = $${fx(O * k)}M → buys back ${fx(O * k)} ÷ ${p} = ${fx(rnd(bought, 2))}M shares\nNet new shares = ${O} − ${fx(rnd(bought, 2))} = ${fx(rnd(O - bought, 2))}M\nDiluted shares = ${B} + ${fx(rnd(O - bought, 2))} = **${fx(ans)}M**`,
      };
    },
  },
  {
    type: 'capm',
    cat: 'val',
    title: 'Cost of equity (CAPM)',
    gen() {
      const rf = rstep(3.5, 4.75, 0.25);
      const b = rstep(0.8, 1.5, 0.05);
      const erp = pick([5, 5.5, 6]);
      const ans = rnd(rf + b * erp, 2);
      return {
        q: `Risk-free rate ${fx(rf)}%, levered beta ${fx(b)}, equity risk premium ${fx(erp)}%. What is the cost of equity?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.03,
        solution: `Ke = Rf + β × ERP = ${fx(rf)} + ${fx(b)} × ${fx(erp)} = ${fx(rf)} + ${fx(rnd(b * erp, 3))} = **${f2(ans)}%**\nFor a bank, use the observed levered beta — don't unlever/relever.`,
      };
    },
  },
  {
    type: 'wacc',
    cat: 'val',
    title: 'WACC',
    gen() {
      const we = pick([60, 70, 75, 80]);
      const ke = pick([9, 10, 11, 12, 13]);
      const kd = pick([5, 5.5, 6, 6.5, 7]);
      const t = pick([21, 25]);
      const ans = rnd((we / 100) * ke + (1 - we / 100) * kd * (1 - t / 100), 2);
      return {
        q: `Target capital structure ${we}% equity / ${100 - we}% debt. Cost of equity ${ke}%, pre-tax cost of debt ${fx(kd)}%, tax rate ${t}%. What is WACC?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.04,
        solution: `After-tax Kd = ${fx(kd)} × (1 − ${t}%) = ${fx(rnd(kd * (1 - t / 100), 3))}%\nWACC = ${we}% × ${ke} + ${100 - we}% × ${fx(rnd(kd * (1 - t / 100), 3))} = ${fx(rnd((we / 100) * ke, 3))} + ${fx(rnd((1 - we / 100) * kd * (1 - t / 100), 3))} = **${f2(ans)}%**`,
      };
    },
  },
  {
    type: 'ggm',
    cat: 'val',
    title: 'Gordon growth / DDM price',
    gen() {
      const d1 = rstep(1, 4, 0.1);
      const ke = pick([9, 10, 11, 12]);
      const g = pick([2, 3, 4, 5].filter((x) => x <= ke - 4));
      const ans = rnd(d1 / ((ke - g) / 100), 2);
      return {
        q: `Next year's dividend is $${f2(d1)} per share, cost of equity ${ke}%, perpetual growth ${g}%. What is the share's value?`,
        answer: ans,
        unit: '$',
        dp: 2,
        tol: 0.06,
        rtol: 0.003,
        solution: `P = D₁ ÷ (Ke − g) = ${f2(d1)} ÷ (${ke}% − ${g}%) = ${f2(d1)} ÷ ${fx((ke - g) / 100)} = **$${f2(ans)}**`,
      };
    },
  },
  {
    type: 'accrete',
    cat: 'val',
    title: 'All-stock accretion / dilution',
    gen() {
      const A = pick([500, 800, 1000, 1200, 2000]);
      const S = pick([100, 200, 250, 400]);
      const peA = pick([12, 14, 15, 16, 18, 20]);
      const eps = A / S;
      const price = rnd(eps * peA, 2);
      const T = Math.round(A * pick([0.1, 0.15, 0.2, 0.25, 0.3]));
      const peT = pick([10, 11, 12, 13, 15, 16, 18, 20, 22]);
      const V = T * peT;
      const newSh = V / price;
      const pf = (A + T) / (S + newSh);
      const ans = rnd((pf / eps - 1) * 100, 1);
      return {
        q: `Acquirer: net income $${f0(A)}M, ${S}M shares, P/E ${peA}x. It buys a target earning $${f0(T)}M for $${f0(V)}M (${peT}x earnings), 100% stock, no synergies. EPS accretion/(dilution) in %? (negative = dilution)`,
        answer: ans,
        unit: '%',
        dp: 1,
        tol: 0.2,
        solution: `Acquirer EPS = ${f0(A)} ÷ ${S} = $${f2(eps)}; share price = ${f2(eps)} × ${peA} = $${f2(price)}\nNew shares = ${f0(V)} ÷ ${f2(price)} = ${f2(newSh)}M\nPro forma EPS = (${f0(A)} + ${f0(T)}) ÷ (${S} + ${f2(newSh)}) = $${f2(pf)}\nAccretion = ${f2(pf)} ÷ ${f2(eps)} − 1 = **${f1(ans)}%**\nShortcut: acquirer P/E ${peA}x ${peA > peT ? '>' : peA < peT ? '<' : '='} purchase P/E ${peT}x ⇒ ${peA > peT ? 'accretive' : peA < peT ? 'dilutive' : 'neutral'}.`,
      };
    },
  },
  {
    type: 'accdebt',
    cat: 'val',
    title: 'Debt-funded accretion / dilution',
    gen() {
      const A = pick([800, 1000, 1200, 1500, 2000]);
      const S = pick([100, 200, 250]);
      const T = Math.round(A * pick([0.1, 0.15, 0.2, 0.25]));
      const peT = pick([10, 12, 14, 15, 16, 18, 20]);
      const V = T * peT;
      const r = pick([5, 6, 7, 8]);
      const after = (V * r * 0.75) / 100;
      const eps = A / S;
      const pf = (A + T - after) / S;
      const ans = rnd((pf / eps - 1) * 100, 1);
      return {
        q: `Acquirer: net income $${f0(A)}M, ${S}M shares. It buys a target earning $${f0(T)}M for $${f0(V)}M, funded 100% with new debt at ${r}% (25% tax). EPS accretion/(dilution) in %?`,
        answer: ans,
        unit: '%',
        dp: 1,
        tol: 0.2,
        solution: `After-tax interest = ${f0(V)} × ${r}% × (1 − 25%) = $${f1(after)}M\nPro forma NI = ${f0(A)} + ${f0(T)} − ${f1(after)} = $${f1(A + T - after)}M (shares unchanged)\nEPS: $${f2(eps)} → $${f2(pf)} ⇒ **${f1(ans)}%**\nShortcut: target earnings yield ${fx(rnd(100 / peT, 2))}% vs after-tax cost of debt ${fx((r * 0.75))}% ⇒ ${100 / peT > r * 0.75 ? 'accretive' : 'dilutive'}.`,
      };
    },
  },
  {
    type: 'pecheck',
    cat: 'val',
    title: 'All-stock quick check (P/E rule)',
    gen() {
      const peA = pick([10, 11, 12, 13, 14, 15, 16, 18, 20]);
      let peT = pick([8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22]);
      if (peT === peA) peT += 2;
      const acc = peA > peT;
      return {
        q: `An acquirer trading at ${peA}x earnings buys a target for ${peT}x the target's earnings, paying 100% in stock. Ignoring synergies and deal adjustments, is it EPS accretive or dilutive?`,
        choices: ['Accretive', 'Dilutive'],
        answerIdx: acc ? 0 : 1,
        solution: `Cost of stock = 1 ÷ acquirer P/E = ${fx(rnd(100 / peA, 2))}%; target earnings yield = 1 ÷ ${peT} = ${fx(rnd(100 / peT, 2))}%.\nThe acquirer "buys" earnings yielding ${acc ? 'more' : 'less'} than its stock costs ⇒ **${acc ? 'Accretive' : 'Dilutive'}**.`,
      };
    },
  },
  {
    type: 'irr',
    cat: 'val',
    title: 'IRR from MOIC',
    gen() {
      const m = pick([1.5, 2, 2.5, 3]);
      const n = pick([3, 4, 5, 6, 7]);
      const ans = rnd((m ** (1 / n) - 1) * 100, 1);
      return {
        q: `A sponsor exits at ${fx(m)}x its equity after ${n} years (single entry and exit cash flow). Roughly what IRR is that?`,
        answer: ans,
        unit: '%',
        dp: 0,
        tol: 1.5,
        solution: `IRR = MOIC^(1/n) − 1 = ${fx(m)}^(1/${n}) − 1 ≈ **${f1(ans)}%**\nAnchors: 2x/3yrs ≈ 26%, 2x/5yrs ≈ 15%, 2.5x/5yrs ≈ 20%, 3x/5yrs ≈ 25%.`,
      };
    },
  },

  // ---------------- Accounting ----------------
  {
    type: 'dep',
    cat: 'acc',
    title: 'Depreciation change through the statements',
    gen() {
      const X = pick([10, 20, 30, 40, 50, 100]);
      const t = pick([21, 25, 30, 40]);
      if (Math.random() < 0.5) {
        const ans = rnd(X * (1 - t / 100), 2);
        return {
          q: `Depreciation increases by $${X} (tax rate ${t}%). By how much does net income decrease?`,
          answer: ans,
          unit: '$',
          dp: 2,
          tol: 0.01,
          solution: `Pre-tax income −${X}; taxes fall ${X} × ${t}% = ${fx(rnd((X * t) / 100, 2))}\nNet income falls ${X} × (1 − ${t}%) = **$${fx(ans)}**`,
        };
      }
      const ans = rnd((X * t) / 100, 2);
      return {
        q: `Depreciation increases by $${X} (tax rate ${t}%). By how much does cash increase?`,
        answer: ans,
        unit: '$',
        dp: 2,
        tol: 0.01,
        solution: `NI −${fx(rnd(X * (1 - t / 100), 2))}; add back non-cash D&A +${X}\nCash ↑ by the tax shield: ${X} × ${t}% = **$${fx(ans)}**\nBS: PP&E −${X}, cash +${fx(ans)} ⇒ assets −${fx(rnd(X * (1 - t / 100), 2))} = equity −${fx(rnd(X * (1 - t / 100), 2))}.`,
      };
    },
  },
  {
    type: 'ppedebt',
    cat: 'acc',
    title: 'Debt-funded PP&E — year 1',
    gen() {
      const D = pick([100, 200, 300, 500]);
      const r = pick([5, 6, 8, 10]);
      const n = pick([5, 10]);
      const t = pick([21, 25]);
      const dep = D / n;
      const int = (D * r) / 100;
      const ans = rnd((dep + int) * (1 - t / 100), 2);
      return {
        q: `A company borrows $${D} at ${r}% to buy PP&E with a ${n}-year straight-line life (tax ${t}%, no principal repaid). By how much does year-1 net income decrease?`,
        answer: ans,
        unit: '$',
        dp: 2,
        tol: 0.01,
        solution: `Depreciation = ${D} ÷ ${n} = ${fx(dep)}; interest = ${D} × ${r}% = ${fx(int)}\nPre-tax −${fx(dep + int)} ⇒ NI −${fx(dep + int)} × (1 − ${t}%) = **$${fx(ans)}**\nCash: NI −${fx(ans)} + D&A ${fx(dep)} = ${rnd(dep - ans, 2) < 0 ? '−' + fx(-rnd(dep - ans, 2)) : '+' + fx(rnd(dep - ans, 2))} (CFO), plus +${D} debt / −${D} capex at purchase.`,
      };
    },
  },
  {
    type: 'writedown',
    cat: 'acc',
    title: 'Asset write-down',
    gen() {
      const X = pick([10, 20, 50, 100, 200]);
      const t = pick([21, 25, 40]);
      const ans = rnd(X * (1 - t / 100), 2);
      return {
        q: `A company writes down $${X} of inventory (tax-deductible, ${t}% tax). By how much do total assets decrease?`,
        answer: ans,
        unit: '$',
        dp: 2,
        tol: 0.01,
        solution: `IS: pre-tax −${X}, NI −${fx(ans)}\nCFS: NI −${fx(ans)} + non-cash write-down ${X} ⇒ cash +${fx(rnd((X * t) / 100, 2))}\nBS: inventory −${X}, cash +${fx(rnd((X * t) / 100, 2))} ⇒ assets **−$${fx(ans)}** = retained earnings −${fx(ans)}`,
      };
    },
  },

  // ---------------- Rates ----------------
  {
    type: 'dur',
    cat: 'mkt',
    title: 'Duration price change',
    gen() {
      const D = pick([2, 3, 4, 5, 6, 7, 8, 10]);
      const dy = pick([25, 50, 75, 100, 150, 200]);
      const up = Math.random() < 0.5;
      const ans = rnd((D * dy) / 100, 2);
      return {
        q: `A bond portfolio has a modified duration of ${D}. Yields ${up ? 'rise' : 'fall'} ${dy}bp. Approximately what % does its price ${up ? 'fall' : 'rise'}?`,
        answer: ans,
        unit: '%',
        dp: 2,
        tol: 0.03,
        solution: `%ΔP ≈ −duration × Δy = −${D} × ${up ? '+' : '−'}${fx(dy / 100)}% ⇒ price ${up ? 'falls' : 'rises'} **${fx(ans)}%** (convexity adds a little on both sides).`,
      };
    },
  },
  {
    type: 'twos10s',
    cat: 'mkt',
    title: 'Curve & NIM intuition',
    gen() {
      const y2 = rstep(3.0, 5.0, 0.05);
      const y10 = rstep(3.4, 5.0, 0.05);
      const ans = Math.round((y10 - y2) * 100);
      return {
        q: `The 2-year Treasury yields ${f2(y2)}% and the 10-year ${f2(y10)}%. What is the 2s10s spread in basis points (negative = inverted)?`,
        answer: ans,
        unit: 'bp',
        dp: 0,
        tol: 0.5,
        solution: `2s10s = 10Y − 2Y = ${f2(y10)} − ${f2(y2)} = **${ans}bp** ${ans < 0 ? '(inverted — tough for NIMs since banks fund short and lend long)' : '(positively sloped — supportive for bank NIMs)'}`,
      };
    },
  },
];

export const DRILL_TYPES = GENERATORS.map(({ type, cat, title }) => ({ type, cat, title }));
const BY_TYPE = Object.fromEntries(GENERATORS.map((g) => [g.type, g]));
export const drillTitle = (type) => BY_TYPE[type]?.title || type;

export function makeProblem(gen) {
  const p = gen.gen();
  return { type: gen.type, topic: gen.cat, title: gen.title, ...p };
}

/** Next problem for a category ('mix' = weighted toward FIG), avoiding immediate repeats. */
export function nextProblem(cat = 'mix', lastType = null, onlyType = null) {
  if (onlyType && BY_TYPE[onlyType]) return makeProblem(BY_TYPE[onlyType]);
  let pool = cat === 'mix' ? GENERATORS : GENERATORS.filter((g) => g.cat === cat);
  if (!pool.length) pool = GENERATORS;
  if (pool.length > 1 && lastType) pool = pool.filter((g) => g.type !== lastType);
  const weights = pool.map((g) => (cat === 'mix' && FIG_CATS.has(g.cat) ? 2 : 1));
  let r = Math.random() * weights.reduce((a, b) => a + b, 0);
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return makeProblem(pool[i]);
  }
  return makeProblem(pool[pool.length - 1]);
}

/** Parse what the user typed: tolerates $, %, x, commas, "bps", unicode minus. */
export function parseAnswer(input) {
  const s = String(input ?? '')
    .trim()
    .replace(/[−–—]/g, '-')
    .replace(/[$,\s]/g, '')
    .replace(/(%|x|bps?|bp|yrs?|years?|m|b)$/i, '');
  if (!s || !/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
  return parseFloat(s);
}

export function checkAnswer(problem, input) {
  const v = parseAnswer(input);
  if (Number.isNaN(v)) return { valid: false, ok: false };
  const a = problem.answer;
  const within = (x) => Math.abs(x - a) <= (problem.tol ?? 0.01) + 1e-9 || (problem.rtol ? Math.abs(x - a) <= problem.rtol * Math.abs(a) : false);
  let ok = within(v);
  // Accept a percentage typed as a decimal (0.034 for 3.4%).
  if (!ok && problem.unit === '%' && Math.abs(v) < 1 && Math.abs(a) >= 1) ok = within(v * 100);
  return { valid: true, ok, value: v };
}

export function fmtAnswer(p) {
  if (p.choices) return p.choices[p.answerIdx];
  const n = (p.dp ?? 2) >= 3 ? ft(p.answer, p.dp) : fmt(p.answer, p.dp ?? 2);
  switch (p.unit) {
    case '%':
      return `${n}%`;
    case 'x':
      return `${n}x`;
    case '$':
      return `$${n}`;
    case '$M':
      return `$${n}M`;
    case '$B':
      return `$${n}B`;
    case 'M':
      return `${n}M`;
    case 'yrs':
      return `${n} years`;
    case 'bp':
      return `${n}bp`;
    default:
      return n;
  }
}
