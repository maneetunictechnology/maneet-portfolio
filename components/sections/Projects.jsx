"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_DATA } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Github, CheckCircle2, Eye, X, ExternalLink } from "lucide-react";

export default function Projects() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          tag="Portfolio"
          title="SELECTED WORKS."
          subtitle="A showcase of functional, modern frontend applications built with attention to design, user interaction, and clean code."
        />

        {/* Project Showcase List */}
        <div className="space-y-24">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              ref={cardRef}
              data-cursor="EXPLORE"
              className="group relative rounded-3xl border border-white/10 bg-[#121212] overflow-hidden transition-all duration-500 hover:border-accent/40"
            >
              {/* Project Hero Header & Image Showcase */}
              <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] overflow-hidden bg-black/40">
                <Image
                  src={project.heroImage}
                  alt={`${project.title} screenshot`}
                  fill
                  priority
                  className="object-cover object-top filter brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-text-primary">
                    <span className="text-accent font-bold">PROJECT {project.number}</span>
                    <span>&bull;</span>
                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-full bg-accent text-black font-heading font-bold text-xs hover:bg-[#bbf63c] transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(199,255,74,0.35)]"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors flex items-center gap-1.5"
                      >
                        <Github size={14} />
                        <span className="hidden sm:inline">Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Floating Image Zoom Indicator */}
                <button
                  onClick={() => setSelectedImage(project.heroImage)}
                  className="absolute bottom-6 right-6 z-10 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-text-primary hover:text-accent flex items-center gap-2 transition-colors"
                  aria-label="View full resolution image"
                >
                  <Eye size={14} />
                  <span>Inspect Screenshot</span>
                </button>
              </div>

              {/* Project Details Bottom Section */}
              <div className="p-8 sm:p-12 md:p-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Title & Descriptions */}
                  <div className="lg:col-span-7">
                    <h3 className="text-3xl sm:text-5xl font-heading font-extrabold text-text-primary tracking-tightest uppercase mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-accent font-medium mb-6">
                      {project.tagline}
                    </p>
                    <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed mb-8">
                      {project.details}
                    </p>

                    {/* Verified Features */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-3">
                        Key Capabilities Built
                      </p>
                      {project.verifiedKeyFeatures.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-text-secondary"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Stack & Gallery Previews */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
                    {/* Tech Badges */}
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-4">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono text-text-primary tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Product Screenshots Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-4">
                          Verified UI Screenshots
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          {project.gallery.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedImage(img)}
                              className="relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-accent transition-all group/thumb"
                            >
                              <Image
                                src={img}
                                alt={`UI Screenshot ${idx + 1}`}
                                fill
                                className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                                sizes="120px"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {project.github && (
                        <MagneticButton
                          as="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-accent text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#bbf63c] transition-all shadow-[0_0_20px_rgba(199,255,74,0.3)]"
                        >
                          <span>View on GitHub</span>
                          <ArrowUpRight size={16} />
                        </MagneticButton>
                      )}

                      {project.liveDemo && (
                        <MagneticButton
                          as="a"
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(199,255,74,0.15)] hover:shadow-[0_0_25px_rgba(199,255,74,0.4)]"
                        >
                          <span>View Demo</span>
                          <ExternalLink size={16} />
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Real Screenshot Inspection */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded preview"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
