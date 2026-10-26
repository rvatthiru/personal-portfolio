"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Download, Linkedin, Mail, Send, TriangleAlert } from "lucide-react";
import { useState } from "react";
import ChapterHeading from "@/components/ui/ChapterHeading";
import Reveal from "@/components/ui/Reveal";
import { credits, filmStrip, profile } from "@/data/story";

// EmailJS public identifiers are safe to ship to the browser. Override them with
// NEXT_PUBLIC_EMAILJS_* in `.env.local` / Vercel if you rotate them.
const EMAILJS = {
  service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_cyw18x4",
  template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_mkjbt4r",
  key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "XE70Bku_mFTQgjj_I",
};

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-base text-ink placeholder:text-muted/70 transition focus:border-iris focus:outline-none focus:ring-4 focus:ring-iris/15";

export default function Credits() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Contact form submission",
          message: form.message,
        },
        EMAILJS.key
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-y relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[60rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-iris/20 via-[#9333ea]/15 to-coral/20 blur-3xl"
      />

      <div className="container-x">
        <ChapterHeading
          no="06"
          label="End credits"
          title={
            <>
              Roll credits, or <span className="gradient-text italic">start the sequel.</span>
            </>
          }
          kicker={credits.lede}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal>
            <form onSubmit={submit} noValidate className="card p-6 sm:p-9" aria-describedby="form-status">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="c-subject" className="text-sm font-semibold">
                  Subject <span className="font-normal text-muted">(optional)</span>
                </label>
                <input
                  id="c-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="What is this about?"
                  className={fieldClass}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="c-message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about the project, role or question…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? "Sending…" : "Send message"}
                <Send className="h-4 w-4" aria-hidden />
              </button>

              <div id="form-status" role="status" aria-live="polite" className="mt-5 min-h-[3rem]">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p
                      key="ok"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 rounded-2xl bg-lagoon-soft px-4 py-3 text-sm font-medium text-lagoon-deep"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                      Message sent. Thank you, I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      key="err"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 rounded-2xl bg-coral-soft px-4 py-3 text-sm font-medium text-coral-deep"
                    >
                      <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                      <span>
                        Please fill in your name, email and message, or email me directly at{" "}
                        <a className="underline" href={`mailto:${profile.email}`}>
                          {profile.email}
                        </a>
                        .
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-ink p-6 text-canvas shadow-lift sm:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-iris/50 blur-3xl"
              />
              <p className="eyebrow !text-white/60">Direct line</p>
              <p className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Prefer to skip the form?
              </p>

              <ul className="relative mt-8 space-y-3">
                {[
                  { href: `mailto:${profile.email}`, icon: Mail, label: "Email", value: profile.email, ext: false },
                  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", value: "thirunarayanan-raman", ext: true },
                  { href: profile.resume, icon: Download, label: "Résumé", value: "Download PDF", ext: true },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.ext ? "_blank" : undefined}
                      rel={l.ext ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-4 transition hover:border-white/50 hover:bg-white/[0.12]"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-canvas text-ink">
                        <l.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/60">
                          {l.label}
                        </span>
                        <span className="block break-words text-[0.98rem] font-medium">{l.value}</span>
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-white/60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="relative mt-8 text-sm text-white/65">
                Based in {profile.location}. Open to analytics, BI and data science conversations.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Credits roll */}
        <Reveal className="mt-24 border-t border-ink/15 pt-10 text-center">
          <p className="eyebrow">Starring</p>
          <p className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">{profile.name}</p>
          <p className="mt-6 text-sm text-muted">
            Filmed on location at {filmStrip.map((f) => f.name).filter((n, i, arr) => arr.indexOf(n) === i).join(", ")}.
          </p>
          <p className="mt-6 text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS and Framer Motion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
