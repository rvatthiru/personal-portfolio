"use client";

import { GraduationCap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { accents } from "@/lib/accent";
import { experience } from "@/data/story";

export default function Experience() {
  return (
    <section id="experience" className="section-y relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Before Vibrant America"
          title="Experience and education"
          kicker="Most recent first. Each step added a piece: reporting, partner analytics, forecasting, sales coverage."
        />

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {experience.map((r, i) => {
            const a = accents[r.accent];
            const isEdu = r.kind === "education";
            return (
              <li key={r.company + r.period} className="flex">
                <Reveal delay={(i % 2) * 0.06} y={16} className="flex w-full">
                  <article
                    className={`relative flex w-full flex-col overflow-hidden rounded-2xl border p-5 sm:p-6 ${
                      isEdu ? "border-dashed border-ink/35 bg-sun-soft" : "border-line bg-paper shadow-card"
                    }`}
                  >
                    <span className={`absolute inset-y-0 left-0 w-1 ${a.bg}`} aria-hidden />

                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 font-mono text-xs text-muted">
                          {isEdu && <GraduationCap className="h-3.5 w-3.5" aria-hidden />}
                          {r.period}
                        </p>
                        <h3 className="mt-1 font-display text-xl leading-tight tracking-tight">{r.role}</h3>
                        <p className="mt-0.5 text-sm text-muted">
                          <span className="font-medium text-ink">{r.company}</span> · {r.location}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className={`font-display text-2xl leading-none tracking-tight ${a.text}`}>
                          {r.metric.value}
                        </p>
                        <p className="mt-1 max-w-[7rem] text-[0.7rem] leading-snug text-muted">{r.metric.label}</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 pt-1 font-mono text-[0.7rem] leading-relaxed text-muted md:mt-auto">
                      <span className="sr-only">Tools: </span>
                      {r.tools.join(" · ")}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
