'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <InteractiveBackground />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

