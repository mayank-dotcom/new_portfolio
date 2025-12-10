'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial wireframe color="#00ffff" opacity={0.3} transparent />
    </mesh>
  );
}

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[3, 0, 0]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshBasicMaterial wireframe color="#ff6b35" opacity={0.6} transparent />
      </mesh>
      <mesh position={[-3, 2, 0]}>
        <octahedronGeometry args={[0.8]} />
        <meshBasicMaterial wireframe color="#ffd23f" opacity={0.4} transparent />
      </mesh>
      <mesh position={[0, -2, 2]}>
        <icosahedronGeometry args={[0.7]} />
        <meshBasicMaterial wireframe color="#ff00ff" opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
