import React from 'react';

export function BackToTop() {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-[120] group flex items-center justify-center w-12 h-12 bg-white text-on-surface rounded-xl shadow-2xl border border-black/5 hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-500 opacity-40 hover:opacity-100 cursor-pointer"
    >
      <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
