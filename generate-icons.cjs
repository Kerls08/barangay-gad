const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcImagePath = 'C:/Users/acoym/.gemini/antigravity-ide/brain/420baf56-3a81-4781-ae53-c5ad0515ee5a/.user_uploaded/media_1788854098405.jpg';
const publicDir = path.resolve(__dirname, 'public');
const iconsDir = path.resolve(publicDir, 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

async function generate() {
  console.log('Generating authentic PNG icons from official Balubal seal...');

  // 192x192 PNG
  await sharp(srcImagePath)
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(iconsDir, 'icon-192.png'));
  console.log('Created icon-192.png');

  // 512x512 PNG
  await sharp(srcImagePath)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(iconsDir, 'icon-512.png'));
  console.log('Created icon-512.png');

  // 512x512 Maskable PNG with 10% safe zone padding
  await sharp(srcImagePath)
    .resize(430, 430)
    .extend({
      top: 41,
      bottom: 41,
      left: 41,
      right: 41,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    })
    .png({ quality: 100 })
    .toFile(path.join(iconsDir, 'icon-maskable-512.png'));
  console.log('Created icon-maskable-512.png');

  // Apple touch icon 180x180
  await sharp(srcImagePath)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Favicon 64x64
  await sharp(srcImagePath)
    .resize(64, 64)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created favicon.png');

  // High res seal in public
  await sharp(srcImagePath)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'balubal-gad-seal.png'));
  console.log('Created balubal-gad-seal.png');

  // Also replace balubal-gad-seal.jpg
  await sharp(srcImagePath)
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'balubal-gad-seal.jpg'));
  console.log('Created balubal-gad-seal.jpg');

  // Remove old conflicting svg favicons if any
  const oldFaviconSvg = path.join(publicDir, 'favicon.svg');
  if (fs.existsSync(oldFaviconSvg)) {
    fs.unlinkSync(oldFaviconSvg);
    console.log('Removed obsolete favicon.svg');
  }

  console.log('All icons generated successfully!');
}

generate().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
