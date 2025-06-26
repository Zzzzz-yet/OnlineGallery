import fs from 'fs';
import path from 'path';

const imgDir = path.join(process.cwd(), 'public/images');
const files = fs.readdirSync(imgDir).filter(f =>
  ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(f).toLowerCase())
);

const media = files.map(f => ({
  src: `images/${f}`,
  alt: f
}));

fs.writeFileSync(path.join(process.cwd(), 'public/media.json'), JSON.stringify(media, null, 2));
console.log(`media.json generated with ${media.length} items`);
