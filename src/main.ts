import * as THREE from 'three';
import { AvatarGenerator } from './character/AvatarGenerator';
import { askStartNg, WhoAmIReply, isMockMode, StartNgUser } from './net/startng';

// 1. Scene setup
const container = document.getElementById('canvas-container')!;
const fpsEl = document.getElementById('fps-counter')!;

const scene = new THREE.Scene();
// Lagos Sunset tone from Art Direction Palette (#FFBA5C / #FF8C5A)
scene.background = new THREE.Color(0xffba5c);
scene.fog = new THREE.FogExp2(0xffba5c, 0.008);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

// 2. Sunlight and Ambient
const hemiLight = new THREE.HemisphereLight(0xffecd2, 0x3d3830, 1.2);
scene.add(hemiLight);

const sunLight = new THREE.DirectionalLight(0xfffae6, 2.2);
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

  const bL = new THREE.Mesh(buildingGeo, buildingMat);
  bL.scale.set(w, h, d);
  bL.position.set(-18, h / 2, (i - 12) * 16);
  bL.castShadow = true;
  bL.receiveShadow = true;
  scene.add(bL);

  const bR = new THREE.Mesh(buildingGeo, buildingMat);
  bR.scale.set(w, h, d);
  bR.position.set(18, h / 2, (i - 12) * 16);
  bR.castShadow = true;
  bR.receiveShadow = true;
  scene.add(bR);
}

// 5. 3D Person Character (Generated from start.ng character style)
let currentUser: StartNgUser = {
  id: 1,
  name: 'Lagos Driver',
  account: 'driver_eko',
  style: {
    body: 'male',
    primaryColor: '#f7bf1f', // Danfo yellow shirt from palette
    secondaryColor: '#2e2e38', // Dark trousers
    skinColor: '#8d5524',
    hairColor: '#17120f',
    hair: 'short',
    hat: 'cap',
    accessory: 'glasses'
  },
  face: ''
};

let avatar: AvatarGenerator | null = null;
const playerGroup = new THREE.Group();
playerGroup.position.set(0, 0, 0);
scene.add(playerGroup);

function rebuildAvatar(user: StartNgUser) {
  if (avatar) playerGroup.remove(avatar.group);
  avatar = new AvatarGenerator(user);
  playerGroup.add(avatar.group);
}
rebuildAvatar(currentUser);

// Fetch start.ng identity if available
async function initIdentity() {
  const reply = await askStartNg<WhoAmIReply>({ type: 'startng:whoami' }, 'startng:user', 2000);
  if (reply) {
    const p = reply.user ?? reply.guest;
    if (p) {
      currentUser = p;
      rebuildAvatar(p);
    }
  }
}
if (!isMockMode()) initIdentity();

// 6. Character Controls (W A S D + Third-Person Camera)
const keys: Record<string, boolean> = {};
window.addEventListener('keydown', (e) => { keys[e.code] = true; });
window.addEventListener('keyup', (e) => { keys[e.code] = false; });

let playerPos = new THREE.Vector3(0, 0, 0);
let playerYaw = 0;
const moveSpeed = 8.0;

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 7. Game loop & FPS Counter
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

  // Walking Movement (W A S D)
  let moveX = 0;
  let moveZ = 0;
  if (keys['KeyW'] || keys['ArrowUp']) moveZ -= 1;
  if (keys['KeyS'] || keys['ArrowDown']) moveZ += 1;
  if (keys['KeyA'] || keys['ArrowLeft']) moveX -= 1;
  if (keys['KeyD'] || keys['ArrowRight']) moveX += 1;

  const isMoving = moveX !== 0 || moveZ !== 0;

  if (isMoving) {
    const inputAngle = Math.atan2(moveX, moveZ);
    playerYaw = inputAngle + Math.PI;

    const norm = Math.hypot(moveX, moveZ);
    playerPos.x += (moveX / norm) * moveSpeed * dt;
    playerPos.z += (moveZ / norm) * moveSpeed * dt;

    // Clamp inside road boundaries
    playerPos.x = Math.max(-9.0, Math.min(9.0, playerPos.x));
  }

  playerGroup.position.copy(playerPos);
  playerGroup.rotation.y = playerYaw;

  if (avatar) {
    avatar.updateAnimation(dt, isMoving, 1.2);
  }

  // Third-person chase camera follow
  const targetCamPos = new THREE.Vector3(
    playerPos.x * 0.4,
    playerPos.y + 3.8,
    playerPos.z + 7.5
  );
  camera.position.lerp(targetCamPos, 0.12);
  camera.lookAt(playerPos.x, playerPos.y + 1.2, playerPos.z);

  renderer.render(scene, camera);
}

animate();
