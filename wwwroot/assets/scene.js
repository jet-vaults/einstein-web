/* ===== Einstein Web — scroll-morphing particle scene =====
   One cloud of brand-colored particles morphs between a shape per
   section as you scroll: atom -> code -> skyline -> rocket -> paper plane.
   Degrades gracefully: no WebGL / reduced motion => canvas hidden,
   page works as a normal static site. */

import * as THREE from 'three';

const canvas = document.getElementById('scene');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!canvas || reduceMotion) {
  if (canvas) canvas.style.display = 'none';
} else {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  } catch (e) {
    canvas.style.display = 'none';
  }
  if (renderer) {
    document.documentElement.classList.add('has-scene');
    init(renderer);
  }
}

function init(renderer) {
  const isMobile = window.innerWidth < 768;
  const N = isMobile ? 3200 : 6400;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.z = 8;

  const group = new THREE.Group();
  scene.add(group);

  /* ---------- shape generators (each returns Float32Array N*3) ---------- */

  const rand = (a, b) => a + Math.random() * (b - a);
  const gauss = (s) => (Math.random() + Math.random() + Math.random() - 1.5) * 2 * s;

  function rotXZ(p, ax, az) {
    let [x, y, z] = p;
    let y1 = y * Math.cos(ax) - z * Math.sin(ax);
    let z1 = y * Math.sin(ax) + z * Math.cos(ax);
    let x2 = x * Math.cos(az) - y1 * Math.sin(az);
    let y2 = x * Math.sin(az) + y1 * Math.cos(az);
    return [x2, y2, z1];
  }

  function sampleTriangle(a, b, c, out, i, jitter) {
    const r1 = Math.sqrt(Math.random()), r2 = Math.random();
    for (let k = 0; k < 3; k++) {
      out[i * 3 + k] = a[k] * (1 - r1) + b[k] * r1 * (1 - r2) + c[k] * r1 * r2 + gauss(jitter || 0.01);
    }
  }

  function sampleSegments(segs, out, start, count, jitter, zJitter) {
    const lens = segs.map(s => Math.hypot(s[1][0] - s[0][0], s[1][1] - s[0][1]));
    const total = lens.reduce((a, b) => a + b, 0);
    for (let i = start; i < start + count; i++) {
      let r = Math.random() * total, si = 0;
      while (r > lens[si]) { r -= lens[si]; si++; }
      const [a, b] = segs[si];
      const t = r / lens[si];
      out[i * 3] = a[0] + (b[0] - a[0]) * t + gauss(jitter);
      out[i * 3 + 1] = a[1] + (b[1] - a[1]) * t + gauss(jitter);
      out[i * 3 + 2] = gauss(zJitter);
    }
  }

  // electron particles are animated along their rings in the render loop
  let atomElectrons = null;

  function electronPos(k, angle) {
    return rotXZ([2.7 * Math.cos(angle), 1.05 * Math.sin(angle), 0], (k - 1) * 0.55, k * Math.PI / 3 + 0.5);
  }

  function shapeAtom() {
    const out = new Float32Array(N * 3);
    const nRing = Math.floor(N * 0.71), nNuc = Math.floor(N * 0.13);
    for (let i = 0; i < nRing; i++) {
      const k = i % 3;
      const t = Math.random() * Math.PI * 2;
      const p = rotXZ([2.7 * Math.cos(t), 1.05 * Math.sin(t), 0], (k - 1) * 0.55, k * Math.PI / 3 + 0.5);
      out[i * 3] = p[0] + gauss(0.035);
      out[i * 3 + 1] = p[1] + gauss(0.035);
      out[i * 3 + 2] = p[2] + gauss(0.035);
    }
    for (let i = nRing; i < nRing + nNuc; i++) {
      out[i * 3] = gauss(0.24);
      out[i * 3 + 1] = gauss(0.24);
      out[i * 3 + 2] = gauss(0.24);
    }
    const start = nRing + nNuc;
    const nEl = N - start;
    const ri = new Float32Array(nEl), phi = new Float32Array(nEl), zi = new Float32Array(nEl);
    for (let i = start; i < N; i++) {
      const k = (i - start) % 3;
      const j = i - start;
      ri[j] = 0.07 + Math.random() * 0.21;
      phi[j] = Math.random() * Math.PI * 2;
      zi[j] = gauss(0.09);
      const e = electronPos(k, k * 2.1 + 0.7);
      out[i * 3] = e[0] + ri[j] * Math.cos(phi[j]);
      out[i * 3 + 1] = e[1] + ri[j] * Math.sin(phi[j]);
      out[i * 3 + 2] = e[2] + zi[j];
    }
    atomElectrons = { start, ri, phi, zi };
    return out;
  }

  function shapeCode() {
    const out = new Float32Array(N * 3);
    const segs = [
      [[-1.1, 1.0], [-2.4, 0]], [[-2.4, 0], [-1.1, -1.0]],   // <
      [[0.6, 1.25], [-0.6, -1.25]],                            // /
      [[1.1, 1.0], [2.4, 0]], [[2.4, 0], [1.1, -1.0]]          // >
    ];
    const nSpark = Math.floor(N * 0.06);
    sampleSegments(segs, out, 0, N - nSpark, 0.05, 0.16);
    for (let i = N - nSpark; i < N; i++) {
      out[i * 3] = rand(-3, 3);
      out[i * 3 + 1] = rand(-1.8, 1.8);
      out[i * 3 + 2] = rand(-1, 1);
    }
    return out;
  }

  function shapeBrowser(dirSign) {
    // Empty browser window: frame + toolbar divider + three dots.
    // dirSign -1 puts the dots on the left (Hebrew), +1 on the right.
    const out = new Float32Array(N * 3);
    const W = 2.3, H = 1.57, T = 1.1;   // half-width, half-height, toolbar bottom
    const frame = [
      [[-W, H], [W, H]], [[W, H], [W, -H]], [[W, -H], [-W, -H]], [[-W, -H], [-W, H]],
      [[-W, T], [W, T]]
    ];
    const nDots = Math.floor(N * 0.07);
    const nFrame = N - nDots;

    sampleSegments(frame, out, 0, nFrame, 0.03, 0.09);
    for (let k = 0; k < nDots; k++) {
      const i = nFrame + k;
      const d = k % 3;
      out[i * 3] = dirSign * (W - 0.32 - d * 0.27) + gauss(0.045);
      out[i * 3 + 1] = (H + T) / 2 + gauss(0.045);
      out[i * 3 + 2] = gauss(0.06);
    }
    return out;
  }

  function shapeRocket() {
    const out = new Float32Array(N * 3);
    const tilt = -0.3;
    const nBody = Math.floor(N * 0.42), nNose = Math.floor(N * 0.15), nFin = Math.floor(N * 0.15);
    for (let i = 0; i < N; i++) {
      let x, y, z;
      if (i < nBody) {
        const a = Math.random() * Math.PI * 2;
        y = rand(-1.0, 0.8); x = 0.5 * Math.cos(a); z = 0.5 * Math.sin(a);
      } else if (i < nBody + nNose) {
        const a = Math.random() * Math.PI * 2;
        y = rand(0.8, 1.9);
        const r = 0.5 * (1 - (y - 0.8) / 1.1);
        x = r * Math.cos(a); z = r * Math.sin(a);
      } else if (i < nBody + nNose + nFin) {
        const k = i % 3;
        const a = k * Math.PI * 2 / 3;
        const t = Math.sqrt(Math.random());
        const rr = 0.5 + t * rand(0.3, 0.62);
        y = rand(-1.05, -1.05 + (1 - t) * 0.75);
        x = rr * Math.cos(a); z = rr * Math.sin(a);
      } else {
        const a = Math.random() * Math.PI * 2;
        y = rand(-2.3, -1.05);
        const spread = 0.12 + (-1.05 - y) * 0.45 * Math.random();
        x = spread * Math.cos(a); z = spread * Math.sin(a);
      }
      const x2 = x * Math.cos(tilt) - y * Math.sin(tilt);
      const y2 = x * Math.sin(tilt) + y * Math.cos(tilt);
      out[i * 3] = x2 + gauss(0.02);
      out[i * 3 + 1] = y2 + gauss(0.02);
      out[i * 3 + 2] = z + gauss(0.02);
    }
    return out;
  }

  function shapeRing() {
    // soft circular ring around the centered contact card
    const out = new Float32Array(N * 3);
    const RX = 3.05, RY = 2.78, band = 0.2;
    const nHalo = Math.floor(N * 0.08);
    for (let i = 0; i < N - nHalo; i++) {
      const a = Math.random() * Math.PI * 2;
      const rr = 1 + gauss(band / 2);
      out[i * 3] = Math.cos(a) * RX * rr;
      out[i * 3 + 1] = Math.sin(a) * RY * rr;
      out[i * 3 + 2] = gauss(0.12);
    }
    for (let i = N - nHalo; i < N; i++) {   // loose sparkle just outside
      const a = Math.random() * Math.PI * 2;
      const rr = 1.15 + Math.random() * 0.25;
      out[i * 3] = Math.cos(a) * RX * rr;
      out[i * 3 + 1] = Math.sin(a) * RY * rr;
      out[i * 3 + 2] = gauss(0.25);
    }
    return out;
  }

  // a small group of people (busts) for the team section. Baked into the
  // left margin so it reads clearly as "our team" beside the centred cards.
  function shapeTeam() {
    const out = new Float32Array(N * 3);
    const OFF_X = -2.6, OFF_Y = 0.0, SC = 0.8;
    const people = [
      { cx: -0.9, s: 1.05 },
      { cx:  0.9, s: 1.05 }
    ];
    const wsum = people.reduce((a, p) => a + p.s, 0);
    let idx = 0;
    for (let pi = 0; pi < people.length; pi++) {
      const p = people[pi];
      const count = pi === people.length - 1 ? N - idx : Math.round(N * p.s / wsum);
      const headR = 0.4 * p.s, headY = 0.98 * p.s;
      const torsoRX = 0.52 * p.s, torsoRY = 0.92 * p.s, torsoCY = -0.35 * p.s;
      const nHead = Math.floor(count * 0.3);
      for (let k = 0; k < count; k++, idx++) {
        let x, y;
        if (k < nHead) {                       // round head
          const r = headR * Math.sqrt(Math.random()), a = Math.random() * Math.PI * 2;
          x = p.cx + r * Math.cos(a); y = headY + r * Math.sin(a);
        } else {                               // oval torso
          const r = Math.sqrt(Math.random()), a = Math.random() * Math.PI * 2;
          x = p.cx + torsoRX * r * Math.cos(a);
          y = torsoCY + torsoRY * r * Math.sin(a);
        }
        out[idx * 3]     = x * SC + OFF_X + gauss(0.02);
        out[idx * 3 + 1] = y * SC + OFF_Y + gauss(0.02);
        out[idx * 3 + 2] = gauss(0.07);
      }
    }
    return out;
  }

  function shapeStar() {
    const out = new Float32Array(N * 3);
    const R = 2.3, r = 0.95;
    const verts = [];
    for (let k = 0; k < 10; k++) {
      const ang = Math.PI / 2 + k * Math.PI / 5;
      const rad = k % 2 === 0 ? R : r;
      verts.push([rad * Math.cos(ang), rad * Math.sin(ang)]);
    }
    const segs = verts.map((v, k) => [v, verts[(k + 1) % 10]]);
    sampleSegments(segs, out, 0, N, 0.045, 0.12);
    return out;
  }

  // Margin-side shapes for the two full-width sections ("different" card
  // and the dark tech band). Both sections span the whole 74rem container,
  // so these shapes size themselves to the gap between the container edge
  // and the screen edge, centered in that margin. Rebuilt on resize.
  function marginFit(intrinsicW) {
    const halfVis = 3.3137 * (window.innerWidth / window.innerHeight);
    const cardHalfPx = Math.min(window.innerWidth, 1184) / 2 - 24;
    const cardEdge = halfVis * (2 * cardHalfPx / window.innerWidth);
    const avail = Math.max(halfVis - cardEdge, 0.9);
    const SC = Math.min(Math.max(avail / (intrinsicW * 1.35), 0.32), 0.85);
    return { SC, OFF_X: -(halfVis + cardEdge) / 2 };
  }

  // a side-view formula car, nose to the right, centered on the origin.
  // The drive loop slides it across the bottom of the "different" section.
  function shapeSideCar() {
    const out = new Float32Array(N * 3);
    const SC = isMobile ? 0.55 : 0.8;
    const T = (x, y) => [x * SC, (y + 0.15) * SC];
    const segs = [];
    const M = (x0, y0, x1, y1) => segs.push([T(x0, y0), T(x1, y1)]);
    const circle = (cx, cy, r, steps) => {
      for (let k = 0; k < steps; k++) {
        const a0 = Math.PI * 2 * k / steps, a1 = Math.PI * 2 * (k + 1) / steps;
        segs.push([
          T(cx + r * Math.cos(a0), cy + r * Math.sin(a0)),
          T(cx + r * Math.cos(a1), cy + r * Math.sin(a1))
        ]);
      }
    };
    // floor
    M(-1.55, -0.34, 1.5, -0.34);
    // front wing + nose
    M(1.5, -0.34, 1.82, -0.3); M(1.82, -0.42, 1.82, -0.18);
    M(1.78, -0.16, 0.5, 0.08);
    // cockpit + halo
    M(0.5, 0.08, 0.32, 0.28);
    for (let k = 0; k < 8; k++) {
      const a0 = Math.PI * k / 8, a1 = Math.PI * (k + 1) / 8;
      segs.push([
        T(0.02 + 0.26 * Math.cos(a0), 0.28 + 0.26 * Math.sin(a0)),
        T(0.02 + 0.26 * Math.cos(a1), 0.28 + 0.26 * Math.sin(a1))
      ]);
    }
    M(-0.24, 0.28, -0.42, 0.12);
    // engine cover down to the tail
    M(-0.42, 0.12, -1.45, -0.02);
    // rear wing
    M(-1.5, -0.02, -1.58, 0.4);
    M(-1.78, 0.42, -1.36, 0.42);
    M(-1.74, 0.28, -1.4, 0.28);
    // wheels
    circle(0.98, -0.52, 0.33, 14); circle(0.98, -0.52, 0.12, 8);
    circle(-1.02, -0.52, 0.33, 14); circle(-1.02, -0.52, 0.12, 8);
    // speed lines trailing the tail
    M(-2.35, 0.1, -1.95, 0.1); M(-2.2, -0.15, -1.85, -0.15); M(-2.45, -0.4, -2.0, -0.4);
    sampleSegments(segs, out, 0, N, 0.018, 0.06);
    return out;
  }

  // a vault door, face-on, for the dark "behind the scenes" tech band.
  function shapeVault() {
    const out = new Float32Array(N * 3);
    const { SC, OFF_X } = marginFit(2.4);
    const OFF_Y = 0.15;
    const T = (x, y) => [x * SC + OFF_X, y * SC + OFF_Y];
    const segs = [];
    const arc = (cx, cy, r, steps) => {
      for (let k = 0; k < steps; k++) {
        const t0 = Math.PI * 2 * k / steps, t1 = Math.PI * 2 * (k + 1) / steps;
        segs.push([
          T(cx + r * Math.cos(t0), cy + r * Math.sin(t0)),
          T(cx + r * Math.cos(t1), cy + r * Math.sin(t1))
        ]);
      }
    };
    // square door frame
    segs.push(
      [T(-1.2, 1.2), T(1.2, 1.2)], [T(1.2, 1.2), T(1.2, -1.2)],
      [T(1.2, -1.2), T(-1.2, -1.2)], [T(-1.2, -1.2), T(-1.2, 1.2)]
    );
    // round door + handle wheel
    arc(0, 0, 0.95, 26);
    arc(0, 0, 0.55, 18);
    // four wheel spokes from the hub out to the wheel rim
    for (let k = 0; k < 4; k++) {
      const a = Math.PI / 4 + k * Math.PI / 2;
      segs.push([
        T(0.12 * Math.cos(a), 0.12 * Math.sin(a)),
        T(0.55 * Math.cos(a), 0.55 * Math.sin(a))
      ]);
    }
    // hinges on the frame edge
    segs.push([T(1.05, 0.55), T(1.2, 0.55)], [T(1.05, -0.55), T(1.2, -0.55)]);
    sampleSegments(segs, out, 0, N, 0.02, 0.07);
    return out;
  }

  const browserDir = () => document.documentElement.dir === 'rtl' ? -1 : 1;
  const shapes = [shapeAtom(), shapeCode(), shapeBrowser(browserDir()), shapeRocket(), shapeRing(), shapeStar(), shapeTeam(), shapeSideCar(), shapeVault()];


  // rebuild the browser shape when the language toggle flips direction
  new MutationObserver(() => {
    shapes[2].set(shapeBrowser(browserDir()));
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

  /* ---------- scripted behaviors for the two full-width sections ----------
     7 ("different"): scrolling down from the rocket launches it upward on a
     smoke column, then a side-view car drives across the bottom in a loop.
     8 (dark tech band): the cloud scatters and assembles into the vault. */

  const anim = new Float32Array(N * 3);
  const smokeStart = Math.floor(N * 0.62);
  const smokeU = new Float32Array(N), smokeSX = new Float32Array(N), smokeSY = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    smokeU[i] = Math.random();
    smokeSX[i] = gauss(1);
    smokeSY[i] = gauss(0.5);
  }

  let mode = 'normal', modeT0 = 0, lastDriveX = NaN;
  let halfVisX = 3.3137 * (window.innerWidth / window.innerHeight);
  const diffCard = document.querySelector('.diff-card');

  function sectionChanged(prev, idx) {
    if (idx === 7) {
      mode = prev === 3 ? 'launch' : 'drive';
      modeT0 = performance.now();
      lastDriveX = NaN;
    } else if (idx === 8) {
      // assemble in place: scatter the cloud around the vault first, then
      // let the regular easing pull every particle home.
      mode = 'normal';
      const v = shapes[8];
      for (let i = 0; i < N; i++) {
        base[i * 3] = v[i * 3] + gauss(1.9);
        base[i * 3 + 1] = v[i * 3 + 1] + gauss(1.9);
        base[i * 3 + 2] = v[i * 3 + 2] + gauss(1.1);
      }
    } else {
      mode = 'normal';
    }
  }

  // the car's lane: the gap between the card's bottom edge and the screen
  function carLaneY() {
    const ih = window.innerHeight;
    const r = diffCard && diffCard.getBoundingClientRect();
    const gapPx = r ? (Math.min(r.bottom, ih) + ih) / 2 : ih * 0.86;
    const s = isMobile ? 0.8 : 1;
    return Math.max((3.3137 - (gapPx / ih) * 6.6274) / s, -3.3137 / s + 0.8);
  }

  function section7Target(now) {
    if (mode === 'launch') {
      const tt = (now - modeT0) / 1000;
      const lift = 4.5 * tt * tt;
      if (lift > 9.5) {
        mode = 'drive'; modeT0 = now; lastDriveX = NaN;
      } else {
        const rocket = shapes[3];
        const padX = -0.35, padY = -1.15;   // the rocket's nozzle
        for (let i = 0; i < smokeStart; i++) {
          anim[i * 3] = rocket[i * 3];
          anim[i * 3 + 1] = rocket[i * 3 + 1] + lift;
          anim[i * 3 + 2] = rocket[i * 3 + 2];
        }
        const bloom = 0.4 + 1.7 * Math.min(tt, 1);
        for (let i = smokeStart; i < N; i++) {
          const u = smokeU[i];
          let x, y;
          if (u < 0.35) {                   // billowing cloud at the pad
            x = padX + smokeSX[i] * bloom;
            y = padY + smokeSY[i] * bloom * 0.8;
          } else {                          // column chasing the rocket
            const uu = (u - 0.35) / 0.65;
            y = padY + uu * Math.max(lift - 1.0, 0.1);
            x = padX + smokeSX[i] * (0.22 + (1 - uu) * 0.6);
          }
          anim[i * 3] = x;
          anim[i * 3 + 1] = y;
          anim[i * 3 + 2] = smokeSY[i] * 0.8;
        }
        return anim;
      }
    }
    // drive: cross the screen left-to-right, pause off-screen, repeat
    const tt = (now - modeT0) / 1000;
    const halfSpan = halfVisX * (isMobile ? 1.35 : 1.05) + 2.2;
    const CROSS = 6, PAUSE = 1.6;
    const ph = tt % (CROSS + PAUSE);
    const x = ph < CROSS ? -halfSpan + 2 * halfSpan * (ph / CROSS) : -halfSpan;
    if (!isNaN(lastDriveX) && Math.abs(x - lastDriveX) > 4) {
      // wrapped around while off-screen: teleport the cloud with the car
      // so it re-enters from the left instead of streaking backwards
      const dx = x - lastDriveX;
      for (let i = 0; i < N; i++) base[i * 3] += dx;
    }
    lastDriveX = x;
    const car = shapes[7], y = carLaneY();
    for (let i = 0; i < N; i++) {
      anim[i * 3] = car[i * 3] + x;
      anim[i * 3 + 1] = car[i * 3 + 1] + y;
      anim[i * 3 + 2] = car[i * 3 + 2];
    }
    return anim;
  }

  /* ---------- geometry, colors, material ---------- */

  const base = new Float32Array(shapes[0]);          // morphing positions
  const draw = new Float32Array(shapes[0]);          // rendered positions (base + wobble)
  const phases = new Float32Array(N);
  for (let i = 0; i < N; i++) phases[i] = Math.random() * Math.PI * 2;

  const colors = new Float32Array(N * 3);
  const cBlue = new THREE.Color('#1763aa');
  const cCyan = new THREE.Color('#01a0c6');
  const cSky = new THREE.Color('#7cc7e8');
  const tmp = new THREE.Color();
  for (let i = 0; i < N; i++) {
    if (Math.random() < 0.12) tmp.copy(cSky);
    else tmp.lerpColors(cBlue, cCyan, Math.random());
    colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(draw, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // soft round sprite
  const spriteCanvas = document.createElement('canvas');
  spriteCanvas.width = spriteCanvas.height = 64;
  const ctx = spriteCanvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.9)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const mat = new THREE.PointsMaterial({
    size: isMobile ? 0.085 : 0.065,
    map: new THREE.CanvasTexture(spriteCanvas),
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    sizeAttenuation: true
  });

  group.add(new THREE.Points(geo, mat));

  /* ---------- scroll / section tracking ---------- */

  const sections = Array.from(document.querySelectorAll('[data-shape]'));
  let targetIdx = 0, currentIdx = 0;
  let scale = 1, lastScrollY = window.scrollY, spinMomentum = 0;

  // respect deep links / restored scroll position: start on the visible shape
  targetIdx = pickSection();
  if (targetIdx !== 0) base.set(shapes[targetIdx]);

  // debug override: ?shape=0..4 pins a shape
  const forcedShape = parseInt(new URLSearchParams(location.search).get('shape'), 10);
  const isForced = !isNaN(forcedShape) && forcedShape >= 0 && forcedShape < shapes.length;
  if (isForced) {
    targetIdx = forcedShape;
    base.set(shapes[forcedShape]);
  }

  // deep link straight into the "different" section: start the car loop
  if (targetIdx === 7) {
    mode = 'drive';
    modeT0 = performance.now();
  }

  function pickSection() {
    const mid = window.innerHeight / 2;
    for (const s of sections) {
      const r = s.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) return parseInt(s.dataset.shape, 10);
    }
    return targetIdx;
  }

  window.addEventListener('scroll', () => {
    if (isForced) return;
    const idx = pickSection();
    if (idx !== targetIdx) {
      // gentle glide between the closing sections, punchier elsewhere
      scale = (idx >= 4 && idx !== 5) ? 0.94 : 0.78;
      const prev = targetIdx;
      targetIdx = idx;
      sectionChanged(prev, idx);
    }
    spinMomentum += (window.scrollY - lastScrollY) * 0.00035;
    lastScrollY = window.scrollY;
  }, { passive: true });

  /* ---------- mouse parallax ---------- */

  let mx = 0, my = 0;
  if (!isMobile) {
    window.addEventListener('pointermove', (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  /* ---------- render loop ---------- */

  group.position.x = (isMobile || (targetIdx >= 4 && targetIdx !== 5))
    ? 0
    : (document.documentElement.dir === 'rtl' ? -2.6 : 2.6) * ((targetIdx === 1 || targetIdx === 5) ? -1 : 1);

  const clock = new THREE.Clock();
  let running = true;

  const motionStopped = () => document.documentElement.classList.contains('a11y-nomotion');

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden && !motionStopped();
    if (running) { clock.getDelta(); render(); }
  });

  // pause rendering when the accessibility menu stops animations
  new MutationObserver(() => {
    const shouldRun = !document.hidden && !motionStopped();
    if (shouldRun && !running) { running = true; clock.getDelta(); render(); }
    else if (!shouldRun) { running = false; }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    halfVisX = 3.3137 * (window.innerWidth / window.innerHeight);
    shapes[8].set(shapeVault());   // refit the margin vault
  });

  function render() {
    if (!running) return;
    requestAnimationFrame(render);

    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    const target = targetIdx === 7 ? section7Target(performance.now()) : shapes[targetIdx];
    // slower, smoother morph into the team streams and the contact ring;
    // the rocket launch tracks its fast-rising target much more tightly
    const kRate = (targetIdx === 7 && mode === 'launch') ? 4.5
      : (targetIdx >= 4 && targetIdx !== 5) ? 2.1 : 3.4;
    const k = 1 - Math.exp(-dt * kRate);

    // electrons orbit the nucleus slowly, and each blob swirls around itself
    if (targetIdx === 0 && atomElectrons) {
      const { start, ri, phi, zi } = atomElectrons;
      for (let i = start; i < N; i++) {
        const ring = (i - start) % 3;
        const j = i - start;
        const a = ring * 2.1 + 0.7 + t * (0.12 + ring * 0.04);
        const e = electronPos(ring, a);
        const spin = phi[j] + t * (0.5 + ring * 0.12);
        target[i * 3] = e[0] + ri[j] * Math.cos(spin);
        target[i * 3 + 1] = e[1] + ri[j] * Math.sin(spin);
        target[i * 3 + 2] = e[2] + zi[j];
      }
    }

    for (let i = 0; i < N * 3; i++) base[i] += (target[i] - base[i]) * k;

    // the car and vault need crisp detail: smaller dots, calmer wobble
    // (the rocket launch keeps the fat dots so the smoke stays soft)
    const fine = (targetIdx === 7 && mode !== 'launch') || targetIdx === 8;
    const sizeTarget = fine ? (isMobile ? 0.06 : 0.045) : (isMobile ? 0.085 : 0.065);
    mat.size += (sizeTarget - mat.size) * (1 - Math.exp(-dt * 2.5));
    const amp = fine ? 0.009 : 0.024;
    for (let i = 0; i < N; i++) {
      const ph = phases[i];
      draw[i * 3] = base[i * 3] + Math.sin(t * 1.1 + ph) * amp;
      draw[i * 3 + 1] = base[i * 3 + 1] + Math.cos(t * 0.9 + ph * 1.3) * amp;
      draw[i * 3 + 2] = base[i * 3 + 2] + Math.sin(t * 1.3 + ph * 0.7) * amp;
    }
    geo.attributes.position.needsUpdate = true;

    spinMomentum *= Math.exp(-dt * 2.2);
    // the contact ring, team people and margin shapes stay nearly flat
    const rotAmp = (targetIdx >= 4 && targetIdx !== 5) ? 0.2 : 1;
    group.rotation.y += ((Math.sin(t * 0.1) * 0.16 + mx * 0.3) * rotAmp + spinMomentum - group.rotation.y) * (1 - Math.exp(-dt * 2.5));
    group.rotation.y += spinMomentum * dt * 18;
    group.rotation.x += (my * 0.14 * rotAmp - group.rotation.x) * (1 - Math.exp(-dt * 2.5));

    scale += (1 - scale) * (1 - Math.exp(-dt * 3.0));
    const s = scale * (isMobile ? 0.8 : 1);
    group.scale.set(s, s, s);

    const rtl = document.documentElement.dir === 'rtl';
    // services & reviews swap sides; team, contact & margin shapes keep their baked-in offset
    const flip = (targetIdx === 1 || targetIdx === 5) ? -1 : 1;
    const centered = targetIdx >= 4 && targetIdx !== 5;
    const tx = (isMobile || centered) ? 0 : (rtl ? -2.6 : 2.6) * flip;
    group.position.x += (tx - group.position.x) * (1 - Math.exp(-dt * 2.0));

    currentIdx = targetIdx;
    renderer.render(scene, camera);
  }

  render();
}
