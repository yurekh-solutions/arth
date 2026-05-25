const fs = require('fs');
const path = require('path');

const scrapedDir = path.join(__dirname, 'scraped');
const files = fs.readdirSync(scrapedDir);

const allImages = new Set();

files.forEach(file => {
  const filePath = path.join(scrapedDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract all image URLs
  const imgRegex = /src="(https:\/\/www\.arthgroup\.co\.in\/uploads\/[^"]+)"/g;
  let match;
  
  while ((match = imgRegex.exec(content)) !== null) {
    allImages.add(match[1]);
  }
});

console.log(`\n📸 Total unique images found: ${allImages.size}\n`);

// Categorize images
const categories = {
  banners: [],
  logos: [],
  icons: [],
  projects: [],
  about: [],
  team: [],
  awards: [],
  other: []
};

allImages.forEach(url => {
  if (url.includes('Banner') || url.includes('banner')) {
    categories.banners.push(url);
  } else if (url.includes('Logo') || url.includes('logo') || url.includes('favicon')) {
    categories.logos.push(url);
  } else if (url.includes('icon') || url.includes('Icon')) {
    categories.icons.push(url);
  } else if (url.includes('products') || url.includes('project')) {
    categories.projects.push(url);
  } else if (url.includes('about') || url.includes('About')) {
    categories.about.push(url);
  } else if (url.includes('team') || url.includes('Team') || url.includes('leader')) {
    categories.team.push(url);
  } else if (url.includes('award') || url.includes('Award')) {
    categories.awards.push(url);
  } else {
    categories.other.push(url);
  }
});

console.log('📊 Image Categories:');
console.log(`  Banners: ${categories.banners.length}`);
console.log(`  Logos: ${categories.logos.length}`);
console.log(`  Icons: ${categories.icons.length}`);
console.log(`  Projects: ${categories.projects.length}`);
console.log(`  About: ${categories.about.length}`);
console.log(`  Team: ${categories.team.length}`);
console.log(`  Awards: ${categories.awards.length}`);
console.log(`  Other: ${categories.other.length}`);

// Generate TypeScript constants file
let tsContent = `// ========================================
// REAL IMAGES FROM ARTH GROUP WEBSITE
// ========================================
// Extracted from: https://www.arthgroup.co.in/
// Total images: ${allImages.size}
// Generated: ${new Date().toISOString()}
// ========================================

`;

// Hero Banners
if (categories.banners.length > 0) {
  tsContent += `// Hero Banner Images\nexport const HERO_BANNERS = [\n`;
  categories.banners.forEach((url, i) => {
    tsContent += `  "${url}",\n`;
  });
  tsContent += `];\n\n`;
}

// Logos
if (categories.logos.length > 0) {
  tsContent += `// Logo & Branding Images\nexport const LOGO_IMAGES = {\n`;
  categories.logos.forEach(url => {
    if (url.includes('favicon')) {
      tsContent += `  favicon: "${url}",\n`;
    } else if (url.includes('Logo') || url.includes('logo')) {
      tsContent += `  logo: "${url}",\n`;
    }
  });
  tsContent += `};\n\n`;
}

// Icons
if (categories.icons.length > 0) {
  tsContent += `// Icon Images\nexport const ICON_IMAGES = [\n`;
  categories.icons.forEach((url, i) => {
    tsContent += `  "${url}",\n`;
  });
  tsContent += `];\n\n`;
}

// Projects
if (categories.projects.length > 0) {
  tsContent += `// Project Images\nexport const PROJECT_IMAGES = [\n`;
  categories.projects.slice(0, 20).forEach((url, i) => {
    tsContent += `  "${url}",\n`;
  });
  tsContent += `];\n\n`;
}

// All Images Array
tsContent += `// All Images from Website\nexport const ALL_IMAGES = [\n`;
Array.from(allImages).slice(0, 50).forEach(url => {
  tsContent += `  "${url}",\n`;
});
tsContent += `];\n`;

// Write to file
const outputPath = path.join(__dirname, 'src', 'lib', 'real-images.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, tsContent);

console.log(`\n✅ TypeScript constants file created: ${outputPath}`);
console.log(`📝 Total images exported: ${Math.min(allImages.size, 50)} (first 50)`);
