import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import { askStartNg, redirectToSignIn, WhoAmIReply, isMockMode, StartNgUser } from './net/startng';
import { AvatarGenerator } from './character/AvatarGenerator';
import { createPortHarcourtBus } from './vehicles/DanfoGenerator';

async function initGame() {
  const container = document.getElementById('canvas-container')!;
  const statsEl = document.getElementById('spike-stats')!;

  // 1. Scene & Atmosphere (Port Harcourt Niger Delta Sky - Warm Lush Sunlight with Humid Haze)
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#d38e55');
  scene.fog = new THREE.FogExp2('#b86b35', 0.007);

  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 5, 10);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Lighting
  const hemiLight = new THREE.HemisphereLight(0xffeedd, 0x2c3e50, 1.4);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xffa834, 3.2);
  sunLight.position.set(50, 60, 40);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 250;
  sunLight.shadow.camera.left = -50;
  sunLight.shadow.camera.right = 50;
  sunLight.shadow.camera.top = 50;
  sunLight.shadow.camera.bottom = -50;
  scene.add(sunLight);

  // 2. Port Harcourt Aba Road Expressway & Flyover Structure
  const roadGroup = new THREE.Group();
  scene.add(roadGroup);

  // Main Expressway Asphalt (Aba Road / Garrison / Rumuokoro corridor)
  const roadGeo = new THREE.PlaneGeometry(32, 400);
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.85 });
  const road = new THREE.Mesh(roadGeo, roadMat);
  road.rotation.x = -Math.PI / 2;
  road.receiveShadow = true;
  roadGroup.add(road);

  // Concrete Road Median (Signature Port Harcourt painted kerb: Green & White or Yellow)
  const medianMat = new THREE.MeshStandardMaterial({ color: 0x2ed573, roughness: 0.7 });
  const median = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.35, 400), medianMat);
  median.position.set(0, 0.17, 0);
  median.castShadow = true;
  median.receiveShadow = true;
  roadGroup.add(median);

  // White lane dashes
  const dashMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (let z = -190; z <= 190; z += 12) {
    const dashL = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 5), dashMat);
    dashL.rotation.x = -Math.PI / 2;
    dashL.position.set(-7.5, 0.01, z);
    roadGroup.add(dashL);

    const dashR = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 5), dashMat);
    dashR.rotation.x = -Math.PI / 2;
    dashR.position.set(7.5, 0.01, z);
    roadGroup.add(dashR);
  }

  // Sidewalks & Drains
  const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x718093, roughness: 0.9 });
  const sidewalkL = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 400), sidewalkMat);
  sidewalkL.position.set(-21, 0.15, 0);
  sidewalkL.receiveShadow = true;
  roadGroup.add(sidewalkL);

  const sidewalkR = sidewalkL.clone();
  sidewalkR.position.x = 21;
  roadGroup.add(sidewalkR);

  // Iconic Port Harcourt Flyover Overpass Bridge (Garrison / Rumuola / Waterlines style)
  const flyoverGroup = new THREE.Group();
  flyoverGroup.position.set(0, 0, 70);

  // Bridge deck
  const deckMat = new THREE.MeshStandardMaterial({ color: 0x57606f, roughness: 0.7 });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(40, 1.2, 14), deckMat);
  deck.position.set(0, 8.5, 0);
  deck.castShadow = true;
  flyoverGroup.add(deck);

  // Bridge barriers
  const barrierMat = new THREE.MeshStandardMaterial({ color: 0x2ed573, roughness: 0.6 });
  const barrierFront = new THREE.Mesh(new THREE.BoxGeometry(40, 0.9, 0.3), barrierMat);
  barrierFront.position.set(0, 9.4, 6.8);
  flyoverGroup.add(barrierFront);

  const barrierBack = barrierFront.clone();
  barrierBack.position.z = -6.8;
  flyoverGroup.add(barrierBack);

  // Bridge Pillars
  const pillarGeo = new THREE.CylinderGeometry(1.2, 1.4, 8.5, 16);
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0x747d8c, roughness: 0.8 });
  const pillarL = new THREE.Mesh(pillarGeo, pillarMat);
  pillarL.position.set(-10, 4.25, 0);
  pillarL.castShadow = true;
  flyoverGroup.add(pillarL);

  const pillarR = pillarL.clone();
  pillarR.position.x = 10;
  flyoverGroup.add(pillarR);

  scene.add(flyoverGroup);

  // Tropical Rain-Forest Greenery & Palms (Garden City Flora)
  const palmGeo = new THREE.CylinderGeometry(0.2, 0.35, 7.5, 8);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4b382a });
  const foliageMat = new THREE.MeshStandardMaterial({ color: 0x10ac84, roughness: 0.6 });

  for (let z = -180; z <= 180; z += 30) {
    if (Math.abs(z - 70) < 18) continue; // Skip under flyover
    const tree = new THREE.Group();
    tree.position.set(-18, 0, z);

    const trunk = new THREE.Mesh(palmGeo, trunkMat);
    trunk.position.y = 3.75;
    trunk.castShadow = true;
    tree.add(trunk);

    const foliage = new THREE.Mesh(new THREE.SphereGeometry(2.6, 8, 8), foliageMat);
    foliage.scale.set(1.4, 0.8, 1.4);
    foliage.position.y = 7.5;
    foliage.castShadow = true;
    tree.add(foliage);

    scene.add(tree);

    // Modern Double-Arm LED Streetlight on East side
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 8.5, 8), new THREE.MeshStandardMaterial({ color: 0x2f3640, metalness: 0.8 }));
    pole.position.set(17, 4.25, z);
    pole.castShadow = true;
    scene.add(pole);

    const lampArm = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.1, 0.1), new THREE.MeshStandardMaterial({ color: 0x2f3640 }));
    lampArm.position.set(16, 8.5, z);
    scene.add(lampArm);
  }

  // Surrounding Port Harcourt Urban Buildings & Oil Hub Corporate Plazas
  for (let i = 0; i < 24; i++) {
    const h = 20 + Math.random() * 45;
    const w = 16 + Math.random() * 16;
    const d = 16 + Math.random() * 20;
    const buildingMat = new THREE.MeshStandardMaterial({
      color: i % 3 === 0 ? 0x34495e : i % 2 === 0 ? 0x95a5a6 : 0xdfe4ea,
      roughness: 0.45,
      metalness: 0.25
    });
    const bMesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), buildingMat);
    const side = i % 2 === 0 ? -1 : 1;
    bMesh.position.set(side * (42 + Math.random() * 25), h / 2, (i - 12) * 26);
    bMesh.castShadow = true;
    bMesh.receiveShadow = true;
    scene.add(bMesh);
  }

  // 3. Port Harcourt Blue & White Commercial Bus
  const phcBus = createPortHarcourtBus();
  phcBus.position.set(4, 0, -8);
  scene.add(phcBus);

  // 4. Rapier Physics Engine
  await RAPIER.init();
  const gravity = { x: 0, y: -9.81, z: 0 };
  const world = new RAPIER.World(gravity);

  const groundBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(0, 0, 0);
  const groundBody = world.createRigidBody(groundBodyDesc);
  world.createCollider(RAPIER.ColliderDesc.cuboid(150, 0.1, 200), groundBody);

  // 5. start.ng Player Character (PH Pitakwa Driver style)
  let currentUser: StartNgUser = {
    id: 1,
    name: 'Kelvin PH',
    account: 'pitakwa_boy',
    style: {
      body: 'male',
      primaryColor: '#0984e3', // PH Blue top
      secondaryColor: '#2d3436', // Dark jeans
      skinColor: '#8d5524',
      hairColor: '#1e272e',
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
    if (avatar) {
      playerGroup.remove(avatar.group);
    }
    avatar = new AvatarGenerator(user);
    playerGroup.add(avatar.group);
  }

  rebuildAvatar(currentUser);

  // Identity Hookup
  const cardEl = document.getElementById('player-card')!;
  const faceEl = document.getElementById('player-face') as HTMLImageElement;
  const nameEl = document.getElementById('player-name')!;
  const accountEl = document.getElementById('player-account')!;
  const signinBtn = document.getElementById('player-sign-in')!;
  const mockBadge = document.getElementById('mock-badge')!;

  if (isMockMode()) mockBadge.style.display = 'inline-block';
  signinBtn.onclick = () => redirectToSignIn();

  async function updateIdentity() {
    const reply = await askStartNg<WhoAmIReply>({ type: 'startng:whoami' }, 'startng:user', 3000);
    if (reply) {
      const p = reply.user ?? reply.guest;
      if (p) {
        currentUser = p;
        rebuildAvatar(p);
        faceEl.src = p.face;
        nameEl.textContent = p.name;
        accountEl.textContent = reply.user?.account ? `@${reply.user.account}` : 'PH Resident';
        signinBtn.style.display = reply.user ? 'none' : 'inline-block';
        cardEl.style.display = 'flex';
      }
    } else {
      cardEl.style.display = 'flex';
      nameEl.textContent = currentUser.name;
      accountEl.textContent = `@${currentUser.account}`;
    }
  }

  await updateIdentity();
  window.addEventListener('focus', () => updateIdentity());
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateIdentity();
  });

  // 6. Player Movement & Keyboard Controls
  const keys: Record<string, boolean> = {};
  window.addEventListener('keydown', (e) => { keys[e.code] = true; });
  window.addEventListener('keyup', (e) => { keys[e.code] = false; });

  let playerPos = new THREE.Vector3(0, 0, 0);
  let playerYaw = 0;
  const moveSpeed = 8.5; // m/s
  let lastTime = performance.now();
  let fps = 60;
  let frameCount = 0;
  let fpsTimer = performance.now();

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    frameCount++;
    if (now - fpsTimer >= 1000) {
      fps = frameCount;
      frameCount = 0;
      fpsTimer = now;
    }

    world.step();

    // Movement (WASD / Arrows)
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

      playerPos.x = Math.max(-25, Math.min(25, playerPos.x));
    }

    playerGroup.position.copy(playerPos);
    playerGroup.rotation.y = playerYaw;

    if (avatar) {
      avatar.updateAnimation(dt, isMoving, 1.2);
    }

    // Third-person Camera Follow
    const targetCamPos = new THREE.Vector3(
      playerPos.x,
      playerPos.y + 4.2,
      playerPos.z + 8.5
    );
    camera.position.lerp(targetCamPos, 0.12);
    camera.lookAt(playerPos.x, playerPos.y + 1.5, playerPos.z);

    renderer.render(scene, camera);

    // Update stats & controls overlay
    statsEl.innerHTML = `
      <b style="color:#0984e3">PITAKWA STREETS — PORT HARCOURT LIVE</b><br/>
      FPS: <span style="color:#2ed573">${fps}</span> | Driver: <b>${currentUser.name}</b> (@${currentUser.account})<br/>
      Controls: <b>WASD / Arrow Keys</b> to walk & explore Port Harcourt<br/>
      Location: Aba Road Corridor & Garrison Flyover Overpass
    `;
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

initGame().catch(console.error);
