import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        canvas: "#FAF7F2",
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#14110F",
          soft: "#2A2521",
        },
        muted: "#5B554E",
        line: "#E7E0D5",
        iris: {
          DEFAULT: "#4F46E5",
          deep: "#3730A3",
          soft: "#EEF0FF",
        },
        coral: {
          DEFAULT: "#FF6B4A",
          deep: "#C2410C",
          soft: "#FFEDE7",
        },
        lagoon: {
          DEFAULT: "#0D9488",
          deep: "#0F766E",
          soft: "#E3F6F3",
        },
        sun: {
          DEFAULT: "#F5B83D",
          deep: "#A16207",
          soft: "#FFF4D6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(20,17,15,0.04), 0 12px 32px -12px rgba(20,17,15,0.18)",
        lift: "0 2px 0 rgba(20,17,15,0.04), 0 28px 60px -24px rgba(20,17,15,0.35)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.7)" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
