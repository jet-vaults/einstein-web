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
      'nav.tech': 'טכנולוגיות',
      'nav.team': 'הצוות',
      'nav.cta': 'דברו איתנו',
      'team.kicker': 'הצוות שלנו',
      'team.title': 'האנשים מאחורי הקוד, <span class="hl">והפנים שמולכם</span>',
      't1.name': 'אושר ותארי',
      't1.role': 'מנכ״ל',
      't2.name': 'ניר מיכלוביץ׳',
      't2.role': 'מפתח תוכנה · ישראל',
      't3.name': 'יואב בר אשר',
      't3.role': 'מפתח תוכנה · ארה״ב',
      'stats.clients': 'לקוחות מרוצים',
      'stats.years': 'שנות ניסיון',
      'stats.boutique': 'שירות אישי ובוטיק',
      'clients.title': 'עובדים עם החברות המובילות בישראל',
      'reviews.kicker': 'המלצות',
      'reviews.title': 'לקוחות מספרים',
      'r1.text': 'כשמדובר בתכנות ובניית אתרים, לא פשוט לאתר אנשי מקצוע שהם גם מוכשרים, גם יסודיים וגם בני אדם מדהימים – אבל במקרה של אושר מצאתי את כל זה והרבה יותר. עבדתי איתו על אתר, ומהרגע הראשון היה ברור שמדובר במישהו שחושב צעד קדימה, מקשיב לצרכים, יודע לשאול את השאלות הנכונות – ובעיקר, נותן מענה מקצועי ברמה הגבוהה ביותר. הקוד שלו נקי, מהיר ומדויק, העבודה תמיד עומדת בזמנים, והתקשורת איתו נעימה, מכבדת ויעילה. גם כשעלו אתגרים, הוא ניגש אליהם בגישה חיובית ובפתרונות יצירתיים. אני ממליץ עליו ביותר, ובטוח לומר שכל מי שיעבוד איתו – ירוויח בגדול.',
      'r1.who': 'צחי מנע',
      'r2.text': 'פניתי לאיינשטיין אתרים כדי לפתח אתר למשרד עורכי דין מהמובילים בארץ, וזו הייתה הבחירה הטובה ביותר שיכולתי לעשות. כבר בפגישת ההיכרות הצוות התחייב לסטנדרט הגבוה ביותר, לעיצוב היפה ביותר ולממשק פשוט ונגיש – והם עמדו ביעדים מעבר לציפיות. היה תענוג לעבוד עם אושר וניר, אנשי מקצוע ברמה הגבוהה ביותר. הם תמיד היו זמינים, גם בשעות לא שעות, וניכר שהצלחת האתר הייתה חשובה להם כמו שלי. איינשטיין אתרים היא חברה מצוינת, שירותית, אמינה ואטרקטיבית, ואני מקווה לפתח איתם אתרים נוספים בעתיד. ללא ספק אמליץ בחום לכל מכריי לעבוד איתם.',
      'r2.who': 'משרד עורכי דין אדורם',
      'r3.text': 'הכרתי את אושר בזמן פרוץ המלחמה, ומיד נוצר בינינו חיבור. השיחה, ההסברים, הכל היה ברמה חברית ולא מסחרית בכלל. לקח לי הרבה זמן להחליט להתקדם, ואושר התאזר בסבלנות. כשהחלטתי להתקדם הכל זרם חלק, שיח נפלא, קיבלתי הסברים על כל הדברים, יתרונות וחסרונות, שירות, נוחות ומקצועיות. מומלץ מאוד!!!',
      'r3.who': 'ליאון משכנתאות',
      'reviews.more': 'לכל הביקורות שלנו באיזי ←',
      'hero.kicker': 'חכם. נקי. מקצועי.',
      'hero.title': 'בונים אתרים.<br><span class="hl">יוצרים חוויות.</span>',
      'hero.sub': 'בונים אתרים בתשומת לב, מהרעיון ועד העלייה לאוויר.<br>לאורך השנים ליווינו חברות מובילות בישראל, ביניהן שיכון ובינוי, אלקטרה וי.ח דמרי. כל אתר נבנה יחד אתכם, בישראל ובארצות הברית.',
      'hero.cta1': 'לפרויקטים שלנו',
      'hero.cta2': 'בואו נבנה את שלכם',
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
      'tech.kicker': 'מאחורי הקלעים',
      'tech.title': 'הטכנולוגיה שלנו',
      'diff.kicker': 'האתרים שלנו שונים',
      'diff.slogan': 'מהירות. <span class="hl">אבטחה.</span> פשטות.',
      'tw.p1': 'האתרים שלנו נטענים כהרף עין בכל מקום בעולם, שומרים על זמינות סביב השעון, חוסמים בוטים, ומתאימים את עצמם לכל היקף תנועה ללא מאמץ - מקומץ גולשים ועד לזרם אדיר של מבקרים, ללא תוספת עלות. בניגוד לתוכנות המסורבלות והפגיעות שעומדות בבסיסם של אתרים מסורתיים רבים, האתרים שלנו רזים בהרבה וחסינים לווקטורי התקיפה הקלאסיים.',
      'tw.p2': 'אותה תשתית בדיוק גם עוזרת ללקוחות למצוא אתכם: האתרים נטענים מהר, זוכים לדירוג גבוה, ומתוכננים מראש לקריאה חלקה על ידי AI. כך העסק שלכם צף ובולט גם בתוצאות החיפוש וגם בתוך כלי בינה מלאכותית. כל מידע שהגולשים שלכם שולחים זוכה להגנה הרמטית - בוטים נחסמים באופן אוטומטי, ומערכת AI ייעודית מסננת הודעות ספאם ותוכן פוגעני, כך שרק פניות אמיתיות מגיעות אליכם. אתם יכולים להתמקד בעסק, והאתר שלכם דואג לעצמו.',
      'tw.p3': 'אם אתר וורדפרס או פלטפורמות דומות הן משאית ישנה: חלודה, כבדה, איטית ולא בטוחה על הכביש, אתר שלנו הוא מכונית ספורט חשמלית: מהירה, יעילה, ומהונדסת עם מנגנוני הגנה המוטמעים בכל רכיב.',
      'tt.p1': 'ארכיטקטורת Jamstack: האתר שלכם נבנה מראש כקבצים סטטיים ומוגש דרך רשת קצה גלובלית, מה שמבטיח טעינה במהירות מקסימלית, צמצום ניכר של משטח התקיפה, והגנה איתנה מפני מתקפות DDoS ותעבורה זדונית.',
      'tt.p2': 'הגשת תוכן סטטי מספקת גמישות אלסטית אל מול עומסים בעלות שולית שואפת לאפס. היא מעניקה לאתר בסיס חזק ל-SEO ולמדדי ה-Core Web Vitals, יחד עם Markup סמנטי ונקי שסורקים של מנועי חיפוש ומודלים של בינה מלאכותית קוראים בקלות רבה.',
      'tt.p3': 'כל שינוי במבנה האתר מנוהל תחת בקרת גרסאות ונפרס באופן אוטומטי. התוכן וקבצי המדיה מאוחסנים בענן עם יתירות מלאה. טפסים ופניות מהאתר מעובדים על גבי תשתית Serverless, תוך שימוש בסינון בוטים סמוי ומבוסס-אתגרים, יחד עם ניתוח AI מוקדם למניעת ספאם, עוד לפני שמידע כלשהו בכלל מתקבל במערכת.',
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
      'footer.privacy': 'מדיניות פרטיות',
      'a11y.title': 'הגדרות נגישות',
      'a11y.fontsize': 'הגדלת טקסט',
      'a11y.contrast': 'ניגודיות גבוהה',
      'a11y.grayscale': 'שחור-לבן',
      'a11y.links': 'הדגשת קישורים',
      'a11y.readable': 'גופן קריא',
      'a11y.nomotion': 'עצירת אנימציות',
      'a11y.cursor': 'סמן גדול',
      'a11y.reset': 'איפוס הגדרות',
      'a11y.statement': 'להצהרת הנגישות'
    },
    en: {
      'meta.title': 'Einstein Web - Web Development & Digital Experiences',
      'meta.desc': 'Einstein Web - a company building fast, striking websites for businesses and real-estate projects. Hebrew and English, meticulous design, uncompromising performance.',
      'brand': 'Einstein Web',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.reviews': 'Reviews',
      'nav.process': 'How it works',
      'nav.tech': 'Technologies',
      'nav.team': 'Team',
      'nav.cta': 'Talk to us',
      'team.kicker': 'Our team',
      'team.title': 'The people behind the code, <span class="hl">and the faces in front of you</span>',
      't1.name': 'Osher Vatari',
      't1.role': 'CEO',
      't2.name': 'Nir Michalovitz',
      't2.role': 'Software Developer · Israel',
      't3.name': 'Yoav Bar Asher',
      't3.role': 'Software Developer · USA',
      'stats.clients': 'Happy clients',
      'stats.years': 'Years of experience',
      'stats.boutique': 'Personal boutique service',
      'clients.title': 'Working with Israel’s leading companies',
      'reviews.kicker': 'Testimonials',
      'reviews.title': 'What clients say',
      'r1.text': 'When it comes to programming and web development, it’s not easy to find professionals who are talented, thorough, and wonderful people too – but with Osher I found all of that and much more. I worked with him on a website, and from the first moment it was clear he thinks a step ahead, listens to needs, asks the right questions and, above all, delivers professional work of the highest level. His code is clean, fast and precise, the work is always on time, and communication is pleasant, respectful and efficient. Even when challenges came up, he met them with a positive attitude and creative solutions. I highly recommend him, and I can confidently say anyone who works with him will gain a great deal.',
      'r1.who': 'Tzahi Mena',
      'r2.text': 'I approached Einstein Web to develop a site for one of the leading law firms in the country, and it was the best choice I could have made. From our very first meeting the team committed to the highest standard, the most beautiful design and a simple, accessible interface – and they delivered beyond expectations. It was a pleasure to work with Osher and Nir, professionals of the highest caliber. They were always available, even at odd hours, and it was clear the site’s success mattered to them as much as it did to me. Einstein Web is an excellent company – attentive, reliable and attractive – and I hope to build more sites with them in the future. I would warmly recommend them to anyone.',
      'r2.who': 'Adoram Law Firm',
      'r3.text': 'I met Osher when the war broke out, and we connected immediately. The conversation and explanations were all personal and friendly, not commercial at all. It took me a while to decide to move forward, and Osher was patient throughout. Once I decided, everything flowed smoothly – wonderful communication, clear explanations of everything, pros and cons, service, ease and professionalism. Highly recommended!!!',
      'r3.who': 'Leon Mortgage',
      'reviews.more': 'See all our reviews on Easy →',
      'hero.kicker': 'Smart. Clean. Professional.',
      'hero.title': 'We build websites.<br><span class="hl">We craft experiences.</span>',
      'hero.sub': 'Websites built with care, from first idea to launch.<br>Over the years we’ve worked with leading companies in Israel, among them Shikun & Binui, Electra, and Y.H Dimri. Every site is built together with you, in Israel and the US.',
      'hero.cta1': 'See Our Projects',
      'hero.cta2': 'Let’s Build Yours',
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
      'tech.kicker': 'Behind the scenes',
      'tech.title': 'Our tech',
      'diff.kicker': 'Why our websites are different',
      'diff.slogan': 'Speed. <span class="hl">Security.</span> Simplicity.',
      'tw.p1': 'Our websites load in the blink of an eye anywhere in the world, stay online around the clock, block bots, and effortlessly adapt to any volume of traffic - from a handful of visitors to a massive surge - without added costs. Unlike the bulky, vulnerable software that powers many traditional sites, ours are vastly leaner and immune to classic attack vectors.',
      'tw.p2': 'That exact same infrastructure also helps customers find you: our sites load fast, achieve high rankings, and are pre-engineered for seamless reading by AI. This ensures your business surfaces and stands out in both search engine results and AI tools. Any information your visitors submit receives airtight protection - bots are blocked automatically, and a dedicated AI system screens messages for spam and abusive content, ensuring only genuine inquiries reach you. You can focus on your business, and your website takes care of itself.',
      'tw.p3': 'If WordPress or similar platforms are an old truck - rusty, heavy, slow, and unsafe on the road - our website is an electric sports car: fast, efficient, and engineered with protective mechanisms embedded into every single component.',
      'tt.p1': 'Jamstack architecture: your site is pre-built as static files and served through a global edge network, guaranteeing maximum load speeds, a significantly reduced attack surface, and robust protection against DDoS attacks and malicious traffic.',
      'tt.p2': 'Static content delivery provides elastic flexibility against traffic spikes at a near-zero marginal cost. It gives the site a robust foundation for SEO and Core Web Vitals, featuring clean, semantic markup that search engine crawlers and AI models can read with ease.',
      'tt.p3': 'Every structural change to the site is version-controlled and deployed automatically. Content and media files are stored in the cloud with full redundancy. Forms and site submissions are processed on Serverless infrastructure, utilizing invisible, challenge-based bot screening alongside preemptive AI analysis to prevent spam, well before any data is even accepted into the system.',
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
      'footer.privacy': 'Privacy policy',
      'a11y.title': 'Accessibility settings',
      'a11y.fontsize': 'Larger text',
      'a11y.contrast': 'High contrast',
      'a11y.grayscale': 'Grayscale',
      'a11y.links': 'Highlight links',
      'a11y.readable': 'Readable font',
      'a11y.nomotion': 'Stop animations',
      'a11y.cursor': 'Large cursor',
      'a11y.reset': 'Reset settings',
      'a11y.statement': 'Accessibility statement'
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

  /* ===== Accessibility menu ===== */
  (function () {
    var root = document.getElementById('a11y');
    if (!root) return;
    var toggle = document.getElementById('a11yToggle');
    var panel = document.getElementById('a11yPanel');
    var A11Y_KEY = 'einstein-web-a11y';

    var state = {};
    try { state = JSON.parse(localStorage.getItem(A11Y_KEY)) || {}; } catch (e) { state = {}; }

    function applyState() {
      document.querySelectorAll('[data-a11y]').forEach(function (btn) {
        var key = btn.getAttribute('data-a11y');
        var on = !!state[key];
        document.documentElement.classList.toggle('a11y-' + key, on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      try { localStorage.setItem(A11Y_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
    }

    function openPanel(open) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
      openPanel(panel.hidden);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { openPanel(false); toggle.focus(); }
    });

    document.addEventListener('click', function (e) {
      if (!panel.hidden && !root.contains(e.target)) openPanel(false);
    });

    document.querySelectorAll('[data-a11y]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-a11y');
        state[key] = !state[key];
        applyState();
      });
    });

    var reset = document.getElementById('a11yReset');
    if (reset) {
      reset.addEventListener('click', function () {
        state = {};
        applyState();
      });
    }

    applyState();
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
