"use client";

import { useRef } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { useInView } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const experienceData = [
  {
    year: "2026",
    title: "AI / ML Projects",
    company: "Autonomous Development",
    description: "Architecting and training custom models for specialized agentic workflows and computer vision solutions. Leveraging RAG, deep learning, and robust data pipelines.",
  },
  {
    year: "2026",
    title: "Web Development",
    company: "Creative Technology",
    description: "Building immersive, high-performance web applications using Next.js, React Three Fiber, and WebGL. Focusing on rendering optimization and cinematic user experiences.",
  },
  {
    year: "2025",
    title: "Programming & Problem Solving",
    company: "Foundational Engineering",
    description: "Deep dive into algorithms, data structures, and core systems programming. Developed strong logic structures in Python, Java, and C.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="experience" className="relative w-full py-24 bg-transparent z-10" ref={ref}>
      <div className="max-w-4xl mx-auto px-8 lg:px-16 py-12 bg-[#F9F6F0]/80 backdrop-blur-md border border-[#D96C4A]/30 rounded-[2.5rem] shadow-2xl">
        
        <div className={`transition-all duration-1000 transform mb-16 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs tracking-[0.2em] text-[#D96C4A] font-bold uppercase mb-6 block">Journey</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl text-[#2C2520] font-medium`}>
            Experience
          </h2>
        </div>

        <div className="relative border-l border-[#D96C4A]/30 ml-3 md:ml-0">
          {experienceData.map((item, index) => (
            <div 
              key={index} 
              className={`mb-16 ml-8 md:ml-12 transition-all duration-1000 transform ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Node */}
              <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D96C4A] opacity-20"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D96C4A]"></span>
              </span>

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h3 className={`${playfair.className} text-2xl text-[#2C2520] font-medium`}>{item.title}</h3>
                <span className="text-xs tracking-widest text-[#D96C4A] font-bold font-mono mt-2 md:mt-0">{item.year}</span>
              </div>
              
              <h4 className="text-sm font-bold tracking-widest text-[#D96C4A] uppercase mb-4">{item.company}</h4>
              <p className={`${inter.className} text-[#6D645A] font-medium leading-relaxed max-w-2xl`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
