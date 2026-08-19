const fs = require('fs');
const content = fs.readFileSync('site.js', 'utf8');

const rrMatch = content.match(/([a-zA-Z0-9_$]+)=\[\["UI\/UX Design".*?\]\]/);
if (rrMatch) {
  fs.writeFileSync('services.txt', rrMatch[0]);
}

const vnMatch = content.match(/([a-zA-Z0-9_$]+)=\[\["Finance".*?\]\]/);
if (vnMatch) {
  fs.writeFileSync('industries.txt', vnMatch[0]);
}
