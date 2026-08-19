const fs = require('fs');
const content = fs.readFileSync('site.js', 'utf8');

// Find Rr=... it ends when Vn= starts or similar.
const idx = content.indexOf('["UI/UX Design"');
if (idx !== -1) {
  let depth = 0;
  let endIdx = idx;
  for (let i = idx; i < content.length; i++) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') depth--;
    if (depth === 0 && content[i] === ']') {
      endIdx = i;
      break;
    }
  }
  fs.writeFileSync('services.txt', content.substring(idx - 1, endIdx + 1));
}
