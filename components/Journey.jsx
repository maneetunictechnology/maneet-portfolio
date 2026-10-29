import { journeyMilestones } from '@/lib/portfolio-data';
import { Route, Milestone, Code2, Rocket, Compass, ArrowUpRight } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-background-secondary relative" aria-label="Development Journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151A24] border border-border text-xs font-mono uppercase tracking-wider text-accent mb-3">
            <Route className="w-3.5 h-3.5 text-secondaryAccent" />
            <span>Learning &amp; Building</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            My Development Journey
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            A transparent progression: from foundational academic coursework in computer applications to building full-stack applications with Next.js and MongoDB.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-10">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Marker Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-accent flex items-center justify-center z-10 shadow-glow-accent">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondaryAccent" />
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="hidden md:block w-1/2" />

                  {/* Milestone Card */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
                    }`}
                  >
                    <div className="bg-card rounded-2xl p-6 border border-border hover:border-accent/40 transition-colors shadow-card-subtle">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="text-xs font-mono text-accent uppercase font-bold tracking-wider">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#11151D] text-secondaryAccent border border-secondaryAccent/20">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-secondary mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
