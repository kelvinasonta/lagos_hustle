import * as THREE from 'three';
import { AvatarGenerator } from './character/AvatarGenerator';
import { askStartNg, WhoAmIReply, isMockMode, StartNgUser } from './net/startng';
import { createVehicle, VehicleType } from './vehicles/DanfoGenerator';

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

// 3. Ground plane & Road Network
// Laterite soil / urban terrain ground (#B5502D / dark Lagos ground from palette)
const groundGeo = new THREE.PlaneGeometry(800, 800);
const groundMat = new THREE.MeshStandardMaterial({ color: 0x22201e, roughness: 0.95 });
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.02;
ground.receiveShadow = true;
scene.add(ground);

const roadMat = new THREE.MeshStandardMaterial({ color: 0x2e2e38, roughness: 0.8 });
const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x9e9a93, roughness: 0.85 }); // Concrete curbs
const lineMat = new THREE.MeshBasicMaterial({ color: 0xf7bf1f }); // Danfo Yellow
const zebraMat = new THREE.MeshBasicMaterial({ color: 0xf5f5f5 }); // Pedestrian crosswalk

// Main Avenue (Z-axis, width 20m, length 400m)
const mainRoad = new THREE.Mesh(new THREE.PlaneGeometry(20, 400), roadMat);
mainRoad.rotation.x = -Math.PI / 2;
mainRoad.receiveShadow = true;
scene.add(mainRoad);

// Sidewalks along Main Avenue (West and East curbs)
const sidewalkWest = new THREE.Mesh(new THREE.PlaneGeometry(4, 400), sidewalkMat);
sidewalkWest.rotation.x = -Math.PI / 2;
sidewalkWest.position.set(-12, 0.04, 0);
sidewalkWest.receiveShadow = true;
scene.add(sidewalkWest);

const sidewalkEast = new THREE.Mesh(new THREE.PlaneGeometry(4, 400), sidewalkMat);
sidewalkEast.rotation.x = -Math.PI / 2;
sidewalkEast.position.set(12, 0.04, 0);
sidewalkEast.receiveShadow = true;
scene.add(sidewalkEast);

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

// 4. Bustling City Infrastructure: Buildings, Market Stalls, Billboards & Street Lamps
const buildingGeo = new THREE.BoxGeometry(1, 1, 1);
const buildingMat = new THREE.MeshStandardMaterial({ color: 0x8a8a8e, roughness: 0.7 });
const commercialMat = new THREE.MeshStandardMaterial({ color: 0x5a5a62, roughness: 0.6 });
const brickMat = new THREE.MeshStandardMaterial({ color: 0xb5502d, roughness: 0.85 }); // Laterite red / brick
const glassWindowMat = new THREE.MeshStandardMaterial({ color: 0x22313f, roughness: 0.2, metalness: 0.8 });

// Billboard / Signboard vibrant Lagos colors
const billboardMats = [
  new THREE.MeshBasicMaterial({ color: 0xe74c3c }), // Airtel / Coca-Cola red
  new THREE.MeshBasicMaterial({ color: 0xf39c12 }), // MTN yellow
  new THREE.MeshBasicMaterial({ color: 0x27ae60 }), // Glo green
  new THREE.MeshBasicMaterial({ color: 0x2980b9 })  // Zenith / Access blue
];

// Helper to check if a Z position is near any intersection
function isNearIntersection(z: number): boolean {
  return crossStreetZs.some((cz) => Math.abs(z - cz) < 14);
}

// Buildings along Main Avenue with window rows and rooftop billboards
for (let i = 0; i < 28; i++) {
  const zPos = -130 + i * 10;
  if (isNearIntersection(zPos)) continue; // Keep intersection corners clear for connecting roads

  const h = 14 + ((i * 13) % 22);
  const w = 11;
  const d = 8.5;
  const mat = i % 3 === 0 ? brickMat : i % 2 === 0 ? buildingMat : commercialMat;

  // West side building
  const bL = new THREE.Mesh(buildingGeo, mat);
  bL.scale.set(w, h, d);
  bL.position.set(-18, h / 2, zPos);
  bL.castShadow = true;
  bL.receiveShadow = true;
  scene.add(bL);

  // Storefront glass window on ground floor
  const shopWindowL = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 3.2), glassWindowMat);
  shopWindowL.rotation.y = Math.PI / 2;
  shopWindowL.position.set(-12.45, 2.0, zPos);
  scene.add(shopWindowL);

  // East side building
  const bR = new THREE.Mesh(buildingGeo, mat);
  bR.scale.set(w, h, d);
  bR.position.set(18, h / 2, zPos);
  bR.castShadow = true;
  bR.receiveShadow = true;
  scene.add(bR);

  const shopWindowR = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 3.2), glassWindowMat);
  shopWindowR.rotation.y = -Math.PI / 2;
  shopWindowR.position.set(12.45, 2.0, zPos);
  scene.add(shopWindowR);

  // Rooftop Billboards on selected buildings
  if (i % 4 === 1) {
    const bbFrame = new THREE.Mesh(new THREE.BoxGeometry(6.4, 3.0, 0.3), billboardMats[i % billboardMats.length]);
    bbFrame.position.set(18, h + 1.8, zPos);
    bbFrame.castShadow = true;
    scene.add(bbFrame);
  }
}

// Street Light Poles along Sidewalks
for (let z = -140; z <= 140; z += 24) {
  for (let xSide of [-10.8, 10.8]) {
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, 6.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    pole.position.set(xSide, 3.25, z);
    pole.castShadow = true;
    scene.add(pole);

    // Lamp arm & glowing head
    const arm = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.1, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    arm.position.set(xSide > 0 ? xSide - 0.4 : xSide + 0.4, 6.4, z);
    scene.add(arm);

    const bulb = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.15, 0.3),
      new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xffe6aa, emissiveIntensity: 1.2 })
    );
    bulb.position.set(xSide > 0 ? xSide - 0.7 : xSide + 0.7, 6.3, z);
    scene.add(bulb);
  }
}

// Street Market Kiosks & Parasol Canopies (Bustling Lagos Street Hawkers / Vendors)
const canopyColors = [0xe74c3c, 0xf1c40f, 0x2ecc71, 0x3498db, 0xe67e22];
const marketZCoords = [-55, -25, 25, 55, -115, 115];

marketZCoords.forEach((mz, idx) => {
  [-11.2, 11.2].forEach((mx, sideIdx) => {
    // Wooden stall table
    const table = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.8, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.9 })
    );
    table.position.set(mx, 0.45, mz);
    table.castShadow = true;
    scene.add(table);

    // Parasol Canopy (Striped umbrella / tarp)
    const canopyColor = canopyColors[(idx + sideIdx) % canopyColors.length];
    const canopy = new THREE.Mesh(
      new THREE.ConeGeometry(1.6, 0.6, 8),
      new THREE.MeshStandardMaterial({ color: canopyColor, roughness: 0.6 })
    );
    canopy.position.set(mx, 2.1, mz);
    canopy.castShadow = true;
    scene.add(canopy);

    const umbrellaPole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 2.1, 6),
      new THREE.MeshStandardMaterial({ color: 0xcccccc })
    );
    umbrellaPole.position.set(mx, 1.05, mz);
    scene.add(umbrellaPole);
  });
});

// Pedestrian NPCs walking along sidewalks
interface PedestrianNPC {
  avatar: AvatarGenerator;
  x: number;
  z: number;
  speed: number;
  direction: 1 | -1;
  minZ: number;
  maxZ: number;
}

const pedestrians: PedestrianNPC[] = [];
const npcStyles = [
  { primaryColor: '#e74c3c', secondaryColor: '#2c3e50', hairColor: '#000000', hat: 'cap' },
  { primaryColor: '#2ecc71', secondaryColor: '#34495e', hairColor: '#1a1a1a', hat: 'none' },
  { primaryColor: '#f39c12', secondaryColor: '#1e272c', hairColor: '#0f0f0f', hat: 'none' },
  { primaryColor: '#9b59b6', secondaryColor: '#2d3436', hairColor: '#171717', hat: 'glasses' },
  { primaryColor: '#1abc9c', secondaryColor: '#2c3e50', hairColor: '#000000', hat: 'cap' },
  { primaryColor: '#e67e22', secondaryColor: '#34495e', hairColor: '#111111', hat: 'none' }
];

// Spawn NPCs along West & East sidewalks
for (let pIdx = 0; pIdx < 12; pIdx++) {
  const isWest = pIdx % 2 === 0;
  const sideX = isWest ? -11.5 : 11.5;
  const startZ = -120 + pIdx * 20;
  const style = npcStyles[pIdx % npcStyles.length];

  const npcUser: StartNgUser = {
    id: 100 + pIdx,
    name: `Pedestrian ${pIdx + 1}`,
    account: `ped_${pIdx}`,
    style: {
      body: 'male',
      primaryColor: style.primaryColor,
      secondaryColor: style.secondaryColor,
      skinColor: '#6d4023',
      hairColor: style.hairColor,
      hair: 'short',
      hat: style.hat as any,
      accessory: 'none'
    },
    face: ''
  };

  const npcAvatar = new AvatarGenerator(npcUser);
  const dir: 1 | -1 = pIdx % 3 === 0 ? -1 : 1;
  npcAvatar.group.position.set(sideX, 0, startZ);
  npcAvatar.group.rotation.y = dir === 1 ? 0 : Math.PI;
  scene.add(npcAvatar.group);

  pedestrians.push({
    avatar: npcAvatar,
    x: sideX,
    z: startZ,
    speed: 1.8 + (pIdx % 4) * 0.4,
    direction: dir,
    minZ: -160,
    maxZ: 160
  });
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

// 5. Vehicles (Parked along curbs + Many in active motion with collision avoidance)
interface TrafficVehicle {
  id: number;
  mesh: THREE.Group;
  baseSpeed: number;
  currentSpeed: number;
  direction: 'north' | 'south' | 'east' | 'west';
  axis: 'x' | 'z';
  minBound: number;
  maxBound: number;
  laneCoord: number; // Constant coordinate (X for north/south, Z for east/west)
  length: number;    // Approx length of vehicle
}

const trafficVehicles: TrafficVehicle[] = [];

// A. Parked Vehicles along Main Avenue & Cross Streets (Danfos, Sedans, Kekes)
interface ParkedSpot {
  x: number;
  z: number;
  yaw: number;
  type: VehicleType;
  color?: number;
}

const parkedSpots: ParkedSpot[] = [
  // West curbs of Main Avenue (parallel parked)
  { x: -7.5, z: 35, yaw: 0, type: 'danfo', color: 0xf7bf1f },
  { x: -7.5, z: 55, yaw: 0, type: 'sedan', color: 0x2c3e50 },
  { x: -7.5, z: -35, yaw: 0, type: 'keke', color: 0xf7bf1f },
  { x: -7.5, z: -55, yaw: 0, type: 'sedan', color: 0x95a5a6 },
  { x: -7.5, z: -110, yaw: 0, type: 'danfo', color: 0xf7bf1f },

  // East curbs of Main Avenue
  { x: 7.5, z: 40, yaw: Math.PI, type: 'sedan', color: 0xb5502d },
  { x: 7.5, z: -40, yaw: Math.PI, type: 'danfo', color: 0xf7bf1f },
  { x: 7.5, z: -105, yaw: Math.PI, type: 'keke', color: 0xf7bf1f },

  // Parked along Connecting Cross Streets (Z = 0, Z = -80, Z = 80)
  { x: 35, z: 5.5, yaw: Math.PI / 2, type: 'danfo', color: 0xf7bf1f },
  { x: -35, z: -5.5, yaw: -Math.PI / 2, type: 'sedan', color: 0x16a085 },
  { x: 50, z: -74.5, yaw: Math.PI / 2, type: 'keke', color: 0xf7bf1f },
  { x: -50, z: -85.5, yaw: -Math.PI / 2, type: 'danfo', color: 0xf7bf1f },
  { x: 42, z: 85.5, yaw: Math.PI / 2, type: 'sedan', color: 0xd35400 },
];

parkedSpots.forEach((spot) => {
  const mesh = createVehicle({ type: spot.type, primaryColor: spot.color });
  mesh.position.set(spot.x, 0, spot.z);
  mesh.rotation.y = spot.yaw;
  scene.add(mesh);
});

// B. Moving Vehicles (Organized in distinct lanes with collision avoidance)
interface MovingConfig {
  type: VehicleType;
  color?: number;
  x: number;
  z: number;
  speed: number;
  direction: 'north' | 'south' | 'east' | 'west';
}

const movingConfigs: MovingConfig[] = [
  // Main Avenue Northbound lane (X = 3.6m, heading North towards -Z, spaced evenly by 70m)
  { type: 'danfo', color: 0xf7bf1f, x: 3.6, z: 120, speed: 13, direction: 'north' },
  { type: 'sedan', color: 0x2980b9, x: 3.6, z: 50,  speed: 13, direction: 'north' },
  { type: 'keke',  color: 0xf7bf1f, x: 3.6, z: -20, speed: 13, direction: 'north' },
  { type: 'danfo', color: 0xf7bf1f, x: 3.6, z: -90, speed: 13, direction: 'north' },
  { type: 'sedan', color: 0xe74c3c, x: 3.6, z: -160, speed: 13, direction: 'north' },

  // Main Avenue Southbound lane (X = -3.6m, heading South towards +Z, spaced evenly by 70m)
  { type: 'danfo', color: 0xf7bf1f, x: -3.6, z: -160, speed: 13, direction: 'south' },
  { type: 'sedan', color: 0x8e44ad, x: -3.6, z: -90,  speed: 13, direction: 'south' },
  { type: 'keke',  color: 0xf7bf1f, x: -3.6, z: -20,  speed: 13, direction: 'south' },
  { type: 'danfo', color: 0xf7bf1f, x: -3.6, z: 50,   speed: 13, direction: 'south' },
  { type: 'sedan', color: 0x27ae60, x: -3.6, z: 120,  speed: 13, direction: 'south' },

  // Connecting Street at Z = 0 (Eastbound Z = -3.2, Westbound Z = 3.2)
  { type: 'danfo', color: 0xf7bf1f, x: -80, z: -3.2, speed: 11, direction: 'east' },
  { type: 'sedan', color: 0xf39c12, x: 20,  z: -3.2, speed: 11, direction: 'east' },
  { type: 'keke',  color: 0xf7bf1f, x: 80,  z: 3.2,  speed: 11, direction: 'west' },
  { type: 'danfo', color: 0xf7bf1f, x: -20, z: 3.2,  speed: 11, direction: 'west' },

  // Connecting Street at Z = -80 (Eastbound & Westbound)
  { type: 'sedan', color: 0x34495e, x: -60, z: -83.2, speed: 11, direction: 'east' },
  { type: 'danfo', color: 0xf7bf1f, x: 60,  z: -76.8, speed: 11, direction: 'west' },

  // Connecting Street at Z = 80 (Eastbound & Westbound)
  { type: 'keke',  color: 0xf7bf1f, x: -60, z: 76.8, speed: 11, direction: 'east' },
  { type: 'sedan', color: 0x1abc9c, x: 60,  z: 83.2, speed: 11, direction: 'west' }
];

movingConfigs.forEach((cfg, idx) => {
  const mesh = createVehicle({ type: cfg.type, primaryColor: cfg.color });
  mesh.position.set(cfg.x, 0, cfg.z);

  let axis: 'x' | 'z' = 'z';
  let minBound = -180;
  let maxBound = 180;
  let laneCoord = cfg.x;
  const length = cfg.type === 'danfo' ? 5.2 : cfg.type === 'sedan' ? 4.5 : 2.5;

  if (cfg.direction === 'north') {
    mesh.rotation.y = Math.PI; // Heading -Z
    axis = 'z';
    laneCoord = cfg.x;
  } else if (cfg.direction === 'south') {
    mesh.rotation.y = 0; // Heading +Z
    axis = 'z';
    laneCoord = cfg.x;
  } else if (cfg.direction === 'east') {
    mesh.rotation.y = Math.PI / 2; // Heading +X
    axis = 'x';
    minBound = -140;
    maxBound = 140;
    laneCoord = cfg.z;
  } else if (cfg.direction === 'west') {
    mesh.rotation.y = -Math.PI / 2; // Heading -X
    axis = 'x';
    minBound = -140;
    maxBound = 140;
    laneCoord = cfg.z;
  }

  scene.add(mesh);
  trafficVehicles.push({
    id: idx,
    mesh,
    baseSpeed: cfg.speed,
    currentSpeed: cfg.speed,
    direction: cfg.direction,
    axis,
    minBound,
    maxBound,
    laneCoord,
    length
  });
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

// Player life state & position
let playerPos = new THREE.Vector3(11.2, 0.05, 16);
let playerYaw = Math.PI; // Looking down the bustling avenue sidewalk
const moveSpeed = 7.0;

let isDead = false;
let deathTimer = 0;
let deathVelocity = new THREE.Vector3();
const wastedScreenEl = document.getElementById('wasted-screen')!;

function killPlayer(hitCar: TrafficVehicle) {
  if (isDead) return;
  isDead = true;
  deathTimer = 2.5; // 2.5s respawn sequence

  // Calculate knockback impulse from hit car
  const carForward = new THREE.Vector3(0, 0, 0);
  if (hitCar.axis === 'z') {
    carForward.z = hitCar.direction === 'north' ? -1 : 1;
  } else {
    carForward.x = hitCar.direction === 'east' ? 1 : -1;
  }

  deathVelocity.copy(carForward).multiplyScalar(hitCar.currentSpeed * 0.9);
  deathVelocity.y = 4.5; // Pop up into air

  // Rotate player mesh backwards (knockdown)
  playerGroup.rotation.x = -Math.PI / 2;

  // Show WASTED overlay
  if (wastedScreenEl) {
    wastedScreenEl.style.display = 'flex';
    wastedScreenEl.style.opacity = '1';
  }
}

function respawnPlayer() {
  isDead = false;
  deathTimer = 0;
  deathVelocity.set(0, 0, 0);
  playerGroup.rotation.x = 0;
  playerGroup.rotation.z = 0;
  // Respawn safely on the curb sidewalk
  playerPos.set(11.2, 0.05, 16);
  playerYaw = Math.PI;

  if (wastedScreenEl) {
    wastedScreenEl.style.display = 'none';
  }
}

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

  // Walking Movement (W A S D) or Death ragdoll
  if (isDead) {
    deathTimer -= dt;
    // Apply gravity and drag to knocked-back player
    deathVelocity.y -= 15.0 * dt;
    playerPos.x += deathVelocity.x * dt;
    playerPos.y = Math.max(0.1, playerPos.y + deathVelocity.y * dt);
    playerPos.z += deathVelocity.z * dt;
    deathVelocity.x *= 0.96;
    deathVelocity.z *= 0.96;

    if (deathTimer <= 0) {
      respawnPlayer();
    }
  } else {
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

      // Check boundaries: on avenue + sidewalks (-13.5 to 13.5) OR on cross streets (near cross street Z, X between -140 and 140)
      const onCrossStreet = crossStreetZs.some((cz) => Math.abs(playerPos.z - cz) <= 7.0);
      if (!onCrossStreet) {
        playerPos.x = Math.max(-13.5, Math.min(13.5, playerPos.x));
      } else {
        playerPos.x = Math.max(-140.0, Math.min(140.0, playerPos.x));
      }
      playerPos.z = Math.max(-180.0, Math.min(180.0, playerPos.z));

      // Subtle curb elevation: when on sidewalk (|x| >= 10.0), step up to curb level (y = 0.05)
      const onSidewalk = Math.abs(playerPos.x) >= 10.0 && !onCrossStreet;
      playerPos.y = onSidewalk ? 0.05 : 0.0;
    }

    if (avatar) {
      avatar.updateAnimation(dt, isMoving, 1.2);
    }
  }

  playerGroup.position.copy(playerPos);
  if (!isDead) {
    playerGroup.rotation.y = playerYaw;
  }

  // Smooth Third-person chase camera follow relative to player's position
  const targetCamPos = new THREE.Vector3(
    playerPos.x,
    playerPos.y + 3.8,
    playerPos.z + 7.5
  );
  camera.position.lerp(targetCamPos, 0.12);
  camera.lookAt(playerPos.x, playerPos.y + 1.2, playerPos.z);

  // Check Hit Collision between Player and Moving Cars
  if (!isDead) {
    for (const v of trafficVehicles) {
      const dx = Math.abs(playerPos.x - v.mesh.position.x);
      const dz = Math.abs(playerPos.z - v.mesh.position.z);

      const hitWidth = v.axis === 'z' ? 1.4 : v.length / 2;
      const hitLength = v.axis === 'z' ? v.length / 2 : 1.4;

      if (dx < hitWidth && dz < hitLength && v.currentSpeed > 2.0) {
        killPlayer(v);
        break;
      }
    }
  }

  // Update Traffic Vehicles with Intelligent Collision Avoidance
  const SAFE_FOLLOW_DISTANCE = 16.0; // Minimum gap before slowing down
  const STOP_DISTANCE = 8.5;        // Full stop gap

  for (const v of trafficVehicles) {
    let targetSpeed = v.baseSpeed;

    // 1. Check for leading vehicle directly ahead in the same lane
    for (const other of trafficVehicles) {
      if (v.id === other.id) continue;

      // Must be on same axis and travel direction
      if (v.axis === other.axis && v.direction === other.direction && Math.abs(v.laneCoord - other.laneCoord) < 1.0) {
        let forwardDist = 999;

        if (v.direction === 'north') { // Moving towards -Z
          forwardDist = v.mesh.position.z - other.mesh.position.z;
        } else if (v.direction === 'south') { // Moving towards +Z
          forwardDist = other.mesh.position.z - v.mesh.position.z;
        } else if (v.direction === 'east') { // Moving towards +X
          forwardDist = other.mesh.position.x - v.mesh.position.x;
        } else if (v.direction === 'west') { // Moving towards -X
          forwardDist = v.mesh.position.x - other.mesh.position.x;
        }

        // If other car is ahead of us
        if (forwardDist > 0 && forwardDist < SAFE_FOLLOW_DISTANCE) {
          if (forwardDist < STOP_DISTANCE) {
            targetSpeed = 0; // Stop to prevent rear-ending
          } else {
            const ratio = (forwardDist - STOP_DISTANCE) / (SAFE_FOLLOW_DISTANCE - STOP_DISTANCE);
            targetSpeed = Math.min(targetSpeed, other.currentSpeed * ratio);
          }
        }
      }
    }

    // 2. Intersection Right-of-Way: Cross street vehicles yield if an avenue vehicle is passing
    if (v.axis === 'x') {
      const approachingIntersection = Math.abs(v.mesh.position.x) < 16.0;
      if (approachingIntersection) {
        // Check if an avenue car is inside the intersection box
        const avenueVehicleInCross = trafficVehicles.some(
          (av) => av.axis === 'z' && Math.abs(av.mesh.position.z - v.laneCoord) < 8.0 && Math.abs(av.mesh.position.x) < 7.0
        );
        if (avenueVehicleInCross) {
          targetSpeed = 0; // Yield right-of-way to main avenue traffic
        }
      }
    }

    // Smooth speed interpolation (gradual acceleration / braking)
    v.currentSpeed = THREE.MathUtils.lerp(v.currentSpeed, targetSpeed, dt * 5.0);

    // Apply movement
    if (v.axis === 'z') {
      if (v.direction === 'north') {
        v.mesh.position.z -= v.currentSpeed * dt;
        if (v.mesh.position.z < v.minBound) {
          v.mesh.position.z = v.maxBound;
        }
      } else {
        v.mesh.position.z += v.currentSpeed * dt;
        if (v.mesh.position.z > v.maxBound) {
          v.mesh.position.z = v.minBound;
        }
      }
    } else {
      if (v.direction === 'east') {
        v.mesh.position.x += v.currentSpeed * dt;
        if (v.mesh.position.x > v.maxBound) {
          v.mesh.position.x = v.minBound;
        }
      } else {
        v.mesh.position.x -= v.currentSpeed * dt;
        if (v.mesh.position.x < v.minBound) {
          v.mesh.position.x = v.maxBound;
        }
      }
    }
  }

  // Update Pedestrian NPCs along sidewalks
  for (const ped of pedestrians) {
    ped.z += ped.speed * ped.direction * dt;
    if (ped.direction === 1 && ped.z > ped.maxZ) {
      ped.direction = -1;
      ped.avatar.group.rotation.y = Math.PI;
    } else if (ped.direction === -1 && ped.z < ped.minZ) {
      ped.direction = 1;
      ped.avatar.group.rotation.y = 0;
    }
    ped.avatar.group.position.z = ped.z;
    ped.avatar.updateAnimation(dt, true, 1.0);
  }

  renderer.render(scene, camera);
}

animate();
