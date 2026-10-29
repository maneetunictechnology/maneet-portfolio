import { educationData } from '@/lib/portfolio-data';
import { GraduationCap, BookOpen, CheckCircle, Info } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background relative" aria-label="Education & Academic Track">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151A24] border border-border text-xs font-mono uppercase tracking-wider text-accent mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-secondaryAccent" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-card-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                  {educationData.degree}
                </h3>
                <p className="text-xs font-mono text-secondary mt-0.5">
                  Academic Focus: Computer Applications &amp; Software Development
                </p>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondaryAccent/10 border border-secondaryAccent/30 text-secondaryAccent text-xs font-semibold self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-secondaryAccent animate-pulse" />
              <span>{educationData.status}</span>
            </div>
          </div>

          {/* Body Overview */}
          <div className="pt-6 space-y-4">
            <p className="text-sm text-secondary leading-relaxed">
              {educationData.overview}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase text-secondary/70">
                Key Academic &amp; Practical Priorities
              </div>
              {educationData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-primary-muted">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Configurable note */}
            <div className="mt-6 p-4 rounded-xl bg-[#0F131C] border border-border/60 flex items-start space-x-3 text-xs text-secondary">
              <Info className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>
                Institution name and expected graduation milestones can be configured directly in <code className="text-accent font-mono">lib/portfolio-data.js</code> upon formal publishing.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
