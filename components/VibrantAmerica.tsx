"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SceneVisual from "@/components/vibrant/Visuals";
import { accents } from "@/lib/accent";
import { vibrant, vibrantScenes } from "@/data/story";

export default function VibrantAmerica() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scene = vibrantScenes[active];
  const a = accents[scene.accent];

  const select = (index: number, focus = false) => {
    const next = (index + vibrantScenes.length) % vibrantScenes.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        select(active + 1, true);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        select(active - 1, true);
        break;
      case "Home":
        e.preventDefault();
        select(0, true);
        break;
      case "End":
        e.preventDefault();
        select(vibrantScenes.length - 1, true);
        break;
    }
  };

  const blocks = [
    { label: "Problem", body: scene.situation },
    { label: "Action", body: scene.action },
    { label: "Result", body: scene.result },
  ];

  return (
    <section id="vibrant" className="section-y relative">
      <div className="container-x">
        <SectionHeading eyebrow="Current role" title="Vibrant America" />

        {/* Role card */}
        <Reveal className="mt-6">
          <div className="card p-5 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div className="min-w-0">
                <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">{vibrant.role}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                  <span className="font-mono">{vibrant.period}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {vibrant.location}
                  </span>
                  <span>{vibrant.context}</span>
                </p>
              </div>
            </div>

            <ul className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {vibrant.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-iris" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Explorer */}
        <Reveal className="mt-8">
          <p className="eyebrow">What I built here</p>
          <div className="mt-3 grid gap-4 xl:grid-cols-[13.5rem_1fr] xl:gap-6">
            <div
              role="tablist"
              aria-label="Vibrant America projects"
              aria-orientation="horizontal"
              onKeyDown={onKeyDown}
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 xl:mx-0 xl:flex-col xl:gap-1.5 xl:overflow-visible xl:px-0 xl:pb-0"
            >
              {vibrantScenes.map((s, i) => {
                const selected = i === active;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    id={`vtab-${s.id}`}
                    aria-selected={selected}
                    aria-controls="vpanel"
                    tabIndex={selected ? 0 : -1}
                    type="button"
                    onClick={() => select(i)}
                    className={`flex shrink-0 items-center justify-between gap-3 rounded-full border px-4 py-2 text-left text-sm font-medium transition-colors xl:rounded-2xl xl:py-2.5 ${
                      selected
                        ? "border-ink bg-ink text-canvas"
                        : "border-line bg-paper text-ink-soft hover:border-ink/40"
                    }`}
                  >
                    <span className="whitespace-nowrap">{s.tab}</span>
                    <span
                      className={`hidden font-mono text-xs xl:block ${selected ? "text-white/70" : "text-muted"}`}
                      aria-hidden
                    >
                      {s.metric.value}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id="vpanel"
              aria-labelledby={`vtab-${scene.id}`}
              tabIndex={0}
              className="card min-w-0 overflow-hidden !rounded-3xl p-4 sm:p-6"
            >
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-7"
              >
                <div className="min-w-0">
                  <span className="inline-flex items-baseline gap-2 rounded-full border border-line bg-canvas px-3 py-1">
                    <span className="font-display text-lg font-semibold leading-none">{scene.metric.value}</span>
                    <span className="text-xs text-muted">{scene.metric.label}</span>
                  </span>
                  <h3 className="display-md mt-3">{scene.title}</h3>

                  <dl className="mt-4 space-y-3">
                    {blocks.map((b) => (
                      <div key={b.label} className="grid gap-0.5 sm:grid-cols-[4.75rem_1fr] sm:gap-3">
                        <dt className={`font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] ${a.text} sm:pt-1`}>
                          {b.label}
                        </dt>
                        <dd className="text-[0.92rem] leading-relaxed text-ink-soft">{b.body}</dd>
                      </div>
                    ))}
                  </dl>

                  {scene.caveat && <p className="mt-3 text-sm text-muted">Note: {scene.caveat}</p>}

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools used">
                    {scene.tools.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-0 lg:h-[35rem]">
                  <SceneVisual id={scene.id} />
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
