"use client";

import { motion } from "framer-motion";
import ChapterHeading from "@/components/ui/ChapterHeading";
import Reveal from "@/components/ui/Reveal";
import { accents } from "@/lib/accent";
import { moreWork, toolkit } from "@/data/story";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...toolkit.marquee].reverse() : toolkit.marquee;
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      aria-hidden
    >
      <div
        className="animate-marquee-slow flex w-max gap-3 py-1.5"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="shrink-0 rounded-full border border-ink/15 bg-paper px-5 py-2.5 font-display text-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="section-y relative bg-gradient-to-b from-transparent via-[#f3ede2] to-transparent">
      <div className="container-x">
        <ChapterHeading
          no="05"
          label="The toolkit"
          title={
            <>
              Props, sets and <span className="gradient-text italic">side quests.</span>
            </>
          }
          kicker="The tools I reach for, and a few short films I made on the side to keep learning."
        />

        <div className="mt-12" role="presentation">
          <MarqueeRow />
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {toolkit.groups.map((g, i) => {
            const a = accents[g.accent];
            return (
              <motion.li
                key={g.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card relative overflow-hidden p-6"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${a.bg}`} aria-hidden />
                <h3 className="font-display text-2xl tracking-tight">{g.name}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className={`rounded-full px-3 py-1.5 text-sm font-medium ${a.soft} ${a.text}`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-24">
          <Reveal>
            <p className="eyebrow">More at Vibrant America</p>
            <h3 className="display-md mt-3 max-w-2xl">Other projects behind the main feature.</h3>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreWork.map((w, i) => {
              const a = accents[w.accent];
              return (
                <motion.li
                  key={w.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="card flex flex-col p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="min-w-0 font-display text-xl leading-tight tracking-tight">{w.title}</h4>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] ${a.soft} ${a.text}`}
                    >
                      {w.status}
                    </span>
                  </div>
                  <p className={`mt-5 font-display text-4xl leading-none tracking-tight ${a.text}`}>{w.stat}</p>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">{w.line}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="eyebrow">Short films</p>
            <h3 className="display-md mt-3 max-w-2xl">Side quests that sharpened the craft.</h3>
          </Reveal>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {toolkit.sideQuests.map((q, i) => (
              <motion.li
                key={q.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="card flex flex-col p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="font-display text-2xl leading-tight tracking-tight">{q.title}</h4>
                    <p className="mt-1 text-sm text-muted">{q.subtitle}</p>
                  </div>
                </div>
                <p className="mt-6 font-display text-5xl leading-none tracking-tight text-iris-deep">{q.metric.value}</p>
                <p className="mt-1 text-sm text-muted">{q.metric.label}</p>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">{q.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2 pt-1" aria-label="Tools">
                  {q.tools.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
