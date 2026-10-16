import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import { askStartNg, redirectToSignIn, WhoAmIReply, isMockMode, StartNgUser } from './net/startng';
import { createPrismTower } from './world/PrismTower';
import { RealisticNPCManager } from './character/RealisticCharacter';
import { createToonMaterial } from './gfx/CelShader';

async function initRealisticGame() {
  const container = document.getElementById('canvas-container')!;
  const statsEl = document.getElementById('spike-stats')!;

  // 1. Scene & Crisp Azure JRPG Sky
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#74b9ff');
  scene.fog = new THREE.FogExp2('#dfe6e9', 0.0035);

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 3.4, 7);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Sunlight (Warm bright JRPG sunlight)
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x636e72, 1.3);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xfffaed, 2.5);
  sunLight.position.set(40, 80, 50);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 300;
  sunLight.shadow.camera.left = -50;
  sunLight.shadow.camera.right = 50;
  sunLight.shadow.camera.top = 50;
  sunLight.shadow.camera.bottom = -50;
  scene.add(sunLight);

  // 2. Texture Loading (PBR Textures with Mipmaps)
  const textureLoader = new THREE.TextureLoader();
  const cobbleTex = textureLoader.load('./assets/textures/cobblestone.webp');
  cobbleTex.wrapS = THREE.RepeatWrapping;
  cobbleTex.wrapT = THREE.RepeatWrapping;
  cobbleTex.repeat.set(6, 40);

  const stoneTex = textureLoader.load('./assets/textures/stone_facade.webp');
  stoneTex.wrapS = THREE.RepeatWrapping;
  stoneTex.wrapT = THREE.RepeatWrapping;
  stoneTex.repeat.set(3, 4);

  const roofTex = textureLoader.load('./assets/textures/roof_slate.webp');
  roofTex.wrapS = THREE.RepeatWrapping;
  roofTex.wrapT = THREE.RepeatWrapping;
  roofTex.repeat.set(4, 4);

  // Grand Cobblestone Boulevard Avenue
  const avenueGeo = new THREE.PlaneGeometry(20, 280);
  const avenueMat = new THREE.MeshStandardMaterial({
    map: cobbleTex,
    roughness: 0.7,
    metalness: 0.1
  });
  const avenue = new THREE.Mesh(avenueGeo, avenueMat);
  avenue.rotation.x = -Math.PI / 2;
  avenue.receiveShadow = true;
  scene.add(avenue);

  // Curbs
  const curbMat = new THREE.MeshStandardMaterial({ color: 0x636e72, roughness: 0.8 });
  const curbL = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.25, 280), curbMat);
  curbL.position.set(-10.4, 0.12, 0);
  curbL.receiveShadow = true;
  scene.add(curbL);

  const curbR = curbL.clone();
  curbR.position.x = 10.4;
  scene.add(curbR);

  // Sidewalks
  const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0xb2bec3, roughness: 0.9 });
  const sidewalkL = new THREE.Mesh(new THREE.PlaneGeometry(16, 280), sidewalkMat);
  sidewalkL.rotation.x = -Math.PI / 2;
  sidewalkL.position.set(-18.8, 0.25, 0);
  sidewalkL.receiveShadow = true;
  scene.add(sidewalkL);

  const sidewalkR = sidewalkL.clone();
  sidewalkR.position.x = 18.8;
  scene.add(sidewalkR);

  // 3. Central Planters with Grass & Lush Trees (Matches Reference)
  const treeTrunkGeo = new THREE.CylinderGeometry(0.28, 0.42, 6, 12);
  const trunkMat = createToonMaterial(0x574b32);
  const foliageMat = createToonMaterial(0x27ae60);
  const planterMat = new THREE.MeshStandardMaterial({ color: 0x718093, roughness: 0.8 });
  const grassMat = new THREE.MeshStandardMaterial({ color: 0x44bd32, roughness: 0.9 });

  for (let z = -90; z <= 90; z += 30) {
    const planterBox = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.35, 6.5), planterMat);
    planterBox.position.set(0, 0.18, z);
    planterBox.receiveShadow = true;
    scene.add(planterBox);

    const grass = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 6.1), grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.set(0, 0.36, z);
    scene.add(grass);

    const tree = new THREE.Group();
    tree.position.set(0, 0, z);

    const trunk = new THREE.Mesh(treeTrunkGeo, trunkMat);
    trunk.position.y = 3.0;
    trunk.castShadow = true;
    tree.add(trunk);

    const foliage = new THREE.Mesh(new THREE.SphereGeometry(2.5, 12, 12), foliageMat);
    foliage.scale.set(1.3, 1.4, 1.3);
    foliage.position.y = 6.4;
    foliage.castShadow = true;
    tree.add(foliage);

    scene.add(tree);
  }

  // Victorian Streetlamps
  const lampPoleMat = new THREE.MeshStandardMaterial({ color: 0x2d3436, metalness: 0.8, roughness: 0.3 });
  const lampGlassMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xfffae6, emissiveIntensity: 1.0 });

  for (let z = -100; z <= 100; z += 25) {
    for (const side of [-11.5, 11.5]) {
      const lamp = new THREE.Group();
      lamp.position.set(side, 0, z);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 5.2, 8), lampPoleMat);
      pole.position.y = 2.6;
      pole.castShadow = true;
      lamp.add(pole);

      const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.65, 0.45), lampGlassMat);
      lantern.position.y = 5.4;
      lamp.add(lantern);

      scene.add(lamp);
    }
  }

  // 4. Textured Haussmann Buildings with Boutique Storefronts & Blue Shutters
  const buildingMat = new THREE.MeshStandardMaterial({
    map: stoneTex,
    roughness: 0.8,
    metalness: 0.05
  });

  const roofMat = new THREE.MeshStandardMaterial({
    map: roofTex,
    roughness: 0.6
  });

  const windowGlass = new THREE.MeshStandardMaterial({
    color: 0x225588,
    roughness: 0.1,
    metalness: 0.9
  });

  const shopMat = new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.6 });
  const shutterMat = createToonMaterial(0x3867d6);
  const bannerMat = createToonMaterial(0x2ed573);

  for (let z = -100; z <= 100; z += 24) {
    for (const side of [-1, 1]) {
      const bGroup = new THREE.Group();
      bGroup.position.set(side * 22, 0, z);

      // Core Building
      const core = new THREE.Mesh(new THREE.BoxGeometry(20, 24, 20), buildingMat);
      core.position.y = 12;
      core.castShadow = true;
      core.receiveShadow = true;
      bGroup.add(core);

      // Ground Floor Boutique Shop
      const shop = new THREE.Mesh(new THREE.BoxGeometry(20.4, 4.5, 20.4), shopMat);
      shop.position.y = 2.25;
      shop.castShadow = true;
      bGroup.add(shop);

      // Shop Window Glass
      const shopWin = new THREE.Mesh(new THREE.PlaneGeometry(14, 2.6), windowGlass);
      shopWin.position.set(0, 2.2, -side * 10.25);
      if (side === 1) shopWin.rotation.y = Math.PI;
      bGroup.add(shopWin);

      // Red Awning Canopy
      const awning = new THREE.Mesh(new THREE.BoxGeometry(15, 0.15, 2.2), createToonMaterial(0xeb4d4b));
      awning.position.set(0, 3.8, -side * 11.2);
      bGroup.add(awning);

      // Hanging Vertical Green Banner (from reference image)
      const banner = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 3.4), bannerMat);
      banner.position.set(-side * 8, 8, -side * 10.3);
      if (side === 1) banner.rotation.y = Math.PI;
      bGroup.add(banner);

      // Rows of Windows with Blue Shutters
      for (let floor = 1; floor <= 4; floor++) {
        const y = floor * 4.5 + 2.5;
        for (let col = -2; col <= 2; col++) {
          const x = col * 3.4;
          const win = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.0), windowGlass);
          win.position.set(x, y, -side * 10.05);
          if (side === 1) win.rotation.y = Math.PI;
          bGroup.add(win);

          // Blue Shutters
          const shutL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2.0, 0.08), shutterMat);
          shutL.position.set(x - 0.9, y, -side * 10.08);
          bGroup.add(shutL);

          const shutR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2.0, 0.08), shutterMat);
          shutR.position.set(x + 0.9, y, -side * 10.08);
          bGroup.add(shutR);
        }
      }

      // Mansard Roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(20.2, 3.5, 20.2), roofMat);
      roof.position.y = 25.75;
      bGroup.add(roof);

      scene.add(bGroup);
    }
  }

  // 5. Monumental Prism Tower in the Far Vista
  const prismTower = createPrismTower();
  prismTower.position.set(0, 0, -135);
  scene.add(prismTower);

  // 6. Rapier Physics
  await RAPIER.init();
  const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  const groundBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, 0, 0));
  world.createCollider(RAPIER.ColliderDesc.cuboid(80, 0.1, 150), groundBody);

  // 7. Realistic NPC Manager & Characters
  const npcManager = new RealisticNPCManager();
  scene.add(npcManager.group);

  // Add Butler in Suit (Pierre)
  npcManager.createCharacter(
    'Pierre',
    'Grand Hotel Concierge',
    'Bonjour! Welcome to Central Avenue. Have you visited the Prism Tower observation deck yet?',
    new THREE.Vector3(-4.5, 0, 8),
    { top: 0x1e272e, pants: 0x2d3436, skin: 0xf5cd79, hair: 0x1e272e, cap: 0x1e272e }
  );

  // Walking Stroller (Camille)
  npcManager.createCharacter(
    'Camille',
    'City Stroller',
    'The breeze along the avenue feels so refreshing today!',
    new THREE.Vector3(4.5, 0, 12),
    { top: 0x0984e3, pants: 0xf5f6fa, skin: 0xf8c291, hair: 0xd63031 },
    new THREE.Vector3(4.5, 0, -35)
  );

  // Walking Tourist (Luc)
  npcManager.createCharacter(
    'Luc',
    'Photographer',
    'I just took the most magnificent photo of Prism Tower from this angle!',
    new THREE.Vector3(-4.8, 0, -22),
    { top: 0xe67e22, pants: 0x34495e, skin: 0xdfe4ea, hair: 0x2d3436, backpack: true },
    new THREE.Vector3(-4.8, 0, 15)
  );

  // Cafe Owner (Sophie)
  npcManager.createCharacter(
    'Sophie',
    'Patisserie Chef',
    'Fresh hot baguettes and macarons are ready right out of the oven!',
    new THREE.Vector3(6.5, 0, -8),
    { top: 0xe84118, pants: 0x2f3542, skin: 0xf19066, hair: 0xfbc531 }
  );

  // 8. Player Character (Stylized Trainer matching reference with Backpack & Cap)
  let currentUser: StartNgUser = {
    id: 1,
    name: 'Kelvin',
    account: 'trainer_kelvin',
    style: {
      body: 'male',
      primaryColor: '#2d3436',
      secondaryColor: '#1e272e',
      skinColor: '#f8c291',
      hairColor: '#17120f',
      hair: 'short',
      hat: 'cap',
      accessory: 'backpack'
    },
    face: ''
  };

  const playerGroup = new THREE.Group();
  playerGroup.position.set(0, 0, 18);
  scene.add(playerGroup);

  // Player Model (Cel-shaded with cap and red backpack)
  const playerSkinMat = createToonMaterial(0xf8c291);
  const playerJacketMat = createToonMaterial(0x2d3436);
  const playerPantsMat = createToonMaterial(0x1e272e);
  const playerShoeMat = createToonMaterial(0xeb4d4b);
  const playerBagMat = createToonMaterial(0xe84118);
  const playerCapMat = createToonMaterial(0x2d3436);

  // Torso
  const pTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.22, 0.65, 12), playerJacketMat);
  pTorso.position.y = 1.05;
  pTorso.castShadow = true;
  playerGroup.add(pTorso);

  // Red waist bag / backpack
  const pBag = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.38, 0.22), playerBagMat);
  pBag.position.set(0, 1.05, -0.22);
  pBag.castShadow = true;
  playerGroup.add(pBag);

  // Head
  const pHead = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), playerSkinMat);
  pHead.position.y = 1.55;
  playerGroup.add(pHead);

  // Cap
  const pCap = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.24, 0.1, 12), playerCapMat);
  pCap.position.set(0, 1.7, 0);
  const pVisor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.02, 0.18), playerCapMat);
  pVisor.position.set(0, 1.66, 0.18);
  playerGroup.add(pCap);
  playerGroup.add(pVisor);

  // Limbs
  const pLeftArm = new THREE.Group();
  pLeftArm.position.set(-0.33, 1.3, 0);
  const pLArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.55, 8), playerJacketMat);
  pLArmMesh.position.y = -0.22;
  pLeftArm.add(pLArmMesh);
  playerGroup.add(pLeftArm);

  const pRightArm = new THREE.Group();
  pRightArm.position.set(0.33, 1.3, 0);
  const pRArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.55, 8), playerJacketMat);
  pRArmMesh.position.y = -0.22;
  pRightArm.add(pRArmMesh);
  playerGroup.add(pRightArm);

  const pLeftLeg = new THREE.Group();
  pLeftLeg.position.set(-0.13, 0.72, 0);
  const pLLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.65, 8), playerPantsMat);
  pLLegMesh.position.y = -0.28;
  pLeftLeg.add(pLLegMesh);
  const pLShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), playerShoeMat);
  pLShoe.position.set(0, -0.62, 0.05);
  pLeftLeg.add(pLShoe);
  playerGroup.add(pLeftLeg);

  const pRightLeg = new THREE.Group();
  pRightLeg.position.set(0.13, 0.72, 0);
  const pRLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.65, 8), playerPantsMat);
  pRLegMesh.position.y = -0.28;
  pRightLeg.add(pRLegMesh);
  const pRShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), playerShoeMat);
  pRShoe.position.set(0, -0.62, 0.05);
  pRightLeg.add(pRShoe);
  playerGroup.add(pRightLeg);

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
    dialogueBox.style.bottom = '85px';
    dialogueBox.style.left = '50%';
    dialogueBox.style.transform = 'translateX(-50%)';
    dialogueBox.style.background = 'rgba(24, 27, 34, 0.94)';
    dialogueBox.style.border = '2px solid #74b9ff';
    dialogueBox.style.borderRadius = '16px';
    dialogueBox.style.padding = '16px 26px';
    dialogueBox.style.maxWidth = '620px';
    dialogueBox.style.width = '90%';
    dialogueBox.style.boxShadow = '0 12px 35px rgba(0,0,0,0.6)';
    dialogueBox.style.backdropFilter = 'blur(12px)';
    dialogueBox.style.zIndex = '100';
    dialogueBox.style.display = 'none';
    dialogueBox.style.color = '#ffffff';
    dialogueBox.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    document.body.appendChild(dialogueBox);
  }

  // 9. Controls & Smooth JRPG Movement
  const keys: Record<string, boolean> = {};
  window.addEventListener('keydown', (e) => { keys[e.code] = true; });
  window.addEventListener('keyup', (e) => { keys[e.code] = false; });

  let playerPos = new THREE.Vector3(0, 0, 18);
  let playerYaw = Math.PI;
  const moveSpeed = 8.5;
  let animTime = 0;
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

      // Stay within avenue
      playerPos.x = Math.max(-9.5, Math.min(9.5, playerPos.x));
      playerPos.z = Math.max(-115, Math.min(100, playerPos.z));

      // Player walk animation
      animTime += dt * 10;
      const angle = Math.sin(animTime) * 0.7;
      pLeftLeg.rotation.x = angle;
      pRightLeg.rotation.x = -angle;
      pLeftArm.rotation.x = -angle * 0.8;
      pRightArm.rotation.x = angle * 0.8;
      pTorso.position.y = 1.05 + Math.abs(Math.sin(animTime * 2)) * 0.03;
      pHead.position.y = 1.55 + Math.abs(Math.sin(animTime * 2)) * 0.03;
    } else {
      animTime += dt * 2;
      const breath = Math.sin(animTime) * 0.02;
      pLeftLeg.rotation.x = 0;
      pRightLeg.rotation.x = 0;
      pLeftArm.rotation.x = breath * 0.5;
      pRightArm.rotation.x = -breath * 0.5;
      pTorso.position.y = 1.05 + breath;
      pHead.position.y = 1.55 + breath;
    }

    playerGroup.position.copy(playerPos);
    playerGroup.rotation.y = playerYaw;

    // Update NPCs & Proximity Dialogue
    const nearest = npcManager.update(dt, playerPos);
    if (dialogueBox) {
      if (nearest) {
        dialogueBox.style.display = 'block';
        dialogueBox.innerHTML = `
          <div style="font-size:12px; color:#74b9ff; font-weight:800; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${nearest.name} • ${nearest.role}</div>
          <div style="font-size:15px; line-height:1.5; color:#f1f2f6;">"${nearest.dialogue}"</div>
        `;
      } else {
        dialogueBox.style.display = 'none';
      }
    }

    // Camera follow (exact matching third-person viewpoint)
    const targetCamPos = new THREE.Vector3(
      playerPos.x * 0.35,
      playerPos.y + 3.2,
      playerPos.z + 7.2
    );
    camera.position.lerp(targetCamPos, 0.12);
    camera.lookAt(playerPos.x * 0.2, playerPos.y + 1.8, playerPos.z - 7.0);

    renderer.render(scene, camera);

    // Update UI Stats
    statsEl.innerHTML = `
      <b style="color:#74b9ff">CENTRAL AVENUE — REALISTIC JRPG CITY</b><br/>
      FPS: <span style="color:#2ed573">${fps}</span> | Walking NPCs: <b>${npcManager.npcs.length}</b><br/>
      Controls: <b>WASD / Arrow Keys</b> to walk & talk with NPCs<br/>
      Landmark: <b>Prism Tower</b> straight down the boulevard
    `;
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

initRealisticGame().catch(console.error);
