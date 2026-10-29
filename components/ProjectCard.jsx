'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight, Layers, CheckCircle2, Info } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  const isPrimary = project.isPrimary;

  return (
    <div
      className={`group relative bg-card rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isPrimary
          ? 'border-accent/50 shadow-xl shadow-accent/5 hover:border-accent/80'
          : 'border-border hover:border-accent/40 shadow-card-subtle'
      }`}
    >
      {/* Project Thumbnail */}
      {project.heroImage && (
        <div
          onClick={() => onOpenModal(project)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenModal(project);
            }
          }}
          aria-label={`Open case study for ${project.title}`}
          className={`relative w-full overflow-hidden border-b border-border bg-[#0A0D14] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            isPrimary
              ? 'aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8]'
              : 'aspect-[16/9]'
          }`}
        >
          <Image
            src={project.heroImage}
            alt={`${project.title} Interface Thumbnail`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 800px"
            priority={isPrimary}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-85" />

          {/* Badges overlay on thumbnail */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase font-extrabold shadow-md ${
                isPrimary
                  ? 'bg-accent text-[#0B0D12]'
                  : 'bg-[#11151D]/90 text-secondaryAccent border border-secondaryAccent/30 backdrop-blur-md'
              }`}
            >
              {project.badge}
            </span>

            {isPrimary && (
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/60 backdrop-blur-md text-secondaryAccent border border-secondaryAccent/30">
                Live &amp; Verified
              </span>
            )}
          </div>
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Status Indicator */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono text-secondary ml-auto">{project.statusText}</span>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="text-left hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded transition-colors"
            >
              {project.title}
            </button>
          </h3>
          <p className="text-xs sm:text-sm font-medium text-accent/90 mt-1">{project.tagline}</p>

          {/* Concise Description */}
          <p className="text-sm text-secondary leading-relaxed mt-3">
            {project.shortDescription}
          </p>

          {/* Implemented Highlights / Verified Features */}
          <div className="mt-5 space-y-2">
            <div className="text-xs font-mono uppercase text-secondary/70 flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondaryAccent" />
              <span>Verified Implemented Features</span>
            </div>
            <ul className="space-y-1.5">
              {project.verifiedFeatures.slice(0, isPrimary ? 4 : 3).map((feat, idx) => (
                <li key={idx} className="text-xs text-primary-muted flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{feat.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack & Actions */}
        <div className="space-y-4 pt-4 border-t border-border/80">
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#11151D] border border-border/80 text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Card Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center space-x-2">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full bg-white text-[#0B0D12] text-xs font-bold hover:bg-[#F2F4F8] transition-all shadow-md shadow-white/5"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#121622] text-secondary/70 text-xs font-mono border border-white/10">
                  <Info className="w-3 h-3 text-secondary/50" />
                  <span>Prototype Design</span>
                </span>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#121622] text-secondary hover:text-primary border border-white/10 hover:border-white/25 text-xs font-medium transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-full px-3.5 py-1.5 bg-[#121622] border border-white/10 hover:border-accent/40"
            >
              <span>Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
