"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Compass, Layers, Sparkles } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(headlineRef.current, {
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Bio text reveal
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      // Philosophy cards stagger
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const philosophies = [
    {
      icon: Code2,
      number: "01",
      title: "Clean Modern Foundations",
      desc: "Writing semantic, accessible, and structured code using modern web standards, React component hierarchy, and modular architectures.",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "Purposeful Motion Design",
      desc: "Employing animations and micro-interactions with deliberate purpose to guide user attention, enhance clarity, and spark delight.",
    },
    {
      icon: Layers,
      number: "03",
      title: "Thoughtful User Experience",
      desc: "Balancing aesthetics with fast load times, responsive fluid scaling across all viewports, and seamless usability.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Decorative background grid and glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono tracking-widest text-text-secondary uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>About Maneet</span>
        </div>

        {/* Editorial Headline */}
        <div ref={headlineRef} className="max-w-5xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tightest leading-[1.04] text-text-primary uppercase">
            NOT JUST CODE. <br />
            <span className="text-outline hover:text-accent transition-colors">
              CREATING
            </span>{" "}
            <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-8">
              EXPERIENCES.
            </span>
          </h2>
        </div>

        {/* Content Paragraphs & Interactive Abstract Badge */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div ref={textRef} className="lg:col-span-8 space-y-6 text-text-secondary text-lg sm:text-xl font-light leading-relaxed">
            <p className="text-text-primary font-normal text-xl sm:text-2xl leading-relaxed">
              I am a growing frontend developer passionate about creating modern and interactive web experiences. I enjoy experimenting with new technologies, creative motion and digital design to transform ideas into meaningful experiences.
            </p>
            <p>
              Rather than viewing development solely through raw markup, I approach the web as an interactive digital canvas. From responsive layout systems and fluid typography to choreographed GSAP timelines and real-time 3D elements, every detail matters in building something memorable.
            </p>
          </div>

          {/* Abstract Rotating Graphic Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
              {/* Outer rotating text SVG */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-[spin_20s_linear_infinite]"
              >
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
                <text className="text-[11px] font-mono tracking-[0.22em] uppercase fill-text-secondary">
                  <textPath href="#circlePath">
                    &bull; FRONTEND DEV &bull; CREATIVE MOTION &bull; MANEET 2026
                  </textPath>
                </text>
              </svg>

              {/* Center icon */}
              <div className="absolute inset-10 rounded-full border border-accent/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center group shadow-[0_0_25px_rgba(199,255,74,0.12)]">
                <Compass className="w-8 h-8 text-accent group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div
          ref={cardsRef}
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {philosophies.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative p-8 rounded-2xl border border-white/[0.08] bg-[#121212]/80 backdrop-blur-md hover:border-accent/40 hover:bg-[#191919] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-text-muted tracking-widest">
                    PHILOSOPHY // {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:border-accent/40 transition-colors">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  {item.desc}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-6 w-8 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
