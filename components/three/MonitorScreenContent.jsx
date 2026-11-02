"use client";

import { useState, useEffect } from "react";
import { Sparkles, Terminal, CheckCircle2 } from "lucide-react";

const CODE_EXAMPLES = [
  {
    tab: "page.jsx",
    type: "React / Next.js",
    lines: [
      { text: 'import { useState, useEffect } from "react";', color: 'text-[#C084FC]' },
      { text: 'import { MotionEngine } from "@/lib/motion";', color: 'text-[#C084FC]' },
      { text: '', color: '' },
      { text: 'export default function DeveloperPortfolio() {', color: 'text-[#F59E0B]' },
      { text: '  const stack = ["Next.js", "React", "Node", "MongoDB"];', color: 'text-[#38BDF8]' },
      { text: '  const [status, setStatus] = useState("Active");', color: 'text-[#38BDF8]' },
      { text: '', color: '' },
      { text: '  return (', color: 'text-text-primary' },
      { text: '    <Workspace developer="MANEET" role="Full-Stack">', color: 'text-accent' },
      { text: '      <CinematicCanvas interactive={true} fps={60} />', color: 'text-accent' },
      { text: '      <DataPipelines source="MongoDB Atlas" />', color: 'text-[#4ADE80]' },
      { text: '    </Workspace>', color: 'text-accent' },
      { text: '  );', color: 'text-text-primary' },
      { text: '}', color: 'text-[#F59E0B]' },
    ],
    status: "Compiled Client & Server",
  },
  {
    tab: "route.js",
    type: "Backend / API",
    lines: [
      { text: 'import { NextResponse } from "next/server";', color: 'text-[#C084FC]' },
      { text: 'import { connectMongoDB } from "@/lib/db";', color: 'text-[#C084FC]' },
      { text: '', color: '' },
      { text: 'export async function GET(request) {', color: 'text-[#F59E0B]' },
      { text: '  const { db } = await connectMongoDB();', color: 'text-[#38BDF8]' },
      { text: '  const projects = await db.collection("works").find({});', color: 'text-[#38BDF8]' },
      { text: '', color: '' },
      { text: '  return NextResponse.json({', color: 'text-text-primary' },
      { text: '    success: true,', color: 'text-accent' },
      { text: '    developer: "Maneet",', color: 'text-[#4ADE80]' },
      { text: '    skills: ["HTML", "CSS", "Tailwind", "JS", "React", "Node"]', color: 'text-[#38BDF8]' },
      { text: '  });', color: 'text-text-primary' },
      { text: '}', color: 'text-[#F59E0B]' },
    ],
    status: "REST API Endpoint 200 OK",
  },
];

export default function MonitorScreenContent() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const snippet = CODE_EXAMPLES[snippetIdx];

  useEffect(() => {
    let timer;
    if (typedCount < snippet.lines.length) {
      timer = setTimeout(() => {
        setTypedCount((prev) => prev + 1);
      }, 125);
    } else {
      setIsTyping(false);
      timer = setTimeout(() => {
        setTypedCount(0);
        setIsTyping(true);
        setSnippetIdx((prev) => (prev + 1) % CODE_EXAMPLES.length);
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [typedCount, snippet]);

  return (
    <div className="w-[480px] sm:w-[520px] rounded-xl bg-[#0B0B12]/98 border border-white/10 overflow-hidden font-mono text-[11px] leading-relaxed shadow-[0_0_40px_rgba(0,0,0,0.8)] select-none">
      {/* Code Editor Header */}
      <div className="px-3.5 py-2 bg-[#06060A] border-b border-white/10 flex items-center justify-between">
        {/* macOS style dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        {/* Tab List */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-white font-medium text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>{snippet.tab}</span>
          </div>
          <span className="px-2 py-0.5 text-text-muted text-[10px]">
            {snippet.type}
          </span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-1 text-[9px] text-accent tracking-widest uppercase">
          <Sparkles size={10} />
          <span>60 FPS</span>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 bg-[#090910] min-h-[225px]">
        {snippet.lines.slice(0, typedCount).map((line, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-text-muted/40 select-none w-5 text-right text-[10px]">
              {(idx + 1).toString().padStart(2, "0")}
            </span>
            <span className={`${line.color} whitespace-pre flex-1`}>
              {line.text}
              {idx === typedCount - 1 && isTyping && (
                <span className="inline-block w-1.5 h-3.5 bg-accent ml-0.5 animate-pulse align-middle" />
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Integrated Terminal Footer */}
      <div className="px-3.5 py-2 bg-black/90 border-t border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-2 text-text-secondary">
          <Terminal size={12} className="text-accent" />
          <span className="text-accent font-bold">$</span>
          <span className="text-white">npm run dev:interactive</span>
        </div>
        <div className="flex items-center gap-1 text-[#4ADE80] text-[9px]">
          <CheckCircle2 size={10} />
          <span>{snippet.status}</span>
        </div>
      </div>
    </div>
  );
}
