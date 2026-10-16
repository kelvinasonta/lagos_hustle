import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateRealisticPBRTextures() {
  const dir = path.resolve(process.cwd(), 'public/assets/textures');
  fs.mkdirSync(dir, { recursive: true });

  console.log('Generating high-res realistic PBR textures...');

  // 1. Realistic Asphalt with aggregate stones & oil stains (1024x1024)
  const asphaltSvg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="noise" x="0" y="0">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0.2 0 0 0 0.12  0 0.2 0 0 0.12  0 0 0.2 0 0.13  0 0 0 1 0"/>
        </filter>
        <pattern id="grain" width="128" height="128" patternUnits="userSpaceOnUse">
          <rect width="128" height="128" fill="#1b1c1e" />
          <circle cx="20" cy="30" r="3" fill="#2c2d30" />
          <circle cx="70" cy="80" r="4" fill="#141517" />
          <circle cx="95" cy="25" r="2.5" fill="#3a3c40" />
          <circle cx="40" cy="100" r="3.5" fill="#242528" />
        </pattern>
      </defs>
      <rect width="1024" height="1024" fill="url(#grain)" />
      <rect width="1024" height="1024" filter="url(#noise)" opacity="0.6" style="mix-blend-mode: overlay;" />
    </svg>
  `;
  await sharp(Buffer.from(asphaltSvg)).webp({ quality: 85 }).toFile(path.join(dir, 'asphalt_diffuse.webp'));

  // 2. Realistic Parisian / European Cut Stone Masonry Façade (1024x1024)
  const stoneSvg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="ashlar" width="256" height="128" patternUnits="userSpaceOnUse">
          <rect width="256" height="128" fill="#d8cfbe" stroke="#8c8273" stroke-width="3" />
          <line x1="128" y1="0" x2="128" y2="128" stroke="#8c8273" stroke-width="2" />
          <rect x="8" y="8" width="112" height="112" fill="#ded5c5" opacity="0.4" />
          <rect x="136" y="8" width="112" height="112" fill="#c9c0b0" opacity="0.3" />
        </pattern>
        <pattern id="stagger" width="256" height="256" patternUnits="userSpaceOnUse">
          <rect width="256" height="128" fill="url(#ashlar)" />
          <g transform="translate(64, 128)">
            <rect width="256" height="128" fill="url(#ashlar)" />
          </g>
        </pattern>
      </defs>
      <rect width="1024" height="1024" fill="url(#stagger)" />
    </svg>
  `;
  await sharp(Buffer.from(stoneSvg)).webp({ quality: 85 }).toFile(path.join(dir, 'stone_facade.webp'));

  // 3. Realistic Cobblestone Pavers for Avenue (1024x1024)
  const cobbleSvg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cobble" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="#3a3e45" />
          <rect x="4" y="4" width="26" height="26" rx="4" fill="#636e72" stroke="#2d3436" stroke-width="2" />
          <rect x="34" y="4" width="26" height="26" rx="4" fill="#747d8c" stroke="#2d3436" stroke-width="2" />
          <rect x="4" y="34" width="26" height="26" rx="4" fill="#57606f" stroke="#2d3436" stroke-width="2" />
          <rect x="34" y="34" width="26" height="26" rx="4" fill="#8395a7" stroke="#2d3436" stroke-width="2" />
        </pattern>
      </defs>
      <rect width="1024" height="1024" fill="url(#cobble)" />
    </svg>
  `;
  await sharp(Buffer.from(cobbleSvg)).webp({ quality: 85 }).toFile(path.join(dir, 'cobblestone.webp'));

  // 4. Parisian Zinc & Slate Roof tiles (1024x1024)
  const roofSvg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="slate" width="64" height="32" patternUnits="userSpaceOnUse">
          <rect width="64" height="32" fill="#2c3e50" />
          <path d="M 0 0 L 32 32 L 64 0 Z" fill="#34495e" stroke="#1e272e" stroke-width="1.5" />
        </pattern>
      </defs>
      <rect width="1024" height="1024" fill="url(#slate)" />
    </svg>
  `;
  await sharp(Buffer.from(roofSvg)).webp({ quality: 85 }).toFile(path.join(dir, 'roof_slate.webp'));

  console.log('Successfully generated all realistic PBR textures.');
}

generateRealisticPBRTextures().catch(console.error);
