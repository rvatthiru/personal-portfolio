"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ChapterHeading from "@/components/ui/ChapterHeading";
import Reveal from "@/components/ui/Reveal";
import { origin, profile } from "@/data/story";

function Portrait() {
  const [src, setSrc] = useState(profile.photo);
  const [failed, setFailed] = useState(false);

  return (
    <div className="film-frame mx-auto w-full max-w-sm lg:max-w-md">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[0.7rem] bg-gradient-to-br from-iris to-coral">
        {failed ? (
          <div className="grid h-full w-full place-items-center">
            <span className="font-display text-7xl text-white">{profile.initials}</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`Portrait of ${profile.name}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-top"
            onError={() => {
              if (src !== profile.photoFallback) setSrc(profile.photoFallback);
              else setFailed(true);
            }}
          />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-canvas">
          <div>
            <p className="font-display text-xl leading-tight">{profile.name}</p>
            <p className="text-xs text-white/80">{profile.role}</p>
          </div>
          <span className="rounded-full border border-white/40 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em]">
            Lead role
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Origin() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section ref={ref} id="origin" className="section-y relative">
      <div className="container-x">
        <ChapterHeading
          no="01"
          label="Origin"
          title={
            <>
              Every story starts with a <span className="gradient-text italic">question.</span>
            </>
          }
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <blockquote className="relative border-l-4 border-coral pl-5 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.15] tracking-tight">
                &ldquo;{origin.quote}&rdquo;
              </blockquote>
            </Reveal>

            <div className="mt-8 space-y-5">
              {origin.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 * (i + 1)}>
                  <p className="lede">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {origin.facts.map((f, i) => (
                <Reveal key={f.k} delay={0.1 * i}>
                  <div className="card h-full p-5">
                    <p className="eyebrow">{f.k}</p>
                    <p className="mt-2 font-display text-3xl leading-none tracking-tight">{f.v}</p>
                    <p className="mt-2 text-sm leading-snug text-muted">{f.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <motion.div style={{ y: portraitY }}>
            <Reveal x={30} y={0}>
              <Portrait />
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
