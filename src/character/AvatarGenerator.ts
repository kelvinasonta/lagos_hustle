import * as THREE from 'three';
import { StartNgUser } from '../net/startng';

export class AvatarGenerator {
  public group: THREE.Group;
  public characterMesh: THREE.Group;
  public leftArm: THREE.Group;
  public rightArm: THREE.Group;
  public leftLeg: THREE.Group;
  public rightLeg: THREE.Group;
  public head: THREE.Group;
  public torso: THREE.Group;
  public shirtMat: THREE.MeshStandardMaterial;
  public pantsMat: THREE.MeshStandardMaterial;
  public hatGroup: THREE.Group;

  // Animation state
  public isMoving: boolean = false;
  public animTime: number = 0;

  constructor(user: StartNgUser) {
    this.group = new THREE.Group();
    this.characterMesh = new THREE.Group();
    this.group.add(this.characterMesh);
    this.hatGroup = new THREE.Group();

    // Extract style with fallbacks
    const style = user.style || {};
    const skinColor = new THREE.Color(style.skinColor || '#8d5524');
    const primaryColor = new THREE.Color(style.primaryColor || '#fbc531'); // Shirt
    const secondaryColor = new THREE.Color(style.secondaryColor || '#2f3640'); // Trousers
    const hairColor = new THREE.Color(style.hairColor || '#17120f');
    const hairType = style.hair || 'short';
    const hatType = style.hat || 'none';
    const accessoryType = style.accessory || 'none';

    // Materials
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 });
    this.shirtMat = new THREE.MeshStandardMaterial({ color: primaryColor, roughness: 0.7 });
    this.pantsMat = new THREE.MeshStandardMaterial({ color: secondaryColor, roughness: 0.8 });
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
    const hatMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf39c12, metalness: 0.8, roughness: 0.2 });

    // 1. Torso & Belt
    this.torso = new THREE.Group();
    this.torso.position.y = 1.05;
    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.28), this.shirtMat);
    torsoMesh.castShadow = true;
    this.torso.add(torsoMesh);

    // Collar detail
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.3), this.shirtMat);
    collar.position.y = 0.3;
    this.torso.add(collar);

    this.characterMesh.add(this.torso);

    // 2. Head & Neck
    this.head = new THREE.Group();
    this.head.position.y = 1.55;

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.16, 8), skinMat);
    neck.position.y = -0.15;
    this.head.add(neck);

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.32, 0.3), skinMat);
    headMesh.castShadow = true;
    this.head.add(headMesh);

    // Eyes
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.02), eyeMat);
    leftEye.position.set(-0.07, 0.02, 0.16);
    const rightEye = leftEye.clone();
    rightEye.position.x = 0.07;
    this.head.add(leftEye);
    this.head.add(rightEye);

    // Hair Styles (short, afro, braids, bun, ponytail, dreads, bald)
    if (hairType === 'afro') {
      const afro = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12), hairMat);
      afro.position.set(0, 0.14, -0.02);
      this.head.add(afro);
    } else if (hairType === 'dreads' || hairType === 'braids') {
      const hairBase = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.34), hairMat);
      hairBase.position.y = 0.14;
      this.head.add(hairBase);
      // Dreads/braids falling down
      for (let i = -0.12; i <= 0.12; i += 0.06) {
        const dread = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), hairMat);
        dread.position.set(i, -0.08, -0.14);
        this.head.add(dread);
      }
    } else if (hairType === 'bun') {
      const hairCap = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.32), hairMat);
      hairCap.position.y = 0.14;
      this.head.add(hairCap);
      const bun = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), hairMat);
      bun.position.set(0, 0.24, -0.1);
      this.head.add(bun);
    } else if (hairType === 'ponytail') {
      const hairCap = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.32), hairMat);
      hairCap.position.y = 0.14;
      this.head.add(hairCap);
      const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.02, 0.25), hairMat);
      tail.position.set(0, 0.08, -0.2);
      tail.rotation.x = -Math.PI / 6;
      this.head.add(tail);
    } else if (hairType !== 'bald') {
      // Default / short
      const hairCap = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.32), hairMat);
      hairCap.position.y = 0.14;
      this.head.add(hairCap);
    }

    // Hats (none, cap, beanie, tophat, crown)
    if (hatType === 'cap') {
      const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.19, 0.1, 12), hatMat);
      capTop.position.y = 0.2;
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.02, 0.16), hatMat);
      visor.position.set(0, 0.16, 0.2);
      this.head.add(capTop);
      this.head.add(visor);
    } else if (hatType === 'crown') {
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.12, 8), goldMat);
      crown.position.y = 0.22;
      this.head.add(crown);
    } else if (hatType === 'beanie') {
      const beanie = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), hatMat);
      beanie.scale.set(1, 1.2, 1);
      beanie.position.y = 0.18;
      this.head.add(beanie);
    } else if (hatType === 'tophat') {
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.02, 12), hatMat);
      brim.position.y = 0.18;
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.22, 12), hatMat);
      crown.position.y = 0.29;
      this.head.add(brim);
      this.head.add(crown);
    }

    // Accessories (none, glasses, earrings, beard, scarf, backpack)
    if (accessoryType === 'glasses') {
      const glassMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
      const frames = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.06, 0.04), glassMat);
      frames.position.set(0, 0.02, 0.17);
      this.head.add(frames);
    } else if (accessoryType === 'earrings') {
      const earring = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.008, 6, 12), goldMat);
      earring.position.set(0.17, -0.02, 0);
      earring.rotation.y = Math.PI / 2;
      this.head.add(earring);
    } else if (accessoryType === 'beard') {
      const beard = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.14, 0.08), hairMat);
      beard.position.set(0, -0.12, 0.14);
      this.head.add(beard);
    } else if (accessoryType === 'scarf') {
      const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.06, 8, 12), this.shirtMat);
      scarf.position.set(0, -0.22, 0);
      scarf.rotation.x = Math.PI / 2;
      this.head.add(scarf);
    }

    if (accessoryType === 'backpack') {
      const packMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.8 });
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.44, 0.18), packMat);
      pack.position.set(0, 0, -0.22);
      pack.castShadow = true;
      this.torso.add(pack);
    }

    this.characterMesh.add(this.head);

    // 3. Arms
    // Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.34, 1.3, 0);
    const leftArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.16), this.shirtMat);
    leftArmMesh.position.y = -0.22;
    leftArmMesh.castShadow = true;
    this.leftArm.add(leftArmMesh);
    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), skinMat);
    leftHand.position.y = -0.52;
    this.leftArm.add(leftHand);
    this.characterMesh.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.34, 1.3, 0);
    const rightArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.16), this.shirtMat);
    rightArmMesh.position.y = -0.22;
    rightArmMesh.castShadow = true;
    this.rightArm.add(rightArmMesh);
    const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), skinMat);
    rightHand.position.y = -0.52;
    this.rightArm.add(rightHand);
    this.characterMesh.add(this.rightArm);

    // 4. Legs
    // Left Leg
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.14, 0.75, 0);
    const leftLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.65, 0.2), this.pantsMat);
    leftLegMesh.position.y = -0.3;
    leftLegMesh.castShadow = true;
    this.leftLeg.add(leftLegMesh);
    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.28), shoeMat);
    leftShoe.position.set(0, -0.65, 0.04);
    leftShoe.castShadow = true;
    this.leftLeg.add(leftShoe);
    this.characterMesh.add(this.leftLeg);

    // Right Leg
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.14, 0.75, 0);
    const rightLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.65, 0.2), this.pantsMat);
    rightLegMesh.position.y = -0.3;
    rightLegMesh.castShadow = true;
    this.rightLeg.add(rightLegMesh);
    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.28), shoeMat);
    rightShoe.position.set(0, -0.65, 0.04);
    rightShoe.castShadow = true;
    this.rightLeg.add(rightShoe);
    this.characterMesh.add(this.rightLeg);
  }

  public setOutfit(shirtColor: number, pantsColor: number) {
    this.shirtMat.color.setHex(shirtColor);
    this.pantsMat.color.setHex(pantsColor);
  }

  public updateAnimation(delta: number, isMoving: boolean, speedMultiplier: number = 1.0) {
    // Reset any posture changes from riding
    this.torso.rotation.x = 0;
    this.head.rotation.x = 0;
    this.leftArm.rotation.y = 0;
    this.rightArm.rotation.y = 0;

    if (isMoving) {
      this.animTime += delta * 10 * speedMultiplier;
      const angle = Math.sin(this.animTime) * 0.7;

      this.leftLeg.rotation.x = angle;
      this.rightLeg.rotation.x = -angle;

      this.leftArm.rotation.x = -angle * 0.8;
      this.rightArm.rotation.x = angle * 0.8;

      // Slight head bob & torso bounce
      this.torso.position.y = 1.05 + Math.abs(Math.sin(this.animTime * 2)) * 0.04;
      this.head.position.y = 1.55 + Math.abs(Math.sin(this.animTime * 2)) * 0.04;
    } else {
      // Idle breathing
      this.animTime += delta * 2;
      const breath = Math.sin(this.animTime) * 0.03;
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = breath * 0.5;
      this.rightArm.rotation.x = -breath * 0.5;
      this.torso.position.y = 1.05 + breath;
      this.head.position.y = 1.55 + breath * 1.2;
    }
  }

  /**
   * Dedicated Riding & Pedaling Animation for Bicycle, Okada Scooter, and Driving
   */
  public updateRidingAnimation(delta: number, vehicleType: string, speed: number) {
    const isMoving = Math.abs(speed) > 0.3;
    const speedDir = speed >= 0 ? 1 : -1;

    if (vehicleType === 'bicycle') {
      // Bicycle: Hands gripping handlebars forward, torso leaned forward, circular pedaling motion
      this.torso.rotation.x = 0.25;
      this.head.rotation.x = -0.2; // Look up towards road
      this.leftArm.rotation.x = -0.85;
      this.rightArm.rotation.x = -0.85;
      this.leftArm.rotation.y = 0.15;
      this.rightArm.rotation.y = -0.15;

      if (isMoving) {
        this.animTime += delta * (Math.abs(speed) * 0.9 + 2.5) * speedDir;
        // Circular out-of-phase pedaling legs
        this.leftLeg.rotation.x = Math.sin(this.animTime) * 0.65;
        this.rightLeg.rotation.x = Math.sin(this.animTime + Math.PI) * 0.65;
        this.torso.position.y = 1.05 + Math.sin(this.animTime * 2) * 0.02;
      } else {
        // Feet resting on pedals
        this.leftLeg.rotation.x = 0.4;
        this.rightLeg.rotation.x = -0.4;
        this.torso.position.y = 1.05;
      }
    } else if (vehicleType === 'scooter') {
      // Okada Scooter: Upright courier stance, hands reaching forward to grips, feet bent forward on footboard
      this.torso.rotation.x = 0.1;
      this.head.rotation.x = -0.05;
      this.leftArm.rotation.x = -0.75;
      this.rightArm.rotation.x = -0.75;
      this.leftArm.rotation.y = 0.1;
      this.rightArm.rotation.y = -0.1;

      // Feet positioned forward on footboard
      this.leftLeg.rotation.x = 0.55;
      this.rightLeg.rotation.x = 0.55;

      // Slight road vibration when moving
      if (isMoving) {
        this.animTime += delta * 15;
        const vib = Math.sin(this.animTime) * 0.015;
        this.torso.position.y = 1.05 + vib;
        this.head.position.y = 1.55 + vib * 1.5;
      } else {
        this.torso.position.y = 1.05;
        this.head.position.y = 1.55;
      }
    } else {
      // Danfo Bus / Keke / Car Driver: Seated driving posture with hands on wheel
      this.torso.rotation.x = 0.05;
      this.head.rotation.x = 0;
      this.leftArm.rotation.x = -0.65;
      this.rightArm.rotation.x = -0.65;
      this.leftArm.rotation.y = 0.2;
      this.rightArm.rotation.y = -0.2;

      // Seated legs bent 90 degrees
      this.leftLeg.rotation.x = 1.1;
      this.rightLeg.rotation.x = 1.1;
      this.torso.position.y = 0.95;
      this.head.position.y = 1.45;
    }
  }
}

