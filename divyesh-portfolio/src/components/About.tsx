import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const principles = [
  {
    num: '01',
    title: 'INTELLIGENT SYSTEMS',
    desc: 'Harnessing generative AI, machine learning, and NLP to build products that adapt and learn autonomously.',
  },
  {
    num: '02',
    title: 'SYSTEM ARCHITECTURE',
    desc: 'Engineering resilient, scalable codebases with low latency, clean abstractions, and high reliability.',
  },
  {
    num: '03',
    title: 'EDITORIAL CRAFTSMANSHIP',
    desc: 'Treating digital software like architectural craft — intentional typography, motion, and intuitive ergonomics.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#080808] border-t border-[#141414] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="border-b border-[#222222] pb-8 mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase block mb-3">
            02 // PROFILE & PHILOSOPHY
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            ABOUT DIVYESH<span className="text-[#666666]">.</span>
          </h2>
        </div>

        {/* Large Editorial Manifesto Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight tracking-tight mb-8">
              "A Computer Science student bridging theoretical algorithms and practical, intelligent digital products."
            </p>
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed font-sans mb-6">
              I am passionate about pushing software beyond static interfaces into dynamic, cognitive experiences. Whether it's training machine learning models for natural disaster coordination or architecting legal document simplifiers, my focus is building resilient tools that empower people.
            </p>
            <p className="text-sm sm:text-base text-[#737373] leading-relaxed font-mono">
              Currently pursuing a Computer Science Engineering degree, actively seeking internships, research opportunities, and collaborations with forward-thinking engineering teams.
            </p>
          </motion.div>

          {/* Key Stats Counter Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-8 border-l border-[#222222] pl-8 lg:pl-12"
          >
            <div>
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-2">
                {portfolioData.stats.projects}
              </div>
              <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase">
                Projects Completed
              </div>
            </div>

            <div>
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-2">
                {portfolioData.stats.technologies}
              </div>
              <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase">
                Core Domains
              </div>
            </div>

            <div>
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-2">
                {portfolioData.stats.hackathons}
              </div>
              <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase">
                Hackathons & Wins
              </div>
            </div>

            <div>
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-2">
                {portfolioData.stats.curiosity}
              </div>
              <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase">
                Intellectual Curiosity
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3 Core Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#1A1A1A]">
          {principles.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 bg-[#0F0F0F] border border-[#1F1F1F] hover:border-[#3A3A3A] transition-colors duration-300 flex flex-col justify-between h-64"
            >
              <span className="font-mono text-xs text-[#666666] tracking-widest">
                PRINCIPLE // {item.num}
              </span>
              <div>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

