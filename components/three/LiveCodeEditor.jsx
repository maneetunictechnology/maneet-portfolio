"use client";

import { useState, useEffect } from "react";
import { Terminal, Check, Globe, Database, Sparkles, Cpu } from "lucide-react";

const CODE_SNIPPETS = [
  {
    filename: "developer.config.ts",
    language: "typescript",
    lines: [
      { text: 'const developer = {', color: 'text-[#C084FC]' },
      { text: '  name: "MANEET",', color: 'text-text-primary' },
      { text: '  role: "Frontend Developer",', color: 'text-text-primary' },
      { text: '  focus: "Creative Web Experiences",', color: 'text-accent' },
      { text: '  stack: ["React", "Next.js", "Tailwind", "GSAP"],', color: 'text-[#38BDF8]' },
      { text: '  status: "Available for Hire",', color: 'text-[#4ADE80]' },
      { text: '};', color: 'text-[#C084FC]' },
      { text: '', color: '' },
      { text: 'export function buildExperience() {', color: 'text-[#F59E0B]' },
      { text: '  return "Something Extraordinary";', color: 'text-[#4ADE80]' },
      { text: '}', color: 'text-[#F59E0B]' },
    ],
    terminal: {
      cmd: "npm run build --cinematic",
      output: "✓ Compiled in 84ms • Ready on http://localhost:3000",
      status: "BUILD SUCCESS",
    },
  },
  {
    filename: "HeroInteractive.jsx",
    language: "react",
    lines: [
      { text: 'import { Canvas } from "@react-three/fiber";', color: 'text-[#C084FC]' },
      { text: 'import { OrbitControls, Float } from "@drei";', color: 'text-[#C084FC]' },
      { text: '', color: '' },
      { text: 'export default function DeveloperWorld() {', color: 'text-[#F59E0B]' },
      { text: '  const [active, setActive] = useState(true);', color: 'text-[#38BDF8]' },
      { text: '  return (', color: 'text-text-primary' },
      { text: '    <Canvas dpr={[1, 1.5]} camera={{ fov: 40 }}>', color: 'text-accent' },
      { text: '      <HolographicWorkspace mouseParallax />', color: 'text-accent' },
      { text: '      <DataPipelines status="connected" />', color: 'text-[#4ADE80]' },
      { text: '    </Canvas>', color: 'text-accent' },
      { text: '  );', color: 'text-text-primary' },
      { text: '}', color: 'text-[#F59E0B]' },
    ],
    terminal: {
      cmd: "npx telemetry ping --latency",
      output: "● WebSocket connected • FPS: 60 • Latency: 8ms",
      status: "PIPELINE ACTIVE",
    },
  },
  {
    filename: "api/pipeline/route.js",
    language: "fullstack",
    lines: [
      { text: 'import { NextResponse } from "next/server";', color: 'text-[#C084FC]' },
      { text: 'import { connectDatabase } from "@/lib/db";', color: 'text-[#C084FC]' },
      { text: '', color: '' },
      { text: 'export async function GET(request) {', color: 'text-[#F59E0B]' },
      { text: '  const db = await connectDatabase();', color: 'text-[#38BDF8]' },
      { text: '  const projects = await db.collection("works");', color: 'text-[#38BDF8]' },
      { text: '  return NextResponse.json({', color: 'text-text-primary' },
      { text: '    status: 200,', color: 'text-accent' },
      { text: '    developer: "Maneet",', color: 'text-[#4ADE80]' },
      { text: '    delivered: true', color: 'text-[#38BDF8]' },
      { text: '  });', color: 'text-text-primary' },
      { text: '}', color: 'text-[#F59E0B]' },
    ],
    terminal: {
      cmd: "curl -X GET /api/pipeline",
      output: "HTTP/1.1 200 OK • Payload: verified • Cluster: Atlas",
      status: "DB CONNECTED",
    },
  },
];

export default function LiveCodeEditor() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [typedLines, setTypedLines] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentSnippet = CODE_SNIPPETS[snippetIndex];

  // Animated line-by-line typing cycle
  useEffect(() => {
    let timer;
    if (typedLines < currentSnippet.lines.length) {
      timer = setTimeout(() => {
        setTypedLines((prev) => prev + 1);
      }, 140);
    } else {
      setIsTyping(false);
      // Wait at complete code before switching snippet
      timer = setTimeout(() => {
        setTypedLines(0);
        setIsTyping(true);
        setSnippetIndex((prev) => (prev + 1) % CODE_SNIPPETS.length);
      }, 4200);
    }

    return () => clearTimeout(timer);
  }, [typedLines, currentSnippet]);

  return (
    <div className="w-[380px] sm:w-[460px] md:w-[490px] rounded-2xl bg-[#0D0D14]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(198,255,63,0.15)] overflow-hidden select-none font-mono text-[11px] sm:text-xs">
      {/* Editor Window Header */}
      <div className="px-4 py-2.5 bg-black/60 border-b border-white/10 flex items-center justify-between">
        {/* macOS / VS Code window control dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        {/* Active Tab */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-text-primary text-[10px] sm:text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>{currentSnippet.filename}</span>
        </div>

        {/* Live HUD Badge */}
        <div className="flex items-center gap-1 text-[9px] text-accent tracking-widest uppercase">
          <Sparkles size={11} />
          <span>LIVE</span>
        </div>
      </div>

      {/* Code Editor Body with Line Numbers */}
      <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed min-h-[220px] bg-[#0A0A10]/80">
        {currentSnippet.lines.slice(0, typedLines).map((line, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-text-muted/40 select-none w-5 text-right font-mono text-[10px]">
              {(idx + 1).toString().padStart(2, "0")}
            </span>
            <span className={`${line.color} font-mono whitespace-pre flex-1`}>
              {line.text}
              {/* Blinking Cursor on latest typing line */}
              {idx === typedLines - 1 && isTyping && (
                <span className="inline-block w-1.5 h-3.5 bg-accent ml-0.5 animate-pulse align-middle" />
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Integrated Terminal HUD */}
      <div className="px-4 py-2.5 bg-black/80 border-t border-white/10">
        <div className="flex items-center justify-between text-[10px] text-text-secondary mb-1">
          <div className="flex items-center gap-1.5 text-accent">
            <Terminal size={12} />
            <span className="font-bold uppercase tracking-wider">TERMINAL</span>
            <span className="text-text-muted">&bull; bash</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[9px] bg-accent/15 text-accent font-semibold">
            {currentSnippet.terminal.status}
          </span>
        </div>

        <div className="text-[10px] text-text-secondary font-mono flex items-center gap-2">
          <span className="text-accent font-bold">$</span>
          <span className="text-text-primary">{currentSnippet.terminal.cmd}</span>
        </div>
        <div className="text-[10px] text-text-muted font-mono mt-0.5 truncate">
          {currentSnippet.terminal.output}
        </div>
      </div>
    </div>
  );
}
