"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Counter from "@/components/ui/Counter";
import { hero, profile } from "@/data/story";

const ease = [0.22, 1, 0.36, 1] as const;

function Portrait() {
  const [src, setSrc] = useState(profile.photo);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-iris to-coral shadow-lift">
      {failed ? (
        <div className="grid h-full w-full place-items-center">
          <span className="font-display text-7xl text-white">{profile.initials}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`Portrait of ${profile.name}`}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top"
          onError={() => {
            if (src !== profile.photoFallback) setSrc(profile.photoFallback);
            else setFailed(true);
          }}
        />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-8 pt-24 sm:pb-10 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-iris/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-coral/15 blur-3xl"
      />

      <div className="container-x">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_15rem] lg:grid-cols-[1fr_17rem] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-line bg-paper px-3 py-1.5 text-sm">
              <span className="inline-flex items-center gap-2 font-medium">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[#22c55e]" aria-hidden />
                {profile.company}
              </span>
              <span className="inline-flex items-center gap-1 text-muted">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {profile.location}
              </span>
            </p>

            <h1 className="display-lg mt-5">{profile.name}</h1>
            <p className="mt-3 font-display text-xl leading-snug tracking-tight text-iris-deep sm:text-2xl">
              {profile.role}
            </p>
            <p className="lede mt-4 max-w-2xl">{hero.pitch}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#vibrant" className="btn btn-primary">
                See my work at Vibrant America
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Download className="h-4 w-4" aria-hidden />
                Résumé
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !px-4"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost !px-4" aria-label="Email">
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Background">
              {hero.chips.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="hidden w-full md:block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <Portrait />
          </motion.div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Headline numbers">
          {hero.stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.07, ease }}
              className="card !rounded-2xl px-4 py-4 sm:px-5"
            >
              <p className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} duration={1.2} />
              </p>
              <p className="mt-2 text-xs leading-snug text-muted sm:text-sm">{s.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
