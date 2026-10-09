import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Line, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

interface NodeData {
  position: [number, number, number];
  label: string;
  color: string;
}

const SKILL_NODES: NodeData[] = [
  { position: [0, 0, 0], label: 'AI', color: '#7C3AED' },
  { position: [2, 1.5, -1], label: 'Python', color: '#06B6D4' },
  { position: [-2, 1, 1], label: 'ML', color: '#FFFFFF' },
  { position: [1.5, -2, 0.5], label: 'React', color: '#06B6D4' },
  { position: [-1.5, -1.5, -1.5], label: 'JavaScript', color: '#A1A1AA' },
  { position: [0, 2.5, 0.5], label: 'Data', color: '#FFFFFF' },
  { position: [0, -2.5, -0.5], label: 'Git', color: '#A1A1AA' },
];

function SkillNode({ data, onHover }: { data: NodeData, onHover: (hovered: boolean, label: string) => void }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={new THREE.Vector3(...data.position)}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere 
          args={[0.2, 16, 16]} 
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(true, data.label); document.body.style.cursor = 'pointer'; }}
          onPointerOut={() => { setHovered(false); onHover(false, ''); document.body.style.cursor = 'auto'; }}
        >
          <meshStandardMaterial 
            color={hovered ? '#FFFFFF' : data.color} 
            emissive={hovered ? '#FFFFFF' : data.color}
            emissiveIntensity={hovered ? 1 : 0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        {hovered && (
          <Text
            position={[0, 0.4, 0]}
            fontSize={0.25}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
          >
            {data.label}
          </Text>
        )}
      </Float>
    </group>
  );
}

export default function SkillConstellation({ onHoverInfo }: { onHoverInfo: (label: string) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  // Create connection lines between nodes
  const lines = useMemo(() => {
    const connections = [];
    const mainNode = SKILL_NODES[0].position; // AI is the center
    
    for (let i = 1; i < SKILL_NODES.length; i++) {
      connections.push([mainNode, SKILL_NODES[i].position]);
      
      // Connect to next node to form a web, wrap around
      const nextIndex = i === SKILL_NODES.length - 1 ? 1 : i + 1;
      connections.push([SKILL_NODES[i].position, SKILL_NODES[nextIndex].position]);
    }
    return connections;
  }, []);

  const handleHover = (hovered: boolean, label: string) => {
    onHoverInfo(hovered ? label : '');
  };

  return (
    <group ref={groupRef}>
      {SKILL_NODES.map((node, i) => (
        <SkillNode key={i} data={node} onHover={handleHover} />
      ))}
      
      {lines.map((line, i) => (
        <Line 
          key={`line-${i}`}
          points={line as any}
          color="#ffffff"
          lineWidth={1}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}
