import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import profilePhoto from '../assets/WhatsApp Image 2024-11-07 at 11.42.36_ab17a2ec.jpg';
import resumePDF from '../assets/resume.pdf';

const recentProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "bg-fuchsia-500"
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration tool with WebSocket integration",
    tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    color: "bg-purple-500"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather visualization with charts and maps",
    tech: ["React", "D3.js", "API Integration", "CSS3"],
    color: "bg-cyan-500"
  }
];

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-12 justify-center items-center px-0 md:px-8 py-1">
      {/* Top: Photo, Name, Summary */}
      <div className="w-full flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto">
        <img
          src={profilePhoto}
          alt="Dhruv Bhosle"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-cyan-400 shadow pixel-glow transition-transform duration-300 hover:scale-110 hover:animate-bounce-pixel mb-2"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2 text-center">
          DHRUV BHOSLE
        </h1>
        {/* Social Links + Resume Row - moved above summary */}
        <div className="flex flex-wrap justify-center gap-4 items-center mb-2">
          <a href="#" className="pixel-button bg-fuchsia-400 dark:bg-fuchsia-500 text-white p-3 flex items-center justify-center hover:scale-105 transition-transform" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="pixel-button bg-cyan-400 dark:bg-cyan-500 text-white p-3 flex items-center justify-center hover:scale-105 transition-transform" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="pixel-button bg-purple-400 dark:bg-purple-500 text-white p-3 flex items-center justify-center hover:scale-105 transition-transform" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="pixel-button bg-yellow-400 dark:bg-yellow-500 text-white py-2 px-4 flex items-center gap-2 hover:scale-105 transition-transform ml-2">
            <ExternalLink size={16} />
            RESUME
          </a>
        </div>
        <div className="w-full bg-white/90 dark:bg-slate-700/90 rounded-lg p-4 md:p-6 flex flex-col items-center">
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 text-center mb-0 max-w-xl">
            Hi! I'm Dhruv, a software developer who crafts modern, user-friendly web apps with a love for clean code and creative design.
          </p>
        </div>
      </div>
    </div>
  );
};

<style>{`
.pixel-glow {
  box-shadow: 0 0 0 2px #22d3ee, 0 0 8px 2px #67e8f9, 0 0 16px 4px #a5f3fc;
}
@keyframes bounce-pixel {
  0%, 100% { transform: scale(1); }
  20% { transform: scale(1.12) translateY(-4px); }
  40% { transform: scale(0.98) translateY(2px); }
  60% { transform: scale(1.08) translateY(-2px); }
  80% { transform: scale(1.02) translateY(1px); }
}
.hover\:animate-bounce-pixel:hover {
  animation: bounce-pixel 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
`}</style>