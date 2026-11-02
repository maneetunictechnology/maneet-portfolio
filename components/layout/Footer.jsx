"use client";

import Link from "next/link";
import { DEVELOPER_PROFILE, NAV_LINKS } from "@/lib/constants";
import { ArrowUp, ArrowUpRight, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#060606] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* Large subtle watermark typography */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[14vw] font-heading font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tightest leading-none">
        MANEET
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-heading font-extrabold tracking-tightest text-text-primary uppercase"
            >
              <span>MANEET</span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </Link>
            <p className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              Frontend Developer
            </p>
            <p className="text-text-secondary text-sm font-light max-w-sm leading-relaxed">
              I build modern and interactive web experiences through code, creativity and motion.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-text-secondary hover:text-accent transition-colors font-mono uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={15} />
                  <span>Email</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            &copy; {currentYear} MANEET. Crafted with Next.js, Three.js &amp; GSAP.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-text-secondary hover:text-accent transition-colors tracking-widest uppercase text-xs"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-accent group-hover:-translate-y-0.5 transition-all">
              <ArrowUp size={13} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
