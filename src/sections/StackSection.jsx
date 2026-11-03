import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/ui/SectionHeading';

import html5Icon from '../assets/html5.svg';
import css3Icon from '../assets/css3.svg';
import javascriptIcon from '../assets/javascript.svg';
import nodejsIcon from '../assets/nodejs.svg';
import expressIcon from '../assets/express.svg';
import postgresqlIcon from '../assets/postgresql.svg';
import githubIcon from '../assets/github.svg';
import gitIcon from '../assets/git.svg';
import figmaIcon from '../assets/figma.svg';
import reactIcon from '../assets/react.svg';

const stackItems = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'React', icon: reactIcon },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="relative min-h-[100svh] flex items-center justify-center bg-[#fafafa] px-5 sm:px-8 py-24"
    >
      <div className="w-full max-w-[1060px] mx-auto flex flex-col items-center justify-center">
        <SectionHeading watermark="TECH STACK" title="TECH STACK" theme="light" />

        {/* Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 w-full z-10">
          {stackItems.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-3 border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] hover:border-black/15 transition-all duration-300 min-h-[120px] cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-zinc-950 tracking-tight text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

