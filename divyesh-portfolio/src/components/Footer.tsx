import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] py-14 px-6 sm:px-8 lg:px-12 border-t border-[#1C1C1C] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-[#141414]">
          
          <div className="space-y-1">
            <span className="font-display font-extrabold text-2xl tracking-tight text-white">
              GD<span className="text-[#666666]">.</span>
            </span>
            <p className="text-xs font-mono tracking-widest text-[#737373] uppercase">
              DIVYESH // CREATIVE AGENCY × AI LAB
            </p>
          </div>

          {/* Center Coordinates */}
          <div className="text-xs font-mono text-[#737373] tracking-widest uppercase">
            <span>TIMEZONE // IST (UTC+5:30)</span>
          </div>

          {/* Right Coordinates & Return to Top */}
          <div className="flex items-center space-x-6 text-xs font-mono tracking-widest text-[#A3A3A3]">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN ↗
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:text-[#A3A3A3] transition-colors pl-4 border-l border-[#222222]"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
        
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#555555] font-mono tracking-widest uppercase gap-4">
          <span>&copy; {currentYear} DIVYESH. CRAFTED WITH THREE.JS & REACT.</span>
          <span>AUTONOMOUS SYSTEMS • HIGH FIDELITY DIGITAL IDENTITY</span>
        </div>
      </div>
    </footer>
  );
}

