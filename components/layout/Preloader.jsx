"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import {
  Terminal,
  Cpu,
  Sparkles,
  Activity,
  ShieldCheck,
  Zap,
  Code2,
  Compass,
} from "lucide-react";

const CODE_LINES = [
  { prefix: "01", text: "import { Maneet } from '@universe/developer';", color: "text-purple-400" },
  { prefix: "02", text: "const dev = new Maneet({ status: 'READY_TO_BUILD' });", color: "text-blue-400" },
  { prefix: "03", text: "await dev.mountEngine(['React', 'Next.js', 'Three.js']);", color: "text-accent" },
  { prefix: "04", text: "dev.initializeTelemetry({ fps: 60, mode: 'cinematic' });", color: "text-emerald-400" },
  { prefix: "05", text: "export default dev.launchExperience(); // 200 OK", color: "text-yellow-400" },
];

const ORBITAL_STACK = [
  "React.js",
  "Next.js 14",
  "Three.js 3D",
  "Tailwind CSS",
  "GSAP Motion",
  "MongoDB",
];

const GLYPHS = "01#X$><*+&%=@![]";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const hudRef = useRef(null);
  const numberRef = useRef(null);
  const columnsRef = useRef([]);
  const lettersRef = useRef([]);
  const timelineRef = useRef(null);

  const [percent, setPercent] = useState(0);
  const [activeCodeLine, setActiveCodeLine] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [accelerated, setAccelerated] = useState(false);
  const [scrambledName, setScrambledName] = useState(["M", "A", "N", "E", "E", "T"]);

  const targetName = useMemo(() => ["M", "A", "N", "E", "E", "T"], []);

  // 1. Interactive HTML5 Cybernetic Constellation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.4 + 0.2,
    }));

    let mouse = { x: width / 2, y: height / 2, isHovered: false };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isHovered = true;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Render connecting lines
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(199, 255, 74, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Render & update particles
      particles.forEach((p) => {
        // Mouse avoidance force
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.hypot(mdx, mdy);
        if (mDist < 120 && mouse.isHovered) {
          const force = (120 - mDist) / 120;
          p.x += (mdx / mDist) * force * 3;
          p.y += (mdy / mDist) * force * 3;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Glow particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199, 255, 74, ${p.baseAlpha + Math.sin(tick * 0.05) * 0.15})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#C7FF4A";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 2. Parallax mouse tracking on the HUD
  const handleContainerMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10 to +10 deg
    const y = (clientY / innerHeight - 0.5) * -20; // +10 to -10 deg
    setMousePos({ x, y });
  }, []);

  // 3. Cyberpunk Name Decryption / Scramble effect based on percentage
  useEffect(() => {
    if (percent >= 90) {
      setScrambledName(targetName);
      return;
    }

    const lockedCount = Math.floor((percent / 90) * targetName.length);
    const updated = targetName.map((char, index) => {
      if (index < lockedCount) return char;
      const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      return randomGlyph;
    });
    setScrambledName(updated);
  }, [percent, targetName]);

  // 4. Master Timeline Animation & Counter
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const container = containerRef.current;
    const columns = columnsRef.current;
    const letters = lettersRef.current;
    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Dramatic Multi-Column Venetian Shutter Exit with Alternating Directions
        gsap.to(columns, {
          yPercent: (i) => (i % 2 === 0 ? -100 : 100),
          duration: 0.95,
          stagger: {
            amount: 0.28,
            from: "center",
          },
          ease: "power4.inOut",
          onComplete: () => {
            if (container) container.style.display = "none";
            if (onComplete) onComplete();
          },
        });
      },
    });

    timelineRef.current = tl;

    // Initial setups
    gsap.set(letters, { y: 60, opacity: 0, rotateX: 60, scale: 0.9 });

    // Sequence
    tl.to(letters, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.07,
      ease: "back.out(1.6)",
    })
      .to(
        counterObj,
        {
          val: 100,
          duration: 2.1,
          ease: "power2.inOut",
          onUpdate: () => {
            const current = Math.floor(counterObj.val);
            setPercent(current);

            // Sync live code stream
            if (current < 20) setActiveCodeLine(0);
            else if (current < 40) setActiveCodeLine(1);
            else if (current < 65) setActiveCodeLine(2);
            else if (current < 85) setActiveCodeLine(3);
            else setActiveCodeLine(4);
          },
        },
        "-=0.3"
      )
      .to(
        [".preloader-fade", letters],
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.35,
          ease: "power2.in",
        },
        "-=0.1"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  // Click anywhere to accelerate loading
  const handleAccelerate = useCallback(() => {
    if (accelerated || !timelineRef.current) return;
    setAccelerated(true);
    timelineRef.current.timeScale(2.8); // fast-forward animation speed
  }, [accelerated]);

  return (
    <aside
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      onClick={handleAccelerate}
      className="fixed inset-0 z-[99999] select-none pointer-events-auto overflow-hidden bg-[#070709] cursor-pointer"
      aria-label="Loading portfolio"
      role="status"
    >
      {/* 5 Vertical Cybernetic Shutter Columns for Epic Alternating Exit */}
      <div className="absolute inset-0 flex z-0 pointer-events-none">
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={col}
            ref={(el) => (columnsRef.current[col] = el)}
            className="flex-1 h-full bg-[#08080C] border-r border-white/[0.05] last:border-r-0 relative flex flex-col justify-between p-4 will-change-transform"
          >
            <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest">
              SHUTTER // 0{col + 1}
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest text-right">
              0x0{col + 1}F
            </span>
          </div>
        ))}
      </div>

      {/* Cybernetic Particle Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-40"
      />

      {/* 3D Gyroscopic Tech Orbitals in Center Background */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-[480px] h-[480px] md:w-[680px] md:h-[680px] flex items-center justify-center opacity-25">
          {/* Outer Rotating Gyro Ring */}
          <div className="absolute inset-0 rounded-full border border-white/15 animate-[spinSlow_25s_linear_infinite]" />
          
          {/* Middle Dashed Ring */}
          <div className="absolute inset-16 rounded-full border border-dashed border-accent/40 animate-[spinReverse_18s_linear_infinite]" />
          
          {/* Inner Glowing Ring */}
          <div className="absolute inset-32 rounded-full border border-white/10" />

          {/* Sweeping Radar Scanner Line */}
          <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-accent to-transparent animate-[spinSlow_6s_linear_infinite]" />

          {/* Tech Stack Orbital Badges */}
          {ORBITAL_STACK.map((tech, idx) => {
            const angle = (idx / ORBITAL_STACK.length) * 360;
            return (
              <div
                key={tech}
                className="absolute w-full h-full flex items-center justify-center animate-[spinSlow_35s_linear_infinite]"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div
                  className="px-2.5 py-1 rounded-md bg-black/80 border border-white/15 text-[10px] font-mono text-text-secondary tracking-wider transform -translate-y-48 md:-translate-y-64 shadow-[0_0_12px_rgba(199,255,74,0.15)]"
                  style={{ transform: `rotate(-${angle}deg)` }}
                >
                  {tech}
                </div>
              </div>
            );
          })}

          {/* Center Pulsating Core */}
          <div className="w-48 h-48 rounded-full bg-accent/15 blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Interactive 3D Parallax HUD Content Overlay */}
      <div
        ref={hudRef}
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
          transition: "transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)",
        }}
        className="relative z-20 h-full w-full flex flex-col justify-between p-6 sm:p-10 md:p-14 pointer-events-none"
      >
        {/* TOP BAR: Telemetry Diagnostics HUD */}
        <div className="preloader-fade flex justify-between items-center text-[10px] sm:text-xs font-mono text-text-secondary tracking-widest uppercase">
          {/* Left System Badge */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-white font-bold tracking-wider">
              MANEET // SYSTEM 2026
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-white/[0.06] text-accent text-[9px]">
              V2.4 STABLE
            </span>
          </div>

          {/* Center Hardware Telemetry */}
          <div className="hidden sm:flex items-center gap-4 text-text-muted">
            <span className="flex items-center gap-1.5 text-accent font-semibold">
              <Activity size={12} className="animate-pulse" />
              <span>FPS: 60.0</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Cpu size={12} />
              <span>GPU: ACCELERATED</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5 text-[#4ADE80]">
              <ShieldCheck size={12} />
              <span>ALL CIRCUITS OK</span>
            </span>
          </div>

          {/* Right Accelerate Hint Pill */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[9px] sm:text-[10px] text-accent animate-pulse font-mono tracking-wider">
              <Zap size={11} className={accelerated ? "text-yellow-400 fill-yellow-400" : ""} />
              <span>{accelerated ? "OVERDRIVE ACTIVE" : "CLICK TO BOOST"}</span>
            </div>
          </div>
        </div>

        {/* CENTER: Decrypted Cyberpunk Name + Frequency EQ Waves */}
        <div className="my-auto flex flex-col items-center justify-center text-center">
          {/* Micro Status Chip */}
          <div className="preloader-fade inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest text-accent uppercase shadow-[0_0_25px_rgba(199,255,74,0.2)]">
            <Sparkles size={11} className="text-accent animate-spin" />
            <span>SOFTWARE DEVELOPER WORKSPACE</span>
          </div>

          {/* Hacker Decryption Kinetic Title */}
          <h1 className="flex items-center justify-center gap-1.5 sm:gap-3 text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-heading font-extrabold tracking-tightest leading-none uppercase select-none perspective-[1000px]">
            {scrambledName.map((char, index) => {
              const isLocked = char === targetName[index];
              return (
                <span
                  key={index}
                  ref={(el) => (lettersRef.current[index] = el)}
                  className={`inline-block transition-all duration-200 transform hover:scale-110 ${
                    percent > 70
                      ? "text-accent drop-shadow-[0_0_40px_rgba(199,255,74,0.65)]"
                      : isLocked
                      ? "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      : "text-accent/60 font-mono"
                  }`}
                >
                  {char}
                </span>
              );
            })}
          </h1>

          {/* 24-Band Audio / Frequency Spectrum Equalizer */}
          <div className="preloader-fade flex items-center justify-center gap-1 sm:gap-1.5 mt-6 h-8">
            {[
              6, 12, 18, 28, 14, 22, 32, 16, 26, 36, 20, 30, 24, 34, 18, 28, 14, 24, 10,
              20, 8, 16, 6, 12,
            ].map((maxH, i) => (
              <div
                key={i}
                className="w-1 rounded-full transition-all duration-150"
                style={{
                  height: `${Math.max(4, (maxH * (percent + 20)) / 120)}px`,
                  backgroundColor: i % 2 === 0 ? "#C7FF4A" : "rgba(255, 255, 255, 0.7)",
                  boxShadow: i % 2 === 0 ? "0 0 10px #C7FF4A" : "none",
                }}
              />
            ))}
          </div>

          <p className="preloader-fade mt-5 text-xs sm:text-sm font-mono tracking-widest text-text-secondary uppercase">
            Frontend &bull; Full-Stack &bull; Creative Technologist
          </p>
        </div>

        {/* BOTTOM SECTION: Live Code Stream Console + Segmented HUD Gauge */}
        <div className="preloader-fade w-full max-w-3xl mx-auto flex flex-col gap-4">
          {/* Mini Interactive Terminal Code Stream */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <Code2 size={13} className="text-accent" />
                <span className="text-white/80 font-bold uppercase tracking-wider">
                  terminal // boot.loader.ts
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
            </div>

            {/* Code Line Display */}
            <div className="font-mono text-[11px] sm:text-xs flex items-center justify-between gap-2 overflow-hidden py-1">
              <div className="flex items-center gap-2 truncate">
                <span className="text-accent/50 select-none">
                  {CODE_LINES[activeCodeLine].prefix}
                </span>
                <span className={`truncate font-medium ${CODE_LINES[activeCodeLine].color}`}>
                  {CODE_LINES[activeCodeLine].text}
                </span>
                <span className="w-2 h-4 bg-accent animate-pulse inline-block shrink-0" />
              </div>

              {/* Glowing High-Definition Percentage */}
              <span
                ref={numberRef}
                className="text-2xl sm:text-3xl font-bold text-accent font-mono shrink-0 ml-4 drop-shadow-[0_0_20px_rgba(199,255,74,0.7)]"
              >
                {percent.toString().padStart(2, "0")}%
              </span>
            </div>
          </div>

          {/* 32-Segment Futuristic Gauge */}
          <div className="w-full flex items-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
            {Array.from({ length: 32 }).map((_, segIdx) => {
              const segThreshold = (segIdx / 32) * 100;
              const isLit = percent >= segThreshold;
              const isLeading = isLit && percent < ((segIdx + 1) / 32) * 100;

              return (
                <div
                  key={segIdx}
                  className={`h-2 sm:h-2.5 flex-1 rounded-[2px] transition-all duration-100 ${
                    isLeading
                      ? "bg-white shadow-[0_0_15px_#FFFFFF] scale-y-150"
                      : isLit
                      ? "bg-accent shadow-[0_0_8px_#C7FF4A]"
                      : "bg-white/[0.05]"
                  }`}
                />
              );
            })}
          </div>

          {/* Sub Telemetry Status Footer */}
          <div className="flex items-center justify-between text-[10px] font-mono text-text-muted">
            <span className="uppercase tracking-wider flex items-center gap-1.5">
              <Compass size={11} className="text-accent animate-spin" />
              <span>INITIALIZING WORKSPACE ASSETS</span>
            </span>
            <span className="uppercase tracking-wider text-accent font-bold">
              {percent === 100 ? "DEPLOYED • ENTERING EXPERIENCE" : "SYNCHRONIZING..."}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
