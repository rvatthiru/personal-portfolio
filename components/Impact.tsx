"use client";

import { motion } from "framer-motion";
import ChapterHeading from "@/components/ui/ChapterHeading";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { accents } from "@/lib/accent";
import { impact } from "@/data/story";

export default function Impact() {
  return (
    <section id="impact" className="section-y relative">
      <div className="container-x">
        <ChapterHeading
          no="04"
          label="By the numbers"
          title={
            <>
              The <span className="gradient-text italic">highlight reel.</span>
            </>
          }
          kicker={impact.lede}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impact.counters.map((c, i) => {
            const a = accents[c.accent];
            return (
              <motion.li
                key={c.label + c.where}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="card group relative overflow-hidden p-6"
              >
                <div
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50 ${a.bg}`}
                />
                <p className={`relative font-display text-5xl font-medium leading-none tracking-tight xl:text-6xl ${a.text}`}>
                  <Counter
                    to={c.value}
                    prefix={c.prefix}
                    suffix={c.suffix}
                    decimals={"decimals" in c ? c.decimals : 0}
                    replay
                  />
                </p>
                <p className="relative mt-4 text-base leading-snug text-ink-soft">{c.label}</p>
                <p className="relative mt-5 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} aria-hidden />
                  {c.where}
                </p>
              </motion.li>
            );
          })}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">{impact.fineprint}</p>
        </Reveal>
      </div>
    </section>
  );
}
