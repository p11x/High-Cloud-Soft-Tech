const fs = require('fs');
const content = fs.readFileSync('site.js', 'utf8');
// look for Rr=[...] and Vn=[...]
let matches = content.match(/const Rr=\[.*?\];/s) || content.match(/Rr=\[.*?\]/g);
if (matches) console.log("Rr (Services):", matches[0].substring(0, 500));
let matches2 = content.match(/const Vn=\[.*?\];/s) || content.match(/Vn=\[.*?\]/g);
if (matches2) console.log("Vn (Industries):", matches2[0].substring(0, 500));
