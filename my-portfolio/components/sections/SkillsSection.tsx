"use client";

import { useRef, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { useInView } from "framer-motion";
import { 
  SiPython, SiC, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiThreedotjs, SiWebgl, SiGreensock,
  SiGit, SiGithub, SiDocker
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaBrain, FaRobot, FaEye, FaNetworkWired, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "AI / ML",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
  },
  {
    title: "Web",
    skills: ["React", "Next.js", "Node.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "3D",
    skills: ["Three.js", "React Three Fiber", "WebGL", "GSAP"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "VS Code"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "Python": <SiPython />,
  "Java": <FaJava />,
  "C": <SiC />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "Artificial Intelligence": <FaBrain />,
  "Machine Learning": <FaRobot />,
  "Deep Learning": <FaNetworkWired />,
  "NLP": <FaBrain />,
  "Computer Vision": <FaEye />,
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3 />,
  "Tailwind CSS": <SiTailwindcss />,
  "Three.js": <SiThreedotjs />,
  "React Three Fiber": <SiReact />,
  "WebGL": <SiWebgl />,
  "GSAP": <SiGreensock />,
  "Git": <SiGit />,
  "GitHub": <SiGithub />,
  "Docker": <SiDocker />,
  "VS Code": <VscVscode />,
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative w-full py-24 lg:py-32 bg-transparent border-t border-white/5 z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div 
          className={`transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs tracking-[0.2em] text-[#D96C4A] font-bold uppercase mb-6 block">Capabilities</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl text-[#2C2520] mb-16 font-medium`}>
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`flex flex-col space-y-6 transition-all duration-1000 transform`}
              style={{
                transitionDelay: `${(index + 1) * 150}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <h3 className="text-xs tracking-widest text-[#6D645A] font-bold uppercase border-b border-[#D96C4A]/30 pb-4">
                {category.title}
              </h3>
              
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li 
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 cursor-default ${
                      hoveredSkill === skill 
                        ? "border-[#D96C4A] text-white bg-[#D96C4A] scale-105 shadow-md" 
                        : hoveredSkill 
                          ? "border-[#D96C4A]/30 text-[#D96C4A] opacity-50 bg-[#F9F6F0]/30" 
                          : "border-[#D96C4A]/50 text-[#2C2520] hover:border-[#D96C4A] bg-[#F9F6F0]"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      {iconMap[skill] && <span className="text-lg">{iconMap[skill]}</span>}
                      <span>{skill}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
