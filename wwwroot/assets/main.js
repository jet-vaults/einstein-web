(function () {
  'use strict';

  /* ===== Translations ===== */
  var I18N = {
    he: {
      'meta.title': 'אינשטיין ווב — סטודיו לעיצוב ופיתוח אתרים',
      'meta.desc': 'אינשטיין ווב — סטודיו ישראלי לעיצוב ופיתוח אתרים מהירים, מדויקים ודו־לשוניים. אתר מצליח = רעיון × ביצוע².',
      'brand': 'אינשטיין ווב',
      'nav.services': 'שירותים',
      'nav.process': 'התהליך',
      'nav.why': 'למה אנחנו',
      'nav.cta': 'דברו איתנו',
      'hero.kicker': 'סטודיו לעיצוב ופיתוח אתרים · ישראל',
      'hero.title': 'אתר מצליח הוא לא קסם.<br><span class="hl">זאת נוסחה.</span>',
      'hero.sub': 'אינשטיין ווב הוא סטודיו לעיצוב ופיתוח אתרים. אנחנו בונים אתרים מהירים, מדויקים ויפים — בקוד נקי, בעברית ובאנגלית, בלי תבניות מוכנות.',
      'hero.cta1': 'בואו נתחיל',
      'hero.cta2': 'מה אנחנו עושים',
      'hero.formula': 'אתר מצליח = רעיון × ביצוע²',
      'hero.formulaNote': '— החוק הראשון של אינשטיין ווב',
      'services.kicker': 'השירותים שלנו',
      'services.title': 'כל מה שצריך כדי להצטיין ברשת',
      's1.title': 'עיצוב UX/UI',
      's1.desc': 'אפיון חוויית משתמש ועיצוב ממשק שמרגיש טבעי, נקי ומדויק — בכל מסך ובכל שפה.',
      's2.title': 'פיתוח אתרים',
      's2.desc': 'קוד נקי ומהיר שנכתב בדיוק בשבילכם. אתרי תדמית, דפי נחיתה ומערכות מותאמות אישית.',
      's3.title': 'חנויות אונליין',
      's3.desc': 'חוויית קנייה חלקה שממירה גולשים ללקוחות — קטלוג, סליקה ותפעול פשוט.',
      's4.title': 'ביצועים וקידום',
      's4.desc': 'מהירות טעינה, נגישות ו-SEO טכני שמקדמים אתכם בגוגל ושומרים על הגולשים.',
      'process.kicker': 'שיטת העבודה',
      'process.title': 'מהשערה להוכחה, בארבעה שלבים',
      'p1.title': 'השערה',
      'p1.desc': 'פגישת היכרות: מבינים את העסק, המטרות והקהל, ומגדירים יחד מה האתר צריך להשיג.',
      'p2.title': 'ניסוי',
      'p2.desc': 'סקיצות ועיצוב מסכים, עם סבבי משוב מהירים עד שהכיוון מרגיש בדיוק נכון.',
      'p3.title': 'הוכחה',
      'p3.desc': 'פיתוח, בדיקות בכל המכשירים, ביצועים ונגישות — עד שהכול עובד מושלם.',
      'p4.title': 'פרסום',
      'p4.desc': 'עלייה לאוויר, חיבור דומיין ואנליטיקס, וליווי שוטף גם אחרי ההשקה.',
      'why.kicker': 'למה אינשטיין ווב',
      'why.title': 'עקרונות שלא מתפשרים עליהם',
      'w1.title': 'מהירות לפני הכול',
      'w1.desc': 'אתרים קלים ומהירים שנטענים מיד. גולשים לא מחכים, וגם גוגל לא.',
      'w2.title': 'דו־לשוני באמת',
      'w2.desc': 'עברית ואנגלית, RTL ו-LTR — מעוצבים נכון מהיסוד, לא כתוספת מאולצת.',
      'w3.title': 'ליווי אישי',
      'w3.desc': 'קו ישיר למי שבונה את האתר שלכם. בלי מוקדים, בלי תיווך, בלי המתנות.',
      'contact.kicker': 'צרו קשר',
      'contact.title': 'יש לכם רעיון? בואו נבדוק את הנוסחה.',
      'contact.sub': 'ספרו לנו על הפרויקט שלכם ונחזור אליכם תוך יום עסקים.',
      'footer.rights': 'כל הזכויות שמורות'
    },
    en: {
      'meta.title': 'Einstein Web — Web Design & Development Studio',
      'meta.desc': 'Einstein Web — an Israeli studio building fast, precise, bilingual websites. A great website = idea × execution².',
      'brand': 'Einstein Web',
      'nav.services': 'Services',
      'nav.process': 'Process',
      'nav.why': 'Why us',
      'nav.cta': 'Talk to us',
      'hero.kicker': 'Web design & development studio · Israel',
      'hero.title': 'A great website isn’t magic.<br><span class="hl">It’s a formula.</span>',
      'hero.sub': 'Einstein Web is a web design and development studio. We build fast, precise, beautiful websites — clean code, Hebrew and English, no off-the-shelf templates.',
      'hero.cta1': 'Start a project',
      'hero.cta2': 'What we do',
      'hero.formula': 'great website = idea × execution²',
      'hero.formulaNote': '— Einstein Web’s first law',
      'services.kicker': 'What we do',
      'services.title': 'Everything you need to excel online',
      's1.title': 'UX/UI Design',
      's1.desc': 'User-experience planning and interface design that feels natural, clean and precise — on every screen, in every language.',
      's2.title': 'Web Development',
      's2.desc': 'Clean, fast code written just for you. Brand sites, landing pages and custom-built systems.',
      's3.title': 'Online Stores',
      's3.desc': 'A smooth shopping experience that turns visitors into customers — catalog, checkout and simple day-to-day management.',
      's4.title': 'Performance & SEO',
      's4.desc': 'Load speed, accessibility and technical SEO that lift your Google ranking and keep visitors around.',
      'process.kicker': 'How we work',
      'process.title': 'From hypothesis to proof, in four steps',
      'p1.title': 'Hypothesis',
      'p1.desc': 'A discovery call: we learn the business, goals and audience, and define together what the site must achieve.',
      'p2.title': 'Experiment',
      'p2.desc': 'Sketches and screen designs, with quick feedback rounds until the direction feels exactly right.',
      'p3.title': 'Proof',
      'p3.desc': 'Development and testing on every device, performance and accessibility — until everything works perfectly.',
      'p4.title': 'Publication',
      'p4.desc': 'Launch, domain and analytics setup, and ongoing support well after going live.',
      'why.kicker': 'Why Einstein Web',
      'why.title': 'Principles we never compromise on',
      'w1.title': 'Speed first',
      'w1.desc': 'Light, fast sites that load instantly. Visitors don’t wait — and neither does Google.',
      'w2.title': 'Truly bilingual',
      'w2.desc': 'Hebrew and English, RTL and LTR — designed correctly from the ground up, not bolted on.',
      'w3.title': 'Personal partnership',
      'w3.desc': 'A direct line to the person building your site. No call centers, no middlemen, no waiting.',
      'contact.kicker': 'Get in touch',
      'contact.title': 'Got an idea? Let’s test the formula.',
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

  /* ===== Footer year ===== */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

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
