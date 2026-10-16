import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import { askStartNg, redirectToSignIn, WhoAmIReply, isMockMode, StartNgUser } from './net/startng';
import { AvatarGenerator } from './character/AvatarGenerator';
import { EuropeanUrbanBuilding } from './world/EuropeanBuilding';
import { createPrismTower } from './world/PrismTower';
import { NPCSystem } from './ai/NPCSystem';

async function initLumioseCity() {
  const container = document.getElementById('canvas-container')!;
  const statsEl = document.getElementById('spike-stats')!;

  // 1. Scene & Crisp Azure Sky (Matches Reference Image)
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#82ccdd');
  scene.fog = new THREE.FogExp2('#c7ecee', 0.005);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 3.8, 8);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Sunlight (Clear bright daylight)
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x535c68, 1.2);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xfffaed, 2.2);
  sunLight.position.set(30, 70, 40);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 250;
  sunLight.shadow.camera.left = -40;
  sunLight.shadow.camera.right = 40;
  sunLight.shadow.camera.top = 40;
  sunLight.shadow.camera.bottom = -40;
  scene.add(sunLight);

  // 2. Cobblestone Boulevard & Pedestrian Planters
  const groundGeo = new THREE.PlaneGeometry(160, 300);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.85 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Cobblestone Main Avenue Street Path
  const avenueGeo = new THREE.PlaneGeometry(18, 260);
  const avenueMat = new THREE.MeshStandardMaterial({ color: 0xc8d6e5, roughness: 0.75 });
  const avenue = new THREE.Mesh(avenueGeo, avenueMat);
  avenue.rotation.x = -Math.PI / 2;
  avenue.position.y = 0.02;
  avenue.receiveShadow = true;
  scene.add(avenue);

  // Sidewalk Curbs
  const curbMat = new THREE.MeshStandardMaterial({ color: 0x8395a7, roughness: 0.6 });
  const curbL = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 260), curbMat);
  curbL.position.set(-9.3, 0.12, 0);
  curbL.receiveShadow = true;
  scene.add(curbL);

  const curbR = curbL.clone();
  curbR.position.x = 9.3;
  scene.add(curbR);

  // Center Planters with Grass & Lush Shade Trees (Exact from reference)
  const treeGeo = new THREE.CylinderGeometry(0.3, 0.45, 6, 8);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x574b32 });
  const foliageMat = new THREE.MeshStandardMaterial({ color: 0x27ae60, roughness: 0.65 });
  const planterMat = new THREE.MeshStandardMaterial({ color: 0x718093, roughness: 0.8 });
  const grassMat = new THREE.MeshStandardMaterial({ color: 0x6ab04c, roughness: 0.9 });

  for (let z = -90; z <= 90; z += 30) {
    // Rectangular Grass Planter
    const planterBox = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.28, 6.0), planterMat);
    planterBox.position.set(0, 0.14, z);
    planterBox.receiveShadow = true;
    scene.add(planterBox);

    const grass = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 5.6), grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.set(0, 0.29, z);
    scene.add(grass);

    // Tree in center of planter
    const tree = new THREE.Group();
    tree.position.set(0, 0, z);

    const trunk = new THREE.Mesh(treeGeo, trunkMat);
    trunk.position.y = 3.0;
    trunk.castShadow = true;
    tree.add(trunk);

    const foliage = new THREE.Mesh(new THREE.SphereGeometry(2.4, 8, 8), foliageMat);
    foliage.scale.set(1.2, 1.4, 1.2);
    foliage.position.y = 6.2;
    foliage.castShadow = true;
    tree.add(foliage);

    scene.add(tree);
  }

  // Victorian Triple-Lantern Streetlamps
  const lampPoleMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, metalness: 0.8, roughness: 0.3 });
  const lampGlassMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xfff9e6, emissiveIntensity: 0.8 });

  for (let z = -100; z <= 100; z += 24) {
    for (const side of [-10.5, 10.5]) {
      const lamp = new THREE.Group();
      lamp.position.set(side, 0, z);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 5.0, 8), lampPoleMat);
      pole.position.y = 2.5;
      pole.castShadow = true;
      lamp.add(pole);

      const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.6, 0.4), lampGlassMat);
      lantern.position.y = 5.2;
      lamp.add(lantern);

      scene.add(lamp);
    }
  }

  // 3. Haussmann European Urban Buildings Flanking Both Sides
  const buildingColors = [0xd1ccc0, 0xf5cd79, 0xf7d794, 0xeccc68, 0xced6e0];
  const trimColors = [0x57606f, 0x2f3542, 0x747d8c];

  for (let z = -100; z <= 100; z += 22) {
    // Left Side Building
    const bLeft = new EuropeanUrbanBuilding({
      width: 18,
      height: 22,
      depth: 18,
      floors: 5,
      wallColor: buildingColors[Math.abs(z) % buildingColors.length],
      trimColor: trimColors[Math.abs(z) % trimColors.length],
      hasShopFront: true,
      roofType: 'mansard'
    });
    bLeft.mesh.position.set(-20, 0, z);
    scene.add(bLeft.mesh);

    // Right Side Building
    const bRight = new EuropeanUrbanBuilding({
      width: 18,
      height: 22,
      depth: 18,
      floors: 5,
      wallColor: buildingColors[(Math.abs(z) + 1) % buildingColors.length],
      trimColor: trimColors[(Math.abs(z) + 1) % trimColors.length],
      hasShopFront: true,
      roofType: 'mansard'
    });
    bRight.mesh.position.set(20, 0, z);
    bRight.mesh.rotation.y = Math.PI; // Face inward to boulevard
    scene.add(bRight.mesh);
  }

  // 4. Iconic White & Glass Prism Tower in the Far Center Vista (from image)
  const prismTower = createPrismTower();
  prismTower.position.set(0, 0, -135);
  scene.add(prismTower);

  // 5. Physics Engine
  await RAPIER.init();
  const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  const groundBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, 0, 0));
  world.createCollider(RAPIER.ColliderDesc.cuboid(80, 0.1, 150), groundBody);

  // 6. Interactive NPC System
  const npcSystem = new NPCSystem();
  scene.add(npcSystem.group);

  // Add real city NPCs matching reference picture (Gentleman in Suit, Girl in dress, Tourist, Shopkeeper, Student)
  npcSystem.add(
    'Pierre',
    'Butler / Concierge',
    'Bonjour! Welcome to the Central Avenue plaza. The Prism Tower is breathtaking today!',
    new THREE.Vector3(-4.5, 0, 8),
    { top: 0x1e272e, pants: 0x2d3436, skin: 0xf5cd79 } // Dapper suit
  );

  npcSystem.add(
    'Camille',
    'City Stroller',
    'I love the morning breeze through the trees along the avenue!',
    new THREE.Vector3(4.2, 0, 12),
    { top: 0x0984e3, pants: 0xf5f6fa, skin: 0xf8c291 },
    [new THREE.Vector3(4.2, 0, -25)] // Walking NPC
  );

  npcSystem.add(
    'Luc',
    'Tourist',
    'Have you seen the observation deck on Prism Tower? You can see the whole region!',
    new THREE.Vector3(-5.2, 0, -18),
    { top: 0xe67e22, pants: 0x34495e, skin: 0xdfe4ea },
    [new THREE.Vector3(-5.2, 0, 15)] // Walking NPC
  );

  npcSystem.add(
    'Sophie',
    'Cafe Owner',
    'Our freshly baked croissants and espresso are ready at the corner bakery!',
    new THREE.Vector3(6.5, 0, -5),
    { top: 0xe84118, pants: 0x2f3542, skin: 0xf19066 }
  );

  npcSystem.add(
    'Antoine',
    'Artist',
    'The architectural symmetry of these Haussmann buildings inspires my paintings every day.',
    new THREE.Vector3(-3.8, 0, -42),
    { top: 0x6c5ce7, pants: 0x2d3436, skin: 0xf3a683 },
    [new THREE.Vector3(-3.8, 0, -10)]
  );

  // 7. Player Character Setup
  let currentUser: StartNgUser = {
    id: 1,
    name: 'Player',
    account: 'adventurer',
    style: {
      body: 'male',
      primaryColor: '#2d3436', // Black / grey stylish jacket (like reference image)
      secondaryColor: '#1e272e', // Dark trousers
      skinColor: '#f8c291',
      hairColor: '#17120f',
      hair: 'short',
      hat: 'cap',
      accessory: 'backpack'
    },
    face: ''
  };

  let avatar: AvatarGenerator | null = null;
  const playerGroup = new THREE.Group();
  playerGroup.position.set(0, 0, 18);
  scene.add(playerGroup);

  function rebuildAvatar(user: StartNgUser) {
    if (avatar) playerGroup.remove(avatar.group);
    avatar = new AvatarGenerator(user);
    playerGroup.add(avatar.group);
  }
  rebuildAvatar(currentUser);

  // start.ng profile card
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
        accountEl.textContent = reply.user?.account ? `@${reply.user.account}` : 'City Explorer';
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

  // Dialogue Box Element
  let dialogueBox = document.getElementById('npc-dialogue');
  if (!dialogueBox) {
    dialogueBox = document.createElement('div');
    dialogueBox.id = 'npc-dialogue';
    dialogueBox.style.position = 'fixed';
    dialogueBox.style.bottom = '90px';
    dialogueBox.style.left = '50%';
    dialogueBox.style.transform = 'translateX(-50%)';
    dialogueBox.style.background = 'rgba(24, 27, 34, 0.94)';
    dialogueBox.style.border = '2px solid #38ada9';
    dialogueBox.style.borderRadius = '16px';
    dialogueBox.style.padding = '16px 24px';
    dialogueBox.style.maxWidth = '600px';
    dialogueBox.style.width = '90%';
    dialogueBox.style.boxShadow = '0 12px 35px rgba(0,0,0,0.6)';
    dialogueBox.style.backdropFilter = 'blur(10px)';
    dialogueBox.style.zIndex = '100';
    dialogueBox.style.display = 'none';
    dialogueBox.style.color = '#ffffff';
    dialogueBox.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    document.body.appendChild(dialogueBox);
  }

  // 8. Movement Controls & Game Loop
  const keys: Record<string, boolean> = {};
  window.addEventListener('keydown', (e) => { keys[e.code] = true; });
  window.addEventListener('keyup', (e) => { keys[e.code] = false; });

  let playerPos = new THREE.Vector3(0, 0, 18);
  let playerYaw = Math.PI; // Face toward the Prism Tower by default
  const moveSpeed = 8.0;
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

      // Keep player inside the boulevard boundaries
      playerPos.x = Math.max(-9.0, Math.min(9.0, playerPos.x));
      playerPos.z = Math.max(-110, Math.min(100, playerPos.z));
    }

    playerGroup.position.copy(playerPos);
    playerGroup.rotation.y = playerYaw;

    if (avatar) {
      avatar.updateAnimation(dt, isMoving, 1.2);
    }

    // Update NPCs & Check interaction
    const nearestNPC = npcSystem.update(dt, playerPos);
    if (dialogueBox) {
      if (nearestNPC) {
        dialogueBox.style.display = 'block';
        dialogueBox.innerHTML = `
          <div style="font-size:12px; color:#38ada9; font-weight:800; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${nearestNPC.name} • ${nearestNPC.role}</div>
          <div style="font-size:15px; line-height:1.5; color:#f1f2f6;">"${nearestNPC.dialogue}"</div>
        `;
      } else {
        dialogueBox.style.display = 'none';
      }
    }

    // Dynamic third-person camera follow
    const targetCamPos = new THREE.Vector3(
      playerPos.x * 0.4,
      playerPos.y + 3.4,
      playerPos.z + 7.5
    );
    camera.position.lerp(targetCamPos, 0.12);
    camera.lookAt(playerPos.x * 0.2, playerPos.y + 2.0, playerPos.z - 6.0);

    renderer.render(scene, camera);

    // Update overlay stats
    statsEl.innerHTML = `
      <b style="color:#38ada9">LUMIOSE CENTRAL AVENUE — OPEN WORLD</b><br/>
      FPS: <span style="color:#2ed573">${fps}</span> | Walking NPCs: <b>${npcSystem.npcs.length}</b><br/>
      Controls: <b>WASD / Arrow Keys</b> to walk & talk to city NPCs<br/>
      Landmark: <b>Prism Tower</b> straight ahead down the avenue
    `;
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

initLumioseCity().catch(console.error);
