import React from "react";

export function ProjectIllustration({ id }: { id: string }) {
  if (id === "ai-agency-automation") {
    return (
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#080B12] border border-[rgba(190,205,230,0.1)] p-4 flex flex-col justify-between select-none mb-6 group-hover:border-[#5B8CFF]/30 transition-colors">
        {/* Top header bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A2ACBD]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[#F3F5FA] font-medium">PIPELINE: ACTIVE</span>
          </div>
          <span className="text-[#5B8CFF]">v0.4.2-alpha</span>
        </div>

        {/* Center node graph */}
        <div className="grid grid-cols-4 gap-2 items-center my-auto">
          {/* Node 1 */}
          <div className="p-2.5 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.12)] text-center flex flex-col items-center">
            <span className="text-[10px] font-mono text-[#A2ACBD] uppercase">Target</span>
            <span className="text-xs font-semibold text-[#F3F5FA] mt-0.5">Discovery</span>
          </div>

          {/* Node 2 */}
          <div className="p-2.5 rounded-lg bg-[#171E2D] border border-[#5B8CFF]/40 text-center flex flex-col items-center relative shadow-sm shadow-[#5B8CFF]/20">
            <span className="text-[10px] font-mono text-[#5B8CFF] uppercase">AI Model</span>
            <span className="text-xs font-semibold text-white mt-0.5">Synthesis</span>
          </div>

          {/* Node 3 */}
          <div className="p-2.5 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.12)] text-center flex flex-col items-center">
            <span className="text-[10px] font-mono text-[#9A78FF] uppercase">Preview</span>
            <span className="text-xs font-semibold text-[#F3F5FA] mt-0.5">Demo UI</span>
          </div>

          {/* Node 4 */}
          <div className="p-2.5 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.12)] text-center flex flex-col items-center">
            <span className="text-[10px] font-mono text-[#A2ACBD] uppercase">Outreach</span>
            <span className="text-xs font-semibold text-[#F3F5FA] mt-0.5">CRM Stage</span>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#A2ACBD] pt-2 border-t border-[rgba(190,205,230,0.06)]">
          <span>WORKFLOW AUTOMATION ENGINE</span>
          <span className="text-[#5B8CFF]">MODULAR PROTOTYPE</span>
        </div>
      </div>
    );
  }

  if (id === "veyra-sentinel") {
    return (
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#080B12] border border-[rgba(190,205,230,0.1)] p-4 flex flex-col justify-between select-none mb-6 group-hover:border-[#5B8CFF]/30 transition-colors">
        {/* Top header bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A2ACBD]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
            <span className="text-[#F3F5FA] font-medium">TELEMETRY STREAM // REACT &amp; TS</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#5B8CFF]/15 text-[#5B8CFF] text-[10px]">
            SIH &apos;26 FINALE
          </span>
        </div>

        {/* Telemetry wave visual */}
        <div className="relative h-16 w-full my-auto flex items-end justify-between gap-1 px-1">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 30 Q 15 5, 30 25 T 60 15 T 85 20 T 100 8"
              stroke="#5B8CFF"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 30 Q 15 5, 30 25 T 60 15 T 85 20 T 100 8 L 100 40 L 0 40 Z"
              fill="url(#veyra-wave-grad)"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="veyra-wave-grad" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5B8CFF" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {/* Peak data points */}
          <div className="relative z-10 w-full flex justify-around text-[10px] font-mono text-[#A2ACBD]">
            <span className="bg-[#101522]/80 px-1.5 py-0.5 rounded border border-[rgba(190,205,230,0.1)]">T-04: Normal</span>
            <span className="bg-[#101522]/80 px-1.5 py-0.5 rounded border border-[#5B8CFF]/30 text-[#5B8CFF]">Peak Anomaly</span>
            <span className="bg-[#101522]/80 px-1.5 py-0.5 rounded border border-[rgba(190,205,230,0.1)]">Forecast: Stabilized</span>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#A2ACBD] pt-2 border-t border-[rgba(190,205,230,0.06)]">
          <span>FRONTEND DASHBOARD CRAFT</span>
          <span className="text-emerald-400">TOP 30 SELECTION</span>
        </div>
      </div>
    );
  }

  if (id === "trusttrace") {
    return (
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#080B12] border border-[rgba(190,205,230,0.1)] p-4 flex flex-col justify-between select-none mb-6 group-hover:border-[#9A78FF]/30 transition-colors">
        {/* Top header bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A2ACBD]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#9A78FF]" />
            <span className="text-[#F3F5FA] font-medium">WORKER 02 // INGESTION ENGINE</span>
          </div>
          <span className="text-[#9A78FF]">CYBERSECURITY</span>
        </div>

        {/* Schema normalization diagram */}
        <div className="grid grid-cols-3 gap-2 my-auto items-center">
          <div className="p-2 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.1)] text-center">
            <div className="text-[9px] font-mono text-[#A2ACBD]">RAW TELEMETRY</div>
            <div className="text-xs font-semibold text-[#F3F5FA] mt-0.5 font-mono">Inbound Log</div>
          </div>

          <div className="p-2 rounded-lg bg-[#171E2D] border border-[#9A78FF]/40 text-center shadow-sm shadow-[#9A78FF]/20">
            <div className="text-[9px] font-mono text-[#9A78FF]">NORMALIZATION</div>
            <div className="text-xs font-semibold text-white mt-0.5 font-mono">Schema Parse</div>
          </div>

          <div className="p-2 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.1)] text-center">
            <div className="text-[9px] font-mono text-[#A2ACBD]">PERSISTENCE</div>
            <div className="text-xs font-semibold text-[#F3F5FA] mt-0.5 font-mono">REST Query</div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#A2ACBD] pt-2 border-t border-[rgba(190,205,230,0.06)]">
          <span>COLLABORATIVE SECURITY SUITE</span>
          <span className="text-[#9A78FF]">WORKER 02 MODULE</span>
        </div>
      </div>
    );
  }

  // R K Traders
  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#080B12] border border-[rgba(190,205,230,0.1)] p-4 flex flex-col justify-between select-none mb-6 group-hover:border-emerald-500/30 transition-colors">
      {/* Top header bar */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A2ACBD]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[#F3F5FA] font-medium">COMMERCIAL CLIENT SITE</span>
        </div>
        <span className="text-emerald-400">DELIVERED</span>
      </div>

      {/* Storefront wireframe */}
      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="h-14 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.08)] p-2 flex flex-col justify-between">
          <div className="w-8 h-1.5 rounded bg-[rgba(190,205,230,0.2)]" />
          <div className="w-12 h-2 rounded bg-emerald-400/40" />
        </div>
        <div className="h-14 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.08)] p-2 flex flex-col justify-between">
          <div className="w-8 h-1.5 rounded bg-[rgba(190,205,230,0.2)]" />
          <div className="w-12 h-2 rounded bg-emerald-400/40" />
        </div>
        <div className="h-14 rounded-lg bg-[#101522] border border-[rgba(190,205,230,0.08)] p-2 flex flex-col justify-between">
          <div className="w-8 h-1.5 rounded bg-[rgba(190,205,230,0.2)]" />
          <div className="w-12 h-2 rounded bg-emerald-400/40" />
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#A2ACBD] pt-2 border-t border-[rgba(190,205,230,0.06)]">
        <span>RESPONSIVE STOREFRONT ENGINE</span>
        <span className="text-[#A2ACBD]">CLIENT CONFIDENTIAL</span>
      </div>
    </div>
  );
}

