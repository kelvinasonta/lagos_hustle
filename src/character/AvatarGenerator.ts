import * as THREE from 'three';
import { StartNgUser } from '../net/startng';

// Exact start.ng standard constants from start.ng character architecture
const HAT_LIFT: Record<string, number> = {
  short: 0.08,
  afro: 0.28,
  braids: 0.08,
  bun: 0.08,
  ponytail: 0.08,
  dreads: 0.08,
  bald: 0
};

const BLACK = new THREE.MeshStandardMaterial({ color: '#1b1b22', roughness: 0.5 });
const GOLD = new THREE.MeshStandardMaterial({ color: '#ffcf4d', metalness: 0.7, roughness: 0.25 });

/**
 * Natural Humanoid Stylized Character Generator for start.ng:
 * - Natural anatomical contours with smooth curves, shoulders, tapered limbs and waist.
 * - Distinct male (broad athletic shoulders, straight torso) and female (slender, tapered waist, optional skirt) anatomy.
 * - Clean sculpted head with curved jawline, expressive eyes, authentic hair shapes, hats and accessories.
 * - Fully mapped to all start.ng style fields (body, primaryColor, secondaryColor, skinColor, hairColor, hair, hat, accessory).
 * - Full walking, running, and vehicle-riding animations (pedaling bicycle, Okada courier stance, and seated driving).
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
  public torso: THREE.Group;
  public skirt?: THREE.Mesh;
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
    this.characterMesh = new THREE.Group();
    this.group.add(this.characterMesh);

    this.bodyGroup = new THREE.Group();
    this.characterMesh.add(this.bodyGroup);

    // Extract style with start.ng fallbacks
    const style = user.style || ({} as any);
    const skinColor = style.skinColor || '#d9a066';
    const primaryColor = style.primaryColor || '#4b7bec'; // Top
    const secondaryColor = style.secondaryColor || '#2f3640'; // Trousers
    const hairColor = style.hairColor || '#17120f';
    const hairType = style.hair || 'short';
    const hatType = style.hat || 'none';
    const accessoryType = style.accessory || 'none';
    const isFemale = style.body === 'female';

    // Materials
    this.shirtMat = new THREE.MeshStandardMaterial({ color: primaryColor, roughness: 0.65 });
    this.pantsMat = new THREE.MeshStandardMaterial({ color: secondaryColor, roughness: 0.75 });
    this.skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 });
    this.hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.85 });

    // 1. Natural Torso & Chest
    this.torso = new THREE.Group();
    this.torso.position.y = 1.02;

    const chestRadiusTop = isFemale ? 0.22 : 0.27;
    const chestRadiusBot = isFemale ? 0.17 : 0.21;
    const chestGeom = new THREE.CylinderGeometry(chestRadiusTop, chestRadiusBot, 0.62, 14);
    const chestMesh = new THREE.Mesh(chestGeom, this.shirtMat);
    chestMesh.castShadow = true;
    chestMesh.receiveShadow = true;
    this.torso.add(chestMesh);

    // Collar / neckline detail
    const collarGeom = new THREE.TorusGeometry(isFemale ? 0.15 : 0.18, 0.035, 8, 16);
    const collar = new THREE.Mesh(collarGeom, this.shirtMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 0.31;
    this.torso.add(collar);

    // Female Skirt or Hip Belt
    if (isFemale) {
      const skirtGeom = new THREE.CylinderGeometry(0.2, 0.34, 0.36, 14);
      this.skirt = new THREE.Mesh(skirtGeom, this.pantsMat);
      this.skirt.position.y = -0.32;
      this.skirt.castShadow = true;
      this.torso.add(this.skirt);
    } else {
      // Masculine belt/hip ring
      const beltGeom = new THREE.CylinderGeometry(0.22, 0.22, 0.08, 14);
      const belt = new THREE.Mesh(beltGeom, this.pantsMat);
      belt.position.y = -0.31;
      this.torso.add(belt);
    }

    this.bodyGroup.add(this.torso);

    // 2. Head, Neck & Face Features
    this.head = new THREE.Group();
    this.head.position.y = 1.56;

    // Curved athletic neck
    const neckGeom = new THREE.CylinderGeometry(0.08, 0.1, 0.16, 10);
    const neck = new THREE.Mesh(neckGeom, this.skinMat);
    neck.position.y = -0.15;
    this.head.add(neck);

    // Natural curved head silhouette
    const headGeom = new THREE.SphereGeometry(0.22, 16, 16);
    headGeom.scale(1.0, 1.15, 1.05);
    const headMesh = new THREE.Mesh(headGeom, this.skinMat);
    headMesh.castShadow = true;
    this.head.add(headMesh);

    // Expressive Eyes with pupil and white sclera (looking forward +z)
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyeIrisMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    [-0.07, 0.07].forEach((x) => {
      const eyeWhite = new THREE.Mesh(new THREE.PlaneGeometry(0.055, 0.05), eyeWhiteMat);
      eyeWhite.position.set(x, 0.03, 0.222);
      this.head.add(eyeWhite);

      const pupil = new THREE.Mesh(new THREE.PlaneGeometry(0.032, 0.038), eyeIrisMat);
      pupil.position.set(x, 0.03, 0.226);
      this.head.add(pupil);
    });

    // Slots for Hair, Hats, and Accessories
    this.hairSlot = new THREE.Group();
    this.head.add(this.hairSlot);

    this.hatSlot = new THREE.Group();
    const lift = HAT_LIFT[hairType] ?? HAT_LIFT.short;
    this.hatSlot.position.y = 0.2 + lift;
    this.head.add(this.hatSlot);

    this.accessorySlot = new THREE.Group();
    this.bodyGroup.add(this.accessorySlot);

    this.bodyGroup.add(this.head);

    // 3. Natural Contoured Arms
    const armX = isFemale ? 0.31 : 0.36;
    const armRadiusTop = isFemale ? 0.065 : 0.085;
    const armRadiusBot = isFemale ? 0.055 : 0.07;

    // Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-armX, 1.28, 0);
    const lArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(armRadiusTop, armRadiusBot, 0.54, 10), this.shirtMat);
    lArmMesh.position.y = -0.22;
    lArmMesh.castShadow = true;
    this.leftArm.add(lArmMesh);
    const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 10), this.skinMat);
    lHand.position.y = -0.52;
    this.leftArm.add(lHand);
    this.bodyGroup.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(armX, 1.28, 0);
    const rArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(armRadiusTop, armRadiusBot, 0.54, 10), this.shirtMat);
    rArmMesh.position.y = -0.22;
    rArmMesh.castShadow = true;
    this.rightArm.add(rArmMesh);
    const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 10), this.skinMat);
    rHand.position.y = -0.52;
    this.rightArm.add(rHand);
    this.bodyGroup.add(this.rightArm);

    // 4. Natural Contoured Legs
    const legX = isFemale ? 0.12 : 0.14;
    const legRadiusTop = isFemale ? 0.085 : 0.1;
    const legRadiusBot = isFemale ? 0.07 : 0.08;

    // Left Leg
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-legX, 0.72, 0);
    const lLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(legRadiusTop, legRadiusBot, 0.66, 10), this.pantsMat);
    lLegMesh.position.y = -0.28;
    lLegMesh.castShadow = true;
    this.leftLeg.add(lLegMesh);
    // Shoes
    const shoeGeom = new THREE.BoxGeometry(0.16, 0.12, 0.28);
    const lShoe = new THREE.Mesh(shoeGeom, BLACK);
    lShoe.position.set(0, -0.63, 0.04);
    lShoe.castShadow = true;
    this.leftLeg.add(lShoe);
    this.bodyGroup.add(this.leftLeg);

    // Right Leg
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(legX, 0.72, 0);
    const rLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(legRadiusTop, legRadiusBot, 0.66, 10), this.pantsMat);
    rLegMesh.position.y = -0.28;
    rLegMesh.castShadow = true;
    this.rightLeg.add(rLegMesh);
    const rShoe = new THREE.Mesh(shoeGeom, BLACK);
    rShoe.position.set(0, -0.63, 0.04);
    rShoe.castShadow = true;
    this.rightLeg.add(rShoe);
    this.bodyGroup.add(this.rightLeg);

    // Build Hair, Hat, and Accessories
    this.buildHair(hairType);
    this.buildHat(hatType);
    this.buildAccessory(accessoryType);
  }

  private buildHair(type: string) {
    if (type === 'afro') {
      const afro = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 14), this.hairMat);
      afro.position.set(0, 0.12, -0.02);
      this.hairSlot.add(afro);
    } else if (type === 'braids') {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), this.hairMat);
      cap.position.y = 0.08;
      this.hairSlot.add(cap);
      [-0.15, -0.07, 0, 0.07, 0.15].forEach((x) => {
        const braid = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.55, 6), this.hairMat);
        braid.position.set(x, -0.15, -0.18);
        this.hairSlot.add(braid);
      });
    } else if (type === 'bun') {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), this.hairMat);
      cap.position.y = 0.08;
      this.hairSlot.add(cap);
      const bun = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10), this.hairMat);
      bun.position.set(0, 0.26, -0.12);
      this.hairSlot.add(bun);
    } else if (type === 'ponytail') {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), this.hairMat);
      cap.position.y = 0.08;
      this.hairSlot.add(cap);
      const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.025, 0.38, 8), this.hairMat);
      tail.position.set(0, 0.05, -0.25);
      tail.rotation.x = -Math.PI / 4;
      this.hairSlot.add(tail);
    } else if (type === 'dreads') {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), this.hairMat);
      cap.position.y = 0.08;
      this.hairSlot.add(cap);
      for (let i = 0; i < 9; i++) {
        const a = -2.2 + i * 0.55;
        const dread = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.45, 6), this.hairMat);
        dread.position.set(Math.sin(a) * 0.22, -0.1, Math.cos(a) * 0.22);
        this.hairSlot.add(dread);
      }
    } else if (type !== 'bald') {
      // Natural short hair cap
      const shortHair = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), this.hairMat);
      shortHair.position.set(0, 0.06, -0.03);
      shortHair.scale.set(1.04, 1.05, 1.1);
      this.hairSlot.add(shortHair);
    }
  }

  private buildHat(type: string) {
    if (type === 'cap') {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.1, 14), this.pantsMat);
      cap.position.y = 0.06;
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.02, 0.16), this.pantsMat);
      visor.position.set(0, 0.02, 0.2);
      this.hatSlot.add(cap);
      this.hatSlot.add(visor);
    } else if (type === 'beanie') {
      const beanie = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), this.pantsMat);
      beanie.scale.set(1.0, 1.15, 1.0);
      beanie.position.y = 0.05;
      const puff = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), this.shirtMat);
      puff.position.y = 0.32;
      this.hatSlot.add(beanie);
      this.hatSlot.add(puff);
    } else if (type === 'tophat') {
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.03, 16), BLACK);
      brim.position.y = 0.02;
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.32, 16), BLACK);
      crown.position.y = 0.18;
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.205, 0.205, 0.07, 16), this.pantsMat);
      band.position.y = 0.07;
      this.hatSlot.add(brim, crown, band);
    } else if (type === 'crown') {
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.14, 8, 1, true), GOLD);
      crown.position.y = 0.08;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.12, 4), GOLD);
        spike.position.set(Math.sin(a) * 0.21, 0.2, Math.cos(a) * 0.21);
        this.hatSlot.add(spike);
      }
      this.hatSlot.add(crown);
    }
  }

  private buildAccessory(type: string) {
    if (type === 'glasses') {
      const frameMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      const frames = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.06, 0.03), frameMat);
      frames.position.set(0, 0.03, 0.23);
      this.head.add(frames);
    } else if (type === 'earrings') {
      [-0.23, 0.23].forEach((x) => {
        const earring = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.008, 6, 12), GOLD);
        earring.position.set(x, -0.04, 0);
        earring.rotation.y = Math.PI / 2;
        this.head.add(earring);
      });
    } else if (type === 'beard') {
      const beard = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.14, 0.08), this.hairMat);
      beard.position.set(0, -0.15, 0.18);
      this.head.add(beard);
    } else if (type === 'scarf') {
      const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.055, 8, 16), this.pantsMat);
      scarf.position.set(0, 1.42, 0);
      scarf.rotation.x = Math.PI / 2;
      this.accessorySlot.add(scarf);
    } else if (type === 'backpack') {
      const bagMat = new THREE.MeshStandardMaterial({ color: 0xd63031, roughness: 0.8 });
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.44, 0.2), bagMat);
      pack.position.set(0, 1.05, -0.22);
      pack.castShadow = true;
      this.accessorySlot.add(pack);
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
      this.animTime += delta * 11 * speedMultiplier;
      const swing = Math.sin(this.animTime);

      this.leftLeg.rotation.x = swing * 0.75;
      this.rightLeg.rotation.x = -swing * 0.75;

      this.leftArm.rotation.x = -swing * 0.7;
      this.rightArm.rotation.x = swing * 0.7;

      this.torso.position.y = 1.02 + Math.abs(Math.sin(this.animTime * 2)) * 0.04;
      this.head.position.y = 1.56 + Math.abs(Math.sin(this.animTime * 2)) * 0.04;
    } else {
      this.animTime += delta * 2;
      const breathe = Math.sin(this.animTime) * 0.02;

      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = breathe * 0.5;
      this.rightArm.rotation.x = -breathe * 0.5;

      this.torso.position.y = 1.02 + breathe;
      this.head.position.y = 1.56 + breathe * 1.2;
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
        this.torso.position.y = 1.02 + Math.sin(this.animTime * 2) * 0.02;
      } else {
        this.leftLeg.rotation.x = 0.4;
        this.rightLeg.rotation.x = -0.4;
        this.torso.position.y = 1.02;
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
        const vib = Math.sin(this.animTime) * 0.015;
        this.torso.position.y = 1.02 + vib;
        this.head.position.y = 1.56 + vib * 1.5;
      } else {
        this.torso.position.y = 1.02;
        this.head.position.y = 1.56;
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
      this.torso.position.y = 0.92;
      this.head.position.y = 1.46;
    }
  }
}
