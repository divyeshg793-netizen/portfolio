"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, Float, Sphere, Cylinder, RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import { MathUtils } from "three";

export default function GlobalBackground() {
  const headRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);
  
  // Ref to store raw mouse coordinates from the window
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle smooth mouse tracking
  useFrame((state, delta) => {
    if (!headRef.current || !torsoRef.current) return;

    // The head looks directly at the mouse
    const targetHeadX = -mouseRef.current.y * 0.8;
    const targetHeadY = mouseRef.current.x * 1.2;

    // The torso turns slightly less for a natural feel
    const targetTorsoX = -mouseRef.current.y * 0.2;
    const targetTorsoY = mouseRef.current.x * 0.5;

    // Smoothly interpolate current rotation to target rotation
    headRef.current.rotation.x = MathUtils.lerp(headRef.current.rotation.x, targetHeadX, delta * 5);
    headRef.current.rotation.y = MathUtils.lerp(headRef.current.rotation.y, targetHeadY, delta * 5);

    torsoRef.current.rotation.x = MathUtils.lerp(torsoRef.current.rotation.x, targetTorsoX, delta * 3);
    torsoRef.current.rotation.y = MathUtils.lerp(torsoRef.current.rotation.y, targetTorsoY, delta * 3);
  });

  return (
    <>
      <fog attach="fog" args={["#F9F6F0", 8, 30]} />
      
      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#FFFFFF" />
      
      {/* Environment map for realistic reflections */}
      <Environment preset="city" />

      {/* Floating Robot scaled down to fit properly */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[0, -3.5, 0]} scale={2.2}>
          
          {/* Torso Group */}
          <group ref={torsoRef}>
            {/* Main Body */}
            <RoundedBox args={[1.8, 2.2, 1.2]} position={[0, 0, 0]} radius={0.3} smoothness={4}>
              <meshStandardMaterial 
                color="#1a1a1a" 
                roughness={0.2} 
                metalness={0.8}
              />
            </RoundedBox>
            
            {/* Shoulders */}
            <Sphere args={[0.5, 32, 32]} position={[-1.2, 0.8, 0]}>
              <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.9} />
            </Sphere>
            <Sphere args={[0.5, 32, 32]} position={[1.2, 0.8, 0]}>
              <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.9} />
            </Sphere>

            {/* Arms */}
            <Cylinder args={[0.2, 0.15, 1.5, 32]} position={[-1.4, -0.2, 0]} rotation={[0, 0, 0.2]}>
              <meshStandardMaterial color="#2D2D23" roughness={0.4} metalness={0.7} />
            </Cylinder>
            <Cylinder args={[0.2, 0.15, 1.5, 32]} position={[1.4, -0.2, 0]} rotation={[0, 0, -0.2]}>
              <meshStandardMaterial color="#2D2D23" roughness={0.4} metalness={0.7} />
            </Cylinder>

            {/* Neck Pivot */}
            <Cylinder args={[0.2, 0.2, 0.4, 32]} position={[0, 1.3, 0]}>
              <meshStandardMaterial color="#333333" roughness={0.2} metalness={1} />
            </Cylinder>
          </group>

          {/* Head Group - Rotates Independently */}
          <group ref={headRef} position={[0, 1.8, 0]}>
            {/* Helmet/Skull */}
            <RoundedBox args={[1.2, 1.2, 1.4]} radius={0.4} smoothness={4}>
              <meshStandardMaterial 
                color="#111111" 
                roughness={0.1} 
                metalness={0.9}
              />
            </RoundedBox>
            
            {/* Visor / Face Plate */}
            <RoundedBox args={[1.0, 0.6, 0.2]} position={[0, 0.1, 0.65]} radius={0.1} smoothness={4}>
              <MeshTransmissionMaterial 
                backside
                samples={4}
                thickness={0.5}
                chromaticAberration={0.05}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.5}
                temporalDistortion={0.0}
                color="#000000"
              />
            </RoundedBox>

            {/* Glowing Eyes inside the visor */}
            <Sphere args={[0.1, 16, 16]} position={[-0.25, 0.1, 0.6]}>
              <meshStandardMaterial color="#854628" emissive="#854628" emissiveIntensity={5} toneMapped={false} />
            </Sphere>
            <Sphere args={[0.1, 16, 16]} position={[0.25, 0.1, 0.6]}>
              <meshStandardMaterial color="#854628" emissive="#854628" emissiveIntensity={5} toneMapped={false} />
            </Sphere>
          </group>

        </group>
      </Float>
    </>
  );
}
