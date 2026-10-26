"use client";

import { motion } from "framer-motion";

type ChapterHeadingProps = {
  no: string;
  label: string;
  title: React.ReactNode;
  kicker?: React.ReactNode;
  className?: string;
};

/** The "slate" that opens every chapter: a clapperboard strip, chapter number and title. */
export default function ChapterHeading({ no, label, title, kicker, className }: ChapterHeadingProps) {
  return (
    <header className={className}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-fit min-w-[15rem] max-w-full rounded-md border border-ink bg-paper shadow-card"
      >
        <div className="clapper rounded-b-none border-0 border-b border-ink" />
        <div className="flex items-center justify-between gap-4 px-3 py-2 sm:gap-6">
          <span className="eyebrow whitespace-nowrap text-ink">Chapter {no}</span>
          <span className="eyebrow whitespace-nowrap">{label}</span>
        </div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="display-lg mt-6"
      >
        {title}
      </motion.h2>
      {kicker ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lede mt-5 max-w-2xl"
        >
          {kicker}
        </motion.p>
      ) : null}
    </header>
  );
}
