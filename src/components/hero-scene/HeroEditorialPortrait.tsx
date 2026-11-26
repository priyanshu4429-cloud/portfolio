"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function HeroEditorialPortrait() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const handleScroll = () => {
      if (!prefersReducedMotion) {
        setScrollY(Math.min(180, window.scrollY));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (prefersReducedMotion || !isFinePointer) {
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x: x * 8, y: -y * 8 });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
      setIsHovered(false);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mouseenter", handleMouseEnter);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mouseenter", handleMouseEnter);
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Blue-Violet Ambient Halo Glow Behind Portrait */}
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-full blur-3xl -z-10 transition-all duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(91,140,255,0.28) 0%, rgba(154,120,255,0.20) 50%, transparent 75%)",
          transform: `translate3d(${mousePos.x * 2}px, ${-mousePos.y * 2 + scrollY * 0.15}px, 0) scale(${
            isHovered ? 1.08 : 1
          })`,
        }}
      />

      {/* 3D Mouse Tilt + Scroll Parallax Container */}
      <div
        style={{
          transform: `translate3d(0, ${scrollY * 0.12}px, 0) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
            : "transform 0.6s cubic-bezier(0.2, 0, 0, 1)",
        }}
        className="relative w-full aspect-square flex items-end justify-center"
      >
        <Image
          src="/assets/priyanshu-cutout.png"
          alt="Priyanshu Kumar portrait"
          fill
          priority
          className="object-contain object-bottom drop-shadow-[0_22px_38px_rgba(37,99,235,0.22)] transition-all duration-300"
          sizes="(max-width: 640px) 340px, 420px"
        />
      </div>
    </div>
  );
}
