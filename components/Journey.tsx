"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, GraduationCap } from "lucide-react";
import { useRef } from "react";
import ChapterHeading from "@/components/ui/ChapterHeading";
import Reveal from "@/components/ui/Reveal";
import { accents } from "@/lib/accent";
import { journey, type JourneyBeat } from "@/data/story";

function BeatCard({ beat, index, total }: { beat: JourneyBeat; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const a = accents[beat.accent];
  const isBreak = beat.kind === "intermission";

  return (
    <div
      ref={ref}
      className={`tall:sticky ${index === total - 1 ? "" : "mb-8 tall:mb-[48vh]"}`}
      style={{ top: `calc(5.75rem + ${index * 1.1}rem)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`relative overflow-hidden rounded-[1.75rem] border ${
          isBreak
            ? "border-dashed border-ink/40 bg-sun-soft"
            : "border-line bg-paper shadow-lift"
        }`}
      >
        <div className={`h-1.5 w-full ${a.bg}`} aria-hidden />

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:p-10">
          {/* Left: the slate */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] ${a.soft} ${a.text}`}
              >
                {isBreak && <GraduationCap className="h-3.5 w-3.5" aria-hidden />}
                {beat.act}
              </span>
              <span className="eyebrow">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-6 font-mono text-sm text-muted">{beat.period}</p>
            <h3 className="display-md mt-2">{beat.role}</h3>
            <p className="mt-2 text-base font-medium">{beat.company}</p>
            <p className="text-sm text-muted">{beat.location}</p>

            <dl className="mt-8 md:mt-auto md:pt-8">
              <dt className="sr-only">{beat.metric.label}</dt>
              <dd>
                <span className={`block font-display text-5xl leading-none tracking-tight sm:text-6xl ${a.text}`}>
                  {beat.metric.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-muted">{beat.metric.label}</span>
              </dd>
            </dl>
          </div>

          {/* Right: the scene */}
          <div className="flex flex-col">
            <p className="font-display text-xl leading-snug tracking-tight sm:text-2xl">{beat.headline}</p>
            <ul className="mt-5 space-y-3">
              {beat.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-soft">
                  <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${a.dot}`} aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs leading-relaxed text-muted md:mt-auto md:pt-6">
              <span className="sr-only">Tools: </span>
              {beat.tools.join(" · ")}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="section-y relative bg-gradient-to-b from-transparent via-[#f3ede2] to-transparent">
      <div className="container-x">
        <ChapterHeading
          no="02"
          label="Rising action"
          title={
            <>
              Four stops. One thread:{" "}
              <span className="gradient-text italic">make the data useful.</span>
            </>
          }
          kicker="Each role taught me a different part of the craft, from reporting and automation to forecasting and operations."
        />

        <div className="relative mt-14 sm:mt-20">
          {journey.map((beat, i) => (
            <BeatCard key={beat.company + beat.period} beat={beat} index={i} total={journey.length} />
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center text-center sm:mt-24">
          <p className="eyebrow">Cut to: August 2025</p>
          <p className="display-md mt-4 max-w-xl">Everything so far was preparation for the main feature.</p>
          <a
            href="#vibrant"
            className="btn btn-primary mt-8"
            aria-label="Continue to chapter three, Vibrant America"
          >
            Continue the story
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
