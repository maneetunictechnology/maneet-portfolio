export default function ConstellationFallback() {
  return (
    <div className="w-full h-full min-h-[380px] rounded-3xl border border-white/10 bg-[#0E0E12] flex flex-col items-center justify-center p-8 relative overflow-hidden select-none">
      {/* Background glow orb */}
      <div className="absolute w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Futuristic Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl border border-accent/30 bg-accent/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(199,255,74,0.2)]">
          <div className="w-3 h-3 rounded-full bg-accent animate-ping" />
        </div>
        <h4 className="text-lg font-heading font-bold text-text-primary uppercase tracking-wide mb-1">
          Interactive Neural Constellation
        </h4>
        <p className="text-xs font-mono text-text-secondary max-w-sm">
          WebGL visualization initializing nodes, neural bridges, and tech stack topology...
        </p>
      </div>
    </div>
  );
}
