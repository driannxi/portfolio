import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ activeSection = 'home' }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'stack', label: 'Stack', num: '03' },
    { id: 'experience', label: 'Experience', num: '04' },
    { id: 'project', label: 'Project', num: '05' },
    { id: 'contact', label: 'Contact', num: '06' },
  ];

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* =========================================================================
          1. DESKTOP PILL NAVBAR (>= md / >= 768px): Centered Floating Pill
         ========================================================================= */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex fixed z-50 top-[max(16px,calc(32*var(--s)))] left-1/2 -translate-x-1/2 items-center p-[0.4em_0.45em] rounded-full bg-[rgba(216,218,222,0.88)] backdrop-blur-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)] text-[max(12px,calc(14*var(--s)))] font-medium text-[#27272a] max-w-[calc(100%-24px)] overflow-x-auto whitespace-nowrap select-none scrollbar-none transition-all duration-300"
        aria-label="Desktop Navigation"
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

      {/* =========================================================================
          2. MOBILE TOP BAR (< md / < 768px): Name on Left, Hamburger on Right
         ========================================================================= */}
      <div className="flex md:hidden fixed top-0 left-0 w-full z-50 items-center justify-between px-5 py-3.5 bg-white/70 backdrop-blur-md border-b border-zinc-200/50">
        <a
          href="#home"
          className="font-black text-base sm:text-lg tracking-tight text-zinc-950 uppercase select-none hover:opacity-80 transition-opacity"
        >
          ARDIAN PRIMADITYA
        </a>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white active:scale-95 transition-all text-zinc-900 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.06)] cursor-pointer"
        >
          {isOpen ? (
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-[2.2]"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
              <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-[2.2]"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
              <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* =========================================================================
          3. MOBILE MENU DROPDOWN OVERLAY (< md)
         ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-18 right-4 left-4 max-w-sm ml-auto bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-50 md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-zinc-950 text-white shadow-sm'
                          : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`text-xs ${
                          isActive ? 'text-zinc-400' : 'text-zinc-400'
                        }`}
                      >
                        {item.num}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
