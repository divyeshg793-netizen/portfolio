import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#080808] border-t border-[#141414] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222222] pb-8 mb-20">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase block mb-3">
              01 // INDEXED CASE STUDIES
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              SELECTED WORK<span className="text-[#666666]">.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm font-mono text-[#A3A3A3] max-w-sm">
            AI-driven applications, real-time intelligence systems, and full-stack software built for high-stakes problem spaces.
          </p>
        </div>

        {/* Editorial Project Showcase */}
        <div className="space-y-36">
          {portfolioData.projects.map((project, index) => (
            <article key={project.id} className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Visual Imagery Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7 }}
                  className={`lg:col-span-7 relative ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111111] border border-[#222222] group-hover:border-[#444444] transition-colors duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Index Overlay */}
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 font-mono text-xs tracking-widest text-white border border-[#2A2A2A]">
                      EXP_{project.id}
                    </div>
                  </div>
                </motion.div>

                {/* Editorial Storytelling Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#737373]">
                    <span>SYS 0{index + 1}</span>
                    <span>/</span>
                    <span className="text-[#A3A3A3]">AI ARCHITECTURE</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Technical Stack Pills */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono tracking-widest text-[#666666] uppercase mb-2.5">
                      STACK ARCHITECTURE:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono tracking-wider text-[#A3A3A3] bg-[#111111] border border-[#222222]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-black font-mono text-xs font-medium tracking-wider hover:bg-[#E5E5E5] transition-all duration-200"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#333333] hover:border-white text-white font-mono text-xs tracking-wider transition-all duration-200 hover:bg-[#141414]"
                      >
                        <span>LIVE PREVIEW</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

