// Fuzz the drill generators: every problem must render cleanly, and the
// displayed answer must pass its own checker.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DRILL_TYPES, DRILL_CATS, nextProblem, checkAnswer, fmtAnswer, parseAnswer } from '../js/drills.js';

test('every drill type generates clean, self-consistent problems', () => {
  for (const { type } of DRILL_TYPES) {
    for (let i = 0; i < 300; i++) {
      const p = nextProblem('mix', null, type);
      const text = `${p.q} ${p.solution}`;
      assert.ok(!/NaN|undefined|Infinity|\$-|\[object/.test(text), `${type}: bad text → ${text}`);
      assert.ok(p.title && p.topic, `${type}: missing title/topic`);
      if (p.choices) {
        assert.ok([0, 1].includes(p.answerIdx), `${type}: bad answerIdx`);
        continue;
      }
      assert.ok(Number.isFinite(p.answer), `${type}: answer not finite`);
      const shown = fmtAnswer(p);
      assert.ok(checkAnswer(p, shown).ok, `${type}: displayed answer ${shown} fails its own check (${p.answer})`);
    }
  }
});

test('every drill category has at least two problem types', () => {
  for (const c of DRILL_CATS.filter((c) => c.id !== 'mix')) {
    assert.ok(DRILL_TYPES.filter((t) => t.cat === c.id).length >= 2, c.id);
  }
});

test('answer parsing is forgiving about formatting', () => {
  assert.equal(parseAnswer('$1,234.5M'), 1234.5);
  assert.equal(parseAnswer('3.25%'), 3.25);
  assert.equal(parseAnswer(' 1.8x '), 1.8);
  assert.equal(parseAnswer('−2.4'), -2.4);
  assert.equal(parseAnswer('35 bps'), 35);
  assert.ok(Number.isNaN(parseAnswer('abc')));
  assert.ok(Number.isNaN(parseAnswer('')));
});

test('checker accepts tolerance and decimal-form percentages', () => {
  const p = { answer: 3.12, unit: '%', tol: 0.03 };
  assert.ok(checkAnswer(p, '3.1').ok);
  assert.ok(checkAnswer(p, '0.0312').ok);
  assert.ok(!checkAnswer(p, '3.5').ok);
  assert.equal(checkAnswer(p, 'x?').valid, false);
});
