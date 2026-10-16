import * as THREE from 'three';

export interface BuildingOptions {
  width: number;
  height: number;
  depth: number;
  floors: number;
  wallColor: number;
  trimColor: number;
  hasShopFront?: boolean;
  shopSign?: string;
  roofType?: 'mansard' | 'flat' | 'sloped';
}

export class EuropeanUrbanBuilding {
  public mesh: THREE.Group;

  constructor(opts: BuildingOptions) {
    this.mesh = new THREE.Group();

    const {
      width,
      height,
      depth,
      floors,
      wallColor,
      trimColor,
      hasShopFront = true,
      roofType = 'mansard'
    } = opts;

    // Materials
    const wallMat = new THREE.MeshStandardMaterial({
      color: wallColor,
      roughness: 0.8,
      metalness: 0.05
    });

    const trimMat = new THREE.MeshStandardMaterial({
      color: trimColor,
      roughness: 0.6,
      metalness: 0.1
    });

    const windowGlassMat = new THREE.MeshStandardMaterial({
      color: 0x225588,
      roughness: 0.1,
      metalness: 0.85
    });

    const windowFrameMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.5
    });

    const shutterMat = new THREE.MeshStandardMaterial({
      color: 0x4b7bec,
      roughness: 0.7
    });

    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x4a6572,
      roughness: 0.7
    });

    const shopMat = new THREE.MeshStandardMaterial({
      color: 0x8b0000,
      roughness: 0.5
    });

    // 1. Main Core Block
    const core = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), wallMat);
    core.position.y = height / 2;
    core.castShadow = true;
    core.receiveShadow = true;
    this.mesh.add(core);

    // 2. Base / Ground floor Shopfront
    const floorH = height / floors;
    if (hasShopFront) {
      const shopBase = new THREE.Mesh(new THREE.BoxGeometry(width + 0.3, floorH, depth + 0.3), shopMat);
      shopBase.position.y = floorH / 2;
      shopBase.castShadow = true;
      this.mesh.add(shopBase);

      // Shop Window display
      const displayGlass = new THREE.Mesh(new THREE.BoxGeometry(width * 0.7, floorH * 0.55, 0.2), windowGlassMat);
      displayGlass.position.set(0, floorH * 0.45, (depth + 0.3) / 2 + 0.05);
      this.mesh.add(displayGlass);

      // Awning Canopy
      const awningGeo = new THREE.BoxGeometry(width * 0.85, 0.1, 1.4);
      const awningMat = new THREE.MeshStandardMaterial({ color: 0xeb4d4b, roughness: 0.6 });
      const awning = new THREE.Mesh(awningGeo, awningMat);
      awning.position.set(0, floorH * 0.82, (depth + 0.3) / 2 + 0.65);
      awning.rotation.x = 0.2;
      this.mesh.add(awning);

      // Banner signs hanging from sides (like Pokemon Lumiose city)
      const bannerGeo = new THREE.PlaneGeometry(0.8, 2.2);
      const bannerMat = new THREE.MeshStandardMaterial({ color: 0x2ed573, side: THREE.DoubleSide, roughness: 0.5 });
      const bannerL = new THREE.Mesh(bannerGeo, bannerMat);
      bannerL.position.set(-width / 2 - 0.2, floorH * 1.5, depth / 4);
      bannerL.rotation.y = Math.PI / 2;
      this.mesh.add(bannerL);

      const bannerR = bannerL.clone();
      bannerR.position.x = width / 2 + 0.2;
      this.mesh.add(bannerR);
    }

    // 3. Cornices / Floor Ledges
    for (let f = 1; f <= floors; f++) {
      const ledge = new THREE.Mesh(new THREE.BoxGeometry(width + 0.4, 0.25, depth + 0.4), trimMat);
      ledge.position.y = f * floorH;
      ledge.castShadow = true;
      this.mesh.add(ledge);
    }

    // 4. Windows with Trim and Shutters (Front Face)
    const winWidth = 0.9;
    const winHeight = 1.4;
    const cols = Math.floor(width / 2.2);

    for (let f = hasShopFront ? 1 : 0; f < floors; f++) {
      const y = f * floorH + floorH * 0.55;
      for (let c = 0; c < cols; c++) {
        const x = (c - (cols - 1) / 2) * 2.2;

        // Window Glass
        const win = new THREE.Mesh(new THREE.PlaneGeometry(winWidth, winHeight), windowGlassMat);
        win.position.set(x, y, depth / 2 + 0.05);
        this.mesh.add(win);

        // Frame
        const frame = new THREE.Mesh(new THREE.BoxGeometry(winWidth + 0.2, winHeight + 0.2, 0.08), windowFrameMat);
        frame.position.set(x, y, depth / 2 + 0.03);
        this.mesh.add(frame);

        // Blue Shutters
        const shutterL = new THREE.Mesh(new THREE.BoxGeometry(0.4, winHeight, 0.05), shutterMat);
        shutterL.position.set(x - winWidth / 2 - 0.25, y, depth / 2 + 0.06);
        this.mesh.add(shutterL);

        const shutterR = shutterL.clone();
        shutterR.position.x = x + winWidth / 2 + 0.25;
        this.mesh.add(shutterR);

        // Balcony railing for French windows on floor 2
        if (f === 1) {
          const balcony = new THREE.Mesh(new THREE.BoxGeometry(winWidth + 0.3, 0.5, 0.35), trimMat);
          balcony.position.set(x, y - 0.5, depth / 2 + 0.2);
          this.mesh.add(balcony);
        }
      }
    }

    // 5. Roof (Mansard / Slate Roof with dormer windows)
    if (roofType === 'mansard') {
      const roofH = 2.8;
      const roof = new THREE.Mesh(new THREE.BoxGeometry(width + 0.1, roofH, depth + 0.1), roofMat);
      roof.position.y = height + roofH / 2;
      this.mesh.add(roof);

      // Dormers
      for (let c = 0; c < cols; c++) {
        const x = (c - (cols - 1) / 2) * 2.2;
        const dormer = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.8), wallMat);
        dormer.position.set(x, height + 1.0, depth / 2 + 0.3);
        this.mesh.add(dormer);
      }
    }
  }
}
