import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  if (!portfolioData.achievements || portfolioData.achievements.length === 0) {
    return null;
  }

  return (
    <section className="py-24 relative bg-secondary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <div className="text-xs font-mono text-secondary mb-4">{achievement.date}</div>
              <p className="text-secondary text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
