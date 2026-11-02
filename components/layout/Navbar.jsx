"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, DEVELOPER_PROFILE } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ["about", "skills", "projects", "journey", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-xl md:text-2xl font-heading font-extrabold tracking-tightest text-text-primary uppercase"
            aria-label="MANEET Home"
          >
            <span>MANEET</span>
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-black bg-accent font-bold"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Magnetic CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              as="a"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="relative px-5 py-2.5 rounded-full bg-text-primary text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-accent hover:shadow-[0_0_20px_rgba(199,255,74,0.4)] transition-all duration-300"
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-text-primary hover:border-accent/40 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Sliding Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="pt-20">
          <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-6">
            Navigation Menu
          </p>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-3xl font-heading font-bold tracking-tight uppercase flex items-center justify-between transition-colors ${
                    isActive ? "text-accent" : "text-text-primary hover:text-accent"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-text-secondary">0{idx + 1}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile menu bottom details */}
        <div className="border-t border-white/10 pt-6 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
            <span>DIRECT INQUIRIES</span>
            <span className="text-accent">AVAILABLE NOW</span>
          </div>
          <a
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            className="block text-lg font-heading text-text-primary hover:text-accent font-medium truncate"
          >
            {DEVELOPER_PROFILE.email}
          </a>
          <div className="flex gap-4 pt-2">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-text-secondary hover:text-accent"
            >
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
