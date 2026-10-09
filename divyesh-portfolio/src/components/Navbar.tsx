import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const navItems = [
  { label: 'WORK', href: '#projects', number: '01' },
  { label: 'ABOUT', href: '#about', number: '02' },
  { label: 'CAPABILITIES', href: '#skills', number: '03' },
  { label: 'EXPERIENCE', href: '#experience', number: '04' },
  { label: 'CONTACT', href: '#contact', number: '05' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect current section
      const sections = ['projects', 'about', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#080808]/90 backdrop-blur-md border-b border-[#1C1C1C]'
            : 'py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center space-x-3 text-white transition-opacity hover:opacity-80"
          >
            <span className="font-display font-extrabold text-2xl tracking-tight">
              GD<span className="text-[#A3A3A3]">.</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#737373] uppercase pl-2 border-l border-[#222222]">
              DIVYESH / AI & CS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-mono tracking-widest transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white font-semibold'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#333333] hover:border-white text-xs font-mono tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-3.5 py-1.5 border border-[#2A2A2A] text-xs font-mono tracking-widest text-white flex items-center gap-2 hover:border-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${menuOpen ? 'bg-white' : 'bg-[#A3A3A3]'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between px-8 pt-32 pb-12 md:hidden"
          >
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase">
                INDEX / NAVIGATION
              </span>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between py-2 border-b border-[#1A1A1A] group"
                  >
                    <span className="font-display text-4xl font-bold tracking-tight text-white group-hover:text-[#A3A3A3] transition-colors">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-[#737373] tracking-widest">
                      {item.number}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#1C1C1C] flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono tracking-widest text-[#A3A3A3]">
                  {portfolioData.personal.availability}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-[#737373]">
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-white">
                  GITHUB ↗
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                  LINKEDIN ↗
                </a>
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-white">
                  EMAIL ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

