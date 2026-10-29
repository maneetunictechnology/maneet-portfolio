'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
  Send,
  FileText,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '@/lib/portfolio-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/#home', icon: Home },
    { name: 'About', href: '/#about', icon: User },
    { name: 'Experience', href: '/#journey', icon: Briefcase },
    { name: 'Education', href: '/#education', icon: GraduationCap },
    { name: 'Projects', href: '/#projects', icon: Code2 },
    { name: 'Skills', href: '/#skills', icon: Sparkles },
    { name: 'Contact', href: '/#contact', icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080A0F]/85 backdrop-blur-xl border-b border-white/[0.08] py-2.5 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Left: Avatar & Identity Pill */}
          <Link
            href="/#home"
            className="group flex items-center space-x-3 focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1"
          >
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#1B2130] to-[#252E44] border border-white/15 flex items-center justify-center font-bold text-accent text-sm shadow-md group-hover:scale-105 transition-transform">
              <span>M</span>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondaryAccent ring-2 ring-[#0B0D12]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-primary tracking-tight group-hover:text-accent transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-secondary font-medium -mt-0.5">
                {personalInfo.role}
              </span>
            </div>
          </Link>

          {/* Center: Floating Pill Navigation (Desktop) */}
          <div className="hidden lg:flex items-center bg-[#121622]/80 backdrop-blur-xl border border-white/[0.1] rounded-full px-3 py-1.5 shadow-xl shadow-black/40">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-secondary hover:text-primary hover:bg-white/[0.06] rounded-full transition-all"
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Resume Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/resume"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-primary bg-[#151A24]/90 hover:bg-[#1C2333] border border-white/[0.12] hover:border-accent/50 rounded-full transition-all shadow-md focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/resume"
              className="inline-flex sm:hidden items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-primary bg-[#151A24] border border-white/10 rounded-full"
            >
              <FileText className="w-3 h-3 text-accent" />
              <span>Resume</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-secondary hover:text-primary bg-[#151A24] border border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Accessible Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#0C1018]/95 backdrop-blur-2xl border-b border-white/[0.1] px-4 pt-3 pb-6 space-y-1.5 shadow-2xl mt-2 max-w-lg mx-auto rounded-b-2xl"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2.5 px-4 py-2.5 text-sm font-medium text-secondary hover:text-primary hover:bg-white/[0.06] rounded-xl transition-colors"
              >
                <Icon className="w-4 h-4 text-accent" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-white/[0.08]">
            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-primary bg-accent/15 border border-accent/30 rounded-xl"
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-accent" />
                <span>View &amp; Download Resume</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
