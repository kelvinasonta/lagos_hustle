import * as THREE from 'three';

// 1. Scene setup
const container = document.getElementById('canvas-container')!;
const fpsEl = document.getElementById('fps-counter')!;

const scene = new THREE.Scene();
// Lagos Sunset / Hazy Sky tone from Art Direction Palette (#FFBA5C / #FF8C5A)
scene.background = new THREE.Color(0xffba5c);
scene.fog = new THREE.FogExp2(0xffba5c, 0.008);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, 15);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

// 2. Sunlight and Ambient
const hemiLight = new THREE.HemisphereLight(0xffecd2, 0x3d3830, 1.2);
scene.add(hemiLight);

const sunLight = new THREE.DirectionalLight(0xfffae6, 2.0);
sunLight.position.set(30, 50, 20);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 1024;
sunLight.shadow.mapSize.height = 1024;
scene.add(sunLight);

// 3. Flat Road (#2E2E38 Asphalt from Art Direction Sheet)
const roadGeo = new THREE.PlaneGeometry(20, 400);
const roadMat = new THREE.MeshStandardMaterial({ color: 0x2e2e38, roughness: 0.8 });
const road = new THREE.Mesh(roadGeo, roadMat);
road.rotation.x = -Math.PI / 2;
road.receiveShadow = true;
scene.add(road);

// Road Center line (Danfo Yellow #F7BF1F)
const lineGeo = new THREE.PlaneGeometry(0.3, 400);
const lineMat = new THREE.MeshBasicMaterial({ color: 0xf7bf1f });
const centerLine = new THREE.Mesh(lineGeo, lineMat);
centerLine.rotation.x = -Math.PI / 2;
centerLine.position.y = 0.01;
scene.add(centerLine);

// 4. Simple Grey Buildings on both sides (#BDB8AE Concrete from Palette)
const buildingGeo = new THREE.BoxGeometry(1, 1, 1);
const buildingMat = new THREE.MeshStandardMaterial({ color: 0x8a8a8e, roughness: 0.7 });

for (let i = 0; i < 24; i++) {
  const h = 10 + (i * 7) % 25;
  const w = 12;
  const d = 14;

  // Left building
  const bL = new THREE.Mesh(buildingGeo, buildingMat);
  bL.scale.set(w, h, d);
  bL.position.set(-18, h / 2, (i - 12) * 16);
  bL.castShadow = true;
  bL.receiveShadow = true;
  scene.add(bL);

  // Right building
  const bR = new THREE.Mesh(buildingGeo, buildingMat);
  bR.scale.set(w, h, d);
  bR.position.set(18, h / 2, (i - 12) * 16);
  bR.castShadow = true;
  bR.receiveShadow = true;
  scene.add(bR);
}

// 5. Movable Camera Controls (WASD / Arrows + Mouse drag)
const keys: Record<string, boolean> = {};
window.addEventListener('keydown', (e) => { keys[e.code] = true; });
window.addEventListener('keyup', (e) => { keys[e.code] = false; });

let isMouseDown = false;
let prevMouseX = 0;
let prevMouseY = 0;
let yaw = 0;
let pitch = 0;

window.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});

window.addEventListener('mouseup', () => { isMouseDown = false; });

window.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const dx = e.clientX - prevMouseX;
  const dy = e.clientY - prevMouseY;
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;

  yaw -= dx * 0.003;
  pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, pitch - dy * 0.003));
});

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 6. Game loop & FPS Counter
let lastTime = performance.now();
let frames = 0;
let fpsTimer = performance.now();

function animate() {
  requestAnimationFrame(animate);

  const now = performance.now();
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;

  frames++;
  if (now - fpsTimer >= 500) {
    const fps = Math.round((frames * 1000) / (now - fpsTimer));
    fpsEl.textContent = `FPS: ${fps}`;
    frames = 0;
    fpsTimer = now;
  }

  // Camera Movement
  const speed = 15 * dt;
  const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));

  if (keys['KeyW'] || keys['ArrowUp']) camera.position.addScaledVector(forward, speed);
  if (keys['KeyS'] || keys['ArrowDown']) camera.position.addScaledVector(forward, -speed);
  if (keys['KeyA'] || keys['ArrowLeft']) camera.position.addScaledVector(right, -speed);
  if (keys['KeyD'] || keys['ArrowRight']) camera.position.addScaledVector(right, speed);
  if (keys['KeyQ']) camera.position.y += speed;
  if (keys['KeyE']) camera.position.y -= speed;

  // Camera orientation
  const target = new THREE.Vector3()
    .copy(camera.position)
    .add(new THREE.Vector3(
      -Math.sin(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      -Math.cos(yaw) * Math.cos(pitch)
    ));
  camera.lookAt(target);

  renderer.render(scene, camera);
}

animate();
