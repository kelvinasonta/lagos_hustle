import * as THREE from 'three';
import { AvatarGenerator } from './character/AvatarGenerator';
import { askStartNg, WhoAmIReply, StartNgUser } from './net/startng';
import { createVehicle, VehicleType } from './vehicles/DanfoGenerator';
import { lagosAudio } from './audio/LagosAudio';

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

// Main Avenue (Z-axis, width 20m, length 600m)
const mainRoad = new THREE.Mesh(new THREE.PlaneGeometry(20, 600), roadMat);
mainRoad.rotation.x = -Math.PI / 2;
mainRoad.receiveShadow = true;
scene.add(mainRoad);

// Sidewalks along Main Avenue (West and East curbs)
const sidewalkWest = new THREE.Mesh(new THREE.PlaneGeometry(4, 600), sidewalkMat);
sidewalkWest.rotation.x = -Math.PI / 2;
sidewalkWest.position.set(-12, 0.04, 0);
sidewalkWest.receiveShadow = true;
scene.add(sidewalkWest);

const sidewalkEast = new THREE.Mesh(new THREE.PlaneGeometry(4, 600), sidewalkMat);
sidewalkEast.rotation.x = -Math.PI / 2;
sidewalkEast.position.set(12, 0.04, 0);
sidewalkEast.receiveShadow = true;
scene.add(sidewalkEast);

// Main road yellow centerline
const mainCenterLine = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 600), lineMat);
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

// Connecting cross streets (5 Intersections across sprawling city: Marina North, Broad St, CMS Central, Ojuelegba, Glover South)
const crossStreetZs = [-160, -80, 0, 80, 160];
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

  // Street Name Signs / Boards at Corners
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

// 4. Bustling City Infrastructure: Realistic Lagos Urban Architecture & Storefronts
const buildingGeo = new THREE.BoxGeometry(1, 1, 1);

// Curated architectural material palette
const concreteMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.8 }); // Modern white/grey plaster
const ochreMat = new THREE.MeshStandardMaterial({ color: 0xe1b12c, roughness: 0.85 }); // Warm ochre Nigerian stucco
const brickMat = new THREE.MeshStandardMaterial({ color: 0xb33927, roughness: 0.9 }); // Red laterite brick
const tealCommercialMat = new THREE.MeshStandardMaterial({ color: 0x1e3799, roughness: 0.6 }); // Banking corporate blue
const bankMat = new THREE.MeshStandardMaterial({ color: 0x4a69bd, roughness: 0.4, metalness: 0.2 });
const warmSandMat = new THREE.MeshStandardMaterial({ color: 0xf8c291, roughness: 0.8 }); // Tropical Lagos sand paint

const buildingMaterials = [concreteMat, ochreMat, brickMat, tealCommercialMat, bankMat, warmSandMat];

// Window glass & trim materials
const glassWindowMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.15, metalness: 0.85 });
const glowingWindowMat = new THREE.MeshStandardMaterial({
  color: 0xfffa65,
  emissive: 0xffd32a,
  emissiveIntensity: 0.6,
  roughness: 0.3
});
const acUnitMat = new THREE.MeshStandardMaterial({ color: 0xd2dae2, roughness: 0.5 });
const waterTankMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.4 }); // Black GeePee plastic water tank
const awningMats = [
  new THREE.MeshStandardMaterial({ color: 0xeb2f06, roughness: 0.6 }), // Red canvas
  new THREE.MeshStandardMaterial({ color: 0x10ac84, roughness: 0.6 }), // Green canvas
  new THREE.MeshStandardMaterial({ color: 0xfa8231, roughness: 0.6 }), // Orange canvas
  new THREE.MeshStandardMaterial({ color: 0x2e86de, roughness: 0.6 })  // Blue canvas
];

// Billboard / Signboard vibrant Lagos brand colors
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

// Function to construct a rich Lagos building with architectural details
function createDetailedBuilding(x: number, z: number, w: number, h: number, d: number, facingSide: 'west' | 'east') {
  const bGroup = new THREE.Group();
  const matIndex = Math.floor(Math.abs(z * 7 + x * 3)) % buildingMaterials.length;
  const primaryMat = buildingMaterials[matIndex];

  // 1. Main structure block
  const mainBlock = new THREE.Mesh(buildingGeo, primaryMat);
  mainBlock.scale.set(w, h, d);
  mainBlock.position.set(0, h / 2, 0);
  mainBlock.castShadow = true;
  mainBlock.receiveShadow = true;
  bGroup.add(mainBlock);

  // 2. Decorative parapet roof rim (Lagos flat roof style)
  const parapetH = 0.6;
  const parapet = new THREE.Mesh(
    new THREE.BoxGeometry(w + 0.3, parapetH, d + 0.3),
    new THREE.MeshStandardMaterial({ color: 0x2f3542, roughness: 0.7 })
  );
  parapet.position.set(0, h + parapetH / 2, 0);
  parapet.castShadow = true;
  bGroup.add(parapet);

  // 3. Ground Floor Storefront Glass & Entrance
  const streetXOffset = facingSide === 'west' ? (w / 2 + 0.05) : -(w / 2 + 0.05);
  const rotationY = facingSide === 'west' ? Math.PI / 2 : -Math.PI / 2;

  const shopGlass = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.75, 3.4), glassWindowMat);
  shopGlass.position.set(streetXOffset, 2.0, 0);
  shopGlass.rotation.y = rotationY;
  bGroup.add(shopGlass);

  // Ground floor fabric storefront awning (sheltering sidewalk from sun/rain)
  const awningMat = awningMats[Math.floor(Math.abs(z + x)) % awningMats.length];
  const awning = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.12, w * 0.8),
    awningMat
  );
  awning.rotation.z = facingSide === 'west' ? 0.35 : -0.35;
  awning.position.set(facingSide === 'west' ? (w / 2 + 0.5) : -(w / 2 + 0.5), 3.8, 0);
  awning.castShadow = true;
  bGroup.add(awning);

  // 4. Upper Floors: Multi-Story Window Grids & Balconies
  const numFloors = Math.floor((h - 4.5) / 3.0);
  for (let f = 0; f < numFloors; f++) {
    const floorY = 5.2 + f * 3.0;

    // Window bays along the street facade
    for (let bay = -2; bay <= 2; bay++) {
      if (bay === 0 && h > 20) continue; // Architectural pillar gap on taller towers
      const bayZ = bay * 1.5;
      const isLit = (bay + f + Math.abs(z)) % 3 === 0;

      const win = new THREE.Mesh(
        new THREE.PlaneGeometry(1.0, 1.4),
        isLit ? glowingWindowMat : glassWindowMat
      );
      win.position.set(streetXOffset, floorY, bayZ);
      win.rotation.y = rotationY;
      bGroup.add(win);

      // Window sill / sun shade ledge (brise-soleil tropical architecture)
      const sill = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.08, 1.2),
        concreteMat
      );
      sill.position.set(streetXOffset + (facingSide === 'west' ? 0.1 : -0.1), floorY - 0.72, bayZ);
      bGroup.add(sill);

      // Air Conditioner Condenser Box on select windows (Ubiquitous Lagos street detail)
      if ((f + bay) % 4 === 1) {
        const ac = new THREE.Mesh(
          new THREE.BoxGeometry(0.45, 0.4, 0.65),
          acUnitMat
        );
        ac.position.set(
          streetXOffset + (facingSide === 'west' ? 0.22 : -0.22),
          floorY - 0.45,
          bayZ + 0.35
        );
        ac.castShadow = true;
        bGroup.add(ac);
      }
    }
  }

  // 5. Rooftop Equipment: GeePee Black Plastic Water Tanks & TV Antennas
  const tank = new THREE.Mesh(
    new THREE.CylinderGeometry(0.85, 0.85, 1.6, 12),
    waterTankMat
  );
  tank.position.set((facingSide === 'west' ? -1 : 1) * (w * 0.2), h + 0.8, -d * 0.2);
  tank.castShadow = true;
  bGroup.add(tank);

  // Communications / Cell antenna mast on select tall roofs
  if (h > 24) {
    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.08, 5.0, 6),
      new THREE.MeshStandardMaterial({ color: 0x95a5a6, metalness: 0.8 })
    );
    mast.position.set(0, h + 2.5, d * 0.2);
    mast.castShadow = true;
    bGroup.add(mast);
  }

  // 6. Rooftop Brand Billboards on prime avenue facades
  if (Math.abs(z) % 24 < 10 && h > 16) {
    const bbMat = billboardMats[Math.floor(Math.abs(z)) % billboardMats.length];
    const bbFrame = new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.2, 6.8), bbMat);
    bbFrame.position.set(facingSide === 'west' ? (w / 2 - 0.5) : -(w / 2 - 0.5), h + 1.8, 0);
    bbFrame.castShadow = true;
    bGroup.add(bbFrame);
  }

  bGroup.position.set(x, 0, z);
  scene.add(bGroup);
  registerObstacle(x, z, w, d);
}

// Generate buildings along Main Avenue (West and East street walls across expanded 600m city)
for (let i = 0; i < 48; i++) {
  const zPos = -235 + i * 10;
  if (isNearIntersection(zPos)) continue; // Keep intersection corners open

  const h = 14 + ((i * 13) % 24);
  const w = 11;
  const d = 8.5;

  // West side building (facing east toward avenue)
  createDetailedBuilding(-18, zPos, w, h, d, 'west');

  // East side building (facing west toward avenue)
  createDetailedBuilding(18, zPos, w, h, d, 'east');
}

// Street Light Poles along Sidewalks (spanning entire 600m avenue)
for (let z = -240; z <= 240; z += 24) {
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
    const matNorth = buildingMaterials[Math.abs(xStep + cz) % buildingMaterials.length];
    const matSouth = buildingMaterials[(Math.abs(xStep - cz) + 1) % buildingMaterials.length];

    // North side of cross street (facing south toward cross road)
    const bNorthGroup = new THREE.Group();
    const bNorth = new THREE.Mesh(buildingGeo, matNorth);
    bNorth.scale.set(w, h, d);
    bNorth.position.set(0, h / 2, 0);
    bNorth.castShadow = true;
    bNorth.receiveShadow = true;
    bNorthGroup.add(bNorth);

    // North ground shop window
    const shopWinN = new THREE.Mesh(new THREE.PlaneGeometry(8, 2.8), glassWindowMat);
    shopWinN.position.set(0, 1.8, -d / 2 - 0.05);
    bNorthGroup.add(shopWinN);

    // North upper windows
    const numFloorsN = Math.floor((h - 4) / 3.0);
    for (let f = 0; f < numFloorsN; f++) {
      for (let bay = -2; bay <= 2; bay++) {
        const isLit = (f + bay) % 2 === 0;
        const win = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.2), isLit ? glowingWindowMat : glassWindowMat);
        win.position.set(bay * 2.0, 4.5 + f * 2.8, -d / 2 - 0.05);
        bNorthGroup.add(win);
      }
    }

    // Rooftop water tank
    const tankN = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.4, 8), waterTankMat);
    tankN.position.set(2.5, h + 0.7, 0);
    bNorthGroup.add(tankN);

    bNorthGroup.position.set(xStep, 0, cz + 15);
    scene.add(bNorthGroup);
    registerObstacle(xStep, cz + 15, w, d);

    // South side of cross street (facing north toward cross road)
    const bSouthGroup = new THREE.Group();
    const bSouth = new THREE.Mesh(buildingGeo, matSouth);
    bSouth.scale.set(w, h, d);
    bSouth.position.set(0, h / 2, 0);
    bSouth.castShadow = true;
    bSouth.receiveShadow = true;
    bSouthGroup.add(bSouth);

    // South ground shop window
    const shopWinS = new THREE.Mesh(new THREE.PlaneGeometry(8, 2.8), glassWindowMat);
    shopWinS.position.set(0, 1.8, d / 2 + 0.05);
    shopWinS.rotation.y = Math.PI;
    bSouthGroup.add(shopWinS);

    // South upper windows
    const numFloorsS = Math.floor((h - 4) / 3.0);
    for (let f = 0; f < numFloorsS; f++) {
      for (let bay = -2; bay <= 2; bay++) {
        const isLit = (f + bay + 1) % 2 === 0;
        const win = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.2), isLit ? glowingWindowMat : glassWindowMat);
        win.position.set(bay * 2.0, 4.5 + f * 2.8, d / 2 + 0.05);
        win.rotation.y = Math.PI;
        bSouthGroup.add(win);
      }
    }

    // Rooftop water tank
    const tankS = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.4, 8), waterTankMat);
    tankS.position.set(-2.5, h + 0.7, 0);
    bSouthGroup.add(tankS);

    bSouthGroup.position.set(xStep, 0, cz - 15);
    scene.add(bSouthGroup);
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

// A. Parked & Ridable Vehicles along Main Avenue & Cross Streets
interface RidableVehicle {
  id: number;
  type: VehicleType;
  mesh: THREE.Group;
  pos: THREE.Vector3;
  yaw: number;
  speed: number;
  maxSpeed: number;
  turnSpeed: number;
  colliderIndex?: number;
}

const ridableVehicles: RidableVehicle[] = [];

// Parked spot configs (includes Bicycles, Okada Scooters, Danfo Buses, Sedans, Kekes)
interface ParkedSpot {
  id: number;
  x: number;
  z: number;
  yaw: number;
  type: VehicleType;
  color?: number;
}

const parkedSpots: ParkedSpot[] = [
  // Bicycles on Sidewalks / Curbs for immediate dispatch
  { id: 1, x: 10.8, z: 20, yaw: Math.PI, type: 'bicycle', color: 0x2ed573 },
  { id: 2, x: -10.8, z: -20, yaw: 0, type: 'bicycle', color: 0x3498db },
  { id: 3, x: 10.8, z: -70, yaw: Math.PI, type: 'bicycle', color: 0xe67e22 },

  // Dispatch Motor Scooters (Okada with rear parcel boxes)
  { id: 4, x: -7.6, z: 22, yaw: 0, type: 'scooter', color: 0xe74c3c },
  { id: 5, x: 7.6, z: -25, yaw: Math.PI, type: 'scooter', color: 0xf39c12 },
  { id: 6, x: -7.6, z: 95, yaw: 0, type: 'scooter', color: 0x9b59b6 },

  // West curbs of Main Avenue (parallel parked)
  { id: 7, x: -7.5, z: 45, yaw: 0, type: 'danfo', color: 0xf7bf1f },
  { id: 8, x: -7.5, z: 70, yaw: 0, type: 'sedan', color: 0x2c3e50 },
  { id: 9, x: -7.5, z: -45, yaw: 0, type: 'keke', color: 0xf7bf1f },
  { id: 10, x: -7.5, z: -110, yaw: 0, type: 'danfo', color: 0xf7bf1f },

  // East curbs of Main Avenue
  { id: 11, x: 7.5, z: 50, yaw: Math.PI, type: 'sedan', color: 0xb5502d },
  { id: 12, x: 7.5, z: -45, yaw: Math.PI, type: 'danfo', color: 0xf7bf1f },
  { id: 13, x: 7.5, z: -115, yaw: Math.PI, type: 'keke', color: 0xf7bf1f },

  // Parked along Connecting Cross Streets
  { id: 14, x: 35, z: 5.5, yaw: Math.PI / 2, type: 'danfo', color: 0xf7bf1f },
  { id: 15, x: -35, z: -5.5, yaw: -Math.PI / 2, type: 'sedan', color: 0x16a085 },
  { id: 16, x: 50, z: -74.5, yaw: Math.PI / 2, type: 'keke', color: 0xf7bf1f },
  { id: 17, x: -50, z: -85.5, yaw: -Math.PI / 2, type: 'danfo', color: 0xf7bf1f },
  { id: 18, x: 42, z: 85.5, yaw: Math.PI / 2, type: 'sedan', color: 0xd35400 },
];

parkedSpots.forEach((spot) => {
  const mesh = createVehicle({ type: spot.type, primaryColor: spot.color });
  mesh.position.set(spot.x, 0, spot.z);
  mesh.rotation.y = spot.yaw;
  scene.add(mesh);

  // Determine physical parameters based on ride type
  let maxSpd = 16.0;
  let trnSpd = 2.4;
  if (spot.type === 'bicycle') {
    maxSpd = 11.0;
    trnSpd = 3.2;
  } else if (spot.type === 'scooter') {
    maxSpd = 18.0;
    trnSpd = 2.8;
  } else if (spot.type === 'danfo') {
    maxSpd = 17.0;
    trnSpd = 1.8;
  } else if (spot.type === 'keke') {
    maxSpd = 13.0;
    trnSpd = 2.6;
  }

  ridableVehicles.push({
    id: spot.id,
    type: spot.type,
    mesh,
    pos: new THREE.Vector3(spot.x, 0, spot.z),
    yaw: spot.yaw,
    speed: 0,
    maxSpeed: maxSpd,
    turnSpeed: trnSpd
  });
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

// Fetch start.ng identity & display player profile card
async function initIdentity() {
  try {
    // 1. Pick up game session if redirected from sign-in
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const sessionToken = hashParams.get('startng_session');
    if (sessionToken) {
      sessionStorage.setItem('startng_session', sessionToken);
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const savedSession = sessionStorage.getItem('startng_session');
    let fetchedUser: StartNgUser | null = null;

    // 2. Try the HTTP API if session token is present
    if (savedSession) {
      try {
        const gameName = window.location.hostname.split('.')[0] || 'lagos-hustle';
        const res = await fetch(`https://api.start.ng/games/${gameName}/player`, {
          headers: { Authorization: `Bearer ${savedSession}` }
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.style) {
            fetchedUser = {
              id: data.id,
              name: data.name,
              account: data.name.toLowerCase().replace(/\s+/g, '_'),
              style: data.style,
              face: data.face || ''
            };
          }
        }
      } catch (err) {
        console.warn('Direct start.ng player session fetch error:', err);
      }
    }

    // 3. Query via the connect iframe postMessage protocol
    if (!fetchedUser) {
      const reply = await askStartNg<WhoAmIReply>({ type: 'startng:whoami' }, 'startng:user', 5000);
      fetchedUser = reply?.user ?? reply?.guest ?? null;
      if (reply?.user?.account && fetchedUser) {
        fetchedUser.account = reply.user.account;
      }
    }

    // 4. Update 3D avatar & HUD card if player or guest was received
    if (fetchedUser) {
      currentUser = fetchedUser;
      rebuildAvatar(fetchedUser);

      const cardEl = document.getElementById('player-card');
      const faceEl = document.getElementById('player-face') as HTMLImageElement;
      const nameEl = document.getElementById('player-name');
      const accEl = document.getElementById('player-account');
      const signinBtn = document.getElementById('player-sign-in');
      if (cardEl && faceEl && nameEl && accEl) {
        if (fetchedUser.face) faceEl.src = fetchedUser.face;
        nameEl.textContent = fetchedUser.name || 'Lagos Hustler';
        accEl.textContent = fetchedUser.account ? `@${fetchedUser.account}` : 'Guest';
        if (signinBtn) {
          const isSignedIn = !!(savedSession || fetchedUser.id !== 0);
          signinBtn.style.display = isSignedIn ? 'none' : 'inline-block';
          signinBtn.onclick = () => {
            window.location.href = `https://start.ng/?return_to=${encodeURIComponent(window.location.origin + window.location.pathname)}`;
          };
        }
        cardEl.style.display = 'flex';
      }
    }
  } catch (err) {
    console.error('initIdentity failure:', err);
  }
}
initIdentity();
window.addEventListener('focus', () => { initIdentity(); });
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') initIdentity();
});

// 6. Character Controls & Orbit Camera (Mouse Drag / Touch / Q & E)
let isGameStarted = false;
const introScreenEl = document.getElementById('intro-screen');
const introStartBtn = document.getElementById('intro-start-btn');

function startGame() {
  if (isGameStarted) return;
  isGameStarted = true;
  lagosAudio.playIntroJingle();
  setTimeout(() => lagosAudio.playDanfoHorn(), 350);
  if (introScreenEl) {
    introScreenEl.classList.add('fade-out');
    setTimeout(() => {
      introScreenEl.style.display = 'none';
    }, 850);
  }
}

introStartBtn?.addEventListener('click', () => {
  startGame();
});

const keys: Record<string, boolean> = {};
window.addEventListener('keydown', (e) => {
  if (!isGameStarted && (e.code === 'Space' || e.code === 'Enter')) {
    startGame();
    return;
  }
  keys[e.code] = true;
});
window.addEventListener('keyup', (e) => { keys[e.code] = false; });

// Orbit Camera Angles & Distances
let cameraYaw = Math.PI; // In radians (starts looking North down the avenue)
let cameraPitch = 0.32;  // In radians (slight downward pitch)
let cameraDistance = 7.5;

let isDraggingCamera = false;
let previousPointerX = 0;
let previousPointerY = 0;

window.addEventListener('pointerdown', (e) => {
  if (!isGameStarted) return;
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

// Vehicle riding state (Walk, Bicycle, Scooter, Danfo, Keke, Sedan)
let currentVehicle: RidableVehicle | null = null;
const vehiclePromptEl = document.getElementById('vehicle-prompt');

// E key listener for Mounting / Dismounting vehicles, H key for Horn / Bell
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyE') {
    if (currentVehicle) {
      // Dismount vehicle
      dismountCurrentVehicle();
    } else {
      // Check nearest vehicle within mounting range (3.2m)
      const nearby = getNearestRidableVehicle(3.2);
      if (nearby) {
        mountVehicle(nearby);
      }
    }
  } else if (e.code === 'KeyH') {
    soundHornOrBell();
  }
});

function soundHornOrBell() {
  if (currentVehicle) {
    if (currentVehicle.type === 'bicycle') {
      lagosAudio.playBicycleBell();
    } else {
      lagosAudio.playDanfoHorn();
    }
  } else {
    // On foot, whistle/holler horn
    lagosAudio.playDanfoHorn();
  }
}

function getNearestRidableVehicle(maxDist = 3.2): RidableVehicle | null {
  let closest: RidableVehicle | null = null;
  let minD = maxDist;
  for (const v of ridableVehicles) {
    const d = playerPos.distanceTo(v.pos);
    if (d < minD) {
      minD = d;
      closest = v;
    }
  }
  return closest;
}

function mountVehicle(v: RidableVehicle) {
  currentVehicle = v;
  // Position player directly on driver/rider seat
  playerPos.copy(v.pos);
  playerYaw = v.yaw;

  // Elevate player position slightly to sit/stand properly
  if (v.type === 'bicycle' || v.type === 'scooter') {
    playerPos.y = 0.2;
  } else {
    playerPos.y = 0.4;
  }

  const name = v.type === 'bicycle' ? 'DISPATCH BICYCLE' : v.type === 'scooter' ? 'OKADA SCOOTER' : v.type === 'danfo' ? 'DANFO BUS' : v.type === 'keke' ? 'KEKE NAPEP' : 'SEDAN CAR';
  if (toastEl) {
    toastEl.textContent = `🚀 MOUNTED ${name}! PRESS [E] TO DISMOUNT`;
    toastEl.style.display = 'block';
    setTimeout(() => {
      toastEl.style.display = 'none';
    }, 2500);
  }
}

function dismountCurrentVehicle() {
  if (!currentVehicle) return;
  // Step safely to the side
  playerPos.x += Math.sin(playerYaw + Math.PI / 2) * 1.5;
  playerPos.y = 0.05;
  currentVehicle.speed = 0;
  currentVehicle = null;

  if (toastEl) {
    toastEl.textContent = `🚶 DISMOUNTED TO FOOT`;
    toastEl.style.display = 'block';
    setTimeout(() => {
      toastEl.style.display = 'none';
    }, 1800);
  }
}

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
const taskTargetEl = document.getElementById('task-target');
const walletBalanceEl = document.getElementById('wallet-balance');
const toastEl = document.getElementById('toast-notification');

// Upgrade & Shop Inventory State
let hasTurboOkada = false;
let hasNeonVest = false;
let hasGoldenAgbada = false;
let hasHotBox = false;

// Delivery Timer & Tip System (90 seconds countdown per delivery stage)
const TOTAL_STAGE_TIME = 90.0;
let stageTimeRemaining = TOTAL_STAGE_TIME;
const timerBarFillEl = document.getElementById('timer-bar-fill');
const timerTextEl = document.getElementById('timer-text');
const lastmaBannerEl = document.getElementById('lastma-banner');

// Shop UI Elements
const shopBtnEl = document.getElementById('shop-btn');
const shopModalEl = document.getElementById('shop-modal');
const shopCloseBtnEl = document.getElementById('shop-close');
const buyTurboBtnEl = document.getElementById('buy-turbo-btn');
const buyOutfitBtnEl = document.getElementById('buy-outfit-btn');
const buyAgbadaBtnEl = document.getElementById('buy-agbada-btn');
const buyHotboxBtnEl = document.getElementById('buy-hotbox-btn');
const hornBtnEl = document.getElementById('horn-btn');

if (hornBtnEl) {
  hornBtnEl.addEventListener('click', () => {
    soundHornOrBell();
  });
}

if (shopBtnEl && shopModalEl) {
  shopBtnEl.addEventListener('click', () => {
    shopModalEl.style.display = 'flex';
  });
}

if (shopCloseBtnEl && shopModalEl) {
  shopCloseBtnEl.addEventListener('click', () => {
    shopModalEl.style.display = 'none';
  });
}

// Shop Purchases
if (buyTurboBtnEl) {
  buyTurboBtnEl.addEventListener('click', () => {
    if (playerEarnings >= 10000 && !hasTurboOkada) {
      playerEarnings -= 10000;
      hasTurboOkada = true;
      buyTurboBtnEl.textContent = 'INSTALLED ✓';
      buyTurboBtnEl.classList.add('bought');
      // Upgrade all parked & current scooters
      ridableVehicles.forEach((v) => {
        if (v.type === 'scooter') v.maxSpeed = 24.0;
      });
      lagosAudio.playCashChime(true);
      updateMissionHUD();
    }
  });
}

if (buyOutfitBtnEl) {
  buyOutfitBtnEl.addEventListener('click', () => {
    if (playerEarnings >= 7500 && !hasNeonVest) {
      playerEarnings -= 7500;
      hasNeonVest = true;
      buyOutfitBtnEl.textContent = 'EQUIPPED ✓';
      buyOutfitBtnEl.classList.add('bought');
      if (avatar) avatar.setOutfit(0x00ff88, 0x1e272e); // Neon vest
      lagosAudio.playCashChime(true);
      updateMissionHUD();
    }
  });
}

if (buyAgbadaBtnEl) {
  buyAgbadaBtnEl.addEventListener('click', () => {
    if (playerEarnings >= 25000 && !hasGoldenAgbada) {
      playerEarnings -= 25000;
      hasGoldenAgbada = true;
      buyAgbadaBtnEl.textContent = 'EQUIPPED ✓';
      buyAgbadaBtnEl.classList.add('bought');
      if (avatar) avatar.setOutfit(0xf1c40f, 0xf39c12); // Golden Agbada
      lagosAudio.playCashChime(true);
      updateMissionHUD();
    }
  });
}

if (buyHotboxBtnEl) {
  buyHotboxBtnEl.addEventListener('click', () => {
    if (playerEarnings >= 15000 && !hasHotBox) {
      playerEarnings -= 15000;
      hasHotBox = true;
      buyHotboxBtnEl.textContent = 'ACTIVE ✓';
      buyHotboxBtnEl.classList.add('bought');
      lagosAudio.playCashChime(true);
      updateMissionHUD();
    }
  });
}

// Mobile Touch Controls
const touchUp = document.getElementById('touch-up');
const touchDown = document.getElementById('touch-down');
const touchLeft = document.getElementById('touch-left');
const touchRight = document.getElementById('touch-right');
const touchMount = document.getElementById('touch-mount');
const touchHorn = document.getElementById('touch-horn');
const mobileControlsEl = document.getElementById('mobile-controls');
const mobileActionsEl = document.getElementById('mobile-actions');

// Show mobile controls automatically on touch-enabled screens
if (('ontouchstart' in window) || navigator.maxTouchPoints > 0) {
  if (mobileControlsEl) mobileControlsEl.style.display = 'flex';
  if (mobileActionsEl) mobileActionsEl.style.display = 'flex';
}

function bindTouchKey(el: HTMLElement | null, key: string) {
  if (!el) return;
  const start = (ev: Event) => {
    ev.preventDefault();
    keys[key] = true;
  };
  const end = (ev: Event) => {
    ev.preventDefault();
    keys[key] = false;
  };
  el.addEventListener('touchstart', start);
  el.addEventListener('touchend', end);
  el.addEventListener('mousedown', start);
  el.addEventListener('mouseup', end);
}
bindTouchKey(touchUp, 'KeyW');
bindTouchKey(touchDown, 'KeyS');
bindTouchKey(touchLeft, 'KeyA');
bindTouchKey(touchRight, 'KeyD');

if (touchMount) {
  touchMount.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (currentVehicle) {
      dismountCurrentVehicle();
    } else {
      const nearby = getNearestRidableVehicle(3.2);
      if (nearby) mountVehicle(nearby);
    }
  });
}
if (touchHorn) {
  touchHorn.addEventListener('click', (ev) => {
    ev.preventDefault();
    soundHornOrBell();
  });
}

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
    stageTimeRemaining = TOTAL_STAGE_TIME; // Reset countdown for dropoff rush
    lagosAudio.playPickup();

    if (toastEl) {
      toastEl.textContent = `📦 PACKAGE COLLECTED! NOW DELIVER TO ${current.dropoffLabel.toUpperCase()}`;
      toastEl.style.display = 'block';
      setTimeout(() => {
        toastEl.style.display = 'none';
      }, 2500);
    }
  } else {
    // Successfully delivered!
    // Calculate tip bonus if delivered quickly
    let tipBonus = 0;
    if (stageTimeRemaining > 45) {
      tipBonus = hasHotBox ? 5000 : 2500;
    } else if (stageTimeRemaining > 15) {
      tipBonus = hasHotBox ? 2000 : 1000;
    }

    const totalEarned = current.reward + tipBonus;
    playerEarnings += totalEarned;
    completedDeliveries++;
    currentStage = 'pickup';
    currentMissionIndex++;
    stageTimeRemaining = TOTAL_STAGE_TIME;

    lagosAudio.playCashChime(tipBonus > 0);

    if (toastEl) {
      const tipText = tipBonus > 0 ? ` (+₦${tipBonus.toLocaleString()} FAST TIP!)` : '';
      toastEl.textContent = `+₦${totalEarned.toLocaleString()} EARNED!${tipText} ${current.title.toUpperCase()} COMPLETE!`;
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
  lagosAudio.playCrashSound();

  // If riding a bicycle/scooter/danfo, knock player off vehicle
  if (currentVehicle) {
    currentVehicle.speed = 0;
    currentVehicle = null;
  }

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

// Minimap (EKO GPS Radar) Renderer
const minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement | null;
const minimapCtx = minimapCanvas ? minimapCanvas.getContext('2d') : null;

function renderMinimap() {
  if (!minimapCanvas || !minimapCtx) return;
  const ctx = minimapCtx;
  const w = minimapCanvas.width;
  const h = minimapCanvas.height;
  const cx = w / 2;
  const cz = h / 2;
  const scale = 0.55; // 1 meter = 0.55 canvas pixels (shows ~145m radius around player)

  // Clear minimap with dark Lagos radar background
  ctx.fillStyle = '#0f141a';
  ctx.fillRect(0, 0, w, h);

  // Radar grid range circles
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cz, 30, 0, Math.PI * 2);
  ctx.arc(cx, cz, 65, 0, Math.PI * 2);
  ctx.stroke();

  // Helper to project world (wx, wz) to canvas coordinates relative to playerPos
  function worldToMinimap(wx: number, wz: number): { x: number; y: number } {
    return {
      x: cx + (wx - playerPos.x) * scale,
      y: cz + (wz - playerPos.z) * scale
    };
  }

  // 1. Draw Roads
  // Main Avenue (vertical road)
  const aveP1 = worldToMinimap(-10, -200);
  const aveP2 = worldToMinimap(10, 200);
  ctx.fillStyle = '#2c3e50';
  ctx.fillRect(aveP1.x, 0, (aveP2.x - aveP1.x), h);

  // Main Avenue Centerline
  const clP = worldToMinimap(0, 0);
  ctx.strokeStyle = '#f1c40f';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(clP.x, 0);
  ctx.lineTo(clP.x, h);
  ctx.stroke();

  // Connecting Cross Streets
  crossStreetZs.forEach((crossZ) => {
    const csP = worldToMinimap(-150, crossZ - 8);
    const csH = 16 * scale;
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, csP.y, w, csH);

    // Cross centerline
    ctx.strokeStyle = '#f1c40f';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, csP.y + csH / 2);
    ctx.lineTo(w, csP.y + csH / 2);
    ctx.stroke();
  });

  // 2. Draw Solid Buildings & Obstacles
  ctx.fillStyle = 'rgba(99, 110, 114, 0.85)';
  for (const obs of worldColliders) {
    const p1 = worldToMinimap(obs.minX, obs.minZ);
    const p2 = worldToMinimap(obs.maxX, obs.maxZ);
    const bw = p2.x - p1.x;
    const bh = p2.y - p1.y;
    // Only draw if within minimap range
    if (p1.x + bw > -10 && p1.x < w + 10 && p1.y + bh > -10 && p1.y < h + 10) {
      ctx.fillRect(p1.x, p1.y, bw, bh);
    }
  }

  // Highlight Hospital (Green cross box on map)
  const hospP = worldToMinimap(26, 15);
  ctx.fillStyle = '#0984e3';
  ctx.fillRect(hospP.x - 7 * scale, hospP.y - 6 * scale, 14 * scale, 12 * scale);
  ctx.fillStyle = '#ff4757';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('+', hospP.x, hospP.y + 3);

  // 3. Draw Parked & Ridable Vehicles (Bicycles, Scooters, Danfos)
  for (const rv of ridableVehicles) {
    if (currentVehicle && currentVehicle.id === rv.id) continue;
    const rp = worldToMinimap(rv.pos.x, rv.pos.z);
    if (rp.x > 0 && rp.x < w && rp.y > 0 && rp.y < h) {
      ctx.fillStyle = rv.type === 'bicycle' ? '#2ed573' : rv.type === 'scooter' ? '#ff4757' : '#f7bf1f';
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 4. Draw Moving Traffic Cars
  for (const v of trafficVehicles) {
    const vp = worldToMinimap(v.mesh.position.x, v.mesh.position.z);
    if (vp.x > 0 && vp.x < w && vp.y > 0 && vp.y < h) {
      ctx.fillStyle = v.direction === 'north' || v.direction === 'south' ? '#f39c12' : '#e74c3c';
      ctx.beginPath();
      ctx.arc(vp.x, vp.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 4. Draw Active Mission Waypoint Marker
  const currentMission = missions[currentMissionIndex % missions.length];
  const targetPos = currentStage === 'pickup' ? currentMission.pickupPos : currentMission.dropoffPos;
  const tp = worldToMinimap(targetPos.x, targetPos.z);

  // If target is off minimap, draw indicator along radar edge
  const dx = tp.x - cx;
  const dy = tp.y - cz;
  const dist = Math.hypot(dx, dy);
  const maxR = w / 2 - 12;

  let markerX = tp.x;
  let markerY = tp.y;
  if (dist > maxR) {
    markerX = cx + (dx / dist) * maxR;
    markerY = cz + (dy / dist) * maxR;
  }

  const markerColor = currentStage === 'pickup' ? '#f7bf1f' : '#2ed573';
  ctx.fillStyle = markerColor;
  ctx.beginPath();
  ctx.arc(markerX, markerY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 5. Draw Player (Centered with orientation arrow)
  ctx.save();
  ctx.translate(cx, cz);
  ctx.rotate(playerYaw);

  // Player triangle pointer
  ctx.fillStyle = '#00d2d3';
  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.lineTo(-4, -5);
  ctx.lineTo(4, -5);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.restore();
}

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

    // Show proximity prompt if near a mountable vehicle while on foot
    if (!currentVehicle && vehiclePromptEl) {
      const nearV = getNearestRidableVehicle(3.2);
      if (nearV) {
        const vTitle = nearV.type === 'bicycle' ? 'BICYCLE' : nearV.type === 'scooter' ? 'OKADA SCOOTER' : nearV.type === 'danfo' ? 'DANFO BUS' : nearV.type === 'keke' ? 'KEKE' : 'CAR';
        vehiclePromptEl.textContent = `PRESS [E] TO RIDE ${vTitle}`;
        vehiclePromptEl.style.display = 'block';
      } else {
        vehiclePromptEl.style.display = 'none';
      }
    } else if (vehiclePromptEl) {
      vehiclePromptEl.style.display = 'none';
    }

    if (currentVehicle) {
      // VEHICLE DRIVING / CYCLING / SCOOTERING PHYSICS
      let throttle = 0;
      let steer = 0;
      if (keys['KeyW'] || keys['ArrowUp']) throttle += 1;
      if (keys['KeyS'] || keys['ArrowDown']) throttle -= 0.6; // Reverse / Brake
      if (keys['KeyA'] || keys['ArrowLeft']) steer += 1;
      if (keys['KeyD'] || keys['ArrowRight']) steer -= 1;

      // Acceleration & Braking
      const accelRate = currentVehicle.type === 'bicycle' ? 14.0 : currentVehicle.type === 'scooter' ? 22.0 : 18.0;
      const friction = 6.0;

      if (throttle !== 0) {
        currentVehicle.speed += throttle * accelRate * dt;
        currentVehicle.speed = Math.max(-6.0, Math.min(currentVehicle.maxSpeed, currentVehicle.speed));
      } else {
        // Natural coasting deceleration
        if (currentVehicle.speed > 0) {
          currentVehicle.speed = Math.max(0, currentVehicle.speed - friction * dt);
        } else if (currentVehicle.speed < 0) {
          currentVehicle.speed = Math.min(0, currentVehicle.speed + friction * dt);
        }
      }

      // Steering (turns vehicle yaw)
      if (steer !== 0 && Math.abs(currentVehicle.speed) > 0.1) {
        const reverseMult = currentVehicle.speed < 0 ? -1 : 1;
        currentVehicle.yaw += steer * currentVehicle.turnSpeed * dt * reverseMult;
      }

      // Integrate vehicle position
      const vx = Math.sin(currentVehicle.yaw) * currentVehicle.speed * dt;
      const vz = Math.cos(currentVehicle.yaw) * currentVehicle.speed * dt;

      const nextX = currentVehicle.pos.x + vx;
      const nextZ = currentVehicle.pos.z + vz;

      const vRadius = currentVehicle.type === 'bicycle' || currentVehicle.type === 'scooter' ? 0.6 : 1.4;

      function vCollides(cx: number, cz: number): boolean {
        for (const obs of worldColliders) {
          if (
            cx + vRadius > obs.minX &&
            cx - vRadius < obs.maxX &&
            cz + vRadius > obs.minZ &&
            cz - vRadius < obs.maxZ
          ) {
            return true;
          }
        }
        return false;
      }

      if (!vCollides(nextX, currentVehicle.pos.z)) {
        currentVehicle.pos.x = nextX;
      } else {
        currentVehicle.speed *= 0.3; // Dampen speed on curb impact
      }
      if (!vCollides(currentVehicle.pos.x, nextZ)) {
        currentVehicle.pos.z = nextZ;
      } else {
        currentVehicle.speed *= 0.3;
      }

      // Road boundary limits for vehicles
      const onCrossStreet = crossStreetZs.some((cz) => Math.abs(currentVehicle!.pos.z - cz) <= 7.0);
      if (!onCrossStreet) {
        currentVehicle.pos.x = Math.max(-13.0, Math.min(13.0, currentVehicle.pos.x));
      } else {
        currentVehicle.pos.x = Math.max(-140.0, Math.min(140.0, currentVehicle.pos.x));
      }
      currentVehicle.pos.z = Math.max(-280.0, Math.min(280.0, currentVehicle.pos.z));

      // Update 3D mesh position and rotation
      currentVehicle.mesh.position.copy(currentVehicle.pos);
      currentVehicle.mesh.rotation.y = currentVehicle.yaw;

      // Sync player on rider seat
      playerPos.copy(currentVehicle.pos);
      playerYaw = currentVehicle.yaw;

      if (currentVehicle.type === 'bicycle' || currentVehicle.type === 'scooter') {
        playerPos.y = 0.25;
      } else {
        playerPos.y = 0.45;
      }

      if (avatar) {
        avatar.updateRidingAnimation(dt, currentVehicle.type, currentVehicle.speed);
      }
      lagosAudio.updateEngineSound(currentVehicle.type, currentVehicle.speed, currentVehicle.maxSpeed);
    } else {
      lagosAudio.updateEngineSound(null, 0, 0);
      // ON FOOT WALKING MOVEMENT
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
        playerPos.z = Math.max(-280.0, Math.min(280.0, playerPos.z));

        // Subtle curb elevation: when on sidewalk (|x| >= 10.0), step up to curb level (y = 0.05)
        const onSidewalk = Math.abs(playerPos.x) >= 10.0 && !onCrossStreet;
        playerPos.y = onSidewalk ? 0.05 : 0.0;
      }

      if (avatar) {
        avatar.updateAnimation(dt, isMoving, 1.2);
      }
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
  if (taskTargetEl) {
    taskTargetEl.textContent = `📍 ${Math.round(distToTarget)}m away`;
  }
  // Update Delivery Countdown Timer & Hot Tip Gauge
  if (currentStage === 'dropoff') {
    stageTimeRemaining = Math.max(0, stageTimeRemaining - dt);
    const pct = (stageTimeRemaining / TOTAL_STAGE_TIME) * 100;
    if (timerBarFillEl) {
      timerBarFillEl.style.width = `${pct}%`;
    }
    if (timerTextEl) {
      const tipVal = stageTimeRemaining > 45 ? (hasHotBox ? 5000 : 2500) : stageTimeRemaining > 15 ? (hasHotBox ? 2000 : 1000) : 0;
      const tipText = tipVal > 0 ? `(TIP: +₦${tipVal.toLocaleString()})` : `(COLD - NO TIP)`;
      timerTextEl.textContent = `⏱️ ${Math.ceil(stageTimeRemaining)}s ${tipText}`;
    }
  } else {
    if (timerBarFillEl) timerBarFillEl.style.width = '100%';
    if (timerTextEl) timerTextEl.textContent = '⏱️ 90s (PICKUP STAGE)';
  }

  // LASTMA Traffic & Speed Checkpoint near CMS Central Intersection (Z between -15 and 15)
  const inLastmaZone = Math.abs(playerPos.z) < 16.0 && Math.abs(playerPos.x) < 8.0;
  const isAvenueLightRed = trafficPhase === 'cross_green' || trafficPhase === 'cross_yellow';
  if (inLastmaZone && currentVehicle && (currentVehicle.speed > 13.0 || isAvenueLightRed)) {
    if (lastmaBannerEl && lastmaBannerEl.style.display !== 'block') {
      lastmaBannerEl.style.display = 'block';
      lagosAudio.playSirenChirp();
      if (playerEarnings >= 500) {
        playerEarnings = Math.max(0, playerEarnings - 500); // ₦500 spot ticket!
        if (walletBalanceEl) walletBalanceEl.textContent = `₦${playerEarnings.toLocaleString()}`;
      }
      setTimeout(() => {
        if (lastmaBannerEl) lastmaBannerEl.style.display = 'none';
      }, 3000);
    }
  }

  // Check objective arrival / completion (within 2.8m of beacon)
  if (!isDead && distToTarget < 2.8) {
    triggerStageTransition();
  }

  // Render 3D scene & Real-Time EKO GPS Minimap
  renderer.render(scene, camera);
  renderMinimap();
}

animate();
