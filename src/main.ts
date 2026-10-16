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

// Collision Obstacle System for Physical Solid Objects
interface WorldCollider {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

const worldColliders: WorldCollider[] = [];

function registerObstacle(x: number, z: number, width: number, depth: number) {
  worldColliders.push({
    minX: x - width / 2,
    maxX: x + width / 2,
    minZ: z - depth / 2,
    maxZ: z + depth / 2
  });
}

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
  registerObstacle(11.5, crossZ + 9.5, 0.3, 0.3);

  const signPlate = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 0.6, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x1b5e20, roughness: 0.4 }) // Green Lagos street sign
  );
  signPlate.position.set(11.5, 3.8, crossZ + 9.5);
  signPlate.castShadow = true;
  scene.add(signPlate);
});

// Traffic Light System at Intersections
export type TrafficPhase = 'avenue_green' | 'avenue_yellow' | 'cross_green' | 'cross_yellow';

interface TrafficLightFixture {
  group: THREE.Group;
  facing: 'north' | 'south' | 'east' | 'west';
  intersectionZ: number;
  redMesh: THREE.Mesh;
  yellowMesh: THREE.Mesh;
  greenMesh: THREE.Mesh;
}

const trafficLights: TrafficLightFixture[] = [];

// Shared materials for traffic light lenses
const lightOffMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
const redOnMat = new THREE.MeshStandardMaterial({ color: 0xff2222, emissive: 0xff0000, emissiveIntensity: 2.2 });
const yellowOnMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, emissive: 0xffaa00, emissiveIntensity: 2.2 });
const greenOnMat = new THREE.MeshStandardMaterial({ color: 0x00ff66, emissive: 0x00dd44, emissiveIntensity: 2.2 });

function createTrafficLightPost(
  x: number,
  z: number,
  yaw: number,
  facing: 'north' | 'south' | 'east' | 'west',
  intersectionZ: number
) {
  const fixtureGroup = new THREE.Group();
  fixtureGroup.position.set(x, 0, z);
  fixtureGroup.rotation.y = yaw;

  // Solid vertical mast pole (5.2m tall)
  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.12, 5.2, 8),
    new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.5, metalness: 0.4 })
  );
  mast.position.y = 2.6;
  mast.castShadow = true;
  fixtureGroup.add(mast);
  registerObstacle(x, z, 0.4, 0.4);

  // Cantilever overhead arm extending over lane
  const arm = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.1, 2.4),
    new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.5, metalness: 0.4 })
  );
  arm.position.set(0, 4.9, 1.2);
  arm.castShadow = true;
  fixtureGroup.add(arm);

  // Traffic light housing box (Black with sun hoods)
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 1.3, 0.35),
    new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 })
  );
  box.position.set(0, 4.7, 2.2);
  box.castShadow = true;
  fixtureGroup.add(box);

  // Sun hoods (small visors above lenses)
  for (let visorY of [5.12, 4.72, 4.32]) {
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.05, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 })
    );
    visor.position.set(0, visorY, 2.38);
    fixtureGroup.add(visor);
  }

  // 3 Lenses: Red (top), Yellow (center), Green (bottom)
  const lensGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16);
  lensGeo.rotateX(Math.PI / 2);

  const redMesh = new THREE.Mesh(lensGeo, lightOffMat.clone());
  redMesh.position.set(0, 5.0, 2.36);
  fixtureGroup.add(redMesh);

  const yellowMesh = new THREE.Mesh(lensGeo, lightOffMat.clone());
  yellowMesh.position.set(0, 4.7, 2.36);
  fixtureGroup.add(yellowMesh);

  const greenMesh = new THREE.Mesh(lensGeo, lightOffMat.clone());
  greenMesh.position.set(0, 4.4, 2.36);
  fixtureGroup.add(greenMesh);

  scene.add(fixtureGroup);

  trafficLights.push({
    group: fixtureGroup,
    facing,
    intersectionZ,
    redMesh,
    yellowMesh,
    greenMesh
  });
}

// Build 4 traffic light posts around each intersection
crossStreetZs.forEach((crossZ) => {
  // 1. Southbound Avenue light (faces North, controls Southbound traffic coming from -Z towards +Z)
  createTrafficLightPost(-9.5, crossZ - 11.0, 0, 'south', crossZ);

  // 2. Northbound Avenue light (faces South, controls Northbound traffic coming from +Z towards -Z)
  createTrafficLightPost(9.5, crossZ + 11.0, Math.PI, 'north', crossZ);

  // 3. Eastbound Cross light (faces West, controls Eastbound traffic coming from -X towards +X)
  createTrafficLightPost(-11.0, crossZ + 9.5, Math.PI / 2, 'east', crossZ);

  // 4. Westbound Cross light (faces East, controls Westbound traffic coming from +X towards -X)
  createTrafficLightPost(11.0, crossZ - 9.5, -Math.PI / 2, 'west', crossZ);
});

// Traffic Light Controller State
// Phases:
// 1. avenue_green: Avenue cars go, cross street stops (10 seconds)
// 2. avenue_yellow: Avenue slows/stops, cross stays red (3 seconds)
// 3. cross_green: Cross street cars go, avenue stops (10 seconds)
// 4. cross_yellow: Cross street slows/stops, avenue stays red (3 seconds)
let trafficPhase: TrafficPhase = 'avenue_green';
let phaseTimer = 10.0;

function updateTrafficLights(dt: number) {
  phaseTimer -= dt;
  if (phaseTimer <= 0) {
    if (trafficPhase === 'avenue_green') {
      trafficPhase = 'avenue_yellow';
      phaseTimer = 3.0;
    } else if (trafficPhase === 'avenue_yellow') {
      trafficPhase = 'cross_green';
      phaseTimer = 10.0;
    } else if (trafficPhase === 'cross_green') {
      trafficPhase = 'cross_yellow';
      phaseTimer = 3.0;
    } else if (trafficPhase === 'cross_yellow') {
      trafficPhase = 'avenue_green';
      phaseTimer = 10.0;
    }
  }

  // Update lens visuals for each fixture
  for (const tl of trafficLights) {
    const isAvenue = tl.facing === 'north' || tl.facing === 'south';

    let rActive = false;
    let yActive = false;
    let gActive = false;

    if (isAvenue) {
      if (trafficPhase === 'avenue_green') {
        gActive = true;
      } else if (trafficPhase === 'avenue_yellow') {
        yActive = true;
      } else {
        rActive = true;
      }
    } else {
      if (trafficPhase === 'cross_green') {
        gActive = true;
      } else if (trafficPhase === 'cross_yellow') {
        yActive = true;
      } else {
        rActive = true;
      }
    }

    tl.redMesh.material = rActive ? redOnMat : lightOffMat;
    tl.yellowMesh.material = yActive ? yellowOnMat : lightOffMat;
    tl.greenMesh.material = gActive ? greenOnMat : lightOffMat;
  }
}

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
  registerObstacle(-18, zPos, w, d);

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
  registerObstacle(18, zPos, w, d);

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
    registerObstacle(xSide, z, 0.35, 0.35);

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
    registerObstacle(mx, mz, 1.8, 2.2);

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
    // Reserve (xStep = 26, cz = 0, north side: cz + 15) for Eko General Hospital
    if (cz === 0 && xStep === 26) continue;

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
    registerObstacle(xStep, cz + 15, w, d);

    // South side of cross street
    const bSouth = new THREE.Mesh(buildingGeo, buildingMat);
    bSouth.scale.set(w, h, d);
    bSouth.position.set(xStep, h / 2, cz - 15);
    bSouth.castShadow = true;
    bSouth.receiveShadow = true;
    scene.add(bSouth);
    registerObstacle(xStep, cz - 15, w, d);
  }
});

// EKO GENERAL HOSPITAL (Emergency Respawn Facility)
// Located at Broad Street Corner: X = 26, Z = 15
const hospitalGroup = new THREE.Group();
const hospW = 14;
const hospH = 12;
const hospD = 12;

// Main hospital whitewashed / modern clinic building
const hospBody = new THREE.Mesh(
  buildingGeo,
  new THREE.MeshStandardMaterial({ color: 0xe8edf0, roughness: 0.5, metalness: 0.1 })
);
hospBody.scale.set(hospW, hospH, hospD);
hospBody.position.set(26, hospH / 2, 15);
hospBody.castShadow = true;
hospBody.receiveShadow = true;
hospitalGroup.add(hospBody);
registerObstacle(26, 15, hospW, hospD);

// Hospital blue accent glass facade
const hospGlass = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 6),
  new THREE.MeshStandardMaterial({ color: 0x1b74e4, roughness: 0.1, metalness: 0.9 })
);
hospGlass.position.set(26, 6.5, 8.95);
hospitalGroup.add(hospGlass);

// Emergency Entrance Overhang Canopy
const canopyRoof = new THREE.Mesh(
  new THREE.BoxGeometry(6.4, 0.35, 3.2),
  new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.5 })
);
canopyRoof.position.set(26, 3.8, 7.4);
canopyRoof.castShadow = true;
hospitalGroup.add(canopyRoof);

// Canopy support pillars
for (let px of [23.2, 28.8]) {
  const pCol = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.12, 3.8, 8),
    new THREE.MeshStandardMaterial({ color: 0x2c3e50 })
  );
  pCol.position.set(px, 1.9, 6.0);
  pCol.castShadow = true;
  hospitalGroup.add(pCol);
  registerObstacle(px, 6.0, 0.4, 0.4);
}

// Glowing Red Cross Emblem above Emergency entrance
const redCrossMat = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  emissive: 0xff1111,
  emissiveIntensity: 2.5
});
const crossBarV = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, 0.15), redCrossMat);
crossBarV.position.set(26, 4.8, 8.9);
hospitalGroup.add(crossBarV);

const crossBarH = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.5, 0.15), redCrossMat);
crossBarH.position.set(26, 4.8, 8.9);
hospitalGroup.add(crossBarH);

// Hospital Signboard: "EKO GENERAL HOSPITAL - EMERGENCY"
const hospSign = new THREE.Mesh(
  new THREE.BoxGeometry(7.2, 0.8, 0.15),
  new THREE.MeshStandardMaterial({ color: 0x0984e3, roughness: 0.4 })
);
hospSign.position.set(26, 4.2, 7.35);
hospitalGroup.add(hospSign);

// Sliding Emergency Automatic Doors (Ground floor entrance)
const hospDoorMat = new THREE.MeshStandardMaterial({ color: 0x2d3436, roughness: 0.3, metalness: 0.8 });
const hospDoorL = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.6), hospDoorMat);
hospDoorL.position.set(25.1, 1.3, 8.95);
hospitalGroup.add(hospDoorL);

const hospDoorR = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.6), hospDoorMat);
hospDoorR.position.set(26.9, 1.3, 8.95);
hospitalGroup.add(hospDoorR);

// Parked Emergency Ambulance beside entrance
const ambulanceGroup = new THREE.Group();
ambulanceGroup.position.set(20.5, 0, 6.8);
ambulanceGroup.rotation.y = Math.PI / 2;

// Ambulance Van Body (White with red stripes)
const ambBody = new THREE.Mesh(
  new THREE.BoxGeometry(2.2, 1.8, 4.6),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
);
ambBody.position.y = 1.1;
ambBody.castShadow = true;
ambulanceGroup.add(ambBody);

// Red reflective side stripe
const ambStripe = new THREE.Mesh(
  new THREE.BoxGeometry(2.24, 0.35, 4.4),
  new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.4 })
);
ambStripe.position.y = 1.1;
ambulanceGroup.add(ambStripe);

// Flashing Emergency Siren Bar on roof
const sirenBar = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 0.2, 0.4),
  new THREE.MeshStandardMaterial({ color: 0x3498db, emissive: 0x0984e3, emissiveIntensity: 2.0 })
);
sirenBar.position.set(0, 2.1, 0.8);
ambulanceGroup.add(sirenBar);

hospitalGroup.add(ambulanceGroup);
registerObstacle(20.5, 6.8, 4.6, 2.2);

scene.add(hospitalGroup);

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

  const length = spot.type === 'danfo' ? 5.2 : spot.type === 'sedan' ? 4.5 : 2.5;
  const width = 2.4;
  // If vehicle is parked perpendicular (along cross streets, yaw approx +/- PI/2)
  const isPerp = Math.abs(Math.sin(spot.yaw)) > 0.5;
  registerObstacle(spot.x, spot.z, isPerp ? length : width, isPerp ? width : length);
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

// 6. Character Controls & Orbit Camera (Mouse Drag / Touch / Q & E)
const keys: Record<string, boolean> = {};
window.addEventListener('keydown', (e) => { keys[e.code] = true; });
window.addEventListener('keyup', (e) => { keys[e.code] = false; });

// Orbit Camera Angles & Distances
let cameraYaw = Math.PI; // In radians (starts looking North down the avenue)
let cameraPitch = 0.32;  // In radians (slight downward pitch)
let cameraDistance = 7.5;

let isDraggingCamera = false;
let previousPointerX = 0;
let previousPointerY = 0;

window.addEventListener('pointerdown', (e) => {
  // Ignore clicks on interactive UI if any
  isDraggingCamera = true;
  previousPointerX = e.clientX;
  previousPointerY = e.clientY;
});

window.addEventListener('pointermove', (e) => {
  if (!isDraggingCamera) return;
  const deltaX = e.clientX - previousPointerX;
  const deltaY = e.clientY - previousPointerY;
  previousPointerX = e.clientX;
  previousPointerY = e.clientY;

  // Horizontal orbit rotation (Yaw)
  cameraYaw -= deltaX * 0.005;

  // Vertical orbit pitch (clamped between 0.05 and 1.1 radians)
  cameraPitch = Math.max(0.05, Math.min(1.1, cameraPitch + deltaY * 0.004));
});

window.addEventListener('pointerup', () => {
  isDraggingCamera = false;
});

window.addEventListener('pointercancel', () => {
  isDraggingCamera = false;
});

// Mouse wheel zoom
window.addEventListener('wheel', (e) => {
  cameraDistance = Math.max(3.5, Math.min(15.0, cameraDistance + Math.sign(e.deltaY) * 0.8));
}, { passive: true });

// Player life state & position
let playerPos = new THREE.Vector3(11.2, 0.05, 16);
let playerYaw = Math.PI; // Looking down the bustling avenue sidewalk
const moveSpeed = 7.0;

let isDead = false;
let deathTimer = 0;
let deathVelocity = new THREE.Vector3();
const wastedScreenEl = document.getElementById('wasted-screen')!;

// 7. Lagos Hustle Task & Mission System (Living 2-Stage Pickup & Delivery)
export type MissionStage = 'pickup' | 'dropoff';

interface HustleMission {
  id: number;
  title: string;
  pickupDesc: string;
  dropoffDesc: string;
  pickupPos: THREE.Vector3;
  pickupLabel: string;
  dropoffPos: THREE.Vector3;
  dropoffLabel: string;
  reward: number;
  itemType: 'food' | 'parts' | 'tyre' | 'suya';
}

let playerEarnings = 0;
let completedDeliveries = 0;
let currentMissionIndex = 0;
let currentStage: MissionStage = 'pickup';

const missions: HustleMission[] = [
  {
    id: 1,
    title: 'Mama Bola Hot Jollof',
    pickupDesc: 'Pick up steaming Jollof Rice package from Mama Bola\'s East sidewalk food stall.',
    dropoffDesc: 'Deliver the hot food parcel safely across the avenue to the customer at Ojuelegba Kiosk.',
    pickupPos: new THREE.Vector3(11.2, 0.45, 25),
    pickupLabel: 'Mama Bola Food Stall',
    dropoffPos: new THREE.Vector3(-11.5, 0.45, -55),
    dropoffLabel: 'Ojuelegba Customer',
    reward: 5000,
    itemType: 'food'
  },
  {
    id: 2,
    title: 'Computer Village Spare Parts',
    pickupDesc: 'Collect electronic components from the electronics dealer at Broad Street cross road.',
    dropoffDesc: 'Rush the package to the phone repair vendor on West Avenue sidewalk before closing.',
    pickupPos: new THREE.Vector3(35.0, 0.45, 0),
    pickupLabel: 'Electronics Dealer',
    dropoffPos: new THREE.Vector3(-11.2, 0.45, 55),
    dropoffLabel: 'Phone Repair Vendor',
    reward: 7500,
    itemType: 'parts'
  },
  {
    id: 3,
    title: 'Danfo Vulcanizer Tyre Run',
    pickupDesc: 'Pick up a heavy patched tyre from the vulcanizer at Marina Road intersection.',
    dropoffDesc: 'Carry tyre to the stranded yellow Danfo bus waiting along the north avenue curb.',
    pickupPos: new THREE.Vector3(-35.0, 0.45, -80),
    pickupLabel: 'Vulcanizer Workshop',
    dropoffPos: new THREE.Vector3(7.5, 0.45, -40),
    dropoffLabel: 'Stranded Danfo Bus',
    reward: 10000,
    itemType: 'tyre'
  },
  {
    id: 4,
    title: 'VIP Glover Suya Express',
    pickupDesc: 'Pick up freshly grilled peppered Suya skewers wrapped in newspaper at South cross road.',
    dropoffDesc: 'Deliver the VIP order to the executive commercial office entrance.',
    pickupPos: new THREE.Vector3(42.0, 0.45, 80),
    pickupLabel: 'Mai Suya Spot',
    dropoffPos: new THREE.Vector3(14.0, 0.45, -20),
    dropoffLabel: 'Office Executive Plaza',
    reward: 12500,
    itemType: 'suya'
  }
];

// Web Audio synthesizer for crisp arcade chime sounds (no external files needed)
let audioCtx: AudioContext | null = null;
function playCashChime() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    // Cheerful high-pitch double cash register ding
    const t = audioCtx.currentTime;
    osc1.frequency.setValueAtTime(587.33, t); // D5
    osc1.frequency.setValueAtTime(880.00, t + 0.08); // A5
    osc1.frequency.setValueAtTime(1174.66, t + 0.16); // D6

    osc2.frequency.setValueAtTime(1174.66, t);
    osc2.frequency.setValueAtTime(1760.00, t + 0.16);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.5);
    osc2.stop(t + 0.5);
  } catch (e) {
    // Audio context silent fallback
  }
}

function playPickupChime() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const t = audioCtx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.2);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.25);
  } catch (e) {}
}

// 3D Carried Parcel Mesh attached to player's hands/chest
const parcelMesh = new THREE.Group();
const parcelBox = new THREE.Mesh(
  new THREE.BoxGeometry(0.42, 0.32, 0.42),
  new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.8 }) // Brown packaging box
);
parcelBox.position.set(0, 0.9, 0.32);
parcelBox.castShadow = true;
parcelMesh.add(parcelBox);

// Tape / string around parcel
const tapeH = new THREE.Mesh(
  new THREE.BoxGeometry(0.44, 0.06, 0.44),
  new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.5 })
);
tapeH.position.set(0, 0.9, 0.32);
parcelMesh.add(tapeH);

parcelMesh.visible = false;
playerGroup.add(parcelMesh);

// 3D Glowing Waypoint Beacon (Rotating Diamond, Pulsing Rings & Floating Particle Sparkles)
const beaconGroup = new THREE.Group();

// Outer spinning diamond
const diamondGeo = new THREE.OctahedronGeometry(0.7, 0);
const diamondMat = new THREE.MeshStandardMaterial({
  color: 0xf7bf1f,
  emissive: 0xf39c12,
  emissiveIntensity: 1.5,
  roughness: 0.2
});
const beaconDiamond = new THREE.Mesh(diamondGeo, diamondMat);
beaconDiamond.position.y = 1.9;
beaconDiamond.castShadow = true;
beaconGroup.add(beaconDiamond);

// Ground beacon pulse ring 1
const ringGeo1 = new THREE.RingGeometry(0.9, 1.25, 24);
const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xf7bf1f, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
const beaconRing1 = new THREE.Mesh(ringGeo1, ringMat1);
beaconRing1.rotation.x = -Math.PI / 2;
beaconRing1.position.y = 0.04;
beaconGroup.add(beaconRing1);

// Ground beacon pulse ring 2
const ringGeo2 = new THREE.RingGeometry(1.4, 1.6, 24);
const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x2ed573, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
const beaconRing2 = new THREE.Mesh(ringGeo2, ringMat2);
beaconRing2.rotation.x = -Math.PI / 2;
beaconRing2.position.y = 0.035;
beaconGroup.add(beaconRing2);

// Vertical Light Pillar Cylinder
const pillarGeo = new THREE.CylinderGeometry(0.18, 0.18, 12, 12);
const pillarMat = new THREE.MeshBasicMaterial({
  color: 0xf7bf1f,
  transparent: true,
  opacity: 0.25
});
const beaconPillar = new THREE.Mesh(pillarGeo, pillarMat);
beaconPillar.position.y = 6.0;
beaconGroup.add(beaconPillar);

scene.add(beaconGroup);

// HUD Elements
const taskTitleEl = document.getElementById('task-title');
const taskDescEl = document.getElementById('task-desc');
const taskStepEl = document.getElementById('task-step');
const taskRewardTagEl = document.getElementById('task-reward-tag');
const targetDistEl = document.getElementById('target-dist');
const walletBalanceEl = document.getElementById('wallet-balance');
const toastEl = document.getElementById('toast-notification');

function updateMissionHUD() {
  const current = missions[currentMissionIndex % missions.length];
  const isPickup = currentStage === 'pickup';
  const targetPos = isPickup ? current.pickupPos : current.dropoffPos;

  beaconGroup.position.copy(targetPos);

  // Color theme: Orange/Yellow for Pickup, Green for Dropoff
  if (isPickup) {
    diamondMat.color.setHex(0xf7bf1f);
    diamondMat.emissive.setHex(0xf39c12);
    ringMat1.color.setHex(0xf7bf1f);
    pillarMat.color.setHex(0xf7bf1f);
    parcelMesh.visible = false;
  } else {
    diamondMat.color.setHex(0x2ed573);
    diamondMat.emissive.setHex(0x26af5f);
    ringMat1.color.setHex(0x2ed573);
    pillarMat.color.setHex(0x2ed573);
    parcelMesh.visible = true; // Show parcel carried in player's hands!
  }

  if (taskTitleEl) taskTitleEl.textContent = current.title;
  if (taskDescEl) taskDescEl.textContent = isPickup ? current.pickupDesc : current.dropoffDesc;
  if (taskStepEl) {
    taskStepEl.textContent = isPickup ? `📦 STAGE 1: PICKUP (${current.pickupLabel})` : `🎯 STAGE 2: DELIVER (${current.dropoffLabel})`;
    taskStepEl.style.color = isPickup ? '#ff9f43' : '#2ed573';
  }
  if (taskRewardTagEl) taskRewardTagEl.textContent = `+₦${current.reward.toLocaleString()}`;
  if (walletBalanceEl) walletBalanceEl.textContent = `₦${playerEarnings.toLocaleString()}`;
}
updateMissionHUD();

function triggerStageTransition() {
  const current = missions[currentMissionIndex % missions.length];

  if (currentStage === 'pickup') {
    // Successfully collected item
    currentStage = 'dropoff';
    playPickupChime();

    if (toastEl) {
      toastEl.textContent = `📦 PACKAGE COLLECTED! NOW DELIVER TO ${current.dropoffLabel.toUpperCase()}`;
      toastEl.style.display = 'block';
      setTimeout(() => {
        toastEl.style.display = 'none';
      }, 2500);
    }
  } else {
    // Successfully delivered!
    playerEarnings += current.reward;
    completedDeliveries++;
    currentStage = 'pickup';
    currentMissionIndex++;
    playCashChime();

    if (toastEl) {
      toastEl.textContent = `+₦${current.reward.toLocaleString()} EARNED! ${current.title.toUpperCase()} COMPLETE!`;
      toastEl.style.display = 'block';
      setTimeout(() => {
        toastEl.style.display = 'none';
      }, 3500);
    }
  }

  updateMissionHUD();
}

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

  // Step out directly from the sliding Emergency doors of Eko General Hospital
  // Hospital entrance is at X = 26, Z = 8.95; player walks out facing forward towards the street (-Z)
  playerPos.set(26.0, 0.05, 8.2);
  playerYaw = Math.PI; // Looking outward from hospital towards cross street & ambulance
  cameraYaw = Math.PI; // Face camera looking forward down the hospital walkway

  if (wastedScreenEl) {
    wastedScreenEl.style.display = 'none';
  }

  // Display Hospital Discharge Notification
  if (toastEl) {
    toastEl.textContent = `🏥 DISCHARGED FROM EKO GENERAL HOSPITAL — BACK TO THE HUSTLE!`;
    toastEl.style.display = 'block';
    setTimeout(() => {
      toastEl.style.display = 'none';
    }, 3200);
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

  // Update dynamic traffic light cycles
  updateTrafficLights(dt);

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
    // Rotate camera view using Q and E keys
    if (keys['KeyQ']) cameraYaw += 1.8 * dt;
    if (keys['KeyE']) cameraYaw -= 1.8 * dt;

    let inputX = 0;
    let inputZ = 0;
    if (keys['KeyW'] || keys['ArrowUp']) inputZ -= 1;
    if (keys['KeyS'] || keys['ArrowDown']) inputZ += 1;
    if (keys['KeyA'] || keys['ArrowLeft']) inputX -= 1;
    if (keys['KeyD'] || keys['ArrowRight']) inputX += 1;

    const isMoving = inputX !== 0 || inputZ !== 0;

    if (isMoving) {
      // Calculate world movement vectors relative to camera view angle
      const forwardAngle = cameraYaw + Math.PI;
      const forwardX = Math.sin(forwardAngle);
      const forwardZ = Math.cos(forwardAngle);

      const rightX = -forwardZ;
      const rightZ = forwardX;

      const norm = Math.hypot(inputX, inputZ);
      const dirForward = -inputZ / norm; // W is forward
      const dirRight = inputX / norm;    // D is right

      const moveX = forwardX * dirForward + rightX * dirRight;
      const moveZ = forwardZ * dirForward + rightZ * dirRight;

      playerYaw = Math.atan2(moveX, moveZ);

      const targetDeltaX = moveX * moveSpeed * dt;
      const targetDeltaZ = moveZ * moveSpeed * dt;

      // Candidate new position
      let nextX = playerPos.x + targetDeltaX;
      let nextZ = playerPos.z + targetDeltaZ;

      // Player physical collision radius
      const PLAYER_RADIUS = 0.45;

      // Helper to check if a circle at (cx, cz) overlaps any registered solid obstacle
      function collidesWithObstacles(cx: number, cz: number): boolean {
        for (const obs of worldColliders) {
          if (
            cx + PLAYER_RADIUS > obs.minX &&
            cx - PLAYER_RADIUS < obs.maxX &&
            cz + PLAYER_RADIUS > obs.minZ &&
            cz - PLAYER_RADIUS < obs.maxZ
          ) {
            return true;
          }
        }
        return false;
      }

      // Check collision on X axis (allows sliding along walls)
      if (!collidesWithObstacles(nextX, playerPos.z)) {
        playerPos.x = nextX;
      }
      // Check collision on Z axis (allows sliding along walls)
      if (!collidesWithObstacles(playerPos.x, nextZ)) {
        playerPos.z = nextZ;
      }

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

  // Smooth Orbit Third-person camera follow relative to player's position
  const camHorizontalDist = cameraDistance * Math.cos(cameraPitch);
  const camVerticalOffset = cameraDistance * Math.sin(cameraPitch);

  const targetCamPos = new THREE.Vector3(
    playerPos.x + Math.sin(cameraYaw) * camHorizontalDist,
    playerPos.y + 1.2 + camVerticalOffset,
    playerPos.z + Math.cos(cameraYaw) * camHorizontalDist
  );

  camera.position.lerp(targetCamPos, 0.15);
  camera.lookAt(playerPos.x, playerPos.y + 1.3, playerPos.z);

  // Check Hit Collision between Player and Moving Cars
  if (!isDead) {
    for (const v of trafficVehicles) {
      const dx = Math.abs(playerPos.x - v.mesh.position.x);
      const dz = Math.abs(playerPos.z - v.mesh.position.z);

      const hitWidth = v.axis === 'z' ? 1.8 : v.length / 2 + 0.4;
      const hitLength = v.axis === 'z' ? v.length / 2 + 0.4 : 1.8;

      if (dx < hitWidth && dz < hitLength && v.currentSpeed > 1.5) {
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

    // 2. Traffic Light Compliance at Intersections
    const isAvenueLightRedOrYellow = trafficPhase === 'cross_green' || trafficPhase === 'cross_yellow';
    const isCrossLightRedOrYellow = trafficPhase === 'avenue_green' || trafficPhase === 'avenue_yellow';

    for (const cz of crossStreetZs) {
      if (v.axis === 'z') {
        // Vehicle moving on Main Avenue
        if (isAvenueLightRedOrYellow) {
          if (v.direction === 'north') {
            // Heading north (Z decreases). Stop line is at cz + 11.5
            const distToStop = v.mesh.position.z - (cz + 11.5);
            if (distToStop > 0 && distToStop < 16.0) {
              if (distToStop < 3.0) {
                targetSpeed = 0;
              } else {
                targetSpeed = Math.min(targetSpeed, v.baseSpeed * (distToStop / 16.0));
              }
            }
          } else if (v.direction === 'south') {
            // Heading south (Z increases). Stop line is at cz - 11.5
            const distToStop = (cz - 11.5) - v.mesh.position.z;
            if (distToStop > 0 && distToStop < 16.0) {
              if (distToStop < 3.0) {
                targetSpeed = 0;
              } else {
                targetSpeed = Math.min(targetSpeed, v.baseSpeed * (distToStop / 16.0));
              }
            }
          }
        }
      } else if (v.axis === 'x' && Math.abs(v.laneCoord - cz) < 2.0) {
        // Vehicle moving on Cross Street at this intersection
        if (isCrossLightRedOrYellow) {
          if (v.direction === 'east') {
            // Heading east (X increases). Stop line is at X = -11.5
            const distToStop = -11.5 - v.mesh.position.x;
            if (distToStop > 0 && distToStop < 16.0) {
              if (distToStop < 3.0) {
                targetSpeed = 0;
              } else {
                targetSpeed = Math.min(targetSpeed, v.baseSpeed * (distToStop / 16.0));
              }
            }
          } else if (v.direction === 'west') {
            // Heading west (X decreases). Stop line is at X = 11.5
            const distToStop = v.mesh.position.x - 11.5;
            if (distToStop > 0 && distToStop < 16.0) {
              if (distToStop < 3.0) {
                targetSpeed = 0;
              } else {
                targetSpeed = Math.min(targetSpeed, v.baseSpeed * (distToStop / 16.0));
              }
            }
          }
        }
      }
    }

    // 3. Intersection Right-of-Way Safety Guard (prevents collisions in case a vehicle clears late)
    if (v.axis === 'x') {
      const approachingIntersection = Math.abs(v.mesh.position.x) < 14.0;
      if (approachingIntersection) {
        // Check if an avenue car is inside the intersection box
        const avenueVehicleInCross = trafficVehicles.some(
          (av) => av.axis === 'z' && Math.abs(av.mesh.position.z - v.laneCoord) < 8.0 && Math.abs(av.mesh.position.x) < 6.0
        );
        if (avenueVehicleInCross) {
          targetSpeed = 0; // Yield right-of-way
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

  // Update Mission Waypoint Beacon & Distance
  if (beaconDiamond) {
    beaconDiamond.rotation.y += dt * 2.5;
    beaconDiamond.position.y = 1.9 + Math.sin(now * 0.005) * 0.25;
  }
  if (beaconRing1) {
    const scale1 = 1.0 + Math.sin(now * 0.006) * 0.15;
    beaconRing1.scale.set(scale1, scale1, 1);
  }
  if (beaconRing2) {
    const scale2 = 1.0 + Math.cos(now * 0.006) * 0.18;
    beaconRing2.scale.set(scale2, scale2, 1);
  }

  // Calculate distance to current mission objective
  const currentMission = missions[currentMissionIndex % missions.length];
  const targetPos = currentStage === 'pickup' ? currentMission.pickupPos : currentMission.dropoffPos;
  const distToTarget = playerPos.distanceTo(targetPos);
  if (targetDistEl) {
    targetDistEl.textContent = `📍 ${Math.round(distToTarget)}m`;
  }

  // Check objective arrival / completion (within 2.8m of beacon)
  if (!isDead && distToTarget < 2.8) {
    triggerStageTransition();
  }

  renderer.render(scene, camera);
}

animate();
