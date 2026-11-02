export default function FallbackSculpture() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center pointer-events-none select-none p-4"
      aria-hidden="true"
    >
      <div className="relative w-full max-w-[480px] flex flex-col items-center">
        {/* Ambient backlight glow */}
        <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />

        {/* 3D Monitor Chassis */}
        <div className="relative w-full rounded-2xl bg-[#0D0D14]/95 backdrop-blur-xl border border-accent/40 shadow-[0_0_50px_rgba(198,255,63,0.18)] overflow-hidden font-mono text-xs">
          {/* Header Bar */}
          <div className="px-4 py-2.5 bg-[#06060A] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-[10px] text-accent tracking-wider uppercase font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>page.jsx &bull; Next.js 14</span>
            </div>
            <div className="text-[9px] text-text-muted">60 FPS</div>
          </div>

          {/* Code Body */}
          <div className="p-4 space-y-1.5 text-[11px] leading-relaxed bg-[#0A0A10]/95 min-h-[190px]">
            <p className="text-[#C084FC]">export default function Workspace() &#123;</p>
            <p className="text-[#38BDF8] pl-4">const developer = &quot;MANEET&quot;;</p>
            <p className="text-[#38BDF8] pl-4">const stack = [&quot;Next.js&quot;, &quot;React&quot;, &quot;Node&quot;, &quot;MongoDB&quot;];</p>
            <p className="text-accent pl-4 pt-1">&lt;DeveloperUniverse focus=&quot;Full-Stack &amp; Creative Web&quot;&gt;</p>
            <p className="text-[#4ADE80] pl-8">&lt;LiveCodeEditor status=&quot;Compiled 200 OK&quot; /&gt;</p>
            <p className="text-[#4ADE80] pl-8">&lt;DataPipelines cluster=&quot;MongoDB Atlas&quot; /&gt;</p>
            <p className="text-accent pl-4">&lt;/DeveloperUniverse&gt;</p>
            <p className="text-[#C084FC]">&#125;</p>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2 bg-black/90 border-t border-white/10 flex items-center justify-between text-[10px] text-text-muted">
            <span className="text-accent font-bold">$ npm run dev &bull; Ready on :3000</span>
            <span className="text-[#4ADE80]">MongoDB Connected</span>
          </div>
        </div>

        {/* Monitor Stand */}
        <div className="w-6 h-8 bg-zinc-800 border-x border-white/10" />
        <div className="w-32 h-2.5 bg-zinc-900 border border-white/10 rounded-full" />
      </div>
    </div>
  );
}
