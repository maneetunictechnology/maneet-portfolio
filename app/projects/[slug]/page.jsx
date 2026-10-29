import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/portfolio-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  FileCode,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study`,
    description: project.overview,
    openGraph: {
      title: `${project.title} — Case Study | Maneet Portfolio`,
      description: project.shortDescription,
      images: project.heroImage ? [{ url: project.heroImage }] : [],
    },
  };
}

export default function ProjectCaseStudyPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary selection:bg-accent/30 selection:text-primary">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center space-x-2 text-xs font-mono text-secondary">
            <Link href="/#projects" className="hover:text-primary transition-colors flex items-center space-x-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Projects</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-secondary/60" />
            <span className="text-accent">{project.title}</span>
          </div>

          {/* Case Study Header */}
          <div className="space-y-4 border-b border-border/80 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-accent/10 text-accent border border-accent/20">
                {project.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#151A24] text-secondaryAccent border border-secondaryAccent/30">
                {project.statusText}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg text-secondary font-medium">{project.tagline}</p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-accent text-[#0B0D12] text-sm font-bold hover:bg-[#A3B2FF] transition-all shadow-md shadow-accent/20"
                >
                  <span>Explore Live Deployment</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#151A24] text-primary border border-border hover:border-accent text-sm font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Primary Media Banner (if available) */}
          {project.heroImage && (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-[#0E121A] shadow-2xl">
              <Image
                src={project.heroImage}
                alt={`${project.title} Overview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1024px"
                priority
              />
            </div>
          )}

          {/* Multi-image Gallery for MikuMantra */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-secondary/80">
                Application Screenshots &amp; Product Showcase
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.gallery.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden border border-border bg-[#11151D] group"
                  >
                    <Image
                      src={img}
                      alt={`Showcase item ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview Section */}
          <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-primary flex items-center space-x-2">
              <FileCode className="w-5 h-5 text-accent" />
              <span>Project Overview</span>
            </h2>
            <p className="text-secondary leading-relaxed text-base">{project.overview}</p>
          </div>

          {/* Verified Technology Stack */}
          <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border space-y-4">
            <h2 className="text-lg font-bold text-primary flex items-center space-x-2">
              <Layers className="w-5 h-5 text-secondaryAccent" />
              <span>Verified Technology Stack</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#11151D] border border-border text-primary font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs Implemented Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-7 border border-border space-y-3">
              <div className="flex items-center space-x-2 text-accent font-bold text-base">
                <AlertCircle className="w-5 h-5" />
                <span>The Problem Being Solved</span>
              </div>
              <p className="text-secondary text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div className="bg-card rounded-2xl p-7 border border-border space-y-3">
              <div className="flex items-center space-x-2 text-secondaryAccent font-bold text-base">
                <Sparkles className="w-5 h-5" />
                <span>Solution &amp; Design Decisions</span>
              </div>
              <p className="text-secondary text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Verified Implemented Features */}
          <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border/80">
              <h2 className="text-xl font-bold text-primary flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-secondaryAccent" />
                <span>Important Implementation Details</span>
              </h2>
              <span className="text-xs font-mono text-secondaryAccent uppercase">Verified Code</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.verifiedFeatures.map((feat) => (
                <div key={feat.title} className="p-4 rounded-xl bg-[#0F131C] border border-border/60">
                  <h3 className="text-xs font-semibold text-primary font-mono">{feat.title}</h3>
                  <p className="text-xs text-secondary mt-1.5 leading-relaxed">{feat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Technical Challenges &amp; Resolutions</span>
              </h2>
              <div className="space-y-3 pt-2">
                {project.challenges.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0F131C] border border-border/70 space-y-1 text-xs">
                    <div className="font-semibold text-accent font-mono">{c.challenge}</div>
                    <div className="text-secondary leading-relaxed">{c.resolution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Improvements (Explicitly separated from verified facts) */}
          {project.futurePlans && (
            <div className="p-6 rounded-2xl bg-[#0A0D14] border border-dashed border-border/80 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-secondaryAccent font-bold">
                Future Improvements &amp; Unreleased Roadmap
              </h3>
              <p className="text-xs text-secondary">
                To maintain complete transparency, the following capabilities are conceptualized or in progress, rather than active production code:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-secondary">
                {project.futurePlans.map((plan, i) => (
                  <li key={i}>{plan}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation to next projects */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/80">
            <Link
              href="/#projects"
              className="inline-flex items-center space-x-2 text-xs font-mono text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-accent text-[#0B0D12] text-xs font-bold hover:bg-[#A3B2FF] transition-all"
            >
              <span>Discuss This Project With Maneet</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
