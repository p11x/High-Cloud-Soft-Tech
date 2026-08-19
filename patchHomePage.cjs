const fs = require('fs');
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf-8');

// Replace the old inline Platform Status with the new component
content = content.replace("import { platformStatusList } from '../data/platformStatus';", "import PlatformStatusPanel from '../components/ui/PlatformStatusPanel';");

const regex = /<div className="relative w-full aspect-\[4\/5\] bg-\[#0F1E38\] border border-white\/10 p-6 shadow-2xl backdrop-blur-sm">[\s\S]*?<\/div>\s*<\/div>\s*<\/motion\.div>/;
const replacement = `<PlatformStatusPanel />
          </motion.div>`;
          
content = content.replace(regex, replacement);

fs.writeFileSync('src/pages/HomePage.tsx', content);
