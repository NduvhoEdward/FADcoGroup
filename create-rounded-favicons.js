const sharp = require('sharp');
const path = require('path');

async function createRoundedFavicons() {
  const logoPath = path.join(process.cwd(), 'public', 'logo.jpg');
  const publicDir = path.join(process.cwd(), 'public');

  try {
    // Use a professional green color (emerald)
    const greenColor = '#059669';

    // favicon.ico (32x32) with rounded corners
    const sizeSmall = 32;
    const radiusSmall = 6;
    
    const svgSmall = `<svg width="${sizeSmall}" height="${sizeSmall}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${sizeSmall}" height="${sizeSmall}" rx="${radiusSmall}" ry="${radiusSmall}" fill="${greenColor}"/>
    </svg>`;

    const resizedSmall = await sharp(logoPath)
      .resize(24, 24, { fit: 'cover' })
      .toBuffer();

    await sharp(Buffer.from(svgSmall))
      .composite([{ input: resizedSmall, gravity: 'center' }])
      .toFile(path.join(publicDir, 'favicon.ico'));

    console.log('✓ favicon.ico created (32x32) with green background');

    // apple-touch-icon.png (180x180) with rounded corners
    const sizeLarge = 180;
    const radiusLarge = 36;
    
    const svgLarge = `<svg width="${sizeLarge}" height="${sizeLarge}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${sizeLarge}" height="${sizeLarge}" rx="${radiusLarge}" ry="${radiusLarge}" fill="${greenColor}"/>
    </svg>`;

    const resizedLarge = await sharp(logoPath)
      .resize(144, 144, { fit: 'cover' })
      .toBuffer();

    await sharp(Buffer.from(svgLarge))
      .composite([{ input: resizedLarge, gravity: 'center' }])
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    console.log('✓ apple-touch-icon.png created (180x180) with green background');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createRoundedFavicons();
