import * as THREE from 'three';

export interface PackedMeshJSON {
  name: string;
  format: string;
  positions: number[];
  normals: number[];
  uvs: number[];
  indices: number[];
}

export async function loadPackedMesh(url: string): Promise<THREE.BufferGeometry> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch packed mesh: ${url}`);
  const data: PackedMeshJSON = await res.json();

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(data.positions, 3));
  geom.setAttribute('normal', new THREE.Float32BufferAttribute(data.normals, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(data.uvs, 2));
  geom.setIndex(data.indices);

  return geom;
}
