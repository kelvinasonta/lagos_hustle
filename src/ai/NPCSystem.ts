import * as THREE from 'three';

export interface NPCData {
  id: string;
  name: string;
  role: string;
  dialogue: string;
  position: THREE.Vector3;
  targetPos: THREE.Vector3;
  direction: THREE.Vector3;
  speed: number;
  isWalking: boolean;
  mesh: THREE.Group;
  leftLeg: THREE.Mesh;
  rightLeg: THREE.Mesh;
  leftArm: THREE.Mesh;
  rightArm: THREE.Mesh;
  animTime: number;
}

export class NPCSystem {
  public npcs: NPCData[] = [];
  public group: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
  }

  public add(
    name: string,
    role: string,
    dialogue: string,
    pos: THREE.Vector3,
    outfit: { top: number; pants: number; skin: number; hat?: string },
    waypoints?: THREE.Vector3[]
  ) {
    const npcMesh = new THREE.Group();
    npcMesh.position.copy(pos);

    const skinMat = new THREE.MeshStandardMaterial({ color: outfit.skin, roughness: 0.6 });
    const topMat = new THREE.MeshStandardMaterial({ color: outfit.top, roughness: 0.7 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: outfit.pants, roughness: 0.8 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });

    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.55, 0.26), topMat);
    torso.position.y = 1.0;
    torso.castShadow = true;
    npcMesh.add(torso);

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.3, 0.28), skinMat);
    head.position.y = 1.45;
    head.castShadow = true;
    npcMesh.add(head);

    // Hair
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.3), hairMat);
    hair.position.set(0, 1.58, -0.02);
    npcMesh.add(hair);

    // Legs
    const legGeo = new THREE.BoxGeometry(0.16, 0.6, 0.18);
    const leftLeg = new THREE.Mesh(legGeo, pantsMat);
    leftLeg.position.set(-0.13, 0.45, 0);
    leftLeg.castShadow = true;
    npcMesh.add(leftLeg);

    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.24), shoeMat);
    leftShoe.position.set(0, -0.32, 0.03);
    leftLeg.add(leftShoe);

    const rightLeg = new THREE.Mesh(legGeo, pantsMat);
    rightLeg.position.set(0.13, 0.45, 0);
    rightLeg.castShadow = true;
    npcMesh.add(rightLeg);

    const rightShoe = leftShoe.clone();
    rightLeg.add(rightShoe);

    // Arms
    const armGeo = new THREE.BoxGeometry(0.13, 0.5, 0.14);
    const leftArm = new THREE.Mesh(armGeo, topMat);
    leftArm.position.set(-0.32, 0.95, 0);
    leftArm.castShadow = true;
    npcMesh.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, topMat);
    rightArm.position.set(0.32, 0.95, 0);
    rightArm.castShadow = true;
    npcMesh.add(rightArm);

    // Speech bubble billboard indicator overhead
    const bubbleGeo = new THREE.PlaneGeometry(1.8, 0.45);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
    ctx.roundRect(4, 4, 248, 56, 12);
    ctx.fill();
    ctx.font = 'bold 22px sans-serif';
    ctx.fillStyle = '#1e272e';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${name} (${role})`, 128, 32);

    const bubbleTexture = new THREE.CanvasTexture(canvas);
    const bubbleMat = new THREE.MeshBasicMaterial({ map: bubbleTexture, transparent: true, side: THREE.DoubleSide });
    const bubble = new THREE.Mesh(bubbleGeo, bubbleMat);
    bubble.position.y = 1.95;
    npcMesh.add(bubble);

    this.group.add(npcMesh);

    const targetPos = waypoints && waypoints.length > 0 ? waypoints[0].clone() : pos.clone();

    this.npcs.push({
      id: `npc_${this.npcs.length}`,
      name,
      role,
      dialogue,
      position: pos.clone(),
      targetPos,
      direction: new THREE.Vector3(0, 0, 1),
      speed: waypoints ? 1.4 : 0,
      isWalking: !!waypoints,
      mesh: npcMesh,
      leftLeg,
      rightLeg,
      leftArm,
      rightArm,
      animTime: Math.random() * 10
    });
  }

  public update(delta: number, playerPos: THREE.Vector3): NPCData | null {
    let nearestNPC: NPCData | null = null;
    let minDistance = 3.5;

    for (const npc of this.npcs) {
      npc.animTime += delta;

      if (npc.isWalking && npc.speed > 0) {
        const toTarget = new THREE.Vector3().subVectors(npc.targetPos, npc.position);
        toTarget.y = 0;
        const dist = toTarget.length();

        if (dist > 0.3) {
          toTarget.normalize();
          npc.position.addScaledVector(toTarget, npc.speed * delta);
          npc.mesh.position.copy(npc.position);
          npc.mesh.rotation.y = Math.atan2(toTarget.x, toTarget.z);

          // Walk animation
          const angle = Math.sin(npc.animTime * 7) * 0.55;
          npc.leftLeg.rotation.x = angle;
          npc.rightLeg.rotation.x = -angle;
          npc.leftArm.rotation.x = -angle * 0.7;
          npc.rightArm.rotation.x = angle * 0.7;
        } else {
          npc.targetPos.z = -npc.targetPos.z;
        }
      } else {
        const breath = Math.sin(npc.animTime * 2.5) * 0.02;
        npc.leftArm.rotation.x = breath;
        npc.rightArm.rotation.x = -breath;
      }

      const distToPlayer = npc.position.distanceTo(playerPos);
      if (distToPlayer < minDistance) {
        nearestNPC = npc;
      }
    }

    return nearestNPC;
  }
}
