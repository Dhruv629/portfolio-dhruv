import React from 'react';
import { Award, Calendar, MapPin, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 pb-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="pixel-text-3d text-3xl md:text-5xl font-bold text-center mb-8 text-slate-800 dark:text-white">
          ABOUT ME
        </h2>
        
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="pixel-card bg-white/90 dark:bg-slate-700/90 p-4 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">MISSION</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              I'm passionate about creating digital experiences that blend modern functionality with creative design. My journey in web development started with a love for problem-solving and has evolved into a career building scalable applications.
            </p>
          </div>
          <div className="pixel-card bg-white/90 dark:bg-slate-700/90 p-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">WHAT I DO WHEN NOT CODING</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or diving into retro gaming for inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};