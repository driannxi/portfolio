import React from 'react';
import { motion } from 'motion/react';
import aiImg from '../assets/ai.png';

export default function HeroSection() {
  return (
    <header
      id="home"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* =========================================================================
          1. MOBILE LAYOUT (< md / < 768px): clean vertical flow, no overlap issues
         ========================================================================= */}
      <div className="flex md:hidden flex-col items-center w-full px-5 pt-16 sm:pt-20 pb-12 max-w-lg mx-auto">
        {/* Portrait Cutout with Bottom Fade */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full flex justify-center items-end mt-2"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-sm flex items-end justify-center">
            <img
              src={aiImg}
              alt="Ardian Primaditya portrait"
              className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] filter contrast-105"
              style={{
                maskImage:
                  'linear-gradient(black 45%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.6) 72%, rgba(0, 0, 0, 0.3) 84%, rgba(0, 0, 0, 0.08) 94%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(black 45%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.6) 72%, rgba(0, 0, 0, 0.3) 84%, rgba(0, 0, 0, 0.08) 94%, transparent 100%)',
              }}
            />
            <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white" />
          </div>
        </motion.div>

        {/* Bio & Actions Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full mt-2 flex flex-col gap-5 text-left"
        >
          {/* Role & Description */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Software Engineer
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 font-normal">
              build fast, scalable web applications, from pixel-perfect interfaces to robust backends.
            </p>
          </div>

          {/* Let's Collaborate Button */}
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 bg-zinc-950 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-[0_10px_25px_-3px_rgba(0,0,0,0.25)] hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
          >
            <span>Let’s collaborate</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          {/* Social Links Cards (3 Columns) */}
          <div className="grid grid-cols-3 gap-2 pt-0.5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ardiannp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 px-2 bg-white border border-zinc-200/90 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.97] transition-all duration-150 text-zinc-900 group"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0 text-zinc-800 group-hover:text-zinc-950"
                viewBox="0 0 24 24"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span className="text-xs font-semibold text-zinc-800 tracking-tight">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/driannxi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 px-2 bg-white border border-zinc-200/90 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.97] transition-all duration-150 text-zinc-900 group"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0 text-zinc-800 group-hover:text-zinc-950"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span className="text-xs font-semibold text-zinc-800 tracking-tight">GitHub</span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@example.com"
              className="flex items-center justify-center gap-1.5 py-3 px-2 bg-white border border-zinc-200/90 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.97] transition-all duration-150 text-zinc-900 group"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-[2] shrink-0 text-zinc-800 group-hover:text-zinc-950"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-semibold text-zinc-800 tracking-tight">Email</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          2. DESKTOP LAYOUT (>= md / >= 768px): 100% Exact Figma Scaled Stage
         ========================================================================= */}
      <div className="hidden md:flex h-[100svh] min-h-[100svh] items-end justify-center overflow-hidden">
        {/* Stage Container (Figma Frame 1280 × 832 Scaled) */}
        <div className="relative flex-none w-[calc(1280*var(--s))] h-[calc(832*var(--s))]">
          
          {/* Main Name SVG Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Ardian Primaditya"
            className="absolute z-10 top-[calc(150*var(--s))] left-[calc(86.4*var(--s))] flex items-start gap-[calc(33.8*var(--s))] select-none pointer-events-none"
          >
            <svg
              viewBox="0 0 420.2 96"
              className="flex-none w-[calc(420.2*var(--s))] h-auto overflow-visible"
              aria-hidden="true"
            >
              <text
                x="-1.28"
                y="91"
                className="font-extrabold text-[116px] tracking-[-0.04em] fill-white stroke-[var(--ink)] stroke-[5px] [paint-order:stroke_fill] [stroke-linejoin:round]"
              >
                ARDIAN
              </text>
            </svg>
            <svg
              viewBox="0 0 663.7 96"
              className="flex-none w-[calc(663.7*var(--s))] h-auto overflow-visible"
              aria-hidden="true"
            >
              <text
                x="-7.66"
                y="91"
                className="font-extrabold text-[116px] tracking-[-0.04em] fill-[var(--ink)]"
              >
                PRIMADITYA
              </text>
            </svg>
          </motion.div>

          {/* Portrait Photo: di depan judul, bagian bawah sweater terpotong frame */}
          <motion.img
            initial={{ opacity: 0, y: 70, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            src={aiImg}
            alt="Ardian Primaditya"
            width="2664"
            height="2459"
            className="absolute z-20 left-1/2 -translate-x-1/2 bottom-[calc(-23*var(--s))] w-[calc(744*var(--s))] h-auto select-none pointer-events-none drop-shadow-xl"
          />

          {/* Intro Card Kiri Bawah */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 left-[calc(66*var(--s))] bottom-[calc(105*var(--s))] flex flex-col items-start max-w-[26.5em] text-[max(12px,calc(14*var(--s)))]"
          >
            <h2 className="text-[2em] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--ink)]">
              Software Engineer
            </h2>
            <p className="mt-[0.6em] text-[var(--muted)] leading-[1.65]">
              build fast, scalable web applications, from pixel-perfect interfaces to robust backends.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-[0.7em] h-[3.05em] mt-[1.7em] px-[1.5em] rounded-full bg-[var(--ink)] text-white font-semibold shadow-[0_14px_24px_-8px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 active:scale-95 transition-transform duration-200"
            >
              <span>Let’s collaborate</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[1em] h-[1em]"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </motion.div>

          {/* Sosial Kanan Bawah */}
          <motion.ul
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 right-[calc(64*var(--s))] bottom-[calc(105*var(--s))] flex flex-col gap-[0.95em] text-[max(12px,calc(14*var(--s)))]"
          >
            <li>
              <a
                href="https://www.linkedin.com/in/ardiannp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.75em] w-[13.3em] h-[3.08em] px-[1.2em] rounded-full bg-white text-[0.93em] font-medium text-[var(--ink)] shadow-[0_6px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] hover:-translate-x-1 active:scale-95 transition-transform duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[1.15em] h-[1.15em] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/driannxi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.75em] w-[13.3em] h-[3.08em] px-[1.2em] rounded-full bg-white text-[0.93em] font-medium text-[var(--ink)] shadow-[0_6px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] hover:-translate-x-1 active:scale-95 transition-transform duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[1.15em] h-[1.15em] shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a
                href="https://docs.google.com/document/d/1KQB6QUbR92ykpj9UAWt0lvwgEmoOuMmf8088nQTS_tE/edit?usp=sharing"
                className="flex items-center gap-[0.75em] w-[13.3em] h-[3.08em] px-[1.2em] rounded-full bg-white text-[0.93em] font-medium text-[var(--ink)] shadow-[0_6px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] hover:-translate-x-1 active:scale-95 transition-transform duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[1.15em] h-[1.15em] shrink-0"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email</span>
              </a>
            </li>
          </motion.ul>

        </div>
      </div>
    </header>
  );
}
