import React from "react";

interface BrandMarkProps {
  className?: string;
  size?: number;
}

export function BrandMark({ className = "", size = 36 }: BrandMarkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="pk-brand-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5B8CFF" />
            <stop offset="100%" stopColor="#9A78FF" />
          </linearGradient>
          <filter id="pk-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Arc */}
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="rgba(190, 205, 230, 0.16)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Accent Trajectory Arc */}
        <path
          d="M 12 6 A 21 21 0 0 1 42 28"
          stroke="url(#pk-brand-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Geometric P/K Ligature Core */}
        {/* Vertical stem */}
        <path
          d="M 17 13 L 17 35"
          stroke="url(#pk-brand-grad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* P loop */}
        <path
          d="M 17 14 H 26 C 29.5 14 31.5 16 31.5 19 C 31.5 22 29.5 24 26 24 H 17"
          stroke="#F3F5FA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* K upper and lower diagonal arms */}
        <path
          d="M 23 23 L 32 14"
          stroke="url(#pk-brand-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 22 24 L 32 35"
          stroke="#F3F5FA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Signature Orbital Dot */}
        <circle cx="42" cy="28" r="3" fill="#5B8CFF" filter="url(#pk-glow)" />
      </svg>
    </div>
  );
}

