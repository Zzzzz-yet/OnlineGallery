import fs from 'fs';
import path from 'path';

const preppedRoot = './public/images/prepped';
const outputJson = './public/media.json';

let media = [];

fs.readdirSync(preppedRoot).forEach(category => {
  const categoryPath = path.join(preppedRoot, category);
  if (!fs.lstatSync(categoryPath).isDirectory()) return;

  fs.readdirSync(categoryPath).forEach(file => {
    if (/\.(jpe?g|png)$/i.test(file)) {
      media.push({
        src: `images/prepped/${category}/${file}`,
        alt: file.replace(/\..+$/, ''),
        category: category
      });
    }
  });
});

fs.writeFileSync(outputJson, JSON.stringify(media, null, 2));
console.log('media.json generated.');