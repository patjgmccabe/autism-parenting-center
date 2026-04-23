/* ============================================================
   Autism Parenting Center — script.js
   Shared: language toggle, navigation
   ============================================================ */

const translations = {
  en: {
    // Nav
    nav_home:      'Home',
    nav_books:     'Our Books',
    nav_stories:   'Story & Schedule Creator',
    nav_directory: 'Resource Directory',
    nav_contact:   'Contact Us',
    nav_lang:      'Español',

    // Home — hero
    hero_title:    'Welcome to the Autism Parenting Center',
    hero_subtitle: 'A resource hub for autism parents, teachers, and therapists — everything you need, in one place.',
    hero_btn:      'Explore Resources',

    // Home — section
    section_resources:      'Our Resources',
    section_resources_desc: 'Tools and materials created specifically for autism families, educators, and therapists.',

    // Home — cards
    card_books_title:   'Our Books',
    card_books_desc:    'Browse our Core Words and Wh-Question books — designed to support communication and language development.',
    card_books_link:    'View Books →',
    card_stories_title: 'Social Story or Visual Schedule Creator',
    card_stories_desc:  'Build custom printable social stories or visual schedules with photos and captions to help children navigate everyday situations.',
    card_stories_link:  'Create a Story or Schedule →',
    card_dir_title:     'Support Organization Directory',
    card_dir_desc:      'Find government agencies, family support networks, advocacy groups, and respite services — organized by state.',
    card_dir_link:      'Browse Directory →',
    card_contact_title: 'Contact Us',
    card_contact_desc:  'Have a question or want to connect? We\'d love to hear from you.',
    card_contact_link:  'Get in Touch →',

    // Directory page
    dir_page_title:    'Support Organization Directory',
    dir_page_sub:      'Find support organizations for parents and caregivers of individuals with special needs — filtered by state and category.',
    dir_state_label:   'State:',
    dir_all_states:    'All States',
    dir_cat_all:       'All Categories',
    dir_cat_gov:       'Government & Benefits',
    dir_cat_family:    'Parent & Family',
    dir_cat_advocacy:  'Advocacy & Legal',
    dir_cat_respite:   'Respite & Wellness',

    // Books page
    books_page_title:   'Books',
    books_page_sub:     'Educational books for communication and language development — available on Amazon.',
    our_books_section_title: 'Our Books',
    our_books_section_desc:  'Books written by the Autism Parenting Center team to support communication and language development.',
    category_core_title: 'Core Words Books',
    category_core_desc:  'These books focus on high-frequency core vocabulary words used in everyday communication.',
    category_wh_title:   'Wh- Question Books',
    category_wh_desc:    'These books help children understand and answer who, what, where, when, and why questions.',
    recommended_books_title: 'Recommended Books',
    recommended_books_desc:  'Books we love and recommend for autism parents, teachers, and therapists. These are affiliate links — we may earn a small commission at no extra cost to you.',
    btn_amazon:    'Buy on Amazon',
    btn_affiliate: 'View on Amazon',

    // Social Stories — How It Works
    how_title:        'How It Works',
    how_intro:        'This tool lets you build a custom social story or visual schedule — a picture-based book or daily schedule that helps children understand, prepare for, and navigate everyday situations. Follow the steps below to create and print yours!',
    how_step:         'Step',
    how1_title:       'Pick a Photo',
    how1_desc:        'Upload a photo from your device, take one with your camera, or search the image library for the perfect picture.',
    how2_title:       'Write a Caption',
    how2_desc:        'Type a short sentence that describes what is happening in the picture. Keep it simple and clear!',
    how3_title:       'Add More Pages',
    how3_desc:        'Click + Add Another Page to keep building your story, one picture at a time.',
    how4_title:       'Finish & Print',
    how4_desc:        'When your story is complete, click Finish & Print. Each page of your story will be printed with the picture and caption inside a dotted cut-out box.',
    how_result_title: 'What you\'ll get:',
    how_result_desc:  ' A printed sheet with up to 6 picture cards per page. Cut along the dotted lines to create individual cards you can arrange, laminate, or share!',

    // Social Stories page
    stories_page_title:        'Social Story or Visual Schedule Creator',
    stories_page_sub:          'Create a custom printable social story or visual schedule, one page at a time.',
    stories_progress_singular: 'page saved',
    stories_progress_plural:   'pages saved',
    stories_step:              'Page',
    stories_upload_btn:        'Upload Photo',
    stories_camera_btn:        'Take Photo',
    stories_upload_hint_drag:  'Drag & drop, ',
    stories_upload_hint_rest:  'upload from your device, take a photo, or search our library',
    stories_change:            'Change photo',
    stories_caption_label:     'Caption (text that will appear below the picture)',
    stories_caption_ph:        'Type your caption here…',
    stories_continue:          '+ Add Another Page',
    stories_finish:            'Finish & Print',
    stories_thumbs_label:      'Pages in your story or schedule:',
    stories_error_image:       'Please select or take a photo before continuing.',
    stories_library_btn:       'Search Library',
    stories_library_search:    'Search',
    stories_library_ph:        'e.g. classroom, brushing teeth, happy…',
    stories_library_hint:      'Search for any image above to get started.',
    stories_library_none:      'No results found. Try a different search term.',
    stories_library_error:     'Search failed. Please check your internet connection.',
    stories_library_nokey:     'API key not set. Please add your Pixabay key to js/config.js.',

    // Contact page
    contact_page_title: 'Contact Us',
    contact_page_sub:   'We\'d love to hear from you!',
    contact_name:       'Your Name',
    contact_email:      'Email Address',
    contact_message:    'Message',
    contact_submit:     'Send Message',
    contact_success:    'Thank you! Your message has been received.',
    contact_name_ph:    'Jane Smith',
    contact_email_ph:   'jane@example.com',
    contact_msg_ph:     'How can we help you?',
  },

  es: {
    nav_home:    'Inicio',
    nav_books:   'Nuestros Libros',
    nav_stories:   'Historias y Horarios Visuales',
    nav_directory: 'Directorio de Recursos',
    nav_contact:   'Contáctenos',
    nav_lang:      'English',

    hero_title:    'Bienvenidos al Centro de Crianza del Autismo',
    hero_subtitle: 'Un centro de recursos para padres, maestros y terapeutas — todo lo que necesitas, en un solo lugar.',
    hero_btn:      'Explorar Recursos',

    section_resources:      'Nuestros Recursos',
    section_resources_desc: 'Herramientas y materiales creados específicamente para familias, educadores y terapeutas del autismo.',

    card_books_title:   'Nuestros Libros',
    card_books_desc:    'Explora nuestros libros de Palabras Clave y Preguntas Qué — diseñados para apoyar la comunicación y el aprendizaje.',
    card_books_link:    'Ver Libros →',
    card_stories_title: 'Creador de Historias Sociales y Horarios Visuales',
    card_stories_desc:  'Crea historias sociales o horarios visuales personalizados con fotos y leyendas para ayudar a los niños a entender situaciones cotidianas.',
    card_stories_link:  'Crear una Historia o Horario →',
    card_dir_title:     'Directorio de Organizaciones de Apoyo',
    card_dir_desc:      'Encuentra agencias gubernamentales, redes de apoyo familiar, grupos de defensa y servicios de respiro — organizados por estado.',
    card_dir_link:      'Explorar Directorio →',
    card_contact_title: 'Contáctenos',
    card_contact_desc:  '¿Tienes alguna pregunta? Nos encantaría saber de ti.',
    card_contact_link:  'Ponerse en Contacto →',

    // Directory page (ES)
    dir_page_title:    'Directorio de Organizaciones de Apoyo',
    dir_page_sub:      'Encuentra organizaciones de apoyo para padres y cuidadores de personas con necesidades especiales — filtra por estado y categoría.',
    dir_state_label:   'Estado:',
    dir_all_states:    'Todos los Estados',
    dir_cat_all:       'Todas las Categorías',
    dir_cat_gov:       'Gobierno y Beneficios',
    dir_cat_family:    'Familia y Apoyo',
    dir_cat_advocacy:  'Defensa y Legal',
    dir_cat_respite:   'Respiro y Bienestar',

    books_page_title:   'Libros',
    books_page_sub:     'Libros educativos para el desarrollo del lenguaje y la comunicación — disponibles en Amazon.',
    our_books_section_title: 'Nuestros Libros',
    our_books_section_desc:  'Libros escritos por el equipo de Autism Parenting Center para apoyar la comunicación y el desarrollo del lenguaje.',
    category_core_title: 'Libros de Palabras Clave',
    category_core_desc:  'Estos libros se enfocan en vocabulario básico de alta frecuencia usado en la comunicación diaria.',
    category_wh_title:   'Libros de Preguntas Qué/Quién/Dónde',
    category_wh_desc:    'Estos libros ayudan a los niños a comprender y responder preguntas de quién, qué, dónde, cuándo y por qué.',
    recommended_books_title: 'Libros Recomendados',
    recommended_books_desc:  'Libros que amamos y recomendamos para padres, maestros y terapeutas. Estos son enlaces de afiliados — podemos ganar una pequeña comisión sin costo adicional para usted.',
    btn_amazon:    'Comprar en Amazon',
    btn_affiliate: 'Ver en Amazon',

    // Social Stories — How It Works (ES)
    how_title:        'Cómo Funciona',
    how_intro:        'Esta herramienta te permite crear una historia social personalizada o un horario visual — un libro o cronograma de imágenes que ayuda a los niños a entender, prepararse y desenvolverse en situaciones cotidianas. ¡Sigue los pasos a continuación para crear e imprimir el tuyo!',
    how_step:         'Paso',
    how1_title:       'Elige una Foto',
    how1_desc:        'Sube una foto de tu dispositivo, toma una con tu cámara, o busca en la biblioteca de imágenes la foto perfecta.',
    how2_title:       'Escribe una Leyenda',
    how2_desc:        'Escribe una oración corta que describa lo que está pasando en la imagen. ¡Mantenla simple y clara!',
    how3_title:       'Agrega Más Páginas',
    how3_desc:        'Haz clic en + Agregar Otra Página para continuar construyendo tu historia, una imagen a la vez.',
    how4_title:       'Terminar e Imprimir',
    how4_desc:        'Cuando tu historia esté completa, haz clic en Terminar e Imprimir. Cada página de tu historia se imprimirá con la imagen y leyenda dentro de un recuadro de líneas punteadas para recortar.',
    how_result_title: 'Lo que obtendrás:',
    how_result_desc:  ' Una hoja impresa con hasta 6 tarjetas de imágenes por página. ¡Recorta a lo largo de las líneas punteadas para crear tarjetas individuales que puedes ordenar, laminar o compartir!',

    stories_page_title:        'Creador de Historias Sociales y Horarios Visuales',
    stories_page_sub:          'Crea una historia social o un horario visual personalizado, una página a la vez.',
    stories_progress_singular: 'página guardada',
    stories_progress_plural:   'páginas guardadas',
    stories_step:              'Página',
    stories_upload_btn:        'Subir Foto',
    stories_camera_btn:        'Tomar Foto',
    stories_upload_hint_drag:  'Arrastra y suelta, o ',
    stories_upload_hint_rest:  'sube desde tu dispositivo, toma una foto o busca en nuestra biblioteca',
    stories_change:            'Cambiar foto',
    stories_caption_label:     'Leyenda (texto que aparecerá debajo de la imagen)',
    stories_caption_ph:        'Escribe tu leyenda aquí…',
    stories_continue:          '+ Agregar Otra Página',
    stories_finish:            'Terminar e Imprimir',
    stories_thumbs_label:      'Páginas en tu historia o horario:',
    stories_error_image:       'Por favor selecciona o toma una foto antes de continuar.',
    stories_library_btn:       'Buscar Imágenes',
    stories_library_search:    'Buscar',
    stories_library_ph:        'ej. salón de clases, cepillarse los dientes, feliz…',
    stories_library_hint:      'Busca cualquier imagen arriba para comenzar.',
    stories_library_none:      'Sin resultados. Intenta con otro término.',
    stories_library_error:     'Búsqueda fallida. Verifica tu conexión a internet.',
    stories_library_nokey:     'Clave de API no configurada. Agrega tu clave de Pixabay a js/config.js.',

    contact_page_title: 'Contáctenos',
    contact_page_sub:   '¡Nos encantaría saber de ti!',
    contact_name:       'Tu Nombre',
    contact_email:      'Correo Electrónico',
    contact_message:    'Mensaje',
    contact_submit:     'Enviar Mensaje',
    contact_success:    '¡Gracias! Tu mensaje ha sido recibido.',
    contact_name_ph:    'María García',
    contact_email_ph:   'maria@ejemplo.com',
    contact_msg_ph:     '¿En qué podemos ayudarte?',
  }
};

// Expose so social-stories.js can access it
window.translations = translations;

let currentLang = localStorage.getItem('apc_lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    // Inputs/textareas: set placeholder; everything else: textContent
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.documentElement.lang = lang;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('apc_lang', currentLang);
  applyTranslations(currentLang);
  // Notify social-stories.js if it's listening
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

function setActiveLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  initMobileNav();
  setActiveLink();
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);
});
