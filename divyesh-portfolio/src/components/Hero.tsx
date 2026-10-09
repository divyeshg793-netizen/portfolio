import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import HeroScene from './3d/HeroScene';

export default function Hero() {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-8 lg:px-12 bg-[#080808] overflow-hidden"
    >
      {/* Three.js Generative Tensor Canvas */}
      {webGLSupported ? (
        <HeroScene />
      ) : (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] border border-white/10 rounded-full animate-spin [animation-duration:40s]"></div>
        </div>
      )}

      {/* Top Editorial Index Label */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1C1C1C] pb-5 mb-8 md:mb-16"
        >
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-widest text-[#A3A3A3] uppercase">
              {portfolioData.personal.availability}
            </span>
          </div>

          <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase hidden sm:inline-block">
            LOCATION: INDIA / REMOTE READY
          </span>
        </motion.div>

        {/* Oversized Creative Agency Headline */}
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[6.8rem] leading-[0.92] tracking-tighter text-white uppercase select-none">
              I BUILD <br />
              INTELLIGENT <br />
              <span className="text-[#A3A3A3] hover:text-white transition-colors duration-300">
                DIGITAL
              </span>{' '}
              <br />
              EXPERIENCES.
            </h1>
          </motion.div>

          {/* Editorial Subline & Action Coordinates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 sm:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-lg space-y-3">
              <p className="text-sm sm:text-base font-mono tracking-wide text-[#A3A3A3] uppercase">
                Computer Science student • AI/ML • Software Development
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Focused on combining intelligent models, robust systems architecture, and tactile digital craftsmanship to solve complex, real-world problems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-white text-black font-mono text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#E5E5E5] hover:tracking-[0.25em]"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-4 border border-[#2E2E2E] hover:border-white text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#141414]"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center space-x-3 ml-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 border border-[#262626] hover:border-white text-[#A3A3A3] hover:text-white transition-colors duration-200"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 border border-[#262626] hover:border-white text-[#A3A3A3] hover:text-white transition-colors duration-200"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Ticker / Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-24 border-t border-[#141414] mt-12 flex items-center justify-between text-[#737373] text-[11px] font-mono tracking-widest uppercase">
        <div className="flex items-center space-x-2">
          <span>SCROLL TO EXPLORE</span>
          <span className="animate-bounce inline-block">↓</span>
        </div>
        <span className="hidden sm:inline-block">AI RESEARCH // SYSTEMS DESIGN // 2025</span>
      </div>
    </section>
  );
}

