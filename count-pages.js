const fs = require('fs');
const files = fs.readdirSync('scraped');
console.log('Total scraped pages:', files.length);
console.log('\nAll pages:');
files.forEach((f, i) => {
  const name = f.replace('.html', '').replace(/_/g, '/');
  console.log(`${i + 1}. ${name}`);
});
