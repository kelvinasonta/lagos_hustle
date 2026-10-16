import fs from 'fs';
import path from 'path';

const ALLOWED_EXTENSIONS = new Set([
  'html', 'htm', 'css', 'js', 'mjs', 'json', 'map', 'txt', 'svg',
  'png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'ico', 'woff', 'woff2',
  'ttf', 'otf', 'mp3', 'ogg', 'wav', 'mp4', 'webm', 'wasm'
]);

const MAX_TOTAL_BYTES = 100 * 1024 * 1024; // 100 MB
const MAX_FILE_BYTES = 25 * 1024 * 1024;   // 25 MB
const MAX_FILES = 2000;

const distDir = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

let totalBytes = 0;
let fileCount = 0;
const errors = [];
const categoryBytes = {
  js: 0,
  css: 0,
  html: 0,
  json: 0,
  images: 0,
  audio: 0,
  wasm: 0,
  other: 0
};

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile()) {
      fileCount++;
      const stat = fs.statSync(fullPath);
      const size = stat.size;
      totalBytes += size;

      const ext = path.extname(entry.name).slice(1).toLowerCase();
      if (!ALLOWED_EXTENSIONS.has(ext)) {
        errors.push(`Disallowed extension ".${ext}": ${path.relative(distDir, fullPath)}`);
      }

      if (size > MAX_FILE_BYTES) {
        errors.push(`File exceeds 25 MB limit (${(size / (1024 * 1024)).toFixed(2)} MB): ${path.relative(distDir, fullPath)}`);
      }

      // Group into categories
      if (['js', 'mjs'].includes(ext)) categoryBytes.js += size;
      else if (['css'].includes(ext)) categoryBytes.css += size;
      else if (['html', 'htm'].includes(ext)) categoryBytes.html += size;
      else if (['json'].includes(ext)) categoryBytes.json += size;
      else if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'svg', 'ico'].includes(ext)) categoryBytes.images += size;
      else if (['mp3', 'ogg', 'wav'].includes(ext)) categoryBytes.audio += size;
      else if (['wasm'].includes(ext)) categoryBytes.wasm += size;
      else categoryBytes.other += size;
    }
  }
}

scanDir(distDir);

console.log('========================================');
console.log('   EKO STREETS — DIST BUDGET REPORT     ');
console.log('========================================');
console.log(`Total Files: ${fileCount} / ${MAX_FILES}`);
console.log(`Total Size:  ${(totalBytes / (1024 * 1024)).toFixed(3)} MB / ${(MAX_TOTAL_BYTES / (1024 * 1024)).toFixed(0)} MB`);
console.log('----------------------------------------');
console.log('Category breakdown:');
for (const [cat, bytes] of Object.entries(categoryBytes)) {
  if (bytes > 0) {
    console.log(`  ${cat.padEnd(8)}: ${(bytes / 1024).toFixed(1)} KB (${(bytes / (1024 * 1024)).toFixed(3)} MB)`);
  }
}
console.log('========================================');

if (totalBytes > MAX_TOTAL_BYTES) {
  errors.push(`Total size exceeds 100 MB (${(totalBytes / (1024 * 1024)).toFixed(2)} MB)`);
}

if (fileCount > MAX_FILES) {
  errors.push(`Total file count exceeds 2,000 files (${fileCount})`);
}

if (errors.length > 0) {
  console.error('\nBudget Check FAILED with errors:');
  for (const err of errors) {
    console.error(` - ${err}`);
  }
  process.exit(1);
} else {
  console.log('Budget Check PASSED with 0 errors!\n');
}
