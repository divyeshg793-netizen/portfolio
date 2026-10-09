"use client";

import { useRef } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { useInView } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const stats = [
  { id: "01", title: "AI / ML" },
  { id: "02", title: "FULL STACK" },
  { id: "03", title: "3D WEB" },
  { id: "04", title: "PROBLEM SOLVING" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" className="relative w-full py-32 lg:py-48 bg-transparent border-t border-white/5 z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Headline */}
          <div 
            className={`lg:col-span-6 transition-all duration-1000 transform ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-xs tracking-[0.2em] text-neutral-500 font-semibold uppercase mb-8 block">About Me</span>
            <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-8`}>
              Building at the intersection of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                AI, software and creativity.
              </span>
            </h2>
          </div>

          {/* Right Column: Intro & Stats */}
          <div 
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-1000 delay-200 transform ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className={`${inter.className} text-lg text-neutral-400 leading-relaxed font-light mb-16`}>
              As a Computer Science student and aspiring AI/ML engineer, I bridge the gap between heavy computational logic and immersive digital experiences. I don't just train models or build interfaces—I architect holistic systems where artificial intelligence empowers human-centric design.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col space-y-2 group">
                  <span className={`${playfair.className} text-4xl lg:text-5xl text-neutral-700 transition-colors duration-500 group-hover:text-white`}>
                    {stat.id}
                  </span>
                  <span className="text-xs tracking-widest text-neutral-400 font-medium">
                    {stat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
