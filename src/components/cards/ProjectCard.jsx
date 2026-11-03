import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (index % 2 + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] hover:border-black/15 transition-all duration-300"
    >
      <div className="w-full h-44 relative overflow-hidden bg-gradient-to-br from-[#12141a] to-[#090b0e] flex items-center justify-center p-3">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-zinc-400">
            <span className="text-xs font-semibold">{project.title}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-2 bg-white flex-1 justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-zinc-500 line-clamp-2 leading-relaxed">
            {project.overview}
          </p>
        </div>

        <button
          onClick={() => navigate(`/detail/${project.id}`)}
          className="mt-2 inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all hover:shadow-md active:scale-[0.98] cursor-pointer"
        >
          <span>View Project</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
}

