import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import AIOrb from './AIOrb';
import ParticleField from './ParticleField';

export default function HeroScene() {
  const [dpr, setDpr] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 1.5));
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-60 md:opacity-85">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={dpr}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 8]} intensity={1.2} color="#FFFFFF" />
          <directionalLight position={[-10, -5, -5]} intensity={0.4} color="#737373" />
          
          <AIOrb />
          {!isMobile && <ParticleField count={800} />}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

