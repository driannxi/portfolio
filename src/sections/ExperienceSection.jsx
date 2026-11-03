import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ExperienceItem from '../components/cards/ExperienceItem';
import { experiencesData } from '../utils/data';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-[100svh] flex items-center justify-center bg-[#141416] text-white px-6 py-24"
    >
      <div className="w-full max-w-[860px] mx-auto flex flex-col">
        <SectionHeading watermark="EXPERIENCE" title="EXPERIENCE" theme="dark" />

        {/* List */}
        <div className="flex flex-col w-full divide-y divide-white/10">
          {experiencesData.map((exp, idx) => (
            <ExperienceItem key={exp.id} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

