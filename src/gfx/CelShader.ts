import * as THREE from 'three';

export function createToonMaterial(color: THREE.ColorRepresentation): THREE.Material {
  // 3-step high-contrast cel ramp
  const format = THREE.RGBAFormat;
  const colors = new Uint8Array([
    60, 65, 80, 255,    // Dark ambient shadow
    140, 150, 170, 255, // Mid shadow
    255, 255, 255, 255  // Full sunlit diffuse
  ]);
  const gradientMap = new THREE.DataTexture(colors, 3, 1, format);
  gradientMap.minFilter = THREE.NearestFilter;
  gradientMap.magFilter = THREE.NearestFilter;
  gradientMap.generateMipmaps = false;
  gradientMap.needsUpdate = true;

  const mat = new THREE.MeshToonMaterial({
    color,
    gradientMap
  });

  return mat;
}

export function createInvertedHullOutline(mesh: THREE.Mesh, outlineColor = 0x111625, thickness = 0.035): THREE.Mesh {
  const outlineMat = new THREE.MeshBasicMaterial({
    color: outlineColor,
    side: THREE.BackSide
  });

  const outline = new THREE.Mesh(mesh.geometry, outlineMat);
  outline.scale.set(1 + thickness, 1 + thickness, 1 + thickness);
  return outline;
}
