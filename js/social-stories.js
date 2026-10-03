/* ============================================================
   Autism Parenting Center - social-stories.js
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

  // ---- Ready-made story templates ----
  // Each template is a short set of simple sentences, one per page.
  // Loading a template fills in the caption for each page, one at a
  // time. Parents add a photo per page and can edit any of the words.

  const TEMPLATES = {
    dentist: {
      en: [
        'Soon I will go to the dentist.',
        'The dentist helps keep my teeth healthy and strong.',
        'I will sit in a big chair. The chair can move up and down.',
        'The dentist will look at my teeth with a small mirror. I will open my mouth wide.',
        'The dentist will clean my teeth. It might feel a little strange, and that is okay.',
        'When I am done, my teeth will be clean. I did a great job.',
      ],
      es: [
        'Pronto iré al dentista.',
        'El dentista ayuda a mantener mis dientes sanos y fuertes.',
        'Me sentaré en una silla grande. La silla puede subir y bajar.',
        'El dentista mirará mis dientes con un espejo pequeño. Abriré bien la boca.',
        'El dentista limpiará mis dientes. Puede sentirse un poco raro, y eso está bien.',
        'Cuando termine, mis dientes estarán limpios. ¡Lo hice muy bien!',
      ],
    },
    haircut: {
      en: [
        'Soon I will get a haircut.',
        'First, I will sit in a special chair.',
        'The barber will put a cape around me. The cape keeps hair off my clothes.',
        'The barber will cut my hair with scissors or clippers. Clippers buzz and might tickle.',
        'If I need a break, I can ask for one.',
        'When my haircut is done, I will look great. I did it!',
      ],
      es: [
        'Pronto me cortaré el cabello.',
        'Primero, me sentaré en una silla especial.',
        'El peluquero me pondrá una capa. La capa evita que el cabello caiga en mi ropa.',
        'El peluquero cortará mi cabello con tijeras o máquina. La máquina hace un zumbido y puede hacer cosquillas.',
        'Si necesito un descanso, puedo pedirlo.',
        'Cuando termine mi corte, me veré muy bien. ¡Lo logré!',
      ],
    },
    newschool: {
      en: [
        'I am starting a new school.',
        'My school has teachers who will help me learn.',
        'I will have a classroom where I learn and play.',
        'I will meet new kids. Some of them might become my friends.',
        'If I feel nervous, I can take deep breaths or ask a teacher for help.',
        'Each day, school will feel easier. I can do this.',
      ],
      es: [
        'Voy a empezar en una escuela nueva.',
        'Mi escuela tiene maestros que me ayudarán a aprender.',
        'Tendré un salón donde aprenderé y jugaré.',
        'Conoceré a niños nuevos. Algunos podrían hacerse mis amigos.',
        'Si me siento nervioso, puedo respirar profundo o pedir ayuda a un maestro.',
        'Cada día, la escuela se sentirá más fácil. ¡Yo puedo hacerlo!',
      ],
    },
    firedrill: {
      en: [
        'Sometimes my school has a fire drill. A fire drill is practice.',
        'During a fire drill, an alarm will ring. The alarm is loud.',
        'When the alarm rings, I will stop what I am doing and line up with my class.',
        'I will walk quietly with my teacher to a safe place outside.',
        'We will wait outside until a teacher says it is safe to go back in.',
        'Fire drills keep everyone safe. I know what to do.',
      ],
      es: [
        'A veces mi escuela hace un simulacro de incendio. Un simulacro es una práctica.',
        'Durante el simulacro, sonará una alarma. La alarma hace mucho ruido.',
        'Cuando suene la alarma, dejaré lo que estoy haciendo y haré fila con mi clase.',
        'Caminaré en silencio con mi maestro hasta un lugar seguro afuera.',
        'Esperaremos afuera hasta que un maestro diga que es seguro volver a entrar.',
        'Los simulacros mantienen a todos seguros. Yo sé qué hacer.',
      ],
    },
    airplane: {
      en: [
        'Soon I will ride on an airplane.',
        'At the airport, we will check in and wait for our plane.',
        'On the plane, I will sit in my seat and wear my seatbelt.',
        'The plane will get loud when it takes off. I can wear headphones.',
        'During the flight, I can read, draw, or watch a show.',
        'When the plane lands, we will be at our destination. I did a great job flying!',
      ],
      es: [
        'Pronto viajaré en avión.',
        'En el aeropuerto, nos registraremos y esperaremos nuestro avión.',
        'En el avión, me sentaré en mi asiento y usaré el cinturón de seguridad.',
        'El avión hará mucho ruido cuando despegue. Puedo usar audífonos.',
        'Durante el vuelo, puedo leer, dibujar o ver un programa.',
        'Cuando el avión aterrice, habremos llegado a nuestro destino. ¡Lo hice muy bien!',
      ],
    },
  };

  let tpl = null; // { id, index } - index is the caption currently in the textarea

  const tplSelect  = document.getElementById('tplSelect');
  const tplLoadBtn = document.getElementById('tplLoadBtn');
  const tplStatus  = document.getElementById('tplStatus');

  function tplCaptions(id) {
    const lang = localStorage.getItem('apc_lang') || 'en';
    return (TEMPLATES[id] && (TEMPLATES[id][lang] || TEMPLATES[id].en)) || [];
  }

  function tplShowStatus() {
    if (!tpl || !tplStatus) return;
    const caps = tplCaptions(tpl.id);
    if (tpl.index >= caps.length) {
      tplStatus.textContent = t('stories_tpl_done');
    } else {
      tplStatus.textContent = t('stories_tpl_' + tpl.id) + ': ' +
        t('stories_step') + ' ' + (tpl.index + 1) + ' ' + t('stories_tpl_of') + ' ' + caps.length + '. ' +
        t('stories_tpl_hint');
    }
    tplStatus.hidden = false;
  }

  function tplLoad() {
    if (!tplSelect) return;
    const caps = tplCaptions(tplSelect.value);
    if (!caps.length) return;
    tpl = { id: tplSelect.value, index: 0 };
    captionInput.value = caps[0];
    tplShowStatus();
    const builder = document.querySelector('.story-container');
    if (builder) builder.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Called after a page is saved: fill in the next template caption.
  function tplAdvance() {
    if (!tpl) return;
    tpl.index++;
    const caps = tplCaptions(tpl.id);
    if (tpl.index < caps.length) captionInput.value = caps[tpl.index];
    tplShowStatus();
  }

  if (tplLoadBtn) tplLoadBtn.addEventListener('click', tplLoad);

  // ---- Image compression ----
  // Resizes and compresses any image to a manageable size before storing.
  // Phone cameras can produce 10-15 MB images; this keeps each panel ~100-200 KB.
  // MAX_SIDE: panels print at ~3.5" so 900px gives plenty of quality at 150-250 DPI.

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

  // ---- Image loading ----

  function loadFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      compressDataURL(e.target.result, (compressed) => {
        currentImageDataURL = compressed;
        previewImg.src = currentImageDataURL;
        previewWrap.style.display = 'block';
        uploadZone.style.display  = 'none';
      });
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
    tplShowStatus();
  });

  // ---- Continue ----

  continueBtn.addEventListener('click', () => {
    if (!savePanel()) return;
    updateUI();
    resetForm();
    tplAdvance();
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
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = function () {
      try {
        // Compress to same budget as uploaded photos
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
        currentImageDataURL = canvas.toDataURL('image/jpeg', JPEG_Q);
      } catch (e) {
        // CORS blocked canvas - fall back to URL directly
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
