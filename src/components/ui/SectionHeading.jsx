import React from 'react';
import { motion } from 'motion/react';

export default function SectionHeading({ watermark, title, theme = 'light' }) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center w-full mb-12 sm:mb-16"
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(4.2rem,10vw,8.5rem)] font-extrabold tracking-wider select-none pointer-events-none whitespace-nowrap z-0 ${
          isDark ? 'text-white/[0.03]' : 'text-black/[0.035]'
        }`}
        aria-hidden="true"
      >
        {watermark}
      </div>
      <h2
        className={`relative z-10 text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight flex items-center ${
          isDark ? 'text-white' : 'text-zinc-950'
        }`}
      >
        <span className={`font-bold mr-1.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>/</span>
        {title}
      </h2>
    </motion.div>
  );
}

