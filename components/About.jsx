import { personalInfo } from '@/lib/portfolio-data';
import { Sparkles, Terminal, Code2, ShieldCheck, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const { about, educationDegree, educationStatus } = personalInfo;

  return (
    <section id="about" className="py-20 bg-background-secondary relative" aria-label="About Maneet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151A24] border border-border text-xs font-mono uppercase tracking-wider text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5 text-secondaryAccent" />
            <span>{about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            {about.title}
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Statement Box (7 cols) */}
          <div className="lg:col-span-7 bg-card rounded-2xl p-8 border border-border flex flex-col justify-between shadow-card-subtle">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-accent font-mono text-sm">
                <Terminal className="w-5 h-5 text-secondaryAccent" />
                <span>Aspiring Web Developer &amp; Student</span>
              </div>

              <p className="text-lg sm:text-xl text-primary leading-relaxed font-medium">
                {about.intro}
              </p>

              {/* Key Development Interests */}
              <div className="p-5 rounded-xl bg-[#0F131C] border border-border/80 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                  Core Development Interests
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {about.interests.map((interest, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-secondaryAccent flex-shrink-0 mt-0.5" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-6 border-t border-border/70">
              <div className="p-3.5 rounded-lg bg-[#11151D] border border-border/60">
                <div className="text-xs font-mono uppercase text-secondary/70">Academic Track</div>
                <div className="text-sm font-semibold text-primary mt-1">{educationDegree}</div>
                <div className="text-xs text-secondaryAccent mt-0.5">{educationStatus}</div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#11151D] border border-border/60">
                <div className="text-xs font-mono uppercase text-secondary/70">Development Focus</div>
                <div className="text-sm font-semibold text-primary mt-1">Full-Stack Web Apps</div>
                <div className="text-xs text-accent mt-0.5">React • Next.js • Node.js • MongoDB</div>
              </div>
            </div>
          </div>

          {/* Philosophy / Principles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {about.philosophy.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/40 transition-colors flex-1 flex flex-col justify-center"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent flex-shrink-0 mt-0.5">
                    {index === 0 && <Code2 className="w-4 h-4" />}
                    {index === 1 && <Cpu className="w-4 h-4 text-secondaryAccent" />}
                    {index === 2 && <ShieldCheck className="w-4 h-4 text-accent" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-secondary mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
