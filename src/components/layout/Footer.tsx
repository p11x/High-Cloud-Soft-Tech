import { Link } from 'react-router-dom';
import { navigation } from '../../data/siteContent';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#050B18] text-[#F5F5F5] py-16 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo />
              <span className="text-xl font-bold tracking-tighter text-[#F5F5F5]">
                HIGH CLOUD
              </span>
            </Link>
            <p className="max-w-md mb-8 text-sm text-white/60 font-light leading-relaxed">
              High Cloud Soft Tech is a technology-driven software company delivering innovative and reliable solutions that help businesses grow and transform.
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-[10px] font-bold tracking-widest text-primary uppercase">Core Competencies</div>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium">Digital Strategy</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium">Platform Engineering</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium">Data Integration</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold tracking-widest text-primary uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-[11px] font-medium text-white/70 hover:text-primary transition-colors tracking-widest uppercase">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold tracking-widest text-primary uppercase mb-4">Contact</h3>
            <address className="not-italic space-y-3">
              <p className="text-[11px] font-medium text-white/70 tracking-wider">Email: <br/><a href="mailto:hello@highcloud.in" className="hover:text-primary transition-colors text-white mt-1 block">HELLO@HIGHCLOUD.IN</a></p>
              <p className="text-[11px] font-medium text-white/70 tracking-wider">Phone: <br/><a href="tel:+919876543210" className="hover:text-primary transition-colors text-white mt-1 block">+91 98765 43210</a></p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono opacity-30">
            &copy; {new Date().getFullYear()} HIGH CLOUD SOFT TECH PRIVATE LIMITED.
          </div>
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
            Smart Technology. Smarter Business.
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
}
