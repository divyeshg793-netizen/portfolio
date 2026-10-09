import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#080808] border-t border-[#141414] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222222] pb-8 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase block mb-3">
              04 // TRAJECTORY & ACADEMICS
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              EDUCATION & MILESTONES<span className="text-[#666666]">.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm font-mono text-[#A3A3A3] max-w-sm">
            Academic groundwork in computer science combined with hands-on competitive hackathons and engineering sprints.
          </p>
        </div>

        {/* Editorial Chronological Rows */}
        <div className="divide-y divide-[#1F1F1F] border-y border-[#1F1F1F]">
          
          {/* Education Items */}
          {portfolioData.education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-[#0D0D0D] transition-colors duration-300 px-4"
            >
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-[#737373] tracking-widest uppercase">
                  {item.date}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-display font-bold text-2xl text-white tracking-tight group-hover:text-[#E0E0E0] transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm font-mono text-[#A3A3A3] uppercase mt-1 block">
                  {item.institution}
                </span>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm text-[#A3A3A3] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Hackathons / Achievements Row */}
          {portfolioData.achievements.map((ach, i) => (
            <motion.div
              key={`ach-${i}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-[#0D0D0D] transition-colors duration-300 px-4"
            >
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-[#737373] tracking-widest uppercase">
                  {ach.date} // COMPETITION
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                  {ach.title}
                </h3>
                <span className="text-xs font-mono text-emerald-400 uppercase mt-1 block tracking-wider">
                  FIRST PLACE RECOGNITION
                </span>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm text-[#A3A3A3] leading-relaxed font-sans">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

