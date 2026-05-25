const fs = require('fs');
const path = require('path');

// Read all scraped HTML files and extract EVERYTHING
const scrapedDir = path.join(__dirname, 'scraped');
const files = fs.readdirSync(scrapedDir);

let allImages = new Set();
let allContent = {};

files.forEach(file => {
  const filePath = path.join(scrapedDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract ALL image URLs (including uploads and front/assets)
  const allImgRegex = /src="(https:\/\/www\.arthgroup\.co\.in\/[^"]+\.(jpg|png|webp|jpeg|avif|gif))"/g;
  let match;
  
  while ((match = allImgRegex.exec(content)) !== null) {
    allImages.add(match[1]);
  }
  
  // Also extract background images
  const bgImgRegex = /url\((https:\/\/www\.arthgroup\.co\.in\/[^)]+\.(jpg|png|webp|jpeg|avif|gif))\)/g;
  while ((match = bgImgRegex.exec(content)) !== null) {
    allImages.add(match[1]);
  }
});

console.log(`\n📸 Total unique images found: ${allImages.size}\n`);

// List all images
console.log('All images from Arth Group website:');
let count = 1;
allImages.forEach(url => {
  console.log(`${count}. ${url}`);
  count++;
});

// Save to file for reference
const outputPath = path.join(__dirname, 'all-arth-images.txt');
fs.writeFileSync(outputPath, Array.from(allImages).join('\n'));
console.log(`\n✅ Saved to: ${outputPath}`);
