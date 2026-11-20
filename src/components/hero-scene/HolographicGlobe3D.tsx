"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function HologramElements() {
  const globeRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const crystalRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Rotate Holographic Globe
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.45;
      globeRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }

    // Tumble Orbital Ring
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.3;
      ringRef.current.rotation.x = 1.1 + Math.sin(t * 0.4) * 0.08;
    }

    // Spin Holographic Crystal
    if (crystalRef.current) {
      crystalRef.current.rotation.x += delta * 0.5;
      crystalRef.current.rotation.y += delta * 0.6;
      crystalRef.current.position.y = -1.1 + Math.sin(t * 0.8) * 0.08;
    }
  });

  return (
    <group>
      {/* 1. Holographic Earth Globe (Top Right) */}
      <group ref={globeRef} position={[2.0, 1.2, 0]}>
        {/* Wireframe Outer Sphere */}
        <mesh>
          <sphereGeometry args={[0.85, 20, 20]} />
          <meshBasicMaterial
            color="#5B8CFF"
            wireframe
            transparent
            opacity={0.55}
          />
        </mesh>

        {/* Inner Semi-transparent Core */}
        <mesh>
          <sphereGeometry args={[0.78, 16, 16]} />
          <meshStandardMaterial
            color="#080B12"
            emissive="#5B8CFF"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Dynamic Orbital Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[1.25, 0.018, 16, 60]} />
          <meshStandardMaterial
            color="#9A78FF"
            emissive="#9A78FF"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* 2. Holographic Wireframe Polyhedron (Bottom Right) */}
      <mesh ref={crystalRef} position={[1.8, -1.1, 0.4]}>
        <icosahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color="#9A78FF"
          emissive="#9A78FF"
          emissiveIntensity={1.2}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

export function HolographicGlobe3D() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "default" }}
      >
        <ambientLight intensity={0.8} color="#0E1626" />
        <directionalLight position={[3, 3, 3]} intensity={1.5} color="#5B8CFF" />
        <directionalLight position={[-3, -2, 2]} intensity={1.2} color="#9A78FF" />

        <HologramElements />
      </Canvas>
    </div>
  );
}

