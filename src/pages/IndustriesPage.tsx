import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { industries } from '../data/siteContent';
import SEO from '../components/ui/SEO';

export default function IndustriesPage() {
  return (
    <div className="w-full">
      <SEO 
        title="Industries We Serve" 
        description="Tailored software solutions designed for unique challenges in Finance, Healthcare, Education, and more."
        canonicalUrl="/industries"
      />
      <section className="bg-[#050B18] py-32 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[50px] md:text-[80px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">Industries We Serve</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Tailored software solutions designed for the unique challenges of your industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-[#0F1E38] overflow-hidden border border-white/5 hover:border-white/20 transition-all flex flex-col group relative"
              >
                
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
                  <Link to={`/industries/${industry.slug}`} className="btn-primary inline-flex items-center gap-2 self-start mt-auto text-sm py-2 px-4">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
