import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateStudioTextures() {
  const dir = path.resolve(process.cwd(), 'public/assets/textures');
  fs.mkdirSync(dir, { recursive: true });

  console.log('Generating AAA Studio PBR textures...');

  // 1. Parisian Ashlar Stone with architectural moldings & shadow depth (1024x1024)
  const stoneSvg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bevelH" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000" stop-opacity="0.25" />
        </linearGradient>
        <pattern id="brick" width="256" height="128" patternUnits="userSpaceOnUse">
          <!-- Stone block background -->
          <rect width="256" height="128" fill="#e8dfce" />
          <!-- Mortar lines -->
          <rect x="0" y="0" width="256" height="128" fill="none" stroke="#7d7363" stroke-width="4" />
          <line x1="128" y1="0" x2="128" y2="128" stroke="#7d7363" stroke-width="4" />
          <!-- Bevels -->
          <rect x="2" y="2" width="124" height="124" fill="url(#bevelH)" opacity="0.3" />
          <rect x="130" y="2" width="124" height="124" fill="url(#bevelH)" opacity="0.3" />
          <!-- Weathering / fine grain dots -->
          <circle cx="24" cy="30" r="3" fill="#b0a794" opacity="0.5" />
          <circle cx="85" cy="75" r="4" fill="#aba18d" opacity="0.4" />
          <circle cx="170" cy="40" r="3.5" fill="#aba18d" opacity="0.5" />
          <circle cx="220" cy="90" r="4.5" fill="#b0a794" opacity="0.4" />
        </pattern>
        <pattern id="staggerWall" width="256" height="256" patternUnits="userSpaceOnUse">
          <rect width="256" height="128" fill="url(#brick)" />
          <g transform="translate(64, 128)">
            <rect width="256" height="128" fill="url(#brick)" />
          </g>
        </pattern>
      </defs>
      <rect width="1024" height="1024" fill="url(#staggerWall)" />
    </svg>
  `;
  await sharp(Buffer.from(stoneSvg)).webp({ quality: 90 }).toFile(path.join(dir, 'stone_facade.webp'));

  // 2. High-Fidelity European Cobblestone with individual depth (1024x1024)
  const cobbleSvg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pavers" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="#2d3436" />
          <!-- Individual cobblestones with rounded corners and gradients -->
          <rect x="3" y="3" width="27" height="27" rx="6" fill="#8395a7" stroke="#222f3e" stroke-width="2" />
          <rect x="33" y="3" width="28" height="27" rx="6" fill="#747d8c" stroke="#222f3e" stroke-width="2" />
          <rect x="3" y="33" width="27" height="28" rx="6" fill="#636e72" stroke="#222f3e" stroke-width="2" />
          <rect x="33" y="33" width="28" height="28" rx="6" fill="#57606f" stroke="#222f3e" stroke-width="2" />
          <!-- Highlights -->
          <circle cx="12" cy="12" r="4" fill="#a4b0be" opacity="0.4" />
          <circle cx="44" cy="12" r="5" fill="#a4b0be" opacity="0.4" />
          <circle cx="12" cy="44" r="4" fill="#a4b0be" opacity="0.4" />
          <circle cx="44" cy="44" r="5" fill="#a4b0be" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="1024" height="1024" fill="url(#pavers)" />
    </svg>
  `;
  await sharp(Buffer.from(cobbleSvg)).webp({ quality: 90 }).toFile(path.join(dir, 'cobblestone.webp'));

  // 3. Boutique Storefront Trim & Wood Panel Texture (1024x1024)
  const shopSvg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="wood" width="128" height="256" patternUnits="userSpaceOnUse">
          <rect width="128" height="256" fill="#5c1d1d" />
          <rect x="8" y="8" width="112" height="240" fill="#752525" stroke="#401212" stroke-width="4" rx="6" />
          <line x1="8" y1="128" x2="120" y2="128" stroke="#401212" stroke-width="4" />
        </pattern>
      </defs>
      <rect width="1024" height="1024" fill="url(#wood)" />
    </svg>
  `;
  await sharp(Buffer.from(shopSvg)).webp({ quality: 90 }).toFile(path.join(dir, 'shop_wood.webp'));

  console.log('AAA Studio textures generated successfully!');
}

generateStudioTextures().catch(console.error);
