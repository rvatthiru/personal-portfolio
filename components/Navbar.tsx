"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { chapters, profile } from "@/data/story";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  // Track which chapter is on screen.
  useEffect(() => {
    const targets = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Reading progress, like a film timeline. */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-iris via-[#9333ea] to-coral"
      />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-4">
        <nav
          aria-label="Primary"
          className={`pointer-events-auto relative flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-500 sm:px-4 ${
            scrolled
              ? "border-line bg-canvas/85 shadow-card"
              : "border-transparent bg-canvas/40"
          }`}
        >
          <a href="#top" className="flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-canvas">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {chapters.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  aria-current={active === c.id ? "true" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    active === c.id ? "text-canvas" : "text-muted hover:text-ink"
                  }`}
                >
                  {active === c.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {c.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !min-h-0 !px-4 !py-2 text-sm"
            >
              <Download className="h-4 w-4" aria-hidden />
              <span>Résumé</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-line bg-canvas p-3 shadow-lift lg:hidden"
              >
                <ul className="grid gap-1">
                  {chapters.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium hover:bg-paper"
                      >
                        <span>{c.label}</span>
                        <span className="eyebrow">Ch. {c.no}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
