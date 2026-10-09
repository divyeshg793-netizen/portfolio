"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { Preload } from "@react-three/drei";

interface CanvasWrapperProps {
  children: ReactNode;
}

export default function CanvasWrapper({ children }: CanvasWrapperProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
