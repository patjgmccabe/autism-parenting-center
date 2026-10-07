/* ============================================================
   Autism Parenting Center - tool-finder.js
   "Find the Right Tool in 30 Seconds" quiz on the homepage.

   STANDING RULE (Patrick, 2026-10-07): whenever a new tool or
   resource is created for this site, it MUST be added to
   TF_CATALOG below (with needs, subs, and formats tags, and
   EN/ES title and description keys in js/script.js), so this
   finder always shows everything the site offers.
   ============================================================ */

(function () {
  'use strict';

  function t(key) {
    const lang = localStorage.getItem('apc_lang') || 'en';
    return (window.translations && window.translations[lang] && window.translations[lang][key]) || key;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ---- The catalog: every tool and resource on the site ----
  // needs: which Question 1 answers it fits
  // subs: which Question 2 answers it fits best
  // formats: print / screen / read
  const TF_CATALOG = [
    { href: 'social-stories.html', icon: '📖', cls: 'card-stories',  tKey: 'card_stories_title',  dKey: 'card_stories_desc',  lKey: 'card_stories_link',
      needs: ['routines', 'moments', 'communication'], subs: ['changes', 'stories', 'bedtime'], formats: ['print', 'screen'] },
    { href: 'visual-schedule.html', icon: '🗓️', cls: 'card-schedule', tKey: 'card_schedule_title', dKey: 'card_schedule_desc', lKey: 'card_schedule_link',
      needs: ['routines'], subs: ['wholeday', 'morning', 'bedtime'], formats: ['print', 'screen'] },
    { href: 'first-then.html', icon: '➡️', cls: 'card-firstthen', tKey: 'card_firstthen_title', dKey: 'card_firstthen_desc', lKey: 'card_firstthen_link',
      needs: ['routines', 'moments'], subs: ['firstthen', 'transitions'], formats: ['print', 'screen'] },
    { href: 'all-about-my-child.html', icon: '💙', cls: 'card-child', tKey: 'card_child_title', dKey: 'card_child_desc', lKey: 'card_child_link',
      needs: ['school', 'safety', 'starting', 'moments'], subs: ['teacher', 'emergencies', 'bigfeelings'], formats: ['print'] },
    { href: 'worksheets.html', icon: '✏️', cls: 'card-worksheets', tKey: 'card_worksheets_title', dKey: 'card_worksheets_desc', lKey: 'card_worksheets_link',
      needs: ['communication'], subs: ['asking'], formats: ['print'] },
    { href: 'iep-cheat-sheet.html', icon: '📋', cls: 'card-iep', tKey: 'card_iep_title', dKey: 'card_iep_desc', lKey: 'card_iep_link',
      needs: ['school'], subs: ['iep'], formats: ['print', 'read'] },
    { href: 'elopement-cheat-sheet.html', icon: '🦺', cls: 'card-iep', tKey: 'tf_res_elopementsheet_t', dKey: 'tf_res_elopementsheet_d', lKey: null,
      needs: ['safety'], subs: ['wandering'], formats: ['print', 'read'] },
    { href: 'blog/elopement-safety-guide.html', icon: '🧭', cls: 'card-blog', tKey: 'tf_res_elopementguide_t', dKey: 'tf_res_elopementguide_d', lKey: null,
      needs: ['safety'], subs: ['wandering'], formats: ['read'] },
    { href: 'start-here.html', icon: '🧱', cls: 'card-blog', tKey: 'tf_res_starthere_t', dKey: 'tf_res_starthere_d', lKey: null,
      needs: ['starting'], subs: ['newdx', 'basics'], formats: ['read'] },
    { href: 'blog/aba-therapy-guide.html', icon: '🧩', cls: 'card-blog', tKey: 'tf_res_aba_t', dKey: 'tf_res_aba_d', lKey: null,
      needs: ['starting'], subs: ['basics', 'newdx'], formats: ['read'] },
    { href: 'blog/what-is-an-iep.html', icon: '🏫', cls: 'card-blog', tKey: 'tf_res_whatisep_t', dKey: 'tf_res_whatisep_d', lKey: null,
      needs: ['school', 'starting'], subs: ['iep', 'basics'], formats: ['read'] },
    { href: 'blog/iep-vs-504-plan.html', icon: '⚖️', cls: 'card-blog', tKey: 'tf_res_iep504_t', dKey: 'tf_res_iep504_d', lKey: null,
      needs: ['school'], subs: ['iep504', 'iep'], formats: ['read'] },
    { href: 'blog/minimally-verbal-autism-communication.html', icon: '💬', cls: 'card-blog', tKey: 'tf_res_minverbal_t', dKey: 'tf_res_minverbal_d', lKey: null,
      needs: ['communication'], subs: ['nottalking'], formats: ['read'] },
    { href: 'blog/what-is-a-social-story.html', icon: '📘', cls: 'card-blog', tKey: 'tf_res_socialstoryarticle_t', dKey: 'tf_res_socialstoryarticle_d', lKey: null,
      needs: ['moments', 'starting'], subs: ['changes', 'basics'], formats: ['read'] },
    { href: 'blog/visual-schedules-autism.html', icon: '🖼️', cls: 'card-blog', tKey: 'tf_res_visualschedulesarticle_t', dKey: 'tf_res_visualschedulesarticle_d', lKey: null,
      needs: ['routines', 'starting'], subs: ['wholeday', 'basics'], formats: ['read'] },
    { href: 'blog/free-autism-resources.html', icon: '🎁', cls: 'card-blog', tKey: 'tf_res_freeresources_t', dKey: 'tf_res_freeresources_d', lKey: null,
      needs: ['starting'], subs: ['basics', 'newdx'], formats: ['read'] },
    { href: 'directory.html', icon: '🗂️', cls: 'card-directory', tKey: 'card_dir_title', dKey: 'card_dir_desc', lKey: 'card_dir_link',
      needs: ['starting', 'school', 'safety'], subs: ['findhelp'], formats: ['screen'] },
    { href: 'glossary.html', icon: '📖', cls: 'card-articles', tKey: 'tf_res_glossary_t', dKey: 'tf_res_glossary_d', lKey: null,
      needs: ['starting', 'school'], subs: ['basics'], formats: ['read', 'screen'] },
    { href: 'books.html', icon: '📚', cls: 'card-books', tKey: 'card_books_title', dKey: 'card_books_desc', lKey: 'card_books_link',
      needs: ['starting'], subs: ['books'], formats: ['read'] },
    { href: 'resources.html', icon: '📰', cls: 'card-articles', tKey: 'card_articles_title', dKey: 'card_articles_desc', lKey: 'card_articles_link',
      needs: ['starting'], subs: ['news', 'basics'], formats: ['read'] },
    { href: 'newsletter.html', icon: '📬', cls: 'card-articles', tKey: 'tf_res_newsletter_t', dKey: 'tf_res_newsletter_d', lKey: null,
      needs: ['starting'], subs: ['news'], formats: ['read'] },
  ];

  // ---- Questions ----
  const NEED_OPTIONS = [
    { v: 'routines',      k: 'tf_q1_routines' },
    { v: 'moments',       k: 'tf_q1_moments' },
    { v: 'communication', k: 'tf_q1_communication' },
    { v: 'school',        k: 'tf_q1_school' },
    { v: 'safety',        k: 'tf_q1_safety' },
    { v: 'starting',      k: 'tf_q1_starting' },
  ];

  const SUB_OPTIONS = {
    routines:      ['wholeday', 'morning', 'firstthen', 'bedtime'],
    moments:       ['transitions', 'changes', 'bigfeelings'],
    communication: ['nottalking', 'asking', 'stories'],
    school:        ['iep', 'iep504', 'teacher', 'basics'],
    safety:        ['wandering', 'emergencies'],
    starting:      ['newdx', 'basics', 'findhelp', 'books', 'news'],
  };

  const FORMAT_OPTIONS = [
    { v: 'print',  k: 'tf_fmt_print' },
    { v: 'screen', k: 'tf_fmt_screen' },
    { v: 'read',   k: 'tf_fmt_read' },
    { v: 'any',    k: 'tf_fmt_any' },
  ];

  // ---- State and rendering ----
  const quizEl = document.getElementById('tfQuiz');
  if (!quizEl) return;
  const progressEl = document.getElementById('tfProgress');
  const questionEl = document.getElementById('tfQuestion');
  const optionsEl  = document.getElementById('tfOptions');
  const backBtn    = document.getElementById('tfBack');
  const resultsEl  = document.getElementById('tfResults');
  const resultsGrid = document.getElementById('tfResultsGrid');
  const restartBtn = document.getElementById('tfRestart');

  let step = 0; // 0 need, 1 sub, 2 format, 3 results
  const answers = { need: null, sub: null, format: null };

  function optionButtons(options, onPick) {
    optionsEl.innerHTML = '';
    options.forEach(opt => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'tf-option';
      b.textContent = t(opt.k);
      b.addEventListener('click', () => onPick(opt.v));
      optionsEl.appendChild(b);
    });
  }

  function render() {
    if (step < 3) {
      quizEl.hidden = false;
      resultsEl.hidden = true;
      progressEl.textContent = t('tf_q_word') + ' ' + (step + 1) + ' ' + t('tf_of') + ' 3';
      backBtn.hidden = step === 0;
    }
    if (step === 0) {
      questionEl.textContent = t('tf_q1');
      optionButtons(NEED_OPTIONS, (v) => { answers.need = v; step = 1; render(); });
    } else if (step === 1) {
      questionEl.textContent = t('tf_q2');
      const subs = (SUB_OPTIONS[answers.need] || []).map(v => ({ v: v, k: 'tf_sub_' + v }));
      optionButtons(subs, (v) => { answers.sub = v; step = 2; render(); });
    } else if (step === 2) {
      questionEl.textContent = t('tf_q3');
      optionButtons(FORMAT_OPTIONS, (v) => { answers.format = v; step = 3; render(); });
    } else {
      quizEl.hidden = true;
      resultsEl.hidden = false;
      renderResults();
    }
  }

  function renderResults() {
    const scored = TF_CATALOG.map((entry, i) => {
      let score = 0;
      if (entry.needs.includes(answers.need)) score += 2;
      if (entry.subs.includes(answers.sub)) score += 3;
      if (answers.format !== 'any') score += entry.formats.includes(answers.format) ? 1 : -1;
      return { entry: entry, score: score, i: i };
    }).filter(x => x.entry.needs.includes(answers.need) || x.entry.subs.includes(answers.sub));
    scored.sort((a, b) => (b.score - a.score) || (a.i - b.i));
    const top = scored.slice(0, 3);

    resultsGrid.innerHTML = '';
    top.forEach(({ entry }) => {
      const a = document.createElement('a');
      a.href = entry.href;
      a.className = 'card ' + entry.cls;
      a.innerHTML =
        '<div class="card-icon">' + entry.icon + '</div>' +
        '<h3>' + escapeHtml(t(entry.tKey)) + '</h3>' +
        '<p>' + escapeHtml(t(entry.dKey)) + '</p>' +
        '<span class="card-arrow">' + escapeHtml(entry.lKey ? t(entry.lKey) : t('tf_res_open')) + '</span>';
      resultsGrid.appendChild(a);
    });
  }

  backBtn.addEventListener('click', () => { if (step > 0 && step < 3) { step--; render(); } });
  restartBtn.addEventListener('click', () => {
    answers.need = null; answers.sub = null; answers.format = null;
    step = 0; render();
  });

  document.addEventListener('langchange', render);
  render();
})();
