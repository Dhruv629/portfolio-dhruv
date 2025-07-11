import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      color: "bg-fuchsia-500"
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration tool with WebSocket integration",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      status: "Beta",
      color: "bg-purple-500"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather visualization with charts and maps",
      tech: ["React", "D3.js", "API Integration", "CSS3"],
      status: "Live",
      color: "bg-cyan-500"
    },
    {
      title: "Social Media Analytics",
      description: "Data analytics platform for social media insights",
      tech: ["Python", "Flask", "Pandas", "Chart.js"],
      status: "Development",
      color: "bg-yellow-500"
    },
    {
      title: "Mobile Game",
      description: "Retro-style mobile game built with React Native",
      tech: ["React Native", "Redux", "Expo", "Animation"],
      status: "Live",
      color: "bg-pink-500"
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio with retro gaming aesthetic",
      tech: ["React", "TypeScript", "Tailwind", "Animations"],
      status: "Live",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="pixel-text-3d text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="pixel-card bg-white/90 dark:bg-slate-700/90 p-4 md:p-6 hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-bold text-cyan-600 dark:text-cyan-400">{project.title}</h3>
                <div className={`pixel-button 
                  ${project.color === 'bg-fuchsia-500' ? 'bg-fuchsia-400 dark:bg-fuchsia-500' : ''}
                  ${project.color === 'bg-purple-500' ? 'bg-purple-400 dark:bg-purple-500' : ''}
                  ${project.color === 'bg-cyan-500' ? 'bg-cyan-400 dark:bg-cyan-500' : ''}
                  ${project.color === 'bg-yellow-500' ? 'bg-yellow-400 dark:bg-yellow-500' : ''}
                  ${project.color === 'bg-pink-500' ? 'bg-pink-400 dark:bg-pink-500' : ''}
                  text-white py-1 px-2 md:px-3 text-xs`}>
                  {project.status}
                </div>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-200 dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 px-1 md:px-2 py-1 text-xs font-bold pixel-border">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 md:gap-3">
                <button className="pixel-button bg-fuchsia-400 dark:bg-fuchsia-500 text-white py-1 md:py-2 px-2 md:px-4 text-xs md:text-sm flex items-center gap-1 md:gap-2 hover:scale-105 transition-transform">
                  <Github size={12} className="md:w-3.5 md:h-3.5" />
                  <span className="hidden sm:inline">CODE</span>
                  <span className="sm:hidden">CODE</span>
                </button>
                <button className="pixel-button bg-purple-400 dark:bg-purple-500 text-white py-1 md:py-2 px-2 md:px-4 text-xs md:text-sm flex items-center gap-1 md:gap-2 hover:scale-105 transition-transform">
                  <ExternalLink size={12} className="md:w-3.5 md:h-3.5" />
                  <span className="hidden sm:inline">LIVE</span>
                  <span className="sm:hidden">LIVE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};