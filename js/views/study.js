// Study: deck hub, deck detail, flashcard / mock sessions, math drills,
// session summaries, single-card view and the "add card / log a miss" form.

import { S, save, gradeCard, GRADE, previewInterval, isStarred, toggleStar, recordDrill, bumpDaily, addCustomCard, logError, removeCustomCard } from '../store.js';
import { TOPICS, GROUPS, topic, deckCards, deckStats, deckQueue, quickQueue, mockQueue, openErrorQueue, dueQueue, cardById, dueCount, newCount, TECH_TOPICS } from '../content.js';
import { DRILL_CATS, nextProblem, checkAnswer, fmtAnswer } from '../drills.js';
import { ACT, SUBMIT, go, rerender, topbar, toast, segbar, segLegend, statusTag, starBtn, sectionLabel, empty, meter } from '../ui.js';
import { esc, md, icon, shuffle, fmtClock, fmtDur, plural, pct } from '../util.js';
import { allFirms } from './firms.js';

let SESSION = null; // active flashcard / mock session
let DRILL = null; // active drill set
let LAST = null; // finished session (for the summary screen)

// ---------- starting things ----------
export function startCards(ids, { title = 'Study', mode = 'cards', source = 'Flashcards', back = '#/study', again = null } = {}) {
  ids = [...new Set(ids)].filter((id) => cardById(id));
  if (!ids.length) {
    toast('Nothing to study here yet');
    return;
  }
  const now = Date.now();
  SESSION = { mode, title, ids, i: 0, revealed: false, results: [], started: now, qStart: now, lastAct: now, source, back, again };
  go('#/session');
}
export function startDrill(cat = 'mix', { onlyType = null, n = S.settings.drillSize, source = 'Math drill', back = '#/study' } = {}) {
  const now = Date.now();
  DRILL = { cat, onlyType, n, i: 0, problem: nextProblem(cat, null, onlyType), state: 'ask', result: null, results: [], started: now, lastAct: now, source, back };
  go('#/drill');
}

ACT.quick = () => startCards(quickQueue(10), { title: 'Quick 10', again: { type: 'quick' } });
ACT.dueNow = () => startCards(dueQueue(S.settings.sessionSize * 2), { title: 'Due now', again: { type: 'due' } });
ACT.mock = () => startCards(mockQueue(), { title: 'Mock superday', mode: 'mock', source: 'Mock superday', again: { type: 'mock' } });
ACT.practiceErrors = () =>
  startCards(openErrorQueue().slice(0, 20), { title: 'Error review', source: 'Error review', back: '#/errors', again: { type: 'errors' } });
ACT.starred = () => startCards(shuffle(deckCards('starred').map((c) => c.id)), { title: 'Starred', again: { type: 'starred' } });
ACT.drill = (el) => startDrill(el.dataset.cat || 'mix', { onlyType: el.dataset.type || null });
ACT.deckStudy = (el) => {
  const d = el.dataset.deck;
  startCards(deckQueue(d), { title: topic(d).short, back: `#/deck/${d}`, again: { type: 'deck', deck: d } });
};
ACT.deckCram = (el) => {
  const d = el.dataset.deck;
  startCards(shuffle(deckCards(d).map((c) => c.id)), { title: `${topic(d).short} · all`, back: `#/deck/${d}`, again: { type: 'cram', deck: d } });
};
ACT.practiceCard = (el) => startCards([el.dataset.id], { title: 'Practice', back: el.dataset.back || '#/study' });
ACT.star = (el) => {
  const on = toggleStar(el.dataset.id);
  el.classList.toggle('on', on);
  el.setAttribute('aria-pressed', String(on));
  el.setAttribute('aria-label', on ? 'Unstar' : 'Star');
  el.innerHTML = icon(on ? 'starFill' : 'star', 22);
  toast(on ? 'Starred — find it under Study › Starred' : 'Removed from starred');
};

// ---------- shared card rendering ----------
export function cardTopicLabel(card) {
  if (card.t === 'mine') return card.topic ? `My card · ${topic(card.topic).short}` : 'My card';
  if (card.t === 'terms') return 'Terminology';
  if (card.t === 'eq') return 'Equation';
  return topic(card.t).name;
}
export function cardAnswerHTML(card) {
  if (card.formula) {
    const f = card.formula;
    return `<div class="formula">${esc(f.f)}</div>${f.note ? `<p class="f-note">${esc(f.note)}</p>` : ''}${f.ex ? `<p class="f-ex">${esc(f.ex)}</p>` : ''}`;
  }
  return `<div class="md">${md(card.a)}</div>`;
}

// ---------- study hub ----------
export function studyView() {
  const due = dueCount();
  const nw = newCount();
  const errs = openErrorQueue().length;
  const stars = deckCards('starred').length;
  const groups = GROUPS.map((g) => {
    const rows = TOPICS.filter((t) => t.group === g.id)
      .map((t) => {
        const cards = deckCards(t.id);
        const st = deckStats(cards);
        const meta = t.id === 'mine' && !cards.length ? 'Add questions you fumbled or want to drill' : `${st.due ? `${st.due} due · ` : ''}${st.new} new · ${st.total} cards`;
        return `<a class="row" href="#/deck/${t.id}"><div class="grow"><div class="title">${esc(t.name)}</div><div class="meta">${meta}</div>${cards.length ? `<div class="mt8">${segbar(st)}</div>` : ''}</div>${icon('chevR', 20, 'chev')}</a>`;
      })
      .join('');
    return `${sectionLabel(g.name)}<div class="card flush">${rows}</div>`;
  }).join('');

  const html = `
  ${topbar('Study', { right: `<a class="icon-btn" href="#/add" aria-label="Add a card">${icon('plus', 24)}</a>` })}
  <button class="hero" data-act="quick">
    <div class="h-top">${icon('bolt', 18)} Mixed · due first, then new</div>
    <div class="h-title">Quick 10</div>
    <div class="h-sub">${due ? `${due} due for review` : 'Nothing due right now'} · ${nw} new cards left</div>
    <span class="h-go">Start ${icon('chevR', 16)}</span>
  </button>
  <div class="duo">
    <button class="action-tile" data-act="dueNow" ${due ? '' : 'disabled'}>${icon('clock')}<b>Due now</b><small>${due ? plural(due, 'card') : 'All caught up'}</small></button>
    <button class="action-tile" data-act="mock">${icon('mic')}<b>Mock superday</b><small>10 mixed Qs · timed</small></button>
    <button class="action-tile" data-act="practiceErrors" ${errs ? '' : 'disabled'}>${icon('alert')}<b>Fix my errors</b><small>${errs ? `${plural(errs, 'open miss', 'open misses')}` : 'No open misses'}</small></button>
    <button class="action-tile" data-act="starred" ${stars ? '' : 'disabled'}>${icon('star')}<b>Starred</b><small>${stars ? plural(stars, 'card') : 'Tap ☆ on any card'}</small></button>
  </div>
  ${sectionLabel('Math drills')}
  <div class="chips" id="drills">${DRILL_CATS.map((c) => `<button class="chip" data-act="drill" data-cat="${c.id}">${icon(c.id === 'mix' ? 'shuffle' : 'calc', 16)}${esc(c.name)}</button>`).join('')}</div>
  <div class="mt8">${segLegend()}</div>
  ${groups}
  `;
  return { html, tab: 'study' };
}

// ---------- deck detail ----------
export function deckView(tid) {
  const t = topic(tid);
  const cards = deckCards(tid);
  const st = deckStats(cards);
  const isMine = tid === 'mine';
  const right = isMine ? `<a class="icon-btn" href="#/add" aria-label="Add a card">${icon('plus', 24)}</a>` : '';
  if (!cards.length) {
    return {
      html:
        topbar(t.name, { back: '#/study', right }) +
        (isMine
          ? empty('note', 'No cards yet', 'Add questions you fumbled in interviews or want to drill. They join your spaced-repetition reviews automatically.', `<a class="btn" href="#/add">${icon('plus', 18)} Add a card</a>`)
          : empty('cards', 'No cards', 'Turn on “Include advanced cards” in Settings to see more.')),
      tab: 'study',
    };
  }
  const n = Math.min(S.settings.sessionSize, cards.length);
  const list = cards
    .map(
      (c) =>
        `<a class="row" href="#/card/${encodeURIComponent(c.id)}?from=${encodeURIComponent('#/deck/' + tid)}"><div class="grow"><div class="clamp2">${esc(c.q)}</div><div class="meta flex wrap" style="gap:6px;margin-top:6px">${statusTag(c.id)}${c.adv ? '<span class="tag adv">Advanced</span>' : ''}${isStarred(c.id) ? `<span class="tag">${icon('starFill', 12)} Starred</span>` : ''}</div></div>${icon('chevR', 20, 'chev')}</a>`,
    )
    .join('');
  const html = `
  ${topbar(t.name, { back: '#/study', right, sub: `${st.total} cards` })}
  <div class="card">
    <div class="flex between small text-2 mb8"><span><b class="text-2">${pct(st.mastered, st.total)}%</b> mastered</span><span>${st.acc === null ? 'No answers yet' : `${st.acc}% accuracy`}</span><span>${st.due} due</span></div>
    ${segbar(st)}
    <div class="btn-row mt16">
      <button class="btn" data-act="deckStudy" data-deck="${tid}">${icon('bolt', 18)} Study ${n}</button>
      <button class="btn secondary" data-act="deckCram" data-deck="${tid}">${icon('shuffle', 18)} All ${st.total}</button>
    </div>
    <p class="tiny muted mt12">“Study” serves due cards first, then new ones, then your weakest. “All” shuffles the whole deck.</p>
  </div>
  ${segLegend()}
  <div class="card flush">${list}</div>`;
  return { html, tab: 'study' };
}

// ---------- flashcard session ----------
function gradeButtons(card) {
  const when = (g) => {
    const d = previewInterval(card.id, g);
    return g === GRADE.MISSED ? 'to error log' : d === 1 ? 'see tomorrow' : `see in ${d} days`;
  };
  return `<div class="grades">
    <button class="grade miss" data-act="grade" data-g="0"><span class="gi">${icon('x', 18)}Missed</span><small>${when(0)}</small></button>
    <button class="grade shaky" data-act="grade" data-g="1"><span class="gi">${icon('retry', 17)}Shaky</span><small>${when(1)}</small></button>
    <button class="grade got" data-act="grade" data-g="2"><span class="gi">${icon('check', 18)}Got it</span><small>${when(2)}</small></button>
  </div>`;
}

export function sessionView() {
  const s = SESSION;
  if (!s) return { redirect: '#/study' };
  const card = cardById(s.ids[s.i]);
  if (!card) {
    s.ids.splice(s.i, 1);
    if (s.i >= s.ids.length) return finishSession();
    return sessionView();
  }
  const n = s.ids.length;
  const mock = s.mode === 'mock';
  const html = `
  <div class="s-top">
    <button class="icon-btn" data-act="endSession" aria-label="End session">${icon('x', 24)}</button>
    <div class="s-prog">
      <div class="s-count"><span>${esc(s.title)}</span><span>${s.i + 1} / ${n}${mock ? ` · <span class="timer" id="timer">${fmtClock(Date.now() - s.qStart)}</span>` : ''}</span></div>
      ${meter((s.i / n) * 100, 'Session progress')}
    </div>
    ${starBtn(card.id, isStarred(card.id))}
  </div>
  <article class="fc">
    <div class="fc-meta"><span class="tag">${esc(cardTopicLabel(card))}</span>${card.adv ? '<span class="tag adv">Advanced</span>' : ''}${statusTag(card.id)}</div>
    <h2 class="fc-q">${esc(card.q)}</h2>
    ${
      s.revealed
        ? `<div class="fc-hr"></div><div class="fc-a">${cardAnswerHTML(card)}</div>`
        : `<p class="fc-hint">${icon(mock ? 'mic' : 'eye', 18)} ${mock ? 'Answer out loud as if you were in the room (aim for under 90 seconds), then reveal.' : 'Say your answer (out loud is best), then reveal.'}</p>`
    }
  </article>
  <div class="actionbar"><div class="inner">
    ${s.revealed ? gradeButtons(card) : `<button class="btn block lg" data-act="reveal">Show answer</button>`}
    <div class="kbd-hint">${s.revealed ? 'Keys: 1 missed · 2 shaky · 3 got it' : 'Space to reveal · Esc to end'}</div>
  </div></div>`;
  return {
    html,
    immersive: true,
    mount: mock
      ? () => {
          const id = setInterval(() => {
            const el = document.getElementById('timer');
            if (el && SESSION) el.textContent = fmtClock(Date.now() - SESSION.qStart);
          }, 1000);
          return () => clearInterval(id);
        }
      : null,
  };
}

ACT.reveal = () => {
  if (!SESSION) return;
  SESSION.revealed = true;
  rerender();
};
ACT.grade = (el) => gradeCurrent(Number(el.dataset.g));
function gradeCurrent(g) {
  const s = SESSION;
  if (!s || !s.revealed) return;
  const card = cardById(s.ids[s.i]);
  const now = Date.now();
  gradeCard(card, g, s.mode === 'mock' ? 'Mock superday' : s.source);
  bumpDaily({ s: Math.min(now - s.lastAct, 120000) / 1000 });
  save();
  s.results.push({ id: card.id, g, ms: now - s.qStart });
  s.lastAct = now;
  s.qStart = now;
  s.i++;
  s.revealed = false;
  if (s.i >= s.ids.length) {
    finishSession();
    return;
  }
  rerender();
  window.scrollTo(0, 0);
}
function finishSession() {
  const s = SESSION;
  SESSION = null;
  if (s && s.results.length) {
    LAST = { ...s, kind: 'cards', ended: Date.now() };
    go('#/summary');
  } else go(s?.back || '#/study');
  return { redirect: null };
}
ACT.endSession = () => finishSession();

/** Keyboard support for sessions (desktop / iPad keyboards). */
export function sessionKey(e) {
  if (location.hash.startsWith('#/session') && SESSION) {
    if ((e.key === ' ' || e.key === 'Enter') && !SESSION.revealed) {
      e.preventDefault();
      ACT.reveal();
    } else if (SESSION.revealed && ['1', '2', '3'].includes(e.key)) {
      e.preventDefault();
      gradeCurrent(Number(e.key) - 1);
    } else if (e.key === 'Escape') finishSession();
  } else if (location.hash.startsWith('#/drill') && DRILL) {
    if (e.key === 'Enter' && DRILL.state === 'checked') {
      e.preventDefault();
      ACT.nextDrill();
    } else if (e.key === 'Escape') ACT.endDrill();
  }
}

// ---------- drills ----------
const UNIT_LABEL = { '%': '%', x: 'x', $: '$', $M: '$M', $B: '$B', M: 'M', yrs: 'yrs', bp: 'bp' };
const SIGNED = new Set(['accrete', 'accdebt', 'twos10s', 'aum']);

export function drillView() {
  const d = DRILL;
  if (!d) return { redirect: '#/study' };
  const p = d.problem;
  const catName = DRILL_CATS.find((c) => c.id === p.topic)?.name || 'Drill';
  const setName = d.onlyType ? p.title : DRILL_CATS.find((c) => c.id === d.cat)?.name || 'Mixed';
  let body = '';
  if (d.state === 'ask') {
    if (p.choices) {
      body = `<div class="mc">${p.choices.map((c, i) => `<button class="btn plain" data-act="pickDrill" data-i="${i}">${esc(c)}</button>`).join('')}</div>`;
    } else {
      body = `<form class="answer-row" data-submit="checkDrill" autocomplete="off" novalidate>
        <div class="inp"><input id="drill-in" name="ans" type="text" inputmode="decimal" enterkeyhint="go" placeholder="Your answer" aria-label="Your answer" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><span class="unit">${esc(UNIT_LABEL[p.unit] || '')}</span></div>
        ${SIGNED.has(p.type) ? `<button class="btn plain" type="button" data-act="negate" aria-label="Toggle minus sign" style="padding:0 14px">±</button>` : ''}
        <button class="btn" type="submit">Check</button>
      </form>
      <button class="linklike" data-act="revealDrill">Not sure — show the solution</button>`;
    }
  } else if (d.state === 'revealed') {
    body = `<div class="solution"><div class="label">Solution · answer ${esc(fmtAnswer(p))}</div><div class="md">${md(p.solution)}</div></div>
    <p class="small text-2 mt12">Did you have it?</p>
    <div class="btn-row mt8"><button class="btn danger" data-act="selfGradeDrill" data-ok="0">${icon('x', 18)} Missed</button><button class="btn secondary" data-act="selfGradeDrill" data-ok="1">${icon('check', 18)} Got it</button></div>`;
  } else {
    const r = d.result;
    body = `<div class="result ${r.ok ? 'ok' : 'bad'}">${icon(r.ok ? 'check' : 'x', 20)}<div>${
      r.ok ? `Correct — ${esc(fmtAnswer(p))}` : `${r.input != null && r.input !== '' && !r.self ? `You said ${esc(String(r.input))}. ` : ''}Answer: ${esc(fmtAnswer(p))}${r.self ? '' : ' · logged to your error log'}`
    }</div></div>
    <div class="solution"><div class="label">How to get there</div><div class="md">${md(p.solution)}</div></div>`;
  }
  const last = d.i + 1 >= d.n;
  const html = `
  <div class="s-top">
    <button class="icon-btn" data-act="endDrill" aria-label="End drill">${icon('x', 24)}</button>
    <div class="s-prog">
      <div class="s-count"><span>Drill · ${esc(setName)}</span><span>${d.i + 1} / ${d.n}</span></div>
      ${meter((d.i / d.n) * 100, 'Drill progress')}
    </div>
  </div>
  <article class="fc">
    <div class="fc-meta"><span class="tag">${esc(catName)}</span><span class="tag">${esc(p.title)}</span></div>
    <p class="fc-q" style="font-size:18.5px">${esc(p.q)}</p>
    ${body}
  </article>
  ${d.state === 'checked' ? `<div class="actionbar"><div class="inner"><button class="btn block lg" data-act="nextDrill">${last ? 'See results' : 'Next problem'} ${icon('chevR', 18)}</button></div></div>` : ''}`;
  return { html, immersive: true };
}

ACT.negate = () => {
  const inp = document.getElementById('drill-in');
  if (!inp) return;
  const v = inp.value.trim();
  inp.value = v.startsWith('-') ? v.slice(1) : '-' + v;
  inp.focus();
};
SUBMIT.checkDrill = (form) => {
  const v = form.querySelector('input').value;
  const r = checkAnswer(DRILL.problem, v);
  if (!r.valid) {
    toast('Type a number, e.g. 3.25');
    return;
  }
  finishDrillQ(r.ok, v.trim());
};
ACT.pickDrill = (el) => {
  const i = Number(el.dataset.i);
  finishDrillQ(i === DRILL.problem.answerIdx, DRILL.problem.choices[i]);
};
ACT.revealDrill = () => {
  if (!DRILL) return;
  DRILL.state = 'revealed';
  rerender();
};
ACT.selfGradeDrill = (el) => finishDrillQ(el.dataset.ok === '1', null, true);
function finishDrillQ(ok, input, self = false) {
  const d = DRILL;
  if (!d || d.state === 'checked') return;
  const now = Date.now();
  recordDrill(d.problem, ok, d.source);
  bumpDaily({ s: Math.min(now - d.lastAct, 180000) / 1000 });
  save();
  d.lastAct = now;
  d.state = 'checked';
  d.result = { ok, input, self };
  d.results.push({ problem: d.problem, ok, input });
  rerender();
}
ACT.nextDrill = () => {
  const d = DRILL;
  if (!d) return;
  d.i++;
  if (d.i >= d.n) return finishDrill();
  d.problem = nextProblem(d.cat, d.problem.type, d.onlyType);
  d.state = 'ask';
  d.result = null;
  rerender();
  window.scrollTo(0, 0);
};
function finishDrill() {
  const d = DRILL;
  DRILL = null;
  if (d && d.results.length) {
    LAST = { ...d, kind: 'drill', ended: Date.now() };
    go('#/summary');
  } else go(d?.back || '#/study');
}
ACT.endDrill = () => finishDrill();

// ---------- summary ----------
export function summaryView() {
  const L = LAST;
  if (!L) return { redirect: '#/home' };
  const secs = (L.ended - L.started) / 1000;
  if (L.kind === 'drill') {
    const ok = L.results.filter((r) => r.ok).length;
    const rows = L.results
      .map(
        (r) =>
          `<div class="row" style="cursor:default"><span class="lead" style="background:${r.ok ? 'var(--good-soft)' : 'var(--critical-soft)'};color:${r.ok ? 'var(--good)' : 'var(--critical)'}">${icon(r.ok ? 'check' : 'x', 18)}</span><div class="grow"><div class="title">${esc(r.problem.title)}</div><div class="meta">Answer ${esc(fmtAnswer(r.problem))}${!r.ok && r.input ? ` · you said ${esc(String(r.input))}` : ''}</div></div></div>`,
      )
      .join('');
    return {
      html: `${topbar('Drill complete', { sub: `${ok} of ${L.results.length} correct · ${fmtDur(secs)}` })}
      <div class="kpis">
        <div class="kpi"><div class="k-label">${icon('check', 16)} Correct</div><div class="k-value">${ok}<small> / ${L.results.length}</small></div></div>
        <div class="kpi"><div class="k-label">${icon('clock', 16)} Time</div><div class="k-value">${fmtDur(secs)}</div><div class="k-sub">${fmtDur(secs / L.results.length)} per problem</div></div>
      </div>
      <div class="card flush">${rows}</div>
      ${L.results.some((r) => !r.ok) ? `<p class="note small mb12">${icon('info', 16)}<span>Misses are in your error log with the worked solution. They clear after 3 correct answers of that type in a row.</span></p>` : ''}
      <div class="stack">
        <button class="btn block lg" data-act="drill" data-cat="${L.cat}" ${L.onlyType ? `data-type="${L.onlyType}"` : ''}>${icon('retry', 18)} Another set</button>
        <div class="btn-row"><a class="btn secondary" href="#/study">Other drills</a><a class="btn plain" href="#/home">Done</a></div>
      </div>`,
      tab: 'study',
    };
  }
  const got = L.results.filter((r) => r.g === GRADE.GOT).length;
  const shaky = L.results.filter((r) => r.g === GRADE.SHAKY).length;
  const missed = L.results.filter((r) => r.g === GRADE.MISSED).length;
  const weak = L.results.filter((r) => r.g !== GRADE.GOT);
  const mock = L.mode === 'mock';
  const label = ['Missed', 'Shaky', 'Got it'];
  const color = ['var(--critical)', '#c98500', 'var(--good)'];
  const ic = ['x', 'retry', 'check'];
  const list = (mock ? L.results : weak)
    .map((r) => {
      const c = cardById(r.id);
      if (!c) return '';
      return `<a class="row" href="#/card/${encodeURIComponent(r.id)}?from=${encodeURIComponent('#/summary')}"><span style="color:${color[r.g]}" class="flex">${icon(ic[r.g], 18)}</span><div class="grow"><div class="clamp2">${esc(c.q)}</div><div class="meta">${label[r.g]}${mock ? ` · ${fmtClock(r.ms)}${r.ms > 90000 ? ' (long — tighten it)' : ''}` : ''}</div></div>${icon('chevR', 20, 'chev')}</a>`;
    })
    .join('');
  const avg = L.results.reduce((a, r) => a + r.ms, 0) / L.results.length;
  const html = `
  ${topbar(mock ? 'Mock complete' : 'Nice work', { sub: `${esc(L.title)} · ${L.results.length} cards · ${fmtDur(secs)}` })}
  <div class="kpis">
    <div class="kpi"><div class="k-label" ><span style="color:var(--good)">${icon('check', 16)}</span> Got it</div><div class="k-value">${got}<small> / ${L.results.length}</small></div></div>
    <div class="kpi"><div class="k-label"><span style="color:#c98500">${icon('retry', 16)}</span> Shaky · <span style="color:var(--critical)">${icon('x', 16)}</span> Missed</div><div class="k-value">${shaky}<small> · </small>${missed}</div><div class="k-sub">Missed cards went to your error log</div></div>
    ${mock ? `<div class="kpi"><div class="k-label">${icon('clock', 16)} Avg per answer</div><div class="k-value">${fmtClock(avg)}</div><div class="k-sub">Aim for 60–90s on technicals</div></div><div class="kpi"><div class="k-label">${icon('target', 16)} Score</div><div class="k-value">${pct(got, L.results.length)}%</div><div class="k-sub">Got it ÷ questions</div></div>` : ''}
  </div>
  ${list ? `${sectionLabel(mock ? 'Your answers' : 'Worth another look')}<div class="card flush">${list}</div>` : `<div class="card empty">${icon('check', 30)}<h3>Clean sweep</h3><p class="small">Everything graded “Got it”.</p></div>`}
  <div class="stack mt16">
    ${weak.length ? `<button class="btn block lg" data-act="retryWeak">${icon('retry', 18)} Retry ${plural(weak.length, 'miss', 'misses')} & shaky</button>` : ''}
    <div class="btn-row"><button class="btn secondary" data-act="again">${icon('bolt', 18)} Another round</button><a class="btn plain" href="#/home">Done</a></div>
  </div>`;
  return { html, tab: 'study' };
}
ACT.retryWeak = () => {
  if (!LAST) return;
  startCards(
    LAST.results.filter((r) => r.g !== GRADE.GOT).map((r) => r.id),
    { title: 'Retry', back: LAST.back, source: LAST.source },
  );
};
ACT.again = () => {
  const a = LAST?.again || { type: 'quick' };
  if (a.type === 'deck') return ACT.deckStudy({ dataset: { deck: a.deck } });
  if (a.type === 'cram') return ACT.deckCram({ dataset: { deck: a.deck } });
  if (a.type === 'mock') return ACT.mock();
  if (a.type === 'errors') return ACT.practiceErrors();
  if (a.type === 'starred') return ACT.starred();
  if (a.type === 'due') return ACT.dueNow();
  return ACT.quick();
};

// ---------- single card ----------
let revealedCard = null;
export function cardView(id, params) {
  const card = cardById(id);
  const from = params.get('from') || '#/study';
  if (!card) return { html: topbar('Card not found', { back: from }) + empty('cards', 'This card no longer exists', ''), tab: 'study' };
  const shown = revealedCard === id;
  const html = `
  ${topbar('Card', { back: from, right: starBtn(card.id, isStarred(card.id)) })}
  <article class="fc" style="min-height:auto">
    <div class="fc-meta"><span class="tag">${esc(cardTopicLabel(card))}</span>${card.adv ? '<span class="tag adv">Advanced</span>' : ''}${statusTag(card.id)}</div>
    <h2 class="fc-q">${esc(card.q)}</h2>
    ${shown ? `<div class="fc-hr"></div><div class="fc-a">${cardAnswerHTML(card)}</div>` : `<button class="btn block mt16" data-act="showCard" data-id="${esc(id)}">Show answer</button>`}
  </article>
  <div class="btn-row mt12">
    <button class="btn secondary" data-act="practiceCard" data-id="${esc(id)}" data-back="${esc(from)}">${icon('bolt', 18)} Practice & grade</button>
    ${card.t === 'mine' ? `<button class="btn danger" data-act="deleteCard" data-id="${esc(id)}">${icon('trash', 18)} Delete</button>` : ''}
  </div>`;
  return { html, tab: 'study' };
}
ACT.showCard = (el) => {
  revealedCard = el.dataset.id;
  rerender();
};
ACT.deleteCard = (el) => {
  if (!confirm('Delete this card and its history?')) return;
  removeCustomCard(el.dataset.id);
  toast('Card deleted');
  go('#/deck/mine');
};

// ---------- add card / log a miss ----------
const WHERE = ['Mock interview', 'First-round interview', 'Superday', 'Coffee chat / networking', 'Self-study', 'Other'];
export function addView(params) {
  const miss = params.get('mode') === 'miss';
  const topicOpts = TOPICS.filter((t) => TECH_TOPICS.includes(t.id))
    .map((t) => `<option value="${t.id}">${esc(t.name)}</option>`)
    .join('');
  const firms = allFirms()
    .map((f) => `<option value="${esc(f.id)}">${esc(f.name)}</option>`)
    .join('');
  const html = `
  ${topbar(miss ? 'Log a miss' : 'New card', { back: miss ? '#/errors' : '#/deck/mine' })}
  ${miss ? `<p class="note mb12">${icon('info', 16)}<span>Fumbled something in an interview, coffee chat or mock? Capture it while it's fresh. It becomes a flashcard and stays in your error log until you get it right twice in a row.</span></p>` : ''}
  <form class="card" data-submit="saveCard" data-miss="${miss ? 1 : 0}" novalidate>
    <div class="field"><label for="f-q">${miss ? 'What were you asked?' : 'Question'}</label><textarea id="f-q" name="q" rows="3" placeholder="${miss ? 'e.g. How would a 100bp rate cut affect a liability-sensitive bank?' : 'Front of the card'}" required></textarea></div>
    <div class="field"><label for="f-a">${miss ? 'The right answer / key takeaway' : 'Answer'}</label><textarea id="f-a" name="a" rows="5" placeholder="Bullets work: start lines with - " required></textarea></div>
    <div class="field"><label for="f-t">Topic</label><select id="f-t" name="topic"><option value="">General</option>${topicOpts}</select></div>
    ${
      miss
        ? `<div class="field"><label for="f-w">Where did it come up?</label><select id="f-w" name="where">${WHERE.map((w) => `<option>${esc(w)}</option>`).join('')}</select></div>
    <div class="field"><label for="f-f">Firm (optional)</label><select id="f-f" name="firm"><option value="">—</option>${firms}</select></div>
    <div class="field"><label for="f-n">Why you missed it (optional)</label><textarea id="f-n" name="note" rows="2" placeholder="e.g. Mixed up asset- vs liability-sensitive"></textarea></div>`
        : ''
    }
    <button class="btn block lg" type="submit">${icon('check', 18)} Save</button>
  </form>`;
  return { html, tab: miss ? 'errors' : 'study' };
}
SUBMIT.saveCard = (form) => {
  const fd = new FormData(form);
  const q = String(fd.get('q') || '').trim();
  const a = String(fd.get('a') || '').trim();
  if (!q || !a) {
    toast('Add both a question and an answer');
    return;
  }
  const card = addCustomCard({ q, a, topic: String(fd.get('topic') || '') });
  if (form.dataset.miss === '1') {
    const firm = allFirms().find((f) => f.id === fd.get('firm'));
    logError({ key: 'card:' + card.id, kind: 'card', ref: card.id, topic: 'mine', q, source: [fd.get('where'), firm?.name].filter(Boolean).join(' · ') });
    const note = String(fd.get('note') || '').trim();
    if (note) S.errors['card:' + card.id].note = note;
    save();
    toast('Logged — it will come back in your reviews');
    go('#/errors');
  } else {
    toast('Card added to My Cards');
    go('#/deck/mine');
  }
};
