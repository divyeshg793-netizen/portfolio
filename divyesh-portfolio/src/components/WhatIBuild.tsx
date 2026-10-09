import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DOMAINS = ['MACHINE LEARNING', 'INTELLIGENT APPS', 'GIS & SATELLITE AI', 'SYSTEM ARCHITECTURE', 'NLP SIMPLIFIERS'];

export default function WhatIBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-300, 100]);

  return (
    <section ref={containerRef} className="py-36 relative bg-[#080808] border-t border-[#141414] overflow-hidden flex flex-col justify-center select-none">
      
      {/* Animated Background Editorial Typography */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.035] pointer-events-none overflow-hidden">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap font-display font-extrabold text-[18vw] leading-none text-white tracking-tighter">
          INTELLIGENCE SYSTEMS ARCHITECTURE COGNITION
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap font-display font-extrabold text-[18vw] leading-none text-white tracking-tighter">
          ALGORITHMS CREATIVITY SOFTWARE AUTOMATION
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase block mb-6">
            TRANSFORMATIVE PRINCIPLE
          </span>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-12">
            TURNING COMPLEX <br />
            ALGORITHMS INTO <br />
            <span className="text-[#A3A3A3]">HUMAN EXPERIENCES.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {DOMAINS.map((domain, i) => (
              <motion.span
                key={domain}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-4 py-2 border border-[#222222] bg-[#0E0E0E] text-xs font-mono tracking-widest text-[#A3A3A3] hover:text-white hover:border-white transition-colors duration-200"
              >
                {domain}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}

