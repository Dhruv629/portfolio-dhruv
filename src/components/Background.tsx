import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Fluid animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-fuchsia-500/30 via-pink-600/20 to-transparent rounded-full animate-pulse-slow transform rotate-12"></div>
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-bl from-cyan-500/30 via-blue-600/20 to-transparent rounded-full animate-pulse-slow-reverse transform -rotate-12"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 via-purple-600/15 to-transparent rounded-full animate-float"></div>
        <div className="absolute -bottom-1/3 -right-1/2 w-3/4 h-3/4 bg-gradient-to-tl from-yellow-500/25 via-yellow-600/15 to-transparent rounded-full animate-float-reverse"></div>
      </div>
      
      {/* Flowing lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-slide-right"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent animate-slide-left"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slide-right"></div>
      </div>
    </div>
  );
};