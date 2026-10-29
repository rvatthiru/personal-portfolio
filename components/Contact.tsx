"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Download, Linkedin, Mail, Send, TriangleAlert } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/story";

// EmailJS public identifiers are safe to ship to the browser. Override them with
// NEXT_PUBLIC_EMAILJS_* in `.env.local` / Vercel if you rotate them.
const EMAILJS = {
  service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_cyw18x4",
  template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_mkjbt4r",
  key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "XE70Bku_mFTQgjj_I",
};

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:border-iris focus:outline-none focus:ring-4 focus:ring-iris/15";

export default function Contact() {
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

  const links = [
    { href: `mailto:${profile.email}`, icon: Mail, label: "Email", value: profile.email, ext: false },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", value: "thirunarayanan-raman", ext: true },
    { href: profile.resume, icon: Download, label: "Résumé", value: "Download PDF", ext: true },
  ];

  return (
    <section id="contact" className="section-y relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          kicker="Open to sales strategy and operations, revenue operations and analytics conversations."
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
          <Reveal y={16}>
            <form onSubmit={submit} noValidate className="card !rounded-2xl p-5 sm:p-7" aria-describedby="form-status">
              <div className="grid gap-4 sm:grid-cols-2">
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

              <div className="mt-4">
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

              <div className="mt-4">
                <label htmlFor="c-message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about the role, project or question…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" aria-hidden />
                </button>

                <div id="form-status" role="status" aria-live="polite" className="min-w-0 flex-1">
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.p
                        key="ok"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-start gap-2 rounded-xl bg-lagoon-soft px-3 py-2 text-sm font-medium text-lagoon-deep"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                        Message sent. Thank you, I&apos;ll get back to you soon.
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p
                        key="err"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-start gap-2 rounded-xl bg-coral-soft px-3 py-2 text-sm font-medium text-coral-deep"
                      >
                        <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                        <span>
                          Please fill in your name, email and message, or email me at{" "}
                          <a className="underline" href={`mailto:${profile.email}`}>
                            {profile.email}
                          </a>
                          .
                        </span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </Reveal>

          <Reveal y={16} delay={0.08}>
            <div className="h-full rounded-2xl bg-ink p-5 text-canvas shadow-lift sm:p-7">
              <p className="eyebrow !text-white/60">Direct line</p>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.ext ? "_blank" : undefined}
                      rel={l.ext ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-3 transition hover:border-white/50 hover:bg-white/[0.12]"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-canvas text-ink">
                        <l.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/60">
                          {l.label}
                        </span>
                        <span className="block break-words text-[0.95rem] font-medium">{l.value}</span>
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-white/60 transition group-hover:text-white"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-white/65">Based in {profile.location}.</p>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 border-t border-line pt-5 text-center text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS and Framer Motion.
        </p>
      </div>
    </section>
  );
}
