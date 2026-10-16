import * as THREE from 'three';

export function createDanfoBus(): THREE.Group {
  const danfo = new THREE.Group();

  // Materials
  const danfoYellow = new THREE.MeshStandardMaterial({ color: 0xfbc531, roughness: 0.35, metalness: 0.2 });
  const blackStripeMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.8 });
  const darkGlassMat = new THREE.MeshStandardMaterial({ color: 0x11161d, roughness: 0.1, metalness: 0.8 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.2, metalness: 0.9 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x18191a, roughness: 0.9 });
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xfff2a3, emissiveIntensity: 1.5 });
  const taillightMat = new THREE.MeshStandardMaterial({ color: 0xe84118, emissive: 0xc23616, emissiveIntensity: 1.2 });

  // 1. Main Body
  const bodyGeo = new THREE.BoxGeometry(2.3, 1.8, 5.0);
  const body = new THREE.Mesh(bodyGeo, danfoYellow);
  body.position.y = 1.35;
  body.castShadow = true;
  danfo.add(body);

  // 2. Iconic Black Racing Stripe
  const stripeGeo = new THREE.BoxGeometry(2.32, 0.26, 5.02);
  const stripe = new THREE.Mesh(stripeGeo, blackStripeMat);
  stripe.position.y = 1.15;
  danfo.add(stripe);

  // 3. Windshield & Windows
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.75, 0.1), darkGlassMat);
  windshield.position.set(0, 1.6, 2.5);
  windshield.rotation.x = -0.15;
  danfo.add(windshield);

  const rearWindow = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.7, 0.1), darkGlassMat);
  rearWindow.position.set(0, 1.6, -2.5);
  danfo.add(rearWindow);

  // Side Windows
  const sideWindowL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.65, 4.0), darkGlassMat);
  sideWindowL.position.set(-1.16, 1.6, 0);
  danfo.add(sideWindowL);

  const sideWindowR = sideWindowL.clone();
  sideWindowR.position.x = 1.16;
  danfo.add(sideWindowR);

  // 4. Bumpers
  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.3, 0.3), chromeMat);
  frontBumper.position.set(0, 0.55, 2.55);
  danfo.add(frontBumper);

  const rearBumper = frontBumper.clone();
  rearBumper.position.z = -2.55;
  danfo.add(rearBumper);

  // 5. Headlights & Taillights
  const headlightL = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16), headlightMat);
  headlightL.rotation.x = Math.PI / 2;
  headlightL.position.set(-0.8, 0.95, 2.52);
  danfo.add(headlightL);

  const headlightR = headlightL.clone();
  headlightR.position.x = 0.8;
  danfo.add(headlightR);

  const taillightL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.35, 0.08), taillightMat);
  taillightL.position.set(-0.85, 1.0, -2.52);
  danfo.add(taillightL);

  const taillightR = taillightL.clone();
  taillightR.position.x = 0.85;
  danfo.add(taillightR);

  // 6. Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.3, 18);
  const wheelPositions = [
    [-1.15, 0.42, 1.5],
    [1.15, 0.42, 1.5],
    [-1.15, 0.42, -1.5],
    [1.15, 0.42, -1.5]
  ];

  for (const pos of wheelPositions) {
    const wheel = new THREE.Mesh(wheelGeo, rubberMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(pos[0], pos[1], pos[2]);
    wheel.castShadow = true;
    danfo.add(wheel);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.32, 12), chromeMat);
    rim.rotation.z = Math.PI / 2;
    rim.position.set(pos[0], pos[1], pos[2]);
    danfo.add(rim);
  }

  return danfo;
}
