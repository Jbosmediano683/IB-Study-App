// Firm prep (target banks + your own notes), interview dates, and market notes.

import { S, save } from '../store.js';
import { FIRMS } from '../data/firms.js';
import { ACT, INPUT, CHANGE, SUBMIT, go, rerender, topbar, toast, sectionLabel, empty } from '../ui.js';
import { esc, md, icon, fmtDate, daysUntil, dayKey, relTime, uid } from '../util.js';

export const allFirms = () => [...FIRMS, ...S.customFirms];
export const firmById = (id) => allFirms().find((f) => f.id === id);
export const firmName = (id) => firmById(id)?.name || id || '';

export function upcomingInterviews() {
  return S.interviews
    .filter((iv) => iv.date && daysUntil(iv.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date));
}
export const nextInterview = () => upcomingInterviews()[0] || null;

const ROUNDS = ['First round', 'Second round', 'Superday', 'Coffee chat', 'Networking call', 'Recruiting event'];

function when(d) {
  return d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : `in ${d} days`;
}
export function countdownCard(iv) {
  const d = daysUntil(iv.date);
  return `<a class="card countdown" href="#/firm/${encodeURIComponent(iv.firm)}">
    <div class="days">${d === 0 ? 'Today' : d}${d === 0 ? '' : `<small>${d === 1 ? 'day' : 'days'}</small>`}</div>
    <div class="grow"><div class="small muted">Next up</div><b>${esc(firmName(iv.firm))} — ${esc(iv.label)}</b><div class="small text-2">${fmtDate(iv.date, true)} · ${when(d)}</div></div>
    ${icon('chevR', 20, 'chev')}
  </a>`;
}

function interviewForm(firmId = '') {
  const opts = allFirms()
    .map((f) => `<option value="${esc(f.id)}" ${f.id === firmId ? 'selected' : ''}>${esc(f.name)}</option>`)
    .join('');
  return `<form class="card" data-submit="addInterview" novalidate>
    <h3>${icon('calendar', 18)} Add a date</h3>
    ${firmId ? `<input type="hidden" name="firm" value="${esc(firmId)}">` : `<div class="field"><label for="iv-f">Firm</label><select id="iv-f" name="firm">${opts}</select></div>`}
    <div class="field"><label for="iv-r">What</label><select id="iv-r" name="label">${ROUNDS.map((r) => `<option>${r}</option>`).join('')}</select></div>
    <div class="field"><label for="iv-d">Date</label><input id="iv-d" name="date" type="date" value="${dayKey()}" required></div>
    <button class="btn block" type="submit">${icon('plus', 18)} Add</button>
  </form>`;
}
function interviewRows(list) {
  return list
    .map((iv) => {
      const d = daysUntil(iv.date);
      return `<div class="row" style="cursor:default"><span class="lead">${icon('calendar', 18)}</span><div class="grow"><div class="title">${esc(firmName(iv.firm))} — ${esc(iv.label)}</div><div class="meta">${fmtDate(iv.date, true)} · ${d < 0 ? 'done' : when(d)}</div></div><button class="icon-btn" data-act="delInterview" data-id="${esc(iv.id)}" aria-label="Remove">${icon('trash', 18)}</button></div>`;
    })
    .join('');
}

export function firmsView() {
  const up = upcomingInterviews();
  const firms = allFirms()
    .map((f) => {
      const next = up.find((iv) => iv.firm === f.id);
      const notes = S.firms[f.id];
      const filled = notes && (notes.why || notes.notes) ? ' · notes saved' : '';
      return `<a class="row" href="#/firm/${encodeURIComponent(f.id)}"><span class="lead">${icon('bank', 20)}</span><div class="grow"><div class="title">${esc(f.name)}</div><div class="meta">${next ? `${esc(next.label)} ${when(daysUntil(next.date))}` : f.custom ? 'Your firm' : 'Snapshot, talking points, checklist'}${filled}</div></div>${icon('chevR', 20, 'chev')}</a>`;
    })
    .join('');
  const html = `
  ${topbar('Firm prep', { back: '#/library' })}
  ${up.length ? `${sectionLabel('Coming up')}<div class="card flush">${interviewRows(up)}</div>` : ''}
  ${sectionLabel('Firms')}
  <div class="card flush">${firms}
    <form class="row" data-submit="addFirm" style="cursor:default" novalidate><span class="lead">${icon('plus', 20)}</span><input name="name" type="text" placeholder="Add another firm (e.g. a FIG boutique)" aria-label="Firm name" style="border:0;padding:8px 0;background:transparent"><button class="btn sm" type="submit">Add</button></form>
  </div>
  ${interviewForm()}
  <p class="note">${icon('info', 16)}<span>Firm snapshots reflect public information through mid-2026. Check each bank's latest earnings release and news before you walk in.</span></p>`;
  return { html, tab: 'library' };
}

export function firmView(id) {
  const f = firmById(id);
  if (!f) return { html: topbar('Firm', { back: '#/firms' }) + empty('bank', 'Firm not found', ''), tab: 'library' };
  const n = S.firms[id] || {};
  const done = n.done || {};
  const ivs = S.interviews.filter((iv) => iv.firm === id).sort((a, b) => a.date.localeCompare(b.date));
  const research = (f.research || [])
    .map(
      (r, i) =>
        `<label class="check-item ${done[i] ? 'done' : ''}"><input type="checkbox" data-change="firmCheck" data-firm="${esc(id)}" data-i="${i}" ${done[i] ? 'checked' : ''}><span>${esc(r)}</span></label>`,
    )
    .join('');
  const html = `
  ${topbar(f.name, { back: '#/firms', sub: f.full ? `${esc(f.full)}${f.hq ? ' · ' + esc(f.hq) : ''}` : '' })}
  ${ivs.length ? `<div class="card flush">${interviewRows(ivs)}</div>` : ''}
  ${f.snapshot ? `${sectionLabel('Snapshot')}<div class="card md">${md(f.snapshot)}</div>` : ''}
  ${f.angles ? `${sectionLabel('Talking points')}<div class="card md">${md(f.angles)}</div>` : ''}
  ${research ? `${sectionLabel('Prep checklist')}<div class="card" style="padding-top:6px;padding-bottom:6px">${research}</div>` : ''}
  ${sectionLabel('Your notes')}
  <div class="card">
    <div class="field"><label for="fw">Why ${esc(f.name)}? (your 3 bullets)</label><textarea id="fw" rows="4" data-input="firmNote" data-firm="${esc(id)}" data-field="why" placeholder="1. People I've met and what stood out&#10;2. Deals / franchise strengths I can speak to&#10;3. How it fits my story">${esc(n.why || '')}</textarea></div>
    <div class="field" style="margin:0"><label for="fn">People, conversations & follow-ups</label><textarea id="fn" rows="5" data-input="firmNote" data-firm="${esc(id)}" data-field="notes" placeholder="Name — role — what we discussed — follow-up sent?">${esc(n.notes || '')}</textarea></div>
    <p class="tiny muted mt8">Saves automatically on this device.</p>
  </div>
  ${interviewForm(id)}
  ${f.custom ? `<button class="btn danger block" data-act="delFirm" data-id="${esc(id)}">${icon('trash', 18)} Remove this firm</button>` : ''}`;
  return { html, tab: 'library' };
}

INPUT.firmNote = (el) => {
  const id = el.dataset.firm;
  S.firms[id] = { ...(S.firms[id] || {}), [el.dataset.field]: el.value };
  save();
};
CHANGE.firmCheck = (el) => {
  const id = el.dataset.firm;
  const n = (S.firms[id] = S.firms[id] || {});
  n.done = { ...(n.done || {}), [el.dataset.i]: el.checked };
  if (!el.checked) delete n.done[el.dataset.i];
  el.closest('.check-item')?.classList.toggle('done', el.checked);
  save();
};
SUBMIT.addInterview = (form) => {
  const fd = new FormData(form);
  const date = String(fd.get('date') || '');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    toast('Pick a date');
    return;
  }
  S.interviews.push({ id: uid('iv-'), firm: String(fd.get('firm')), label: String(fd.get('label')), date });
  save();
  toast(`Added — ${when(Math.max(0, daysUntil(date)))}`);
  rerender();
};
ACT.delInterview = (el) => {
  S.interviews = S.interviews.filter((iv) => iv.id !== el.dataset.id);
  save();
  rerender();
};
SUBMIT.addFirm = (form) => {
  const name = String(new FormData(form).get('name') || '').trim();
  if (!name) return;
  const id = 'c-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + Math.random().toString(36).slice(2, 5);
  S.customFirms.push({ id, name, custom: true });
  save();
  go(`#/firm/${encodeURIComponent(id)}`);
};
ACT.delFirm = (el) => {
  if (!confirm('Remove this firm and its notes?')) return;
  const id = el.dataset.id;
  S.customFirms = S.customFirms.filter((f) => f.id !== id);
  S.interviews = S.interviews.filter((iv) => iv.firm !== id);
  delete S.firms[id];
  save();
  go('#/firms');
};

// ---------- market notes ----------
const MKT_FIELDS = [
  ['ff', 'Fed funds target'],
  ['y2', '2Y Treasury'],
  ['y10', '10Y Treasury'],
  ['s210', '2s10s (bp)'],
  ['spx', 'S&P 500 (level / YTD)'],
  ['bkx', 'KBW Bank Index (BKX) YTD'],
  ['kre', 'Regional banks (KRE) YTD'],
  ['cpi', 'CPI (latest YoY)'],
  ['unemp', 'Unemployment rate'],
  ['ig', 'IG / HY spreads'],
];
export function marketView() {
  const m = S.market;
  const age = m.updated ? Math.floor((Date.now() - m.updated) / 864e5) : null;
  const html = `
  ${topbar('Market notes', { back: '#/library', sub: m.updated ? `Updated ${relTime(m.updated)}` : 'Fill in before each interview' })}
  ${age !== null && age >= 7 ? `<p class="note mb12">${icon('info', 16)}<span>These numbers are ${age} days old — refresh them before your next interview.</span></p>` : ''}
  <div class="card">
    <h3>Rates & markets</h3>
    <p class="small muted mb12">Interviewers often open with “Where's the 10-year?” or “How are bank stocks doing this year?” Keep the numbers here.</p>
    <div class="mkt-grid">${MKT_FIELDS.map(([k, label]) => `<div class="field"><label for="m-${k}">${esc(label)}</label><input id="m-${k}" type="text" data-input="mkt" data-k="${k}" value="${esc(m.fields[k] || '')}" placeholder="—"></div>`).join('')}</div>
  </div>
  <div class="card">
    <div class="field"><label for="m-h">Recent FIG headlines & deals</label><textarea id="m-h" rows="5" data-input="mktText" data-k="headlines" placeholder="e.g. Deal announced — size, P/TBV, earnback, why it matters">${esc(m.headlines || '')}</textarea></div>
    <div class="field" style="margin:0"><label for="m-t">Bank earnings themes / your market view</label><textarea id="m-t" rows="5" data-input="mktText" data-k="themes" placeholder="NII outlook, deposit costs, credit (CRE, consumer), capital return, IB fees, regulation…">${esc(m.themes || '')}</textarea></div>
  </div>
  <p class="note">${icon('info', 16)}<span>Saved on this device only. Tip: say each number out loud with a one-line “so what” for banks.</span></p>`;
  return { html, tab: 'library' };
}
INPUT.mkt = (el) => {
  S.market.fields[el.dataset.k] = el.value;
  S.market.updated = Date.now();
  save();
};
INPUT.mktText = (el) => {
  S.market[el.dataset.k] = el.value;
  S.market.updated = Date.now();
  save();
};
