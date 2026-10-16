import * as THREE from 'three';

export interface ComplexBuildingConfig {
  x: number;
  z: number;
  width: number;
  height: number;
  depth: number;
  rotationY?: number;
  wallTexture: THREE.Texture;
  roofTexture: THREE.Texture;
  shopWoodTexture: THREE.Texture;
}

export function createDetailedHaussmannBuilding(config: ComplexBuildingConfig): THREE.Group {
  const building = new THREE.Group();
  building.position.set(config.x, 0, config.z);
  if (config.rotationY) building.rotation.y = config.rotationY;

  const { width, height, depth, wallTexture, roofTexture, shopWoodTexture } = config;

  // Materials with PBR properties and high-contrast toon ramps
  const wallMat = new THREE.MeshStandardMaterial({
    map: wallTexture,
    roughness: 0.75,
    metalness: 0.05
  });

  const shopMat = new THREE.MeshStandardMaterial({
    map: shopWoodTexture,
    roughness: 0.45,
    metalness: 0.1
  });

  const roofMat = new THREE.MeshStandardMaterial({
    map: roofTexture,
    roughness: 0.55
  });

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x1b4965,
    roughness: 0.05,
    metalness: 0.9
  });

  const shutterMat = new THREE.MeshStandardMaterial({
    color: 0x2b59c3,
    roughness: 0.6
  });

  const trimMat = new THREE.MeshStandardMaterial({
    color: 0xdcdde1,
    roughness: 0.5
  });

  const bannerMat = new THREE.MeshStandardMaterial({
    color: 0x20bf6b,
    roughness: 0.5,
    side: THREE.DoubleSide
  });

  // 1. Ground Floor Boutique / Café Shopfront
  const groundFloorH = 4.8;
  const groundMesh = new THREE.Mesh(new THREE.BoxGeometry(width + 0.3, groundFloorH, depth + 0.3), shopMat);
  groundMesh.position.y = groundFloorH / 2;
  groundMesh.castShadow = true;
  groundMesh.receiveShadow = true;
  building.add(groundMesh);

  // Large Arch Shop Windows
  const archWindowGeo = new THREE.PlaneGeometry(width * 0.7, groundFloorH * 0.6);
  const archWindow = new THREE.Mesh(archWindowGeo, glassMat);
  archWindow.position.set(0, groundFloorH * 0.45, (depth + 0.3) / 2 + 0.04);
  building.add(archWindow);

  // Striped Red / Gold Fabric Awning
  const awningGeo = new THREE.BoxGeometry(width * 0.85, 0.12, 1.8);
  const awningMat = new THREE.MeshStandardMaterial({ color: 0xeb4d4b, roughness: 0.65 });
  const awning = new THREE.Mesh(awningGeo, awningMat);
  awning.position.set(0, groundFloorH * 0.85, (depth + 0.3) / 2 + 0.9);
  awning.rotation.x = 0.22;
  awning.castShadow = true;
  building.add(awning);

  // Hanging Vertical Green Banner (Iconic French aesthetic from reference)
  const bannerGeo = new THREE.PlaneGeometry(1.2, 3.6);
  const bannerL = new THREE.Mesh(bannerGeo, bannerMat);
  bannerL.position.set(-width / 2 - 0.2, groundFloorH + 2.5, depth / 4);
  bannerL.rotation.y = Math.PI / 2;
  building.add(bannerL);

  const bannerR = bannerL.clone();
  bannerR.position.x = width / 2 + 0.2;
  building.add(bannerR);

  // 2. Main Stone Upper Facade
  const upperH = height - groundFloorH - 3.5;
  const upperMesh = new THREE.Mesh(new THREE.BoxGeometry(width, upperH, depth), wallMat);
  upperMesh.position.y = groundFloorH + upperH / 2;
  upperMesh.castShadow = true;
  upperMesh.receiveShadow = true;
  building.add(upperMesh);

  // 3. Multi-Floor French Windows with Stone Balconies & Blue Shutters
  const floors = 4;
  const floorH = upperH / floors;
  const cols = 5;
  const colSpacing = (width - 2.5) / (cols - 1);

  for (let f = 0; f < floors; f++) {
    const y = groundFloorH + f * floorH + floorH * 0.48;

    // Floor Molded Cornice
    const cornice = new THREE.Mesh(new THREE.BoxGeometry(width + 0.5, 0.35, depth + 0.5), trimMat);
    cornice.position.y = groundFloorH + f * floorH;
    cornice.castShadow = true;
    building.add(cornice);

    for (let c = 0; c < cols; c++) {
      const x = (c - (cols - 1) / 2) * colSpacing;

      // Window Glass
      const win = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.8), glassMat);
      win.position.set(x, y, depth / 2 + 0.05);
      building.add(win);

      // Window Surrounding Frame
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.3, 2.0, 0.08), trimMat);
      frame.position.set(x, y, depth / 2 + 0.02);
      building.add(frame);

      // Blue Shutters on each side
      const shutL = new THREE.Mesh(new THREE.BoxGeometry(0.45, 1.8, 0.06), shutterMat);
      shutL.position.set(x - 0.85, y, depth / 2 + 0.06);
      building.add(shutL);

      const shutR = shutL.clone();
      shutR.position.x = x + 0.85;
      building.add(shutR);

      // Wrought-iron / Stone Balcony Railing on 2nd & 3rd Floors
      if (f === 0 || f === 1) {
        const balcony = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.55, 0.45), trimMat);
        balcony.position.set(x, y - 0.65, depth / 2 + 0.25);
        balcony.castShadow = true;
        building.add(balcony);
      }
    }
  }

  // 4. Mansard Slate Roof with Dormer Windows & Chimneys
  const roofH = 4.2;
  const roof = new THREE.Mesh(new THREE.BoxGeometry(width + 0.1, roofH, depth + 0.1), roofMat);
  roof.position.y = height - roofH / 2;
  roof.castShadow = true;
  building.add(roof);

  // Roof Dormers
  for (let c = 0; c < cols; c++) {
    const x = (c - (cols - 1) / 2) * colSpacing;
    const dormer = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.4, 1.2), wallMat);
    dormer.position.set(x, height - roofH / 2 + 0.4, depth / 2 + 0.4);
    dormer.castShadow = true;
    building.add(dormer);
  }

  // Chimneys
  for (const cx of [-width / 3, width / 3]) {
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.6, 0.8), trimMat);
    chimney.position.set(cx, height + 0.8, 0);
    building.add(chimney);
  }

  return building;
}
