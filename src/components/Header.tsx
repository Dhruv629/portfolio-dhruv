import React from 'react';
import { User, Code, Briefcase, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  const menuItems = [
    // Removed HOME
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
    <div className="flex flex-wrap justify-end gap-4">
      {menuItems.map((item) => {
        const Icon = item.icon;
        let colorClass = '';
        if (item.color === 'bg-fuchsia-500') colorClass = 'bg-fuchsia-400 dark:bg-fuchsia-500';
        if (item.color === 'bg-yellow-500') colorClass = 'bg-yellow-400 dark:bg-yellow-500';
        if (item.color === 'bg-purple-500') colorClass = 'bg-purple-400 dark:bg-purple-500';
        if (item.color === 'bg-pink-500') colorClass = 'bg-pink-400 dark:bg-pink-500';
        return (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`
              pixel-button ${colorClass}
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
  );
};