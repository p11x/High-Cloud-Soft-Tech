const fs = require('fs');
const content = fs.readFileSync('site.js', 'utf8');
const regex = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
let matches = content.match(regex);
if (matches) {
  matches = matches.map(s => s.slice(1, -1))
    .filter(s => s.length > 10 && !s.includes('function') && !s.includes('=>') && !s.match(/^[a-zA-Z0-9_-]+\.js$/));
  // remove duplicates and short strings
  matches = [...new Set(matches)];
  fs.writeFileSync('strings.txt', matches.join('\n'));
}
