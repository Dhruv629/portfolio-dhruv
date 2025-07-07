import React from 'react';
import { User, Code, Briefcase, Mail, Home } from 'lucide-react';

export const Header: React.FC = () => {
  const menuItems = [
    { id: 'home', label: 'HOME', icon: Home, color: 'bg-cyan-500' },
    { id: 'about', label: 'ABOUT', icon: User, color: 'bg-fuchsia-500' },
    { id: 'projects', label: 'PROJECTS', icon: Briefcase, color: 'bg-yellow-500' },
    { id: 'skills', label: 'SKILLS', icon: Code, color: 'bg-purple-500' },
    { id: 'contact', label: 'CONTACT', icon: Mail, color: 'bg-pink-500' },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur z-50 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`
                  pixel-button ${item.color}
                  text-white font-bold py-3 px-6 text-sm
                  transition-all duration-200 hover:scale-105
                  flex items-center gap-2
                `}
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};