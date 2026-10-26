export type Accent = "iris" | "coral" | "lagoon" | "sun";

/**
 * Tailwind only generates classes it can see as complete strings,
 * so every accent variant is spelled out here.
 */
export const accents: Record<
  Accent,
  { text: string; bg: string; soft: string; border: string; ring: string; hex: string; dot: string }
> = {
  iris: {
    text: "text-iris-deep",
    bg: "bg-iris",
    soft: "bg-iris-soft",
    border: "border-iris/40",
    ring: "ring-iris/30",
    hex: "#4F46E5",
    dot: "bg-iris",
  },
  coral: {
    text: "text-coral-deep",
    bg: "bg-coral",
    soft: "bg-coral-soft",
    border: "border-coral/50",
    ring: "ring-coral/30",
    hex: "#FF6B4A",
    dot: "bg-coral",
  },
  lagoon: {
    text: "text-lagoon-deep",
    bg: "bg-lagoon",
    soft: "bg-lagoon-soft",
    border: "border-lagoon/40",
    ring: "ring-lagoon/30",
    hex: "#0D9488",
    dot: "bg-lagoon",
  },
  sun: {
    text: "text-sun-deep",
    bg: "bg-sun",
    soft: "bg-sun-soft",
    border: "border-sun/60",
    ring: "ring-sun/40",
    hex: "#F5B83D",
    dot: "bg-sun",
  },
};
