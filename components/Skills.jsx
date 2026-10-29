import { skillsData } from '@/lib/portfolio-data';
import { Layout, Server, Database, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layout className="w-5 h-5 text-accent" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-secondaryAccent" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#FFB356]" />;
      default:
        return <Layout className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-background relative" aria-label="Technical Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151A24] border border-border text-xs font-mono uppercase tracking-wider text-accent mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-secondaryAccent" />
            <span>Verified Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Technical Skills
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Practical, project-backed technologies actively used in my development workflow. No arbitrary percentages or unverified claims.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.groups.map((group) => (
            <div
              key={group.category}
              className="bg-card rounded-2xl p-6 border border-border hover:border-accent/40 transition-all flex flex-col justify-between shadow-card-subtle"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-border/80">
                  <div className="p-2.5 rounded-xl bg-[#11151D] border border-border">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{group.category}</h3>
                    <p className="text-xs text-secondary mt-0.5">{group.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#11151D] border border-border/60 hover:border-accent/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary font-mono">{skill.name}</span>
                        <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#151A24] text-secondaryAccent border border-secondaryAccent/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-secondary mt-1.5 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap / Learning Areas (Clearly separated as future learning) */}
        <div className="mt-12 bg-card/60 rounded-2xl p-6 border border-border/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-primary">Continuous Learning Roadmap</h4>
                <p className="text-xs text-secondary">
                  Technologies currently exploring to expand my engineering scope (not claimed as established production skills).
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {skillsData.learningRoadmap.map((item) => (
              <div
                key={item.name}
                className="p-3.5 rounded-xl bg-[#11151D]/70 border border-dashed border-border flex items-center space-x-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent/60" />
                <div>
                  <div className="text-sm font-medium text-primary font-mono">{item.name}</div>
                  <div className="text-xs text-secondary/80 mt-0.5">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
