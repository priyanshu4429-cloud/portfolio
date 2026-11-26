import React from "react";

interface SectionHeaderProps {
  watermark: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  watermark,
  title,
  subtitle,
  dark = false,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-10 md:mb-14 select-none ${
        isCenter ? "text-center flex flex-col items-center" : "text-left"
      } ${className}`}
    >
      {/* Giant Faint Background Watermark (matching Image 2 & 3) */}
      <div
        className={`text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight uppercase leading-none pointer-events-none ${
          dark ? "text-white/[0.05]" : "text-[#111318]/[0.05]"
        }`}
        aria-hidden="true"
      >
        {watermark}
      </div>

      {/* Foreground Crisp Title */}
      <h2
        className={`-mt-6 sm:-mt-8 md:-mt-10 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase ${
          dark ? "text-white" : "text-[#111318]"
        }`}
      >
        /{title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base max-w-2xl leading-relaxed ${
            dark ? "text-[#9CA3AF]" : "text-[#5A606D]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
