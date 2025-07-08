import React from 'react';

export const PixelGrid: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const gridColor = theme === 'dark' ? 'rgba(0,255,255,0.3)' : 'rgba(14,165,233,0.10)'; // cyan-400/10 for light
  const scanLine = theme === 'dark' ? 'from-transparent via-cyan-400/5 to-transparent' : 'from-transparent via-cyan-200/10 to-transparent';
  return (
    <div className="fixed inset-0 z-5 pointer-events-none">
      <div 
        className="w-full h-full opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>
      {/* Scan lines */}
      <div className="absolute inset-0 animate-scan-lines">
        <div className={`w-full h-full bg-gradient-to-b ${scanLine}`}></div>
      </div>
    </div>
  );
};