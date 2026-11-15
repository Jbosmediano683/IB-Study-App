// Content integrity: ids, topics, markup, and that the offline cache lists every file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import core from '../js/data/cards-core.js';
import banks from '../js/data/cards-banks.js';
import fig from '../js/data/cards-fig.js';
import guideCards from '../js/data/cards-guide.js';
import { GUIDES } from '../js/data/guide.js';
import { TERMS, TERM_CATS } from '../js/data/terms.js';
import { FORMULAS, FORMULA_CATS } from '../js/data/formulas.js';
import { SHEETS } from '../js/data/sheets.js';
import { DEALS } from '../js/data/deals.js';
import { FIRMS } from '../js/data/firms.js';
import { md } from '../js/util.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CORE_TOPICS = ['acc', 'ev', 'val', 'ma', 'lbo', 'bank', 'cap', 'bval', 'ins', 'am', 'fin', 'mkt', 'wmt'];
const TOPICS = [...CORE_TOPICS, 'fit', 'prod', 'ind'];
const CARDS = [...core, ...banks, ...fig, ...guideCards];

/** Markup lint: balanced bold markers per line, nothing left unrendered. */
function lintMarkup(text, where) {
  for (const line of String(text).split('\n')) {
    const n = (line.match(/\*\*/g) || []).length;
    assert.equal(n % 2, 0, `${where}: unbalanced ** in line → ${line}`);
  }
  const html = md(text);
  assert.ok(html.length > 0, `${where}: renders empty`);
  assert.ok(!html.includes('**'), `${where}: leftover ** after render`);
  assert.ok(!/undefined|\[object Object\]/.test(text), `${where}: contains undefined`);
}

test('flashcards: unique ids, valid topics, non-empty, clean markup', () => {
  const ids = new Set();
  for (const c of CARDS) {
    assert.ok(!ids.has(c.id), `duplicate id ${c.id}`);
    ids.add(c.id);
    assert.ok(TOPICS.includes(c.t), `${c.id}: bad topic ${c.t}`);
    assert.ok(c.id.startsWith(c.t + '-'), `${c.id}: id prefix should match topic`);
    assert.ok(c.q && c.q.trim().length >= 6, `${c.id}: question too short`); // "Why FIG?" is legit
    assert.ok(c.a && c.a.trim().length > 30, `${c.id}: answer too short`);
    lintMarkup(c.a, c.id);
  }
  for (const t of CORE_TOPICS) assert.ok(CARDS.filter((c) => c.t === t).length >= 8, `topic ${t} has too few cards`);
  assert.ok(CARDS.length >= 200, `expected 200+ cards, got ${CARDS.length}`);
});

test('guide cards are clean and guide chapters only reference real cards', () => {
  for (const c of guideCards) {
    assert.ok(!/[`]|\$\{/.test(c.q + c.a), `${c.id}: contains a backtick or template syntax`);
    assert.ok(/^[a-z]+-[a-z]\d{3}$/.test(c.id), `${c.id}: guide card ids look like acc-g001 / fit-a001`);
  }
  const known = new Set([...CARDS.map((c) => c.id), ...TERMS.map((t) => 't:' + t.id), ...FORMULAS.map((f) => 'f:' + f.id)]);
  const guideIds = new Set();
  for (const g of GUIDES) {
    assert.ok(g.id && g.name && Array.isArray(g.chapters) && g.chapters.length, `guide ${g.id} incomplete`);
    assert.ok(!guideIds.has(g.id), `duplicate guide id ${g.id}`);
    guideIds.add(g.id);
    for (const ch of g.chapters) {
      assert.ok(!guideIds.has(ch.id), `duplicate chapter id ${ch.id}`);
      guideIds.add(ch.id);
      assert.ok(ch.ids.length > 0, `chapter ${ch.id} is empty`);
      for (const id of ch.ids) assert.ok(known.has(id), `chapter ${ch.id} references unknown card ${id}`);
      assert.equal(new Set(ch.ids).size, ch.ids.length, `chapter ${ch.id} lists a card twice`);
    }
  }
});

test('glossary: unique ids, valid categories, plain-text definitions', () => {
  const cats = new Set(TERM_CATS.map((c) => c.id));
  const ids = new Set();
  for (const t of TERMS) {
    assert.ok(!ids.has(t.id), `duplicate term id ${t.id}`);
    ids.add(t.id);
    assert.ok(cats.has(t.cat), `${t.id}: bad category`);
    assert.ok(t.term && t.def && t.def.length > 20, `${t.id}: missing term/def`);
    assert.ok(!t.def.includes('**'), `${t.id}: markup in definition`);
  }
});

test('formulas: unique ids, valid categories', () => {
  const cats = new Set(FORMULA_CATS.map((c) => c.id));
  const ids = new Set();
  for (const f of FORMULAS) {
    assert.ok(!ids.has(f.id), `duplicate formula id ${f.id}`);
    ids.add(f.id);
    assert.ok(cats.has(f.cat), `${f.id}: bad category`);
    assert.ok(f.name && f.f, `${f.id}: missing name/formula`);
  }
});

test('cheat sheets, deals and firms are complete', () => {
  for (const s of SHEETS) {
    assert.ok(s.id && s.title && s.body, `sheet ${s.id}`);
    lintMarkup(s.body, `sheet ${s.id}`);
  }
  const dealIds = new Set(DEALS.map((d) => d.id));
  assert.equal(dealIds.size, DEALS.length, 'duplicate deal ids');
  for (const d of DEALS) {
    assert.ok(d.title && d.date && d.value && d.sector && d.body, `deal ${d.id}`);
    lintMarkup(d.body, `deal ${d.id}`);
  }
  for (const id of ['citi', 'bofa', 'wells', 'barclays']) {
    const f = FIRMS.find((x) => x.id === id);
    assert.ok(f, `missing firm ${id}`);
    lintMarkup(f.snapshot, `firm ${id} snapshot`);
    lintMarkup(f.angles, `firm ${id} angles`);
    assert.ok(Array.isArray(f.research) && f.research.length >= 3, `firm ${id} research list`);
  }
});

test('service worker precaches every app file', () => {
  const sw = readFileSync(join(ROOT, 'sw.js'), 'utf8');
  const listed = new Set([...sw.matchAll(/'\.\/([^']*)'/g)].map((m) => m[1]));
  const walk = (dir) =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [relative(ROOT, p).split('\\').join('/')];
    });
  const files = [...walk(join(ROOT, 'js')), ...walk(join(ROOT, 'css')), ...walk(join(ROOT, 'icons')), 'index.html', 'manifest.webmanifest'];
  for (const f of files) assert.ok(listed.has(f), `sw.js ASSETS is missing ./${f}`);
  for (const f of listed) if (f) assert.ok(files.includes(f), `sw.js lists a file that does not exist: ./${f}`);
});
