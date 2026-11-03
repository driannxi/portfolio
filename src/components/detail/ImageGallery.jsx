import React, { useState } from 'react';

export default function ImageGallery({ gallery, title }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <span className="text-zinc-500">/</span> Documentation & Showcase
        </h2>
        <span className="text-xs text-zinc-400">
          {activeImage + 1} of {gallery.length}
        </span>
      </div>

      {/* Main Featured Image Display */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl flex items-center justify-center p-2 sm:p-4">
        <img
          src={gallery[activeImage].src}
          alt={gallery[activeImage].caption || title}
          className="w-full h-full object-contain rounded-xl"
        />
        {gallery[activeImage].caption && (
          <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs sm:text-sm text-zinc-200">
            {gallery[activeImage].caption}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation Row */}
      {gallery.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`relative shrink-0 w-24 sm:w-32 aspect-video rounded-xl overflow-hidden border transition-all cursor-pointer ${
                activeImage === idx
                  ? 'border-white ring-2 ring-white/40 opacity-100 scale-102'
                  : 'border-white/10 opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={img.src}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

