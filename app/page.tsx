import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import VibrantAmerica from "@/components/VibrantAmerica";

export default function Home() {
  return (
    <>
      <a
        href="#vibrant"
        className="sr-only z-[80] rounded-full bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to Vibrant America
      </a>
      <Navbar />
      <main>
        <Hero />
        <VibrantAmerica />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
