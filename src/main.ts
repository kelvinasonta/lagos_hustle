import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import { askStartNg, redirectToSignIn, WhoAmIReply, isMockMode, StartNgUser } from './net/startng';
import { AvatarGenerator } from './character/AvatarGenerator';
import { createDanfoBus } from './vehicles/DanfoGenerator';

async function initGame() {
  const container = document.getElementById('canvas-container')!;
  const statsEl = document.getElementById('spike-stats')!;

  // 1. Scene & Atmosphere (Warm Lagos Golden Hour)
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#e08a4a');
  scene.fog = new THREE.FogExp2('#d35400', 0.008);

  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 5, 10);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Lighting
  const hemiLight = new THREE.HemisphereLight(0xffeedd, 0x3d3830, 1.4);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xffaa55, 3.0);
  sunLight.position.set(60, 50, 40);
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

  // 2. City Ground & Victoria Island Road
  const roadGroup = new THREE.Group();
  scene.add(roadGroup);

  // Main 4-lane highway asphalt
  const roadGeo = new THREE.PlaneGeometry(30, 400);
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x222428, roughness: 0.85 });
  const road = new THREE.Mesh(roadGeo, roadMat);
  road.rotation.x = -Math.PI / 2;
  road.receiveShadow = true;
  roadGroup.add(road);

  // Road markings (yellow central line & white lane dividers)
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xfbc531 });
  const centerLine = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 400), lineMat);
  centerLine.rotation.x = -Math.PI / 2;
  centerLine.position.y = 0.01;
  roadGroup.add(centerLine);

  const dashMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (let z = -190; z <= 190; z += 12) {
    const dashL = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 5), dashMat);
    dashL.rotation.x = -Math.PI / 2;
    dashL.position.set(-6, 0.01, z);
    roadGroup.add(dashL);

    const dashR = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 5), dashMat);
    dashR.rotation.x = -Math.PI / 2;
    dashR.position.set(6, 0.01, z);
    roadGroup.add(dashR);
  }

  // Sidewalks & Kerbs
  const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x8395a7, roughness: 0.9 });
  const sidewalkL = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 400), sidewalkMat);
  sidewalkL.position.set(-20, 0.15, 0);
  sidewalkL.receiveShadow = true;
  roadGroup.add(sidewalkL);

  const sidewalkR = sidewalkL.clone();
  sidewalkR.position.x = 20;
  roadGroup.add(sidewalkR);

  // Lagos Palms & Streetlights along highway
  const palmGeo = new THREE.CylinderGeometry(0.2, 0.3, 7, 8);
  const palmTrunkMat = new THREE.MeshStandardMaterial({ color: 0x574b32 });
  const leavesMat = new THREE.MeshStandardMaterial({ color: 0x10ac84, roughness: 0.6 });

  for (let z = -180; z <= 180; z += 35) {
    const palm = new THREE.Group();
    palm.position.set(-18, 0, z);

    const trunk = new THREE.Mesh(palmGeo, palmTrunkMat);
    trunk.position.y = 3.5;
    trunk.castShadow = true;
    palm.add(trunk);

    const foliage = new THREE.Mesh(new THREE.SphereGeometry(2.4, 8, 8), leavesMat);
    foliage.scale.set(1.5, 0.6, 1.5);
    foliage.position.y = 7.0;
    foliage.castShadow = true;
    palm.add(foliage);

    scene.add(palm);

    // Streetlight on opposite side
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 8, 8), new THREE.MeshStandardMaterial({ color: 0x2f3640, metalness: 0.8 }));
    pole.position.set(16, 4, z);
    pole.castShadow = true;
    scene.add(pole);

    const lampArm = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.1, 0.1), new THREE.MeshStandardMaterial({ color: 0x2f3640 }));
    lampArm.position.set(15, 8, z);
    scene.add(lampArm);
  }

  // Surrounding Lagos Skyline buildings
  for (let i = 0; i < 24; i++) {
    const h = 25 + Math.random() * 50;
    const w = 15 + Math.random() * 15;
    const d = 15 + Math.random() * 20;
    const buildingMat = new THREE.MeshStandardMaterial({
      color: i % 3 === 0 ? 0x2c3e50 : i % 2 === 0 ? 0x7f8c8d : 0xbdc3c7,
      roughness: 0.4,
      metalness: 0.3
    });
    const bMesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), buildingMat);
    const side = i % 2 === 0 ? -1 : 1;
    bMesh.position.set(side * (40 + Math.random() * 30), h / 2, (i - 12) * 25);
    bMesh.castShadow = true;
    bMesh.receiveShadow = true;
    scene.add(bMesh);
  }

  // 3. Lagos Yellow Danfo Bus
  const danfo = createDanfoBus();
  danfo.position.set(4, 0, -8);
  scene.add(danfo);

  // 4. Rapier Physics Engine
  await RAPIER.init();
  const gravity = { x: 0, y: -9.81, z: 0 };
  const world = new RAPIER.World(gravity);

  // Static ground collider
  const groundBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(0, 0, 0);
  const groundBody = world.createRigidBody(groundBodyDesc);
  world.createCollider(RAPIER.ColliderDesc.cuboid(150, 0.1, 200), groundBody);

  // 5. start.ng Player Avatar & Character Generator
  let currentUser: StartNgUser = {
    id: 1,
    name: 'Kelvin',
    account: 'kelvin',
    style: {
      body: 'male',
      primaryColor: '#fbc531', // Yellow top
      secondaryColor: '#2f3640', // Dark jeans
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

  // start.ng Identity Hookup
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
        accountEl.textContent = reply.user?.account ? `@${reply.user.account}` : 'Guest Driver';
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

    // Movement logic (WASD / Arrows)
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

      // Clamp player within road & sidewalk bounds
      playerPos.x = Math.max(-24, Math.min(24, playerPos.x));
    }

    playerGroup.position.copy(playerPos);
    playerGroup.rotation.y = playerYaw;

    if (avatar) {
      avatar.updateAnimation(dt, isMoving, 1.2);
    }

    // Third-Person Smooth Chase Camera
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
      <b style="color:#fbc531">EKO STREETS — LIVE GAMEPLAY</b><br/>
      FPS: <span style="color:#2ed573">${fps}</span> | Player: <b>${currentUser.name}</b> (@${currentUser.account})<br/>
      Controls: <b>WASD / Arrow Keys</b> to walk & explore Lagos<br/>
      Location: Victoria Island Highway (Near Danfo Bus)
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
