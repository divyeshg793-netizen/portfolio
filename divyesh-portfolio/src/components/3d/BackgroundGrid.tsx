import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function BackgroundGrid() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesCount = 900;
  
  const [positions, opacities] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const opacities = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
      
      opacities[i] = Math.random() * 0.4 + 0.1;
    }
    
    return [positions, opacities];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const mouse = state.pointer;
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, mouse.x * 0.05, 0.03);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, -mouse.y * 0.05, 0.03);
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-opacity"
          args={[opacities, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#888888"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

