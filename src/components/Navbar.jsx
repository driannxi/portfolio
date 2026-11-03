import React from 'react';
import { motion } from 'motion/react';

export default function Navbar({ activeSection = 'home' }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'project', label: 'Project' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-50 top-[max(16px,calc(32*var(--s)))] left-1/2 -translate-x-1/2 flex items-center p-[0.4em_0.45em] rounded-full bg-[rgba(216,218,222,0.88)] backdrop-blur-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)] text-[max(12px,calc(14*var(--s)))] font-medium text-[#27272a] max-w-[calc(100%-24px)] overflow-x-auto whitespace-nowrap select-none scrollbar-none transition-all duration-300"
      aria-label="Main Navigation"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? 'page' : undefined}
            className={`relative flex items-center gap-[0.45em] px-[1.15em] py-[0.55em] rounded-full leading-[1.3] transition-colors duration-300 ${
              isActive
                ? 'text-white font-semibold'
                : 'text-[#27272a] hover:bg-black/[0.07]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-[#161616] rounded-full shadow-sm z-0"
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        );
      })}
    </motion.nav>
  );
}

