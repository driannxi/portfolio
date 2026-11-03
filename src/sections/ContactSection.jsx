import React from 'react';
import { motion } from 'motion/react';
import aiImg from '../assets/ai.png';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[100svh] flex items-center justify-center bg-white px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[860px] mx-auto flex flex-col items-center text-center"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-black/8 shadow-sm text-xs font-medium text-zinc-900 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)] animate-pulse" />
          <span>Available for New Projects</span>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-zinc-950 leading-[1.15] uppercase mb-5">
          HAVE A PROJECT IN MIND?
        </h2>

        {/* Subtitle */}
        <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-zinc-600 leading-relaxed max-w-[580px] mb-10 font-normal">
          Together, we can create something impactful and refined. Let’s collaborate to turn robust engineering and elegant solutions into reality.
        </p>

        {/* Bottom Pills Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Profile Pill */}
          <div className="inline-flex items-center gap-2.5 py-2 pl-2 pr-4 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-semibold shadow-md select-none">
            <img
              src={aiImg}
              alt="Ardian Primaditya"
              className="w-7 h-7 rounded-full object-cover object-[50%_15%] bg-zinc-800 ring-2 ring-white/20"
            />
            <span>Ardian Primaditya</span>
          </div>

          {/* Email Pill */}
          <a
            href="https://docs.google.com/document/d/1KQB6QUbR92ykpj9UAWt0lvwgEmoOuMmf8088nQTS_tE/edit?usp=sharing"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md hover:border-black/20 hover:-translate-y-0.5 active:scale-95 transition-all text-xs sm:text-sm font-semibold text-zinc-900"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Email</span>
          </a>

          {/* GitHub Pill */}
          <a
            href="https://github.com/driannxi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md hover:border-black/20 hover:-translate-y-0.5 active:scale-95 transition-all text-xs sm:text-sm font-semibold text-zinc-900"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn Pill */}
          <a
            href="https://www.linkedin.com/in/ardiannp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md hover:border-black/20 hover:-translate-y-0.5 active:scale-95 transition-all text-xs sm:text-sm font-semibold text-zinc-900"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Resume Pill */}
          <a
            href="https://drive.google.com/file/d/1wIOt_gXcruJnACVXr6NE6JQIgd631Zga/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md hover:border-black/20 hover:-translate-y-0.5 active:scale-95 transition-all text-xs sm:text-sm font-semibold text-zinc-900"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <line x1="10" x2="8" y1="9" y2="9" />
            </svg>
            <span>Resume ↗</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

