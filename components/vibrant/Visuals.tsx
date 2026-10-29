"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { sceneData, type VibrantSceneId } from "@/data/story";

const ease = [0.22, 1, 0.36, 1] as const;

/** Device-style frame shared by every scene visual. */
function Screen({
  title,
  note,
  children,
}: {
  title: string;
  /** Optional pill, used only when part of the visual is an example rather than a real number. */
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-[24rem] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink text-canvas shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 min-w-0 truncate font-mono text-[0.7rem] text-white/60">{title}</span>
        {note && (
          <span className="ml-auto shrink-0 rounded-full border border-white/20 px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/60">
            {note}
          </span>
        )}
      </div>
      <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/55">{children}</p>;
}

function Tile({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 0,
  color = "#ffffff",
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3"
    >
      <p className="font-display text-2xl leading-none tracking-tight sm:text-[1.7rem]" style={{ color }}>
        <Counter to={value} prefix={prefix} suffix={suffix} decimals={decimals} duration={1.3} />
      </p>
      <p className="mt-2 text-[0.72rem] leading-snug text-white/65">{label}</p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Foundation: the data pipeline                                    */
/* ------------------------------------------------------------------ */

function PipelineVisual() {
  const { steps, tiles } = sceneData.foundation;
  return (
    <Screen title="analytics / pipeline">
      <div className="flex flex-1 flex-col justify-between gap-5">
        <div>
          {steps.map((n, i) => (
            <div key={n.name}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  backgroundColor: ["rgba(255,255,255,0.04)", "rgba(255,255,255,0.14)", "rgba(255,255,255,0.04)"],
                  borderColor: ["rgba(255,255,255,0.12)", n.color, "rgba(255,255,255,0.12)"],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: i * 0.1, ease },
                  x: { duration: 0.5, delay: i * 0.1, ease },
                  backgroundColor: { duration: 4, delay: 1 + i * 0.55, repeat: Infinity, times: [0, 0.14, 0.4] },
                  borderColor: { duration: 4, delay: 1 + i * 0.55, repeat: Infinity, times: [0, 0.14, 0.4] },
                }}
                className="flex items-center gap-3 rounded-2xl border px-3.5 py-2"
              >
                <span
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-lg font-mono text-[0.7rem] font-semibold text-ink"
                  style={{ background: n.color }}
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold leading-tight">{n.name}</span>
                <span className="hidden shrink-0 font-mono text-[0.66rem] uppercase tracking-wider text-white/55 xs:block">
                  {n.note}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="relative ml-6 h-3 w-0.5 overflow-hidden bg-white/10" aria-hidden>
                  <motion.span
                    className="absolute left-0 top-0 h-1.5 w-full rounded-full"
                    style={{ background: n.color }}
                    animate={{ y: ["-100%", "240%"] }}
                    transition={{ duration: 1.3, delay: i * 0.3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <Label>What runs on it, 2025 to 2026</Label>
          <div className="mt-2 grid grid-cols-3 gap-2.5">
            {tiles.map((t, i) => (
              <Tile key={t.label} value={t.value} label={t.label} decimals={t.decimals} delay={0.5 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Attribution                                                      */
/* ------------------------------------------------------------------ */

function AttributionVisual() {
  const d = sceneData.attribution;
  const max = Math.max(...d.mix.map((m) => m.k));

  return (
    <Screen title="attribution / touchpoints">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div className="min-w-0">
            <Label>2025 revenue traced to touchpoints</Label>
            <p className="mt-1 font-display text-4xl leading-none tracking-tight sm:text-5xl">
              <Counter to={d.tracked} prefix="$" suffix="M" duration={1.4} />
            </p>
          </div>
          <div className="flex gap-5">
            <div>
              <p className="font-display text-2xl leading-none text-[#a5b4fc]">
                <Counter to={d.touchpoints.value} suffix={d.touchpoints.suffix} decimals={2} duration={1.3} />
              </p>
              <p className="mt-1 text-[0.7rem] text-white/60">{d.touchpoints.label}</p>
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-[#5eead4]">
                <Counter to={d.contacts.value} prefix="~" suffix={d.contacts.suffix} duration={1.3} />
              </p>
              <p className="mt-1 text-[0.7rem] text-white/60">{d.contacts.label}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <Label>Where the touchpoints came from</Label>
          <ul className="mt-3 flex flex-1 flex-col justify-evenly gap-2">
            {d.mix.map((m, i) => (
              <li key={m.label} className="flex items-center gap-3">
                <span className="w-[6.75rem] shrink-0 text-xs text-white/75 sm:w-28">{m.label}</span>
                <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <motion.div
                    className="h-full origin-left rounded-full"
                    style={{ background: m.color, width: `${(m.k / max) * 100}%` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease }}
                  />
                </div>
                <span className="w-12 shrink-0 text-right font-mono text-xs text-white/85">
                  <Counter to={m.k} suffix="K" duration={1.1} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Label>How each channel is read</Label>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {d.metrics.map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.08, ease }}
                className="rounded-xl border border-white/10 bg-white/[0.045] p-2.5"
              >
                <p className="font-mono text-[0.68rem] font-semibold tracking-[0.14em]" style={{ color: m.color }}>
                  {m.k}
                </p>
                <p className="mt-1 text-[0.68rem] leading-snug text-white/70">{m.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Diagnosis: what drove growth                                     */
/* ------------------------------------------------------------------ */

const AXIS_MIN = -10;
const AXIS_SPAN = 35;

function DivergingBar({ v, color, delay }: { v: number; color: string; delay: number }) {
  const zero = ((0 - AXIS_MIN) / AXIS_SPAN) * 100;
  const width = (Math.abs(v) / AXIS_SPAN) * 100;
  const left = v >= 0 ? zero : zero - width;
  return (
    <div className="relative h-3 min-w-0 flex-1 rounded-full bg-white/[0.06]">
      <span className="absolute inset-y-[-3px] w-px bg-white/35" style={{ left: `${zero}%` }} aria-hidden />
      <motion.div
        className="absolute inset-y-0 rounded-full"
        style={{ left: `${left}%`, width: `${width}%`, background: color, transformOrigin: v >= 0 ? "left" : "right" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay, ease }}
      />
    </div>
  );
}

function DiagnosisVisual() {
  const d = sceneData.diagnosis;
  const fmt = (v: number) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`;

  return (
    <Screen title="four markets / H1 readout">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-1 flex-col">
          <Label>{d.note}</Label>
          <div className="mt-4 flex flex-1 flex-col justify-evenly gap-4">
            {d.rows.map((r, i) => (
              <div key={r.label}>
                <p className="text-sm font-semibold">{r.label}</p>
                <div className="mt-1.5 space-y-1.5">
                  {[
                    { q: "Q1", v: r.q1, color: "#a5b4fc", delay: 0.15 + i * 0.12 },
                    { q: "Q2", v: r.q2, color: r.q2 < 0 ? "#f87171" : "#fdba74", delay: 0.3 + i * 0.12 },
                  ].map((b) => (
                    <div key={b.q} className="flex items-center gap-3">
                      <span className="w-6 shrink-0 font-mono text-[0.68rem] text-white/55">{b.q}</span>
                      <DivergingBar v={b.v} color={b.color} delay={b.delay} />
                      <span className="w-14 shrink-0 text-right font-mono text-xs" style={{ color: b.color }}>
                        {fmt(b.v)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-2.5">
            {d.tiles.map((t, i) => (
              <Tile
                key={t.label}
                value={t.value}
                label={t.label}
                suffix={t.suffix}
                decimals={t.decimals}
                delay={0.9 + i * 0.12}
                color={t.value < 0 ? "#f87171" : "#5eead4"}
              />
            ))}
          </div>
          <p className="mt-3 text-xs leading-snug text-white/65">Growth became AOV-led, from the existing base.</p>
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 4. CRM priorities                                                   */
/* ------------------------------------------------------------------ */

function CrmVisual() {
  const d = sceneData.crm;
  return (
    <Screen title="hubspot / account priority">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[0.68rem] uppercase tracking-wider text-white/75">
          <span className="rounded-md bg-white/10 px-2 py-1">Warehouse</span>
          <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
          <span className="rounded-md bg-white/10 px-2 py-1">Hightouch</span>
          <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
          <span className="rounded-md bg-coral px-2 py-1 font-semibold text-ink">HubSpot</span>
        </div>

        <div>
          <div className="flex items-end gap-3">
            <p className="font-display text-5xl leading-none tracking-tight">
              <Counter to={11} duration={1} />
            </p>
            <Label>named health signals</Label>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {d.signals.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07, ease }}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/85"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-2 text-white/50" aria-hidden>
            <ArrowDown className="h-4 w-4" />
            <Label>Rolled into one priority per account</Label>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {d.tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.12, ease }}
                className="rounded-2xl border bg-white/[0.05] px-3 py-3 text-center"
                style={{ borderColor: t.color }}
              >
                <span className="mx-auto mb-2 block h-2 w-2 rounded-full" style={{ background: t.color }} aria-hidden />
                <p className="text-sm font-semibold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Sales cadence                                                    */
/* ------------------------------------------------------------------ */

function CadenceVisual() {
  const d = sceneData.cadence;
  return (
    <Screen title="sales / operating cadence">
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <Label>The rhythm</Label>
          <ul className="mt-3 space-y-2">
            {d.rhythm.map((r, i) => (
              <motion.li
                key={r.name}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5"
              >
                <span className="w-[4.5rem] shrink-0 text-sm font-semibold">{r.name}</span>
                <span className="min-w-0 text-xs leading-snug text-white/70">{r.note}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Label>Who reads it</Label>
          <ul className="mt-3 space-y-3">
            {d.audience.map((a, ri) => (
              <li key={a.role} className="flex items-center gap-3">
                <span className="w-[6.5rem] shrink-0 text-xs text-white/80">{a.role}</span>
                <div className="flex min-w-0 flex-1 flex-wrap gap-1.5" aria-hidden>
                  {Array.from({ length: a.count }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="h-3 w-3 rounded-full"
                      style={{ background: a.color }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 + ri * 0.25 + i * 0.03, type: "spring", stiffness: 320, damping: 18 }}
                    />
                  ))}
                </div>
                <span className="w-8 shrink-0 text-right font-mono text-sm" style={{ color: a.color }}>
                  <Counter to={a.count} duration={0.9} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Slack agent                                                      */
/* ------------------------------------------------------------------ */

function SlackVisual() {
  const d = sceneData.slack;
  return (
    <Screen title="slack / #gtm" note="Example prompt">
      <div className="flex flex-1 flex-col justify-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex items-start gap-3"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-iris text-xs font-bold">You</span>
          <div className="min-w-0 rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm leading-relaxed">
            Which clinics are slipping this week?
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="flex items-start gap-3"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-coral text-[0.65rem] font-bold text-ink">
            AI
          </span>
          <div className="min-w-0 flex-1 rounded-2xl rounded-tl-sm border border-white/15 bg-white/[0.06] p-4">
            <p className="text-sm font-semibold">Answers from the governed Cube.js definitions</p>
            <div className="mt-3">
              <Label>Tokens per query, relative</Label>
            </div>
            <div className="mt-3 space-y-2.5">
              {[
                { t: "Without a semantic layer", w: d.tokens.before, c: "#a5b4fc" },
                { t: "With Cube.js", w: d.tokens.after, c: "#5eead4" },
              ].map((r, i) => (
                <div key={r.t}>
                  <p className="mb-1 text-xs text-white/75">{r.t}</p>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full origin-left rounded-full"
                      style={{ background: r.c, width: `${r.w}%` }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.9, delay: 1.1 + i * 0.25, ease }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-2.5">
          <Tile value={d.users} suffix="+" label="people self-serving in Slack" delay={1.6} color="#fdba74" />
          <Tile value={50} prefix="~" suffix="%" label="fewer tokens per query" delay={1.7} color="#5eead4" />
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Lab alerts                                                       */
/* ------------------------------------------------------------------ */

function AlertsVisual() {
  const d = sceneData.alerts;
  return (
    <Screen title="labs / alert results">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[0.68rem] uppercase tracking-wider text-white/75">
          <span className="rounded-md bg-white/10 px-2 py-1">Detect</span>
          <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
          <span className="rounded-md bg-white/10 px-2 py-1">Notify manager</span>
          <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
          <span className="rounded-md bg-[#5eead4] px-2 py-1 font-semibold text-ink">Zendesk ticket</span>
        </div>

        <div className="flex flex-1 flex-col justify-evenly gap-5">
          {d.rows.map((r, i) => (
            <div key={r.label}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-semibold">
                  {r.label} <span className="ml-1 font-mono text-[0.68rem] text-white/55">{r.stat}</span>
                </p>
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.2, type: "spring", stiffness: 280, damping: 18 }}
                  className="shrink-0 rounded-full bg-[#5eead4] px-2.5 py-0.5 font-mono text-xs font-bold text-ink"
                >
                  {r.delta} · {r.pct}
                </motion.span>
              </div>
              <div className="mt-2 space-y-1.5">
                {[
                  { t: "Before", v: r.before, w: 100, c: "#a5b4fc" },
                  { t: "After", v: r.after, w: (r.after / r.before) * 100, c: "#5eead4" },
                ].map((b, bi) => (
                  <div key={b.t} className="flex items-center gap-3">
                    <span className="w-11 shrink-0 text-[0.7rem] text-white/60">{b.t}</span>
                    <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                      <motion.div
                        className="h-full origin-left rounded-full"
                        style={{ background: b.c, width: `${b.w}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.2 + bi * 0.15, ease }}
                      />
                    </div>
                    <span className="w-14 shrink-0 text-right font-mono text-xs text-white/85">{b.v}h</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-auto text-[0.7rem] leading-snug text-white/55">Before {d.window.split(" vs ")[0]}, after {d.window.split(" vs ")[1]}.</p>
      </div>
    </Screen>
  );
}

export default function SceneVisual({ id }: { id: VibrantSceneId }) {
  switch (id) {
    case "foundation":
      return <PipelineVisual />;
    case "attribution":
      return <AttributionVisual />;
    case "diagnosis":
      return <DiagnosisVisual />;
    case "crm":
      return <CrmVisual />;
    case "cadence":
      return <CadenceVisual />;
    case "slack":
      return <SlackVisual />;
    case "alerts":
      return <AlertsVisual />;
  }
}
