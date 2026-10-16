import fs from 'fs';
import path from 'path';

/**
 * Packs 3D geometry into clean JSON format acceptable by start.ng.
 * Format:
 * {
 *   name: string,
 *   version: 1,
 *   positions: number[], // Quantized or float coordinates
 *   normals: number[],
 *   uvs: number[],
 *   indices: number[]
 * }
 */
export function packGeometry(name, positions, normals, uvs, indices) {
  // Round to 3 decimal places to keep JSON compact and human-readable/un-obfuscated
  const round3 = (arr) => arr.map(v => Math.round(v * 1000) / 1000);
  const round4 = (arr) => arr.map(v => Math.round(v * 10000) / 10000);

  return {
    name,
    format: 'eko-mesh-v1',
    positions: round3(Array.from(positions)),
    normals: round3(Array.from(normals)),
    uvs: round4(Array.from(uvs)),
    indices: Array.from(indices)
  };
}

// Generate sample test mesh (a stylized building block / vehicle prototype)
function createSampleMesh() {
  // A simple 3D prism / low poly Lagos kiosk
  const positions = [
    // Front face
    -1, -1,  1,   1, -1,  1,   1,  1,  1,  -1,  1,  1,
    // Back face
    -1, -1, -1,  -1,  1, -1,   1,  1, -1,   1, -1, -1,
    // Top face
    -1,  1, -1,  -1,  1,  1,   1,  1,  1,   1,  1, -1,
    // Bottom face
    -1, -1, -1,   1, -1, -1,   1, -1,  1,  -1, -1,  1,
    // Right face
     1, -1, -1,   1,  1, -1,   1,  1,  1,   1, -1,  1,
    // Left face
    -1, -1, -1,  -1, -1,  1,  -1,  1,  1,  -1,  1, -1
  ];

  const normals = [
    0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,
    0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
    0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,
    0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
    1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,
    -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0
  ];

  const uvs = [
    0, 0,  1, 0,  1, 1,  0, 1,
    1, 0,  1, 1,  0, 1,  0, 0,
    0, 1,  0, 0,  1, 0,  1, 1,
    1, 1,  0, 1,  0, 0,  1, 0,
    1, 0,  1, 1,  0, 1,  0, 0,
    0, 0,  1, 0,  1, 1,  0, 1
  ];

  const indices = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23    // left
  ];

  return packGeometry('lagos-kiosk-spike', positions, normals, uvs, indices);
}

const outDir = path.resolve(process.cwd(), 'public/assets/models');
fs.mkdirSync(outDir, { recursive: true });
const sample = createSampleMesh();
const dest = path.join(outDir, 'spike-mesh.json');
fs.writeFileSync(dest, JSON.stringify(sample, null, 2), 'utf8');
console.log(`Packed sample test mesh to: ${dest} (${(fs.statSync(dest).size / 1024).toFixed(2)} KB)`);
