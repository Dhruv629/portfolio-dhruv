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
    <div className="min-h-screen w-full flex flex-col gap-12 justify-center items-center px-0 md:px-8 py-12">
      {/* Top: Photo, Name, Summary */}
      <div className="w-full flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto">
        <img
          src={profilePhoto}
          alt="Dhruv Bhosle"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-cyan-400 shadow mb-2"
        />
        <h1 className="pixel-text-3d text-2xl md:text-4xl font-bold text-white mb-2 text-center">
          DHRUV BHOSLE
        </h1>
        <div className="w-full bg-slate-700/90 rounded-lg p-6 md:p-8 flex flex-col items-center gap-6">
          <p className="text-base md:text-lg text-slate-300 text-center mb-0">
            Hi! I'm Dhruv, a software developer who crafts modern, user-friendly web apps with a love for clean code and creative design.
          </p>
        </div>
        {/* Social Links + Resume Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-2 items-center">
          <a href="#" className="pixel-button bg-fuchsia-500 text-white p-3 flex items-center justify-center hover:scale-105 transition-transform" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="pixel-button bg-cyan-500 text-white p-3 flex items-center justify-center hover:scale-105 transition-transform" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="pixel-button bg-purple-500 text-white p-3 flex items-center justify-center hover:scale-105 transition-transform" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="pixel-button bg-yellow-500 text-white py-2 px-4 flex items-center gap-2 hover:scale-105 transition-transform ml-2">
            <ExternalLink size={16} />
            RESUME
          </a>
        </div>
      </div>
      {/* What I Do Section */}
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 items-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">WHAT I DO</h2>
        <p className="text-base md:text-lg text-slate-300 text-center max-w-2xl">
          I build full-stack web applications, design modern UIs, and integrate APIs. My focus is on performance, accessibility, and seamless user experience.
        </p>
      </div>
    </div>
  );
};