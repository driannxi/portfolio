import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function ExperienceItem({ experience, index }) {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: (index + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 group"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
          {experience.title}
        </h3>
        <span className="text-sm text-zinc-400 font-medium">
          {experience.role}
        </span>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-5">
        <time className="text-xs sm:text-sm text-zinc-400 font-medium whitespace-nowrap">
          {experience.period}
        </time>

        <button
          onClick={() => navigate(`/detail/${experience.id}`)}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 text-white font-medium text-xs transition-all hover:translate-x-0.5 active:scale-95 cursor-pointer"
        >
          <span>See more</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-2.5 h-2.5"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
}

