"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Monogram3D } from "./Monogram3D";
import { FloatingElements } from "./FloatingElements";

function CameraRig() {
  const targetPos = useRef(new THREE.Vector3(0, 0, 6.2));

  useFrame((state) => {
    // Smooth mouse parallax interpolation
    const mouseX = state.pointer.x * 0.8;
    const mouseY = state.pointer.y * 0.6;

    targetPos.current.set(mouseX, mouseY, 6.2);
    state.camera.position.lerp(targetPos.current, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroSceneCanvas() {
  return (
    <div className="relative w-full h-full min-h-[440px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.5]} // Performance optimization: capped at 1.5x for integrated GPUs
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "default",
          preserveDrawingBuffer: false,
        }}
        className="w-full h-full"
      >
        {/* Cinematic Ambient Lighting */}
        <ambientLight intensity={0.9} color="#0E1626" />

        {/* Primary Cobalt Key Light */}
        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#5B8CFF" />

        {/* Supporting Violet Rim Light */}
        <directionalLight position={[-4, -3, 2]} intensity={1.6} color="#9A78FF" />

        {/* Central Core Point Light */}
        <pointLight position={[0, 0, 2.5]} intensity={1.2} distance={8} color="#5B8CFF" />

        {/* 3D Scene Objects */}
        <Monogram3D />
        <FloatingElements />

        {/* Smooth Camera Parallax Controller */}
        <CameraRig />
      </Canvas>
    </div>
  );
}

