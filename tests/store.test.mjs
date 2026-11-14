// Spaced repetition, error log, streaks and backup — run against an in-memory localStorage.
import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

const mem = new Map();
globalThis.localStorage = {
  getItem: (k) => (mem.has(k) ? mem.get(k) : null),
  setItem: (k, v) => mem.set(k, String(v)),
  removeItem: (k) => mem.delete(k),
};
const store = await import('../js/store.js');
const { S, gradeCard, GRADE, INTERVALS, status, isDue, recordDrill, streak, bestStreak, exportData, importData, resetAll, addCustomCard, FIX_NEEDED } = store;
const { dayKey, addDays, startOfDay, md } = await import('../js/util.js');

const card = { id: 'test-01', t: 'bank', q: 'Q?', a: 'A.' };
beforeEach(() => resetAll(false));

test('new card graded "Got it" jumps to box 2 and is scheduled 3 days out', () => {
  gradeCard(card, GRADE.GOT);
  const c = S.cards[card.id];
  assert.equal(c.box, 2);
  assert.equal(c.due, addDays(startOfDay(), INTERVALS[2]));
  assert.equal(status(card.id), 'familiar');
  assert.equal(isDue(card.id), false);
});

test('"Missed" resets to box 0, is due now, and opens an error', () => {
  gradeCard(card, GRADE.GOT);
  gradeCard(card, GRADE.MISSED);
  assert.equal(S.cards[card.id].box, 0);
  assert.ok(isDue(card.id, Date.now() + 1));
  const e = S.errors['card:' + card.id];
  assert.equal(e.status, 'open');
  assert.equal(e.count, 1);
});

test('"Shaky" drops a box and comes back tomorrow, without logging an error', () => {
  gradeCard(card, GRADE.GOT); // box 2
  gradeCard(card, GRADE.GOT); // box 3
  gradeCard(card, GRADE.SHAKY);
  assert.equal(S.cards[card.id].box, 2);
  assert.equal(S.cards[card.id].due, addDays(startOfDay(), 1));
  assert.equal(S.errors['card:' + card.id], undefined);
});

test('repeated "Got it" climbs to mastered', () => {
  for (let i = 0; i < 4; i++) gradeCard(card, GRADE.GOT);
  assert.equal(status(card.id), 'mastered');
  assert.equal(S.cards[card.id].box, 5);
});

test('open errors auto-resolve after enough correct answers in a row; shaky resets the run', () => {
  gradeCard(card, GRADE.MISSED);
  gradeCard(card, GRADE.GOT);
  gradeCard(card, GRADE.SHAKY); // breaks the streak
  assert.equal(S.errors['card:' + card.id].status, 'open');
  for (let i = 0; i < FIX_NEEDED.card; i++) gradeCard(card, GRADE.GOT);
  const e = S.errors['card:' + card.id];
  assert.equal(e.status, 'resolved');
  assert.equal(e.auto, true);
  gradeCard(card, GRADE.MISSED); // a new miss reopens it and bumps the count
  assert.equal(S.errors['card:' + card.id].status, 'open');
  assert.equal(S.errors['card:' + card.id].count, 2);
});

test('drill misses are logged per problem type and clear after 3 in a row', () => {
  const p = { type: 'nim', topic: 'bank', title: 'NIM', q: 'q', solution: 's' };
  recordDrill(p, false);
  assert.equal(S.errors['drill:nim'].status, 'open');
  recordDrill(p, true);
  recordDrill(p, true);
  assert.equal(S.errors['drill:nim'].status, 'open');
  recordDrill(p, true);
  assert.equal(S.errors['drill:nim'].status, 'resolved');
  assert.deepEqual({ seen: S.drills.nim.seen, ok: S.drills.nim.ok }, { seen: 4, ok: 3 });
});

test('daily activity drives the streak', () => {
  const k = (n) => dayKey(new Date(addDays(startOfDay(), -n)));
  S.daily[k(1)] = { c: 5, cg: 4, d: 0, dg: 0, s: 60 };
  S.daily[k(2)] = { c: 3, cg: 3, d: 1, dg: 1, s: 60 };
  assert.equal(streak(), 2, 'today not studied yet → streak counts from yesterday');
  gradeCard(card, GRADE.GOT);
  assert.equal(streak(), 3);
  S.daily[k(10)] = { c: 1, cg: 1, d: 0, dg: 0, s: 1 };
  assert.equal(bestStreak(), 3);
});

test('backup round-trips and rejects foreign data', () => {
  gradeCard(card, GRADE.MISSED);
  addCustomCard({ q: 'My Q', a: 'My A' });
  const json = exportData();
  resetAll(false);
  assert.equal(Object.keys(S.cards).length, 0);
  importData(json);
  assert.equal(S.cards[card.id].miss, 1);
  assert.equal(S.custom.length, 1);
  assert.throws(() => importData('{"hello":1}'));
});

test('reset keeping notes preserves custom cards and interview dates', () => {
  addCustomCard({ q: 'Keep me', a: 'ok' });
  S.interviews.push({ id: 'iv1', firm: 'citi', label: 'Superday', date: '2026-12-01' });
  gradeCard(card, GRADE.GOT);
  resetAll(true);
  assert.equal(S.custom.length, 1);
  assert.equal(S.interviews.length, 1);
  assert.equal(Object.keys(S.cards).length, 0);
});

test('markup renderer escapes HTML and supports bullets, sub-bullets and numbering', () => {
  const html = md('**Bold** <script>alert(1)</script>\n- one\n  - sub\n1. first\n2. second\n## Head');
  assert.ok(!html.includes('<script>'));
  assert.ok(html.includes('&lt;script&gt;'));
  assert.ok(html.includes('<strong>Bold</strong>'));
  assert.ok(html.includes('<li class="sub">sub</li>'));
  assert.ok(html.includes('<ol start="1">'));
  assert.ok(html.includes('<h4>Head</h4>'));
});
