const fs = require('fs');
const content = fs.readFileSync('site.js', 'utf8');
const match = content.match(/Rr=(\[\["UI\/UX Design".*?\]\]);/);
if (match) console.log(match[1]);
