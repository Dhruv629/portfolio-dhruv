import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { PixelGrid } from './components/PixelGrid';
import { LeetCodeSection } from './components/LeetCodeSection';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <PixelGrid />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-4 pt-24 space-y-10 pb-0">
          <section id="home"><Hero /></section>
          <div className="my-8 border-t-4 border-cyan-500 rounded-full"></div>
          <section id="leetcode"><LeetCodeSection /></section>
          <div className="my-8 border-t-4 border-fuchsia-500 rounded-full"></div>
          <section id="projects"><Projects /></section>
          <div className="my-8 border-t-4 border-yellow-500 rounded-full"></div>
          <section id="about"><About /></section>
          <div className="my-8 border-t-4 border-purple-500 rounded-full"></div>
          <section id="skills"><Skills /></section>
          <div className="my-8 border-t-4 border-purple-500 rounded-full"></div>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </div>
  );
}

export default App;