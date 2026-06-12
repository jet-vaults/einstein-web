(function () {
  'use strict';

  /* ===== Translations ===== */
  var I18N = {
    he: {
      'meta.title': 'איינשטיין אתרים - פיתוח אתרים וחוויות דיגיטליות',
      'meta.desc': 'איינשטיין אתרים - חברה לפיתוח אתרים מהירים ומרשימים לעסקים ולפרויקטים של נדל״ן. עברית ואנגלית, עיצוב מוקפד וביצועים בלתי מתפשרים.',
      'brand': 'איינשטיין אתרים',
      'nav.services': 'שירותים',
      'nav.projects': 'פרויקטים',
      'nav.reviews': 'המלצות',
      'nav.process': 'איך זה עובד',
      'nav.cta': 'דברו איתנו',
      'stats.clients': 'לקוחות מרוצים',
      'stats.years': 'שנות ניסיון',
      'stats.boutique': 'שירות אישי ובוטיק',
      'clients.title': 'עובדים עם החברות המובילות בישראל',
      'reviews.kicker': 'המלצות',
      'reviews.title': 'לקוחות מספרים',
      'r1.text': 'פנינו לאיינשטיין אתרים לבניית אתר למשרד עורכי דין מוביל - הבחירה הטובה ביותר שיכולנו לעשות. סטנדרטים גבוהים, עיצוב יפהפה וממשק פשוט ונגיש. עברו את כל הציפיות.',
      'r1.who': 'משרד עורכי דין',
      'r2.text': 'בנו לנו אתר מכירות אונליין ולא הצטערנו לרגע. תוצאה מדהימה, הצגה מעולה ותחושה של מקצועיות ואמינות לכל אורך הדרך.',
      'r2.who': 'בעלת חנות אונליין',
      'r3.text': 'זמינים גם מעבר לשעות העבודה, סבלניים ומקצועיים. שירות יוצא דופן ונכונות לעשות הרבה מעבר למצופה.',
      'r3.who': 'לקוח עסקי',
      'reviews.more': 'לכל הביקורות שלנו באיזי ←',
      'hero.kicker': 'חברה לפיתוח אתרים',
      'hero.title': 'בונים אתרים.<br><span class="hl">יוצרים חוויות.</span>',
      'hero.sub': 'איינשטיין אתרים מתמחה באתרים מהירים ומרשימים לעסקים ולפרויקטים של נדל״ן. בלי תבניות, בלי פשרות - גללו למטה ותראו בעצמכם.',
      'hero.cta1': 'לפרויקטים שלנו',
      'hero.cta2': 'בואו נדבר',
      'hero.scroll': 'גללו',
      'services.kicker': 'מה אנחנו עושים',
      'services.title': 'קוד שעובד בשבילכם',
      's1.title': 'אתרי תדמית',
      's1.desc': 'אתרים מהירים ומדויקים שמציגים את העסק שלכם בצורה הכי טובה שיש.',
      's2.title': 'נדל״ן ופרויקטים',
      's2.desc': 'אתרי שיווק לפרויקטים של נדל״ן - מהדמיות ועד טפסי לידים, הכול מחובר.',
      's3.title': 'דפי נחיתה',
      's3.desc': 'עמודים ממוקדי המרה לקמפיינים, עם טעינה מיידית בכל מכשיר.',
      's4.title': 'ביצועים ו-SEO',
      's4.desc': 'מהירות, נגישות וקידום טכני שמרימים אתכם בגוגל ומשאירים את הגולשים.',
      'projects.kicker': 'תיק עבודות',
      'projects.title': 'פרויקטים שעלו לאוויר',
      'projects.sub': 'חלק מהאתרים שבנינו ללקוחות שלנו - והרשימה ממשיכה לגדול.',
      'pr1.title': 'שיכון ובינוי',
      'pr1.tag': 'נדל״ן · מחיר למשתכן',
      'pr2.title': 'Home in Israel',
      'pr2.tag': 'נדל״ן · פורטל',
      'pr3.title': 'אלקטרה',
      'pr3.tag': 'נדל״ן · אתר פרויקט',
      'pr4.title': 'י.ח. דמרי',
      'pr4.tag': 'נדל״ן · מחיר למשתכן',
      'pr5.title': 'שתית משתכן',
      'pr5.tag': 'נדל״ן · מחיר למשתכן',
      'pr6.title': 'שרבט חיפה',
      'pr6.tag': 'נדל״ן · מחיר מטרה',
      'process.kicker': 'איך זה עובד',
      'process.title': 'מרעיון לשיגור בארבעה שלבים',
      'p1.title': 'אפיון',
      'p1.desc': 'מבינים את העסק, המטרות והקהל - ובונים תוכנית מדויקת.',
      'p2.title': 'עיצוב',
      'p2.desc': 'סקיצות חיות וסבבי משוב מהירים, עד שזה מרגיש בדיוק נכון.',
      'p3.title': 'פיתוח',
      'p3.desc': 'קוד נקי, בדיקות בכל מכשיר, ביצועים ונגישות ללא פשרות.',
      'p4.title': 'שיגור',
      'p4.desc': 'עלייה לאוויר, חיבור דומיין ואנליטיקס - וליווי שוטף גם אחרי.',
      'contact.kicker': 'צרו קשר',
      'contact.title': 'בואו נבנה משהו ביחד',
      'contact.sub': 'השאירו פרטים ונחזור אליכם תוך יום עסקים.',
      'contact.name': 'שם מלא',
      'contact.email': 'אימייל',
      'contact.phone': 'טלפון',
      'contact.send': 'שלחו לנו הודעה',
      'contact.or': 'או כתבו לנו ישירות:',
      'contact.subject': 'פנייה חדשה מהאתר',
      'bm.live': 'אתר חי',
      'bm.loading': 'טוען את האתר החי…',
      'bm.fallbackText': 'האתר הזה מעדיף להיפתח במסך מלא.',
      'bm.fallbackCta': 'פתחו אותו בכרטיסייה חדשה',
      'footer.rights': 'כל הזכויות שמורות',
      'footer.accessibility': 'הצהרת נגישות',
      'footer.privacy': 'מדיניות פרטיות'
    },
    en: {
      'meta.title': 'Einstein Web - Web Development & Digital Experiences',
      'meta.desc': 'Einstein Web - a company building fast, striking websites for businesses and real-estate projects. Hebrew and English, meticulous design, uncompromising performance.',
      'brand': 'Einstein Web',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.reviews': 'Reviews',
      'nav.process': 'How it works',
      'nav.cta': 'Talk to us',
      'stats.clients': 'Happy clients',
      'stats.years': 'Years of experience',
      'stats.boutique': 'Personal boutique service',
      'clients.title': 'Working with Israel’s leading companies',
      'reviews.kicker': 'Testimonials',
      'reviews.title': 'What clients say',
      'r1.text': 'We came to Einstein Web to build a website for a leading law firm - the best choice we could have made. High standards, beautiful design and a simple, accessible interface. They exceeded every expectation.',
      'r1.who': 'Law firm',
      'r2.text': 'They built our online store and we never regretted it for a moment. An amazing result, excellent presentation, and a feeling of professionalism and reliability all the way through.',
      'r2.who': 'Online store owner',
      'r3.text': 'Available even outside working hours, patient and professional. Exceptional service and a willingness to go far beyond what was expected.',
      'r3.who': 'Business client',
      'reviews.more': 'See all our reviews on Easy →',
      'hero.kicker': 'Web development company',
      'hero.title': 'We build websites.<br><span class="hl">We craft experiences.</span>',
      'hero.sub': 'Einstein Web builds fast, striking websites for businesses and real-estate projects. No templates, no compromises - scroll down and see for yourself.',
      'hero.cta1': 'See our projects',
      'hero.cta2': 'Let’s talk',
      'hero.scroll': 'Scroll',
      'services.kicker': 'What we do',
      'services.title': 'Code that works for you',
      's1.title': 'Brand Websites',
      's1.desc': 'Fast, precise websites that present your business at its very best.',
      's2.title': 'Real-Estate Projects',
      's2.desc': 'Marketing sites for real-estate developments - from renders to lead forms, all connected.',
      's3.title': 'Landing Pages',
      's3.desc': 'Conversion-focused pages for campaigns, loading instantly on every device.',
      's4.title': 'Performance & SEO',
      's4.desc': 'Speed, accessibility and technical SEO that lift you on Google and keep visitors around.',
      'projects.kicker': 'Our work',
      'projects.title': 'Projects we shipped',
      'projects.sub': 'A few of the websites we built for our clients - and the list keeps growing.',
      'pr1.title': 'Shikun & Binui',
      'pr1.tag': 'Real estate · Mehir LaMishtaken',
      'pr2.title': 'Home in Israel',
      'pr2.tag': 'Real estate · Portal',
      'pr3.title': 'Electra',
      'pr3.tag': 'Real estate · Project site',
      'pr4.title': 'Y.H. Dimri',
      'pr4.tag': 'Real estate · Mehir LaMishtaken',
      'pr5.title': 'Shatit Mishtaken',
      'pr5.tag': 'Real estate · Mehir LaMishtaken',
      'pr6.title': 'Sharbat Haifa',
      'pr6.tag': 'Real estate · Mehir Matara',
      'process.kicker': 'How it works',
      'process.title': 'From idea to launch in four steps',
      'p1.title': 'Discovery',
      'p1.desc': 'We learn the business, goals and audience - and build a precise plan.',
      'p2.title': 'Design',
      'p2.desc': 'Live sketches and quick feedback rounds, until it feels exactly right.',
      'p3.title': 'Development',
      'p3.desc': 'Clean code, testing on every device, performance and accessibility without compromise.',
      'p4.title': 'Launch',
      'p4.desc': 'Going live, domain and analytics setup - and ongoing support after.',
      'contact.kicker': 'Get in touch',
      'contact.title': 'Let’s build something together',
      'contact.sub': 'Leave your details and we’ll get back to you within one business day.',
      'contact.name': 'Full name',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.send': 'Send us a message',
      'contact.or': 'Or email us directly:',
      'contact.subject': 'New inquiry from the website',
      'bm.live': 'Live site',
      'bm.loading': 'Loading the live website…',
      'bm.fallbackText': 'This website prefers to open full-screen.',
      'bm.fallbackCta': 'Open it in a new tab',
      'footer.rights': 'All rights reserved',
      'footer.accessibility': 'Accessibility statement',
      'footer.privacy': 'Privacy policy'
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

  /* ===== Browser-in-browser preview ===== */
  (function () {
    var modal = document.getElementById('browserModal');
    if (!modal) return;
    var bmBody = document.getElementById('bmBody');
    var bmLoading = document.getElementById('bmLoading');
    var bmFallback = document.getElementById('bmFallback');
    var bmDomainText = document.getElementById('bmDomainText');
    var bmNewTab = document.getElementById('bmNewTab');
    var bmFallbackLink = document.getElementById('bmFallbackLink');
    var bmClose = document.getElementById('bmClose');

    var frame = null, loadTimer = null, lastFocus = null, isOpen = false;
    var DESKTOP_VIEWPORT = 1280;

    /* Render the site at full desktop width, scaled to fit the popup,
       so it always looks proportional - like a live screenshot. */
    function fitFrame() {
      if (!frame) return;
      if (window.innerWidth < 768) {
        frame.style.width = '100%';
        frame.style.height = '100%';
        frame.style.transform = 'none';
        return;
      }
      var bw = bmBody.clientWidth, bh = bmBody.clientHeight;
      if (!bw || !bh) return;
      var s = bw / DESKTOP_VIEWPORT;
      frame.style.width = DESKTOP_VIEWPORT + 'px';
      frame.style.height = Math.round(bh / s) + 'px';
      frame.style.transform = 'scale(' + s + ')';
    }

    window.addEventListener('resize', fitFrame);

    function openPreview(url) {
      lastFocus = document.activeElement;
      isOpen = true;

      try { bmDomainText.textContent = new URL(url).hostname; } catch (e) { bmDomainText.textContent = url; }
      bmNewTab.href = url;
      bmFallbackLink.href = url;

      bmFallback.hidden = true;
      bmLoading.hidden = false;

      frame = document.createElement('iframe');
      frame.title = 'Website preview';
      frame.addEventListener('load', function () {
        clearTimeout(loadTimer);
        bmLoading.hidden = true;
      });
      bmBody.appendChild(frame);
      frame.src = url;

      // heavy sites paint long before their load event - drop the
      // spinner after a few seconds and let the site show through
      loadTimer = setTimeout(function () {
        bmLoading.hidden = true;
      }, 4000);

      modal.hidden = false;
      document.documentElement.classList.add('bm-lock');
      void modal.offsetHeight; // force reflow so the open transition runs
      modal.classList.add('open');
      fitFrame();
      bmClose.focus();
    }

    function closePreview() {
      if (!isOpen) return;
      isOpen = false;
      clearTimeout(loadTimer);
      modal.classList.remove('open');
      document.documentElement.classList.remove('bm-lock');
      setTimeout(function () {
        modal.hidden = true;
        if (frame) { frame.remove(); frame = null; }
        bmLoading.hidden = true;
        bmFallback.hidden = true;
      }, 350);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    bmClose.addEventListener('click', closePreview);
    modal.querySelector('[data-bm-close]').addEventListener('click', closePreview);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePreview();
    });

    var cardUrls = [];
    document.querySelectorAll('.project-card').forEach(function (card) {
      cardUrls.push(card.href);
      card.addEventListener('click', function (e) {
        // let modified clicks (new tab, etc.) behave natively
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        openPreview(card.href);
      });
    });

    // deep link / debug: ?preview=<url> - only URLs that exist as project cards
    var previewUrl = new URLSearchParams(location.search).get('preview');
    if (previewUrl && cardUrls.indexOf(previewUrl) !== -1) {
      window.addEventListener('load', function () { openPreview(previewUrl); });
    }
  })();

  /* ===== Contact form -> prefilled email ===== */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.reportValidity()) return;
      var dict = I18N[document.documentElement.lang] || I18N.he;
      var name = document.getElementById('cfName').value.trim();
      var email = document.getElementById('cfEmail').value.trim();
      var tel = document.getElementById('cfTel').value.trim();
      var body = dict['contact.name'] + ': ' + name + '\n' +
                 dict['contact.email'] + ': ' + email + '\n' +
                 dict['contact.phone'] + ': ' + tel;
      location.href = 'mailto:info@einstein-web.co.il' +
        '?subject=' + encodeURIComponent(dict['contact.subject']) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ===== Count-up stats ===== */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function countUp(el) {
    var to = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (reduceMotion) { el.textContent = to; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('[data-count]').forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = el.getAttribute('data-count');
    });
  }

  /* ===== Scroll reveal ===== */
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
