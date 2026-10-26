import Credits from "@/components/Credits";
import Impact from "@/components/Impact";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import Origin from "@/components/Origin";
import Toolkit from "@/components/Toolkit";
import VibrantAmerica from "@/components/VibrantAmerica";

export default function Home() {
  return (
    <>
      <a
        href="#origin"
        className="sr-only z-[80] rounded-full bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to the story
      </a>
      <Navbar />
      <main>
        <Intro />
        <Origin />
        <Journey />
        <VibrantAmerica />
        <Impact />
        <Toolkit />
        <Credits />
      </main>
    </>
  );
}
