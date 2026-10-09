"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MathUtils } from "three";

export default function DisasterVisualization() {
  const groupRef = useRef<THREE.Group>(null);
  const routesRef = useRef<THREE.Points>(null);

  // Futuristic city grid / buildings
  const buildingCount = 150;
  const buildings = useMemo(() => {
    return Array.from({ length: buildingCount }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        0,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      height: Math.random() * 2 + 0.5,
      isEmergency: Math.random() > 0.9
    }));
  }, [buildingCount]);

  // Animated response routes (particles moving along lines)
  const routePoints = 500;
  const routePositions = useMemo(() => {
    const pos = new Float32Array(routePoints * 3);
    for (let i = 0; i < routePoints; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = 0.1; // Slightly above ground
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [routePoints]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow cinematic rotation
      groupRef.current.rotation.y += delta * 0.05;
    }
    if (routesRef.current) {
      // Simulate traffic/data flow
      const positions = routesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < routePoints; i++) {
        positions[i * 3] += (Math.random() - 0.5) * 0.1;
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.1;
      }
      routesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, -5]} rotation={[Math.PI / 6, 0, 0]}>
      {/* City Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#0a0a0a" wireframe transparent opacity={0.1} />
      </mesh>

      {/* Grid helper for technical feel */}
      <gridHelper args={[20, 40, "#1e1b4b", "#0f172a"]} position={[0, 0, 0]} />

      {/* Buildings */}
      {buildings.map((b, i) => (
        <mesh key={i} position={[b.position[0], b.height / 2, b.position[2]]}>
          <boxGeometry args={[0.4, b.height, 0.4]} />
          <meshStandardMaterial 
            color={b.isEmergency ? "#ef4444" : "#1e293b"} 
            emissive={b.isEmergency ? "#ef4444" : "#0f172a"}
            emissiveIntensity={b.isEmergency ? 2 : 0.5}
            transparent
            opacity={0.8}
            wireframe={!b.isEmergency}
          />
        </mesh>
      ))}

      {/* Emergency Response Routes / Data Flow */}
      <points ref={routesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[routePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          color="#38bdf8" 
          transparent 
          opacity={0.6} 
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Scanner Radar Effect */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <ringGeometry args={[0, 8, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.05} wireframe />
      </mesh>
    </group>
  );
}
