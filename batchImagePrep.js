import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imgDir = path.join(process.cwd(), 'public/images');
const outDir = path.join(process.cwd(), 'public/prepped');
fs.mkdirSync(outDir, { recursive: true });

fs.readdirSync(imgDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    sharp(path.join(imgDir, file))
      .resize(800)
      .composite([{ input: Buffer.from(
        `<svg><text x="10" y="50" font-size="30" fill="white" opacity="0.5">ZoeChow9005</text></svg>`
      ) }])
      .toFile(path.join(outDir, file))
      .then(() => console.log(`Processed ${file}`))
      .catch(err => console.error(`Error processing ${file}:`, err));
  }
});
