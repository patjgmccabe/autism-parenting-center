/* ============================================================
   Autism Parenting Center — script.js
   Shared: language toggle, navigation
   ============================================================ */

const translations = {
  en: {
    // Nav
    nav_home:           'Home',
    nav_group_tools:    'Tools',
    nav_group_resources:'Resources',
    nav_group_articles: 'Articles',
    nav_books:          'Books',
    nav_stories:        'Social Story Creator',
    nav_directory:      'Resource Directory',
    nav_blog:           'Our Blog',
    nav_resources:      'Articles Worth Reading',
    nav_iep:            'IEP Cheat Sheet',
    nav_worksheets:     'Free Worksheets',
    nav_about:          'About Us',
    nav_contact:        'Contact Us',
    nav_start:          'Start Here',
    nav_glossary:        'Glossary',
    nav_lang:           'Español',
    nav_newsletter:     'Newsletter',
    nav_child:          'All About My Child',

    // Newsletter page + signup band
    nl_title:     'The Autism Parenting Center Brief',
    nl_subtitle:  "The week's best autism articles, videos & book picks for parents. Free, every week.",
    nl_what:      "What you'll get each week",
    nl_card1_title: 'This Week\u2019s Articles',
    nl_card1_desc: 'The most helpful new autism stories on research, parenting, special education, and advocacy \u2014 hand-picked from our Articles Worth Reading page.',
    nl_card2_title: 'Video of the Week',
    nl_card2_desc: 'Our Autism News Briefs video summarizing the week\u2019s stories, so you can catch up in a few minutes.',
    nl_card3_title: 'Book Picks',
    nl_card3_desc: 'Parent-tested autism book recommendations to help you go deeper on the topics that matter to your family.',
    nl_cta_title: 'Join the Brief \u2014 it\u2019s free',
    nl_cta_desc:   'One short email a week. No spam, no noise \u2014 just the stories worth your time. Unsubscribe anytime.',
    nl_cta_btn:   'Subscribe Free \u2192',
    nl_fineprint: 'You\u2019ll enter your email on our secure signup page.',
    nl_band_title: '📬 The Autism Parenting Center Brief',
    nl_band_desc:  'The week\u2019s best autism articles, videos & book picks \u2014 free in your inbox every week.',
    nl_band_btn:  'Subscribe Free \u2192',

    // All About My Child tool
    aamc_hero_title:     'All About My Child',
    aamc_hero_desc:      'Create a beautiful, easy-to-read one-pager about your child to hand to teachers, therapists, babysitters, and anyone who cares for them. Takes minutes \u2014 free forever.',
    aamc_privacy:        '🔒 Private: everything you type stays in your browser. Nothing is uploaded or saved.',
    aamc_name_label:     'Child\u2019s first name',
    aamc_name_ph:        'e.g. Liam',
    aamc_age_label:      'Age or grade (optional)',
    aamc_age_ph:         'e.g. 7 years old, 2nd grade',
    aamc_interests_label:'What I love',
    aamc_interests_help: 'Favorite toys, shows, foods, activities \u2014 the things that light them up.',
    aamc_interests_ph:   'e.g. Dinosaurs, swimming, chicken nuggets, the color blue',
    aamc_strengths_label:'What I\u2019m great at',
    aamc_strengths_help: 'Skills, talents, proud moments \u2014 lead with strengths.',
    aamc_strengths_ph:   'e.g. Amazing memory, kind to animals, great at puzzles',
    aamc_comm_label:     'How I communicate',
    aamc_comm_help:      'Tap the chips that fit, or type your own.',
    aamc_comm_ph:        'e.g. Uses short phrases, points to pictures when tired',
    aamc_calm_label:     'What helps me feel calm',
    aamc_calm_help:      'Strategies and tools that really work for your child.',
    aamc_calm_ph:        'e.g. Quiet corner, noise-canceling headphones, deep breaths together',
    aamc_hard_label:     'Things that are hard for me',
    aamc_hard_help:      'Sensory triggers or situations to be aware of.',
    aamc_hard_ph:        'e.g. Loud hand dryers, bright fluorescent lights, being rushed',
    aamc_help_label:     'How to help when I\u2019m upset',
    aamc_help_help:      'What actually works \u2014 be specific.',
    aamc_help_ph:        'e.g. Give space and time, offer the calm-down corner, speak softly',
    aamc_important_label:'Important things to know',
    aamc_important_help: 'Allergies, medications, routines, must-knows.',
    aamc_important_ph:   'e.g. Peanut allergy \u2014 EpiPen in backpack; needs a visual schedule for transitions',
    aamc_contact_label:  'Emergency contact',
    aamc_contact_name_ph:'Name',
    aamc_contact_phone_ph:'Phone number',
    aamc_generate:       'Create My One-Pager \u2192',
    aamc_regenerate:     'Update My One-Pager \u2192',
    aamc_preview_title:  'Your one-pager',
    aamc_preview_desc:   'Here\u2019s how it will look. Print it, or save it as a PDF to email.',
    aamc_print:          '🖨️ Print / Save as PDF',
    aamc_print_tip:      'Tip: in the print dialog, choose "Save as PDF" to keep a digital copy.',
    aamc_name_required:  'Please enter your child\u2019s first name to create the one-pager.',
    aamc_s_allabout:     'ALL ABOUT ME',
    aamc_s_guide:        'A quick guide from my family \u2014 for my teachers, therapists & caregivers',
    aamc_s_love:         'What I Love',
    aamc_s_strengths:    'What I\u2019m Great At',
    aamc_s_comm:         'How I Communicate',
    aamc_s_calm:         'What Helps Me Feel Calm',
    aamc_s_hard:         'Things That Are Hard For Me',
    aamc_s_help:         'How To Help When I\u2019m Upset',
    aamc_s_important:    'Important Things To Know',
    aamc_s_emergency:    'Emergency Contact',
    aamc_s_madeby:       'Made free by autismparentingcenter.com',
    aamc_chip_comm_1:    'Spoken words',
    aamc_chip_comm_2:    'Short phrases',
    aamc_chip_comm_3:    'AAC device',
    aamc_chip_comm_4:    'Sign language',
    aamc_chip_comm_5:    'Gestures',
    aamc_chip_comm_6:    'Pictures / PECS',
    aamc_chip_calm_1:    'Quiet space',
    aamc_chip_calm_2:    'Deep breaths',
    aamc_chip_calm_3:    'Fidget toy',
    aamc_chip_calm_4:    'Music',
    aamc_chip_calm_5:    'Movement breaks',
    aamc_chip_calm_6:    'Weighted blanket',
    aamc_chip_hard_1:    'Loud noises',
    aamc_chip_hard_2:    'Bright lights',
    aamc_chip_hard_3:    'Crowds',
    aamc_chip_hard_4:    'Unexpected changes',
    aamc_chip_hard_5:    'Certain textures',
    aamc_chip_hard_6:    'Being rushed',

    // Home — hero
    hero_title:    'Autism Resources for Parents, Teachers, and Therapists',
    hero_subtitle: 'Free tools and information for autism families, educators, and therapists, all in one place.',
    hero_btn:      'Explore Resources',

    // Home — section
    section_resources:      'Our Resources',
    section_resources_desc: 'Tools and materials created specifically for autism families, educators, and therapists.',

    // Home — cards
    card_books_title:   'Books',
    card_books_desc:    'Our Core Words and Wh-Question books, plus a curated list of recommended reads for autism families.',
    card_books_link:    'View Books →',
    card_stories_title: 'Social Story or Visual Schedule Creator',
    card_stories_desc:  'Build custom printable social stories or visual schedules with photos and captions to help children navigate everyday situations.',
    card_stories_link:  'Create a Story or Schedule →',
    card_child_title:   'All About My Child',
    card_child_desc:    'Build a beautiful, printable one-pager about your child to hand to teachers, therapists, and caregivers. Free and takes minutes.',
    card_child_link:    'Create a One-Pager →',
    card_dir_title:     'Support Organization Directory',
    card_dir_desc:      'Find government agencies, family support networks, advocacy groups, and respite services, organized by state.',
    card_dir_link:      'Browse Directory →',
    card_iep_title:     'IEP Cheat Sheet',
    card_iep_desc:      'Key terms, parent rights, questions to ask, and important timelines. Free and printable.',
    card_iep_link:      'View & Print →',
    card_worksheets_title:'Free Worksheets',
    card_worksheets_desc: 'Printable communication activities for autistic children. Go Find & Ask, What I Notice, and more. Free for home and classroom use.',
    card_worksheets_link: 'Download Free →',
    card_blog_title:    'Our Blog',
    card_blog_desc:     'Practical guides on social stories, IEPs, special education, and more.',
    card_blog_link:     'Read the Blog →',
    card_articles_title:'Articles Worth Reading',
    card_articles_desc: 'Curated reads from trusted sources on autism parenting, special education, and advocacy.',
    card_articles_link: 'Browse Articles →',
    card_contact_title: 'Contact Us',
    card_contact_desc:  'Have a question or want to connect? We\'d love to hear from you.',
    card_contact_link:  'Get in Touch →',

    // Directory page
    dir_page_title:    'Support Organization Directory',
    dir_page_sub:      'Find support organizations for parents and caregivers of individuals with special needs, filtered by state and category.',
    dir_state_label:   'State:',
    dir_all_states:    'All States',
    dir_cat_all:       'All Categories',
    dir_cat_gov:       'Government & Benefits',
    dir_cat_family:    'Parent & Family',
    dir_cat_advocacy:  'Advocacy & Legal',
    dir_cat_respite:   'Respite & Wellness',

    // Books page
    books_page_title:   'Autism Books for Parents, Teachers, and Therapists',
    books_page_sub:     'Educational books for communication and language development, available on Amazon.',
    our_books_section_title: 'Our Books',
    our_books_section_desc:  'Books written by the Autism Parenting Center team to support communication and language development.',
    category_core_title: 'Core Words Books',
    category_core_desc:  'These books focus on high-frequency core vocabulary words used in everyday communication.',
    category_wh_title:   'Wh- Question Books',
    category_wh_desc:    'These books help children understand and answer who, what, where, when, and why questions.',
    recommended_books_title: 'Recommended Books',
    recommended_books_desc:  'Books we love and recommend for autism parents, teachers, and therapists.',
    affiliate_disclosure:    'These are affiliate links. We may earn a small commission at no extra cost to you.',
    btn_amazon:    'Buy on Amazon',
    btn_affiliate: 'View on Amazon',

    // Social Stories — How It Works
    how_title:        'How It Works',
    // About page
    about_page_title:     'About Us',
    about_page_sub:       'A little about who we are and why we built this.',
    about_who_title:      'Who We Are',
    about_who_desc:       'We\'re autism parents who understand the day-to-day reality of finding the right support, tools, and information. Our goal is simple: create something useful, practical, and easy to navigate for families and professionals alike.',
    about_what_title:     'What We\'re Building',
    about_what_desc:      'Autism Parenting Center is designed to be a growing resource hub, a place where people can come for trusted information, helpful tools, and thoughtfully selected recommendations. As we continue to expand, our focus remains on providing content and resources that are genuinely useful in real-life situations.',
    about_who_for_title:  'Who It\'s For',
    about_who_for_desc:   'This platform is for parents, teachers, therapists, and anyone supporting individuals with autism. Everything here is selected with the goal of making your search for support simpler, clearer, and more efficient.',
    about_mission_title:  'Our Mission',
    about_mission_desc:   'We wanted to create one place people can turn to when they\'re looking for autism resources, without confusion.',

    how_intro:        'This tool lets you build a custom social story or visual schedule, a picture-based book or daily schedule that helps children understand, prepare for, and navigate everyday situations. Follow the steps below to create and print yours!',
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
    nav_home:           'Inicio',
    nav_group_tools:    'Herramientas',
    nav_group_resources:'Recursos',
    nav_group_articles: 'Artículos',
    nav_books:          'Libros',
    nav_stories:        'Creador de Historias Sociales',
    nav_directory:      'Directorio de Recursos',
    nav_blog:           'Nuestro Blog',
    nav_resources:      'Artículos Recomendados',
    nav_iep:            'IEP Cheat Sheet',
    nav_worksheets:     'Hojas de Trabajo Gratis',
    nav_about:          'Sobre Nosotros',
    nav_contact:        'Contáctenos',
    nav_start:          'Comienza Aquí',
    nav_glossary:        'Glosario',
    nav_lang:           'English',
    nav_newsletter:     'Boletín',
    nav_child:          'Todo Sobre Mi Hijo',

    // Newsletter page + signup band
    nl_title:     'El Resumen del Autism Parenting Center',
    nl_subtitle:  'Los mejores artículos, videos y libros sobre autismo para padres. Gratis, cada semana.',
    nl_what:      'Lo que recibirás cada semana',
    nl_card1_title: 'Artículos de la Semana',
    nl_card1_desc: 'Las historias más útiles sobre investigación, crianza, educación especial y defensa — seleccionadas de nuestra página de artículos recomendados.',
    nl_card2_title: 'Video de la Semana',
    nl_card2_desc: 'Nuestro video resumen con las noticias de la semana, para ponerte al día en pocos minutos.',
    nl_card3_title: 'Libros Recomendados',
    nl_card3_desc: 'Libros sobre autismo probados por padres para profundizar en los temas que importan a tu familia.',
    nl_cta_title: 'Únete al Resumen — es gratis',
    nl_cta_desc:   'Un correo corto por semana. Sin spam — solo las historias que valen tu tiempo. Cancela cuando quieras.',
    nl_cta_btn:   'Suscribirme Gratis →',
    nl_fineprint: 'Ingresarás tu correo en nuestra página segura de registro.',
    nl_band_title: '📬 El Resumen del Autism Parenting Center',
    nl_band_desc:  'Los mejores artículos, videos y libros sobre autismo — gratis en tu correo cada semana.',
    nl_band_btn:  'Suscribirme Gratis →',

    // All About My Child tool
    aamc_hero_title:     'Todo Sobre Mi Hijo',
    aamc_hero_desc:      'Crea una hoja informativa hermosa y fácil de leer sobre tu hijo para entregar a maestros, terapeutas, niñeras y a cualquier persona que lo cuide. Toma unos minutos — gratis para siempre.',
    aamc_privacy:        '🔒 Privado: todo lo que escribas permanece en tu navegador. Nada se sube ni se guarda.',
    aamc_name_label:     'Nombre del niño',
    aamc_name_ph:        'p. ej. Liam',
    aamc_age_label:      'Edad o grado (opcional)',
    aamc_age_ph:         'p. ej. 7 años, 2.º grado',
    aamc_interests_label:'Lo que me encanta',
    aamc_interests_help: 'Juguetes, programas, comidas y actividades favoritas — lo que lo ilumina.',
    aamc_interests_ph:   'p. ej. Dinosaurios, natación, nuggets de pollo, el color azul',
    aamc_strengths_label:'En lo que soy bueno',
    aamc_strengths_help: 'Habilidades, talentos, momentos de orgullo — empieza por las fortalezas.',
    aamc_strengths_ph:   'p. ej. Memoria increíble, amable con los animales, bueno en rompecabezas',
    aamc_comm_label:     'Cómo me comunico',
    aamc_comm_help:      'Toca las opciones que correspondan o escribe las tuyas.',
    aamc_comm_ph:        'p. ej. Usa frases cortas, señala imágenes cuando está cansado',
    aamc_calm_label:     'Lo que me ayuda a calmarme',
    aamc_calm_help:      'Estrategias y herramientas que realmente funcionan para tu hijo.',
    aamc_calm_ph:        'p. ej. Un rincón tranquilo, audífonos con cancelación de ruido, respirar juntos',
    aamc_hard_label:     'Lo que me resulta difícil',
    aamc_hard_help:      'Estímulos sensoriales o situaciones a tener en cuenta.',
    aamc_hard_ph:        'p. ej. Secadores de manos ruidosos, luces fluorescentes, las prisas',
    aamc_help_label:     'Cómo ayudarme cuando estoy molesto',
    aamc_help_help:      'Lo que realmente funciona — sé específico.',
    aamc_help_ph:        'p. ej. Dale espacio y tiempo, ofrece el rincón de calma, habla suave',
    aamc_important_label:'Cosas importantes que debes saber',
    aamc_important_help: 'Alergias, medicamentos, rutinas, lo esencial.',
    aamc_important_ph:   'p. ej. Alergia al maní — EpiPen en la mochila; necesita horario visual para las transiciones',
    aamc_contact_label:  'Contacto de emergencia',
    aamc_contact_name_ph:'Nombre',
    aamc_contact_phone_ph:'Número de teléfono',
    aamc_generate:       'Crear Mi Hoja Informativa →',
    aamc_regenerate:     'Actualizar Mi Hoja →',
    aamc_preview_title:  'Tu hoja informativa',
    aamc_preview_desc:   'Así se verá. Imprímela o guárdala como PDF para enviarla por correo.',
    aamc_print:          '🖨️ Imprimir / Guardar como PDF',
    aamc_print_tip:      'Consejo: en el diálogo de impresión, elige «Guardar como PDF» para tener una copia digital.',
    aamc_name_required:  'Por favor escribe el nombre de tu hijo para crear la hoja.',
    aamc_s_allabout:     'TODO SOBRE MÍ',
    aamc_s_guide:        'Una guía rápida de mi familia — para mis maestros, terapeutas y cuidadores',
    aamc_s_love:         'Lo Que Me Encanta',
    aamc_s_strengths:    'En Lo Que Soy Bueno',
    aamc_s_comm:         'Cómo Me Comunico',
    aamc_s_calm:         'Lo Que Me Ayuda a Calmarme',
    aamc_s_hard:         'Lo Que Me Resulta Difícil',
    aamc_s_help:         'Cómo Ayudarme Cuando Estoy Molesto',
    aamc_s_important:    'Cosas Importantes Que Debes Saber',
    aamc_s_emergency:    'Contacto de Emergencia',
    aamc_s_madeby:       'Hecho gratis por autismparentingcenter.com',
    aamc_chip_comm_1:    'Palabras habladas',
    aamc_chip_comm_2:    'Frases cortas',
    aamc_chip_comm_3:    'Dispositivo AAC',
    aamc_chip_comm_4:    'Lengua de señas',
    aamc_chip_comm_5:    'Gestos',
    aamc_chip_comm_6:    'Imágenes / PECS',
    aamc_chip_calm_1:    'Espacio tranquilo',
    aamc_chip_calm_2:    'Respiración profunda',
    aamc_chip_calm_3:    'Juguete sensorial',
    aamc_chip_calm_4:    'Música',
    aamc_chip_calm_5:    'Pausas de movimiento',
    aamc_chip_calm_6:    'Manta con peso',
    aamc_chip_hard_1:    'Ruidos fuertes',
    aamc_chip_hard_2:    'Luces brillantes',
    aamc_chip_hard_3:    'Multitudes',
    aamc_chip_hard_4:    'Cambios inesperados',
    aamc_chip_hard_5:    'Ciertas texturas',
    aamc_chip_hard_6:    'Las prisas',

    hero_title:    'Recursos de Autismo para Padres, Maestros y Terapeutas',
    hero_subtitle: 'Herramientas e información gratuitas para familias, educadores y terapeutas del autismo, todo en un solo lugar.',
    hero_btn:      'Explorar Recursos',

    section_resources:      'Nuestros Recursos',
    section_resources_desc: 'Herramientas y materiales creados específicamente para familias, educadores y terapeutas del autismo.',

    card_books_title:   'Libros',
    card_books_desc:    'Nuestros libros de Palabras Clave y Preguntas Qué, más una lista de lecturas recomendadas para familias del autismo.',
    card_books_link:    'Ver Libros →',
    card_stories_title: 'Creador de Historias Sociales y Horarios Visuales',
    card_stories_desc:  'Crea historias sociales o horarios visuales personalizados con fotos y leyendas para ayudar a los niños a entender situaciones cotidianas.',
    card_stories_link:  'Crear una Historia o Horario →',
    card_child_title:   'Todo Sobre Mi Hijo',
    card_child_desc:    'Crea una hermosa hoja informativa imprimible sobre tu hijo para entregar a maestros, terapeutas y cuidadores. Gratis y toma unos minutos.',
    card_child_link:    'Crear una Hoja →',
    card_dir_title:     'Directorio de Organizaciones de Apoyo',
    card_dir_desc:      'Encuentra agencias gubernamentales, redes de apoyo familiar, grupos de defensa y servicios de respiro, organizados por estado.',
    card_dir_link:      'Explorar Directorio →',
    card_iep_title:     'IEP Cheat Sheet',
    card_iep_desc:      'Términos clave, derechos de padres, preguntas para hacer y plazos importantes. Gratis e imprimible.',
    card_iep_link:      'Ver e Imprimir →',
    card_worksheets_title:'Hojas de Trabajo Gratis',
    card_worksheets_desc: 'Actividades de comunicación imprimibles para niños autistas. Gratis para uso en casa y en el aula.',
    card_worksheets_link: 'Descargar Gratis →',
    card_blog_title:    'Nuestro Blog',
    card_blog_desc:     'Guías prácticas sobre historias sociales, IEP, educación especial y más.',
    card_blog_link:     'Leer el Blog →',
    card_articles_title:'Artículos Recomendados',
    card_articles_desc: 'Lecturas seleccionadas de fuentes confiables sobre crianza del autismo, educación especial y defensa.',
    card_articles_link: 'Ver Artículos →',
    card_contact_title: 'Contáctenos',
    card_contact_desc:  '¿Tienes alguna pregunta? Nos encantaría saber de ti.',
    card_contact_link:  'Ponerse en Contacto →',

    // Directory page (ES)
    dir_page_title:    'Directorio de Organizaciones de Apoyo',
    dir_page_sub:      'Encuentra organizaciones de apoyo para padres y cuidadores de personas con necesidades especiales, filtra por estado y categoría.',
    dir_state_label:   'Estado:',
    dir_all_states:    'Todos los Estados',
    dir_cat_all:       'Todas las Categorías',
    dir_cat_gov:       'Gobierno y Beneficios',
    dir_cat_family:    'Familia y Apoyo',
    dir_cat_advocacy:  'Defensa y Legal',
    dir_cat_respite:   'Respiro y Bienestar',

    books_page_title:   'Libros de Autismo para Padres, Maestros y Terapeutas',
    books_page_sub:     'Libros educativos para el desarrollo del lenguaje y la comunicación, disponibles en Amazon.',
    our_books_section_title: 'Nuestros Libros',
    our_books_section_desc:  'Libros escritos por el equipo de Autism Parenting Center para apoyar la comunicación y el desarrollo del lenguaje.',
    category_core_title: 'Libros de Palabras Clave',
    category_core_desc:  'Estos libros se enfocan en vocabulario básico de alta frecuencia usado en la comunicación diaria.',
    category_wh_title:   'Libros de Preguntas Qué/Quién/Dónde',
    category_wh_desc:    'Estos libros ayudan a los niños a comprender y responder preguntas de quién, qué, dónde, cuándo y por qué.',
    recommended_books_title: 'Libros Recomendados',
    recommended_books_desc:  'Libros que amamos y recomendamos para padres, maestros y terapeutas.',
    affiliate_disclosure:    'Estos son enlaces de afiliados. Podemos ganar una pequeña comisión sin costo adicional para usted.',
    btn_amazon:    'Comprar en Amazon',
    btn_affiliate: 'Ver en Amazon',

    // Social Stories — How It Works (ES)
    how_title:        'Cómo Funciona',
    how_intro:        'Esta herramienta te permite crear una historia social personalizada o un horario visual, un libro o cronograma de imágenes que ayuda a los niños a entender, prepararse y desenvolverse en situaciones cotidianas. ¡Sigue los pasos a continuación para crear e imprimir el tuyo!',
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

  // Dropdown toggles — mobile: tap to open; desktop: handled by CSS hover
  document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      if (window.innerWidth > 768) return;
      const dropdown = btn.closest('.nav-dropdown');
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
      if (!isOpen) dropdown.classList.add('open');
      e.stopPropagation();
    });
  });
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
