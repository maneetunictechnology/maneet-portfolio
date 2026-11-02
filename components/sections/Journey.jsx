"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOURNEY_MILESTONES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Journey() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate vertical progress line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.6,
            },
          }
        );
      }

      // Animate each milestone item
      itemsRef.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative py-24 sm:py-32 bg-[#0E0E0E] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          tag="Progression"
          title="ALWAYS LEARNING."
          highlight="ALWAYS BUILDING."
          subtitle="An honest progression of my technical exploration as a frontend developer, advancing from semantic foundations to cinematic digital interactions."
        />

        {/* Timeline Structure */}
        <div className="relative max-w-4xl mx-auto mt-16 sm:mt-24">
          {/* Vertical central track background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10" />

          {/* Animated drawing line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] -translate-x-1/2 bg-accent shadow-[0_0_12px_#C7FF4A] will-change-[height]"
          />

          {/* Milestone Cards */}
          <div className="space-y-12 md:space-y-16">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.title}
                  ref={(el) => (itemsRef.current[idx] = el)}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0E0E0E] border-2 border-accent flex items-center justify-center z-10 shadow-[0_0_16px_rgba(199,255,74,0.4)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-[#141414] hover:border-accent/40 hover:bg-[#181818] transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
                          PHASE 0{idx + 1} &bull; {milestone.year}
                        </span>
                        <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-text-secondary">
                          {milestone.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary mb-3">
                        {milestone.title}
                      </h3>

                      <p className="text-sm text-text-secondary font-light leading-relaxed mb-6">
                        {milestone.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {milestone.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md border border-white/5 bg-white/[0.02] text-[11px] font-mono text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
