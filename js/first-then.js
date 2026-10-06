/* ============================================================
   Autism Parenting Center - first-then.js
   "First-Then Board Builder" tool, with photo uploads and a
   timer view that shows the board and the countdown together.
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

  // ---- Activities (same ready steps as the Visual Schedule Builder) ----
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

  // ---- Image compression (same approach as the Social Story Creator) ----
  const MAX_SIDE = 900;
  const JPEG_Q  = 0.78;

  function compressDataURL(dataURL, callback) {
    const img = new Image();
    img.onload = function () {
      let w = img.naturalWidth;
      let h = img.naturalHeight;
      if (w > MAX_SIDE || h > MAX_SIDE) {
        if (w >= h) { h = Math.round(h * MAX_SIDE / w); w = MAX_SIDE; }
        else        { w = Math.round(w * MAX_SIDE / h); h = MAX_SIDE; }
      }
      const canvas = document.createElement('canvas');
      canvas.width  = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL('image/jpeg', JPEG_Q));
    };
    img.src = dataURL;
  }

  // ---- State: one selection per box ----
  // A selection is { actKey, icon, text, image }:
  // - actKey set: a ready picture step (label follows the site language)
  // - image set: an uploaded photo (text, if typed, is its caption)
  // - otherwise text is a step the parent typed
  let firstSel = null;
  let thenSel  = null;

  // ---- DOM ----
  const $ = (id) => document.getElementById(id);
  const firstChips   = $('ftFirstChips');
  const thenChips    = $('ftThenChips');
  const firstCustom  = $('ft_first_custom');
  const thenCustom   = $('ft_then_custom');
  const nameInput    = $('ft_name_input');
  const generateBtn  = $('ftGenerate');
  const errorBox     = $('ftError');
  const printArea    = $('printArea');
  const printControls = $('ftPrintControls');
  if (!firstChips || !thenChips || !generateBtn) return;

  function selLabel(sel) {
    if (!sel) return '';
    if (sel.actKey) return t('vs_act_' + sel.actKey);
    return sel.text || '';
  }

  // ---- Chip groups (single select) ----

  function renderGroup(box, getSel, setSel) {
    box.innerHTML = '';
    const sel = getSel();
    ACTIVITIES.forEach(act => {
      const active = sel && sel.actKey === act.key;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'aamc-chip vs-chip' + (active ? ' active' : '');
      b.textContent = act.icon + ' ' + t('vs_act_' + act.key);
      b.addEventListener('click', () => {
        setSel(active ? null : { actKey: act.key, icon: act.icon, text: '', image: null });
        renderAll();
      });
      box.appendChild(b);
    });
  }

  function renderChips() {
    renderGroup(firstChips, () => firstSel, (v) => { firstSel = v; if (v) firstCustom.value = ''; });
    renderGroup(thenChips,  () => thenSel,  (v) => { thenSel = v;  if (v) thenCustom.value = ''; });
  }

  // Typing in a box: with a photo it becomes the photo caption,
  // without a photo it is the step itself. Clearing it clears a
  // word step, or just the caption of a photo.
  firstCustom.addEventListener('input', () => {
    const text = firstCustom.value.trim();
    if (firstSel && firstSel.image) firstSel.text = text;
    else firstSel = text ? { actKey: null, icon: '⭐', text: text, image: null } : null;
    renderAll();
  });
  thenCustom.addEventListener('input', () => {
    const text = thenCustom.value.trim();
    if (thenSel && thenSel.image) thenSel.text = text;
    else thenSel = text ? { actKey: null, icon: '⭐', text: text, image: null } : null;
    renderAll();
  });

  // ---- Photo upload per box ----

  function wireUpload(btnId, inputId, wrapId, imgId, removeId, getSel, setSel, customInput) {
    const btn = $(btnId), input = $(inputId), removeBtn = $(removeId);
    if (!btn || !input) return;
    btn.addEventListener('click', () => input.click());
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file || !file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        compressDataURL(e.target.result, (compressed) => {
          setSel({ actKey: null, icon: '', text: customInput.value.trim(), image: compressed });
          renderAll();
        });
      };
      reader.readAsDataURL(file);
      input.value = '';
    });
    if (removeBtn) removeBtn.addEventListener('click', () => {
      setSel(null);
      customInput.value = '';
      renderAll();
    });
  }

  function renderPhoto(wrapId, imgId, sel) {
    const wrap = $(wrapId), img = $(imgId);
    if (!wrap || !img) return;
    if (sel && sel.image) {
      img.src = sel.image;
      wrap.hidden = false;
    } else {
      img.src = '';
      wrap.hidden = true;
    }
  }

  wireUpload('ftFirstUploadBtn', 'ftFirstUpload', 'ftFirstPhotoWrap', 'ftFirstPhoto', 'ftFirstPhotoRemove',
             () => firstSel, (v) => { firstSel = v; }, firstCustom);
  wireUpload('ftThenUploadBtn', 'ftThenUpload', 'ftThenPhotoWrap', 'ftThenPhoto', 'ftThenPhotoRemove',
             () => thenSel, (v) => { thenSel = v; }, thenCustom);

  function renderAll() {
    renderChips();
    renderPhoto('ftFirstPhotoWrap', 'ftFirstPhoto', firstSel);
    renderPhoto('ftThenPhotoWrap', 'ftThenPhoto', thenSel);
    if (generated && firstSel && thenSel) buildBoard();
  }

  // ---- Board builder ----

  let generated = false;

  function boxHtml(wordKey, sel, cls) {
    let visual;
    if (sel.image) {
      visual = '<img class="ft-box-img" src="' + sel.image + '" alt="' + escapeHtml(selLabel(sel)) + '" />' +
               (sel.text ? '<div class="ft-box-label">' + escapeHtml(sel.text) + '</div>' : '');
    } else {
      visual = '<div class="ft-box-icon" aria-hidden="true">' + sel.icon + '</div>' +
               '<div class="ft-box-label">' + escapeHtml(selLabel(sel)) + '</div>';
    }
    return '' +
      '<div class="ft-box ' + cls + '">' +
        '<div class="ft-box-word">' + escapeHtml(t(wordKey)) + '</div>' +
        visual +
      '</div>';
  }

  function boardRowHtml() {
    return '' +
      boxHtml('ft_first_word', firstSel, 'ft-first') +
      '<div class="ft-arrow" aria-hidden="true">➜</div>' +
      boxHtml('ft_then_word', thenSel, 'ft-then');
  }

  function buildBoard() {
    const name = nameInput.value.trim();
    printArea.innerHTML =
      '<div class="ft-board">' +
        (name ? '<header class="ft-header">' + escapeHtml(name) + '</header>' : '') +
        '<div class="ft-row">' + boardRowHtml() + '</div>' +
        '<footer class="ft-footer">' + escapeHtml(t('aamc_s_madeby')) + '</footer>' +
      '</div>';
  }

  function generate() {
    if (!firstSel || !thenSel) {
      errorBox.textContent = t('ft_error');
      errorBox.hidden = false;
      return;
    }
    errorBox.hidden = true;
    buildBoard();
    printArea.classList.add('show');
    printControls.hidden = false;
    generated = true;
    generateBtn.setAttribute('data-i18n', 'ft_recreate');
    generateBtn.textContent = t('ft_recreate');
    printArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  generateBtn.addEventListener('click', generate);
  nameInput.addEventListener('input', () => { if (generated && firstSel && thenSel) buildBoard(); });

  // ---- Timer view: board + countdown on one screen ----

  const MINUTE_CHOICES = [1, 2, 5, 10, 15, 20, 30];
  let selectedMin = 5;

  const minChips   = $('ftMinChips');
  const customMin  = $('ft_custom_min');
  const timerStartBtn = $('ftTimerStart');
  const timerView  = $('ftTimerView');
  const timerBoard = $('ftTimerBoard');
  const timerStatus = $('ftTimerStatus');
  const timerCircle = $('ftTimerCircle');
  const timerTime  = $('ftTimerTime');
  const timerPauseBtn = $('ftTimerPause');
  const timerCloseBtn = $('ftTimerClose');

  function renderMinChips() {
    if (!minChips) return;
    minChips.innerHTML = '';
    MINUTE_CHOICES.forEach(min => {
      const active = selectedMin === min && !(customMin && customMin.value);
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'aamc-chip vs-chip' + (active ? ' active' : '');
      b.textContent = min + ' ' + t('ft_timer_min');
      b.addEventListener('click', () => {
        selectedMin = min;
        if (customMin) customMin.value = '';
        renderMinChips();
      });
      minChips.appendChild(b);
    });
  }

  if (customMin) customMin.addEventListener('input', () => {
    const v = parseInt(customMin.value, 10);
    if (v > 0) selectedMin = v;
    renderMinChips();
  });

  const timer = { total: 0, remaining: 0, endAt: 0, intId: null, paused: false, done: false };

  function fmt(sec) {
    sec = Math.max(0, Math.ceil(sec));
    return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  }

  function paintTimer() {
    const pct = timer.total > 0 ? (timer.remaining / timer.total) * 100 : 0;
    const color = timer.done ? '#6daf7e' : (pct <= 20 ? '#e8853d' : '#4a8abf');
    timerCircle.style.background =
      'conic-gradient(' + color + ' ' + pct + '%, #e3edf4 ' + pct + '%)';
    timerTime.textContent = fmt(timer.remaining);
  }

  function stopInterval() {
    if (timer.intId) { clearInterval(timer.intId); timer.intId = null; }
  }

  function finishTimer() {
    stopInterval();
    timer.remaining = 0;
    timer.done = true;
    timerView.classList.add('ft-timer-done');
    timerStatus.textContent = t('ft_timer_timeup');
    const firstBox = timerBoard.querySelector('.ft-first');
    if (firstBox && !firstBox.querySelector('.ft-done-badge')) {
      const badge = document.createElement('div');
      badge.className = 'ft-done-badge';
      badge.textContent = '✓ ' + t('vs_done');
      firstBox.appendChild(badge);
    }
    timerPauseBtn.hidden = true;
    paintTimer();
  }

  function tick() {
    timer.remaining = (timer.endAt - Date.now()) / 1000;
    if (timer.remaining <= 0) { finishTimer(); return; }
    paintTimer();
  }

  function startTimer() {
    if (!firstSel || !thenSel) return;
    timer.total = selectedMin * 60;
    timer.remaining = timer.total;
    timer.done = false;
    timer.paused = false;
    timerView.classList.remove('ft-timer-done');
    timerBoard.innerHTML = '<div class="ft-row">' + boardRowHtml() + '</div>';
    timerStatus.textContent = t('ft_first_word') + ': ' + (selLabel(firstSel) || '⭐');
    timerPauseBtn.hidden = false;
    timerPauseBtn.textContent = t('ft_timer_pause');
    timerView.hidden = false;
    document.body.style.overflow = 'hidden';
    timer.endAt = Date.now() + timer.remaining * 1000;
    stopInterval();
    timer.intId = setInterval(tick, 250);
    paintTimer();
    timerView.scrollIntoView({ block: 'start' });
  }

  function togglePause() {
    if (timer.done) return;
    if (timer.paused) {
      timer.paused = false;
      timer.endAt = Date.now() + timer.remaining * 1000;
      timer.intId = setInterval(tick, 250);
      timerPauseBtn.textContent = t('ft_timer_pause');
    } else {
      timer.paused = true;
      timer.remaining = (timer.endAt - Date.now()) / 1000;
      stopInterval();
      paintTimer();
      timerPauseBtn.textContent = t('ft_timer_resume');
    }
  }

  function closeTimer() {
    stopInterval();
    timerView.hidden = true;
    document.body.style.overflow = '';
  }

  if (timerStartBtn) timerStartBtn.addEventListener('click', startTimer);
  if (timerPauseBtn) timerPauseBtn.addEventListener('click', togglePause);
  if (timerCloseBtn) timerCloseBtn.addEventListener('click', closeTimer);

  // Re-render when the site language changes
  document.addEventListener('langchange', () => {
    renderAll();
    renderMinChips();
  });

  renderChips();
  renderMinChips();
})();
