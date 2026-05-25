const fs = require('fs');
const path = require('path');

const scrapedDir = path.join(__dirname, 'scraped');
const files = fs.readdirSync(scrapedDir);

const allImages = new Map();

files.forEach(file => {
  const filePath = path.join(scrapedDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract all image URLs from arthgroup.co.in
  const imgRegex = /src="(https:\/\/www\.arthgroup\.co\.in\/uploads\/[^"]+)"/g;
  let match;
  
  while ((match = imgRegex.exec(content)) !== null) {
    const url = match[1];
    if (!allImages.has(url)) {
      allImages.set(url, {
        url: url,
        pages: [],
        category: categorizeImage(url, file)
      });
    }
    allImages.get(url).pages.push(file);
  }
});

function categorizeImage(url, filename) {
  const lower = url.toLowerCase();
  const file = filename.toLowerCase();
  
  if (lower.includes('banner')) return 'banners';
  if (lower.includes('logo') || lower.includes('favicon')) return 'logos';
  if (lower.includes('icon')) return 'icons';
  if (lower.includes('award') || lower.includes('recognitions')) return 'awards';
  if (lower.includes('team') || lower.includes('leader') || lower.includes('ajay') || lower.includes('yatin') || lower.includes('shiv')) return 'team';
  if (lower.includes('product')) return 'projects';
  if (file.includes('award')) return 'awards';
  if (file.includes('project')) return 'projects';
  if (file.includes('about') || file.includes('leadership')) return 'team';
  return 'other';
}

// Categorize
const categories = {
  banners: [],
  logos: [],
  icons: [],
  awards: [],
  team: [],
  projects: [],
  other: []
};

allImages.forEach((img, url) => {
  categories[img.category].push(img);
});

console.log(`\n📸 Total unique images found: ${allImages.size}\n`);
console.log('📊 Image Categories:');
console.log(`  Banners: ${categories.banners.length}`);
console.log(`  Logos: ${categories.logos.length}`);
console.log(`  Icons: ${categories.icons.length}`);
console.log(`  Awards: ${categories.awards.length}`);
console.log(`  Team: ${categories.team.length}`);
console.log(`  Projects: ${categories.projects.length}`);
console.log(`  Other: ${categories.other.length}`);

// Generate enhanced TypeScript file
let tsContent = `// ========================================
// REAL IMAGES FROM ARTH GROUP WEBSITE - COMPLETE
// ========================================
// Extracted from: https://www.arthgroup.co.in/
// Total images: ${allImages.size}
// Generated: ${new Date().toISOString()}
// ========================================

`;

// Hero Banners
if (categories.banners.length > 0) {
  tsContent += `// Hero Banner Images\nexport const HERO_BANNERS = [\n`;
  categories.banners.forEach((img) => {
    tsContent += `  "${img.url}",\n`;
  });
  tsContent += `];\n\n`;
}

// Logos
if (categories.logos.length > 0) {
  tsContent += `// Logo & Branding Images\nexport const LOGO_IMAGES = {\n`;
  categories.logos.forEach(img => {
    if (img.url.includes('favicon')) {
      tsContent += `  favicon: "${img.url}",\n`;
    } else {
      tsContent += `  logo: "${img.url}",\n`;
    }
  });
  tsContent += `};\n\n`;
}

// Award Images
if (categories.awards.length > 0) {
  tsContent += `// Award & Recognition Images\nexport const AWARD_IMAGES = [\n`;
  categories.awards.forEach((img, i) => {
    tsContent += `  "${img.url}",\n`;
  });
  tsContent += `];\n\n`;
}

// Icons
if (categories.icons.length > 0) {
  tsContent += `// Core Value Icons\nexport const ICON_IMAGES = [\n`;
  categories.icons.forEach((img) => {
    tsContent += `  "${img.url}",\n`;
  });
  tsContent += `];\n\n`;
}

// Team Images
if (categories.team.length > 0) {
  tsContent += `// Team Member Images\nexport const TEAM_IMAGES = [\n`;
  categories.team.forEach((img) => {
    tsContent += `  "${img.url}",\n`;
  });
  tsContent += `];\n\n`;
}

// Project Images
if (categories.projects.length > 0) {
  tsContent += `// Project Images\nexport const PROJECT_IMAGES = [\n`;
  categories.projects.slice(0, 30).forEach((img) => {
    tsContent += `  "${img.url}",\n`;
  });
  tsContent += `];\n\n`;
}

// Export all
tsContent += `// All Images Array\nexport const ALL_IMAGES = [\n`;
Array.from(allImages.keys()).forEach(url => {
  tsContent += `  "${url}",\n`;
});
tsContent += `];\n`;

// Write to file
const outputPath = path.join(__dirname, 'src', 'lib', 'real-images.ts');
fs.writeFileSync(outputPath, tsContent);

console.log(`\n✅ Enhanced TypeScript file created: ${outputPath}`);
console.log(`📝 Total images exported: ${allImages.size}`);

// Print award images specifically
console.log('\n🏆 Award Images Found:');
categories.awards.forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.url}`);
  console.log(`     Pages: ${img.pages.join(', ')}`);
});
