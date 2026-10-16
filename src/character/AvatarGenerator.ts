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

  // Animation state
  public isMoving: boolean = false;
  public animTime: number = 0;

  constructor(user: StartNgUser) {
    this.group = new THREE.Group();
    this.characterMesh = new THREE.Group();
    this.group.add(this.characterMesh);

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
    const shirtMat = new THREE.MeshStandardMaterial({ color: primaryColor, roughness: 0.7 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: secondaryColor, roughness: 0.8 });
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
    const hatMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf39c12, metalness: 0.8, roughness: 0.2 });

    // 1. Torso & Belt
    this.torso = new THREE.Group();
    this.torso.position.y = 1.05;
    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.28), shirtMat);
    torsoMesh.castShadow = true;
    this.torso.add(torsoMesh);

    // Collar detail
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.3), shirtMat);
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

    // Hair Styles
    if (hairType === 'afro') {
      const afro = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12), hairMat);
      afro.position.set(0, 0.14, -0.02);
      this.head.add(afro);
    } else if (hairType === 'dreads' || hairType === 'braids') {
      const hairBase = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.34), hairMat);
      hairBase.position.y = 0.14;
      this.head.add(hairBase);
      // Dreads falling down
      for (let i = -0.12; i <= 0.12; i += 0.06) {
        const dread = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), hairMat);
        dread.position.set(i, -0.08, -0.14);
        this.head.add(dread);
      }
    } else if (hairType !== 'bald') {
      // Default / short
      const hairCap = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.32), hairMat);
      hairCap.position.y = 0.14;
      this.head.add(hairCap);
    }

    // Hats
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
    }

    // Accessories
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
    }

    this.characterMesh.add(this.head);

    // 3. Arms
    // Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.34, 1.3, 0);
    const leftArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.16), shirtMat);
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
    const rightArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.16), shirtMat);
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
    const leftLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.65, 0.2), pantsMat);
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
    const rightLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.65, 0.2), pantsMat);
    rightLegMesh.position.y = -0.3;
    rightLegMesh.castShadow = true;
    this.rightLeg.add(rightLegMesh);
    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.28), shoeMat);
    rightShoe.position.set(0, -0.65, 0.04);
    rightShoe.castShadow = true;
    this.rightLeg.add(rightShoe);
    this.characterMesh.add(this.rightLeg);
  }

  public updateAnimation(delta: number, isMoving: boolean, speedMultiplier: number = 1.0) {
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
}
