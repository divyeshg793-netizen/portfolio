"use client";

import { useRef, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

// Dynamically import 3D Viz to prevent SSR issues and heavy initial load
const DisasterVisualization = dynamic(() => import("../3d/DisasterVisualization"), { ssr: false });
const CanvasWrapper = dynamic(() => import("../3d/CanvasWrapper"), { ssr: false });

const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const projects = [
  {
    id: "01",
    title: "Dynamic Disaster Resource Allocation",
    subtitle: "AI-powered disaster detection, resource allocation and multi-agency emergency response platform.",
    tech: ["AI", "ML", "GIS", "React", "APIs"],
    has3D: false,
    image: "/disaster.jpg",
  },
  {
    id: "02",
    title: "AI-Powered Legal Simplifier",
    subtitle: "Platform that transforms complex legal documents into clear explanations and highlights potential risks.",
    tech: ["AI", "NLP", "React", "Next.js"],
    has3D: false,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop", // Law/Documents
  },
  {
    id: "03",
    title: "Interactive 3D Portfolio",
    subtitle: "Immersive portfolio experience built with React Three Fiber, Three.js and Next.js.",
    tech: ["Three.js", "R3F", "Next.js"],
    has3D: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // Abstract 3D/Tech
  },
  {
    id: "04",
    title: "Future Initiative",
    subtitle: "In development. Exploring autonomous agentic workflows.",
    tech: ["LLMs", "Autonomous Systems"],
    has3D: false,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", // Robot/Future
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative w-full py-32 bg-transparent border-t border-white/5 z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className={`transition-all duration-1000 transform mb-24 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs tracking-[0.2em] text-[#D96C4A] font-bold uppercase mb-6 block">Selected Works</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl text-[#2C2520] font-medium`}>
            Intelligent Systems
          </h2>
        </div>

        <div className="flex flex-col space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-all duration-1000 transform ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              
              {/* Project Visuals (Left) */}
              <div className="lg:col-span-7 h-[400px] sm:h-[500px] w-full bg-neutral-950 rounded-xl border border-white/5 overflow-hidden relative group-hover:border-white/20 transition-colors duration-500">
                {project.has3D ? (
                  <div className="absolute inset-0 z-0">
                    <CanvasWrapper>
                      <DisasterVisualization />
                    </CanvasWrapper>
                    {/* Overlay for interaction blocking unless specifically clicking */}
                    <div className="absolute inset-0 bg-transparent z-10" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-neutral-900">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                )}
                
                {/* Visual Overlay Effect */}
                <div className={`absolute inset-0 bg-indigo-500/10 mix-blend-overlay transition-opacity duration-500 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}`} />
              </div>

              {/* Project Info (Right) */}
              <div className="lg:col-span-5 flex flex-col items-start justify-center">
                <span className="text-xs tracking-widest text-[#D96C4A] font-mono mb-4 font-bold">{project.id}</span>
                <h3 className={`${playfair.className} text-3xl sm:text-4xl text-[#2C2520] mb-6 group-hover:text-[#D96C4A] transition-colors duration-300 font-medium`}>
                  {project.title}
                </h3>
                <p className={`${inter.className} text-[#6D645A] leading-relaxed font-medium mb-8`}>
                  {project.subtitle}
                </p>
                
                <ul className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <li key={tech} className="px-3 py-1 text-xs font-bold rounded-full border border-[#D96C4A]/50 text-[#6D645A] bg-[#F9F6F0]/50">
                      {tech}
                    </li>
                  ))}
                </ul>

                <button 
                  data-cursor="hover"
                  className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase text-[#D96C4A] hover:text-[#2C2520] transition-colors group/btn"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight size={16} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
