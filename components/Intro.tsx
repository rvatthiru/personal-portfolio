"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Download, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Counter from "@/components/ui/Counter";
import { filmStrip, profile, trailer } from "@/data/story";

const ease = [0.22, 1, 0.36, 1] as const;

function Typewriter({ text, delay = 1.1 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            if (interval) clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, 38);
    }, delay * 1000);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, reduce]);

  return (
    <p className="font-mono text-sm text-ink sm:text-base" aria-label={text}>
      <span aria-hidden>
        {text.slice(0, count)}
        <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] bg-iris" />
      </span>
    </p>
  );
}

function Poster() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % trailer.stats.length), 3600);
    return () => clearInterval(id);
  }, []);

  const stat = trailer.stats[index];

  return (
    <div className="film-frame mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative overflow-hidden rounded-[0.7rem] bg-ink p-6 text-canvas sm:p-8">
        {/* glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-iris/60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-coral/40 blur-3xl"
        />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em]">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[#4ade80]" />
              Now showing
            </span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/70">
              2025 – Present
            </span>
          </div>

          <h2 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
            {profile.company}
          </h2>
          <p className="mt-2 text-sm text-white/75 sm:text-base">{profile.role}</p>

          <div className="mt-10 min-h-[11rem] border-t border-white/15 pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl">
                  <Counter
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1.2}
                    className="bg-gradient-to-r from-[#a5b4fc] via-[#f0abfc] to-[#fdba74] bg-clip-text text-transparent"
                  />
                </div>
                <p className="mt-4 max-w-[18rem] text-sm leading-relaxed text-white/80 sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-end justify-between gap-4">
            <div className="flex items-end gap-1.5" aria-hidden>
              {[0.35, 0.55, 0.42, 0.7, 0.58, 0.85, 1].map((h, i) => (
                <motion.span
                  key={i}
                  className="w-3 origin-bottom rounded-sm bg-gradient-to-t from-iris to-coral sm:w-4"
                  style={{ height: `${h * 3.5}rem` }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.9, delay: 1.2 + i * 0.08, ease }}
                />
              ))}
            </div>
            <p className="max-w-[10rem] text-right font-mono text-[0.68rem] uppercase leading-snug tracking-[0.16em] text-white/60">
              Based on a true data pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const posterY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const lines = ["Making numbers", "decisive."];

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh flex-col overflow-hidden pt-28 sm:pt-32"
    >
      {/* Ambient light */}
      <motion.div aria-hidden style={{ y: blobY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute -left-24 top-24 h-80 w-80 rounded-full bg-iris/25 blur-3xl" />
        <div className="animate-float absolute right-[-6rem] top-40 h-96 w-96 rounded-full bg-coral/25 blur-3xl [animation-delay:-3s]" />
        <div className="animate-float absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-lagoon/20 blur-3xl [animation-delay:-5s]" />
      </motion.div>

      <div className="container-x grid flex-1 items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div style={{ y: copyY, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-coral" />
            <span>A {profile.name} production</span>
          </motion.p>

          <h1 className="display-xl mt-6">
            {lines.map((line, li) => (
              <span key={line} className="block overflow-hidden pb-[0.12em]">
                <motion.span
                  className={`block ${li === 1 ? "gradient-text italic" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + li * 0.18, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-6 min-h-[1.75rem]">
            <Typewriter text={trailer.tagline} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="lede mt-6 max-w-xl"
          >
            {trailer.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#origin" className="btn btn-primary">
              <Play className="h-4 w-4 fill-current" aria-hidden />
              Play the story
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Download className="h-4 w-4" aria-hidden />
              Download résumé
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: posterY }}
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
        >
          <Poster />
        </motion.div>
      </div>

      {/* Film strip of companies */}
      <div className="relative border-y border-ink bg-ink py-3 text-canvas" aria-label="Career timeline">
        <div className="perforations absolute inset-x-0 top-0 opacity-30" aria-hidden />
        <div className="overflow-hidden py-3">
          <div className="animate-marquee flex w-max" aria-hidden>
            {[...filmStrip, ...filmStrip, ...filmStrip, ...filmStrip].map((f, i) => (
              <div
                key={i}
                className="mx-1.5 flex shrink-0 items-baseline gap-3 rounded-md border border-white/20 px-5 py-3"
              >
                <span className="font-mono text-xs text-white/60">{f.year}</span>
                <span className="font-display text-xl">{f.name}</span>
              </div>
            ))}
          </div>
          <ul className="sr-only">
            {filmStrip.map((f) => (
              <li key={f.name}>
                {f.year}: {f.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="perforations absolute inset-x-0 bottom-0 opacity-30" aria-hidden />
      </div>

    </section>
  );
}
