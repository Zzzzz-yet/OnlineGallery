import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputRoot = './public/images';
const outputRoot = './public/images/prepped';
const watermarkText = 'ZoeChow9005';

fs.readdirSync(inputRoot).forEach(category => {
  const categoryPath = path.join(inputRoot, category);
  if (!fs.lstatSync(categoryPath).isDirectory()) return;
  const outputDir = path.join(outputRoot, category);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  fs.readdirSync(categoryPath).forEach(file => {
    const inputPath = path.join(categoryPath, file);
    const outputPath = path.join(outputDir, file);
    if (/\.(jpe?g|png)$/i.test(file)) {
      sharp(inputPath)
        .resize({ width: 800 })
        .composite([{
          input: Buffer.from(
            `<svg><text x="10" y="30" font-size="24" fill="white" opacity="0.4">${watermarkText}</text></svg>`
          ),
          top: 10,
          left: 10
        }])
        .toFile(outputPath)
        .then(() => console.log('Processed:', file))
        .catch(err => console.error('Error processing', file, err));
    }
  });
});