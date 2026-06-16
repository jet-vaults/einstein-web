/* ===== Canvas-2D particle fallback =====
   Runs only when the WebGL scene did NOT activate (no WebGL / blocked /
   three failed to load) AND motion is allowed. Plain 2D canvas works on
   virtually all machines, including locked-down ones with hardware
   acceleration disabled. Kept lightweight for old hardware. */
(function () {
  function start() {
    var html = document.documentElement;
    if (html.classList.contains('has-scene')) return;                 // WebGL scene is active
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // keep static dots

    var canvas = document.getElementById('scene2d');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    html.classList.add('has-fallback-2d');

    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var W, H, parts;
    var colors = ['#1763aa', '#01a0c6', '#7cc7e8'];

    function resize() {
      W = canvas.width = Math.floor(window.innerWidth * dpr);
      H = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    }

    function build() {
      var n = Math.round(Math.min(150, (window.innerWidth * window.innerHeight) / 12000));
      parts = [];
      for (var i = 0; i < n; i++) {
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.16 * dpr,
          vy: (Math.random() - 0.5) * 0.16 * dpr,
          r: (Math.random() * 1.6 + 0.8) * dpr,
          a: Math.random() * 0.5 + 0.3,
          c: colors[(Math.random() * colors.length) | 0]
        });
      }
    }

    resize();
    build();
    window.addEventListener('resize', function () { resize(); build(); });

    var running = true;
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) loop();
    });

    function loop() {
      if (!running) return;
      requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -12) p.x = W + 12; else if (p.x > W + 12) p.x = -12;
        if (p.y < -12) p.y = H + 12; else if (p.y > H + 12) p.y = -12;
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    loop();
  }

  // give scene.js a moment to claim the page with .has-scene first
  if (document.readyState === 'complete') setTimeout(start, 300);
  else window.addEventListener('load', function () { setTimeout(start, 300); });
})();
