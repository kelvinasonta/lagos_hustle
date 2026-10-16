import * as THREE from 'three';

export type VehicleType = 'danfo' | 'sedan' | 'keke' | 'bicycle' | 'scooter';

export interface VehicleOptions {
  type?: VehicleType;
  primaryColor?: number;
  stripeColor?: number;
  name?: string;
}

/**
 * Creates authentic Nigerian Lagos street vehicles:
 * 1. Iconic Yellow Danfo Bus (Volkswagen T3 / LT style with dual black stripes)
 * 2. Lagos Taxi / Sedan (Sedan car)
 * 3. Keke Napep (Yellow 3-wheeler tricycle)
 * 4. Delivery Bicycle (Fast pedal dispatch bike)
 * 5. Okawa / Dispatch Motor Scooter (Lagos dispatch courier bike with rear parcel box)
 */
export function createVehicle(options: VehicleOptions = {}): THREE.Group {
  const type = options.type || 'danfo';

  if (type === 'danfo') {
    return createDanfoBus(options.primaryColor ?? 0xf7bf1f, options.stripeColor ?? 0x141414);
  } else if (type === 'keke') {
    return createKekeNapep(options.primaryColor ?? 0xf7bf1f);
  } else if (type === 'bicycle') {
    return createBicycle(options.primaryColor ?? 0x2ed573);
  } else if (type === 'scooter') {
    return createMotorScooter(options.primaryColor ?? 0xe74c3c);
  } else {
    return createSedan(options.primaryColor ?? 0x34495e);
  }
}

/**
 * Iconic Lagos Danfo Bus (Yellow #F7BF1F with twin horizontal black stripes)
 */
export function createDanfoBus(yellowColor = 0xf7bf1f, blackColor = 0x141414): THREE.Group {
  const bus = new THREE.Group();

  // Materials from Lagos Art Direction Palette
  const yellowMat = new THREE.MeshStandardMaterial({ color: yellowColor, roughness: 0.4, metalness: 0.1 });
  const blackStripeMat = new THREE.MeshStandardMaterial({ color: blackColor, roughness: 0.8 });
  const darkGlassMat = new THREE.MeshStandardMaterial({ color: 0x1a252f, roughness: 0.1, metalness: 0.8 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.2, metalness: 0.85 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x18191a, roughness: 0.9 });
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xffeaa7, emissiveIntensity: 1.2 });
  const taillightMat = new THREE.MeshStandardMaterial({ color: 0xd63031, emissive: 0xc0392b, emissiveIntensity: 1.0 });

  // 1. Lower Body (Danfo Yellow)
  const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.8, 4.8), yellowMat);
  lowerBody.position.y = 0.85;
  lowerBody.castShadow = true;
  bus.add(lowerBody);

  // 2. Twin Black Stripes (Signature Lagos commercial livery)
  const stripe1 = new THREE.Mesh(new THREE.BoxGeometry(2.22, 0.14, 4.82), blackStripeMat);
  stripe1.position.y = 1.0;
  bus.add(stripe1);

  const stripe2 = new THREE.Mesh(new THREE.BoxGeometry(2.22, 0.14, 4.82), blackStripeMat);
  stripe2.position.y = 1.22;
  bus.add(stripe2);

  // 3. Cabin & Roof
  const upperBody = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.7, 4.8), yellowMat);
  upperBody.position.y = 1.7;
  upperBody.castShadow = true;
  bus.add(upperBody);

  // 4. Windows (Front Windshield, Rear Window, Side Windows)
  const frontWindshield = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.7, 0.1), darkGlassMat);
  frontWindshield.position.set(0, 1.6, 2.41);
  frontWindshield.rotation.x = -0.15;
  bus.add(frontWindshield);

  const rearWindow = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.65, 0.1), darkGlassMat);
  rearWindow.position.set(0, 1.6, -2.41);
  bus.add(rearWindow);

  // Side Windows (Left & Right)
  const sideGlassL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 3.8), darkGlassMat);
  sideGlassL.position.set(-1.11, 1.6, 0.1);
  bus.add(sideGlassL);

  const sideGlassR = sideGlassL.clone();
  sideGlassR.position.x = 1.11;
  bus.add(sideGlassR);

  // 5. Front & Rear Bumpers
  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.26, 0.25, 0.25), chromeMat);
  frontBumper.position.set(0, 0.5, 2.45);
  bus.add(frontBumper);

  const rearBumper = frontBumper.clone();
  rearBumper.position.z = -2.45;
  bus.add(rearBumper);

  // 6. Lights
  const headL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.1), headlightMat);
  headL.position.set(-0.75, 0.85, 2.43);
  bus.add(headL);

  const headR = headL.clone();
  headR.position.x = 0.75;
  bus.add(headR);

  const tailL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.08), taillightMat);
  tailL.position.set(-0.8, 0.9, -2.43);
  bus.add(tailL);

  const tailR = tailL.clone();
  tailR.position.x = 0.8;
  bus.add(tailR);

  // 7. Route Board (e.g., "OJUELEGBA - CMS")
  const board = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.2, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })
  );
  board.position.set(0, 2.08, 2.15);
  bus.add(board);

  // 8. Four Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.26, 16);
  const wheelPositions = [
    [-1.1, 0.4, 1.4],
    [1.1, 0.4, 1.4],
    [-1.1, 0.4, -1.4],
    [1.1, 0.4, -1.4]
  ];

  for (const pos of wheelPositions) {
    const wheel = new THREE.Mesh(wheelGeo, rubberMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(pos[0], pos[1], pos[2]);
    wheel.castShadow = true;
    bus.add(wheel);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.28, 10), chromeMat);
    rim.rotation.z = Math.PI / 2;
    rim.position.set(pos[0], pos[1], pos[2]);
    bus.add(rim);
  }

  return bus;
}

/**
 * Lagos City Sedan (Civilian car / Taxi)
 */
export function createSedan(color = 0x2980b9): THREE.Group {
  const car = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.2 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x1a252f, roughness: 0.1, metalness: 0.8 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x18191a, roughness: 0.9 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.2, metalness: 0.8 });
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xffeaa7, emissiveIntensity: 1.0 });
  const taillightMat = new THREE.MeshStandardMaterial({ color: 0xd63031, emissive: 0xc0392b, emissiveIntensity: 1.0 });

  // Chassis / Lower body
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.55, 4.2), bodyMat);
  body.position.y = 0.65;
  body.castShadow = true;
  car.add(body);

  // Cabin / Greenhouse
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 2.2), bodyMat);
  cabin.position.set(0, 1.15, -0.2);
  cabin.castShadow = true;
  car.add(cabin);

  // Windshield & Rear glass
  const frontGlass = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.45, 0.08), glassMat);
  frontGlass.position.set(0, 1.15, 0.95);
  frontGlass.rotation.x = -0.3;
  car.add(frontGlass);

  const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.42, 0.08), glassMat);
  rearGlass.position.set(0, 1.15, -1.35);
  rearGlass.rotation.x = 0.3;
  car.add(rearGlass);

  // Headlights & Taillights
  const headL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.15, 0.1), headlightMat);
  headL.position.set(-0.65, 0.65, 2.11);
  car.add(headL);
  const headR = headL.clone();
  headR.position.x = 0.65;
  car.add(headR);

  const tailL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.15, 0.1), taillightMat);
  tailL.position.set(-0.65, 0.65, -2.11);
  car.add(tailL);
  const tailR = tailL.clone();
  tailR.position.x = 0.65;
  car.add(tailR);

  // 4 Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.22, 14);
  const wheelPositions = [
    [-0.95, 0.34, 1.25],
    [0.95, 0.34, 1.25],
    [-0.95, 0.34, -1.25],
    [0.95, 0.34, -1.25]
  ];

  for (const pos of wheelPositions) {
    const wheel = new THREE.Mesh(wheelGeo, rubberMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(pos[0], pos[1], pos[2]);
    wheel.castShadow = true;
    car.add(wheel);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.24, 8), chromeMat);
    rim.rotation.z = Math.PI / 2;
    rim.position.set(pos[0], pos[1], pos[2]);
    car.add(rim);
  }

  return car;
}

/**
 * Lagos Yellow Keke Napep (3-wheel commercial tricycle)
 */
export function createKekeNapep(color = 0xf7bf1f): THREE.Group {
  const keke = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.5 });
  const blackMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.8 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x18191a, roughness: 0.9 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x1a252f, roughness: 0.1 });
  const lightMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xffeaa7, emissiveIntensity: 1.0 });

  // Main cabin frame
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.9, 2.2), bodyMat);
  cabin.position.y = 0.9;
  cabin.castShadow = true;
  keke.add(cabin);

  // Black soft top canopy roof
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.15, 2.1), blackMat);
  roof.position.y = 1.65;
  roof.castShadow = true;
  keke.add(roof);

  // Front Windshield
  const shield = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.55, 0.05), glassMat);
  shield.position.set(0, 1.25, 0.85);
  shield.rotation.x = -0.15;
  keke.add(shield);

  // Single Front headlight
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 12), lightMat);
  head.rotation.x = Math.PI / 2;
  head.position.set(0, 0.8, 1.12);
  keke.add(head);

  // 1 Front wheel, 2 Rear wheels
  const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.16, 12);

  // Front wheel (centered)
  const frontW = new THREE.Mesh(wheelGeo, rubberMat);
  frontW.rotation.z = Math.PI / 2;
  frontW.position.set(0, 0.28, 0.85);
  keke.add(frontW);

  // Rear wheels
  for (const x of [-0.68, 0.68]) {
    const rearW = new THREE.Mesh(wheelGeo, rubberMat);
    rearW.rotation.z = Math.PI / 2;
    rearW.position.set(x, 0.28, -0.65);
    rearW.castShadow = true;
    keke.add(rearW);
  }

  return keke;
}

/**
 * Lagos Dispatch Bicycle (Eco delivery bike with front basket and rear courier rack)
 */
export function createBicycle(frameColor = 0x2ed573): THREE.Group {
  const bike = new THREE.Group();

  const frameMat = new THREE.MeshStandardMaterial({ color: frameColor, roughness: 0.3, metalness: 0.7 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.2, metalness: 0.9 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.9 });
  const saddleMat = new THREE.MeshStandardMaterial({ color: 0x2f3542, roughness: 0.8 });

  // Wheels (Front & Rear)
  const wheelGeo = new THREE.TorusGeometry(0.38, 0.04, 8, 20);
  const frontWheel = new THREE.Mesh(wheelGeo, rubberMat);
  frontWheel.position.set(0, 0.38, 0.75);
  bike.add(frontWheel);

  const rearWheel = new THREE.Mesh(wheelGeo, rubberMat);
  rearWheel.position.set(0, 0.38, -0.75);
  rearWheel.castShadow = true;
  bike.add(rearWheel);

  // Wheel hubs & spokes (spoke discs)
  const spokeGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.02, 12);
  const spokeMat = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: true });
  const frontSpokes = new THREE.Mesh(spokeGeo, spokeMat);
  frontSpokes.rotation.z = Math.PI / 2;
  frontSpokes.position.copy(frontWheel.position);
  bike.add(frontSpokes);

  const rearSpokes = new THREE.Mesh(spokeGeo, spokeMat);
  rearSpokes.rotation.z = Math.PI / 2;
  rearSpokes.position.copy(rearWheel.position);
  bike.add(rearSpokes);

  // Diamond Frame Tubes
  const tubeGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.0, 8);

  // Bottom tube
  const bottomTube = new THREE.Mesh(tubeGeo, frameMat);
  bottomTube.position.set(0, 0.45, 0);
  bottomTube.rotation.x = Math.PI / 2;
  bike.add(bottomTube);

  // Seat tube
  const seatTube = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.65, 8), frameMat);
  seatTube.position.set(0, 0.65, -0.2);
  seatTube.rotation.x = 0.25;
  bike.add(seatTube);

  // Down tube
  const downTube = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 8), frameMat);
  downTube.position.set(0, 0.62, 0.25);
  downTube.rotation.x = -0.55;
  bike.add(downTube);

  // Top tube
  const topTube = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.8, 8), frameMat);
  topTube.position.set(0, 0.85, 0.05);
  topTube.rotation.x = 1.45;
  bike.add(topTube);

  // Saddle / Seat
  const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.3), saddleMat);
  saddle.position.set(0, 0.98, -0.22);
  bike.add(saddle);

  // Handlebars & Fork
  const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.65, 8), chromeMat);
  handlebar.rotation.z = Math.PI / 2;
  handlebar.position.set(0, 1.02, 0.58);
  bike.add(handlebar);

  // Front Dispatch Basket
  const basket = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.22, 0.28),
    new THREE.MeshStandardMaterial({ color: 0x747d8c, roughness: 0.7, wireframe: false })
  );
  basket.position.set(0, 0.92, 0.82);
  bike.add(basket);

  return bike;
}

/**
 * Lagos Dispatch Motor Scooter / Okada (High-speed courier bike with rear thermal delivery box)
 */
export function createMotorScooter(color = 0xe74c3c): THREE.Group {
  const scooter = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.4 });
  const engineMat = new THREE.MeshStandardMaterial({ color: 0x2f3542, roughness: 0.6, metalness: 0.7 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.9 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.2, metalness: 0.9 });
  const deliveryBoxMat = new THREE.MeshStandardMaterial({ color: 0xf39c12, roughness: 0.5 }); // Bright Yellow Dispatch Box
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xffeaa7, emissiveIntensity: 1.5 });

  // Wheels (Chunky scooter tyres)
  const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.16, 14);

  const frontWheel = new THREE.Mesh(wheelGeo, rubberMat);
  frontWheel.rotation.z = Math.PI / 2;
  frontWheel.position.set(0, 0.32, 0.95);
  frontWheel.castShadow = true;
  scooter.add(frontWheel);

  const rearWheel = new THREE.Mesh(wheelGeo, rubberMat);
  rearWheel.rotation.z = Math.PI / 2;
  rearWheel.position.set(0, 0.32, -0.75);
  rearWheel.castShadow = true;
  scooter.add(rearWheel);

  // Low Step-Through Chassis & Footboard
  const footboard = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.14, 1.4), bodyMat);
  footboard.position.set(0, 0.35, 0.1);
  footboard.castShadow = true;
  scooter.add(footboard);

  // Front Fairing Cowl & Headlight
  const frontFairing = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.75, 0.35), bodyMat);
  frontFairing.position.set(0, 0.85, 0.85);
  frontFairing.rotation.x = -0.15;
  scooter.add(frontFairing);

  const headlight = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 12), headlightMat);
  headlight.rotation.x = Math.PI / 2;
  headlight.position.set(0, 0.95, 1.05);
  scooter.add(headlight);

  // Handlebars & Mirrors
  const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.72, 8), chromeMat);
  handlebar.rotation.z = Math.PI / 2;
  handlebar.position.set(0, 1.15, 0.78);
  scooter.add(handlebar);

  // Dual Rearview Mirrors
  for (let mx of [-0.34, 0.34]) {
    const mirrorStem = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2, 6), chromeMat);
    mirrorStem.position.set(mx, 1.25, 0.8);
    scooter.add(mirrorStem);

    const mirror = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 12), chromeMat);
    mirror.position.set(mx, 1.34, 0.8);
    scooter.add(mirror);
  }

  // Seat / Leather Saddle
  const seat = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.14, 0.75),
    new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.8 })
  );
  seat.position.set(0, 0.68, -0.05);
  scooter.add(seat);

  // Large Insulated Dispatch / Delivery Box on Rear Rack
  const deliveryBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.55, 0.6),
    deliveryBoxMat
  );
  deliveryBox.position.set(0, 0.95, -0.7);
  deliveryBox.castShadow = true;
  scooter.add(deliveryBox);

  // Chrome exhaust pipe
  const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8), chromeMat);
  exhaust.rotation.x = Math.PI / 2;
  exhaust.position.set(0.32, 0.35, -0.45);
  scooter.add(exhaust);

  // Engine block casing
  const engineBlock = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.28, 0.45), engineMat);
  engineBlock.position.set(0, 0.4, -0.4);
  engineBlock.castShadow = true;
  scooter.add(engineBlock);

  return scooter;
}
