'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Impact from '@/components/Impact';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Impact />
        <Contact />
      </main>
    </>
  );
}

