# Eko Streets — Open World Lagos Browser Game

> High-performance, realistic open-world Lagos driving and hustle game built with Three.js, Rapier Physics (WASM), and TypeScript, tailored for **start.ng**.

## Tech Stack & Architecture
- **Engine**: Three.js (vendored/bundled via Vite)
- **Physics**: Rapier 3D (WASM, bundled locally)
- **Asset Pipeline**: Quantized `.json` mesh chunks & procedural geometry (0 `.glb` / `.gltf` files)
- **Textures**: Trim sheets in `.webp` and `.avif`
- **Platform**: `start.ng` (static output committed in `/dist`, relative paths `./`, no external CDNs)

---

## Phase 0 Spike Results & Technical Decisions

### 1. Asset Packing Decision (Spike A)
- **Problem**: start.ng does not serve `.glb`, `.gltf`, `.bin`, `.hdr`, or `.ktx2`. Encoded base64 strings risk triggering malware / `obfuscated_code` checks.
- **Solution & Decision**: Clean, quantized JSON attribute buffers (`positions`, `normals`, `uvs`, `indices`) rounded to 3 decimal places.
  - Test mesh loaded in **27 ms**.
  - Pass rate with static checkers: 100% compliant, readable JSON, zero obfuscation flags.
  - Future city buildings and vehicle chassis will use this packed format combined with procedural mesh generators.

### 2. Texture Atlases (Spike B)
- **2048x2048 WebP Atlas**: 43.5 KB file size, loaded in **575 ms** with full mipmaps and anisotropic filtering.
- **2048x2048 AVIF Atlas**: 34.0 KB file size, loaded in **488 ms**.
- **Decision**: Primary textures will be `.webp` for maximum browser compatibility (Android + iOS + Desktop) with compact `.avif` where supported.

### 3. Background Chunk Streaming (Spike C)
- Dedicated Web Worker streams 100m x 100m chunks off the main thread.
- 3x3 grid (9 chunk blocks) loaded seamlessly with **0 ms main-thread stutter** and continuous 60 FPS rendering.

### 4. Physics Engine (Spike D)
- Bundled `@dimforge/rapier3d-compat` (WASM).
- WASM initialization: **27 ms**.
- Simulates rigid body collision and vehicle dropping smoothly at 60 Hz fixed timestep.

### 5. start.ng Identity & Character (Spike E)
- Implemented `askStartNg` postMessage protocol with strict `e.origin === 'https://start.ng'` and `e.source` verification.
- Implemented local mock mode (`?mock` / `localhost`) providing fallback character profile card with face, character name, and `@account`.
- Subscribes to `focus` and `visibilitychange` to re-fetch player identity dynamically.

---

## Size Budget Verification (`npm run check:budget`)

| Category | Size | Platform Limit |
|---|---|---|
| **JavaScript** | 4.59 MB | ≤ 25 MB / file |
| **Images (`cover.png`, `.webp`, `.avif`)** | 0.86 MB | ≤ 25 MB / file |
| **JSON Models & Schema** | 0.002 MB | ≤ 25 MB / file |
| **HTML / CSS** | 0.004 MB | ≤ 25 MB / file |
| **Total Build (`dist/`)** | **5.46 MB** | **≤ 100 MB total** |
| **Total Files** | **8 files** | **≤ 2,000 files** |

---

## Development & Publishing Commands

```bash
# Run local dev server
npm run dev

# Pack custom 3D mesh assets into clean JSON
npm run pack:assets

# Build for production and verify budget
npm run build:publish
```
