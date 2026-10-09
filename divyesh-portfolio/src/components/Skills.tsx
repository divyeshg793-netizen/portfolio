import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import SkillConstellation from './3d/SkillConstellation';
import { Canvas } from '@react-three/fiber';
import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript, 
  SiHtml5, SiCss, SiReact, SiNodedotjs, 
  SiGit, SiGithub, SiFigma, SiDocker 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { Brain, Cpu, Database, Bot, Sparkles, Network } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "C": <SiC className="text-white/80" />,
  "C++": <SiCplusplus className="text-white/80" />,
  "Java": <FaJava className="text-white/80" />,
  "Python": <SiPython className="text-white/80" />,
  "JavaScript": <SiJavascript className="text-white/80" />,
  "TypeScript": <SiTypescript className="text-white/80" />,
  "HTML": <SiHtml5 className="text-white/80" />,
  "CSS": <SiCss className="text-white/80" />,
  "React": <SiReact className="text-white/80" />,
  "Node.js": <SiNodedotjs className="text-white/80" />,
  "REST APIs": <Network className="w-3.5 h-3.5 text-white/80" />,
  "Artificial Intelligence": <Brain className="w-3.5 h-3.5 text-white/80" />,
  "Machine Learning": <Cpu className="w-3.5 h-3.5 text-white/80" />,
  "Generative AI": <Sparkles className="w-3.5 h-3.5 text-white/80" />,
  "LLM APIs": <Bot className="w-3.5 h-3.5 text-white/80" />,
  "Prompt Engineering": <Bot className="w-3.5 h-3.5 text-white/80" />,
  "Data Processing": <Database className="w-3.5 h-3.5 text-white/80" />,
  "Git": <SiGit className="text-white/80" />,
  "GitHub": <SiGithub className="text-white" />,
  "VS Code": <TbBrandVscode className="text-white/80" />,
  "Figma": <SiFigma className="text-white/80" />,
  "Docker": <SiDocker className="text-white/80" />
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState('');

  return (
    <section id="skills" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#080808] border-t border-[#141414] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222222] pb-8 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase block mb-3">
              03 // TECHNICAL TAXONOMY
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              CAPABILITIES<span className="text-[#666666]">.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm font-mono text-[#A3A3A3] max-w-sm">
            Core programming languages, machine learning frameworks, and engineering tools powering my software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Categorized Skills List */}
          <div className="lg:col-span-7 space-y-12">
            {Object.entries(portfolioData.skills).map(([category, items], index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#737373] uppercase pb-2 border-b border-[#1C1C1C]">
                  <span>CAT 0{index + 1}</span>
                  <span>//</span>
                  <span className="text-white font-semibold">{category}</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill('')}
                      className="px-4 py-2 bg-[#0F0F0F] border border-[#222222] hover:border-white text-xs font-mono tracking-wider text-[#A3A3A3] hover:text-white transition-all duration-200 cursor-default flex items-center gap-2.5"
                    >
                      {iconMap[skill]}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive 3D Constellation Viewport */}
          <div className="lg:col-span-5 h-[420px] lg:h-[520px] relative bg-[#0D0D0D] border border-[#1F1F1F] overflow-hidden">
            <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#737373] uppercase">
              <span className="w-2 h-2 rounded-full bg-white/40"></span>
              <span>INTERACTIVE TENSOR MATRIX</span>
            </div>

            {hoveredSkill && (
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-black/90 border border-[#333333] text-xs font-mono tracking-widest text-white">
                INSPECTING // {hoveredSkill}
              </div>
            )}
            
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#FFFFFF" />
                <SkillConstellation onHoverInfo={setHoveredSkill} />
              </Suspense>
            </Canvas>
          </div>
          
        </div>

      </div>
    </section>
  );
}

