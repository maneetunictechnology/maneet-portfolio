"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import FallbackSculpture from "@/components/three/FallbackSculpture";

// Dynamic import with SSR false for Three.js canvas
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <FallbackSculpture />,
});

export default function Hero({ ready = true }) {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const sceneRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!ready) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Just ensure visible
      gsap.set(
        [
          badgeRef.current,
          line1Ref.current,
          line2Ref.current,
          line3Ref.current,
          sceneRef.current,
          descRef.current,
          ctaRef.current,
          scrollRef.current,
        ],
        { opacity: 1, y: 0 }
      );
      return;
    }

    const tl = gsap.timeline({ delay: 0.1 });

    // Initial state
    gsap.set(badgeRef.current, { opacity: 0, y: 20 });
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
      opacity: 0,
      y: 60,
      skewY: 3,
    });
    gsap.set(sceneRef.current, { opacity: 0, scale: 0.85 });
    gsap.set(descRef.current, { opacity: 0, y: 25 });
    gsap.set(ctaRef.current, { opacity: 0, y: 25 });
    gsap.set(scrollRef.current, { opacity: 0, y: -10 });

    tl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    })
      .to(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power4.out",
        },
        "-=0.4"
      )
      .to(
        sceneRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        scrollRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, [ready]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 sm:pb-14 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle background coordinate grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content Layout */}
      <div className="container-custom relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* Left Column: Headlines & Story */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Professional Role Label */}
          <div ref={badgeRef} className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-text-secondary uppercase">
                Frontend Developer
              </span>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-text-muted">
              &bull; CREATIVE &amp; INTERACTIVE
            </span>
          </div>

          {/* Oversized Headline */}
          <h1 className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl xl:text-[6.5rem] tracking-tightest leading-[0.92] uppercase select-none">
            <div className="overflow-hidden">
              <span ref={line1Ref} className="inline-block text-text-primary">
                I BUILD
              </span>
            </div>
            <div className="overflow-hidden">
              <span ref={line2Ref} className="inline-block text-outline">
                DIGITAL
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                ref={line3Ref}
                className="inline-block text-accent underline decoration-accent/40 decoration-4 underline-offset-8 drop-shadow-[0_0_35px_rgba(199,255,74,0.3)]"
              >
                EXPERIENCES.
              </span>
            </div>
          </h1>

          {/* Supporting Text */}
          <p
            ref={descRef}
            className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg md:text-xl text-text-secondary font-light leading-relaxed"
          >
            I build modern and interactive web experiences through code, creativity and motion.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton
              as="a"
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="group relative px-7 py-3.5 rounded-full bg-accent text-black font-heading font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_0_30px_rgba(199,255,74,0.35)] hover:bg-[#bbf63c] hover:shadow-[0_0_40px_rgba(199,255,74,0.5)] transition-all"
            >
              <span>Explore My Work</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] text-text-primary font-heading font-bold text-sm tracking-wider uppercase hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Let&apos;s Connect
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: 3D Interactive Liquid Chrome Installation */}
        <div
          ref={sceneRef}
          className="lg:col-span-5 h-[340px] sm:h-[450px] md:h-[520px] lg:h-[600px] w-full relative flex items-center justify-center"
        >
          {/* 3D Scene */}
          <HeroScene />
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Coordinates */}
      <div
        ref={scrollRef}
        className="container-custom relative z-10 pt-8 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-text-muted select-none"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="tracking-widest uppercase">BASED IN INDIA &bull; OPEN WORLDWIDE</span>
        </div>

        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "about")}
          className="group flex items-center gap-2 text-text-secondary hover:text-accent transition-colors tracking-widest uppercase text-xs"
        >
          <span>SCROLL DOWN</span>
          <div className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center group-hover:border-accent group-hover:translate-y-1 transition-all">
            <ArrowDown size={12} />
          </div>
        </a>
      </div>
    </section>
  );
}
