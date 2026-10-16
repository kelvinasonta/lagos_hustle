import * as THREE from 'three';

/**
 * Port Harcourt Commercial Bus (Iconic Blue and White livery)
 */
export function createPortHarcourtBus(): THREE.Group {
  const bus = new THREE.Group();

  // Materials - Rivers State / Port Harcourt Blue & White Livery
  const phcBlue = new THREE.MeshStandardMaterial({ color: 0x0984e3, roughness: 0.35, metalness: 0.2 });
  const whiteStripeMat = new THREE.MeshStandardMaterial({ color: 0xf5f6fa, roughness: 0.5 });
  const darkGlassMat = new THREE.MeshStandardMaterial({ color: 0x11161d, roughness: 0.1, metalness: 0.8 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.2, metalness: 0.9 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x18191a, roughness: 0.9 });
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xfff2a3, emissiveIntensity: 1.5 });
  const taillightMat = new THREE.MeshStandardMaterial({ color: 0xe84118, emissive: 0xc23616, emissiveIntensity: 1.2 });

  // 1. Lower Body (Deep PHC Blue)
  const lowerBodyGeo = new THREE.BoxGeometry(2.3, 1.0, 5.0);
  const lowerBody = new THREE.Mesh(lowerBodyGeo, phcBlue);
  lowerBody.position.y = 0.95;
  lowerBody.castShadow = true;
  bus.add(lowerBody);

  // 2. Mid Section (Signature White Stripe)
  const midStripeGeo = new THREE.BoxGeometry(2.32, 0.35, 5.02);
  const midStripe = new THREE.Mesh(midStripeGeo, whiteStripeMat);
  midStripe.position.y = 1.35;
  bus.add(midStripe);

  // 3. Upper Body & Roof (Blue)
  const upperBodyGeo = new THREE.BoxGeometry(2.3, 0.55, 5.0);
  const upperBody = new THREE.Mesh(upperBodyGeo, phcBlue);
  upperBody.position.y = 1.75;
  upperBody.castShadow = true;
  bus.add(upperBody);

  // 4. Windshield & Windows
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.75, 0.1), darkGlassMat);
  windshield.position.set(0, 1.6, 2.5);
  windshield.rotation.x = -0.15;
  bus.add(windshield);

  const rearWindow = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.7, 0.1), darkGlassMat);
  rearWindow.position.set(0, 1.6, -2.5);
  bus.add(rearWindow);

  // Side Windows
  const sideWindowL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.65, 4.0), darkGlassMat);
  sideWindowL.position.set(-1.16, 1.6, 0);
  bus.add(sideWindowL);

  const sideWindowR = sideWindowL.clone();
  sideWindowR.position.x = 1.16;
  bus.add(sideWindowR);

  // 5. Bumpers
  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.3, 0.3), chromeMat);
  frontBumper.position.set(0, 0.55, 2.55);
  bus.add(frontBumper);

  const rearBumper = frontBumper.clone();
  rearBumper.position.z = -2.55;
  bus.add(rearBumper);

  // 6. Headlights & Taillights
  const headlightL = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16), headlightMat);
  headlightL.rotation.x = Math.PI / 2;
  headlightL.position.set(-0.8, 0.95, 2.52);
  bus.add(headlightL);

  const headlightR = headlightL.clone();
  headlightR.position.x = 0.8;
  bus.add(headlightR);

  const taillightL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.35, 0.08), taillightMat);
  taillightL.position.set(-0.85, 1.0, -2.52);
  bus.add(taillightL);

  const taillightR = taillightL.clone();
  taillightR.position.x = 0.85;
  bus.add(taillightR);

  // 7. Wheels
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
    bus.add(wheel);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.32, 12), chromeMat);
    rim.rotation.z = Math.PI / 2;
    rim.position.set(pos[0], pos[1], pos[2]);
    bus.add(rim);
  }

  // 8. PH Route Sign (e.g. "MILE 1 - RUMUOKORO")
  const signGeo = new THREE.BoxGeometry(1.6, 0.22, 0.06);
  const signMat = new THREE.MeshStandardMaterial({ color: 0x2d3436 });
  const sign = new THREE.Mesh(signGeo, signMat);
  sign.position.set(0, 1.95, 2.3);
  bus.add(sign);

  return bus;
}
