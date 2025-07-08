import React from 'react';

export const Background: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  return (
    <div className="fixed inset-0 z-0">
      <div className={theme === 'dark'
        ? 'absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100'}></div>
      {/* Fluid animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {theme === 'dark' ? (
          <>
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-fuchsia-500/30 via-pink-600/20 to-transparent rounded-full animate-pulse-slow transform rotate-12"></div>
            <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-bl from-cyan-500/30 via-blue-600/20 to-transparent rounded-full animate-pulse-slow-reverse transform -rotate-12"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 via-purple-600/15 to-transparent rounded-full animate-float"></div>
            <div className="absolute -bottom-1/3 -right-1/2 w-3/4 h-3/4 bg-gradient-to-tl from-yellow-500/25 via-yellow-600/15 to-transparent rounded-full animate-float-reverse"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-fuchsia-200/20 via-pink-200/10 to-transparent rounded-full animate-pulse-slow transform rotate-12"></div>
            <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-bl from-cyan-200/20 via-blue-200/10 to-transparent rounded-full animate-pulse-slow-reverse transform -rotate-12"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-200/10 via-purple-300/10 to-transparent rounded-full animate-float"></div>
            <div className="absolute -bottom-1/3 -right-1/2 w-3/4 h-3/4 bg-gradient-to-tl from-yellow-200/15 via-yellow-100/10 to-transparent rounded-full animate-float-reverse"></div>
          </>
        )}
      </div>
      {/* Flowing lines */}
      <div className="absolute inset-0 opacity-30">
        <div className={theme === 'dark'
          ? 'absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-slide-right'
          : 'absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent animate-slide-right'}></div>
        <div className={theme === 'dark'
          ? 'absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent animate-slide-left'
          : 'absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-200 to-transparent animate-slide-left'}></div>
        <div className={theme === 'dark'
          ? 'absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slide-right'
          : 'absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent animate-slide-right'}></div>
      </div>
    </div>
  );
};