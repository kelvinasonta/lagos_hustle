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

// 3. Road Network: Main Avenue + Connecting Cross Streets
const roadMat = new THREE.MeshStandardMaterial({ color: 0x2e2e38, roughness: 0.8 });
const lineMat = new THREE.MeshBasicMaterial({ color: 0xf7bf1f }); // Danfo Yellow
const zebraMat = new THREE.MeshBasicMaterial({ color: 0xeeeeee }); // Pedestrian crosswalk

// Main Avenue (Z-axis, width 20m, length 400m)
const mainRoad = new THREE.Mesh(new THREE.PlaneGeometry(20, 400), roadMat);
mainRoad.rotation.x = -Math.PI / 2;
mainRoad.receiveShadow = true;
scene.add(mainRoad);

// Main road yellow centerline
const mainCenterLine = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 400), lineMat);
mainCenterLine.rotation.x = -Math.PI / 2;
mainCenterLine.position.y = 0.01;
scene.add(mainCenterLine);

// Connecting cross streets (Intersections at Z = -80, Z = 0, Z = 80)
const crossStreetZs = [-80, 0, 80];
crossStreetZs.forEach((crossZ) => {
  // Cross street (X-axis, width 16m, length 300m)
  const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(300, 16), roadMat);
  crossRoad.rotation.x = -Math.PI / 2;
  crossRoad.position.set(0, 0.005, crossZ);
  crossRoad.receiveShadow = true;
  scene.add(crossRoad);

  // Yellow centerline for cross street (leaving intersection center clean)
  const crossLineEast = new THREE.Mesh(new THREE.PlaneGeometry(140, 0.3), lineMat);
  crossLineEast.rotation.x = -Math.PI / 2;
  crossLineEast.position.set(80, 0.012, crossZ);
  scene.add(crossLineEast);

  const crossLineWest = new THREE.Mesh(new THREE.PlaneGeometry(140, 0.3), lineMat);
  crossLineWest.rotation.x = -Math.PI / 2;
  crossLineWest.position.set(-80, 0.012, crossZ);
  scene.add(crossLineWest);

  // Zebra crossings on North & South entries of intersection
  for (let zOffset of [-10.5, 10.5]) {
    for (let stripe = -8; stripe <= 8; stripe += 1.6) {
      const zebra = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 2.5), zebraMat);
      zebra.rotation.x = -Math.PI / 2;
      zebra.position.set(stripe, 0.015, crossZ + zOffset);
      scene.add(zebra);
    }
  }

  // Street Name Signs / Boards at Corners (e.g. Marina Rd, Broad St, Ojuelegba Way)
  const signPole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 4.2, 8),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  );
  signPole.position.set(11.5, 2.1, crossZ + 9.5);
  signPole.castShadow = true;
  scene.add(signPole);

  const signPlate = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 0.6, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x1b5e20, roughness: 0.4 }) // Green Lagos street sign
  );
  signPlate.position.set(11.5, 3.8, crossZ + 9.5);
  signPlate.castShadow = true;
  scene.add(signPlate);
});

// 4. City Buildings positioned along street blocks (avoiding intersection gaps)
const buildingGeo = new THREE.BoxGeometry(1, 1, 1);
const buildingMat = new THREE.MeshStandardMaterial({ color: 0x8a8a8e, roughness: 0.7 });
const commercialMat = new THREE.MeshStandardMaterial({ color: 0x5a5a62, roughness: 0.6 });

// Helper to check if a Z position is near any intersection
function isNearIntersection(z: number): boolean {
  return crossStreetZs.some((cz) => Math.abs(z - cz) < 14);
}

// Buildings along Main Avenue
for (let i = 0; i < 28; i++) {
  const zPos = -130 + i * 10;
  if (isNearIntersection(zPos)) continue; // Keep intersection corners clear for connecting roads

  const h = 12 + ((i * 13) % 24);
  const w = 11;
  const d = 8.5;
  const mat = i % 2 === 0 ? buildingMat : commercialMat;

  // West side buildings
  const bL = new THREE.Mesh(buildingGeo, mat);
  bL.scale.set(w, h, d);
  bL.position.set(-18, h / 2, zPos);
  bL.castShadow = true;
  bL.receiveShadow = true;
  scene.add(bL);

  // East side buildings
  const bR = new THREE.Mesh(buildingGeo, mat);
  bR.scale.set(w, h, d);
  bR.position.set(18, h / 2, zPos);
  bR.castShadow = true;
  bR.receiveShadow = true;
  scene.add(bR);
}

// Buildings flanking the connecting cross streets
crossStreetZs.forEach((cz) => {
  for (let xStep of [26, 42, 58, -26, -42, -58]) {
    const h = 10 + (Math.abs(xStep) * 3) % 18;
    const w = 12;
    const d = 10;

    // North side of cross street
    const bNorth = new THREE.Mesh(buildingGeo, commercialMat);
    bNorth.scale.set(w, h, d);
    bNorth.position.set(xStep, h / 2, cz + 15);
    bNorth.castShadow = true;
    bNorth.receiveShadow = true;
    scene.add(bNorth);

    // South side of cross street
    const bSouth = new THREE.Mesh(buildingGeo, buildingMat);
    bSouth.scale.set(w, h, d);
    bSouth.position.set(xStep, h / 2, cz - 15);
    bSouth.castShadow = true;
    bSouth.receiveShadow = true;
    scene.add(bSouth);
  }
});

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

    // Check boundaries: on main avenue (-9 to 9) OR on cross streets (near cross street Z, X between -145 and 145)
    const onCrossStreet = crossStreetZs.some((cz) => Math.abs(playerPos.z - cz) <= 7.0);
    if (!onCrossStreet) {
      playerPos.x = Math.max(-9.0, Math.min(9.0, playerPos.x));
    } else {
      playerPos.x = Math.max(-140.0, Math.min(140.0, playerPos.x));
    }
    playerPos.z = Math.max(-180.0, Math.min(180.0, playerPos.z));
  }

  playerGroup.position.copy(playerPos);
  playerGroup.rotation.y = playerYaw;

  if (avatar) {
    avatar.updateAnimation(dt, isMoving, 1.2);
  }

  // Smooth Third-person chase camera follow relative to player's position
  const targetCamPos = new THREE.Vector3(
    playerPos.x,
    playerPos.y + 3.8,
    playerPos.z + 7.5
  );
  camera.position.lerp(targetCamPos, 0.12);
  camera.lookAt(playerPos.x, playerPos.y + 1.2, playerPos.z);

  renderer.render(scene, camera);
}

animate();
