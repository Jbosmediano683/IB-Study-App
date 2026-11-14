// UI plumbing shared by every view: event registries, navigation, toasts and
// small reusable fragments.

import { esc, icon } from './util.js';
import { status } from './store.js';

// Views register handlers here; app.js dispatches DOM events to them.
export const ACT = {}; // data-act="name"      → (el, ev)
export const INPUT = {}; // data-input="name"  → (el, ev)
export const CHANGE = {}; // data-change="name" → (el, ev)
export const SUBMIT = {}; // data-submit="name" → (form, ev)

let renderFn = () => {};
export const setRender = (fn) => {
  renderFn = fn;
};
export const rerender = () => renderFn();
export function go(hash) {
  if (location.hash === hash) renderFn();
  else location.hash = hash;
}

/** Parse "#/path?x=1" → { path: '/path', params: URLSearchParams } */
export function parseHash(h = location.hash) {
  const raw = h.replace(/^#/, '') || '/home';
  const [path, qs = ''] = raw.split('?');
  return { path: path || '/home', params: new URLSearchParams(qs) };
}

let toastTimer = null;
export function toast(msg, actionLabel, onAction) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.innerHTML = `<span>${esc(msg)}</span>${actionLabel ? `<button type="button">${esc(actionLabel)}</button>` : ''}`;
  if (actionLabel) {
    el.querySelector('button').onclick = () => {
      el.classList.remove('show');
      onAction && onAction();
    };
  }
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), actionLabel ? 5000 : 2200);
}

export function topbar(title, { back, right = '', sub = '', small = false } = {}) {
  return `<header class="topbar">
    ${back ? `<a class="icon-btn" href="${esc(back)}" aria-label="Back">${icon('chevL', 24)}</a>` : ''}
    <div class="tb-title"><h1 class="${small ? 'small' : ''}">${esc(title)}</h1>${sub ? `<p class="sub">${sub}</p>` : ''}</div>
    <div class="tb-right">${right}</div>
  </header>`;
}

export const sectionLabel = (t) => `<div class="section-label">${esc(t)}</div>`;

export function empty(ic, title, body, cta = '') {
  return `<div class="card empty">${icon(ic, 34)}<h3>${esc(title)}</h3><p class="small">${body}</p>${cta ? `<div class="mt12">${cta}</div>` : ''}</div>`;
}

/** Thin segmented mastery bar (no text — figures sit beside it). */
export function segbar(s) {
  const total = s.total || 1;
  const part = (n, cls) => (n > 0 ? `<span class="${cls}" style="flex:${n} 1 0"></span>` : '');
  const label = `${s.mastered} mastered, ${s.familiar} familiar, ${s.learning} learning, ${s.new} not started of ${s.total}`;
  return `<div class="segbar" role="img" aria-label="${label}">${part(s.mastered, 's-m')}${part(s.familiar, 's-f')}${part(s.learning, 's-l')}${part(s.new, 's-n')}${total && !s.total ? '<span class="s-n" style="flex:1"></span>' : ''}</div>`;
}
export const segLegend = () =>
  `<div class="legend" aria-hidden="true"><span><i class="sw" style="background:var(--ord-3)"></i>Mastered</span><span><i class="sw" style="background:var(--ord-2)"></i>Familiar</span><span><i class="sw" style="background:var(--ord-1)"></i>Learning</span><span><i class="sw" style="background:var(--seg-empty)"></i>Not started</span></div>`;

export function meter(pctVal, label = '') {
  const p = Math.max(0, Math.min(100, pctVal || 0));
  return `<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(p)}"${label ? ` aria-label="${esc(label)}"` : ''}><span style="width:${p}%"></span></div>`;
}

const STATUS_LABEL = { new: 'New', learning: 'Learning', familiar: 'Familiar', mastered: 'Mastered' };
const STATUS_COLOR = { new: 'var(--seg-empty)', learning: 'var(--ord-1)', familiar: 'var(--ord-2)', mastered: 'var(--ord-3)' };
export function statusTag(id) {
  const st = status(id);
  return `<span class="tag"><i class="dot" style="background:${STATUS_COLOR[st]}"></i>${STATUS_LABEL[st]}</span>`;
}

export function starBtn(id, on, extra = '') {
  return `<button class="icon-btn star-btn ${on ? 'on' : ''}" data-act="star" data-id="${esc(id)}" aria-label="${on ? 'Unstar' : 'Star'}" aria-pressed="${on}" ${extra}>${icon(on ? 'starFill' : 'star', 22)}</button>`;
}

/** Highlight query matches inside already-escaped text. */
export function hl(escapedText, q) {
  q = String(q || '').trim();
  if (q.length < 2) return escapedText;
  const safe = esc(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${safe})`, 'ig');
  // Never highlight inside an HTML entity such as &amp;
  return escapedText
    .split(/(&[a-z#0-9]+;)/i)
    .map((part) => (/^&[a-z#0-9]+;$/i.test(part) ? part : part.replace(re, '<mark>$1</mark>')))
    .join('');
}
