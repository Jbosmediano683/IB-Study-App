// Aggregates the study content and builds decks (including decks generated
// from the glossary and the formula sheet, plus the user's own cards).

import core from './data/cards-core.js';
import banks from './data/cards-banks.js';
import fig from './data/cards-fig.js';
import { TERMS, TERM_CATS } from './data/terms.js';
import { FORMULAS, FORMULA_CATS } from './data/formulas.js';
import { S, isDue, isNew, status, cardState, isStarred } from './store.js';
import { shuffle } from './util.js';

export { TERMS, TERM_CATS, FORMULAS, FORMULA_CATS };

export const TOPICS = [
  { id: 'bank', name: 'Banks: Fundamentals', short: 'Banks', group: 'fig' },
  { id: 'cap', name: 'Banks: Capital & Regulation', short: 'Capital', group: 'fig' },
  { id: 'bval', name: 'Banks: Valuation & M&A', short: 'Bank val & M&A', group: 'fig' },
  { id: 'ins', name: 'Insurance', short: 'Insurance', group: 'fig' },
  { id: 'am', name: 'Asset & Wealth Mgmt', short: 'Asset mgmt', group: 'fig' },
  { id: 'fin', name: 'Fintech, Payments & Spec Fin', short: 'Fintech', group: 'fig' },
  { id: 'mkt', name: 'Rates, Macro & Markets', short: 'Markets', group: 'fig' },
  { id: 'acc', name: 'Accounting', short: 'Accounting', group: 'core' },
  { id: 'ev', name: 'EV & Equity Value', short: 'EV', group: 'core' },
  { id: 'val', name: 'Valuation & DCF', short: 'Valuation', group: 'core' },
  { id: 'ma', name: 'M&A', short: 'M&A', group: 'core' },
  { id: 'lbo', name: 'LBO', short: 'LBO', group: 'core' },
  { id: 'wmt', name: 'Walk Me Through (stories)', short: 'Stories', group: 'interview' },
  { id: 'terms', name: 'Terminology', short: 'Terms', group: 'ref' },
  { id: 'eq', name: 'Equations', short: 'Equations', group: 'ref' },
  { id: 'mine', name: 'My Cards', short: 'My cards', group: 'mine' },
];
export const GROUPS = [
  { id: 'fig', name: 'FIG technicals' },
  { id: 'core', name: 'Core technicals' },
  { id: 'interview', name: 'Interview stories' },
  { id: 'ref', name: 'Drill the reference' },
  { id: 'mine', name: 'Your cards' },
];
const TOPIC_MAP = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
export const topic = (id) => TOPIC_MAP[id] || { id, name: id, short: id, group: 'core' };
export const TECH_TOPICS = TOPICS.filter((t) => ['fig', 'core', 'interview'].includes(t.group)).map((t) => t.id);
export const FIG_TOPICS = TOPICS.filter((t) => t.group === 'fig').map((t) => t.id);

const BUILTIN = [...core, ...banks, ...fig];

const TERM_CARDS = TERMS.map((t) => ({
  id: 't:' + t.id,
  t: 'terms',
  cat: t.cat,
  q: `Define: ${t.term}${t.full ? ` (${t.full})` : ''}`,
  a: t.def + (t.why ? `\n\n**Why it matters:** ${t.why}` : ''),
}));
const EQ_CARDS = FORMULAS.map((f) => ({
  id: 'f:' + f.id,
  t: 'eq',
  cat: f.cat,
  q: `Formula: ${f.name}`,
  formula: f,
}));
const STATIC = [...BUILTIN, ...TERM_CARDS, ...EQ_CARDS];
const STATIC_MAP = new Map(STATIC.map((c) => [c.id, c]));

export const builtinCount = BUILTIN.length;

export function cardById(id) {
  return STATIC_MAP.get(id) || S.custom.find((c) => c.id === id) || null;
}

const visible = (c) => S.settings.showAdvanced || !c.adv;

/** All cards in a deck (respects the "include advanced" setting). */
export function deckCards(tid) {
  if (tid === 'mine') return S.custom.slice();
  if (tid === 'terms') return TERM_CARDS;
  if (tid === 'eq') return EQ_CARDS;
  if (tid === 'starred') return [...STATIC, ...S.custom].filter((c) => isStarred(c.id));
  return BUILTIN.filter((c) => c.t === tid && visible(c));
}
export const techCards = () => [...BUILTIN.filter(visible), ...S.custom];

export function deckStats(cards) {
  const s = { total: cards.length, new: 0, learning: 0, familiar: 0, mastered: 0, due: 0, got: 0, answered: 0 };
  const now = Date.now();
  for (const c of cards) {
    s[status(c.id)]++;
    if (isDue(c.id, now)) s.due++;
    const st = cardState(c.id);
    if (st) {
      s.got += st.got || 0;
      s.answered += (st.got || 0) + (st.shaky || 0) + (st.miss || 0);
    }
  }
  s.acc = s.answered ? Math.round((100 * s.got) / s.answered) : null;
  return s;
}

const byDue = (a, b) => (cardState(a.id)?.due || 0) - (cardState(b.id)?.due || 0);
const leastRecent = (a, b) => (cardState(a.id)?.last || 0) - (cardState(b.id)?.last || 0);
const weakest = (a, b) => {
  const sa = cardState(a.id) || {};
  const sb = cardState(b.id) || {};
  return (sa.box || 0) - (sb.box || 0) || (sa.last || 0) - (sb.last || 0);
};

/** Build a study queue for one deck: due → new (in authored order) → least recently seen. */
export function deckQueue(tid, n = S.settings.sessionSize) {
  const cards = deckCards(tid);
  const now = Date.now();
  const due = cards.filter((c) => isDue(c.id, now)).sort(byDue);
  const fresh = cards.filter((c) => isNew(c.id));
  const rest = cards.filter((c) => !isNew(c.id) && !isDue(c.id, now)).sort(weakest);
  return [...due, ...fresh, ...rest].slice(0, n).map((c) => c.id);
}

/** Interleave new cards across topics so a quick session is varied. FIG first. */
function interleavedNew(limit) {
  const order = ['bank', 'acc', 'bval', 'val', 'cap', 'ev', 'ins', 'ma', 'am', 'fin', 'mkt', 'lbo', 'wmt'];
  const pools = order.map((t) => BUILTIN.filter((c) => c.t === t && visible(c) && isNew(c.id)));
  const mine = S.custom.filter((c) => isNew(c.id));
  const out = [...mine];
  let i = 0;
  while (out.length < limit && pools.some((p) => p.length)) {
    const p = pools[i % pools.length];
    if (p.length) out.push(p.shift());
    i++;
  }
  return out.slice(0, limit);
}

/** Quick session: open errors that are due → due reviews → new cards → weakest. */
export function quickQueue(n = 10) {
  const now = Date.now();
  const pool = techCards();
  const errKeys = new Set(Object.values(S.errors).filter((e) => e.status === 'open' && e.kind === 'card').map((e) => e.ref));
  const errDue = pool.filter((c) => errKeys.has(c.id) && isDue(c.id, now)).sort(byDue);
  const due = pool.filter((c) => !errKeys.has(c.id) && isDue(c.id, now)).sort(byDue);
  let q = [...errDue.slice(0, Math.ceil(n / 2)), ...due];
  q = q.slice(0, n);
  if (q.length < n) q.push(...interleavedNew(n - q.length));
  if (q.length < n) {
    const have = new Set(q.map((c) => c.id));
    q.push(...pool.filter((c) => !have.has(c.id)).sort(weakest).slice(0, n - q.length));
  }
  return q.map((c) => c.id);
}

export function dueQueue(n = 50) {
  const now = Date.now();
  return techCards()
    .filter((c) => isDue(c.id, now))
    .sort(byDue)
    .slice(0, n)
    .map((c) => c.id);
}

export function dueCount() {
  const now = Date.now();
  return techCards().filter((c) => isDue(c.id, now)).length;
}
export function newCount() {
  return techCards().filter((c) => isNew(c.id)).length;
}

/** Mock superday: 10 questions in an interview-like mix, weakest/unseen first. */
export function mockQueue() {
  const plan = [['wmt', 1], ['acc', 2], ['ev', 1], ['val', 1], ['ma', 1], ['bank', 1], ['bval', 1], ['cap', 1], [['ins', 'am', 'fin', 'mkt'], 1]];
  const out = [];
  for (const [t, n] of plan) {
    const ts = Array.isArray(t) ? t : [t];
    const pool = shuffle(BUILTIN.filter((c) => ts.includes(c.t) && visible(c)));
    pool.sort((a, b) => (cardState(a.id)?.box || 0) - (cardState(b.id)?.box || 0));
    // Mix a little randomness in among the weakest third.
    const head = shuffle(pool.slice(0, Math.max(n, Math.ceil(pool.length / 3))));
    out.push(...head.slice(0, n));
  }
  return out.map((c) => c.id);
}

export function openErrorQueue() {
  return Object.values(S.errors)
    .filter((e) => e.status === 'open' && e.kind === 'card' && cardById(e.ref))
    .sort((a, b) => b.count - a.count || b.last - a.last)
    .map((e) => e.ref);
}

/** Lowest-accuracy technical topic with enough answers (for "focus" suggestions). */
export function weakestTopics(min = 4) {
  return TOPICS.filter((t) => TECH_TOPICS.includes(t.id))
    .map((t) => ({ t, s: deckStats(deckCards(t.id)) }))
    .filter((x) => x.s.answered >= min)
    .sort((a, b) => a.s.acc - b.s.acc);
}
