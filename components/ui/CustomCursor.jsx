"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only activate for devices with fine pointer (mouse/trackpad) and no reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;

    // Use GSAP quickTo for ultra-smooth 60fps tracking
    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power2.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power2.out" });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Delegate hover detection for clickable / special elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, select");
      const specialCard = target.closest("[data-cursor]");

      if (specialCard) {
        const text = specialCard.getAttribute("data-cursor") || "VIEW";
        setCursorText(text);
        setIsPointer(true);
        gsap.to(ring, {
          scale: 2.2,
          backgroundColor: "rgba(199, 255, 74, 0.95)",
          borderColor: "transparent",
          duration: 0.3,
        });
        gsap.to(dot, { opacity: 0, duration: 0.2 });
      } else if (interactiveEl) {
        setCursorText("");
        setIsPointer(true);
        gsap.to(ring, {
          scale: 1.5,
          borderColor: "#C7FF4A",
          backgroundColor: "rgba(199, 255, 74, 0.1)",
          duration: 0.25,
        });
        gsap.to(dot, { scale: 0.5, duration: 0.2 });
      } else {
        setCursorText("");
        setIsPointer(false);
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(199, 255, 74, 0.4)",
          backgroundColor: "transparent",
          duration: 0.25,
        });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Central Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-accent pointer-events-none will-change-transform"
      />

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-accent/40 pointer-events-none will-change-transform flex items-center justify-center transition-colors backdrop-blur-[0.5px]"
      >
        {cursorText && (
          <span
            ref={textRef}
            className="text-[9px] font-bold tracking-widest text-black uppercase select-none leading-none"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
