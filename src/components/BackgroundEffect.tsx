import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

// Glowing particles
const GlowingParticles: React.FC = () => {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random particles - reducing count for less distraction
  const count = 800; // Reduced from 2000
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 60; // Spread particles wider
      positions[i3 + 1] = (Math.random() - 0.5) * 40; 
      positions[i3 + 2] = (Math.random() - 0.5) * 60;
    }
    return positions;
  }, [count]);

  // Store original positions
  const originalPositions = useMemo(() => {
    return particlePositions.slice();
  }, [particlePositions]);

  // More subtle colors for particles
  const colors = useMemo(() => {
    const particleColors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#1a2c42"), // Deep blue
      new THREE.Color("#2c3e50"), // Midnight blue
      new THREE.Color("#34495e"), // Wet asphalt
      new THREE.Color("#2a4158"), // Steel blue
      new THREE.Color("#283747")  // Dark slate
    ];
    
    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const i3 = i * 3;
      particleColors[i3] = color.r;
      particleColors[i3 + 1] = color.g;
      particleColors[i3 + 2] = color.b;
    }
    
    return particleColors;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      const boundaryLimit = 60;
      
      // Move particles with slower, more subtle movement
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const speed = Math.sin(i * 0.01) * 0.005 + 0.007;  // Reduced speed (was 0.01 + 0.02)
        
        positions[i3 + 1] += Math.sin((i + time) * 0.1) * 0.01; // Slower movement
        positions[i3] += Math.cos((i + time) * 0.05) * 0.01;   // Slower movement
        positions[i3 + 2] -= speed; // Move towards camera slower
        
        // Reset particles that move out of range
        if (positions[i3 + 2] < -40) {
          positions[i3] = (Math.random() - 0.5) * 60;
          positions[i3 + 1] = (Math.random() - 0.5) * 40;
          positions[i3 + 2] = 60; // Reset to far away
        }
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Create color attribute for the geometry
  const colorAttribute = new THREE.BufferAttribute(colors, 3);

  return (
    <Points ref={ref} positions={particlePositions} stride={3} frustumCulled={false}>
      <pointsMaterial 
        size={0.3}  // Smaller size (was 0.5)
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.4}  // Reduced opacity (was 0.8)
        blending={THREE.AdditiveBlending}
      />
      {/* Apply colors directly to the geometry */}
    </Points>
  );
};

// Combined background effect
const BackgroundEffect: React.FC = () => {
  return (
    <>
      <GlowingParticles />
      <fog attach="fog" args={["#0f0c29", 15, 70]} /> {/* Darker blue-gray fog */}
      <ambientLight intensity={0.08} /> {/* Subtle lighting */}
      {/* Add a background plane with gradient */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#0f0c29" />
      </mesh>
    </>
  );
};

export default BackgroundEffect; 