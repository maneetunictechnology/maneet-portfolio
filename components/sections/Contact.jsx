"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEVELOPER_PROFILE } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import { Mail, Github, ArrowUpRight, Copy, Check } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-28 sm:py-36 bg-[#0A0A0A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background dramatic ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="container-custom relative z-10 max-w-5xl mx-auto text-center">
        <div ref={contentRef} className="flex flex-col items-center">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.05] text-xs font-mono tracking-widest text-accent uppercase mb-8 shadow-[0_0_20px_rgba(199,255,74,0.15)]">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Dramatic Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tightest leading-[0.98] text-text-primary uppercase mb-6 select-none">
            HAVE AN IDEA? <br />
            <span className="text-accent underline decoration-accent/40 decoration-4 underline-offset-8 drop-shadow-[0_0_35px_rgba(199,255,74,0.3)]">
              LET&apos;S BUILD IT.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-lg sm:text-xl text-text-secondary font-light leading-relaxed mb-12">
            Have a project, an opportunity or an interesting idea? Let&apos;s connect and create something meaningful together.
          </p>

          {/* Interactive Direct Email Card */}
          <div className="w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#121212]/90 backdrop-blur-md mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-accent/40 transition-all duration-300">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-text-muted tracking-widest">
                  Direct Email
                </p>
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="text-base sm:text-lg font-heading font-bold text-text-primary hover:text-accent transition-colors"
                >
                  {DEVELOPER_PROFILE.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-mono text-text-secondary hover:text-accent hover:border-accent/40 flex items-center justify-center gap-2 transition-all active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-accent" />
                  <span className="text-accent">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton
              as="a"
              href={`mailto:${DEVELOPER_PROFILE.email}`}
              className="px-8 py-4 rounded-full bg-accent text-black font-heading font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_0_30px_rgba(199,255,74,0.35)] hover:bg-[#bbf63c] hover:shadow-[0_0_40px_rgba(199,255,74,0.5)] transition-all"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={18} />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/15 bg-white/[0.03] text-text-primary font-heading font-bold text-sm tracking-wider uppercase flex items-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <Github size={18} />
              <span>GitHub</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
