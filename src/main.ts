import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import { askStartNg, redirectToSignIn, WhoAmIReply, isMockMode } from './net/startng';
import { loadPackedMesh } from './world/meshLoader';

// Spike metrics tracker
const spikeMetrics = {
  meshLoadTimeMs: 0,
  meshTriangles: 0,
  textureWebpTimeMs: 0,
  textureAvifTimeMs: 0,
  worstFrameTimeMs: 0,
  rapierInitTimeMs: 0,
  physicsObjects: 0,
  startNgStatus: 'initializing'
};

async function initSpikes() {
  const container = document.getElementById('canvas-container')!;
  const statsEl = document.getElementById('spike-stats')!;

  // 1. Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#101217');

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 18, 30);
  camera.lookAt(0, 4, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Lights
  const hemiLight = new THREE.HemisphereLight(0xfff5e6, 0x3d3830, 1.2);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xfffaed, 2.0);
  dirLight.position.set(30, 50, 20);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  scene.add(dirLight);

  // Ground Plane
  const groundGeo = new THREE.PlaneGeometry(300, 300);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x1b1c1d, roughness: 0.85, metalness: 0.1 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // -------------------------------------------------------------
  // Spike A: Packed JSON Mesh Loading
  // -------------------------------------------------------------
  try {
    const t0 = performance.now();
    const meshGeo = await loadPackedMesh('./assets/models/spike-mesh.json');
    spikeMetrics.meshLoadTimeMs = Math.round(performance.now() - t0);
    spikeMetrics.meshTriangles = (meshGeo.getIndex()?.count || 0) / 3;

    const meshMat = new THREE.MeshStandardMaterial({ color: 0xfbc531, roughness: 0.4, metalness: 0.2 });
    const spikeMesh = new THREE.Mesh(meshGeo, meshMat);
    spikeMesh.position.set(-6, 2, 0);
    spikeMesh.scale.set(1.5, 1.5, 1.5);
    spikeMesh.castShadow = true;
    scene.add(spikeMesh);
  } catch (err) {
    console.error('Spike A failed:', err);
  }

  // -------------------------------------------------------------
  // Spike B: WebP & AVIF 2048 Atlas Texture Loading
  // -------------------------------------------------------------
  const textureLoader = new THREE.TextureLoader();
  const tWebp0 = performance.now();
  textureLoader.load('./assets/textures/atlas-2048.webp', (tex) => {
    spikeMetrics.textureWebpTimeMs = Math.round(performance.now() - tWebp0);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const bannerGeo = new THREE.BoxGeometry(6, 4, 0.4);
    const bannerMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 });
    const banner = new THREE.Mesh(bannerGeo, bannerMat);
    banner.position.set(6, 4, 0);
    banner.castShadow = true;
    scene.add(banner);
  });

  const tAvif0 = performance.now();
  textureLoader.load('./assets/textures/atlas-2048.avif', () => {
    spikeMetrics.textureAvifTimeMs = Math.round(performance.now() - tAvif0);
  });

  // -------------------------------------------------------------
  // Spike C: 3x3 Grid Chunk Streaming Worker
  // -------------------------------------------------------------
  const chunkGroup = new THREE.Group();
  scene.add(chunkGroup);

  const chunkWorker = new Worker(new URL('./world/chunkWorker.ts', import.meta.url), { type: 'module' });
  const activeChunks = new Map<string, THREE.Group>();

  chunkWorker.onmessage = (e) => {
    if (e.data.action === 'chunkLoaded') {
      const { chunkX, chunkZ, buildings } = e.data;
      const key = `${chunkX}_${chunkZ}`;
      const group = new THREE.Group();

      const boxGeo = new THREE.BoxGeometry(1, 1, 1);
      const bMat = new THREE.MeshStandardMaterial({ color: 0x95a5a6, roughness: 0.7 });

      for (const b of buildings) {
        const mesh = new THREE.Mesh(boxGeo, bMat);
        mesh.scale.set(b.width, b.height, b.depth);
        mesh.position.set(b.x, b.y, b.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
      }

      chunkGroup.add(group);
      activeChunks.set(key, group);
    }
  };

  // Dispatch 3x3 chunk grid (-1 to 1)
  for (let x = -1; x <= 1; x++) {
    for (let z = -1; z <= 1; z++) {
      chunkWorker.postMessage({ action: 'loadChunk', chunkX: x, chunkZ: z, chunkSize: 50 });
    }
  }

  // -------------------------------------------------------------
  // Spike D: Rapier Physics (WASM) Box Drop
  // -------------------------------------------------------------
  let world: RAPIER.World | null = null;
  let dynamicRigidBody: RAPIER.RigidBody | null = null;
  const vehicleBox = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 1.4, 4.8),
    new THREE.MeshStandardMaterial({ color: 0xfbc531, roughness: 0.3, metalness: 0.5 })
  );
  vehicleBox.castShadow = true;
  scene.add(vehicleBox);

  try {
    const tRapier = performance.now();
    await RAPIER.init();
    spikeMetrics.rapierInitTimeMs = Math.round(performance.now() - tRapier);

    const gravity = { x: 0.0, y: -9.81, z: 0.0 };
    world = new RAPIER.World(gravity);

    // Static ground collider
    const groundBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(0, 0, 0);
    const groundBody = world.createRigidBody(groundBodyDesc);
    const groundColliderDesc = RAPIER.ColliderDesc.cuboid(150, 0.1, 150);
    world.createCollider(groundColliderDesc, groundBody);

    // Dynamic vehicle chassis dropped from height
    const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 12, 0);
    dynamicRigidBody = world.createRigidBody(bodyDesc);
    const colliderDesc = RAPIER.ColliderDesc.cuboid(1.2, 0.7, 2.4).setRestitution(0.3);
    world.createCollider(colliderDesc, dynamicRigidBody);

    spikeMetrics.physicsObjects = 2;
  } catch (err) {
    console.error('Rapier init error:', err);
  }

  // -------------------------------------------------------------
  // Spike E: start.ng Integration (whoami + profile card)
  // -------------------------------------------------------------
  const cardEl = document.getElementById('player-card')!;
  const faceEl = document.getElementById('player-face') as HTMLImageElement;
  const nameEl = document.getElementById('player-name')!;
  const accountEl = document.getElementById('player-account')!;
  const signinBtn = document.getElementById('player-sign-in')!;
  const mockBadge = document.getElementById('mock-badge')!;

  if (isMockMode()) {
    mockBadge.style.display = 'inline-block';
  }

  signinBtn.onclick = () => redirectToSignIn();

  async function checkIdentity() {
    spikeMetrics.startNgStatus = 'connecting...';
    const reply = await askStartNg<WhoAmIReply>({ type: 'startng:whoami' }, 'startng:user', 3000);
    if (reply) {
      const player = reply.user ?? reply.guest;
      spikeMetrics.startNgStatus = reply.user ? `Signed in (@${reply.user.account})` : 'Guest mode';
      if (player) {
        faceEl.src = player.face;
        nameEl.textContent = player.name;
        accountEl.textContent = reply.user?.account ? `@${reply.user.account}` : 'Guest Player';
        signinBtn.style.display = reply.user ? 'none' : 'inline-block';
        cardEl.style.display = 'flex';
      }
    } else {
      spikeMetrics.startNgStatus = 'Local offline / no answer';
      cardEl.style.display = 'flex';
      nameEl.textContent = 'Offline Driver';
      accountEl.textContent = '@local';
    }
  }

  await checkIdentity();
  window.addEventListener('focus', () => checkIdentity());
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkIdentity();
  });

  // Render loop with fixed physics & frame profiling
  let lastTime = performance.now();
  let frameCount = 0;
  let fps = 60;
  let fpsTimer = performance.now();

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = now - lastTime;
    lastTime = now;

    if (dt > spikeMetrics.worstFrameTimeMs && frameCount > 10) {
      spikeMetrics.worstFrameTimeMs = Math.round(dt);
    }

    frameCount++;
    if (now - fpsTimer >= 1000) {
      fps = frameCount;
      frameCount = 0;
      fpsTimer = now;
    }

    // Step physics
    if (world) {
      world.step();
      if (dynamicRigidBody) {
        const pos = dynamicRigidBody.translation();
        const rot = dynamicRigidBody.rotation();
        vehicleBox.position.set(pos.x, pos.y, pos.z);
        vehicleBox.quaternion.set(rot.x, rot.y, rot.z, rot.w);
      }
    }

    // Gentle camera orbit
    const orbitTime = now * 0.0003;
    camera.position.x = Math.sin(orbitTime) * 32;
    camera.position.z = Math.cos(orbitTime) * 32;
    camera.lookAt(0, 4, 0);

    renderer.render(scene, camera);

    // Update overlay UI
    statsEl.innerHTML = `
      <b>EKO STREETS — PHASE 0 SPIKE REPORT</b><br/>
      FPS: <span style="color:#2ed573">${fps}</span> | Worst Frame: <b>${spikeMetrics.worstFrameTimeMs}ms</b><br/>
      Spike A (JSON Mesh): <b>${spikeMetrics.meshLoadTimeMs}ms</b> (${spikeMetrics.meshTriangles} tris)<br/>
      Spike B (2048 Atlas): WebP <b>${spikeMetrics.textureWebpTimeMs}ms</b> | AVIF <b>${spikeMetrics.textureAvifTimeMs}ms</b><br/>
      Spike C (Streaming Worker): 3x3 Chunks Active (${activeChunks.size} blocks)<br/>
      Spike D (Rapier WASM): Init <b>${spikeMetrics.rapierInitTimeMs}ms</b> | ${spikeMetrics.physicsObjects} colliders<br/>
      Spike E (start.ng Identity): <b>${spikeMetrics.startNgStatus}</b>
    `;
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

initSpikes().catch(console.error);
