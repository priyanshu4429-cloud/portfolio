"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Monogram3D() {
  const groupRef = useRef<THREE.Group>(null);
  const satelliteRef = useRef<THREE.Mesh>(null);

  // Procedural Extruded P/K Geometric Shape
  const { stemGeo, pGeo, kUpperGeo, kLowerGeo } = useMemo(() => {
    const bevel = {
      steps: 2,
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 3,
    };

    // 1. Vertical Stem (rounded bar)
    const stemShape = new THREE.Shape();
    const w = 0.28;
    const h = 2.4;
    stemShape.moveTo(-w / 2, -h / 2);
    stemShape.lineTo(w / 2, -h / 2);
    stemShape.lineTo(w / 2, h / 2);
    stemShape.lineTo(-w / 2, h / 2);
    stemShape.closePath();
    const stem = new THREE.ExtrudeGeometry(stemShape, bevel);

    // 2. "P" Loop
    const pShape = new THREE.Shape();
    pShape.moveTo(0, 1.2);
    pShape.lineTo(0.7, 1.2);
    pShape.bezierCurveTo(1.3, 1.2, 1.3, 0.1, 0.7, 0.1);
    pShape.lineTo(0, 0.1);
    pShape.lineTo(0, 0.35);
    pShape.lineTo(0.65, 0.35);
    pShape.bezierCurveTo(0.95, 0.35, 0.95, 0.95, 0.65, 0.95);
    pShape.lineTo(0, 0.95);
    pShape.closePath();
    const pLoop = new THREE.ExtrudeGeometry(pShape, bevel);

    // 3. "K" Upper Diagonal Arm
    const kUpperShape = new THREE.Shape();
    kUpperShape.moveTo(0.05, 0.2);
    kUpperShape.lineTo(1.15, 1.2);
    kUpperShape.lineTo(1.15, 0.85);
    kUpperShape.lineTo(0.35, 0.1);
    kUpperShape.closePath();
    const kUpper = new THREE.ExtrudeGeometry(kUpperShape, bevel);

    // 4. "K" Lower Diagonal Arm
    const kLowerShape = new THREE.Shape();
    kLowerShape.moveTo(0.15, 0.15);
    kLowerShape.lineTo(1.2, -1.2);
    kLowerShape.lineTo(0.85, -1.2);
    kLowerShape.lineTo(0.05, -0.2);
    kLowerShape.closePath();
    const kLower = new THREE.ExtrudeGeometry(kLowerShape, bevel);

    return { stemGeo: stem, pGeo: pLoop, kUpperGeo: kUpper, kLowerGeo: kLower };
  }, []);

  // Premium Metallic Material with Blue-Violet reflections
  const metallicMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#1A2234"),
      emissive: new THREE.Color("#5B8CFF"),
      emissiveIntensity: 0.12,
      metalness: 0.85,
      roughness: 0.22,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });
  }, []);

  // Accent Violet Material for Diagonal Accents
  const accentMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#221D38"),
      emissive: new THREE.Color("#9A78FF"),
      emissiveIntensity: 0.18,
      metalness: 0.88,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
    });
  }, []);

  // Animation Loop: Subtle rotation & floating
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.08;

      // Slow, controlled rotation
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.04;
    }

    // Satellite orbital rotation
    if (satelliteRef.current) {
      const angle = state.clock.elapsedTime * 1.2;
      const radius = 1.65;
      satelliteRef.current.position.x = Math.cos(angle) * radius;
      satelliteRef.current.position.z = Math.sin(angle) * radius * 0.8;
      satelliteRef.current.position.y = Math.sin(angle * 2) * 0.35 + 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Center Monogram Elements */}
      <group position={[-0.35, 0, 0]}>
        {/* Stem */}
        <mesh geometry={stemGeo} material={metallicMaterial} castShadow receiveShadow />

        {/* P Loop */}
        <mesh geometry={pGeo} material={metallicMaterial} castShadow receiveShadow />

        {/* K Upper Arm */}
        <mesh geometry={kUpperGeo} material={accentMaterial} castShadow receiveShadow />

        {/* K Lower Arm */}
        <mesh geometry={kLowerGeo} material={metallicMaterial} castShadow receiveShadow />
      </group>

      {/* Orbiting Satellite Identity Sphere */}
      <mesh ref={satelliteRef} castShadow>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshStandardMaterial
          color="#5B8CFF"
          emissive="#5B8CFF"
          emissiveIntensity={2.5}
          roughness={0.1}
          metalness={0.9}
        />
        {/* Point light traveling with satellite */}
        <pointLight color="#5B8CFF" intensity={0.8} distance={2} decay={2} />
      </mesh>
    </group>
  );
}
