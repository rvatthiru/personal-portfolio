"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChapterHeading from "@/components/ui/ChapterHeading";
import InViewMount from "@/components/ui/InViewMount";
import Reveal from "@/components/ui/Reveal";
import SceneVisual from "@/components/vibrant/Visuals";
import { accents } from "@/lib/accent";
import { profile, vibrant, vibrantScenes, type VibrantScene } from "@/data/story";

type SceneTextProps = {
  scene: VibrantScene;
  active: boolean;
  register: (el: HTMLElement | null) => void;
};

function SceneText({ scene, active, register }: SceneTextProps) {
  const a = accents[scene.accent];

  const blocks = [
    { label: "Problem", body: scene.situation },
    { label: "Action", body: scene.action },
    { label: "Result", body: scene.result },
  ];

  return (
    <article
      ref={register}
      id={`scene-${scene.id}`}
      aria-labelledby={`scene-title-${scene.id}`}
      data-scene={scene.id}
      className={`flex items-center py-10 transition-opacity duration-500 stage:min-h-[85vh] stage:py-0 ${
        active ? "stage:opacity-100" : "stage:opacity-30"
      }`}
    >
      <div className="w-full">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] ${a.soft} ${a.text}`}
          >
            {scene.act}
          </span>
          <span className="inline-flex items-baseline gap-2 rounded-full border border-line bg-paper px-3 py-1">
            <span className="font-display text-lg font-semibold leading-none">{scene.metric.value}</span>
            <span className="text-xs text-muted">{scene.metric.label}</span>
          </span>
        </div>

        <h3 id={`scene-title-${scene.id}`} className="display-md mt-5">
          {scene.title}
        </h3>

        {/* Inline visual for screens where the sticky stage is not shown. */}
        <InViewMount className="mt-6 min-h-[24rem] stage:hidden">
          <div className="h-full min-h-[24rem]">
            <SceneVisual id={scene.id} />
          </div>
        </InViewMount>

        <dl className="mt-7 space-y-4">
          {blocks.map((b) => (
            <div key={b.label} className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
              <dt className={`font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] ${a.text} sm:pt-1`}>
                {b.label}
              </dt>
              <dd className="text-[0.98rem] leading-relaxed text-ink-soft">{b.body}</dd>
            </div>
          ))}
        </dl>

        {scene.caveat && <p className="mt-4 text-sm text-muted">Note: {scene.caveat}</p>}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
          {scene.tools.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function VibrantAmerica() {
  const [active, setActive] = useState(0);
  const sceneEls = useRef<(HTMLElement | null)[]>([]);
  const current = vibrantScenes[active];
  const a = accents[current.accent];

  /**
   * One scroll-position picker instead of per-scene observers: the active scene is the one
   * whose box contains the viewport midpoint (or the nearest one when the midpoint is outside
   * the list). It depends only on where the page is, so scrolling up and down always agree.
   */
  useEffect(() => {
    let frame = 0;

    const pick = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDistance = Infinity;

      sceneEls.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const distance = r.top > mid ? r.top - mid : r.bottom < mid ? mid - r.bottom : 0;
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });

      setActive((prev) => (prev === best ? prev : best));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section
      id="vibrant"
      className="section-y relative bg-gradient-to-b from-transparent via-iris-soft/60 to-transparent"
    >
      <div className="container-x">
        <ChapterHeading
          no="03"
          label="The main feature"
          title={
            <>
              Vibrant America: <span className="gradient-text italic">one set of numbers.</span>
            </>
          }
        />

        {/* Title card for the feature presentation */}
        <Reveal className="mt-12">
          <div className="card relative overflow-hidden p-6 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-iris/15 blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas">
                  <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[#4ade80]" />
                  Now showing
                </span>
                <h3 className="display-md mt-5">{vibrant.role}</h3>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                  <span className="font-mono">{vibrant.period}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {vibrant.location}
                  </span>
                  <span className="font-medium text-ink">{profile.company}</span>
                </p>
                <p className="lede mt-6">{vibrant.summary}</p>
                <ul className="mt-6 space-y-3">
                  {vibrant.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-soft">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-iris" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1" aria-label="Headline numbers">
                {vibrant.chips.map((c) => (
                  <li key={c.label} className="rounded-2xl border border-line bg-canvas px-5 py-4">
                    <p className="font-display text-4xl leading-none tracking-tight">{c.value}</p>
                    <p className="mt-2 text-sm text-muted">{c.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Scenes: text scrolls, visual stays pinned on large screens. */}
        <div className="mt-16 stage:mt-20 stage:grid stage:grid-cols-12 stage:gap-12">
          <div className="stage:col-span-5">
            {vibrantScenes.map((scene, i) => (
              <SceneText
                key={scene.id}
                scene={scene}
                active={active === i}
                register={(el) => {
                  sceneEls.current[i] = el;
                }}
              />
            ))}
          </div>

          <div className="hidden stage:col-span-7 stage:block">
            <div
              className="sticky top-24 flex h-[calc(100dvh-7.5rem)] max-h-[46rem] flex-col"
              data-active-scene={current.id}
            >
              {/* Keyed remount (no exit animation) so rapid scrolling can never leave the stage empty. */}
              <motion.div
                key={current.id}
                className="min-h-0 flex-1"
                initial={{ opacity: 0, scale: 0.97, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <SceneVisual id={current.id} />
              </motion.div>

              <div className="mt-3 flex shrink-0 items-center justify-between gap-4" aria-hidden>
                <div className="flex items-center gap-2">
                  {vibrantScenes.map((s, i) => (
                    <span
                      key={s.id}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === active ? `w-8 ${a.bg}` : "w-3 bg-ink/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="eyebrow">
                  Scene {String(active + 1).padStart(2, "0")} / {String(vibrantScenes.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="mt-16 flex flex-col items-center text-center sm:mt-24">
          <p className="eyebrow">The ending</p>
          <p className="display-md mt-4 max-w-2xl">{vibrant.closing}</p>
          <a href="#impact" className="btn btn-primary mt-8">
            See the numbers
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
