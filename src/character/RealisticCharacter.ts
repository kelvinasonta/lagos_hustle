import * as THREE from 'three';
import { createToonMaterial } from '../gfx/CelShader';

export interface RealisticNPC {
  name: string;
  role: string;
  dialogue: string;
  group: THREE.Group;
  position: THREE.Vector3;
  targetPos: THREE.Vector3;
  isWalking: boolean;
  speed: number;
  animTime: number;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
}

export class RealisticNPCManager {
  public npcs: RealisticNPC[] = [];
  public group: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
  }

  public createCharacter(
    name: string,
    role: string,
    dialogue: string,
    pos: THREE.Vector3,
    style: { top: number; pants: number; skin: number; hair: number; cap?: number; backpack?: boolean },
    patrolTarget?: THREE.Vector3
  ) {
    const charGroup = new THREE.Group();
    charGroup.position.copy(pos);

    // Cel Toon Materials
    const skinMat = createToonMaterial(style.skin);
    const topMat = createToonMaterial(style.top);
    const pantsMat = createToonMaterial(style.pants);
    const hairMat = createToonMaterial(style.hair);
    const shoeMat = createToonMaterial(0x18191a);
    const bagMat = createToonMaterial(0xd63031);

    // 1. Torso & Jacket
    const torso = new THREE.Group();
    torso.position.y = 1.05;
    const torsoMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.65, 12), topMat);
    torsoMesh.castShadow = true;
    torso.add(torsoMesh);

    // Collar
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 6, 12), topMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 0.32;
    torso.add(collar);

    // Backpack if specified
    if (style.backpack) {
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.4, 0.2), bagMat);
      bag.position.set(0, 0.05, -0.22);
      bag.castShadow = true;
      torso.add(bag);
    }

    charGroup.add(torso);

    // 2. Anime-proportioned Head
    const head = new THREE.Group();
    head.position.y = 1.55;

    // Chin / Face Shape
    const face = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), skinMat);
    face.scale.set(1.0, 1.1, 1.0);
    face.castShadow = true;
    head.add(face);

    // Eyes
    const eyeWhite = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyeIris = new THREE.MeshBasicMaterial({ color: 0x1e3799 });
    for (const eyeX of [-0.07, 0.07]) {
      const eyeW = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.06), eyeWhite);
      eyeW.position.set(eyeX, 0.02, 0.2);
      head.add(eyeW);

      const pupil = new THREE.Mesh(new THREE.PlaneGeometry(0.035, 0.045), eyeIris);
      pupil.position.set(eyeX, 0.02, 0.205);
      head.add(pupil);
    }

    // Anime Hair
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), hairMat);
    hair.position.set(0, 0.06, -0.04);
    hair.scale.set(1.05, 1.05, 1.15);
    head.add(hair);

    // Cap if specified
    if (style.cap) {
      const capMat = createToonMaterial(style.cap);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.24, 0.1, 12), capMat);
      cap.position.y = 0.16;
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.02, 0.18), capMat);
      visor.position.set(0, 0.12, 0.18);
      head.add(cap);
      head.add(visor);
    }

    charGroup.add(head);

    // 3. Arms with Pivots
    const leftArm = new THREE.Group();
    leftArm.position.set(-0.32, 1.3, 0);
    const lArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.55, 8), topMat);
    lArmMesh.position.y = -0.22;
    lArmMesh.castShadow = true;
    leftArm.add(lArmMesh);
    const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), skinMat);
    lHand.position.y = -0.5;
    leftArm.add(lHand);
    charGroup.add(leftArm);

    const rightArm = new THREE.Group();
    rightArm.position.set(0.32, 1.3, 0);
    const rArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.55, 8), topMat);
    rArmMesh.position.y = -0.22;
    rArmMesh.castShadow = true;
    rightArm.add(rArmMesh);
    const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), skinMat);
    rHand.position.y = -0.5;
    rightArm.add(rHand);
    charGroup.add(rightArm);

    // 4. Legs with Pivots
    const leftLeg = new THREE.Group();
    leftLeg.position.set(-0.13, 0.72, 0);
    const lLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.65, 8), pantsMat);
    lLegMesh.position.y = -0.28;
    lLegMesh.castShadow = true;
    leftLeg.add(lLegMesh);
    const lShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), shoeMat);
    lShoe.position.set(0, -0.62, 0.05);
    leftLeg.add(lShoe);
    charGroup.add(leftLeg);

    const rightLeg = new THREE.Group();
    rightLeg.position.set(0.13, 0.72, 0);
    const rLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.65, 8), pantsMat);
    rLegMesh.position.y = -0.28;
    rLegMesh.castShadow = true;
    rightLeg.add(rLegMesh);
    const rShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), shoeMat);
    rShoe.position.set(0, -0.62, 0.05);
    rightLeg.add(rShoe);
    charGroup.add(rightLeg);

    this.group.add(charGroup);

    this.npcs.push({
      name,
      role,
      dialogue,
      group: charGroup,
      position: pos.clone(),
      targetPos: patrolTarget ? patrolTarget.clone() : pos.clone(),
      isWalking: !!patrolTarget,
      speed: patrolTarget ? 1.6 : 0,
      animTime: Math.random() * 5,
      leftLeg,
      rightLeg,
      leftArm,
      rightArm
    });

    return charGroup;
  }

  public update(delta: number, playerPos: THREE.Vector3): RealisticNPC | null {
    let nearest: RealisticNPC | null = null;
    let minDist = 3.6;

    for (const npc of this.npcs) {
      npc.animTime += delta;

      if (npc.isWalking && npc.speed > 0) {
        const toTarget = new THREE.Vector3().subVectors(npc.targetPos, npc.position);
        toTarget.y = 0;
        const dist = toTarget.length();

        if (dist > 0.4) {
          toTarget.normalize();
          npc.position.addScaledVector(toTarget, npc.speed * delta);
          npc.group.position.copy(npc.position);
          npc.group.rotation.y = Math.atan2(toTarget.x, toTarget.z);

          // Smooth walking cycle
          const angle = Math.sin(npc.animTime * 7) * 0.6;
          npc.leftLeg.rotation.x = angle;
          npc.rightLeg.rotation.x = -angle;
          npc.leftArm.rotation.x = -angle * 0.75;
          npc.rightArm.rotation.x = angle * 0.75;
        } else {
          npc.targetPos.z = -npc.targetPos.z;
        }
      } else {
        // Natural idle breathing
        const breath = Math.sin(npc.animTime * 2.5) * 0.02;
        npc.leftArm.rotation.x = breath;
        npc.rightArm.rotation.x = -breath;
      }

      const d = npc.position.distanceTo(playerPos);
      if (d < minDist) {
        nearest = npc;
      }
    }

    return nearest;
  }
}
