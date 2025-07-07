import React from 'react';

export const PixelGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-5 pointer-events-none">
      <div 
        className="w-full h-full opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Scan lines */}
      <div className="absolute inset-0 animate-scan-lines">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"></div>
      </div>
    </div>
  );
};