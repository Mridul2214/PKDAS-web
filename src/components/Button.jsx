import React from 'react';

export function Button({ variant = 'primary', children, className = '', ...props }) {
  const baseClasses = "px-6 py-3 rounded text-sm font-medium transition-all duration-300";
  const variants = {
    primary: "bg-primary-btn text-white hover:brightness-90 shadow-sm",
    secondary: "ghost-border text-primary hover:bg-surface-container",
    white: "bg-white text-primary hover:bg-surface-container-low",
    'outline-white': "border border-white/30 text-white hover:bg-white/10",
    accent: "bg-accent text-white hover:brightness-110 shadow-sm font-bold tracking-wide",
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
