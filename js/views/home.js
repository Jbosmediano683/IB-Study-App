// Home: one-tap study launcher + what's next.

import { S, streak, today, openErrors } from '../store.js';
import { dueCount, newCount, techCards, deckStats, deckCards, builtinCount, TERMS, FORMULAS, GUIDES } from '../content.js';
import { SHEETS } from '../data/sheets.js';
import { DEALS } from '../data/deals.js';
import { sectionLabel, meter } from '../ui.js';
import { icon, fmtDate, pct, plural, relTime } from '../util.js';
import { nextInterview, countdownCard } from './firms.js';

const guideCardCount = () => new Set(GUIDES.flatMap((g) => deckCards(g.id).map((c) => c.id))).size;

export function homeView() {
  const st = streak();
  const t = today();
  const goal = S.settings.dailyGoal;
  const done = (t.c || 0) + (t.d || 0);
  const due = dueCount();
  const nw = newCount();
  const errs = openErrors().length;
  const next = nextInterview();
  const ds = deckStats(techCards());
  const learned = pct(ds.familiar + ds.mastered, ds.total);
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const tile = (href, ic, title, sub) => `<a class="action-tile" href="${href}">${icon(ic)}<b>${title}</b><small>${sub}</small></a>`;

  const html = `
  <header class="topbar">
    <div class="tb-title"><h1>FIG Prep</h1><p class="sub">${greet} · ${fmtDate(new Date(), true)}</p></div>
    <div class="tb-right">
      <span class="pill" title="Day streak" aria-label="${st} day streak">${icon('flame', 16)} ${st}</span>
      <a class="icon-btn" href="#/settings" aria-label="Settings">${icon('sliders')}</a>
    </div>
  </header>

  <button class="hero" data-act="quick">
    <div class="h-top">${icon('bolt', 18)} ${done >= goal ? 'Goal hit — keep the streak warm' : 'Got five minutes?'}</div>
    <div class="h-title">Quick 10</div>
    <div class="h-sub">${due ? `${plural(due, 'card')} due` : 'Nothing due'} · ${nw} new · errors first</div>
    <span class="h-go">Start ${icon('chevR', 16)}</span>
  </button>

  <div class="duo">
    <button class="action-tile" data-act="drill" data-cat="mix">${icon('calc')}<b>Math drill</b><small>${S.settings.drillSize} FIG problems</small></button>
    <button class="action-tile" data-act="mock">${icon('mic')}<b>Mock superday</b><small>10 Qs · timed</small></button>
  </div>

  ${
    next
      ? countdownCard(next)
      : `<a class="card countdown" href="#/firms"><div class="days">${icon('calendar', 26)}</div><div class="grow"><b>Add your interview dates</b><div class="small text-2">Countdown + prep notes for Citi, Barclays, BofA, Wells Fargo</div></div>${icon('chevR', 20, 'chev')}</a>`
  }

  <a class="card" href="#/progress" style="display:block;color:inherit">
    <div class="today-line"><b style="color:var(--text)">Today</b><span>${done} / ${goal}</span>${meter((done / goal) * 100, 'Daily goal')}<span>${learned}% learned</span></div>
  </a>

  ${sectionLabel('Study')}
  <div class="tiles">
    ${tile('#/study', 'cards', 'Flashcards', `${builtinCount} cards`)}
    ${tile('#/guides', 'book', 'Your guides', GUIDES.length ? `${GUIDES.length} guides · ${guideCardCount()} cards` : 'Guide decks')}
    ${tile('#/terms', 'list', 'Terminology', `${TERMS.length} terms`)}
    ${tile('#/formulas', 'sigma', 'Equations', `${FORMULAS.length} formulas`)}
    ${tile('#/sheets', 'file', 'Cheat sheets', `${SHEETS.length} one-pagers`)}
    ${tile('#/deck/starred', 'star', 'Starred', 'Your saved cards')}
  </div>

  ${sectionLabel('Prep')}
  <div class="tiles">
    ${tile('#/firms', 'bank', 'Firm prep', 'Citi · Barclays · BofA · Wells')}
    ${tile('#/deals', 'briefcase', 'Deal book', `${DEALS.length} FIG deals`)}
    ${tile('#/market', 'trend', 'Market notes', S.market.updated ? `Updated ${relTime(S.market.updated)}` : 'Rates & headlines')}
    ${tile('#/add?mode=miss', 'edit', 'Log a miss', 'From an interview or chat')}
  </div>

  ${sectionLabel('Track')}
  <div class="tiles">
    ${tile('#/errors', 'alert', 'Error log', errs ? `${errs} open` : 'Nothing open')}
    ${tile('#/progress', 'chart', 'Progress', `${learned}% learned · ${st} day streak`)}
  </div>`;
  return { html, tab: 'home' };
}
