/* ============================================================
   Autism Parenting Center — directory.js
   Support Organization Directory — filtering & rendering
   ============================================================ */

(function () {

  const CATEGORY_META = {
    government:     { label: 'Government & Public Benefits', color: '#3b82f6' },
    'parent-family':{ label: 'Parent & Family Support',      color: '#8b5cf6' },
    advocacy:       { label: 'Advocacy, Legal & Rights',     color: '#ef4444' },
    respite:        { label: 'Respite & Wellness',           color: '#10b981' },
  };

  let selectedState    = 'all';
  let selectedCategory = 'all';

  const stateSelect  = document.getElementById('stateFilter');
  const catBtns      = document.querySelectorAll('.dir-cat-btn');
  const resultsEl    = document.getElementById('directoryResults');
  const countEl      = document.getElementById('resultCount');

  // ---- Populate state dropdown from data ----

  Object.keys(DIRECTORY_DATA).sort().forEach(state => {
    const opt = document.createElement('option');
    opt.value       = state;
    opt.textContent = state;
    stateSelect.appendChild(opt);
  });

  // ---- Filter controls ----

  stateSelect.addEventListener('change', () => {
    selectedState = stateSelect.value;
    render();
  });

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.dataset.cat;
      render();
    });
  });

  // ---- Data helpers ----

  function getFiltered() {
    let orgs = [];

    if (selectedState === 'all') {
      Object.keys(DIRECTORY_DATA).sort().forEach(state => {
        (DIRECTORY_DATA[state] || []).forEach(org => orgs.push({ ...org, _state: state }));
      });
    } else {
      (DIRECTORY_DATA[selectedState] || []).forEach(org =>
        orgs.push({ ...org, _state: selectedState })
      );
    }

    if (selectedCategory !== 'all') {
      orgs = orgs.filter(o => o.category === selectedCategory);
    }

    return orgs;
  }

  // ---- Rendering ----

  function render() {
    const orgs = getFiltered();
    const noun = orgs.length === 1 ? 'organization' : 'organizations';
    countEl.textContent = `${orgs.length} ${noun}`;

    if (orgs.length === 0) {
      resultsEl.innerHTML = '<p class="dir-empty">No organizations found for the selected filters.</p>';
      return;
    }

    resultsEl.innerHTML = '';

    if (selectedState === 'all') {
      // Group by state
      const byState = {};
      orgs.forEach(o => {
        if (!byState[o._state]) byState[o._state] = [];
        byState[o._state].push(o);
      });

      Object.keys(byState).sort().forEach(state => {
        const group = document.createElement('div');
        group.className = 'dir-state-group';

        const heading = document.createElement('h3');
        heading.className = 'dir-state-heading';
        heading.textContent = state;
        group.appendChild(heading);

        const grid = document.createElement('div');
        grid.className = 'dir-cards-grid';
        byState[state].forEach(o => grid.appendChild(makeCard(o)));
        group.appendChild(grid);

        resultsEl.appendChild(group);
      });
    } else {
      const grid = document.createElement('div');
      grid.className = 'dir-cards-grid';
      orgs.forEach(o => grid.appendChild(makeCard(o)));
      resultsEl.appendChild(grid);
    }
  }

  function makeCard(org) {
    const meta  = CATEGORY_META[org.category] || { label: org.category, color: '#6b7280' };
    const card  = document.createElement('div');
    card.className = 'dir-card';

    let linksHTML = '';
    if (org.website) {
      linksHTML += `<a href="${org.website}" target="_blank" rel="noopener" class="dir-link">Visit Website →</a>`;
    }
    if (org.phone) {
      const dialable = org.phone.replace(/\D/g, '');
      linksHTML += `<a href="tel:${dialable}" class="dir-link dir-link-phone">${org.phone}</a>`;
    }

    card.innerHTML = `
      <span class="dir-badge" style="background:${meta.color}">${meta.label}</span>
      <h4 class="dir-org-name">${org.name}</h4>
      <p class="dir-desc">${org.description || ''}</p>
      ${linksHTML ? `<div class="dir-links">${linksHTML}</div>` : ''}
    `;

    return card;
  }

  // ---- Initial render ----
  render();

})();
