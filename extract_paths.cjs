const fs = require('fs');
const content = fs.readFileSync('site.js', 'utf8');
const regex = /(["'])\/[a-zA-Z0-9_-]+\1/g;
let matches = content.match(regex);
if (matches) {
  matches = matches.map(s => s.slice(1, -1));
  matches = [...new Set(matches)];
  console.log(matches.join('\n'));
}
