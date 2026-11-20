"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// Deterministic particle coordinates generated at module load time (Pure, zero re-render overhead)
const PARTICLE_POSITIONS = (() => {
  const count = 55;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = Math.sin(i * 1.7) * 4;
    positions[i3 + 1] = Math.cos(i * 2.3) * 3;
    positions[i3 + 2] = Math.sin(i * 3.1) * 2.5;
  }
  return positions;
})();

export function FloatingElements() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const crystal1Ref = useRef<THREE.Mesh>(null);
  const crystal2Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Frame animation loop
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Ring 1 slow orbital tumble
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = 0.5 + Math.sin(t * 0.2) * 0.1;
      ring1Ref.current.rotation.y += delta * 0.1;
      ring1Ref.current.rotation.z = Math.cos(t * 0.15) * 0.15;
    }

    // Ring 2 opposite orbital tumble
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -0.4 + Math.cos(t * 0.18) * 0.1;
      ring2Ref.current.rotation.y -= delta * 0.08;
      ring2Ref.current.rotation.z = Math.sin(t * 0.25) * 0.2;
    }

    // Crystal 1 floating
    if (crystal1Ref.current) {
      crystal1Ref.current.position.y = 1.3 + Math.sin(t * 0.7) * 0.12;
      crystal1Ref.current.rotation.x += delta * 0.4;
      crystal1Ref.current.rotation.y += delta * 0.3;
    }

    // Crystal 2 floating
    if (crystal2Ref.current) {
      crystal2Ref.current.position.y = -1.2 + Math.cos(t * 0.8) * 0.1;
      crystal2Ref.current.rotation.y -= delta * 0.35;
      crystal2Ref.current.rotation.z += delta * 0.25;
    }

    // Particles slow ambient drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group>
      {/* Primary Orbital Ring */}
      <mesh ref={ring1Ref} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.012, 16, 80]} />
        <meshStandardMaterial
          color="#5B8CFF"
          emissive="#5B8CFF"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Secondary Inclined Orbital Ring */}
      <mesh ref={ring2Ref} position={[0, 0, -0.4]}>
        <torusGeometry args={[2.6, 0.008, 16, 80]} />
        <meshStandardMaterial
          color="#9A78FF"
          emissive="#9A78FF"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Floating Geometric Crystal 1: Icosahedron (Top Left, Depth -1.2) */}
      <mesh ref={crystal1Ref} position={[-2.1, 1.3, -1.2]}>
        <icosahedronGeometry args={[0.32, 0]} />
        <meshPhysicalMaterial
          color="#1D2335"
          emissive="#5B8CFF"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.15}
          clearcoat={1}
          flatShading
        />
      </mesh>

      {/* Floating Geometric Crystal 2: Octahedron (Bottom Right, Depth -0.9) */}
      <mesh ref={crystal2Ref} position={[2.2, -1.2, -0.9]}>
        <octahedronGeometry args={[0.26, 0]} />
        <meshPhysicalMaterial
          color="#221C35"
          emissive="#9A78FF"
          emissiveIntensity={0.35}
          metalness={0.92}
          roughness={0.12}
          clearcoat={1}
          flatShading
        />
      </mesh>

      {/* Sparse 3D Glowing Particle Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[PARTICLE_POSITIONS, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#B6D0FF"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
