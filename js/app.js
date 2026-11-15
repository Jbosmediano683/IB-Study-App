// App shell: hash router, tab bar, global event delegation, offline support.

import { S, save, openErrors } from './store.js';
import { ACT, INPUT, CHANGE, SUBMIT, setRender, parseHash } from './ui.js';
import { icon, esc } from './util.js';
import { homeView } from './views/home.js';
import { studyView, deckView, sessionView, drillView, summaryView, cardView, addView, sessionKey, guidesView, guideView } from './views/study.js';
import { libraryView, termsView, formulasView, sheetsView, sheetView, dealsView, dealView } from './views/library.js';
import { firmsView, firmView, marketView } from './views/firms.js';
import { errorsView, progressView } from './views/track.js';
import { settingsView, applyTheme } from './views/settings.js';

// One-tap entry points (home-screen shortcuts): replace the entry so Back returns Home.
function launch(kind) {
  history.replaceState(null, '', '#/home');
  if (kind === 'quick') ACT.quick();
  else if (kind === 'drill') ACT.drill({ dataset: { cat: 'mix' } });
  else if (kind === 'mock') ACT.mock();
  return { redirect: null };
}

const ROUTES = [
  [/^\/go\/(quick|drill|mock)$/, (m) => launch(m[1])],
  [/^\/home$/, () => homeView()],
  [/^\/study$/, () => studyView()],
  [/^\/deck\/([^/]+)$/, (m) => deckView(decodeURIComponent(m[1]))],
  [/^\/guides$/, () => guidesView()],
  [/^\/guide\/([^/]+)$/, (m) => guideView(decodeURIComponent(m[1]))],
  [/^\/session$/, () => sessionView()],
  [/^\/drill$/, () => drillView()],
  [/^\/summary$/, () => summaryView()],
  [/^\/card\/(.+)$/, (m, p) => cardView(decodeURIComponent(m[1]), p)],
  [/^\/add$/, (m, p) => addView(p)],
  [/^\/library$/, (m, p) => libraryView(p)],
  [/^\/terms$/, (m, p) => termsView(p)],
  [/^\/formulas$/, (m, p) => formulasView(p)],
  [/^\/sheets$/, () => sheetsView()],
  [/^\/sheet\/(.+)$/, (m) => sheetView(decodeURIComponent(m[1]))],
  [/^\/deals$/, () => dealsView()],
  [/^\/deal\/(.+)$/, (m) => dealView(decodeURIComponent(m[1]))],
  [/^\/firms$/, () => firmsView()],
  [/^\/firm\/(.+)$/, (m) => firmView(decodeURIComponent(m[1]))],
  [/^\/market$/, () => marketView()],
  [/^\/errors$/, (m, p) => errorsView(p)],
  [/^\/progress$/, () => progressView()],
  [/^\/settings$/, () => settingsView()],
];

const TABS = [
  ['home', '#/home', 'home', 'Home'],
  ['study', '#/study', 'cards', 'Study'],
  ['library', '#/library', 'book', 'Library'],
  ['errors', '#/errors', 'alert', 'Errors'],
  ['progress', '#/progress', 'chart', 'Progress'],
];

const root = document.getElementById('app');
const tabbar = document.getElementById('tabbar');
let cleanup = null;
let lastPath = null;

function renderTabs(active) {
  const open = openErrors().length;
  tabbar.innerHTML = TABS.map(
    ([id, href, ic, label]) =>
      `<a href="${href}" class="${id === active ? 'on' : ''}" ${id === active ? 'aria-current="page"' : ''}>${icon(ic, 24)}<span>${label}</span>${id === 'errors' && open ? `<span class="badge" aria-label="${open} open">${open > 99 ? '99+' : open}</span>` : ''}</a>`,
  ).join('');
}

function render() {
  if (cleanup) {
    try {
      cleanup();
    } catch {}
    cleanup = null;
  }
  const { path, params } = parseHash();
  let view = null;
  for (const [re, fn] of ROUTES) {
    const m = path.match(re);
    if (m) {
      view = fn(m, params);
      break;
    }
  }
  if (!view) {
    location.replace('#/home');
    return;
  }
  if (view.redirect !== undefined) {
    if (view.redirect) location.replace(view.redirect);
    return;
  }
  root.innerHTML = view.html;
  document.body.classList.toggle('immersive', !!view.immersive);
  if (!view.immersive) renderTabs(view.tab);
  const titleEl = root.querySelector('h1');
  document.title = titleEl && path !== '/home' ? `${titleEl.textContent} · FIG Prep` : 'FIG Prep';
  if (path !== lastPath) window.scrollTo(0, 0);
  lastPath = path;
  if (view.mount) cleanup = view.mount(root) || null;
}
setRender(render);

// ---------- event delegation ----------
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const fn = ACT[el.dataset.act];
  if (fn) {
    e.preventDefault();
    fn(el, e);
  }
});
document.addEventListener('input', (e) => {
  const el = e.target.closest('[data-input]');
  if (el && INPUT[el.dataset.input]) INPUT[el.dataset.input](el, e);
});
document.addEventListener('change', (e) => {
  const el = e.target.closest('[data-change]');
  if (el && CHANGE[el.dataset.change]) CHANGE[el.dataset.change](el, e);
});
document.addEventListener('submit', (e) => {
  const form = e.target.closest('[data-submit]');
  if (!form) return;
  e.preventDefault();
  if (SUBMIT[form.dataset.submit]) SUBMIT[form.dataset.submit](form, e);
});
document.addEventListener('keydown', (e) => {
  if (e.target.closest('input, textarea, select') && e.key !== 'Escape') return;
  sessionKey(e);
});
window.addEventListener('hashchange', render);
// Re-render on return to the app so "due" counts and dates stay fresh.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && !['/session', '/drill'].includes(parseHash().path) && !document.activeElement?.closest('input, textarea')) render();
});

// ---------- boot ----------
applyTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyTheme);
if (!location.hash || location.hash === '#' || location.hash === '#/') location.replace('#/home');
render();

// Ask the browser to keep our storage (helps on iOS / Android).
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

// Offline support: cache the app shell; offer a refresh when a new version lands.
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((reg) => {
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing;
          nw?.addEventListener('statechange', () => {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) showUpdate();
          });
        });
      })
      .catch(() => {});
  });
}
function showUpdate() {
  if (document.querySelector('.update-banner')) return;
  const b = document.createElement('button');
  b.className = 'update-banner';
  b.innerHTML = `${esc('New version ready — tap to refresh')}`;
  b.onclick = () => location.reload();
  document.body.appendChild(b);
}

// Expose for debugging in the console.
window.__figprep = { S, save };
