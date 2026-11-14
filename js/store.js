// All persistent state lives in one localStorage record on the device.
// Nothing is sent anywhere. Export/import gives the user a manual backup.

import { dayKey, startOfDay, addDays, parseKey, DAY_MS } from './util.js';

export const STORAGE_KEY = 'figprep.v1';
export const DEFAULT_SETTINGS = {
  dailyGoal: 20, // cards + drills per day
  sessionSize: 10, // cards per deck session
  drillSize: 5, // problems per drill set
  showAdvanced: true,
  theme: 'auto', // auto | light | dark
};

// Leitner boxes → days until next review.
export const INTERVALS = [0, 1, 3, 7, 16, 35];
export const MASTERED_BOX = 4;
export const GRADE = { MISSED: 0, SHAKY: 1, GOT: 2 };
// Correct answers in a row that auto-resolve an open error.
export const FIX_NEEDED = { card: 2, drill: 3 };

function fresh() {
  return {
    v: 1,
    created: Date.now(),
    cards: {}, // id → { box, seen, got, shaky, miss, due, last }
    errors: {}, // key → error entry
    custom: [], // user cards { id, t:'mine', q, a, created }
    drills: {}, // type → { seen, ok, last }
    daily: {}, // YYYY-MM-DD → { c, cg, d, dg, s }
    stars: {}, // id → 1
    firms: {}, // firmId → { why, notes }
    customFirms: [], // { id, name }
    interviews: [], // { id, firm, label, date }
    market: { fields: {}, headlines: '', themes: '', updated: 0 },
    settings: { ...DEFAULT_SETTINGS },
  };
}

function hydrate(d) {
  const base = fresh();
  if (!d || typeof d !== 'object') return base;
  const out = { ...base, ...d };
  out.settings = { ...base.settings, ...(d.settings || {}) };
  out.market = { ...base.market, ...(d.market || {}), fields: { ...((d.market && d.market.fields) || {}) } };
  for (const k of ['cards', 'errors', 'drills', 'daily', 'stars', 'firms']) if (!out[k] || typeof out[k] !== 'object') out[k] = {};
  for (const k of ['custom', 'customFirms', 'interviews']) if (!Array.isArray(out[k])) out[k] = [];
  return out;
}

function load() {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return hydrate(raw ? JSON.parse(raw) : null);
  } catch (e) {
    console.warn('Could not read saved data', e);
    return fresh();
  }
}

export const S = load();

let saveFailed = false;
export function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(S));
    saveFailed = false;
  } catch (e) {
    if (!saveFailed) console.warn('Save failed', e);
    saveFailed = true;
  }
}

/** Replace all state (used by import/reset). */
export function replaceState(next) {
  const h = hydrate(next);
  for (const k of Object.keys(S)) delete S[k];
  Object.assign(S, h);
  save();
}

// ---------- daily activity ----------
export function today() {
  const k = dayKey();
  return S.daily[k] || { c: 0, cg: 0, d: 0, dg: 0, s: 0 };
}
export function bumpDaily(fields) {
  const k = dayKey();
  const d = S.daily[k] || (S.daily[k] = { c: 0, cg: 0, d: 0, dg: 0, s: 0 });
  for (const [f, v] of Object.entries(fields)) d[f] = (d[f] || 0) + v;
}
const active = (k) => {
  const r = S.daily[k];
  return !!r && (r.c || 0) + (r.d || 0) > 0;
};
export function streak() {
  const d = new Date();
  if (!active(dayKey(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (active(dayKey(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
export function bestStreak() {
  const keys = Object.keys(S.daily).filter(active).sort();
  let best = 0;
  let run = 0;
  let prev = null;
  for (const k of keys) {
    const t = parseKey(k).getTime();
    run = prev !== null && Math.round((t - prev) / DAY_MS) === 1 ? run + 1 : 1;
    best = Math.max(best, run);
    prev = t;
  }
  return best;
}
/** Last n days of activity, oldest first: [{ key, c, cg, d, dg, s }] */
export function lastDays(n) {
  const out = [];
  for (let i = n - 1; i >= 0; i--) {
    const key = dayKey(new Date(addDays(startOfDay(), -i)));
    out.push({ key, c: 0, cg: 0, d: 0, dg: 0, s: 0, ...(S.daily[key] || {}) });
  }
  return out;
}

// ---------- spaced repetition ----------
export const cardState = (id) => S.cards[id];
export const isNew = (id) => !S.cards[id] || !S.cards[id].seen;
export const isDue = (id, now = Date.now()) => {
  const c = S.cards[id];
  return !!c && c.seen > 0 && c.due <= now;
};
export function status(id) {
  const c = S.cards[id];
  if (!c || !c.seen) return 'new';
  if (c.box >= MASTERED_BOX) return 'mastered';
  if (c.box >= 2) return 'familiar';
  return 'learning';
}

/** Days until the card would next be due after a given grade (for button hints). */
export function previewInterval(id, g) {
  const c = S.cards[id];
  if (g === GRADE.MISSED) return 0;
  if (g === GRADE.SHAKY) return 1;
  const first = !c || !c.seen;
  const box = first ? 2 : Math.min(5, (c.box || 0) + 1);
  return INTERVALS[box];
}

/**
 * Record a flashcard answer. Updates SRS state, daily stats and the error log.
 * card: { id, t, q, a }  g: GRADE  source: label for the error log.
 */
export function gradeCard(card, g, source = 'Flashcards') {
  const now = Date.now();
  const c = S.cards[card.id] || (S.cards[card.id] = { box: 0, seen: 0, got: 0, shaky: 0, miss: 0, due: 0, last: 0 });
  const first = !c.seen;
  c.seen++;
  c.last = now;
  if (g === GRADE.GOT) {
    c.got++;
    c.box = first ? 2 : Math.min(5, c.box + 1);
    c.due = addDays(startOfDay(now), INTERVALS[c.box]);
  } else if (g === GRADE.SHAKY) {
    c.shaky++;
    c.box = Math.max(1, c.box - 1);
    c.due = addDays(startOfDay(now), 1);
  } else {
    c.miss++;
    c.box = 0;
    c.due = now;
  }
  bumpDaily({ c: 1, cg: g === GRADE.GOT ? 1 : 0 });

  const key = 'card:' + card.id;
  if (g === GRADE.MISSED) {
    logError({ key, kind: 'card', ref: card.id, topic: card.t, q: card.q, source });
  } else if (g === GRADE.GOT) {
    noteCorrect(key, FIX_NEEDED.card);
  } else {
    const e = S.errors[key];
    if (e && e.status === 'open') e.fix = 0;
  }
  save();
}

// ---------- drills ----------
export function recordDrill(problem, ok, source = 'Math drill') {
  const d = S.drills[problem.type] || (S.drills[problem.type] = { seen: 0, ok: 0, last: 0 });
  d.seen++;
  d.last = Date.now();
  if (ok) d.ok++;
  bumpDaily({ d: 1, dg: ok ? 1 : 0 });
  const key = 'drill:' + problem.type;
  if (!ok) {
    logError({
      key,
      kind: 'drill',
      ref: problem.type,
      topic: problem.topic,
      q: problem.q,
      a: problem.solution,
      title: problem.title,
      source,
    });
  } else {
    noteCorrect(key, FIX_NEEDED.drill);
  }
  save();
}

// ---------- error log ----------
export function logError({ key, kind, ref, topic, q, a, title, source }) {
  const now = Date.now();
  const e =
    S.errors[key] ||
    (S.errors[key] = { key, kind, ref, topic, q: '', a: '', title: '', note: '', count: 0, first: now, last: now, status: 'open', fix: 0, source: source || '' });
  e.count++;
  e.last = now;
  e.status = 'open';
  e.fix = 0;
  e.auto = false;
  if (q != null) e.q = q;
  if (a != null) e.a = a;
  if (title != null) e.title = title;
  if (topic != null) e.topic = topic;
  if (source) e.source = source;
}
export function noteCorrect(key, need) {
  const e = S.errors[key];
  if (!e || e.status !== 'open') return;
  e.fix = (e.fix || 0) + 1;
  if (e.fix >= need) {
    e.status = 'resolved';
    e.auto = true;
    e.resolvedAt = Date.now();
  }
}
export function setErrorStatus(key, st) {
  const e = S.errors[key];
  if (!e) return;
  e.status = st;
  e.auto = false;
  e.fix = 0;
  if (st === 'resolved') e.resolvedAt = Date.now();
  save();
}
export function openErrors() {
  return Object.values(S.errors).filter((e) => e.status === 'open');
}

// ---------- custom cards ----------
export function addCustomCard({ q, a, t = 'mine', topic = '' }) {
  const id = 'my-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const card = { id, t, q: q.trim(), a: a.trim(), topic, created: Date.now() };
  S.custom.push(card);
  save();
  return card;
}
export function removeCustomCard(id) {
  S.custom = S.custom.filter((c) => c.id !== id);
  delete S.cards[id];
  delete S.stars[id];
  delete S.errors['card:' + id];
  save();
}

// ---------- stars ----------
export const isStarred = (id) => !!S.stars[id];
export function toggleStar(id) {
  if (S.stars[id]) delete S.stars[id];
  else S.stars[id] = 1;
  save();
  return !!S.stars[id];
}

// ---------- backup ----------
export function exportData() {
  return JSON.stringify({ app: 'figprep', exported: new Date().toISOString(), data: S }, null, 1);
}
export function importData(text) {
  const parsed = JSON.parse(text);
  const data = parsed && parsed.app === 'figprep' ? parsed.data : parsed;
  if (!data || typeof data !== 'object' || !('cards' in data) || !('daily' in data)) {
    throw new Error('This does not look like a FIG Prep backup.');
  }
  replaceState(data);
}
export function resetAll(keepNotes = false) {
  const keep = keepNotes
    ? { firms: S.firms, customFirms: S.customFirms, interviews: S.interviews, market: S.market, custom: S.custom, settings: S.settings }
    : { settings: S.settings };
  replaceState({ ...fresh(), ...keep });
}
