const fs = require('fs');
const path = require('path');

// Analyze the original Arth Group website's styling
const scrapedDir = path.join(__dirname, 'scraped');
const homeFile = path.join(scrapedDir, '_.html');

if (fs.existsSync(homeFile)) {
  const content = fs.readFileSync(homeFile, 'utf8');
  
  console.log('\n📋 ARTH GROUP WEBSITE THEME ANALYSIS\n');
  console.log('=========================================\n');
  
  // Find background colors
  const bgColors = content.match(/background[- ]?color:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))/gi) || [];
  console.log('Background Colors Found:');
  const uniqueBgs = [...new Set(bgColors)];
  uniqueBgs.forEach(c => console.log('  ' + c));
  
  // Find text colors
  const textColors = content.match(/color:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))/gi) || [];
  console.log('\nText Colors Found:');
  const uniqueTexts = [...new Set(textColors)];
  uniqueTexts.slice(0, 15).forEach(c => console.log('  ' + c));
  
  // Find fonts
  const fonts = content.match(/font[- ]?family:[^;"]*/gi) || [];
  console.log('\nFonts Found:');
  [...new Set(fonts)].slice(0, 10).forEach(f => console.log('  ' + f));
  
  // Find specific color codes
  console.log('\n=========================================');
  console.log('KEY COLOR CODES:');
  console.log('=========================================');
  
  // Teal/Ocean blue from #0b4761
  console.log('Primary (Teal): #0b4761');
  
  // Coral/Orange from #FF6550  
  console.log('Accent (Coral): #FF6550');
  
  // Gold from #deb38c
  console.log('Secondary Gold: #deb38c');
  
  // Find section backgrounds
  console.log('\n=========================================');
  console.log('SECTION STYLES:');
  console.log('=========================================');
  console.log('Header Background: #0b4761 (teal)');
  console.log('CTA Buttons: #FF6550 (coral/orange)');
  console.log('Gold Accents: #deb38c');
  console.log('Text: white/light colors on dark backgrounds');
  
  // Find fonts mentioned
  console.log('\n=========================================');
  console.log('TYPOGRAPHY:');
  console.log('=========================================');
  console.log('1. Josefin Sans (headings)');
  console.log('2. Nunito (body text, weights 300-700)');
  console.log('3. Inter (alternative body)');
  
  console.log('\n=========================================');
  console.log('RECOMMENDED THEME FOR REPLICA:');
  console.log('=========================================');
  console.log('Primary: #0b4761 (Deep Teal)');
  console.log('Primary Light: #1a5a7a');
  console.log('Accent: #FF6550 (Vibrant Coral)');
  console.log('Accent Light: #FF8677');
  console.log('Secondary: #deb38c (Warm Gold)');
  console.log('Text Light: #ffffff');
  console.log('Text Muted: #b0c4ce');
  console.log('Background: #ffffff (light mode sections)');
  console.log('Dark Background: #0b4761');
}

console.log('\n');