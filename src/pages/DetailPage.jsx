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
          onClick={() => navigate('/#project')}
          className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all cursor-pointer"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const isProject = item.type === 'project';
  const hasGallery = item.gallery && item.gallery.length > 0;
  const backTarget = isProject ? '/#project' : '/#experience';

  const handleBack = () => {
    navigate(backTarget);
  };

  return (
    <div className="min-h-screen bg-[#0e0e11] text-zinc-100 font-sans selection:bg-white selection:text-zinc-950 pb-24">
      {/* Top Floating Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0e0e11]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
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
            <span>{isProject ? 'back to Projects' : 'back to Experiences'}</span>
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

          {/* Action Links (Live App / GitHub Repository / Program & Design Links) */}
          {(item.liveUrl || item.githubUrl || item.programUrl || item.designUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {item.programUrl && (
                <a
                  href={item.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-200 shadow-md hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>View Program</span>
                </a>
              )}

              {item.designUrl && (
                <a
                  href={item.designUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0acf83]/15 hover:bg-[#0acf83]/25 border border-[#0acf83]/30 text-emerald-300 font-semibold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span>View Design</span>
                </a>
              )}

              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-200 shadow-md hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Open Live App</span>
                </a>
              )}

              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>View Repository</span>
                </a>
              )}
            </div>
          )}
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
            onClick={handleBack}
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            ← {isProject ? 'Kembali ke Projects' : 'Kembali ke Experiences'}
          </button>
        </div>
      </main>
    </div>
  );
}
