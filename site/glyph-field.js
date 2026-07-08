import { Renderer, Program, Mesh, Geometry, Texture } from "./ogl.esm.js";

const BG_COLOR = "#000000";
const BASE_QUAD_POSITION = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5]);
const BASE_QUAD_UV = new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1]);

function hexToRgb01(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function monoFont(sizePx, weight = 500) {
  return `${weight} ${sizePx}px "IBM Plex Mono", ui-monospace, monospace`;
}

function buildAtlas(atlas, atlasCols, cellSize) {
  const atlasRows = Math.ceil(atlas.length / atlasCols);
  const canvas = document.createElement("canvas");
  canvas.width = atlasCols * cellSize;
  canvas.height = 64 * atlasRows;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = monoFont(47.36, 500);
  for (let i = 0; i < atlas.length; i++) {
    const x = (i % atlasCols + 0.5) * cellSize;
    const y = (Math.floor(i / atlasCols) + 0.58) * 64;
    const ch = atlas[i];
    if (ch === " ") continue;
    ctx.fillText(ch, x, y);
  }
  return canvas;
}

function buildSourceImage(cols, rows, brightness, glyphs) {
  const canvas = document.createElement("canvas");
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return canvas;
  const image = ctx.createImageData(cols, rows);
  for (let i = 0; i < cols * rows; i++) {
    const v = brightness[i] ?? 0;
    const g = glyphs?.[i] ?? 0;
    image.data[i * 4] = v;
    image.data[i * 4 + 1] = g;
    image.data[i * 4 + 2] = 0;
    image.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  return canvas;
}

function buildSourceTexture(gl, cols, rows, brightness, glyphs) {
  return new Texture(gl, {
    image: buildSourceImage(cols, rows, brightness, glyphs),
    generateMipmaps: false,
    premultiplyAlpha: false,
    flipY: false,
    minFilter: gl.NEAREST,
    magFilter: gl.NEAREST,
    wrapS: gl.CLAMP_TO_EDGE,
    wrapT: gl.CLAMP_TO_EDGE,
  });
}

function buildVertexShader(phraseLen, glyphAspect) {
  return `#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 position;
in vec2 uv;
uniform vec2 uGridSize;
uniform vec2 uAtlasGrid;
uniform float uTime;
uniform float uPhraseChars[${phraseLen}];
uniform vec2 uModelStart;
uniform vec2 uModelSize;
uniform vec2 uModelUVScale;
uniform vec2 uModelUVOffset;
uniform float uBackgroundBrightness;
uniform float uBackgroundTwinkle;
uniform sampler2D tSourceBrightness;
uniform vec2 uEntranceCenter;
uniform float uEntranceStart;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform float uMouseRadius;
uniform float uRippleMaxRadius;
uniform float uRippleWidth;
uniform float uRippleStarts[16];
uniform vec2 uRippleCenters[16];
uniform float uActiveRippleCount;
const float RIPPLE_DURATION_S = 1.8000;
const float ENTRANCE_FADE_S = 0.5000;
const float GLYPH_ASPECT_S = ${glyphAspect.toFixed(4)};
const float GENTLE_FLIP_OSC_HZ_S = 0.1800;
const float GENTLE_FLIP_THRESHOLD_S = 0.9850;
const float GENTLE_FLIP_SCRAMBLE_HZ_S = 2.5000;
out vec2 vUv;
out float vOpacity;
float screenDist(vec2 cellOffset) { cellOffset.y /= GLYPH_ASPECT_S; return length(cellOffset); }
float cellHash(vec2 cell) { return fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453); }
float hash1D(float x) { return fract(sin(x * 12.9898) * 43758.5453); }
float pickRandomGlyph(float seed, float numGlyphs) { return 1.0 + floor(hash1D(seed) * (numGlyphs - 1.0)); }
void main() {
  int cols = int(uGridSize.x);
  vec2 cell = vec2(float(gl_InstanceID % cols), float(gl_InstanceID / cols));
  vec2 modelOffset = cell - uModelStart;
  bool inModel = modelOffset.x >= 0.0 && modelOffset.x < uModelSize.x && modelOffset.y >= 0.0 && modelOffset.y < uModelSize.y;
  int activeRippleCount = int(uActiveRippleCount);
  float rippleInfluence = 0.0;
  for (int r = 0; r < 16; r++) {
    if (r >= activeRippleCount) break;
    float start = uRippleStarts[r];
    float elapsed = uTime - start;
    if (elapsed < 0.0 || elapsed >= RIPPLE_DURATION_S) continue;
    float t = elapsed / RIPPLE_DURATION_S;
    float waveRadius = smoothstep(0.0, 1.0, t) * uRippleMaxRadius;
    float distToCenter = screenDist(cell - uRippleCenters[r]);
    float bell = 1.0 - smoothstep(0.0, uRippleWidth * 0.5, abs(distToCenter - waveRadius));
    float lifeFade = smoothstep(0.0, 0.22, t) * (1.0 - smoothstep(0.78, 1.0, t));
    rippleInfluence = max(rippleInfluence, bell * lifeFade);
  }
  float mouseDist = screenDist(cell - uMouse);
  float hoverInfluence = (1.0 - smoothstep(0.0, uMouseRadius, mouseDist)) * uMouseInfluence;
  float threshold = cellHash(cell);
  float dimMask = step(threshold, hoverInfluence * 2.5) * step(0.001, hoverInfluence);
  float boostMask = step(threshold, rippleInfluence * 0.5) * step(0.001, rippleInfluence);
  float rowPhraseOffset = floor(hash1D(cell.y + 0.5) * float(${phraseLen}));
  float baseCharIdx = uPhraseChars[int(mod(cell.x + rowPhraseOffset, float(${phraseLen})))];
  float numAtlasGlyphs = uAtlasGrid.x * uAtlasGrid.y;
  float flipPhase = uTime * GENTLE_FLIP_OSC_HZ_S + threshold * 6.2831853;
  float flipActive = step(GENTLE_FLIP_THRESHOLD_S, sin(flipPhase) * 0.5 + 0.5) * max(float(inModel), uBackgroundTwinkle);
  float flipFrame = floor(uTime * GENTLE_FLIP_SCRAMBLE_HZ_S);
  float flipChar = pickRandomGlyph(threshold * 17.13 + flipFrame * 1.7, numAtlasGlyphs);
  float charIdx = mix(baseCharIdx, flipChar, flipActive);
  float scrambleFrame = floor(uTime * 24.0);
  float scrambleChar = pickRandomGlyph(threshold * 7.13 + scrambleFrame, numAtlasGlyphs);
  charIdx = mix(charIdx, scrambleChar, boostMask);
  float brightness = uBackgroundBrightness;
  if (inModel) {
    vec2 modelUV = (modelOffset + 0.5) / uModelSize;
    modelUV = modelUV * uModelUVScale + uModelUVOffset;
    vec4 modelSample = texture(tSourceBrightness, modelUV);
    brightness = max(uBackgroundBrightness, modelSample.r);
    if (modelSample.g > 0.001) {
      charIdx = floor(modelSample.g * 255.0 + 0.5);
      float modelFlip = step(GENTLE_FLIP_THRESHOLD_S, sin(flipPhase) * 0.5 + 0.5);
      charIdx = mix(charIdx, flipChar, modelFlip * (1.0 - boostMask));
    }
  }
  charIdx = clamp(charIdx, 0.0, numAtlasGlyphs - 1.0);
  float atlasCol = mod(charIdx, uAtlasGrid.x);
  float atlasRow = floor(charIdx / uAtlasGrid.x);
  vUv = vec2((atlasCol + uv.x) / uAtlasGrid.x, (atlasRow + (1.0 - uv.y)) / uAtlasGrid.y);
  float baseOpacity = pow(brightness, 0.6);
  float effectiveOpacity = baseOpacity * (1.0 - hoverInfluence);
  effectiveOpacity = mix(effectiveOpacity, 0.0, dimMask);
  effectiveOpacity = mix(effectiveOpacity, 1.0, boostMask);
  float entranceAlpha = 1.0;
  if (uEntranceStart > -1e8) {
    float arrivalDist = screenDist(cell - uEntranceCenter);
    float arrivalFrac = clamp((arrivalDist - uRippleWidth * 0.5) / uRippleMaxRadius, 0.0, 1.0);
    float invSmoothArg = clamp(1.0 - 2.0 * arrivalFrac, -1.0, 1.0);
    float arrival = (0.5 - sin(asin(invSmoothArg) / 3.0)) * RIPPLE_DURATION_S;
    entranceAlpha = clamp((uTime - uEntranceStart - arrival) / ENTRANCE_FADE_S, 0.0, 1.0);
  }
  vOpacity = effectiveOpacity * entranceAlpha;
  vec2 cellSize = 2.0 / uGridSize;
  vec2 cellCenter = -1.0 + (cell + 0.5) * cellSize;
  cellCenter.y = -cellCenter.y;
  gl_Position = vec4(cellCenter + position * cellSize, 0.0, 1.0);
}`;
}

const FRAGMENT_SHADER = `#version 300 es
precision mediump float;
uniform sampler2D tAtlas;
uniform vec3 uColor;
in vec2 vUv;
in float vOpacity;
out vec4 fragColor;
void main() {
  vec4 sampled = texture(tAtlas, vUv);
  fragColor = vec4(uColor, sampled.a * vOpacity);
}`;

function setupPointer({ container, signal, labelEl, onMove, onEnter, onLeave, onClick }) {
  const local = (event) => {
    const rect = container.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  const moveLabel = (x, y) => {
    if (!labelEl) return;
    labelEl.style.left = `${x}px`;
    labelEl.style.top = `${y}px`;
  };
  container.addEventListener("pointermove", (e) => { const { x, y } = local(e); moveLabel(x, y); onMove?.(x, y); }, { passive: true, signal });
  container.addEventListener("pointerenter", (e) => { const { x, y } = local(e); moveLabel(x, y); onEnter?.(x, y); labelEl?.classList.add("is-visible"); }, { signal });
  container.addEventListener("pointerleave", () => { onLeave?.(); labelEl?.classList.remove("is-visible"); }, { signal });
  container.addEventListener("click", (e) => { const { x, y } = local(e); onClick?.(x, y); }, { signal });
}

export async function initGlyphField(container) {
  if (!container) return () => {};
  const data = await fetch("./glyph-data.json").then((r) => r.json());
  const {
    modelCols,
    modelRows,
    sourceAspect,
    glyphAspect,
    atlas,
    phraseAtlasIndices,
    cellBrightness,
  } = data;
  const phraseLen = phraseAtlasIndices.length;
  const atlasCols = 4;
  const atlasRows = Math.ceil(atlas.length / atlasCols);
  const cellSize = Math.max(8, Math.round(64 * glyphAspect));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const labelEl = container.querySelector("[data-cursor-label]");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const renderer = new Renderer({ webgl: 2, alpha: false, antialias: false, depth: false, stencil: false, dpr, powerPreference: "high-performance", preserveDrawingBuffer: true });
  const gl = renderer.gl;
  const [r, g, b] = hexToRgb01(BG_COLOR);
  gl.clearColor(r, g, b, 1);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  const canvas = gl.canvas;
  canvas.className = "glyph-canvas";
  container.querySelectorAll("canvas").forEach((n) => n.remove());
  container.appendChild(canvas);
  let atlasImage = buildAtlas(atlas, atlasCols, cellSize);
  const atlasTexture = new Texture(gl, { image: atlasImage, generateMipmaps: true, premultiplyAlpha: false, flipY: false });
  const rawFrames = data.frames?.length ? data.frames : [{ brightness: cellBrightness, glyphs: data.cellGlyphs ?? [] }];
  const frames = rawFrames.map((frame) => (
    Array.isArray(frame)
      ? { brightness: frame, glyphs: [] }
      : { brightness: frame.brightness ?? frame, glyphs: frame.glyphs ?? [] }
  ));
  const defaultGlyphs = data.cellGlyphs ?? frames[0].glyphs;
  if (!frames[0].glyphs.length && defaultGlyphs.length) frames[0].glyphs = defaultGlyphs;
  let frameIndex = 0;
  let sourceTexture = buildSourceTexture(gl, modelCols, modelRows, frames[frameIndex].brightness, frames[frameIndex].glyphs);

  const setFrame = (index) => {
    frameIndex = (index + frames.length) % frames.length;
    const frame = frames[frameIndex];
    sourceTexture.image = buildSourceImage(modelCols, modelRows, frame.brightness, frame.glyphs);
    sourceTexture.needsUpdate = true;
    container.dataset.frame = String(frameIndex);
  };

  const program = new Program(gl, {
    vertex: buildVertexShader(phraseLen, glyphAspect),
    fragment: FRAGMENT_SHADER,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    cullFace: false,
    uniforms: {
      uTime: { value: 0 },
      uGridSize: { value: new Float32Array([1, 1]) },
      uAtlasGrid: { value: new Float32Array([atlasCols, atlasRows]) },
      uPhraseChars: { value: [...phraseAtlasIndices] },
      uModelStart: { value: new Float32Array([0, 0]) },
      uModelSize: { value: new Float32Array([1, 1]) },
      uModelUVScale: { value: new Float32Array([1, 1]) },
      uModelUVOffset: { value: new Float32Array([0, 0]) },
      uBackgroundBrightness: { value: 0.01 },
      uBackgroundTwinkle: { value: 0 },
      uEntranceCenter: { value: new Float32Array([0, 0]) },
      uEntranceStart: { value: 1e9 },
      uMouse: { value: new Float32Array([-999, -999]) },
      uMouseInfluence: { value: 0 },
      uMouseRadius: { value: 1 },
      uRippleMaxRadius: { value: 1 },
      uRippleWidth: { value: 1 },
      uRippleStarts: { value: Array.from({ length: 16 }, () => -1) },
      uRippleCenters: { value: Array.from({ length: 16 }, () => [0, 0]) },
      uActiveRippleCount: { value: 0 },
      uColor: { value: new Float32Array([1, 1, 1]) },
      tAtlas: { value: atlasTexture },
      tSourceBrightness: { value: sourceTexture },
    },
  });

  if (!program.uniformLocations?.size) {
    console.error("[GlyphField] shader failed to link", gl.getProgramInfoLog(program.program));
    return () => {};
  }

  const geometry = new Geometry(gl, {
    position: { size: 2, data: BASE_QUAD_POSITION },
    uv: { size: 2, data: BASE_QUAD_UV },
    aInstance: { instanced: 1, size: 1, data: new Float32Array([0]) },
  });
  const mesh = new Mesh(gl, { geometry, program, frustumCulled: false });
  const controller = new AbortController();
  const { signal } = controller;
  let cols = 1, rows = 1, cellW = 1, cellH = 1, rafId = 0, inView = false, pageVisible = !document.hidden;
  let motionEnabled = !reduceMotion, lastFrame = performance.now(), simTime = 0;
  let entrancePlayed = false;
  const ripples = [], mouseTarget = new Float32Array([-999, -999]);
  let mouseInfluence = 0;

  const resize = () => {
    const rect = container.getBoundingClientRect();
    const width = Math.max(1, rect.width), height = Math.max(1, rect.height);
    renderer.setSize(Math.floor(width), Math.floor(height));
    cellH = 14;
    cellW = cellH * glyphAspect;
    cols = Math.max(8, Math.round(width / cellW));
    rows = Math.max(8, Math.round(height / cellH));
    cellW = width / cols;
    cellH = height / rows;
    program.uniforms.uGridSize.value[0] = cols;
    program.uniforms.uGridSize.value[1] = rows;
    const ep = cols, em = rows, u = sourceAspect, g = glyphAspect;
    const modelW = Math.min(ep, Math.max(1, Math.round(em * u / g)));
    const modelH = em;
    const modelX = ep - modelW;
    program.uniforms.uModelStart.value[0] = modelX;
    program.uniforms.uModelStart.value[1] = 0;
    program.uniforms.uModelSize.value[0] = modelW;
    program.uniforms.uModelSize.value[1] = modelH;
    program.uniforms.uModelUVScale.value[0] = 1;
    program.uniforms.uModelUVScale.value[1] = 1;
    program.uniforms.uModelUVOffset.value[0] = 0;
    program.uniforms.uModelUVOffset.value[1] = 0;
    program.uniforms.uEntranceCenter.value[0] = modelX + modelW / 2;
    program.uniforms.uEntranceCenter.value[1] = modelH / 2;
    const halfW = ep / 2;
    program.uniforms.uMouseRadius.value = 0.35 * halfW;
    program.uniforms.uRippleMaxRadius.value = 1.6 * halfW;
    program.uniforms.uRippleWidth.value = 0.85 * halfW;
    geometry.setInstancedCount(cols * rows);
  };

  const playEntrance = () => {
    if (entrancePlayed || reduceMotion) return;
    entrancePlayed = true;
    program.uniforms.uEntranceStart.value = simTime;
    const c = program.uniforms.uEntranceCenter.value;
    ripples.push({ start: simTime, x: c[0], y: c[1] });
  };

  const skipEntrance = () => {
    entrancePlayed = true;
    program.uniforms.uEntranceStart.value = -1e9;
    simTime = Math.max(simTime, 2.3);
  };

  const renderFrame = () => { program.uniforms.uTime.value = simTime; renderer.render({ scene: mesh, update: false, sort: false, frustumCull: false }); };
  const tick = (now) => {
    const dt = Math.min(0.05, (now - lastFrame) * 0.001);
    lastFrame = now;
    if (motionEnabled) simTime += dt;
    while (ripples[0] && simTime - ripples[0].start >= 1.8) ripples.shift();
    for (const ripple of ripples) {
      if (ripple.switchFrame && !ripple.switched && simTime - ripple.start >= 0.38) {
        setFrame(frameIndex + 1);
        ripple.switched = true;
      }
    }
    const starts = program.uniforms.uRippleStarts.value, centers = program.uniforms.uRippleCenters.value;
    for (let i = 0; i < 16; i++) {
      const ripple = ripples[i];
      starts[i] = ripple ? ripple.start : -1;
      if (ripple) { centers[i][0] = ripple.x; centers[i][1] = ripple.y; }
    }
    program.uniforms.uActiveRippleCount.value = ripples.length;
    const entrance = program.uniforms.uEntranceStart.value;
    if (entrance > -1e8 && entrance < 1e8 && simTime - entrance > 2.35) program.uniforms.uEntranceStart.value = -1e9;
    const mouse = program.uniforms.uMouse.value;
    program.uniforms.uMouseInfluence.value += (mouseInfluence - program.uniforms.uMouseInfluence.value) * (1 - Math.exp(-6 * dt));
    const ease = 1 - Math.exp(-14 * dt);
    mouse[0] += (mouseTarget[0] - mouse[0]) * ease;
    mouse[1] += (mouseTarget[1] - mouse[1]) * ease;
    renderFrame();
    rafId = inView && pageVisible && motionEnabled ? requestAnimationFrame(tick) : 0;
  };
  const syncLoop = () => {
    if (inView && pageVisible && motionEnabled) {
      if (!rafId) { lastFrame = performance.now(); rafId = requestAnimationFrame(tick); }
    } else { if (rafId) cancelAnimationFrame(rafId); rafId = 0; renderFrame(); }
  };

  resize();
  new ResizeObserver(resize).observe(container);
  window.addEventListener("scroll", resize, { passive: true, signal });
  new IntersectionObserver(([entry]) => {
    const wasInView = inView;
    inView = entry?.isIntersecting ?? false;
    if (inView && !wasInView) playEntrance();
    syncLoop();
  }, { threshold: 0 }).observe(container);
  document.addEventListener("visibilitychange", () => { pageVisible = !document.hidden; syncLoop(); }, { signal });

  setupPointer({
    container, signal, labelEl,
    onMove: (x, y) => { mouseTarget[0] = x / cellW; mouseTarget[1] = y / cellH; },
    onEnter: (x, y) => { mouseTarget[0] = x / cellW; mouseTarget[1] = y / cellH; const m = program.uniforms.uMouse.value; m[0] = mouseTarget[0]; m[1] = mouseTarget[1]; mouseInfluence = 1; },
    onLeave: () => { mouseInfluence = 0; },
    onClick: (x, y) => {
      ripples.push({ start: simTime, x: x / cellW, y: y / cellH, switchFrame: frames.length > 1 });
      while (ripples.length > 16) ripples.shift();
    },
  });

  setFrame(0);
  if (reduceMotion) skipEntrance();
  else {
    const rect = container.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) playEntrance();
  }

  document.fonts.ready.then(() => {
    if (controller.signal.aborted) return;
    atlasImage = buildAtlas(atlas, atlasCols, cellSize);
    atlasTexture.image = atlasImage;
    atlasTexture.needsUpdate = true;
    renderFrame();
  });

  renderFrame();
  syncLoop();
  return () => { if (rafId) cancelAnimationFrame(rafId); controller.abort(); canvas.remove(); };
}

const root = document.querySelector("[data-glyphs-field]");
if (root) {
  initGlyphField(root).catch((error) => {
    console.warn("Glyph field unavailable:", error);
  });
}
