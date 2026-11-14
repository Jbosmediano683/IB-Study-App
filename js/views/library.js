// Library: global search, terminology, equations, cheat sheets and the deal book.

import { S, isStarred } from '../store.js';
import { TERMS, TERM_CATS, FORMULAS, FORMULA_CATS, cardById, deckCards } from '../content.js';
import core from '../data/cards-core.js';
import banks from '../data/cards-banks.js';
import fig from '../data/cards-fig.js';
import { SHEETS } from '../data/sheets.js';
import { DEALS, DEALS_NOTE } from '../data/deals.js';
import { ACT, INPUT, go, topbar, sectionLabel, empty, starBtn, hl } from '../ui.js';
import { esc, md, icon, plain, shuffle, relTime } from '../util.js';
import { allFirms } from './firms.js';
import { startCards, cardTopicLabel } from './study.js';

const ALL_CARDS = [...core, ...banks, ...fig];
const lc = (s) => String(s || '').toLowerCase();

// Pre-built search index (plain text, lower-cased) so typing stays instant.
const IDX = {
  terms: TERMS.map((t) => ({ t, hay: lc(`${t.term} ${t.full || ''} ${t.def} ${t.why || ''}`), name: lc(`${t.term} ${t.full || ''}`) })),
  formulas: FORMULAS.map((f) => ({ f, hay: lc(`${f.name} ${f.f} ${f.note || ''}`), name: lc(f.name) })),
  cards: ALL_CARDS.map((c) => ({ c, hay: lc(`${c.q} ${plain(c.a)}`), name: lc(c.q) })),
  sheets: SHEETS.map((s) => ({ s, hay: lc(`${s.title} ${s.sub || ''} ${plain(s.body)}`), name: lc(s.title) })),
  deals: DEALS.map((d) => ({ d, hay: lc(`${d.title} ${d.sector} ${d.value} ${plain(d.body)}`), name: lc(d.title) })),
};
const rank = (q) => (a, b) => (b.name.includes(q) ? 1 : 0) - (a.name.includes(q) ? 1 : 0);

export function searchHTML(query) {
  const q = lc(query).trim();
  if (q.length < 2) return '';
  const words = q.split(/\s+/).filter(Boolean);
  const match = (x) => words.every((w) => x.hay.includes(w));
  const terms = IDX.terms.filter(match).sort(rank(q)).slice(0, 8);
  const formulas = IDX.formulas.filter(match).sort(rank(q)).slice(0, 6);
  const cards = IDX.cards.filter(match).sort(rank(q)).slice(0, 8);
  const sheets = IDX.sheets.filter(match).slice(0, 3);
  const deals = IDX.deals.filter(match).slice(0, 4);
  const mine = S.custom.filter((c) => words.every((w) => lc(`${c.q} ${c.a}`).includes(w))).slice(0, 4);
  const total = terms.length + formulas.length + cards.length + sheets.length + deals.length + mine.length;
  if (!total) return `<div class="card empty"><h3>No matches</h3><p class="small">Try a shorter word, e.g. “beta”, “CET1”, “float”.</p></div>`;
  const group = (title, html) => (html ? `<div class="res-group"><h4>${title}</h4><div class="card flush">${html}</div></div>` : '');
  return [
    group('Terminology', terms.map(({ t }) => termHTML(t, q)).join('')),
    group('Equations', formulas.map(({ f }) => formulaHTML(f, q)).join('')),
    group(
      'Flashcards',
      [...mine, ...cards.map((x) => x.c)]
        .map(
          (c) =>
            `<a class="row" href="#/card/${encodeURIComponent(c.id)}?from=${encodeURIComponent('#/library?q=' + encodeURIComponent(query))}"><div class="grow"><div class="clamp2">${hl(esc(c.q), q)}</div><div class="meta">${esc(cardTopicLabel(c))}</div></div>${icon('chevR', 20, 'chev')}</a>`,
        )
        .join(''),
    ),
    group('Cheat sheets', sheets.map(({ s }) => `<a class="row" href="#/sheet/${s.id}"><span class="lead">${icon('file', 18)}</span><div class="grow"><div class="title">${hl(esc(s.title), q)}</div></div>${icon('chevR', 20, 'chev')}</a>`).join('')),
    group('Deals', deals.map(({ d }) => `<a class="row" href="#/deal/${d.id}"><span class="lead">${icon('briefcase', 18)}</span><div class="grow"><div class="title">${hl(esc(d.title), q)}</div><div class="meta">${esc(d.date)}</div></div>${icon('chevR', 20, 'chev')}</a>`).join('')),
  ].join('');
}

// ---------- hub ----------
export function libraryView(params) {
  const q = params.get('q') || '';
  const starred = deckCards('starred').length;
  const mkt = S.market.updated ? `Updated ${relTime(S.market.updated)}` : 'Rates, indices, headlines';
  const tile = (href, ic, title, sub) => `<a class="action-tile" href="${href}">${icon(ic)}<b>${title}</b><small>${sub}</small></a>`;
  const html = `
  ${topbar('Library')}
  <div class="search">${icon('search', 18)}<input type="search" id="lib-q" data-input="libSearch" placeholder="Search terms, formulas, cards, deals…" value="${esc(q)}" aria-label="Search the library" autocomplete="off" autocorrect="off" spellcheck="false"></div>
  <div id="lib-results">${searchHTML(q)}</div>
  <div id="lib-tiles" ${q.trim().length >= 2 ? 'hidden' : ''}>
    <div class="tiles">
      ${tile('#/terms', 'list', 'Terminology', `${TERMS.length} terms`)}
      ${tile('#/formulas', 'sigma', 'Equations', `${FORMULAS.length} formulas`)}
      ${tile('#/sheets', 'file', 'Cheat sheets', `${SHEETS.length} one-pagers`)}
      ${tile('#/deals', 'briefcase', 'Deal book', `${DEALS.length} FIG deals`)}
      ${tile('#/firms', 'bank', 'Firm prep', esc(allFirms().slice(0, 4).map((f) => f.name).join(' · ')))}
      ${tile('#/market', 'trend', 'Market notes', mkt)}
      ${tile('#/deck/starred', 'star', 'Starred', starred ? `${starred} saved` : 'Tap ☆ to save')}
      ${tile('#/add?mode=miss', 'edit', 'Log a miss', 'Capture a fumbled question')}
    </div>
  </div>`;
  return {
    html,
    tab: 'library',
    mount: () => {
      if (q) {
        const el = document.getElementById('lib-q');
        el.focus();
        el.setSelectionRange(el.value.length, el.value.length);
      }
    },
  };
}
INPUT.libSearch = (el) => {
  const q = el.value;
  document.getElementById('lib-results').innerHTML = searchHTML(q);
  document.getElementById('lib-tiles').hidden = q.trim().length >= 2;
  history.replaceState(null, '', q ? `#/library?q=${encodeURIComponent(q)}` : '#/library');
};

// ---------- terminology ----------
function termHTML(t, q = '') {
  return `<div class="term" id="term-${t.id}">
    <div class="t-head"><span class="t-name">${hl(esc(t.term), q)}</span>${t.full ? `<span class="t-full">${hl(esc(t.full), q)}</span>` : ''}</div>
    <p class="t-def">${hl(esc(t.def), q)}</p>
    ${t.why ? `<p class="t-why"><b>Why it matters:</b> ${hl(esc(t.why), q)}</p>` : ''}
    ${starBtn('t:' + t.id, isStarred('t:' + t.id))}
  </div>`;
}
function filterChips(cats, active, route) {
  return `<div class="chips">${[{ id: '', name: 'All' }, ...cats]
    .map((c) => `<a class="chip ${c.id === active ? 'on' : ''}" href="${route}${c.id ? `?cat=${c.id}` : ''}">${esc(c.name)}</a>`)
    .join('')}</div>`;
}
export function termsView(params) {
  const cat = params.get('cat') || '';
  const list = TERMS.filter((t) => !cat || t.cat === cat).sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
  const html = `
  ${topbar('Terminology', { back: '#/library', right: `<button class="btn sm secondary" data-act="quizTerms" data-cat="${cat}">${icon('bolt', 16)} Quiz</button>` })}
  <div class="search">${icon('search', 18)}<input type="search" data-input="filterList" data-target="term-list" placeholder="Filter ${list.length} terms…" aria-label="Filter terms" autocomplete="off" spellcheck="false"></div>
  ${filterChips(TERM_CATS, cat, '#/terms')}
  <div class="card flush" id="term-list">${list.map((t) => termHTML(t)).join('')}</div>
  <p class="muted tiny" id="term-list-none" hidden>No terms match.</p>`;
  return { html, tab: 'library' };
}
ACT.quizTerms = (el) => {
  const cat = el.dataset.cat;
  const ids = deckCards('terms')
    .filter((c) => !cat || c.cat === cat)
    .map((c) => c.id);
  startCards(pickForQuiz(ids), { title: 'Terminology', back: '#/terms', source: 'Terminology quiz' });
};
ACT.quizFormulas = (el) => {
  const cat = el.dataset.cat;
  const ids = deckCards('eq')
    .filter((c) => !cat || c.cat === cat)
    .map((c) => c.id);
  startCards(pickForQuiz(ids), { title: 'Equations', back: '#/formulas', source: 'Equation quiz' });
};
/** Prefer due, then unseen, then everything else — shuffled within each bucket. */
function pickForQuiz(ids, n = S.settings.sessionSize) {
  const now = Date.now();
  const st = (id) => S.cards[id];
  const due = shuffle(ids.filter((id) => st(id)?.seen && st(id).due <= now));
  const fresh = shuffle(ids.filter((id) => !st(id)?.seen));
  const rest = shuffle(ids.filter((id) => st(id)?.seen && st(id).due > now));
  return [...due, ...fresh, ...rest].slice(0, n);
}
/** Live filter for long lists (terms / formulas): hides non-matching children. */
INPUT.filterList = (el) => {
  const q = lc(el.value).trim();
  const box = document.getElementById(el.dataset.target);
  let shown = 0;
  for (const item of box.children) {
    const ok = !q || lc(item.textContent).includes(q);
    item.hidden = !ok;
    if (ok) shown++;
  }
  const none = document.getElementById(el.dataset.target + '-none');
  if (none) none.hidden = shown > 0;
};

// ---------- equations ----------
function formulaHTML(f, q = '') {
  return `<div class="term">
    <div class="t-head"><span class="t-name">${hl(esc(f.name), q)}</span></div>
    <div class="formula">${hl(esc(f.f), q)}</div>
    ${f.note ? `<p class="f-note">${hl(esc(f.note), q)}</p>` : ''}
    ${f.ex ? `<p class="f-ex">${esc(f.ex)}</p>` : ''}
    ${starBtn('f:' + f.id, isStarred('f:' + f.id))}
  </div>`;
}
export function formulasView(params) {
  const cat = params.get('cat') || '';
  const cats = cat ? FORMULA_CATS.filter((c) => c.id === cat) : FORMULA_CATS;
  const body = cats
    .map((c) => {
      const items = FORMULAS.filter((f) => f.cat === c.id);
      return items.length ? `<div class="section-label" data-group>${esc(c.name)}</div><div class="card flush" data-group-list>${items.map((f) => formulaHTML(f)).join('')}</div>` : '';
    })
    .join('');
  const html = `
  ${topbar('Equations', { back: '#/library', right: `<button class="btn sm secondary" data-act="quizFormulas" data-cat="${cat}">${icon('bolt', 16)} Quiz</button>` })}
  <div class="search">${icon('search', 18)}<input type="search" data-input="filterFormulas" placeholder="Filter ${FORMULAS.length} formulas…" aria-label="Filter formulas" autocomplete="off" spellcheck="false"></div>
  ${filterChips(FORMULA_CATS, cat, '#/formulas')}
  <div id="f-list">${body}</div>
  <p class="muted small" id="f-none" hidden>No formulas match.</p>`;
  return { html, tab: 'library' };
}
INPUT.filterFormulas = (el) => {
  const q = lc(el.value).trim();
  let any = 0;
  document.querySelectorAll('#f-list [data-group-list]').forEach((list) => {
    let shown = 0;
    for (const item of list.children) {
      const ok = !q || lc(item.textContent).includes(q);
      item.hidden = !ok;
      if (ok) shown++;
    }
    list.hidden = shown === 0;
    list.previousElementSibling.hidden = shown === 0;
    any += shown;
  });
  document.getElementById('f-none').hidden = any > 0;
};

// ---------- cheat sheets ----------
export function sheetsView() {
  const rows = SHEETS.map(
    (s) =>
      `<a class="row" href="#/sheet/${s.id}"><span class="lead">${icon('file', 18)}</span><div class="grow"><div class="title">${esc(s.title)}</div>${s.sub ? `<div class="meta">${esc(s.sub)}</div>` : ''}</div>${icon('chevR', 20, 'chev')}</a>`,
  ).join('');
  return {
    html: `${topbar('Cheat sheets', { back: '#/library', sub: 'Skim these in the elevator before you walk in' })}<div class="card flush">${rows}</div>`,
    tab: 'library',
  };
}
export function sheetView(id) {
  const s = SHEETS.find((x) => x.id === id);
  if (!s) return { html: topbar('Not found', { back: '#/sheets' }), tab: 'library' };
  const i = SHEETS.indexOf(s);
  const next = SHEETS[(i + 1) % SHEETS.length];
  return {
    html: `${topbar(s.title, { back: '#/sheets', sub: s.sub ? esc(s.sub) : '', small: true })}
    <div class="card md">${md(s.body)}</div>
    <a class="card row" href="#/sheet/${next.id}" style="border-radius:var(--radius)"><div class="grow"><div class="meta">Next sheet</div><div class="title">${esc(next.title)}</div></div>${icon('chevR', 20, 'chev')}</a>`,
    tab: 'library',
  };
}

// ---------- deal book ----------
export function dealsView() {
  const rows = DEALS.map(
    (d) =>
      `<a class="row" href="#/deal/${d.id}"><span class="lead">${icon('briefcase', 18)}</span><div class="grow"><div class="title">${esc(d.title)}</div><div class="meta">${esc(d.sector)} · ${esc(d.value)}</div><div class="meta">${esc(d.date)}</div></div>${icon('chevR', 20, 'chev')}</a>`,
  ).join('');
  return {
    html: `${topbar('Deal book', { back: '#/library', sub: 'Know 2–3 cold for “tell me about a deal”' })}
    <p class="note mb12">${icon('info', 16)}<span>${esc(DEALS_NOTE)}</span></p>
    <div class="card flush">${rows}</div>`,
    tab: 'library',
  };
}
export function dealView(id) {
  const d = DEALS.find((x) => x.id === id);
  if (!d) return { html: topbar('Not found', { back: '#/deals' }), tab: 'library' };
  return {
    html: `${topbar(d.title, { back: '#/deals', small: true, sub: esc(d.date) })}
    <div class="flex wrap mb12" style="gap:6px"><span class="tag">${esc(d.sector)}</span><span class="tag">${esc(d.value)}</span></div>
    <div class="card md">${md(d.body)}</div>
    <p class="note">${icon('info', 16)}<span>${esc(DEALS_NOTE)}</span></p>`,
    tab: 'library',
  };
}
