import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import WhatIBuild from './components/WhatIBuild';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGrid from './components/3d/BackgroundGrid';
import { Canvas } from '@react-three/fiber';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] selection:bg-white selection:text-black relative">
      {/* Global Interactive Neural Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <BackgroundGrid />
        </Canvas>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <WhatIBuild />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

