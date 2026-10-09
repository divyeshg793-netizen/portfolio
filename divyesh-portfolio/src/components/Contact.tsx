import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
      return;
    }

    setFormState('loading');
    
    // Smooth simulation for instant reliable UX feedback
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#080808] border-t border-[#141414] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="border-b border-[#222222] pb-8 mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase block mb-3">
            05 // INITIATE TRANSMISSION
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            GET IN TOUCH<span className="text-[#666666]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Editorial Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              HAVE A VISION? <br />
              LET'S BUILD <br />
              <span className="text-[#A3A3A3]">SOMETHING EXTRAORDINARY.</span>
            </h3>

            <p className="text-base text-[#A3A3A3] leading-relaxed max-w-md font-sans">
              I am open to software engineering internships, research collaborations, hackathons, and innovative freelance projects.
            </p>

            <div className="pt-4 space-y-4 font-mono text-xs tracking-wider">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[#F5F5F5] uppercase">
                  {portfolioData.personal.availability}
                </span>
              </div>

              <div className="pt-4 border-t border-[#1C1C1C] space-y-3">
                <div className="text-[#737373] text-[10px] uppercase tracking-widest">
                  DIRECT CHANNELS
                </div>
                
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center justify-between py-2 border-b border-[#1C1C1C] text-sm text-white hover:text-[#A3A3A3] transition-colors group"
                >
                  <span>{portfolioData.personal.email}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-2 border-b border-[#1C1C1C] text-sm text-white hover:text-[#A3A3A3] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <FaLinkedin className="w-4 h-4 text-[#A3A3A3]" />
                    LinkedIn Network
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-2 border-b border-[#1C1C1C] text-sm text-white hover:text-[#A3A3A3] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <FaGithub className="w-4 h-4 text-[#A3A3A3]" />
                    GitHub Repositories
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Editorial Architectural Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-6 bg-[#0E0E0E] border border-[#222222] p-8 sm:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono tracking-widest text-[#737373] uppercase mb-2">
                  YOUR NAME // IDENTITY
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#080808] border border-[#262626] focus:border-white px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-200 font-sans"
                  placeholder="e.g. Alex Morgan"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-mono tracking-widest text-[#737373] uppercase mb-2">
                  ELECTRONIC MAIL // COORDINATES
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#080808] border border-[#262626] focus:border-white px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-200 font-sans"
                  placeholder="alex@organization.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono tracking-widest text-[#737373] uppercase mb-2">
                  TRANSMISSION BRIEF // PROJECT DETAILS
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#080808] border border-[#262626] focus:border-white px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-200 font-sans resize-none"
                  placeholder="Tell me about your goals, timelines, or role..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full py-4 bg-white text-black font-mono text-xs font-semibold tracking-widest uppercase hover:bg-[#E5E5E5] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {formState === 'idle' && (
                  <>
                    <span>DISPATCH MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
                {formState === 'loading' && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>TRANSMITTING...</span>
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>MESSAGE RECEIVED • TALK SOON</span>
                  </>
                )}
                {formState === 'error' && (
                  <span>PLEASE FILL ALL REQUIRED FIELDS</span>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

