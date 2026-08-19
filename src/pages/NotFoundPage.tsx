import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';
import SEO from '../components/ui/SEO';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#0A1428]">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for may have moved or is no longer available."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[120px] leading-none font-black tracking-tighter text-[#0F1E38] mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">Page Not Found</h2>
        <p className="text-lg text-white/60 mb-8 max-w-md mx-auto font-light leading-relaxed">
          The page you are looking for may have moved, been renamed, or is no longer available.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
