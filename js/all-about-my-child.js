/* ============================================================
   Autism Parenting Center - all-about-my-child.js
   "All About My Child" one-pager tool.
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

  // ---- DOM ----
  const form       = document.getElementById('aamcForm');
  const generateBtn = document.getElementById('aamcGenerate');
  const errorBox   = document.getElementById('aamcError');
  const printArea  = document.getElementById('printArea');
  const printControls = document.getElementById('printControls');
  if (!form || !generateBtn) return;

  const FIELDS = ['f_name','f_age','f_interests','f_strengths','f_communicate',
                  'f_calm','f_hard','f_help','f_important','f_contact_name','f_contact_phone'];
  const els = {};
  FIELDS.forEach(id => { els[id] = document.getElementById(id); });

  // ---- Quick-pick chips ----
  const CHIP_GROUPS = {
    chips_communicate: { field: 'f_communicate', keys: [1,2,3,4,5,6].map(i => 'aamc_chip_comm_' + i) },
    chips_calm:        { field: 'f_calm',        keys: [1,2,3,4,5,6].map(i => 'aamc_chip_calm_' + i) },
    chips_hard:        { field: 'f_hard',        keys: [1,2,3,4,5,6].map(i => 'aamc_chip_hard_' + i) },
  };

  function getChipLabels(containerId) {
    return CHIP_GROUPS[containerId].keys.map(t);
  }

  function refreshChipStates(containerId) {
    const group = CHIP_GROUPS[containerId];
    const ta = els[group.field];
    const labels = getChipLabels(containerId);
    const box = document.getElementById(containerId);
    box.querySelectorAll('.aamc-chip').forEach((chip, i) => {
      chip.classList.toggle('active', ta.value.indexOf(labels[i]) !== -1);
    });
  }

  function toggleChip(containerId, label) {
    const ta = els[CHIP_GROUPS[containerId].field];
    let v = ta.value;
    const idx = v.indexOf(label);
    if (idx !== -1) {
      // Remove this label and tidy up separators
      v = (v.slice(0, idx) + v.slice(idx + label.length));
      v = v.replace(/\s*,\s*,\s*/g, ', ').replace(/^\s*,\s*/, '').replace(/\s*,\s*$/, '').replace(/\s{2,}/g, ' ').trim();
      ta.value = v;
    } else {
      v = v.trim();
      ta.value = v ? v.replace(/\s*,\s*$/, '') + ', ' + label : label;
    }
    refreshChipStates(containerId);
  }

  function renderChips() {
    Object.keys(CHIP_GROUPS).forEach(containerId => {
      const box = document.getElementById(containerId);
      box.innerHTML = '';
      getChipLabels(containerId).forEach(label => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'aamc-chip';
        b.textContent = label;
        b.addEventListener('click', () => toggleChip(containerId, label));
        box.appendChild(b);
      });
      refreshChipStates(containerId);
    });
  }

  // Keep chip states in sync when the user types
  Object.keys(CHIP_GROUPS).forEach(containerId => {
    const ta = els[CHIP_GROUPS[containerId].field];
    ta.addEventListener('input', () => refreshChipStates(containerId));
  });

  // ---- One-pager builder ----
  const SECTIONS = [
    { icon: '💛', titleKey: 'aamc_s_love',      field: 'f_interests',   cls: 'op-love' },
    { icon: '⭐', titleKey: 'aamc_s_strengths', field: 'f_strengths',   cls: 'op-strengths' },
    { icon: '💬', titleKey: 'aamc_s_comm',      field: 'f_communicate', cls: 'op-comm' },
    { icon: '🌱', titleKey: 'aamc_s_calm',      field: 'f_calm',        cls: 'op-calm' },
    { icon: '⚠️', titleKey: 'aamc_s_hard',      field: 'f_hard',        cls: 'op-hard' },
    { icon: '🤝', titleKey: 'aamc_s_help',      field: 'f_help',        cls: 'op-help' },
    { icon: '📌', titleKey: 'aamc_s_important', field: 'f_important',    cls: 'op-important' },
  ];

  function values() {
    const v = {};
    FIELDS.forEach(id => { v[id] = els[id].value.trim(); });
    return v;
  }

  function buildOnePager() {
    const v = values();
    const name = escapeHtml(v.f_name);
    const age  = v.f_age ? '<span class="op-age">' + escapeHtml(v.f_age) + '</span> &bull; ' : '';

    let cards = '';
    SECTIONS.forEach(s => {
      const text = v[s.field];
      if (!text) return; // skip empty sections
      cards +=
        '<section class="op-card ' + s.cls + '">' +
          '<div class="op-card-head"><span class="op-icon" aria-hidden="true">' + s.icon + '</span>' +
          '<h2>' + escapeHtml(t(s.titleKey)) + '</h2></div>' +
          '<p>' + escapeHtml(text).replace(/\n/g, '<br>') + '</p>' +
        '</section>';
    });

    let emergency = '';
    if (v.f_contact_name || v.f_contact_phone) {
      const who = [v.f_contact_name, v.f_contact_phone].filter(Boolean).map(escapeHtml).join(' &bull; ');
      emergency = '<div class="op-emergency"><span aria-hidden="true">🚨</span> <strong>' +
                  escapeHtml(t('aamc_s_emergency')) + ':</strong> ' + who + '</div>';
    }

    printArea.innerHTML =
      '<div class="onepager">' +
        '<header class="op-header">' +
          '<div class="op-kicker">' + escapeHtml(t('aamc_s_allabout')) + '</div>' +
          '<h1 class="op-name">' + name + '</h1>' +
          '<div class="op-sub">' + age + escapeHtml(t('aamc_s_guide')) + '</div>' +
        '</header>' +
        '<div class="op-grid">' + cards + '</div>' +
        '<footer class="op-footer">' + emergency +
          '<div class="op-credit">' + escapeHtml(t('aamc_s_madeby')) + '</div>' +
        '</footer>' +
      '</div>';
  }

  let generated = false;

  function generate() {
    const name = els.f_name.value.trim();
    if (!name) {
      errorBox.textContent = t('aamc_name_required');
      errorBox.hidden = false;
      els.f_name.focus();
      return;
    }
    errorBox.hidden = true;
    buildOnePager();
    printArea.classList.add('show');
    printControls.hidden = false;
    generated = true;
    generateBtn.setAttribute('data-i18n', 'aamc_regenerate');
    generateBtn.textContent = t('aamc_regenerate');
    printArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  generateBtn.addEventListener('click', generate);

  // Re-render chips + preview when the site language changes
  document.addEventListener('langchange', () => {
    renderChips();
    if (generated) buildOnePager();
  });

  renderChips();
})();
