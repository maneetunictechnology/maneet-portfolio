'use client';

import { useState } from 'react';
import { projectsData } from '@/lib/portfolio-data';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Sparkles, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const primaryProject = projectsData.find((p) => p.isPrimary) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.isPrimary);

  return (
    <section id="projects" className="py-20 bg-background-secondary relative" aria-label="Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151A24] border border-border text-xs font-mono uppercase tracking-wider text-accent mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-secondaryAccent" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Featured Projects
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Real projects demonstrating full-stack architecture, e-commerce workflows, database schemas, and problem solving.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* Primary Featured Project (MikuMantra) */}
          <div>
            <ProjectCard
              project={primaryProject}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          </div>

          {/* Secondary Projects Grid (AI CRM & Product Distribution) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </div>

        {/* Modal for In-depth Case Study */}
        <ProjectModal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
