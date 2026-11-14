// Settings: goals, session sizes, theme, backup / restore, reset.

import { S, save, exportData, importData, resetAll } from '../store.js';
import { ACT, CHANGE, SUBMIT, rerender, topbar, toast, sectionLabel } from '../ui.js';
import { esc, icon, dayKey } from '../util.js';

export const APP_VERSION = '1.0.0';

export function applyTheme() {
  const t = S.settings.theme;
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
  else delete document.documentElement.dataset.theme;
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', bg || '#f3f4f6'));
}

export function settingsView() {
  const s = S.settings;
  const opt = (vals, cur) => vals.map((v) => `<option value="${v}" ${String(v) === String(cur) ? 'selected' : ''}>${v}</option>`).join('');
  const seg = (key, vals, labels) =>
    `<div class="seg">${vals.map((v, i) => `<button class="${s[key] === v ? 'on' : ''}" data-act="setTheme" data-v="${v}">${labels[i]}</button>`).join('')}</div>`;
  const html = `
  ${topbar('Settings', { back: '#/home' })}
  ${sectionLabel('Study')}
  <div class="card">
    <div class="field"><label for="s-goal">Daily goal (cards + drill problems)</label><select id="s-goal" data-change="setting" data-k="dailyGoal">${opt([10, 15, 20, 30, 40, 50], s.dailyGoal)}</select></div>
    <div class="field"><label for="s-size">Cards per deck session</label><select id="s-size" data-change="setting" data-k="sessionSize">${opt([5, 10, 15, 20, 30], s.sessionSize)}</select></div>
    <div class="field"><label for="s-drill">Problems per math drill</label><select id="s-drill" data-change="setting" data-k="drillSize">${opt([3, 5, 10, 15], s.drillSize)}</select></div>
    <label class="toggle"><span><b>Include advanced cards</b><br><span class="small text-2">Deeper questions (purchase accounting, LDTI, eSLR…)</span></span><input type="checkbox" data-change="settingBool" data-k="showAdvanced" ${s.showAdvanced ? 'checked' : ''}></label>
  </div>
  ${sectionLabel('Appearance')}
  <div class="card">${seg('theme', ['auto', 'light', 'dark'], ['Automatic', 'Light', 'Dark'])}</div>
  ${sectionLabel('Your data')}
  <div class="card stack">
    <p class="small text-2">Everything — progress, error log, notes — is stored only on this device. Back it up before switching phones or clearing Safari data.</p>
    <div class="btn-row"><button class="btn secondary" data-act="exportFile">${icon('download', 18)} Save backup</button><button class="btn plain" data-act="copyBackup">Copy</button></div>
    <label class="btn plain block" for="imp-file" style="cursor:pointer">${icon('upload', 18)} Restore from file</label>
    <input id="imp-file" type="file" accept="application/json,.json,.txt" data-change="importFile" hidden>
    <details><summary class="small linklike">Restore by pasting a backup</summary>
      <form data-submit="importPaste" class="mt8"><textarea name="txt" rows="4" placeholder="Paste backup text"></textarea><button class="btn block mt8" type="submit">Restore</button></form>
    </details>
  </div>
  ${sectionLabel('Reset')}
  <div class="card stack">
    <button class="btn danger block" data-act="resetProgress">Reset study progress (keep notes & my cards)</button>
    <button class="btn danger block" data-act="resetAll">Erase everything</button>
  </div>
  ${sectionLabel('Install on your phone')}
  <div class="card md">
    <p><b>iPhone:</b> open this page in Safari → Share → <b>Add to Home Screen</b>.</p>
    <p><b>Android:</b> Chrome menu ⋮ → <b>Install app</b> / Add to Home screen.</p>
    <p>It then opens full-screen and works offline.</p>
  </div>
  <p class="tiny muted" style="text-align:center">FIG Prep v${APP_VERSION} · content reflects public information through mid-2026 — verify deal and firm facts before interviews.</p>`;
  return { html, tab: 'home' };
}

CHANGE.setting = (el) => {
  S.settings[el.dataset.k] = Number(el.value);
  save();
  toast('Saved');
};
CHANGE.settingBool = (el) => {
  S.settings[el.dataset.k] = el.checked;
  save();
  toast('Saved');
};
ACT.setTheme = (el) => {
  S.settings.theme = el.dataset.v;
  save();
  applyTheme();
  rerender();
};
ACT.exportFile = () => {
  const blob = new Blob([exportData()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `fig-prep-backup-${dayKey()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  toast('Backup saved');
};
ACT.copyBackup = async () => {
  try {
    await navigator.clipboard.writeText(exportData());
    toast('Backup copied — paste it into Notes or email it to yourself');
  } catch {
    toast('Copy failed — use “Save backup” instead');
  }
};
function doImport(text) {
  if (!confirm('Replace everything on this device with this backup?')) return;
  try {
    importData(text);
    applyTheme();
    toast('Backup restored');
    rerender();
  } catch (e) {
    toast(e.message || 'Could not read that backup');
  }
}
CHANGE.importFile = async (el) => {
  const file = el.files && el.files[0];
  if (!file) return;
  doImport(await file.text());
  el.value = '';
};
SUBMIT.importPaste = (form) => {
  const txt = String(new FormData(form).get('txt') || '').trim();
  if (txt) doImport(txt);
};
ACT.resetProgress = () => {
  if (!confirm('Reset all study progress, stats and the error log? Your notes, interview dates and custom cards stay.')) return;
  resetAll(true);
  toast('Progress reset');
  rerender();
};
ACT.resetAll = () => {
  if (!confirm('Erase ALL data on this device, including notes and custom cards? This cannot be undone.')) return;
  resetAll(false);
  toast('Everything erased');
  rerender();
};
