/* ============================================================
   Autism Parenting Center — social-stories.js
   Social Story Creator tool
   ============================================================ */

(function () {
  const panels = []; // Array of { imageDataURL, caption }
  let currentImageDataURL = null;

  // DOM references
  const uploadInput    = document.getElementById('uploadInput');
  const cameraInput    = document.getElementById('cameraInput');
  const uploadBtn      = document.getElementById('uploadBtn');
  const cameraBtn      = document.getElementById('cameraBtn');
  const uploadZone     = document.getElementById('uploadZone');
  const previewWrap    = document.getElementById('previewWrap');
  const previewImg     = document.getElementById('previewImg');
  const changePhotoBtn = document.getElementById('changePhotoBtn');
  const captionInput   = document.getElementById('captionInput');
  const continueBtn    = document.getElementById('continueBtn');
  const finishBtn      = document.getElementById('finishBtn');
  const stepBadge      = document.getElementById('stepBadge');
  const stepNumber     = document.getElementById('stepNumber');
  const progressBar    = document.getElementById('progressBar');
  const pagesStrip     = document.getElementById('pagesStrip');
  const pagesThumbs    = document.getElementById('pagesThumbs');
  const printArea      = document.getElementById('printArea');

  // ---- Helpers ----

  function t(key) {
    const lang = localStorage.getItem('apc_lang') || 'en';
    return (window.translations && window.translations[lang] && window.translations[lang][key]) || key;
  }

  // ---- Image loading ----

  function loadFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      currentImageDataURL = e.target.result;
      previewImg.src = currentImageDataURL;
      previewWrap.style.display = 'block';
      uploadZone.style.display  = 'none';
    };
    reader.readAsDataURL(file);
  }

  uploadBtn.addEventListener('click', () => uploadInput.click());
  cameraBtn.addEventListener('click', () => cameraInput.click());

  uploadInput.addEventListener('change', (e) => loadFile(e.target.files[0]));
  cameraInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

  changePhotoBtn.addEventListener('click', () => {
    currentImageDataURL = null;
    previewImg.src = '';
    previewWrap.style.display = 'none';
    uploadZone.style.display  = 'block';
    uploadInput.value = '';
    cameraInput.value = '';
  });

  // Drag & drop
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    loadFile(e.dataTransfer.files[0]);
  });

  // ---- Save / Reset ----

  function savePanel() {
    if (!currentImageDataURL) {
      alert(t('stories_error_image'));
      return false;
    }
    panels.push({ imageDataURL: currentImageDataURL, caption: captionInput.value.trim() });
    return true;
  }

  function resetForm() {
    currentImageDataURL = null;
    previewImg.src = '';
    previewWrap.style.display = 'none';
    uploadZone.style.display  = 'block';
    captionInput.value = '';
    uploadInput.value  = '';
    cameraInput.value  = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- UI update after saving a panel ----

  function updateUI() {
    const count = panels.length;

    // Step badge and title
    stepBadge.textContent  = count + 1;
    stepNumber.textContent = count + 1;

    // Progress message
    const label = count === 1 ? t('stories_progress_singular') : t('stories_progress_plural');
    progressBar.textContent = `${count} ${label}`;
    progressBar.style.display = 'block';

    // Thumbnail strip
    pagesStrip.style.display = 'block';
    const thumb = document.createElement('img');
    thumb.src       = panels[count - 1].imageDataURL;
    thumb.className = 'thumb';
    thumb.alt       = `${t('stories_step')} ${count}`;
    thumb.title     = panels[count - 1].caption || `${t('stories_step')} ${count}`;
    pagesThumbs.appendChild(thumb);
  }

  // ---- Language change: refresh step title ----

  document.addEventListener('langchange', () => {
    const count = panels.length;
    stepNumber.textContent = count + 1;
    if (count > 0) {
      const label = count === 1 ? t('stories_progress_singular') : t('stories_progress_plural');
      progressBar.textContent = `${count} ${label}`;
    }
    if (pagesStrip.style.display !== 'none') {
      document.querySelector('.pages-strip h4') &&
        (document.querySelector('.pages-strip h4').textContent = t('stories_thumbs_label'));
    }
  });

  // ---- Continue ----

  continueBtn.addEventListener('click', () => {
    if (!savePanel()) return;
    updateUI();
    resetForm();
  });

  // ---- Font size based on caption length ----

  function captionFontSize(text) {
    const len = text.length;
    if (len <= 25)  return '26pt';
    if (len <= 50)  return '20pt';
    if (len <= 80)  return '15pt';
    if (len <= 120) return '12pt';
    return '9pt';
  }

  // ---- Generate print layout ----

  function generatePrint() {
    printArea.innerHTML = '';

    const PER_PAGE = 6; // 2 columns × 3 rows

    for (let i = 0; i < panels.length; i += PER_PAGE) {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'print-page';

      const slice = panels.slice(i, i + PER_PAGE);

      slice.forEach((panel) => {
        const panelDiv = document.createElement('div');
        panelDiv.className = 'print-panel';

        const img = document.createElement('img');
        img.src = panel.imageDataURL;
        img.alt = panel.caption || '';

        const captionDiv = document.createElement('div');
        captionDiv.className = 'print-caption';
        captionDiv.style.fontSize = captionFontSize(panel.caption);
        captionDiv.textContent = panel.caption;

        panelDiv.appendChild(img);
        panelDiv.appendChild(captionDiv);
        pageDiv.appendChild(panelDiv);
      });

      printArea.appendChild(pageDiv);
    }
  }

  // ---- Finish & Print ----

  finishBtn.addEventListener('click', () => {
    if (!savePanel()) return;
    generatePrint();
    window.print();
  });

  // ---- Pixabay Library ----

  const libraryBtn         = document.getElementById('libraryBtn');
  const libraryPanel       = document.getElementById('libraryPanel');
  const librarySearchInput = document.getElementById('librarySearchInput');
  const librarySearchBtn   = document.getElementById('librarySearchBtn');
  const libraryResults     = document.getElementById('libraryResults');
  const filterBtns         = document.querySelectorAll('.filter-btn');

  let activeFilter = 'all';

  // Toggle library panel open/closed
  libraryBtn.addEventListener('click', () => {
    const isOpen = libraryPanel.style.display === 'block';
    libraryPanel.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) librarySearchInput.focus();
  });

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.type;
    });
  });

  librarySearchBtn.addEventListener('click', searchPixabay);
  librarySearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchPixabay();
  });

  async function searchPixabay() {
    const query = librarySearchInput.value.trim();
    if (!query) return;

    const key = (typeof PIXABAY_KEY !== 'undefined') ? PIXABAY_KEY : '';
    if (!key || key === 'YOUR_PIXABAY_KEY_HERE') {
      libraryResults.innerHTML = `<p class="library-hint">${t('stories_library_nokey')}</p>`;
      return;
    }

    libraryResults.innerHTML = `<p class="library-loading">Searching…</p>`;

    const type = activeFilter === 'all' ? 'all' : activeFilter;
    const url  = `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(query)}&image_type=${type}&per_page=24&safesearch=true&min_width=300`;

    try {
      const res  = await fetch(url);
      const data = await res.json();

      if (!data.hits || data.hits.length === 0) {
        libraryResults.innerHTML = `<p class="library-hint">${t('stories_library_none')}</p>`;
        return;
      }

      const grid = document.createElement('div');
      grid.className = 'library-grid';

      data.hits.forEach(hit => {
        const img   = document.createElement('img');
        img.src     = hit.previewURL;
        img.className = 'library-img';
        img.alt     = hit.tags;
        img.title   = hit.tags;
        img.addEventListener('click', () => selectLibraryImage(hit.webformatURL));
        grid.appendChild(img);
      });

      libraryResults.innerHTML = '';
      libraryResults.appendChild(grid);

    } catch (err) {
      libraryResults.innerHTML = `<p class="library-hint">${t('stories_library_error')}</p>`;
    }
  }

  function selectLibraryImage(url) {
    // Try to convert to data URL via canvas so it embeds cleanly in print
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = function () {
      try {
        const canvas = document.createElement('canvas');
        canvas.width  = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        currentImageDataURL = canvas.toDataURL('image/jpeg', 0.88);
      } catch (e) {
        // CORS blocked canvas — fall back to URL directly (still prints in most browsers)
        currentImageDataURL = url;
      }
      showSelectedImage();
    };

    img.onerror = function () {
      currentImageDataURL = url;
      showSelectedImage();
    };

    img.src = url;
  }

  function showSelectedImage() {
    previewImg.src = currentImageDataURL;
    previewWrap.style.display = 'block';
    uploadZone.style.display  = 'none';
    libraryPanel.style.display = 'none';
  }

})();
