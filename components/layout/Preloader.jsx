"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const container = containerRef.current;
    const bar = barRef.current;
    const text = textRef.current;

    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Smooth slide up reveal
        gsap.to(container, {
          yPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
          onComplete: () => {
            if (container) container.style.display = "none";
            if (onComplete) onComplete();
          },
        });
      },
    });

    // Animate counter and bar smoothly
    tl.to(counterObj, {
      val: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        const current = Math.floor(counterObj.val);
        setPercent(current);
        if (bar) bar.style.width = `${current}%`;
      },
    })
      .to(
        text,
        {
          letterSpacing: "0.25em",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      )
      .to(
        [text, numberRef.current, bar],
        {
          opacity: 0,
          y: -20,
          duration: 0.35,
          ease: "power3.in",
        },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <aside
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#0A0A0A] flex flex-col justify-between p-8 md:p-14 select-none pointer-events-auto"
      aria-label="Loading portfolio"
      role="status"
    >
      {/* Top branding */}
      <div className="flex justify-between items-center text-xs font-mono text-text-secondary tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>PORTFOLIO 2026</span>
        </div>
        <div>MANEET / DEV</div>
      </div>

      {/* Center typography */}
      <div className="text-center my-auto flex flex-col items-center">
        <h1
          ref={textRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-widest text-text-primary uppercase opacity-90 transition-all"
        >
          MANEET
        </h1>
        <p className="mt-4 text-xs sm:text-sm font-mono tracking-widest text-text-secondary uppercase">
          Frontend Developer &bull; Creative Technologist
        </p>
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div className="w-full max-w-xl mx-auto flex flex-col gap-3">
        <div className="flex justify-between items-end text-sm font-mono text-text-secondary">
          <span className="tracking-widest uppercase text-xs">INITIALIZING EXPERIENCE</span>
          <span ref={numberRef} className="text-xl md:text-2xl font-bold text-accent font-mono">
            {percent.toString().padStart(2, "0")}%
          </span>
        </div>
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-accent transition-[width] duration-75 ease-linear shadow-[0_0_12px_#C7FF4A]"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </aside>
  );
}
