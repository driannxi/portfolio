import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getItemById } from '../utils/data';
import ImageGallery from '../components/detail/ImageGallery';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = getItemById(id);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0e0e11] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-extrabold mb-3">Item Tidak Ditemukan</h1>
        <p className="text-zinc-400 mb-8 max-w-md">
          Data detail proyek atau pengalaman dengan ID "{id}" tidak tersedia.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all cursor-pointer"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const isProject = item.type === 'project';
  const hasGallery = item.gallery && item.gallery.length > 0;

  return (
    <div className="min-h-screen bg-[#0e0e11] text-zinc-100 font-sans selection:bg-white selection:text-zinc-950 pb-24">
      {/* Top Floating Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0e0e11]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 text-white text-xs sm:text-sm font-medium transition-all hover:-translate-x-0.5 active:scale-95 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Kembali ke Beranda</span>
          </button>

          <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
            {isProject ? 'Selected Project' : 'Experience Detail'}
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-10 sm:pt-14 flex flex-col gap-12">
        {/* Title & Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 border-b border-white/10 pb-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              {isProject ? 'Project' : item.role}
            </span>
            {item.period && (
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                📅 {item.period}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {item.title}
          </h1>

          {item.tagline && (
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
              {item.tagline}
            </p>
          )}

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl whitespace-pre-line">
            {item.overview}
          </p>
        </motion.div>

        {/* Gallery / Screenshot Showcase */}
        {hasGallery && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImageGallery gallery={item.gallery} title={item.title} />
          </motion.section>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* If Experience: Bullet Points */}
            {item.points && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Key Learnings & Deliverables
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* If Project: Key Features */}
            {item.features && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-zinc-500">/</span> Core Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col gap-2 hover:border-white/20 transition-all"
                    >
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {feat.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right Aside Column (Tech Stack / Metadata) */}
          <div className="flex flex-col gap-6">
            {item.techStack && (
              <motion.aside
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-5 sticky top-24"
              >
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/10 pb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-col gap-4">
                  {item.techStack.map((techGroup, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        {techGroup.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {techGroup.items.map((tName, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-white/6 border border-white/10 text-xs text-zinc-200 font-medium"
                          >
                            {tName}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.aside>
            )}

            {!item.techStack && (
              <motion.aside
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
              >
                <h3 className="text-base font-bold text-white tracking-tight">
                  Program Info
                </h3>
                <div className="text-xs sm:text-sm text-zinc-400 flex flex-col gap-2">
                  <div>
                    <span className="text-zinc-500">Track:</span> {item.role}
                  </div>
                  <div>
                    <span className="text-zinc-500">Timeline:</span> {item.period}
                  </div>
                  <div>
                    <span className="text-zinc-500">Status:</span> Verified & Completed
                  </div>
                </div>
              </motion.aside>
            )}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-white/10 flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </main>
    </div>
  );
}
