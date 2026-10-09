"use client";

import { useRef } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { useInView } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative w-full pb-32 bg-transparent z-10 border-b border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education & Certifications */}
        <div className={`transition-all duration-1000 transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className={`${playfair.className} text-3xl sm:text-4xl text-white mb-10`}>
            Education & Certs
          </h2>
          
          <div className="space-y-8">
            <div className="group border-b border-white/10 pb-6">
              <h3 className="text-xl text-white mb-1 group-hover:text-indigo-400 transition-colors">B.S. Computer Science</h3>
              <p className="text-xs tracking-widest text-neutral-500 font-mono mb-3">CURRENT</p>
              <p className={`${inter.className} text-sm text-neutral-400 font-light`}>
                Focus on Artificial Intelligence, Machine Learning algorithms, and scalable software architectures.
              </p>
            </div>
            
            <div className="group border-b border-white/10 pb-6">
              <h3 className="text-xl text-white mb-1 group-hover:text-indigo-400 transition-colors">Advanced Machine Learning</h3>
              <p className="text-xs tracking-widest text-neutral-500 font-mono mb-3">CERTIFICATION</p>
              <p className={`${inter.className} text-sm text-neutral-400 font-light`}>
                Deep learning specialization focusing on neural networks, NLP, and computer vision models.
              </p>
            </div>
          </div>
        </div>

        {/* Hackathons & Achievements */}
        <div className={`transition-all duration-1000 delay-200 transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className={`${playfair.className} text-3xl sm:text-4xl text-white mb-10`}>
            Achievements
          </h2>
          
          <div className="space-y-8">
            <div className="group border-b border-white/10 pb-6">
              <h3 className="text-xl text-white mb-1 group-hover:text-cyan-400 transition-colors">AI Innovation Hackathon</h3>
              <p className="text-xs tracking-widest text-neutral-500 font-mono mb-3">1ST PLACE / 2026</p>
              <p className={`${inter.className} text-sm text-neutral-400 font-light`}>
                Developed an autonomous agentic system for real-time disaster management and resource allocation mapping.
              </p>
            </div>
            
            <div className="group border-b border-white/10 pb-6">
              <h3 className="text-xl text-white mb-1 group-hover:text-cyan-400 transition-colors">Open Source Contributions</h3>
              <p className="text-xs tracking-widest text-neutral-500 font-mono mb-3">MULTIPLE</p>
              <p className={`${inter.className} text-sm text-neutral-400 font-light`}>
                Active contributor to React Three Fiber community plugins and machine learning utility libraries.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
