const fs = require('fs');
const content = fs.readFileSync('site.js', 'utf8');
const regex = /(["'])(?:(?=(\\?))\2.)*?\1/g;
let matches = content.match(regex);
if (matches) {
  matches = matches.map(s => s.slice(1, -1))
    .filter(s => s.length > 5 && s.includes(' ') && !s.includes('function') && !s.includes('=>') && !s.includes('<svg') && !s.includes('return ') && !s.match(/^[a-zA-Z0-9_-]+\.js$/));
  matches = [...new Set(matches)];
  fs.writeFileSync('strings.txt', matches.join('\n'));
}
