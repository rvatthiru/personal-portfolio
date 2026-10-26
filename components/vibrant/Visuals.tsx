"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Hash } from "lucide-react";
import Counter from "@/components/ui/Counter";
import type { VibrantSceneId } from "@/data/story";

const ease = [0.22, 1, 0.36, 1] as const;

/** Device-style frame shared by every scene visual. */
function Screen({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-auto min-h-[24rem] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink text-canvas shadow-lift stage:h-full">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 min-w-0 truncate font-mono text-[0.7rem] text-white/60">{title}</span>
        <span className="ml-auto shrink-0 rounded-full border border-white/20 px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/60">
          Illustrative
        </span>
      </div>
      <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto p-4 sm:p-5">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Foundation: the data pipeline                                    */
/* ------------------------------------------------------------------ */

const pipeline = [
  { name: "Airbyte", note: "ingest sources", color: "#a5b4fc" },
  { name: "ClickHouse · BigQuery", note: "warehouse", color: "#5eead4" },
  { name: "dbt", note: "transform + contracts", color: "#fdba74" },
  { name: "Cube.js", note: "semantic layer", color: "#f0abfc" },
  { name: "Power BI · HubSpot · Slack", note: "deliver", color: "#fde68a" },
];

function PipelineVisual() {
  return (
    <Screen title="analytics / pipeline">
      <div className="flex flex-1 flex-col justify-center">
        {pipeline.map((n, i) => (
          <div key={n.name}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{
                opacity: 1,
                x: 0,
                backgroundColor: [
                  "rgba(255,255,255,0.04)",
                  "rgba(255,255,255,0.14)",
                  "rgba(255,255,255,0.04)",
                ],
                borderColor: ["rgba(255,255,255,0.12)", n.color, "rgba(255,255,255,0.12)"],
              }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.12, ease },
                x: { duration: 0.5, delay: i * 0.12, ease },
                backgroundColor: { duration: 4, delay: 1 + i * 0.55, repeat: Infinity, times: [0, 0.14, 0.4] },
                borderColor: { duration: 4, delay: 1 + i * 0.55, repeat: Infinity, times: [0, 0.14, 0.4] },
              }}
              className="flex items-center gap-3 rounded-2xl border px-3.5 py-2.5"
            >
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-semibold text-ink"
                style={{ background: n.color }}
              >
                {i + 1}
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold leading-tight sm:text-[0.95rem]">{n.name}</span>
              <span className="hidden shrink-0 font-mono text-[0.68rem] uppercase tracking-wider text-white/55 xs:block">
                {n.note}
              </span>
            </motion.div>
            {i < pipeline.length - 1 && (
              <div className="relative ml-6 h-4 w-0.5 overflow-hidden bg-white/10" aria-hidden>
                <motion.span
                  className="absolute left-0 top-0 h-2 w-full rounded-full"
                  style={{ background: n.color }}
                  animate={{ y: ["-100%", "220%"] }}
                  transition={{ duration: 1.4, delay: i * 0.3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Attribution                                                      */
/* ------------------------------------------------------------------ */

const metrics = [
  {
    k: "NRR",
    name: "Net revenue retention",
    formula: "(start + expansion − churn) / start",
    reads: "Did the customers you already had grow, after churn?",
    direction: "Higher means the book expanded",
    color: "#a5b4fc",
    points: [62, 64, 60, 70, 76, 84, 92],
  },
  {
    k: "ARR",
    name: "Annual recurring revenue",
    formula: "monthly recurring × 12",
    reads: "The yearly run-rate finance and sales plan against.",
    direction: "One book of record",
    color: "#5eead4",
    points: [38, 44, 47, 54, 61, 69, 76],
  },
  {
    k: "ROAS",
    name: "Return on ad spend",
    formula: "attributed revenue / ad spend",
    reads: "Revenue each channel touched, per dollar spent.",
    direction: "Same definition across channels",
    color: "#fdba74",
    points: [46, 52, 44, 58, 64, 61, 72],
  },
  {
    k: "CPA",
    name: "Cost per acquisition",
    formula: "spend / new accounts won",
    reads: "What it cost to win the next account.",
    direction: "Lower means more efficient",
    color: "#f0abfc",
    points: [82, 78, 84, 70, 64, 58, 50],
  },
];

function AreaSpark({ points, color, id }: { points: number[]; color: string; id: string }) {
  const w = 160;
  const h = 56;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * (w - 8) + 4;
    const y = h - 8 - ((p - min) / (max - min || 1)) * (h - 16);
    return [x, y] as const;
  });
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${coords[coords.length - 1][0].toFixed(1)} ${h} L${coords[0][0].toFixed(1)} ${h} Z`;
  const last = coords[coords.length - 1];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-14 w-full" role="img" aria-label="Illustrative trend">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[18, 36].map((y) => (
        <line key={y} x1="4" x2={w - 4} y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      ))}
      <motion.path d={area} fill={`url(#${id})`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }} />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.25, ease }}
      />
      <motion.circle cx={last[0]} cy={last[1]} r="3.2" fill={color} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.15, type: "spring", stiffness: 260, damping: 16 }} />
    </svg>
  );
}

function AttributionVisual() {
  return (
    <Screen title="attribution / metrics">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/55">Same $75M, four questions</p>
            <p className="mt-1 font-display text-2xl leading-none tracking-tight sm:text-[1.7rem]">
              <Counter to={75} prefix="$" suffix="M tracked" duration={1.4} />
            </p>
          </div>
          <p className="hidden max-w-[9.5rem] text-right text-[0.68rem] leading-snug text-white/50 sm:block">
            Shapes illustrate the question. They are not reported results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2">
          {metrics.map((m, i) => (
            <motion.article
              key={m.k}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.08, ease }}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-mono text-[0.68rem] font-semibold tracking-[0.14em]" style={{ color: m.color }}>
                    {m.k}
                  </p>
                  <h4 className="mt-0.5 text-[0.92rem] font-semibold leading-tight">{m.name}</h4>
                </div>
              </div>
              <p className="mt-2 rounded-lg bg-black/30 px-2 py-1 font-mono text-[0.62rem] leading-snug text-white/70">
                {m.formula}
              </p>
              <AreaSpark points={m.points} color={m.color} id={`spark-${m.k}`} />
              <p className="mt-1.5 text-[0.75rem] leading-snug text-white/75">{m.reads}</p>
              <p className="mt-1 text-[0.68rem] font-medium leading-snug" style={{ color: m.color }}>
                {m.direction}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 3. CRM priorities                                                   */
/* ------------------------------------------------------------------ */

const tiers = [
  { name: "Protect", color: "#5eead4", rows: [70, 55, 82] },
  { name: "Grow", color: "#a5b4fc", rows: [60, 78, 48] },
  { name: "Re-engage", color: "#fdba74", rows: [52, 66, 40] },
];

function CrmVisual() {
  return (
    <Screen title="hubspot / priority">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[0.68rem] uppercase tracking-wider text-white/75">
          <span className="rounded-md bg-white/10 px-2 py-1">Warehouse</span>
          <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
          <span className="rounded-md bg-white/10 px-2 py-1">Hightouch</span>
          <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
          <span className="rounded-md bg-coral px-2 py-1 font-semibold text-ink">HubSpot</span>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-2.5 sm:gap-3">
          {tiers.map((t, ci) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: t.color }} aria-hidden />
                <p className="min-w-0 truncate text-[0.72rem] font-semibold sm:text-xs">{t.name}</p>
              </div>
              <div className="mt-3 space-y-2">
                {t.rows.map((w, ri) => (
                  <motion.div
                    key={ri}
                    initial={{ opacity: 0, y: -16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + ci * 0.25 + ri * 0.15, ease }}
                    className="rounded-lg bg-white/10 p-2"
                  >
                    <div className="h-1.5 rounded-full bg-white/50" style={{ width: `${w}%` }} />
                    <div className="mt-1.5 h-1.5 w-2/5 rounded-full bg-white/20" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Slack agent                                                      */
/* ------------------------------------------------------------------ */

function SlackVisual() {
  return (
    <Screen title="slack / #gtm">
      <div className="flex flex-1 flex-col justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex items-start gap-3"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-iris text-xs font-bold">You</span>
          <div className="min-w-0 rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm leading-relaxed">
            Which accounts should we prioritise this quarter?
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, delay: 1, times: [0, 0.1, 0.85, 1] }}
          className="ml-11 flex items-center gap-1.5"
          aria-hidden
        >
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              className="h-2 w-2 rounded-full bg-white/60"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 1 + d * 0.12 }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4, ease }}
          className="flex items-start gap-3"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-coral text-ink">
            <Hash className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0 flex-1 rounded-2xl rounded-tl-sm border border-white/15 bg-white/[0.06] p-4">
            <p className="text-sm font-semibold">Answering from the shared account score</p>
            <div className="mt-3 space-y-2">
              {[
                { t: "Protect", c: "#5eead4", w: "78%" },
                { t: "Grow", c: "#a5b4fc", w: "58%" },
                { t: "Re-engage", c: "#fdba74", w: "40%" },
              ].map((r, i) => (
                <div key={r.t} className="flex items-center gap-3">
                  <span className="w-[4.75rem] shrink-0 text-xs text-white/75">{r.t}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: r.c }}
                      initial={{ width: 0 }}
                      animate={{ width: r.w }}
                      transition={{ duration: 0.9, delay: 2.8 + i * 0.15, ease }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-white/50">
              <Check className="h-3 w-3" aria-hidden /> Grounded in Cube.js metric definitions
            </p>
          </div>
        </motion.div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Forecast                                                         */
/* ------------------------------------------------------------------ */

function ForecastVisual() {
  const actual = "M0 120 L30 108 L60 112 L90 92 L120 96 L150 78 L180 70";
  const forecast = "M180 70 L215 62 L250 54 L285 44 L320 34";
  const band = "M180 70 L215 52 L250 38 L285 22 L320 6 L320 70 L285 68 L250 70 L215 76 L180 70 Z";

  return (
    <Screen title="forecast / weekly">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/75">
          <span className="inline-flex items-center gap-2">
            <span className="h-0.5 w-5 rounded bg-[#a5b4fc]" /> Pipeline
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-0.5 w-5 rounded border-t-2 border-dashed border-[#fdba74]" /> Outlook
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-5 rounded bg-[#fdba74]/30" /> P75 baseline
          </span>
        </div>

        <div className="min-h-[9rem] flex-1">
          <svg viewBox="0 0 320 140" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
            {[35, 70, 105].map((y) => (
              <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            ))}
            <motion.path
              d={band}
              fill="rgba(253,186,116,0.22)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
            <motion.path
              d={actual}
              fill="none"
              stroke="#a5b4fc"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease }}
            />
            <motion.path
              d={forecast}
              fill="none"
              stroke="#fdba74"
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.3, ease }}
            />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="rounded-full border border-[#f87171]/50 bg-[#f87171]/10 px-3 py-1 text-xs font-medium text-[#fecaca]"
          >
            Risk: slipping deals
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
            className="rounded-full border border-[#5eead4]/50 bg-[#5eead4]/10 px-3 py-1 text-xs font-medium text-[#99f6e4]"
          >
            Opportunity: expansion
          </motion.span>
        </div>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Data contracts                                                   */
/* ------------------------------------------------------------------ */

function ContractsVisual() {
  const rows = [64, 78, 52, 70, 58];

  return (
    <Screen title="dbt / contracts">
      <div className="flex flex-1 flex-col justify-center gap-2.5">
        <div className="mb-1 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-wider text-white/50">
          <span>Account</span>
          <span>Contract</span>
        </div>

        {rows.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5"
          >
            <div className="h-2 rounded-full bg-white/40" style={{ width: `${w}%` }} />
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 300, damping: 18 }}
              className="ml-auto grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#5eead4] text-ink"
            >
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
            </motion.span>
          </motion.div>
        ))}

        {/* The row legacy logic had hidden */}
        <motion.div
          initial={{ opacity: 0.25, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="relative flex flex-wrap items-center gap-3 rounded-xl border border-coral/70 bg-coral/15 px-3 py-3"
        >
          <div className="h-2 w-1/2 rounded-full bg-coral" />
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, type: "spring", stiffness: 260, damping: 16 }}
            className="ml-auto rounded-full bg-coral px-3 py-1 font-mono text-xs font-bold text-ink"
          >
            +$2.5M visible
          </motion.span>
        </motion.div>
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
    case "crm":
      return <CrmVisual />;
    case "slack":
      return <SlackVisual />;
    case "forecast":
      return <ForecastVisual />;
    case "contracts":
      return <ContractsVisual />;
  }
}
