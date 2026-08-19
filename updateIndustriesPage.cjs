const fs = require('fs');
let content = fs.readFileSync('src/pages/IndustriesPage.tsx', 'utf-8');

// replace the inner content of motion.div for the card
const replacement = `
                <div className="h-56 relative overflow-hidden bg-[#0A1428] border-b border-white/5 flex items-center justify-center">
                  <industry.illustration className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E38] via-[#0F1E38]/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-[10px] font-mono opacity-50 text-white mix-blend-difference group-hover:opacity-100 transition-opacity">
                    SEC-{index + 1}
                  </div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 z-10">
                    <div className="w-10 h-10 border border-white/10 bg-[#0F1E38]/80 backdrop-blur-sm flex items-center justify-center text-primary">
                      <industry.icon size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-[#F5F5F5] uppercase tracking-wide">{industry.title}</h2>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-white/60 font-light leading-relaxed text-sm mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <Link to={\`/industries/\${industry.slug}\`} className="btn-primary inline-flex items-center gap-2 self-start mt-auto text-sm py-2 px-4">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
`;

// we need to make sure 'Link' is imported
if (!content.includes("import { Link } from 'react-router-dom';")) {
  content = "import { Link } from 'react-router-dom';\n" + content;
}

content = content.replace(/<div className="h-56 relative overflow-hidden[\s\S]*?<\/div>\s*<\/motion\.div>/, replacement + '              </motion.div>');

fs.writeFileSync('src/pages/IndustriesPage.tsx', content);
