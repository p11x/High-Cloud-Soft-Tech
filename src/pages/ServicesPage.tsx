import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../data/siteContent';
import SEO from '../components/ui/SEO';

export default function ServicesPage() {
  return (
    <div className="w-full">
      <SEO 
        title="Our Services" 
        description="Comprehensive technical solutions including Software Development, Cloud Technologies, IT Services, and Digital Transformation."
        canonicalUrl="/services"
      />
      <section className="bg-[#050B18] py-32 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[50px] md:text-[80px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">Our Services</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive technical solutions to elevate your digital presence and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-white/10 bg-[#0F1E38] text-primary mb-8">
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">{service.title}</h2>
                  <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-6 h-6 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="w-2 h-2 bg-primary"></span>
                        </span>
                        <span className="text-[#F5F5F5] font-medium tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.slug}`} className="btn-primary inline-flex items-center gap-2">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                
                <Link to={`/services/${service.slug}`} className={`relative block group ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-[#0F1E38]">
                    <service.illustration className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  {/* Tech decoration */}
                  <div className="absolute top-4 left-4 text-[10px] font-mono opacity-50 text-white mix-blend-difference group-hover:opacity-100 transition-opacity">
                    SRV-MOD // {index + 1}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
