// Error log + progress dashboard.

import { S, save, setErrorStatus, streak, bestStreak, today, lastDays, FIX_NEEDED } from '../store.js';
import { TOPICS, TECH_TOPICS, topic, deckCards, deckStats, techCards, cardById, openErrorQueue } from '../content.js';
import { DRILL_CATS, drillTitle } from '../drills.js';
import { ACT, INPUT, go, rerender, topbar, toast, sectionLabel, empty, segbar, segLegend, meter } from '../ui.js';
import { esc, md, icon, relTime, fmtDur, fmtDate, pct, plural, parseKey } from '../util.js';
import { startCards, startDrill, cardAnswerHTML } from './study.js';

// ---------- error log ----------
function errTopicLabel(e) {
  if (e.kind === 'drill') return `Drill · ${DRILL_CATS.find((c) => c.id === e.topic)?.name || 'Math'}`;
  if (e.topic === 'mine') {
    const c = cardById(e.ref);
    return c?.topic ? `My card · ${topic(c.topic).short}` : 'My card';
  }
  return topic(e.topic).short;
}
function errQuestion(e) {
  if (e.kind === 'drill') return e.title || drillTitle(e.ref);
  return cardById(e.ref)?.q || e.q || '(deleted card)';
}

export function errorsView(params) {
  const f = params.get('f') || 'open';
  const all = Object.values(S.errors);
  const open = all.filter((e) => e.status === 'open');
  const resolved = all.filter((e) => e.status === 'resolved');
  const shown = (f === 'open' ? open : f === 'resolved' ? resolved : all).sort(
    (a, b) => (a.status === b.status ? 0 : a.status === 'open' ? -1 : 1) || b.last - a.last,
  );
  const cardOpen = openErrorQueue().length;
  const byTopic = {};
  open.forEach((e) => {
    const k = errTopicLabel(e);
    byTopic[k] = (byTopic[k] || 0) + 1;
  });
  const top = Object.entries(byTopic).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const drillOpen = open.filter((e) => e.kind === 'drill');

  const items = shown
    .map((e) => {
      const isOpen = e.status === 'open';
      const need = FIX_NEEDED[e.kind] || 2;
      const card = e.kind === 'card' ? cardById(e.ref) : null;
      const answer =
        e.kind === 'drill'
          ? `<div class="label">Last missed problem</div><p class="mb8">${esc(e.q)}</p><div class="md">${md(e.a)}</div>`
          : `<div class="label">Answer</div>${card ? cardAnswerHTML(card) : `<div class="md">${md(e.a || '')}</div>`}`;
      return `<details class="err">
        <summary>
          <span class="e-icon ${isOpen ? 'open' : 'res'}">${icon(isOpen ? 'alert' : 'check', 20)}</span>
          <div class="grow" style="min-width:0">
            <div class="e-q clamp2">${esc(errQuestion(e))}</div>
            <div class="e-meta"><span class="tag">${esc(errTopicLabel(e))}</span><span>Missed ${e.count}×</span><span>· ${relTime(e.last)}</span>${e.source ? `<span>· ${esc(e.source)}</span>` : ''}${e.note ? `<span>· ${icon('note', 13)} note</span>` : ''}${isOpen && e.fix ? `<span>· ${e.fix}/${need} right in a row</span>` : ''}${!isOpen && e.auto ? '<span>· cleared by practice</span>' : ''}</div>
          </div>
          ${icon('chevR', 18, 'chev')}
        </summary>
        <div class="e-body">
          <div class="solution">${answer}</div>
          <div class="field mt12"><label for="n-${esc(e.key)}">Why I missed it / what to remember</label><textarea id="n-${esc(e.key)}" rows="3" data-input="errNote" data-key="${esc(e.key)}" placeholder="e.g. Confused provision (P&L) with charge-off (balance sheet)">${esc(e.note || '')}</textarea></div>
          <div class="btn-row">
            <button class="btn sm" data-act="errPractice" data-key="${esc(e.key)}">${icon('bolt', 16)} Practice</button>
            <button class="btn sm secondary" data-act="errToggle" data-key="${esc(e.key)}">${isOpen ? `${icon('check', 16)} Resolve` : `${icon('retry', 16)} Reopen`}</button>
            <button class="btn sm danger" data-act="errDelete" data-key="${esc(e.key)}" aria-label="Delete entry">${icon('trash', 16)}</button>
          </div>
        </div>
      </details>`;
    })
    .join('');

  const seg = (id, label, n) => `<button class="${f === id ? 'on' : ''}" data-act="errFilter" data-f="${id}">${label} (${n})</button>`;
  const html = `
  ${topbar('Error log', { right: `<a class="icon-btn" href="#/add?mode=miss" aria-label="Log a miss">${icon('plus', 24)}</a>` })}
  <div class="card">
    <div class="flex between">
      <div><div class="kpi-inline" style="font-size:30px;font-weight:650;line-height:1.1">${open.length}</div><div class="small text-2">open</div></div>
      <div><div style="font-size:30px;font-weight:650;line-height:1.1">${resolved.length}</div><div class="small text-2">resolved</div></div>
      <div><div style="font-size:30px;font-weight:650;line-height:1.1">${all.reduce((a, e) => a + e.count, 0)}</div><div class="small text-2">total misses</div></div>
    </div>
    ${top.length ? `<p class="small text-2 mt12">Most open misses: ${top.map(([k, n]) => `<b>${esc(k)}</b> (${n})`).join(', ')}</p>` : ''}
    <div class="stack mt12">
      <button class="btn block" data-act="practiceErrors" ${cardOpen ? '' : 'disabled'}>${icon('bolt', 18)} Practice ${cardOpen ? plural(cardOpen, 'open card') : 'open cards'}</button>
      ${drillOpen.length ? `<button class="btn block secondary" data-act="errDrills">${icon('calc', 18)} Re-drill ${plural(drillOpen.length, 'weak math type')}</button>` : ''}
    </div>
  </div>
  <div class="seg mb12" role="tablist">${seg('open', 'Open', open.length)}${seg('resolved', 'Resolved', resolved.length)}${seg('all', 'All', all.length)}</div>
  ${
    items
      ? `<div class="card flush">${items}</div>`
      : all.length
        ? empty('check', f === 'open' ? 'No open misses' : 'Nothing here', f === 'open' ? 'Everything you missed has been fixed. Keep reviewing to keep it that way.' : '')
        : empty(
            'alert',
            'No misses logged yet',
            'When you tap <b>Missed</b> on a flashcard or get a drill wrong, it lands here with the answer. Add a note on why, and it clears itself after you get it right twice in a row. You can also log questions you fumbled in real interviews.',
            `<a class="btn" href="#/add?mode=miss">${icon('plus', 18)} Log a miss</a>`,
          )
  }
  <p class="tiny muted mt12">Cards clear after ${FIX_NEEDED.card} correct answers in a row; drill types after ${FIX_NEEDED.drill}.</p>`;
  return { html, tab: 'errors' };
}
ACT.errFilter = (el) => go(`#/errors?f=${el.dataset.f}`);
INPUT.errNote = (el) => {
  const e = S.errors[el.dataset.key];
  if (!e) return;
  e.note = el.value;
  save();
};
ACT.errToggle = (el) => {
  const e = S.errors[el.dataset.key];
  if (!e) return;
  setErrorStatus(e.key, e.status === 'open' ? 'resolved' : 'open');
  toast(e.status === 'resolved' ? 'Marked resolved' : 'Reopened');
  rerender();
};
ACT.errDelete = (el) => {
  const key = el.dataset.key;
  const e = S.errors[key];
  if (!e) return;
  delete S.errors[key];
  save();
  rerender();
  toast('Entry deleted', 'Undo', () => {
    S.errors[key] = e;
    save();
    rerender();
  });
};
ACT.errPractice = (el) => {
  const e = S.errors[el.dataset.key];
  if (!e) return;
  if (e.kind === 'drill') startDrill(e.topic, { onlyType: e.ref, back: '#/errors', source: 'Error review' });
  else startCards([e.ref], { title: 'Error review', back: '#/errors', source: 'Error review' });
};
ACT.errDrills = () => {
  const types = Object.values(S.errors)
    .filter((e) => e.status === 'open' && e.kind === 'drill')
    .sort((a, b) => b.count - a.count);
  if (!types.length) return;
  // Drill the most-missed type; the rest are one tap away in the list.
  startDrill(types[0].topic, { onlyType: types[0].ref, back: '#/errors', source: 'Error review' });
};

// ---------- progress ----------
function activityChart(days, goal) {
  const W = 320;
  const H = 156;
  const top = 20;
  const bottom = 22;
  const ph = H - top - bottom;
  const n = days.length;
  const slot = (W - 8) / n;
  const bw = Math.min(14, slot - 6);
  const vals = days.map((d) => (d.c || 0) + (d.d || 0));
  const max = Math.max(goal, ...vals, 5);
  const y = (v) => top + ph - (v / max) * ph;
  const base = top + ph;
  const maxV = Math.max(...vals);
  const maxI = vals.lastIndexOf(maxV);
  let bars = '';
  days.forEach((d, i) => {
    const v = vals[i];
    const x = 4 + i * slot + (slot - bw) / 2;
    const label = `${fmtDate(d.key, true)}: ${v} ${v === 1 ? 'item' : 'items'} (${d.c || 0} cards, ${d.d || 0} drills)`;
    bars += `<rect class="bar-hit" x="${(4 + i * slot).toFixed(1)}" y="${top - 16}" width="${slot.toFixed(1)}" height="${ph + 16}" tabindex="0" role="img" aria-label="${esc(label)}" data-i="${i}"></rect>`;
    if (v > 0) {
      const yt = y(v);
      const h = base - yt;
      const r = Math.min(4, h, bw / 2);
      bars += `<path class="bar" data-bar="${i}" d="M${x.toFixed(1)},${base} V${(yt + r).toFixed(1)} Q${x.toFixed(1)},${yt.toFixed(1)} ${(x + r).toFixed(1)},${yt.toFixed(1)} H${(x + bw - r).toFixed(1)} Q${(x + bw).toFixed(1)},${yt.toFixed(1)} ${(x + bw).toFixed(1)},${(yt + r).toFixed(1)} V${base} Z"></path>`;
      if (i === n - 1 || i === maxI) bars += `<text class="val" x="${(x + bw / 2).toFixed(1)}" y="${(yt - 5).toFixed(1)}" text-anchor="middle">${v}</text>`;
    }
  });
  const gy = y(goal);
  const xl = (i, anchor, text) => `<text x="${(4 + i * slot + slot / 2).toFixed(1)}" y="${H - 6}" text-anchor="${anchor}">${esc(text)}</text>`;
  const svg = `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Items studied per day, last ${n} days">
    <line class="gridline" x1="4" x2="${W - 4}" y1="${gy.toFixed(1)}" y2="${gy.toFixed(1)}"></line>
    <text x="${W - 4}" y="${(gy - 4).toFixed(1)}" text-anchor="end">Goal ${goal}</text>
    ${bars}
    <line class="baseline" x1="4" x2="${W - 4}" y1="${base}" y2="${base}"></line>
    ${xl(0, 'start', fmtDate(days[0].key))}${xl(Math.floor(n / 2), 'middle', fmtDate(days[Math.floor(n / 2)].key))}${xl(n - 1, 'end', 'Today')}
  </svg>`;
  const table = `<details class="mt8"><summary class="small linklike" style="padding:4px 0">Show as table</summary>
    <table class="data mt8"><thead><tr><th>Day</th><th>Cards</th><th>Drills</th><th>Correct</th><th>Time</th></tr></thead><tbody>
    ${days
      .slice()
      .reverse()
      .map((d) => `<tr><td>${fmtDate(d.key, true)}</td><td>${d.c || 0}</td><td>${d.d || 0}</td><td>${(d.c || 0) + (d.d || 0) ? pct((d.cg || 0) + (d.dg || 0), (d.c || 0) + (d.d || 0)) + '%' : '—'}</td><td>${d.s ? fmtDur(d.s) : '—'}</td></tr>`)
      .join('')}
    </tbody></table></details>`;
  return `<div class="chart" id="act-chart">${svg}<div class="tooltip" id="act-tip" hidden></div></div>${table}`;
}
function mountChart(days) {
  const box = document.getElementById('act-chart');
  if (!box) return;
  const tip = document.getElementById('act-tip');
  const svg = box.querySelector('svg');
  const show = (el) => {
    const i = Number(el.dataset.i);
    const d = days[i];
    const v = (d.c || 0) + (d.d || 0);
    box.querySelectorAll('.bar.hl').forEach((b) => b.classList.remove('hl'));
    box.querySelector(`.bar[data-bar="${i}"]`)?.classList.add('hl');
    tip.innerHTML = '';
    const b = document.createElement('b');
    b.textContent = `${v} ${v === 1 ? 'item' : 'items'}`;
    const sub = document.createElement('div');
    sub.className = 'tt-sub';
    sub.textContent = `${fmtDate(d.key, true)} · ${d.c || 0} cards, ${d.d || 0} drills`;
    tip.append(b, sub);
    tip.hidden = false;
    const r = el.getBoundingClientRect();
    const br = box.getBoundingClientRect();
    const sr = svg.getBoundingClientRect();
    const scale = sr.height / 156;
    let cx = r.left - br.left + r.width / 2;
    const tw = tip.offsetWidth;
    cx = Math.max(tw / 2, Math.min(br.width - tw / 2, cx));
    tip.style.left = `${cx}px`;
    tip.style.top = `${Math.max(0, 6 * scale)}px`;
  };
  const hide = () => {
    tip.hidden = true;
    box.querySelectorAll('.bar.hl').forEach((b) => b.classList.remove('hl'));
  };
  box.querySelectorAll('.bar-hit').forEach((el) => {
    el.addEventListener('pointerenter', () => show(el));
    el.addEventListener('pointerdown', () => show(el));
    el.addEventListener('focus', () => show(el));
    el.addEventListener('blur', hide);
  });
  box.addEventListener('pointerleave', hide);
}

export function progressView() {
  const goal = S.settings.dailyGoal;
  const t = today();
  const doneToday = (t.c || 0) + (t.d || 0);
  const days14 = lastDays(14);
  const last7 = days14.slice(7);
  const prev7 = days14.slice(0, 7);
  const acc = (arr) => {
    const n = arr.reduce((a, d) => a + (d.c || 0) + (d.d || 0), 0);
    const ok = arr.reduce((a, d) => a + (d.cg || 0) + (d.dg || 0), 0);
    return n ? { v: Math.round((100 * ok) / n), n } : null;
  };
  const a7 = acc(last7);
  const ap = acc(prev7);
  const delta = a7 && ap ? a7.v - ap.v : null;
  const secs7 = last7.reduce((a, d) => a + (d.s || 0), 0);
  const secsAll = Object.values(S.daily).reduce((a, d) => a + (d.s || 0), 0);
  const tech = deckStats(techCards());
  const errs = Object.values(S.errors);
  const errOpen = errs.filter((e) => e.status === 'open').length;
  const st = streak();
  const answeredEver = Object.values(S.daily).reduce((a, d) => a + (d.c || 0) + (d.d || 0), 0);

  const kpis = `<div class="kpis">
    <div class="kpi"><div class="k-label"><span style="color:#e8590c">${icon('flame', 16)}</span> Day streak</div><div class="k-value">${st}<small> ${st === 1 ? 'day' : 'days'}</small></div><div class="k-sub">Best ${bestStreak()}</div></div>
    <div class="kpi"><div class="k-label">${icon('target', 16)} Today</div><div class="k-value">${doneToday}<small> / ${goal}</small></div>${meter((doneToday / goal) * 100, 'Daily goal')}</div>
    <div class="kpi"><div class="k-label">${icon('cards', 16)} Learned</div><div class="k-value">${pct(tech.familiar + tech.mastered, tech.total)}%</div><div class="k-sub">${tech.mastered} mastered · ${tech.total - tech.new} of ${tech.total} seen</div></div>
    <div class="kpi"><div class="k-label">${icon('check', 16)} Accuracy, 7 days</div><div class="k-value">${a7 ? a7.v + '%' : '—'}</div><div class="k-sub">${delta === null ? (a7 ? `${a7.n} answers` : 'No answers yet') : `<span class="${delta >= 0 ? 'delta-up' : 'delta-down'}">${delta >= 0 ? '▲' : '▼'} ${Math.abs(delta)} pts</span> vs prior 7 days`}</div></div>
    <div class="kpi"><div class="k-label">${icon('clock', 16)} Study time, 7 days</div><div class="k-value">${fmtDur(secs7)}</div><div class="k-sub">All time ${fmtDur(secsAll)}</div></div>
    <a class="kpi" href="#/errors" style="color:inherit"><div class="k-label">${icon('alert', 16)} Open errors</div><div class="k-value">${errOpen}</div><div class="k-sub">${errs.length - errOpen} resolved</div></a>
  </div>`;

  const mastery = TOPICS.filter((x) => TECH_TOPICS.includes(x.id) || x.group === 'ref' || (x.id === 'mine' && S.custom.length))
    .map((x) => {
      const s = deckStats(deckCards(x.id));
      const seen = s.total - s.new;
      return `<a class="m-row" href="#/deck/${x.id}"><div class="m-head"><span class="m-name">${esc(x.name)}</span><span class="m-fig">${pct(s.familiar + s.mastered, s.total)}% learned · ${seen}/${s.total} seen</span></div>${segbar(s)}</a>`;
    })
    .join('');

  const accRows = TOPICS.filter((x) => TECH_TOPICS.includes(x.id) || x.group === 'ref' || x.id === 'mine')
    .map((x) => ({ x, s: deckStats(deckCards(x.id)) }))
    .filter((r) => r.s.answered > 0)
    .sort((a, b) => a.s.acc - b.s.acc);
  const focus = new Set(accRows.filter((r) => r.s.answered >= 5 && r.s.acc < 70).slice(0, 2).map((r) => r.x.id));
  const accuracy = accRows.length
    ? accRows
        .map(
          (r) =>
            `<a class="m-row" href="#/deck/${r.x.id}"><div class="m-head"><span class="m-name">${esc(r.x.name)}${focus.has(r.x.id) ? ` <span class="tag" style="margin-left:4px">${icon('target', 12)} Focus</span>` : ''}</span><span class="m-fig">${r.s.acc}% of ${r.s.answered}</span></div>${meter(r.s.acc, `${r.x.name} accuracy`)}</a>`,
        )
        .join('')
    : '<p class="small muted">Answer some cards and your accuracy by topic shows up here — weakest first.</p>';

  const drillRows = Object.entries(S.drills)
    .filter(([, d]) => d.seen)
    .map(([type, d]) => ({ type, d, acc: Math.round((100 * d.ok) / d.seen) }))
    .sort((a, b) => a.acc - b.acc);
  const drills = drillRows.length
    ? drillRows
        .map(
          (r) =>
            `<button class="m-row" data-act="drill" data-type="${esc(r.type)}" style="display:block;width:100%;background:none;border:0;border-bottom:1px solid var(--hair);text-align:left;cursor:pointer;padding:11px 0"><div class="m-head"><span class="m-name">${esc(drillTitle(r.type))}</span><span class="m-fig">${r.acc}% · ${r.d.ok} of ${r.d.seen}</span></div>${meter(r.acc, `${drillTitle(r.type)} accuracy`)}</button>`,
        )
        .join('')
    : '<p class="small muted">Run a math drill to start tracking accuracy by problem type.</p>';

  const html = `
  ${topbar('Progress', { right: `<a class="icon-btn" href="#/settings" aria-label="Settings">${icon('sliders')}</a>` })}
  ${answeredEver === 0 ? `<p class="note mb12">${icon('info', 16)}<span>Your stats fill in as you study. Start with a <a href="#/home">Quick 10</a> — it takes about five minutes.</span></p>` : ''}
  ${kpis}
  <div class="card">
    <h3>Items studied per day</h3>
    <p class="small muted mb8">Last 14 days · cards + drills · tap a bar for details</p>
    ${activityChart(days14, goal)}
  </div>
  ${sectionLabel('Progress by deck')}
  <div class="card">${segLegend()}<div class="mlist">${mastery}</div></div>
  ${sectionLabel('Accuracy by deck · weakest first')}
  <div class="card"><div class="mlist">${accuracy}</div></div>
  ${sectionLabel('Math drills · weakest first')}
  <div class="card"><div class="mlist">${drills}</div></div>
  <p class="tiny muted">“Learned” = you got it right on your latest attempt. “Mastered” = right again on spaced reviews days apart (next review 2+ weeks out). Data stays on this device — back it up in Settings.</p>`;
  return { html, tab: 'progress', mount: () => mountChart(days14) };
}
