/* ============================================================
   Autism Parenting Center - visual-schedule.js
   "Visual Schedule Builder" tool.
   Everything stays in the browser: nothing is uploaded or stored.
   ============================================================ */

(function () {
  'use strict';

  // ---- i18n helper ----
  function t(key) {
    const lang = localStorage.getItem('apc_lang') || 'en';
    return (window.translations && window.translations[lang] && window.translations[lang][key]) || key;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ---- Activities ----
  const ACTIVITIES = [
    { key: 'wake',      icon: '☀️' },
    { key: 'bathroom',  icon: '🚽' },
    { key: 'hands',     icon: '🧼' },
    { key: 'dressed',   icon: '👕' },
    { key: 'teeth',     icon: '🪥' },
    { key: 'breakfast', icon: '🥞' },
    { key: 'backpack',  icon: '🎒' },
    { key: 'bus',       icon: '🚌' },
    { key: 'school',    icon: '🏫' },
    { key: 'lunch',     icon: '🍽️' },
    { key: 'snack',     icon: '🍎' },
    { key: 'homework',  icon: '📚' },
    { key: 'play',      icon: '⚽' },
    { key: 'dinner',    icon: '🥘' },
    { key: 'bath',      icon: '🛁' },
    { key: 'pajamas',   icon: '🌙' },
    { key: 'book',      icon: '📖' },
    { key: 'bed',       icon: '🛏️' },
  ];
  const MAX_STEPS = 10;

  // ---- State: steps are { actKey, icon, text } ----
  // Preset steps keep actKey so their label follows the site language.
  // Custom steps keep the text the parent typed.
  let steps = [];

  // ---- DOM ----
  const chipsBox     = document.getElementById('vsChips');
  const stepsList    = document.getElementById('vsStepsList');
  const stepsEmpty   = document.getElementById('vsStepsEmpty');
  const customInput  = document.getElementById('vs_custom_input');
  const customAddBtn = document.getElementById('vsCustomAdd');
  const titleInput   = document.getElementById('vs_title_input');
  const nameInput    = document.getElementById('vs_name_input');
  const generateBtn  = document.getElementById('vsGenerate');
  const errorBox     = document.getElementById('vsError');
  const printArea    = document.getElementById('printArea');
  const printControls = document.getElementById('vsPrintControls');
  if (!chipsBox || !generateBtn) return;

  function stepLabel(step) {
    return step.actKey ? t('vs_act_' + step.actKey) : step.text;
  }

  // ---- Activity chips ----

  function renderChips() {
    chipsBox.innerHTML = '';
    ACTIVITIES.forEach(act => {
      const used = steps.some(s => s.actKey === act.key);
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'aamc-chip vs-chip' + (used ? ' active' : '');
      b.textContent = act.icon + ' ' + t('vs_act_' + act.key);
      b.disabled = used || steps.length >= MAX_STEPS;
      b.addEventListener('click', () => {
        steps.push({ actKey: act.key, icon: act.icon, text: '' });
        renderAll();
      });
      chipsBox.appendChild(b);
    });
  }

  // ---- Steps list ----

  function renderSteps() {
    stepsList.innerHTML = '';
    stepsEmpty.style.display = steps.length ? 'none' : 'block';
    steps.forEach((step, i) => {
      const li = document.createElement('li');
      li.className = 'vs-step-row';

      const num = document.createElement('span');
      num.className = 'vs-step-num';
      num.textContent = (i + 1) + '.';

      const label = document.createElement('span');
      label.className = 'vs-step-label';
      label.textContent = step.icon + ' ' + stepLabel(step);

      const controls = document.createElement('span');
      controls.className = 'vs-step-controls';

      const up = document.createElement('button');
      up.type = 'button';
      up.textContent = '↑';
      up.title = t('vs_up');
      up.setAttribute('aria-label', t('vs_up'));
      up.disabled = i === 0;
      up.addEventListener('click', () => {
        [steps[i - 1], steps[i]] = [steps[i], steps[i - 1]];
        renderAll();
      });

      const down = document.createElement('button');
      down.type = 'button';
      down.textContent = '↓';
      down.title = t('vs_down');
      down.setAttribute('aria-label', t('vs_down'));
      down.disabled = i === steps.length - 1;
      down.addEventListener('click', () => {
        [steps[i + 1], steps[i]] = [steps[i], steps[i + 1]];
        renderAll();
      });

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = '✕';
      remove.title = t('vs_remove');
      remove.setAttribute('aria-label', t('vs_remove'));
      remove.addEventListener('click', () => {
        steps.splice(i, 1);
        renderAll();
      });

      controls.appendChild(up);
      controls.appendChild(down);
      controls.appendChild(remove);
      li.appendChild(num);
      li.appendChild(label);
      li.appendChild(controls);
      stepsList.appendChild(li);
    });
  }

  function renderAll() {
    renderChips();
    renderSteps();
    if (generated) buildSchedule();
  }

  // ---- Custom step ----

  function addCustom() {
    const text = customInput.value.trim();
    if (!text || steps.length >= MAX_STEPS) return;
    steps.push({ actKey: null, icon: '⭐', text: text });
    customInput.value = '';
    renderAll();
  }

  customAddBtn.addEventListener('click', addCustom);
  customInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addCustom(); }
  });

  // ---- Schedule sheet builder ----

  let generated = false;

  function buildSchedule() {
    const title = titleInput.value.trim() || t('vs_default_title');
    const name  = nameInput.value.trim();

    let cards = '';
    steps.forEach((step, i) => {
      cards +=
        '<div class="vs-card">' +
          '<div class="vs-card-num">' + (i + 1) + '</div>' +
          '<div class="vs-card-icon" aria-hidden="true">' + step.icon + '</div>' +
          '<div class="vs-card-label">' + escapeHtml(stepLabel(step)) + '</div>' +
          '<div class="vs-card-done"><span class="vs-check" aria-hidden="true"></span> ' + escapeHtml(t('vs_done')) + '</div>' +
        '</div>' +
        (i < steps.length - 1 ? '<div class="vs-arrow" aria-hidden="true">➜</div>' : '');
    });

    printArea.innerHTML =
      '<div class="vs-sheet">' +
        '<header class="vs-header">' +
          '<h1 class="vs-sheet-title">' + escapeHtml(title) + '</h1>' +
          (name ? '<div class="vs-sheet-name">' + escapeHtml(name) + '</div>' : '') +
        '</header>' +
        '<div class="vs-strip">' + cards + '</div>' +
        '<footer class="vs-footer">' + escapeHtml(t('aamc_s_madeby')) + '</footer>' +
      '</div>';
  }

  function generate() {
    if (steps.length < 2) {
      errorBox.textContent = t('vs_error_steps');
      errorBox.hidden = false;
      return;
    }
    errorBox.hidden = true;
    buildSchedule();
    printArea.classList.add('show');
    printControls.hidden = false;
    generated = true;
    generateBtn.setAttribute('data-i18n', 'vs_recreate');
    generateBtn.textContent = t('vs_recreate');
    printArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  generateBtn.addEventListener('click', generate);
  titleInput.addEventListener('input', () => { if (generated) buildSchedule(); });
  nameInput.addEventListener('input', () => { if (generated) buildSchedule(); });

  // Re-render when the site language changes
  document.addEventListener('langchange', renderAll);

  renderAll();
})();
