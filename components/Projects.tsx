"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { accents } from "@/lib/accent";
import { moreWork, sideProjects } from "@/data/story";

export default function Projects() {
  return (
    <section id="projects" className="section-y relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="More work"
          title="Other projects"
          kicker="Each tag says how solid the result is: measured, modeled, live or designed."
        />

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((w, i) => {
            const a = accents[w.accent];
            return (
              <li key={w.title} className="flex">
                <Reveal delay={(i % 3) * 0.05} y={16} className="flex w-full">
                  <article className="card flex w-full flex-col !rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="min-w-0 font-display text-lg leading-tight tracking-tight">{w.title}</h3>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] ${a.soft} ${a.text}`}
                      >
                        {w.status}
                      </span>
                    </div>
                    <p className={`mt-3 font-display text-3xl leading-none tracking-tight ${a.text}`}>{w.stat}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.line}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <h3 className="eyebrow mt-8">Side projects from grad school</h3>
        <ul className="mt-3 grid gap-4 sm:grid-cols-3">
          {sideProjects.map((p) => (
            <li key={p.title} className="rounded-2xl border border-line bg-paper p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="font-display text-lg leading-tight tracking-tight">{p.title}</h4>
                  <p className="mt-0.5 text-sm text-muted">{p.subtitle}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-display text-2xl leading-none text-iris-deep">{p.metric.value}</p>
                  <p className="mt-1 text-[0.68rem] text-muted">{p.metric.label}</p>
                </div>
              </div>
              <p className="mt-3 font-mono text-[0.7rem] text-muted">{p.tools.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
