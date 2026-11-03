import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/cards/ProjectCard';
import { projectsData } from '../utils/data';

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="relative min-h-[100svh] flex flex-col items-center justify-center bg-[#fafafa] pt-28 pb-20 px-5 sm:px-8"
    >
      <div className="w-full max-w-[880px] mx-auto flex flex-col items-center">
        <SectionHeading watermark="PORTFOLIO" title="SELECTED PROJECTS" theme="light" />

        {/* 2x2 Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full z-10">
          {projectsData.map((proj, idx) => (
            <ProjectCard key={proj.id} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

