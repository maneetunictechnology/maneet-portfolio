'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  Github,
  FileText,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { personalInfo } from '@/lib/portfolio-data';
import ParticleWave from './ParticleWave';

export default function Hero() {
  const verifiedTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB'];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#08090E]"
      aria-label="Introduction & Overview"
    >
      {/* Background Particle Nebula Visual */}
      <ParticleWave />

      {/* Subtle radial ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B9CFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#70E1C1]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill: Available Status */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#121622]/90 border border-white/[0.12] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondaryAccent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondaryAccent" />
              </span>
              <span className="text-xs font-medium text-primary tracking-wide">
                Available for freelance projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B9CFF] via-[#A78BFA] to-[#C084FC]">
                {personalInfo.name}
              </span>
              <br />
              <span className="text-[#F5F7FB]">{personalInfo.role}</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              {personalInfo.hero.subheadline}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary White Pill Button */}
              <Link
                href="/#projects"
                className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-[#0B0D12] text-sm font-bold hover:bg-[#F2F4F8] transition-all shadow-xl shadow-white/10 hover:shadow-white/20 hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Secondary Dark Glass Pill Button */}
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#121622]/90 text-primary border border-white/[0.12] hover:border-white/25 hover:bg-[#181E2E] text-sm font-semibold transition-all backdrop-blur-md"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
              </Link>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#121622]/90 border border-white/[0.1] hover:border-accent/50 flex items-center justify-center text-secondary hover:text-white transition-all shadow-sm group"
                aria-label="Maneet's GitHub profile"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-[#121622]/90 border border-white/[0.1] hover:border-accent/50 flex items-center justify-center text-secondary hover:text-white transition-all shadow-sm group"
                aria-label="Email Maneet"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <Link
                href="/resume"
                className="w-10 h-10 rounded-xl bg-[#121622]/90 border border-white/[0.1] hover:border-accent/50 flex items-center justify-center text-secondary hover:text-white transition-all shadow-sm group"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Core Tech Badges */}
            <div className="pt-4 border-t border-white/[0.08] max-w-xl">
              <div className="flex flex-wrap gap-2">
                {verifiedTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#121622]/70 border border-white/[0.08] text-secondary hover:text-primary hover:border-accent/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Dark Code Window (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Outer Card with Corner Tick Accents (exact theme look) */}
              <div className="relative rounded-2xl bg-[#0D1018]/95 border border-white/[0.12] p-6 sm:p-7 shadow-2xl backdrop-blur-2xl">
                {/* Top-Right Accent Corner Tick */}
                <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-white/60 rounded-tr" />
                {/* Bottom-Left Accent Corner Tick */}
                <span className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-white/60 rounded-bl" />

                {/* Code Body */}
                <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-2 text-[#E2E8F0]">
                  {/* Declaration */}
                  <div>
                    <span className="text-[#F472B6] font-semibold">const</span>{' '}
                    <span className="text-[#A78BFA] font-bold">developer</span> = &#123;
                  </div>

                  {/* focus */}
                  <div className="pl-4 space-y-0.5">
                    <div>
                      <span className="text-[#E879F9]">focus</span>: [
                    </div>
                    <div className="pl-4 space-y-0.5 text-[#70E1C1]">
                      <div>&apos;Full-stack web apps&apos;,</div>
                      <div>&apos;E-commerce platforms&apos;,</div>
                      <div>&apos;Responsive UI/UX&apos;,</div>
                      <div>&apos;Scalable APIs &amp; database&apos;</div>
                    </div>
                    <div>],</div>
                  </div>

                  {/* stack */}
                  <div className="pl-4 space-y-0.5 pt-1">
                    <div>
                      <span className="text-[#E879F9]">stack</span>: [
                    </div>
                    <div className="pl-4 space-y-0.5 text-[#8B9CFF]">
                      <div>&apos;Next.js / React&apos;,</div>
                      <div>&apos;JavaScript (ES6+)&apos;,</div>
                      <div>&apos;Node.js &amp; REST APIs&apos;,</div>
                      <div>&apos;MongoDB&apos;</div>
                    </div>
                    <div>],</div>
                  </div>

                  {/* principle */}
                  <div className="pl-4 space-y-0.5 pt-1">
                    <div>
                      <span className="text-[#E879F9]">principle</span>:{' '}
                      <span className="text-[#38BDF8]">
                        &apos;Build reliable digital experiences that turn practical ideas into functional code.&apos;
                      </span>
                    </div>
                  </div>

                  {/* Closing */}
                  <div>&#125;</div>
                </div>

                {/* Sub-card: Live Project Badge */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-secondaryAccent animate-pulse" />
                    <span className="text-xs font-mono text-secondary">
                      Featured: <strong className="text-white">MikuMantra</strong>
                    </span>
                  </div>
                  <a
                    href="https://miku-mantra.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-accent hover:underline flex items-center space-x-1"
                  >
                    <span>Inspect Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
