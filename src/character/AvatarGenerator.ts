import * as THREE from 'three';
import { StartNgUser } from '../net/startng';

// Exact start.ng standard constants from official start.ng character architecture
const HAT_LIFT: Record<string, number> = {
  short: 0.08,
  afro: 0.3,
  braids: 0.08,
  bun: 0.08,
  ponytail: 0.08,
  dreads: 0.08,
  bald: 0
};

const BLACK = new THREE.MeshStandardMaterial({ color: '#1b1b22', roughness: 0.5 });
const GOLD = new THREE.MeshStandardMaterial({ color: '#ffcf4d', metalness: 0.6, roughness: 0.3 });

function createBox(w: number, h: number, d: number, mat: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createMesh(geometry: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const m = new THREE.Mesh(geometry, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/**
 * Full start.ng character model matching the official start.ng character generator:
 * - Blocky retro-modern proportions (0.75x0.85x0.45 torso, 0.6x0.6x0.6 head)
 * - True start.ng body proportions, limbs, head, hats, hairs, and accessories
 * - Scaled smoothly for world gameplay navigation, walking, and bike/vehicle riding
 */
export class AvatarGenerator {
  public group: THREE.Group;
  public characterMesh: THREE.Group;
  public bodyGroup: THREE.Group;
  public leftArm: THREE.Group;
  public rightArm: THREE.Group;
  public leftLeg: THREE.Group;
  public rightLeg: THREE.Group;
  public head: THREE.Group;
  public torso: THREE.Mesh;
  public skirt: THREE.Mesh;
  public shirtMat: THREE.MeshStandardMaterial;
  public pantsMat: THREE.MeshStandardMaterial;
  public skinMat: THREE.MeshStandardMaterial;
  public hairMat: THREE.MeshStandardMaterial;

  public hairSlot: THREE.Group;
  public hatSlot: THREE.Group;
  public accessorySlot: THREE.Group;

  // Animation state
  public isMoving: boolean = false;
  public animTime: number = 0;

  constructor(user: StartNgUser) {
    this.group = new THREE.Group();
    // Scaling uniformly so standard start.ng block character fits game scale
    this.characterMesh = new THREE.Group();
    this.characterMesh.scale.set(0.85, 0.85, 0.85);
    this.group.add(this.characterMesh);

    this.bodyGroup = new THREE.Group();
    this.characterMesh.add(this.bodyGroup);

    // Extract style with start.ng fallbacks
    const style = user.style || ({} as any);
    const skinColor = style.skinColor || '#d9a066';
    const primaryColor = style.primaryColor || '#9aa3b5'; // Top
    const secondaryColor = style.secondaryColor || '#4a4f60'; // Trousers / Skirt
    const hairColor = style.hairColor || '#2b1d14';
    const hairType = style.hair || 'short';
    const hatType = style.hat || 'none';
    const accessoryType = style.accessory || 'none';
    const isFemale = style.body === 'female';

    // Materials
    this.shirtMat = new THREE.MeshStandardMaterial({ color: primaryColor, roughness: 0.6 });
    this.pantsMat = new THREE.MeshStandardMaterial({ color: secondaryColor, roughness: 0.7 });
    this.skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.8 });
    this.hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9 });

    // Limbs pivot at hip/shoulder
    const createLimb = (x: number, y: number, mat: THREE.Material, length: number, width: number) => {
      const pivot = new THREE.Group();
      pivot.position.set(x, y, 0);
      pivot.add(createBox(width, length, width, mat, 0, -length / 2, 0));
      this.bodyGroup.add(pivot);
      return pivot;
    };

    // Legs (Pivot at y=0.8)
    this.leftLeg = createLimb(-0.18, 0.8, this.pantsMat, 0.8, 0.28);
    this.rightLeg = createLimb(0.18, 0.8, this.pantsMat, 0.8, 0.28);

    // Shoes details on legs
    this.leftLeg.add(createBox(0.28, 0.14, 0.36, BLACK, 0, -0.73, 0.04));
    this.rightLeg.add(createBox(0.28, 0.14, 0.36, BLACK, 0, -0.73, 0.04));

    // Torso (0.75w x 0.85h x 0.45d) centered at y=1.225
    this.torso = createBox(0.75, 0.85, 0.45, this.shirtMat, 0, 1.225, 0);
    this.torso.scale.x = isFemale ? 0.88 : 1.0;
    this.bodyGroup.add(this.torso);

    // Skirt (shown for female body)
    this.skirt = createBox(0.82, 0.32, 0.52, this.pantsMat, 0, 0.74, 0);
    this.skirt.visible = isFemale;
    this.bodyGroup.add(this.skirt);

    // Arms (Pivot at shoulder y=1.6)
    this.leftArm = createLimb(-0.5, 1.6, this.shirtMat, 0.7, 0.22);
    this.rightArm = createLimb(0.5, 1.6, this.shirtMat, 0.7, 0.22);
    // Hands
    this.leftArm.add(createBox(0.2, 0.18, 0.2, this.skinMat, 0, -0.78, 0));
    this.rightArm.add(createBox(0.2, 0.18, 0.2, this.skinMat, 0, -0.78, 0));

    // Head (0.6 cube at y=1.95)
    this.head = new THREE.Group();
    this.head.position.y = 1.95;
    this.bodyGroup.add(this.head);

    // Head base box
    this.head.add(createBox(0.6, 0.6, 0.6, this.skinMat));
    // Eyes: face looks towards +z (in game orientation, front is +z)
    this.head.add(createBox(0.1, 0.12, 0.02, BLACK, -0.13, 0.05, 0.31));
    this.head.add(createBox(0.1, 0.12, 0.02, BLACK, 0.13, 0.05, 0.31));

    // Slots for Hair, Hats, and Accessories
    this.hairSlot = new THREE.Group();
    this.head.add(this.hairSlot);

    this.hatSlot = new THREE.Group();
    const lift = HAT_LIFT[hairType] ?? HAT_LIFT.short;
    this.hatSlot.position.y = 0.3 + lift;
    this.head.add(this.hatSlot);

    this.accessorySlot = new THREE.Group();
    this.bodyGroup.add(this.accessorySlot);

    // Build Hair
    this.buildHair(hairType);

    // Build Hat
    this.buildHat(hatType);

    // Build Accessory
    this.buildAccessory(accessoryType);
  }

  private buildHair(type: string) {
    const hairTop = () => [
      createBox(0.64, 0.12, 0.64, this.hairMat, 0, 0.34, 0),
      createBox(0.64, 0.42, 0.08, this.hairMat, 0, 0.1, -0.31) // back of head is -z in model space
    ];

    if (type === 'afro') {
      const afro = createMesh(new THREE.SphereGeometry(0.42, 14, 10), this.hairMat, 0, 0.24, -0.06);
      afro.scale.y = 0.9;
      this.hairSlot.add(afro);
    } else if (type === 'braids') {
      this.hairSlot.add(...hairTop());
      [-0.24, -0.12, 0, 0.12, 0.24].forEach((x) => {
        this.hairSlot.add(createBox(0.08, 0.75, 0.08, this.hairMat, x, -0.2, -0.35));
      });
    } else if (type === 'bun') {
      this.hairSlot.add(...hairTop());
      this.hairSlot.add(createMesh(new THREE.SphereGeometry(0.17, 12, 8), this.hairMat, 0, 0.45, -0.16));
    } else if (type === 'ponytail') {
      const tail = createBox(0.14, 0.55, 0.14, this.hairMat, 0, -0.05, -0.42);
      tail.rotation.x = 0.35;
      this.hairSlot.add(...hairTop(), tail, createBox(0.17, 0.08, 0.17, this.shirtMat, 0, 0.2, -0.36));
    } else if (type === 'dreads') {
      this.hairSlot.add(...hairTop());
      for (let i = 0; i < 9; i++) {
        const a = -2 + i * 0.5;
        this.hairSlot.add(
          createMesh(
            new THREE.CylinderGeometry(0.045, 0.045, 0.65, 6),
            this.hairMat,
            Math.sin(a) * 0.33,
            -0.1,
            -Math.cos(a) * 0.33
          )
        );
      }
    } else if (type !== 'bald') {
      // short / default
      this.hairSlot.add(
        createBox(0.64, 0.12, 0.64, this.hairMat, 0, 0.34, 0),
        createBox(0.64, 0.3, 0.08, this.hairMat, 0, 0.17, -0.31)
      );
    }
  }

  private buildHat(type: string) {
    if (type === 'cap') {
      this.hatSlot.add(
        createBox(0.64, 0.2, 0.64, this.pantsMat, 0, 0.08, 0),
        createBox(0.56, 0.05, 0.32, this.pantsMat, 0, 0, 0.44) // visor towards face +z
      );
    } else if (type === 'beanie') {
      this.hatSlot.add(
        createBox(0.66, 0.32, 0.66, this.pantsMat, 0, 0.1, 0),
        createMesh(new THREE.SphereGeometry(0.12, 12, 8), this.shirtMat, 0, 0.34, 0)
      );
    } else if (type === 'tophat') {
      this.hatSlot.add(
        createMesh(new THREE.CylinderGeometry(0.45, 0.45, 0.05, 20), BLACK, 0, 0.03, 0),
        createMesh(new THREE.CylinderGeometry(0.28, 0.28, 0.55, 20), BLACK, 0, 0.3, 0),
        createMesh(new THREE.CylinderGeometry(0.29, 0.29, 0.1, 20), this.pantsMat, 0, 0.11, 0)
      );
    } else if (type === 'crown') {
      this.hatSlot.add(createMesh(new THREE.CylinderGeometry(0.32, 0.36, 0.22, 8, 1, true), GOLD, 0, 0.11, 0));
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        this.hatSlot.add(
          createMesh(new THREE.ConeGeometry(0.07, 0.18, 4), GOLD, Math.sin(a) * 0.3, 0.3, Math.cos(a) * 0.3)
        );
      }
    }
  }

  private buildAccessory(type: string) {
    if (type === 'glasses') {
      this.head.add(
        createBox(0.2, 0.14, 0.04, BLACK, -0.14, 0.05, 0.32),
        createBox(0.2, 0.14, 0.04, BLACK, 0.14, 0.05, 0.32),
        createBox(0.1, 0.03, 0.03, BLACK, 0, 0.07, 0.32)
      );
    } else if (type === 'earrings') {
      this.head.add(
        createMesh(new THREE.SphereGeometry(0.05, 8, 6), GOLD, -0.32, -0.11, 0),
        createMesh(new THREE.SphereGeometry(0.05, 8, 6), GOLD, 0.32, -0.11, 0)
      );
    } else if (type === 'beard') {
      this.head.add(createBox(0.52, 0.22, 0.08, this.hairMat, 0, -0.19, 0.31));
    } else if (type === 'scarf') {
      this.accessorySlot.add(
        createBox(0.7, 0.16, 0.5, this.pantsMat, 0, 1.66, 0),
        createBox(0.16, 0.45, 0.06, this.pantsMat, 0.18, 1.45, -0.26)
      );
    } else if (type === 'backpack') {
      this.accessorySlot.add(
        createBox(0.56, 0.62, 0.26, this.pantsMat, 0, 1.25, -0.34),
        createBox(0.58, 0.14, 0.28, this.shirtMat, 0, 1.5, -0.34)
      );
    }
  }

  public setOutfit(shirtColor: number, pantsColor: number) {
    this.shirtMat.color.setHex(shirtColor);
    this.pantsMat.color.setHex(pantsColor);
  }

  /**
   * Running & Walking Animation
   */
  public updateAnimation(delta: number, isMoving: boolean, speedMultiplier = 1.0) {
    // Reset posture from riding
    this.torso.rotation.x = 0;
    this.head.rotation.x = 0;
    this.leftArm.rotation.y = 0;
    this.rightArm.rotation.y = 0;

    if (isMoving) {
      this.animTime += delta * 12 * speedMultiplier;
      const swing = Math.sin(this.animTime);

      this.leftLeg.rotation.x = swing * 0.9;
      this.rightLeg.rotation.x = -swing * 0.9;

      this.leftArm.rotation.x = -swing * 0.8;
      this.rightArm.rotation.x = swing * 0.8;

      this.bodyGroup.position.y = Math.abs(Math.cos(this.animTime)) * 0.08;
    } else {
      this.animTime += delta * 2;
      const breathe = Math.sin(this.animTime);

      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = breathe * 0.05;
      this.rightArm.rotation.x = -breathe * 0.05;

      this.bodyGroup.position.y = (breathe + 1) * 0.015;
    }
  }

  /**
   * Dedicated Riding & Pedaling Animation for Bicycle, Okada Scooter, and Vehicles
   */
  public updateRidingAnimation(delta: number, vehicleType: string, speed: number) {
    const isMoving = Math.abs(speed) > 0.3;
    const speedDir = speed >= 0 ? 1 : -1;

    if (vehicleType === 'bicycle') {
      this.torso.rotation.x = 0.25;
      this.head.rotation.x = -0.2;
      this.leftArm.rotation.x = -0.85;
      this.rightArm.rotation.x = -0.85;
      this.leftArm.rotation.y = 0.15;
      this.rightArm.rotation.y = -0.15;

      if (isMoving) {
        this.animTime += delta * (Math.abs(speed) * 0.9 + 2.5) * speedDir;
        this.leftLeg.rotation.x = Math.sin(this.animTime) * 0.65;
        this.rightLeg.rotation.x = Math.sin(this.animTime + Math.PI) * 0.65;
        this.bodyGroup.position.y = Math.sin(this.animTime * 2) * 0.02;
      } else {
        this.leftLeg.rotation.x = 0.4;
        this.rightLeg.rotation.x = -0.4;
        this.bodyGroup.position.y = 0;
      }
    } else if (vehicleType === 'scooter') {
      this.torso.rotation.x = 0.1;
      this.head.rotation.x = -0.05;
      this.leftArm.rotation.x = -0.75;
      this.rightArm.rotation.x = -0.75;
      this.leftArm.rotation.y = 0.1;
      this.rightArm.rotation.y = -0.1;

      this.leftLeg.rotation.x = 0.55;
      this.rightLeg.rotation.x = 0.55;

      if (isMoving) {
        this.animTime += delta * 15;
        this.bodyGroup.position.y = Math.sin(this.animTime) * 0.02;
      } else {
        this.bodyGroup.position.y = 0;
      }
    } else {
      // Danfo / Keke / Car driver posture
      this.torso.rotation.x = 0.05;
      this.head.rotation.x = 0;
      this.leftArm.rotation.x = -0.65;
      this.rightArm.rotation.x = -0.65;
      this.leftArm.rotation.y = 0.2;
      this.rightArm.rotation.y = -0.2;

      this.leftLeg.rotation.x = 1.1;
      this.rightLeg.rotation.x = 1.1;
      this.bodyGroup.position.y = -0.1;
    }
  }
}
