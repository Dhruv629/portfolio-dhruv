import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { PixelGrid } from './components/PixelGrid';
import { Header } from './components/Header';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HERO_WIDTH = 480; // px

function App() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <div className="min-h-screen relative overflow-hidden dark bg-slate-900">
      <Background />
      <PixelGrid />
      {/* Hero section - fixed on desktop, inline on mobile */}
      <aside
        className="fixed top-0 left-0 h-screen z-30 flex items-start hidden md:block"
        style={{ width: HERO_WIDTH, background: 'linear-gradient(135deg, rgba(34,193,195,0.12) 0%, rgba(253,187,45,0.10) 100%)' }}
      >
        {/* Subtle animated grid/scanline overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <PixelGrid />
          {/* CRT scanlines and flicker */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10 crt-effect"></div>
        </div>
        <div className="w-full p-8 relative z-10">
          <Hero />
        </div>
      </aside>
      {/* Mobile Hero section */}
      <div className="block md:hidden w-full py-4 relative z-10">
        {/* Mobile navigation in top-right of Hero */}
        <div className="absolute top-4 right-4 z-50">
          <Header />
        </div>
        <div className="container mx-auto px-4">
          <Hero />
        </div>
      </div>
      {/* Main content, full-width on mobile, with left margin on desktop */}
      <div className="relative z-10 md:ml-[480px]">
        {/* Desktop navigation in the top-right corner of main content */}
        <div className="flex justify-end pt-6 pr-6 items-center gap-4 hidden md:flex">
          <Header />
        </div>
        {/* Scroll indication arrows */}
        {showUp ? (
          <button
            onClick={scrollToTop}
            className="fixed top-6 right-8 z-50 bg-slate-800/80 hover:bg-slate-700 text-cyan-400 p-2 rounded-full shadow-lg transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={28} />
          </button>
        ) : (
          <button
            onClick={scrollToBottom}
            className="fixed bottom-6 right-8 z-50 bg-slate-800/80 hover:bg-slate-700 text-cyan-400 p-2 rounded-full shadow-lg transition-colors"
            aria-label="Scroll to bottom"
          >
            <ChevronDown size={28} />
          </button>
        )}
        <main className="container mx-auto px-4 py-4 pt-4 md:pt-24 space-y-4 pb-0">
          <div className="my-8 border-t-4 border-cyan-500 rounded-full md:hidden"></div>
          <section id="about"><About /></section>
          <div className="my-8 border-t-4 border-purple-500 rounded-full"></div>
          <section id="projects"><Projects /></section>
          <div className="my-8 border-t-4 border-yellow-500 rounded-full"></div>
          <section id="skills"><Skills /></section>
          <div className="my-8 border-t-4 border-purple-500 rounded-full"></div>
          <section id="contact"><Contact /></section>
        </main>
      </div>
      <style>{`
.crt-effect {
  background: repeating-linear-gradient(
    to bottom,
    rgba(0,0,0,0.08) 0px,
    rgba(0,0,0,0.08) 1px,
    transparent 1px,
    transparent 4px
  );
  animation: crt-flicker 1.5s infinite steps(2);
}
@keyframes crt-flicker {
  0%, 100% { opacity: 0.95; }
  10% { opacity: 0.97; }
  20% { opacity: 0.92; }
  30% { opacity: 0.98; }
  40% { opacity: 0.93; }
  50% { opacity: 0.96; }
  60% { opacity: 0.94; }
  70% { opacity: 0.99; }
  80% { opacity: 0.91; }
  90% { opacity: 0.96; }
}
`}</style>
    </div>
  );
}

export default App;