// Small shared helpers: escaping, the tiny markup renderer, dates, formatting, icons.

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

const inline = (t) => t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

/**
 * Tiny markup → HTML. Supports:
 *   "## Heading", "- bullet", "  - sub-bullet", "1. numbered", **bold**, blank line = break.
 * Everything is HTML-escaped first, so user text is safe to pass through.
 */
export function md(src) {
  if (!src) return '';
  let lines = String(src).replace(/\r/g, '').replace(/\t/g, '  ').split('\n');
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  if (min) lines = lines.map((l) => l.slice(Math.min(min, l.match(/^ */)[0].length)));

  let out = '';
  let list = null; // 'ul' | 'ol'
  const flush = () => {
    if (list) out += `</${list}>`;
    list = null;
  };
  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim()) {
      flush();
      continue;
    }
    let m;
    if ((m = line.match(/^#{2,3}\s+(.*)$/))) {
      flush();
      out += `<h4>${inline(esc(m[1]))}</h4>`;
    } else if ((m = line.match(/^\s{2,}[-•*]\s+(.*)$/))) {
      if (!list) {
        list = 'ul';
        out += '<ul>';
      }
      out += `<li class="sub">${inline(esc(m[1]))}</li>`;
    } else if ((m = line.match(/^[-•]\s+(.*)$/))) {
      if (list !== 'ul') {
        flush();
        list = 'ul';
        out += '<ul>';
      }
      out += `<li>${inline(esc(m[1]))}</li>`;
    } else if ((m = line.match(/^(\d+)[.)]\s+(.*)$/))) {
      if (list !== 'ol') {
        flush();
        list = 'ol';
        out += `<ol start="${Number(m[1])}">`;
      }
      out += `<li>${inline(esc(m[2]))}</li>`;
    } else {
      flush();
      out += `<p>${inline(esc(line.trim()))}</p>`;
    }
  }
  flush();
  return out;
}

/** Plain-text version of markup (for search and previews). */
export const plain = (src) =>
  String(src ?? '')
    .replace(/\*\*/g, '')
    .replace(/^#{2,3}\s+/gm, '')
    .replace(/^\s*[-•]\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();

// ---------- dates ----------
export const DAY_MS = 864e5;
const pad = (n) => String(n).padStart(2, '0');
export const dayKey = (d = new Date()) => {
  const x = d instanceof Date ? d : new Date(d);
  return `${x.getFullYear()}-${pad(x.getMonth() + 1)}-${pad(x.getDate())}`;
};
export const parseKey = (k) => {
  const [y, m, d] = String(k).split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
};
export const startOfDay = (ts = Date.now()) => {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};
export const addDays = (ts, n) => {
  const d = new Date(ts);
  d.setDate(d.getDate() + n);
  return d.getTime();
};
/** Whole calendar days from today until a YYYY-MM-DD key (negative = past). */
export const daysUntil = (key) => Math.round((parseKey(key).getTime() - startOfDay()) / DAY_MS);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const fmtDate = (d, withDay = false) => {
  const x = d instanceof Date ? d : typeof d === 'string' ? parseKey(d) : new Date(d);
  return `${withDay ? WD[x.getDay()] + ', ' : ''}${MONTHS[x.getMonth()]} ${x.getDate()}`;
};
export const weekday = (d) => WD[(d instanceof Date ? d : parseKey(d)).getDay()];

export function relTime(ts) {
  if (!ts) return 'never';
  const diff = Date.now() - ts;
  if (diff < 60e3) return 'just now';
  if (diff < 3600e3) return `${Math.floor(diff / 60e3)}m ago`;
  const days = Math.round((startOfDay() - startOfDay(ts)) / DAY_MS);
  if (days === 0) return `${Math.floor(diff / 3600e3)}h ago`;
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days}d ago`;
  return fmtDate(ts);
}

export function fmtDur(secs) {
  secs = Math.max(0, Math.round(secs || 0));
  if (secs < 60) return `${secs}s`;
  const m = Math.floor(secs / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}m`;
}
export const fmtClock = (ms) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 60)}:${pad(s % 60)}`;
};

// ---------- numbers ----------
export const pct = (num, den) => (den ? Math.round((100 * num) / den) : 0);
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const plural = (n, word, pl = word + 's') => `${n} ${n === 1 ? word : pl}`;

// ---------- random ----------
export const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
export const uid = (prefix = '') => prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// ---------- icons (hand-drawn 24px stroke icons) ----------
const P = {
  home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>',
  cards: '<rect x="3.5" y="7" width="13" height="13" rx="2"/><path d="M8 3.5h10.5a2 2 0 0 1 2 2V16"/>',
  book: '<path d="M6.5 3.5H19v17H6.5A2.5 2.5 0 0 1 4 18V6a2.5 2.5 0 0 1 2.5-2.5z"/><path d="M4 18a2.5 2.5 0 0 1 2.5-2.5H19"/>',
  alert: '<path d="M12 3.8 2.9 19.5h18.2z"/><path d="M12 10v4.2"/><path d="M12 17v.2"/>',
  chart: '<path d="M4 20h16"/><path d="M7 16.5v-5"/><path d="M12 16.5V7"/><path d="M17 16.5v-8"/>',
  sliders: '<path d="M4 7h9M18 7h2M4 17h3M11 17h9"/><circle cx="15.5" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  star: '<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  chevR: '<path d="m9 5 7 7-7 7"/>',
  chevL: '<path d="m15 5-7 7 7 7"/>',
  chevD: '<path d="m5 9 7 7 7-7"/>',
  flame: '<path d="M12 21c-3.9 0-7-2.8-7-6.6 0-2.9 1.8-5 3.6-6.8.4 1.9 1.4 3 2.4 3.4C11 7.6 12.6 5 15 3c.3 3.1 4 5.6 4 10.6 0 4.2-3.1 7.4-7 7.4z"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 7.5h7"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8.5 3v4M15.5 3v4"/>',
  bank: '<path d="M4 20.5h16"/><path d="M5.5 20.5V10L12 5.5l6.5 4.5v10.5"/><path d="M9 20.5v-6M12 20.5v-6M15 20.5v-6"/>',
  briefcase: '<rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2"/><path d="M3.5 12.5h17"/>',
  trend: '<path d="M4 17l5.5-5.5 3.5 3.5L20 8"/><path d="M15 8h5v5"/>',
  file: '<path d="M6.5 3h7.5l4.5 4.5V20a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M13.5 3v5h5"/><path d="M8.5 13h7M8.5 16.5h5"/>',
  list: '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><path d="M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01"/>',
  sigma: '<path d="M17.5 5H6.5l6 7-6 7h11"/>',
  trash: '<path d="M4.5 7h15"/><path d="M9.5 7V4.5h5V7"/><path d="M6.5 7l1 13h9l1-13"/>',
  download: '<path d="M12 4v11"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M5 19.5h14"/>',
  upload: '<path d="M12 15V4"/><path d="m7.5 8.5 4.5-4.5 4.5 4.5"/><path d="M5 19.5h14"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  retry: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4h-4"/>',
  bolt: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12h.01"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
  shuffle: '<path d="M4 7h3.5c4.5 0 4.5 10 9 10H20"/><path d="M4 17h3.5c1.6 0 2.6-1.3 3.4-3M13.6 10c.8-1.7 1.8-3 3.4-3H20"/><path d="m17.5 4.5 2.5 2.5-2.5 2.5M17.5 14.5l2.5 2.5-2.5 2.5"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  note: '<path d="M5 4h14v11l-5 5H5z"/><path d="M14 20v-5h5"/>',
};
export function icon(name, size = 22, cls = '') {
  const fill = name === 'starFill';
  const d = P[fill ? 'star' : name] || '';
  return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
}
