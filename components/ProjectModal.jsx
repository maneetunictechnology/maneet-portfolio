'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#11151D] border border-border rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto">
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#11151D]/95 backdrop-blur border-b border-border/80">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
              {project.badge}
            </span>
            <span className="text-xs text-secondary hidden sm:inline">{project.statusText}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-[#1A212E] border border-border/60 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-primary">
              {project.title}
            </h2>
            <p className="text-secondary text-base mt-1 font-medium">{project.tagline}</p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-accent text-[#0B0D12] text-xs font-bold hover:bg-[#A3B2FF] transition-all shadow-sm"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#151A24] text-primary border border-border hover:border-accent text-xs font-semibold transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#151A24] text-secondary hover:text-accent border border-border/80 hover:border-accent/40 text-xs font-semibold transition-all"
              >
                <span>Full Case Study Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Hero Image if available */}
          {project.heroImage && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-[#0B0D12]">
              <Image
                src={project.heroImage}
                alt={`${project.title} Preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 850px"
              />
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-secondary/80 mb-2">
              Verified Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#151A24] border border-border text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center space-x-2 text-accent text-sm font-semibold mb-2">
                <AlertCircle className="w-4 h-4 text-accent" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center space-x-2 text-secondaryAccent text-sm font-semibold mb-2">
                <Sparkles className="w-4 h-4 text-secondaryAccent" />
                <span>Implemented Solution</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h3 className="text-base font-bold text-primary flex items-center space-x-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-secondaryAccent" />
              <span>Key Implemented Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.verifiedFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded-xl bg-[#0F131C] border border-border/70 hover:border-border transition-colors"
                >
                  <div className="text-xs font-semibold text-primary font-mono">{feat.title}</div>
                  <p className="text-xs text-secondary mt-1.5 leading-relaxed">{feat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-primary mb-3">Technical Challenges &amp; Resolutions</h3>
              <div className="space-y-3">
                {project.challenges.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border text-xs leading-relaxed space-y-1">
                    <div className="font-semibold text-accent">{c.challenge}</div>
                    <div className="text-secondary">{c.resolution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Plans */}
          {project.futurePlans && (
            <div className="p-4 rounded-xl bg-[#0B0D12] border border-border/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-secondaryAccent mb-2">
                Planned Future Improvements (Unreleased)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-secondary">
                {project.futurePlans.map((plan, i) => (
                  <li key={i}>{plan}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0F131C] border-t border-border/80 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-mono text-accent hover:underline flex items-center space-x-1"
          >
            <span>Open Dedicated Case Study Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#151A24] text-xs font-semibold text-secondary hover:text-primary border border-border"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
