import React from 'react';
import { Award, Calendar, MapPin, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 pb-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="pixel-text-3d text-3xl md:text-5xl font-bold text-center mb-12 text-white">
          ABOUT ME
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pixel-card bg-slate-700/90 p-4 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">MISSION</h3>
            <p className="text-slate-300 leading-relaxed mb-2 text-sm">
              I'm passionate about creating digital experiences that blend modern functionality with creative design. My journey in web development started with a love for problem-solving and has evolved into a career building scalable applications.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or diving into retro gaming for inspiration.
            </p>
          </div>
          <div className="pixel-card bg-slate-700/90 p-4 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-cyan-400 mb-2 text-center">CORE VALUES</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center">
                <div className="pixel-button bg-fuchsia-500 text-white py-2 px-4 mb-2 inline-block text-sm">
                  INNOVATION
                </div>
                <p className="text-slate-300 text-xs">
                  Always exploring new technologies and methodologies
                </p>
              </div>
              <div className="text-center">
                <div className="pixel-button bg-purple-500 text-white py-2 px-4 mb-2 inline-block text-sm">
                  QUALITY
                </div>
                <p className="text-slate-300 text-xs">
                  Delivering clean, maintainable, and scalable code
                </p>
              </div>
              <div className="text-center">
                <div className="pixel-button bg-cyan-500 text-white py-2 px-4 mb-2 inline-block text-sm">
                  COLLABORATION
                </div>
                <p className="text-slate-300 text-xs">
                  Working effectively with teams and stakeholders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};