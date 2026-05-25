const fs = require('fs');
const path = require('path');

// Read all scraped HTML files and find ALL image sources
const scrapedDir = path.join(__dirname, 'scraped');
const files = fs.readdirSync(scrapedDir);

let allImages = new Map();

files.forEach(file => {
  const filePath = path.join(scrapedDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract ALL image URLs - src attributes
  const srcImgRegex = /src="(https:\/\/www\.arthgroup\.co\.in\/[^"]+\.(jpg|png|webp|jpeg|avif|gif))"/g;
  let match;
  
  while ((match = srcImgRegex.exec(content)) !== null) {
    const url = match[1];
    if (!allImages.has(url)) {
      allImages.set(url, { url, source: file, type: 'src' });
    }
  }
  
  // Also extract background images
  const bgImgRegex = /url\((https:\/\/www\.arthgroup\.co\.in\/[^)]+\.(jpg|png|webp|jpeg|avif|gif))\)/g;
  while ((match = bgImgRegex.exec(content)) !== null) {
    const url = match[1];
    if (!allImages.has(url)) {
      allImages.set(url, { url, source: file, type: 'background' });
    }
  }
});

// Categorize images
const categories = {
  logos: [],
  banners: [],
  icons: [],
  team: [],
  projects: [],
  awards: [],
  gallery: [],
  other: []
};

allImages.forEach((img) => {
  const url = img.url.toLowerCase();
  if (url.includes('logo') || url.includes('favicon')) {
    categories.logos.push(img);
  } else if (url.includes('banner')) {
    categories.banners.push(img);
  } else if (url.includes('icon')) {
    categories.icons.push(img);
  } else if (url.includes('ajay') || url.includes('yatin') || url.includes('shiv') || url.includes('team') || url.includes('leader')) {
    categories.team.push(img);
  } else if (url.includes('product')) {
    categories.projects.push(img);
  } else if (url.includes('award') || url.includes('img_9') || url.includes('img_3')) {
    categories.awards.push(img);
  } else if (url.includes('gallery') || url.includes('content')) {
    categories.gallery.push(img);
  } else {
    categories.other.push(img);
  }
});

console.log('\n=======================================');
console.log('ALL REAL IMAGES FROM ARTH GROUP WEBSITE');
console.log('=======================================\n');

console.log(`Total unique images: ${allImages.size}\n`);

console.log('📌 LOGOS & BRANDING:');
categories.logos.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

console.log('\n📌 HERO BANNERS:');
categories.banners.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

console.log('\n📌 CORE VALUE ICONS:');
categories.icons.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

console.log('\n📌 TEAM MEMBER PHOTOS:');
categories.team.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

console.log('\n📌 PROJECT IMAGES:');
categories.projects.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

console.log('\n📌 AWARD IMAGES:');
categories.awards.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

console.log('\n📌 GALLERY & CONTENT IMAGES:');
categories.gallery.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

console.log('\n📌 OTHER IMAGES:');
categories.other.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
});

// Generate TypeScript arrays
let tsContent = `// ========================================
// COMPLETE REAL IMAGES - ARTH GROUP WEBSITE
// ========================================
// Generated: ${new Date().toISOString()}
// ========================================

// Hero Banners
export const HERO_BANNERS = [
${categories.banners.map(img => `  "${img.url}",`).join('\n')}
];

// Logo & Branding
export const LOGO_IMAGES = {
${categories.logos.filter(img => img.url.includes('favicon')).map(img => `  favicon: "${img.url}",`).join('\n')}
${categories.logos.filter(img => !img.url.includes('favicon') && !img.url.includes('gallery')).map(img => `  logo: "${img.url}",`).join('\n')}
};

// Core Value Icons
export const ICON_IMAGES = [
${categories.icons.map(img => `  "${img.url}",`).join('\n')}
];

// Team Member Photos
export const TEAM_IMAGES = [
${categories.team.map(img => `  "${img.url}",`).join('\n')}
];

// Project Images
export const PROJECT_IMAGES = [
${categories.projects.map(img => `  "${img.url}",`).join('\n')}
];

// Award Images
export const AWARD_IMAGES = [
${categories.awards.map(img => `  "${img.url}",`).join('\n')}
];

// Gallery Images
export const GALLERY_IMAGES = [
${categories.gallery.map(img => `  "${img.url}",`).join('\n')}
];

// All Images Combined
export const ALL_IMAGES = [
${Array.from(allImages.keys()).map(url => `  "${url}",`).join('\n')}
];
`;

// Write TypeScript file
fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'real-images.ts'), tsContent);

console.log('\n=======================================');
console.log('✅ TypeScript file updated: src/lib/real-images.ts');
console.log('=======================================\n');