import React from 'react';

export function BackgroundOverlayCard({ title, description, imageUrl, gifUrl, label }) {
  return (
    <div className="group relative w-full h-[420px] rounded-2xl overflow-hidden bg-gray-900 shadow-lg cursor-pointer">

      {/* Static Background Image — visible by default, hidden on hover */}
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-100 group-hover:opacity-0"
      />

      {/* GIF — hidden by default, fades in on hover */}
      {gifUrl && (
        <img
          src={gifUrl}
          alt={`${title} animation`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-110"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500 z-10" />

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/15 transition-all duration-500 pointer-events-none z-20" />

      {/* Top Label Badge */}
      {label && (
        <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white z-20">
          {label}
        </div>
      )}

      {/* Content Bottom */}
      <div className="absolute bottom-0 left-0 p-6 z-20 transition-transform duration-500 ease-out group-hover:-translate-y-2 w-full">
        <h3 className="text-2xl font-bold text-white leading-tight mb-2">{title}</h3>
        <p className="text-sm text-gray-300 max-w-[90%] leading-relaxed mb-5">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Expertise Focus</span>
          <svg
            className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
