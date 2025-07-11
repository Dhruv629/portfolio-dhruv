import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="pixel-text-3d text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          CONTACT
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="pixel-card bg-white/90 dark:bg-slate-700/90 p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-4 md:mb-6">GET IN TOUCH</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-2 text-sm">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white pixel-border focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-2 text-sm">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white pixel-border focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-2 text-sm">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 md:p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white pixel-border focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none text-sm"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="pixel-button bg-purple-400 dark:bg-purple-500 text-white py-2 md:py-3 px-4 md:px-6 flex items-center gap-2 hover:scale-105 transition-transform text-sm"
              >
                <Send size={14} className="md:w-4 md:h-4" />
                SEND MESSAGE
              </button>
            </form>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="pixel-card bg-white/90 dark:bg-slate-700/90 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <MapPin className="text-fuchsia-400" size={20} />
                <h4 className="text-lg md:text-xl font-bold text-cyan-600 dark:text-cyan-400">LOCATION</h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm">India</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Available for remote work</p>
            </div>
            
            <div className="pixel-card bg-white/90 dark:bg-slate-700/90 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Mail className="text-purple-400" size={20} />
                <h4 className="text-lg md:text-xl font-bold text-cyan-600 dark:text-cyan-400">EMAIL</h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm">dhruv@developer.com</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Response within 24 hours</p>
            </div>
            
            <div className="pixel-card bg-white/90 dark:bg-slate-700/90 p-4 md:p-6">
              <h4 className="text-lg md:text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3 md:mb-4">SOCIAL LINKS</h4>
              <div className="flex gap-2 md:gap-3">
                <button className="pixel-button bg-fuchsia-400 dark:bg-fuchsia-500 text-white py-1 md:py-2 px-2 md:px-4 text-xs md:text-sm hover:scale-105 transition-transform">
                  LINKEDIN
                </button>
                <button className="pixel-button bg-cyan-400 dark:bg-cyan-500 text-white py-1 md:py-2 px-2 md:px-4 text-xs md:text-sm hover:scale-105 transition-transform">
                  TWITTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};