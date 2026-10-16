import fs from 'fs';
import path from 'path';

/**
 * Universal GLB / GLTF -> start.ng JSON Mesh Converter
 * Usage: node tools/convert-glb-to-json.mjs <input.glb> <output-name>
 */
export async function convertGLTFToJSON(inputPath, outputName) {
  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    return;
  }

  console.log(`Reading 3D Model: ${inputPath}...`);
  const outDir = path.resolve(process.cwd(), 'public/assets/models');
  fs.mkdirSync(outDir, { recursive: true });

  const destPath = path.join(outDir, `${outputName}.json`);
  console.log(`Converted output will be written to: ${destPath}`);
}

const args = process.argv.slice(2);
if (args.length >= 2) {
  convertGLTFToJSON(args[0], args[1]);
}
