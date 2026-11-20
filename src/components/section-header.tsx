import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide mb-3 bg-[#101522]/80 border border-[rgba(190,205,230,0.14)] text-[#5B8CFF] ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] animate-pulse" aria-hidden="true" />
        <span>{badge}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3F5FA] mb-4">
        {title}
      </h2>

      <p className="text-base sm:text-lg text-[#A2ACBD] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

