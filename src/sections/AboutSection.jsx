import React from 'react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[100svh] flex items-center justify-center bg-[#141416] text-white px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[840px] mx-auto flex flex-col"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          Hi, I'm <span className="text-zinc-300">Ardian</span>
        </h2>
        <div className="flex flex-col gap-6 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            I’m an Information Systems graduate from Universitas Amikom Yogyakarta with a passion for software engineering.
          </p>
          <p>
            Throughout my studies, I developed my technical skills through academic projects and a bootcamp program. These experiences allowed me to explore and understand software development workflows, and strengthen my problem-solving and programming skills.
          </p>
          <p>
            I have hands-on experience with technologies such as React, Tailwind CSS, and Figma for front-end development, as well as Node.js, Express.js, PostgreSQL, Supabase, and REST APIs for back-end development. I enjoy learning by building things, experimenting with new tools, and continuously improving my technical skills through practical projects
          </p>
        </div>
      </motion.div>
    </section>
  );
}

