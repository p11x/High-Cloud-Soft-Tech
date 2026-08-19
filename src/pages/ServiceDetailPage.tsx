import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/siteContent';
import SEO from '../components/ui/SEO';
import NotFoundPage from './NotFoundPage';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <NotFoundPage />;
  }

  // Get 3 related services to show at the bottom
  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div className="w-full bg-[#0A1428] min-h-screen">
      <SEO 
        title={`${service.title} | Services`}
        description={service.description}
        canonicalUrl={`/services/${service.slug}`}
      />
      
      {/* Hero / Header Section */}
      <section className="pt-32 pb-16 bg-[#050B18] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 mb-12">
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border border-white/10 bg-[#0F1E38] text-primary mb-8">
                <service.icon size={28} />
              </div>
              <h1 className="text-[40px] md:text-[60px] leading-[1.1] font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-8">
                {service.fullDescription}
              </p>
              <Link to={`/contact?service=${service.slug}`} className="btn-primary">
                Discuss Your Project
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] lg:aspect-square w-full border border-white/10 bg-[#0F1E38] shadow-2xl"
            >
              <service.illustration className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 text-[10px] font-mono opacity-50 text-white mix-blend-difference">
                SYS_VISUAL // {service.slug.substring(0, 8).toUpperCase()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              Core Capabilities
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0F1E38] border border-white/5 p-8 hover:border-primary/50 transition-colors flex items-start gap-4 group"
              >
                <div className="text-primary/50 mt-1 group-hover:text-primary transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F5F5] tracking-tight">{cap}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#050B18] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Methodology</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              How We Work
            </h3>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {service.process.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Step number marker */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-[#050B18] border-2 border-primary text-primary flex items-center justify-center font-bold text-sm font-mono -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                    {i + 1}
                  </div>
                  
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="bg-[#0F1E38] border border-white/5 p-6 shadow-xl hover:border-white/20 transition-colors">
                      <h4 className="text-xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-2">{step.step}</h4>
                      <p className="text-white/60 font-light text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For & CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-8">
              Ideal For
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.idealFor.map((item, i) => (
                <span key={i} className="border border-primary/30 bg-primary/5 text-[#F5F5F5] px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/20 to-[#050B18] border border-primary/30 p-12 text-center rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">
                Ready to transform?
              </h3>
              <p className="text-white/70 mb-8 font-light">
                Let's discuss how {service.title} can accelerate your business goals.
              </p>
              <Link to={`/contact?service=${service.slug}`} className="btn-primary inline-flex items-center gap-2">
                Start a conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-[#050B18] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              Other Services
            </h3>
            <Link to="/services" className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link 
                key={i} 
                to={`/services/${rs.slug}`}
                className="group bg-[#0F1E38] border border-white/5 p-6 hover:border-primary/50 transition-all flex flex-col h-full"
              >
                <div className="text-primary mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  <rs.icon size={32} />
                </div>
                <h4 className="text-lg font-black tracking-tighter uppercase text-[#F5F5F5] mb-2 group-hover:text-primary transition-colors">
                  {rs.title}
                </h4>
                <p className="text-white/50 text-sm font-light line-clamp-2 mt-auto">
                  {rs.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
