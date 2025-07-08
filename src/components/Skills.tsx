import React from 'react';
import { FaReact, FaVuejs, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaDatabase, FaSass, FaJs, FaHtml5, FaNpm, FaYarn, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiWebpack } from 'react-icons/si';

const SKILL_SECTIONS = [
  {
    title: 'Frontend',
    color: 'from-fuchsia-500 to-cyan-400',
    skills: [
      { name: 'React', icon: FaReact, desc: 'Modern UI library for building fast, interactive interfaces.' },
      { name: 'TypeScript', icon: SiTypescript, desc: 'Typed superset of JavaScript for safer, scalable code.' },
      { name: 'Vue.js', icon: FaVuejs, desc: 'Progressive framework for building user interfaces.' },
      { name: 'CSS3/Sass', icon: FaCss3Alt, desc: 'Styling web pages with advanced features and pre-processing.' },
      { name: 'Tailwind', icon: SiTailwindcss, desc: 'Utility-first CSS framework for rapid UI development.' },
      { name: 'Sass', icon: FaSass, desc: 'CSS preprocessor for cleaner, more maintainable styles.' },
      { name: 'HTML5', icon: FaHtml5, desc: 'Markup language for structuring web content.' },
      { name: 'JavaScript', icon: FaJs, desc: 'Core scripting language of the web.' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-purple-500 to-yellow-400',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, desc: 'JavaScript runtime for scalable server-side applications.' },
      { name: 'Express', icon: SiExpress, desc: 'Minimal and flexible Node.js web application framework.' },
      { name: 'Python', icon: FaPython, desc: 'Versatile language for backend, scripting, and data science.' },
      { name: 'MongoDB', icon: SiMongodb, desc: 'NoSQL database for flexible, scalable data storage.' },
      { name: 'PostgreSQL', icon: SiPostgresql, desc: 'Powerful open-source relational database.' },
      { name: 'Database', icon: FaDatabase, desc: 'General experience with SQL and NoSQL databases.' },
    ],
  },
  {
    title: 'Tools',
    color: 'from-cyan-500 to-fuchsia-400',
    skills: [
      { name: 'Git', icon: FaGitAlt, desc: 'Version control for tracking and collaborating on code.' },
      { name: 'Docker', icon: FaDocker, desc: 'Containerization for consistent development and deployment.' },
      { name: 'AWS', icon: FaAws, desc: 'Cloud platform for scalable infrastructure and services.' },
      { name: 'Jest', icon: FaJs, desc: 'JavaScript testing framework for reliable code.' },
      { name: 'Webpack', icon: SiWebpack, desc: 'Module bundler for modern JavaScript applications.' },
      { name: 'NPM', icon: FaNpm, desc: 'Node package manager for JavaScript projects.' },
      { name: 'Yarn', icon: FaYarn, desc: 'Fast, reliable, and secure dependency management.' },
      { name: 'Github', icon: FaGithub, desc: 'Code hosting and collaboration platform.' },
      { name: 'LinkedIn', icon: FaLinkedin, desc: 'Professional networking and portfolio.' },
      { name: 'Email', icon: FaEnvelope, desc: 'Professional communication and contact.' },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="pixel-text-3d text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          SKILLS
        </h2>
        <div className="flex flex-col gap-16">
          {SKILL_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className={`text-xl font-bold text-center mb-8 bg-gradient-to-r ${section.color} text-transparent bg-clip-text`}>{section.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                {section.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="relative group w-44 h-44 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-700/90 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110 animate-float"
                      style={{ animationDelay: `${Math.random() * 1.5}s` }}
                    >
                      <div className="text-5xl mb-3 text-cyan-600 dark:text-cyan-400 drop-shadow-lg animate-dangle">
                        <Icon />
                      </div>
                      <span className="text-sm text-slate-800 dark:text-white font-bold text-center">{skill.name}</span>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-3rem] w-56 p-3 rounded-lg bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-300 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-[9999] text-center font-semibold border border-slate-300 dark:border-slate-700">
                        {skill.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
        @keyframes dangle {
          0% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }
        .animate-dangle {
          animation: dangle 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};