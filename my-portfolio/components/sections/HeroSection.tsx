"use client";

import dynamic from "next/dynamic";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import { MoveDown } from "lucide-react";

// Dynamically import the 3D scene to avoid SSR issues

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Removed local 3D background since Robot is now in global background */}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-start justify-center pointer-events-none mt-20">
        <h1
          className={`${playfair.className} text-6xl sm:text-8xl lg:text-[7rem] leading-[1.05] tracking-tight text-[#2C2520] mb-6`}
        >
          <span className="block font-normal">DIVYESH</span>
        </h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-xs sm:text-sm tracking-[0.2em] text-[#D96C4A] font-semibold uppercase">AI / ML Engineer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D645A]" />
          <span className="text-xs sm:text-sm tracking-[0.2em] text-[#D96C4A] font-semibold uppercase">Creative Developer</span>
        </div>

        <p className={`${inter.className} text-lg sm:text-xl text-[#6D645A] max-w-2xl font-medium leading-relaxed mb-10`}>
          I build intelligent systems, modern web experiences and technology-driven products.
        </p>

        <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
          <Link
            href="#projects"
            data-cursor="hover"
            className="group relative px-8 py-3.5 bg-[#D96C4A] text-white font-semibold text-sm rounded-full overflow-hidden transition-transform hover:scale-105 shadow-md"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
          </Link>
          <Link
            href="#contact"
            data-cursor="hover"
            className="group px-8 py-3.5 border border-[#D96C4A] text-[#D96C4A] font-semibold text-sm rounded-full hover:bg-[#D96C4A]/10 transition-all hover:border-[#D96C4A]"
          >
            LET'S CONNECT
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 z-10 opacity-70 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#2C2520]">Scroll</span>
        <MoveDown size={14} className="text-[#2C2520]" />
      </div>

      {/* Status */}
      <div className="absolute bottom-10 right-6 lg:right-16 z-10 flex items-center space-x-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] tracking-widest text-[#6D645A] uppercase font-bold">Available for Opportunities</span>
      </div>
    </section>
  );
}
