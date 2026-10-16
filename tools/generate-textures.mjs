import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateSpikeTextures() {
  const dir = path.resolve(process.cwd(), 'public/assets/textures');
  fs.mkdirSync(dir, { recursive: true });

  const width = 2048;
  const height = 2048;

  // Generate a rich 2048x2048 PBR trim sheet atlas representation (Asphalt, laterite, painted concrete, metal)
  // Create an SVG with procedural geometric patterns and textures
  const svgBuffer = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="asphalt" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="#242526" />
          <circle cx="12" cy="18" r="3" fill="#1b1c1d" />
          <circle cx="44" cy="38" r="4" fill="#303234" />
          <circle cx="28" cy="54" r="2.5" fill="#19191a" />
          <circle cx="50" cy="12" r="3" fill="#383a3c" />
        </pattern>
        <pattern id="laterite" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="#a44826" />
          <circle cx="20" cy="20" r="5" fill="#8d3d1f" />
          <circle cx="48" cy="40" r="6" fill="#ba532d" />
          <circle cx="15" cy="50" r="4" fill="#753016" />
        </pattern>
        <pattern id="yellowDanfo" width="128" height="128" patternUnits="userSpaceOnUse">
          <rect width="128" height="128" fill="#fbc531" />
          <rect x="0" y="50" width="128" height="28" fill="#1e272e" />
        </pattern>
        <pattern id="concrete" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="#95a5a6" />
          <line x1="0" y1="32" x2="64" y2="32" stroke="#7f8c8d" stroke-width="2" />
        </pattern>
      </defs>

      <!-- Quadrant 1: Road Asphalt & Markings -->
      <rect x="0" y="0" width="1024" height="1024" fill="url(#asphalt)" />
      <rect x="490" y="0" width="44" height="1024" fill="#f5f6fa" opacity="0.9" />

      <!-- Quadrant 2: Danfo Yellow & Stripes Trim -->
      <rect x="1024" y="0" width="1024" height="1024" fill="url(#yellowDanfo)" />
      <text x="1100" y="300" font-family="sans-serif" font-weight="900" font-size="72" fill="#1e272e">EKO TRANSIT</text>

      <!-- Quadrant 3: Lagos Laterite Soil / Pothole patches -->
      <rect x="0" y="1024" width="1024" height="1024" fill="url(#laterite)" />

      <!-- Quadrant 4: Concrete & Kerb blocks -->
      <rect x="1024" y="1024" width="1024" height="1024" fill="url(#concrete)" />
    </svg>
  `);

  console.log('Generating 2048x2048 WebP Atlas...');
  const t0 = Date.now();
  await sharp(svgBuffer)
    .webp({ quality: 85, effort: 4 })
    .toFile(path.join(dir, 'atlas-2048.webp'));
  const webpTime = Date.now() - t0;
  const webpSize = fs.statSync(path.join(dir, 'atlas-2048.webp')).size;
  console.log(`WebP 2048 Atlas: ${(webpSize / 1024).toFixed(1)} KB (in ${webpTime} ms)`);

  console.log('Generating 2048x2048 AVIF Atlas...');
  const t1 = Date.now();
  await sharp(svgBuffer)
    .avif({ quality: 75, effort: 4 })
    .toFile(path.join(dir, 'atlas-2048.avif'));
  const avifTime = Date.now() - t1;
  const avifSize = fs.statSync(path.join(dir, 'atlas-2048.avif')).size;
  console.log(`AVIF 2048 Atlas: ${(avifSize / 1024).toFixed(1)} KB (in ${avifTime} ms)`);
}

generateSpikeTextures().catch(console.error);
