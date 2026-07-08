import { Renderer, Program, Mesh, Geometry, Texture } from "./ogl.esm.js";

const PHRASE = "BUTTON CARD HEADER TOKENS FIGMA STORYBOOK SKILLS RULES HRDS.";
const DOT_IDX = PHRASE.indexOf(".");
const LETTER_INDICES = Array.from(PHRASE)
  .map((_, i) => i)
  .filter((i) => i !== DOT_IDX);
const ATLAS_COLS = 8;
const ATLAS_ROWS = Math.ceil(PHRASE.length / ATLAS_COLS);
const BAND_CENTER = 0.65 * Math.PI;
const BG_COLOR = "#232323";
const HOLD_LABELS = {
  idle: "Click & hold",
  holding: "Keep holding",
  charged: "Release",
};

const BASE_QUAD_POSITION = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5]);
const BASE_QUAD_UV = new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1]);

function hexToRgb01(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function smoothstep01(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function smoothstepInverse(y) {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) * 0.5;
    if (smoothstep01(0, 1, mid) < y) lo = mid;
    else hi = mid;
  }
  return (lo + hi) * 0.5;
}

function wrapAngle(a) {
  a %= Math.PI * 2;
  if (a > Math.PI) a -= Math.PI * 2;
  if (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function monoFont(sizePx, weight = 500) {
  return `${weight} ${sizePx}px "IBM Plex Mono", ui-monospace, monospace`;
}

function buildAtlasCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 64 * ATLAS_ROWS;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return canvas;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = monoFont(57.6);

  for (let i = 0; i < PHRASE.length; i++) {
    const x = (i % ATLAS_COLS + 0.5) * 64;
    const y = (Math.floor(i / ATLAS_COLS) + 0.55) * 64;
    const ch = PHRASE[i];
    if (ch === ".") {
      ctx.beginPath();
      ctx.arc(x, y, 5.76, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }
    ctx.fillText(ch ?? "", x, y);
  }

  return canvas;
}

function buildRingConfigs() {
  const rings = [];
  for (let t = 0; t < 30; t++) {
    const a = t / 29;
    const radius = 0.06 + 1.39 * a;
    const speed = (t % 2 === 0 ? 1 : -1) * (0.006 + (1 - a) * 0.029);
    const letterSizePx = 14 + 16 * a;
    const charsCount = Math.max(8, Math.floor((2 * Math.PI * radius) / (letterSizePx * 0.001851851851851852)));
    const bandCenter =
      Math.random() < 0.15 ? Math.random() * Math.PI * 2 : 0.25 + (Math.random() - 0.5) * BAND_CENTER;
    const bandHalfWidth = Math.min(0.98, (Math.random() < 0.1 ? 0.05 + 0.15 * Math.random() : 0.25 + 0.35 * a + 0.3 * Math.random()) * Math.PI);
    rings.push({
      radius,
      charsCount,
      speed,
      letterSizePx,
      bandCenter,
      bandHalfWidth,
      bandSoftness: Math.PI * (0.07 + 0.13 * Math.random()),
    });
  }
  return rings;
}

function buildPhraseBand(charsCount) {
  const isLetter = new Uint8Array(charsCount);
  const letterIdx = new Uint16Array(charsCount);
  let o = 0;
  while (o < charsCount) {
    for (let n = 0; n < LETTER_INDICES.length && o < charsCount; n++) {
      isLetter[o] = 1;
      letterIdx[o] = LETTER_INDICES[n] ?? 0;
      o++;
    }
    const gap = 1 + Math.floor(Math.random() * 3);
    for (let t = 0; t < gap && o < charsCount; t++) o++;
  }
  return { isLetter, letterIdx };
}

function buildInstances(ringConfigs) {
  let total = 0;
  for (const ring of ringConfigs) total += ring.charsCount;

  const aRadius = new Float32Array(total);
  const aTheta0 = new Float32Array(total);
  const aSpeed = new Float32Array(total);
  const aSize = new Float32Array(total);
  const aCharIdx = new Float32Array(total);
  const aRingIdx = new Float32Array(total);

  let s = 0;
  for (let t = 0; t < ringConfigs.length; t++) {
    const ring = ringConfigs[t];
    const { isLetter, letterIdx } = buildPhraseBand(ring.charsCount);
    const startTheta = Math.random() * Math.PI * 2;
    const step = (Math.PI * 2) / ring.charsCount;
    const outer = ring.bandHalfWidth + ring.bandSoftness;
    const inner = Math.max(0, ring.bandHalfWidth - ring.bandSoftness);

    for (let e = 0; e < ring.charsCount; e++) {
      const jitter = (Math.random() - 0.5) * step * 0;
      const theta = startTheta + e * step + jitter;
      const dist = Math.abs(wrapAngle(theta - ring.bandCenter));
      const band = smoothstep01(outer, inner, dist);
      const isGlyph = isLetter[e] === 1 && (band > 0.7 || (!(band < 0.3) && Math.random() < band));

      aRadius[s] = ring.radius;
      aTheta0[s] = theta;
      aSpeed[s] = ring.speed;
      aRingIdx[s] = t;

      if (isGlyph) {
        aCharIdx[s] = letterIdx[e] ?? 0;
        aSize[s] = ring.letterSizePx * (0.85 + 0.15 * band);
      } else {
        aCharIdx[s] = DOT_IDX;
        aSize[s] = 5;
      }
      s++;
    }
  }

  return { aRadius, aTheta0, aSpeed, aSize, aCharIdx, aRingIdx, total };
}

function buildArrivalTimes(ringConfigs) {
  const times = Array(30).fill(0);
  for (let e = 0; e < 30; e++) {
    const ring = ringConfigs[e];
    if (!ring) continue;
    const a = Math.max(0, ring.radius - 0.425);
    times[e] = 1.8 * smoothstepInverse(Math.min(1, a / 1.6));
  }
  return times;
}

const VERTEX_SHADER = `#version 300 es
precision highp float;

in vec2 position;
in vec2 uv;
in float aRadius;
in float aTheta0;
in float aSpeed;
in float aSize;
in float aCharIdx;
in float aRingIdx;

uniform float uTime;
uniform vec2 uFitScale;
uniform vec2 uCenter;
uniform vec2 uAtlasGrid;
uniform float uPxToDesign;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform float uMouseRadius;
uniform float uRingCharge[30];
uniform float uRingGather[30];
uniform float uRippleStarts[16];
uniform float uRingOffsets[30];
uniform float uRingArrivalTime[30];

const float RIPPLE_DURATION_S = 1.8000;
const float RIPPLE_MAX_RADIUS_S = 1.6000;
const float RIPPLE_WIDTH_S = 0.8500;
const float RIPPLE_RADIAL_PUSH_S = 0.0450;
const float RIPPLE_SCALE_BOOST_S = 0.5000;
const float DOT_SIZE_PX_S = 5.0000;
const float ENTRANCE_FADE_S = 0.5000;
const float HOLD_GATHER_SCALE_S = 0.1200;
const float HOLD_SHAKE_AMPLITUDE_S = 0.0020;
const float HOLD_SHAKE_FRACTION_S = 0.1800;
const float HOLD_GLITCH_RATE_S = 9.0000;
const float HOLD_GLITCH_FRACTION_S = 0.1500;

out vec2 vUv;
out float vRingT;
out float vAlpha;

void main() {
  float rippleInfluence = 0.0;
  for (int r = 0; r < 16; r++) {
    float start = uRippleStarts[r];
    if (start < 0.0) continue;
    float elapsed = uTime - start;
    if (elapsed < 0.0 || elapsed >= RIPPLE_DURATION_S) continue;
    float t = elapsed / RIPPLE_DURATION_S;
    float waveRadius = smoothstep(0.0, 1.0, t) * RIPPLE_MAX_RADIUS_S;
    float bell = 1.0 - smoothstep(0.0, RIPPLE_WIDTH_S * 0.5, abs(aRadius - waveRadius));
    float lifeFade = smoothstep(0.0, 0.22, t) * (1.0 - smoothstep(0.78, 1.0, t));
    rippleInfluence = max(rippleInfluence, bell * lifeFade);
  }

  float holdCharge = uRingCharge[int(aRingIdx)];
  float gatherAmt = uRingGather[int(aRingIdx)];
  float effectiveRadius = aRadius * (1.0 - gatherAmt * HOLD_GATHER_SCALE_S) + rippleInfluence * RIPPLE_RADIAL_PUSH_S;

  float theta = aTheta0 + uTime * aSpeed + uRingOffsets[int(aRingIdx)];
  float c = cos(theta);
  float s = sin(theta);
  vec2 ringCenter = vec2(c, s) * effectiveRadius;

  float mouseDist = length(ringCenter - uMouse);
  float hoverInfluence = (1.0 - smoothstep(0.0, uMouseRadius, mouseDist)) * uMouseInfluence;

  float strength = max(hoverInfluence * 2.5, rippleInfluence);
  float seed = aTheta0 * 7.13 + aRadius * 13.97;
  float threshold = fract(sin(seed * 12.9898) * 43758.5453);
  float isDot = step(threshold, strength);

  float glitchTick = floor(uTime * HOLD_GLITCH_RATE_S);
  float glitchNoise = fract(sin(seed * 91.7 + glitchTick * 7.31) * 43758.5453);
  isDot = max(isDot, step(glitchNoise, holdCharge * HOLD_GLITCH_FRACTION_S));
  float charIdxNow = mix(aCharIdx, ${DOT_IDX}.0, isDot);
  float sizePx = mix(aSize, DOT_SIZE_PX_S, isDot) * (1.0 + rippleInfluence * RIPPLE_SCALE_BOOST_S);

  float designSize = sizePx * uPxToDesign;
  vec2 rotated = vec2(
    -position.x * s - position.y * c,
    position.x * c - position.y * s
  ) * designSize;

  float shakeSeed = fract(sin(aTheta0 * 91.17 + aRadius * 47.91) * 24634.6345);
  float shakes = step(shakeSeed, HOLD_SHAKE_FRACTION_S);
  vec2 tremor = vec2(
    sin(uTime * (38.0 + shakeSeed * 14.0) + shakeSeed * 271.0),
    cos(uTime * (34.0 + shakeSeed * 17.0) + shakeSeed * 113.0)
  ) * (holdCharge * shakes * HOLD_SHAKE_AMPLITUDE_S);

  vec2 worldPos = (ringCenter + rotated + tremor) * uFitScale + uCenter;

  float col = mod(charIdxNow, uAtlasGrid.x);
  float row = floor(charIdxNow / uAtlasGrid.x);
  vUv = vec2((col + uv.x) / uAtlasGrid.x, (row + (1.0 - uv.y)) / uAtlasGrid.y);

  vRingT = clamp(aRadius, 0.0, 1.2);

  float arrival = uRingArrivalTime[int(aRingIdx)];
  vAlpha = clamp((uTime - arrival) / ENTRANCE_FADE_S, 0.0, 1.0);

  gl_Position = vec4(worldPos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision mediump float;

uniform sampler2D tAtlas;

in vec2 vUv;
in float vRingT;
in float vAlpha;

out vec4 fragColor;

void main() {
  vec4 sampled = texture(tAtlas, vUv);
  float dim = mix(0.85, 1.0, smoothstep(0.0, 0.85, vRingT));
  fragColor = vec4(vec3(dim), sampled.a * vAlpha);
}
`;

function isTouchDevice() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

function setupCursorTracking({ container, signal, labelEl, onPointerMove, onPointerEnter, onPointerLeave, onPointerDown, onPointerUp }) {
  const local = (event) => {
    const rect = container.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const moveLabel = (x, y) => {
    if (!labelEl || isTouchDevice()) return;
    labelEl.style.left = `${x}px`;
    labelEl.style.top = `${y}px`;
  };

  const isInside = (x, y) => x >= 0 && y >= 0 && x <= container.clientWidth && y <= container.clientHeight;

  container.addEventListener(
    "pointermove",
    (event) => {
      const { x, y } = local(event);
      moveLabel(x, y);
      onPointerMove?.(x, y, isInside(x, y));
    },
    { passive: true, signal }
  );

  container.addEventListener(
    "pointerenter",
    (event) => {
      const { x, y } = local(event);
      moveLabel(x, y);
      onPointerEnter?.(x, y);
      if (labelEl) labelEl.classList.add("is-visible");
    },
    { signal }
  );

  container.addEventListener(
    "pointerleave",
    () => {
      onPointerLeave?.();
      if (labelEl) labelEl.classList.remove("is-visible");
    },
    { signal }
  );

  container.addEventListener("pointercancel", () => onPointerLeave?.(), { signal });

  container.addEventListener(
    "pointerdown",
    (event) => {
      if (event.button !== 0) return;
      container.setPointerCapture(event.pointerId);
      const { x, y } = local(event);
      moveLabel(x, y);
      onPointerDown?.(x, y);
    },
    { signal }
  );

  const endPointer = (event) => {
    const wasCaptured = container.hasPointerCapture(event.pointerId);
    if (wasCaptured) container.releasePointerCapture(event.pointerId);

    const { x, y } = local(event);
    onPointerUp?.(x, y, isInside(x, y));
  };

  container.addEventListener("pointerup", endPointer, { signal });
  window.addEventListener("pointerup", endPointer, { signal });
}

export function initSpiralScene(container) {
  if (!container) return () => {};

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const labelEl = container.querySelector("[data-cursor-label]");
  let holdState = "idle";

  const setHoldState = (state) => {
    holdState = state;
    if (!labelEl) return;
    const touch = isTouchDevice();
    labelEl.textContent = touch && state === "idle" ? "Tap & hold" : HOLD_LABELS[state];
  };

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const renderer = new Renderer({
    webgl: 2,
    alpha: false,
    antialias: true,
    depth: false,
    stencil: false,
    dpr,
    powerPreference: "high-performance",
  });

  const gl = renderer.gl;
  const [r, g, b] = hexToRgb01(BG_COLOR);
  gl.clearColor(r, g, b, 1);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  const canvas = gl.canvas;
  canvas.className = "spiral-canvas";
  container.querySelectorAll("canvas").forEach((node) => node.remove());
  container.prepend(canvas);

  const controller = new AbortController();

  let atlasImage = buildAtlasCanvas();
  const atlasTexture = new Texture(gl, {
    image: atlasImage,
    generateMipmaps: true,
    premultiplyAlpha: false,
    flipY: false,
  });

  const ringConfigs = buildRingConfigs();
  const arrivalTimes = buildArrivalTimes(ringConfigs);
  const instances = buildInstances(ringConfigs);

  const geometry = new Geometry(gl, {
    position: { size: 2, data: BASE_QUAD_POSITION },
    uv: { size: 2, data: BASE_QUAD_UV },
    aRadius: { instanced: 1, size: 1, data: instances.aRadius },
    aTheta0: { instanced: 1, size: 1, data: instances.aTheta0 },
    aSpeed: { instanced: 1, size: 1, data: instances.aSpeed },
    aSize: { instanced: 1, size: 1, data: instances.aSize },
    aCharIdx: { instanced: 1, size: 1, data: instances.aCharIdx },
    aRingIdx: { instanced: 1, size: 1, data: instances.aRingIdx },
  });
  geometry.setInstancedCount(instances.total);

  const program = new Program(gl, {
    vertex: VERTEX_SHADER,
    fragment: FRAGMENT_SHADER,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    cullFace: false,
    uniforms: {
      uTime: { value: 0 },
      uFitScale: { value: new Float32Array([1, 1]) },
      uCenter: { value: new Float32Array([0, 0]) },
      uAtlasGrid: { value: new Float32Array([ATLAS_COLS, ATLAS_ROWS]) },
      uPxToDesign: { value: 0.001851851851851852 },
      uMouse: { value: new Float32Array([999, 999]) },
      uMouseInfluence: { value: 0 },
      uMouseRadius: { value: 0.35 },
      uRingCharge: { value: Array.from({ length: 30 }, () => 0) },
      uRingGather: { value: Array.from({ length: 30 }, () => 0) },
      uRippleStarts: { value: Array.from({ length: 16 }, () => -1) },
      uRingOffsets: { value: Array.from({ length: 30 }, () => 0) },
      uRingArrivalTime: { value: [...arrivalTimes] },
      tAtlas: { value: atlasTexture },
    },
  });

  const mesh = new Mesh(gl, { geometry, program, frustumCulled: false });

  if (!program.uniformLocations || !program.attributeLocations) {
    console.error("[Spiral] shader failed to compile/link");
    return () => {};
  }

  const { signal } = controller;

  const renderFrame = () => {
    program.uniforms.uTime.value = simTime;
    renderer.render({ scene: mesh, update: false, sort: false, frustumCull: false });
  };

  document.fonts.ready.then(() => {
    if (controller.signal.aborted) return;
    atlasImage = buildAtlasCanvas();
    atlasTexture.image = atlasImage;
    atlasTexture.needsUpdate = true;
    renderFrame();
  });

  let width = 1;
  let height = 1;
  let rafId = 0;
  let inView = true;
  let pageVisible = !document.hidden;
  let motionEnabled = !reduceMotion;
  let lastFrame = performance.now();
  let simTime = reduceMotion ? 2.3 : 0;
  const ripples = [];
  const ringCharge = new Float32Array(30);
  const ringGather = new Float32Array(30);
  const ringOffsetsTarget = new Float32Array(30);
  const ringOffsetsSmooth = new Float32Array(30);
  const ringAngleDrift = new Float32Array(30);
  const mouseTarget = new Float32Array([999, 999]);
  let mouseInfluence = 0;
  let isHovering = false;
  let isPointerDown = false;
  let isCharged = false;
  let holdProgress = 0;
  let holdDepth = 0;
  let scrollVelocity = 0;
  let scrollVelocitySmooth = 0;
  let lastRippleStart = -1;

  const resize = () => {
    const rect = container.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    renderer.setSize(Math.floor(width), Math.floor(height));

    const aspect = width / height;
    const fit = program.uniforms.uFitScale.value;
    if (aspect >= 1) {
      fit[0] = 1;
      fit[1] = aspect;
    } else {
      fit[0] = 1 / aspect;
      fit[1] = 1;
    }
  };

  const toWorld = (x, y) => {
    const center = program.uniforms.uCenter.value;
    const fit = program.uniforms.uFitScale.value;
    const w = Math.max(1, width);
    const h = Math.max(1, height);
    return [((x / w) * 2 - 1 - center[0]) / fit[0], (-((y / h) * 2 - 1) - center[1]) / fit[1]];
  };


  const tick = (now) => {
    const dt = Math.min(0.05, (now - lastFrame) * 0.001);
    lastFrame = now;

    if (motionEnabled) simTime += dt;

    while (ripples[0] && simTime - ripples[0].start >= 1.8) ripples.shift();

    const rippleStarts = program.uniforms.uRippleStarts.value;
    for (let i = 0; i < 16; i++) {
      rippleStarts[i] = ripples[i] ? ripples[i].start : -1;
    }

    const mouse = program.uniforms.uMouse.value;
    const influenceEase = 1 - Math.exp(-6 * dt);
    program.uniforms.uMouseInfluence.value += (mouseInfluence - program.uniforms.uMouseInfluence.value) * influenceEase;

    const mouseEase = 1 - Math.exp(-14 * dt);
    mouse[0] += (mouseTarget[0] - mouse[0]) * mouseEase;
    mouse[1] += (mouseTarget[1] - mouse[1]) * mouseEase;

    if (isPointerDown) {
      holdProgress = Math.min(1, holdProgress + dt / 0.9);
      holdDepth = 1 - (1 - holdDepth) * Math.exp(-dt / 4);
      if (!isCharged && holdProgress >= 1) {
        isCharged = true;
        setHoldState("charged");
      }
    } else {
      holdProgress *= Math.exp(-10 * dt);
      holdDepth *= Math.exp(-10 * dt);
    }

    const releaseDecay = Math.exp(-10 * dt);
    const rippleAge = simTime - lastRippleStart;
    const releaseWave = lastRippleStart >= 0 && rippleAge < 1.8;
    const releaseRadius = releaseWave ? 1.6 * smoothstep01(0, 1, rippleAge / 1.8) + 0.425 : Infinity;

    const charges = program.uniforms.uRingCharge.value;
    const gathers = program.uniforms.uRingGather.value;

    for (let i = 0; i < 30; i++) {
      const ring = ringConfigs[i];
      if (!ring) continue;

      if (isPointerDown) {
        const snap = 1 - Math.exp(-14 * dt);
        ringCharge[i] += (holdProgress - ringCharge[i]) * snap;
        ringGather[i] += (smoothstep01(0, 1, holdProgress) * holdDepth - ringGather[i]) * snap;
      } else if (!releaseWave || releaseRadius >= ring.radius) {
        ringCharge[i] *= releaseDecay;
        ringGather[i] *= releaseDecay;
      }

      charges[i] = ringCharge[i];
      gathers[i] = ringGather[i];
      ringAngleDrift[i] -= smoothstep01(0, 1, ringCharge[i]) * ring.speed * dt;
    }

    scrollVelocity = window.__lenisVelocity ?? 0;
    scrollVelocity *= Math.exp(-5 * dt);
    const scrollMag = Math.min(40, Math.abs(scrollVelocity));
    scrollVelocitySmooth += (scrollMag - scrollVelocitySmooth) * (1 - Math.exp(-4 * dt));

    const offsetEase = 1 - Math.exp(-3 * dt);
    const offsets = program.uniforms.uRingOffsets.value;
    for (let i = 0; i < 30; i++) {
      const ring = ringConfigs[i];
      if (!ring) continue;

      let ripplePush = 0;
      for (const ripple of ripples) {
        const age = simTime - ripple.start;
        if (age < 0 || age >= 1.8) continue;
        const t = age / 1.8;
        const wave = 1.6 * smoothstep01(0, 1, t);
        const bell = 1 - smoothstep01(0, 0.425, Math.abs(ring.radius - wave));
        const life = smoothstep01(0, 0.22, t) * (1 - smoothstep01(0.78, 1, t));
        const strength = bell * life * ripple.strength;
        if (strength > ripplePush) ripplePush = strength;
      }

      ringOffsetsTarget[i] += (0.55 * ripplePush * (Math.sign(ring.speed) || 1) + ring.speed * scrollVelocitySmooth) * dt;
      ringOffsetsSmooth[i] += (ringOffsetsTarget[i] - ringOffsetsSmooth[i]) * offsetEase;
      offsets[i] = ringOffsetsSmooth[i] + ringAngleDrift[i];
    }

    renderFrame();
    rafId = inView && pageVisible && motionEnabled ? requestAnimationFrame(tick) : 0;
  };

  const startLoop = () => {
    if (rafId || !inView || !pageVisible || !motionEnabled) return;
    lastFrame = performance.now();
    rafId = requestAnimationFrame(tick);
  };

  const stopLoop = () => {
    if (!rafId) return;
    cancelAnimationFrame(rafId);
    rafId = 0;
  };

  const syncLoop = () => {
    if (inView && pageVisible && motionEnabled) startLoop();
    else {
      stopLoop();
      renderFrame();
    }
  };

  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  window.addEventListener("scroll", resize, { passive: true, signal });

  const intersection = new IntersectionObserver(
    ([entry]) => {
      inView = entry?.isIntersecting ?? false;
      syncLoop();
    },
    { threshold: 0 }
  );
  intersection.observe(container);

  document.addEventListener(
    "visibilitychange",
    () => {
      pageVisible = !document.hidden;
      syncLoop();
    },
    { signal }
  );

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const onMotionChange = () => {
    motionEnabled = !motionQuery.matches;
    if (!motionEnabled) simTime = 2.3;
    syncLoop();
  };
  motionQuery.addEventListener("change", onMotionChange, { signal });
  onMotionChange();

  setupCursorTracking({
    container,
    signal,
    labelEl,
    onPointerMove: (x, y) => {
      const [wx, wy] = toWorld(x, y);
      mouseTarget[0] = wx;
      mouseTarget[1] = wy;
    },
    onPointerEnter: (x, y) => {
      isHovering = true;
      const [wx, wy] = toWorld(x, y);
      const mouse = program.uniforms.uMouse.value;
      mouseTarget[0] = wx;
      mouseTarget[1] = wy;
      mouse[0] = wx;
      mouse[1] = wy;
      mouseInfluence = 1;
    },
    onPointerLeave: () => {
      if (isPointerDown) return;
      isHovering = false;
      mouseInfluence = 0;
    },
    onPointerDown: () => {
      isPointerDown = true;
      isCharged = false;
      holdProgress = 0;
      container.classList.add("is-holding");
      setHoldState("holding");
    },
    onPointerUp: (_x, _y, inside) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      container.classList.remove("is-holding");

      if (isCharged) {
        lastRippleStart = simTime;
        ripples.push({ start: simTime, strength: 0.7 + 0.6 * holdDepth });
        while (ripples.length > 16) ripples.shift();
      }

      isCharged = false;
      holdProgress = 0;
      holdDepth = 0;
      isHovering = inside;
      mouseInfluence = inside ? 1 : 0;
      setHoldState("idle");

      if (labelEl) {
        labelEl.classList.toggle("is-visible", inside);
      }
    },
  });

  if (motionEnabled) {
    ripples.push({ start: 0, strength: 1 });
  }

  renderFrame();
  syncLoop();

  return () => {
    stopLoop();
    controller.abort();
    intersection.disconnect();
    resizeObserver.disconnect();
    canvas.remove();
  };
}

const root = document.querySelector("[data-spiral-scene]");
if (root) {
  try {
    initSpiralScene(root);
  } catch (error) {
    console.warn("Spiral scene unavailable:", error);
  }
}
