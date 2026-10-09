import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export default function AIOrb() {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.15;
      innerRef.current.rotation.y = t * 0.2;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.1;
      wireframeRef.current.rotation.y = -t * 0.15;
    }

    if (outerRef.current) {
      // Fluid mouse parallax
      outerRef.current.rotation.y = THREE.MathUtils.lerp(
        outerRef.current.rotation.y,
        state.pointer.x * 0.4,
        0.05
      );
      outerRef.current.rotation.x = THREE.MathUtils.lerp(
        outerRef.current.rotation.x,
        -state.pointer.y * 0.4,
        0.05
      );
    }
  });

  return (
    <group ref={outerRef} position={[2, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        {/* Core Architectural Polyhedron (Semi-translucent dark matte) */}
        <Icosahedron ref={innerRef} args={[1.6, 1]}>
          <meshStandardMaterial
            color="#141414"
            roughness={0.2}
            metalness={0.9}
            wireframe={false}
          />
        </Icosahedron>

        {/* Outer Wireframe Tensor Shell */}
        <Icosahedron ref={wireframeRef} args={[2.1, 1]}>
          <meshBasicMaterial
            color="#FFFFFF"
            wireframe
            transparent
            opacity={0.18}
          />
        </Icosahedron>

        {/* Delicate Orbital Coordinate Rings */}
        <mesh rotation-x={Math.PI / 2}>
          <ringGeometry args={[2.8, 2.81, 64]} />
          <meshBasicMaterial color="#A3A3A3" transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>

        <mesh rotation-y={Math.PI / 3} rotation-z={Math.PI / 4}>
          <ringGeometry args={[3.2, 3.21, 64]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>

        {/* Minimalist Point Nodes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const phi = Math.acos(-1 + (2 * i) / 12);
          const theta = Math.sqrt(12 * Math.PI) * phi;
          const r = 2.4;
          const x = r * Math.cos(theta) * Math.sin(phi);
          const y = r * Math.sin(theta) * Math.sin(phi);
          const z = r * Math.cos(phi);

          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.025, 8, 8]} />
              <meshBasicMaterial color="#FFFFFF" transparent opacity={0.6} />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
}

