import * as THREE from 'three';

export function createAnimeFoliageTree(): THREE.Group {
  const tree = new THREE.Group();

  // Textured or shaded trunk with natural taper and roots
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x4a3728,
    roughness: 0.85
  });

  const leavesMat1 = new THREE.MeshStandardMaterial({
    color: 0x2ed573,
    roughness: 0.6,
    metalness: 0.05
  });

  const leavesMat2 = new THREE.MeshStandardMaterial({
    color: 0x26af61,
    roughness: 0.65
  });

  const leavesMat3 = new THREE.MeshStandardMaterial({
    color: 0x20bf6b,
    roughness: 0.7
  });

  // Tapered trunk
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.52, 6.2, 10), trunkMat);
  trunk.position.y = 3.1;
  trunk.castShadow = true;
  tree.add(trunk);

  // Layered fluffy foliage clusters (giving natural organic volume rather than a single sphere)
  const clusterConfigs = [
    { x: 0, y: 6.2, z: 0, scale: 2.2, mat: leavesMat1 },
    { x: 0.7, y: 5.6, z: 0.6, scale: 1.6, mat: leavesMat2 },
    { x: -0.7, y: 5.8, z: -0.5, scale: 1.7, mat: leavesMat3 },
    { x: -0.6, y: 5.4, z: 0.7, scale: 1.5, mat: leavesMat1 },
    { x: 0.6, y: 5.5, z: -0.6, scale: 1.5, mat: leavesMat2 },
    { x: 0, y: 7.2, z: 0, scale: 1.4, mat: leavesMat1 }
  ];

  for (const c of clusterConfigs) {
    const geo = new THREE.DodecahedronGeometry(c.scale, 1);
    const foliage = new THREE.Mesh(geo, c.mat);
    foliage.position.set(c.x, c.y, c.z);
    foliage.castShadow = true;
    tree.add(foliage);
  }

  return tree;
}
