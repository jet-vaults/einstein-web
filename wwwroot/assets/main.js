(function () {
  'use strict';

  /* ===== Translations ===== */
  var I18N = {
    he: {
      'meta.title': 'אינשטיין ווב — פיתוח אתרים וחוויות דיגיטליות',
      'meta.desc': 'אינשטיין ווב — סטודיו לפיתוח אתרים מהירים ומרשימים לעסקים ולפרויקטים של נדל״ן. עברית ואנגלית, עיצוב מוקפד וביצועים בלתי מתפשרים.',
      'brand': 'אינשטיין ווב',
      'nav.services': 'שירותים',
      'nav.projects': 'פרויקטים',
      'nav.process': 'איך זה עובד',
      'nav.cta': 'דברו איתנו',
      'hero.kicker': 'סטודיו לפיתוח אתרים',
      'hero.title': 'בונים אתרים.<br><span class="hl">יוצרים חוויות.</span>',
      'hero.sub': 'אינשטיין ווב מתמחה באתרים מהירים ומרשימים לעסקים ולפרויקטים של נדל״ן. בלי תבניות, בלי פשרות — גללו למטה ותראו בעצמכם.',
      'hero.cta1': 'לפרויקטים שלנו',
      'hero.cta2': 'בואו נדבר',
      'hero.scroll': 'גללו',
      'services.kicker': 'מה אנחנו עושים',
      'services.title': 'קוד שעובד בשבילכם',
      's1.title': 'אתרי תדמית',
      's1.desc': 'אתרים מהירים ומדויקים שמציגים את העסק שלכם בצורה הכי טובה שיש.',
      's2.title': 'נדל״ן ופרויקטים',
      's2.desc': 'אתרי שיווק לפרויקטים של נדל״ן — מהדמיות ועד טפסי לידים, הכול מחובר.',
      's3.title': 'דפי נחיתה',
      's3.desc': 'עמודים ממוקדי המרה לקמפיינים, עם טעינה מיידית בכל מכשיר.',
      's4.title': 'ביצועים ו-SEO',
      's4.desc': 'מהירות, נגישות וקידום טכני שמרימים אתכם בגוגל ומשאירים את הגולשים.',
      'projects.kicker': 'תיק עבודות',
      'projects.title': 'פרויקטים שעלו לאוויר',
      'projects.sub': 'חלק מהאתרים שבנינו ללקוחות שלנו — והרשימה ממשיכה לגדול.',
      'pr1.title': 'שיכון עולם',
      'pr1.tag': 'נדל״ן · אתר תדמית',
      'pr2.title': 'Home in Israel',
      'pr2.tag': 'נדל״ן · פורטל',
      'pr3.title': 'אלקטרה — סירקין',
      'pr3.tag': 'נדל״ן · אתר פרויקט',
      'pr4.title': 'אפקה בשמורה',
      'pr4.tag': 'נדל״ן · אתר פרויקט',
      'pr5.title': 'שתית משתכן',
      'pr5.tag': 'נדל״ן · מחיר למשתכן',
      'pr6.title': 'שרבט חיפה',
      'pr6.tag': 'נדל״ן · אתר פרויקט',
      'process.kicker': 'איך זה עובד',
      'process.title': 'מרעיון לשיגור בארבעה שלבים',
      'p1.title': 'אפיון',
      'p1.desc': 'מבינים את העסק, המטרות והקהל — ובונים תוכנית מדויקת.',
      'p2.title': 'עיצוב',
      'p2.desc': 'סקיצות חיות וסבבי משוב מהירים, עד שזה מרגיש בדיוק נכון.',
      'p3.title': 'פיתוח',
      'p3.desc': 'קוד נקי, בדיקות בכל מכשיר, ביצועים ונגישות ללא פשרות.',
      'p4.title': 'שיגור',
      'p4.desc': 'עלייה לאוויר, חיבור דומיין ואנליטיקס — וליווי שוטף גם אחרי.',
      'contact.kicker': 'צרו קשר',
      'contact.title': 'בואו נבנה משהו ביחד',
      'contact.sub': 'ספרו לנו על הפרויקט שלכם ונחזור אליכם תוך יום עסקים.',
      'footer.rights': 'כל הזכויות שמורות'
    },
    en: {
      'meta.title': 'Einstein Web — Web Development & Digital Experiences',
      'meta.desc': 'Einstein Web — a studio building fast, striking websites for businesses and real-estate projects. Hebrew and English, meticulous design, uncompromising performance.',
      'brand': 'Einstein Web',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.process': 'How it works',
      'nav.cta': 'Talk to us',
      'hero.kicker': 'Web development studio',
      'hero.title': 'We build websites.<br><span class="hl">We craft experiences.</span>',
      'hero.sub': 'Einstein Web builds fast, striking websites for businesses and real-estate projects. No templates, no compromises — scroll down and see for yourself.',
      'hero.cta1': 'See our projects',
      'hero.cta2': 'Let’s talk',
      'hero.scroll': 'Scroll',
      'services.kicker': 'What we do',
      'services.title': 'Code that works for you',
      's1.title': 'Brand Websites',
      's1.desc': 'Fast, precise websites that present your business at its very best.',
      's2.title': 'Real-Estate Projects',
      's2.desc': 'Marketing sites for real-estate developments — from renders to lead forms, all connected.',
      's3.title': 'Landing Pages',
      's3.desc': 'Conversion-focused pages for campaigns, loading instantly on every device.',
      's4.title': 'Performance & SEO',
      's4.desc': 'Speed, accessibility and technical SEO that lift you on Google and keep visitors around.',
      'projects.kicker': 'Our work',
      'projects.title': 'Projects we shipped',
      'projects.sub': 'A few of the websites we built for our clients — and the list keeps growing.',
      'pr1.title': 'Shikun Olam',
      'pr1.tag': 'Real estate · Brand site',
      'pr2.title': 'Home in Israel',
      'pr2.tag': 'Real estate · Portal',
      'pr3.title': 'Electra — Sirkin',
      'pr3.tag': 'Real estate · Project site',
      'pr4.title': 'Afeka BaShmura',
      'pr4.tag': 'Real estate · Project site',
      'pr5.title': 'Shatit Mishtaken',
      'pr5.tag': 'Real estate · Mehir LaMishtaken',
      'pr6.title': 'Sharbat Haifa',
      'pr6.tag': 'Real estate · Project site',
      'process.kicker': 'How it works',
      'process.title': 'From idea to launch in four steps',
      'p1.title': 'Discovery',
      'p1.desc': 'We learn the business, goals and audience — and build a precise plan.',
      'p2.title': 'Design',
      'p2.desc': 'Live sketches and quick feedback rounds, until it feels exactly right.',
      'p3.title': 'Development',
      'p3.desc': 'Clean code, testing on every device, performance and accessibility without compromise.',
      'p4.title': 'Launch',
      'p4.desc': 'Going live, domain and analytics setup — and ongoing support after.',
      'contact.kicker': 'Get in touch',
      'contact.title': 'Let’s build something together',
      'contact.sub': 'Tell us about your project and we’ll get back to you within one business day.',
      'footer.rights': 'All rights reserved'
    }
  };

  var STORAGE_KEY = 'einstein-web-lang';

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.he;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      if (dict[key] !== undefined) el.setAttribute('content', dict[key]);
    });

    document.title = dict['meta.title'];

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.textContent = lang === 'he' ? 'EN' : 'עב';
      toggle.setAttribute('aria-label', lang === 'he' ? 'Switch to English' : 'מעבר לעברית');
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
  var urlLang = new URLSearchParams(location.search).get('lang');
  if (urlLang === 'en' || urlLang === 'he') {
    applyLang(urlLang);
  } else if (saved === 'en') {
    applyLang('en');
  }

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      applyLang(document.documentElement.lang === 'he' ? 'en' : 'he');
    });
  }

  /* ===== Debug: ?top=N jumps to a scroll offset instantly ===== */
  var topParam = new URLSearchParams(location.search).get('top');
  if (topParam) {
    window.addEventListener('load', function () {
      window.scrollTo({ top: parseInt(topParam, 10) || 0, behavior: 'instant' });
    });
  }

  /* ===== Footer year ===== */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ===== Scroll progress bar ===== */
  var bar = document.getElementById('scrollBar');
  var ticking = false;

  function updateBar() {
    ticking = false;
    if (!bar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, p)) + ')';
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateBar); }
  }, { passive: true });
  updateBar();

  /* ===== Scroll reveal ===== */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) return;

  document.documentElement.classList.add('js-reveal');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
