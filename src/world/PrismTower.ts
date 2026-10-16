import * as THREE from 'three';

export function createPrismTower(): THREE.Group {
  const tower = new THREE.Group();

  const whiteMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.25,
    metalness: 0.1
  });

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x38ada9,
    roughness: 0.1,
    metalness: 0.9,
    transparent: true,
    opacity: 0.85
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xf6b93b,
    metalness: 0.8,
    roughness: 0.2
  });

  // 1. Tower Pedestal / Plaza Base
  const baseGeo = new THREE.CylinderGeometry(14, 18, 6, 8);
  const base = new THREE.Mesh(baseGeo, whiteMat);
  base.position.y = 3;
  base.castShadow = true;
  tower.add(base);

  // 2. Tapered Lower Legs / Arch columns
  const legCount = 4;
  for (let i = 0; i < legCount; i++) {
    const angle = (i / legCount) * Math.PI * 2 + Math.PI / 4;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.5, 30, 8), whiteMat);
    leg.position.set(Math.cos(angle) * 8, 20, Math.sin(angle) * 8);
    leg.rotation.z = -Math.cos(angle) * 0.15;
    leg.rotation.x = Math.sin(angle) * 0.15;
    leg.castShadow = true;
    tower.add(leg);
  }

  // 3. Central Glass Lattice Core
  const coreGeo = new THREE.CylinderGeometry(5.5, 7.5, 42, 16);
  const core = new THREE.Mesh(coreGeo, glassMat);
  core.position.y = 26;
  tower.add(core);

  // Cross-bracing lattice rings
  for (let y = 12; y <= 42; y += 6) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(6.0 - (y - 12) * 0.05, 0.4, 8, 24), whiteMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    tower.add(ring);
  }

  // 4. Waist Observation Deck
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 6.5, 3.5, 16), whiteMat);
  deck.position.y = 48;
  deck.castShadow = true;
  tower.add(deck);

  const deckGlass = new THREE.Mesh(new THREE.CylinderGeometry(8.6, 8.6, 1.8, 16), glassMat);
  deckGlass.position.y = 48;
  tower.add(deckGlass);

  // 5. Crown & High Spire
  const crownGeo = new THREE.ConeGeometry(5.0, 16, 8);
  const crown = new THREE.Mesh(crownGeo, whiteMat);
  crown.position.y = 58;
  crown.castShadow = true;
  tower.add(crown);

  // Iconic Spire Needle
  const spireGeo = new THREE.CylinderGeometry(0.15, 0.8, 24, 8);
  const spire = new THREE.Mesh(spireGeo, goldMat);
  spire.position.y = 76;
  tower.add(spire);

  return tower;
}
