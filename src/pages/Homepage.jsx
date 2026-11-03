import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import StackSection from '../sections/StackSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectSection from '../sections/ProjectSection';
import ContactSection from '../sections/ContactSection';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
