"use client";

import React, { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    // Scroll progress bar (works everywhere unless reduced motion)
    const handleScroll = () => {
      if (!progressRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (prefersReducedMotion || !isFinePointer) {
      return () => window.removeEventListener("scroll", handleScroll);
    }

    // Smooth lerped mouse-following ambient glow
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 240}px, ${currentY - 240}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-gradient-to-r from-[#2563EB] via-[#5B8CFF] to-[#9A78FF]"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Mouse-Following Ambient Spotlight Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none z-30 hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(91, 140, 255, 0.15) 0%, rgba(154, 120, 255, 0.08) 40%, rgba(255, 255, 255, 0) 70%)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
}
