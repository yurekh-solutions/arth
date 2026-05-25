const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.arthgroup.co.in';

const pages = [
  // Main Pages
  '/',
  '/about',
  '/about/our-story',
  '/about/vision-mission',
  '/about/leadership',
  '/about/core-values',
  '/projects',
  '/projects/the-frontedge-park',
  '/projects/the-frontedge-park/amenities',
  '/projects/the-frontedge-park/floor-plans',
  '/projects/the-frontedge-park/gallery',
  '/projects/the-frontedge-park/location',
  '/projects/vedant-connect',
  '/projects/vedant-connect/amenities',
  '/projects/vedant-connect/floor-plans',
  '/projects/vedant-connect/gallery',
  '/projects/vedant-connect/location',
  '/projects/the-rise',
  '/projects/the-rise/amenities',
  '/projects/the-rise/floor-plans',
  '/projects/the-rise/gallery',
  '/projects/the-rise/location',
  '/projects/rivium',
  '/projects/rivium/amenities',
  '/projects/rivium/floor-plans',
  '/projects/rivium/gallery',
  '/projects/rivium/location',
  '/services',
  '/services/office-spaces',
  '/services/retail-hubs',
  '/services/commercial-real-estate',
  '/services/land-acquisition',
  '/services/construction',
  '/services/project-management',
  '/blog',
  '/news',
  '/news-and-press-releases',
  '/awards',
  '/awards-and-recognitions',
  '/events',
  '/events-and-announcements',
  '/career',
  '/career/openings',
  '/career/life-at-arth',
  '/contact',
  '/testimonials',
  '/gallery',
  '/videos',
  '/downloads',
  '/innovation',
  '/sustainability',
  '/partners',
  '/faqs',
  '/privacy-policy',
  '/terms',
  '/cookie-policy',
  '/sitemap',
  '/thank-you',
  '/case-studies',
  '/nri',
  '/channel-partner',
];

function fetchPage(pagePath) {
  return new Promise((resolve, reject) => {
    const url = BASE_URL + pagePath;
    console.log(`Fetching: ${url}`);
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const outputPath = path.join(__dirname, 'scraped', `${pagePath.replace(/\//g, '_') || 'home'}.html`);
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, data);
        console.log(`✓ Saved: ${outputPath}`);
        resolve(outputPath);
      });
    }).on('error', reject);
  });
}

async function scrapeAll() {
  console.log('Starting to scrape Arth Group website...\n');
  
  for (const page of pages) {
    try {
      await fetchPage(page);
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay between requests
    } catch (error) {
      console.error(`✗ Error fetching ${page}:`, error.message);
    }
  }
  
  console.log('\n✓ Scraping complete! Check the scraped/ directory for all pages.');
}

scrapeAll();
