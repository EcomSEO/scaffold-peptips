import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Peptips brand tokens (brand book §5) — softer, warmer than plasticfreelab
        sage: "#9CAF94", // primary — soft sage
        "sage-light": "#C5D2BE", // lighter sage for backgrounds / dividers
        "sage-deep": "#7D9175", // slightly deeper sage for hover
        cream: "#FAF6F0", // warm cream — the editorial paper surface
        "cream-deep": "#F1EADC", // deeper cream for inset cards
        paper: "#FBF8F2", // page background
        pine: "#3D4A3A", // deep — headlines / buttons
        "pine-deep": "#2E382B", // button hover
        coral: "#E8927C", // highlight — for small accents only (not dominant)
        "coral-deep": "#C77560",
        charcoal: "#2A2A2A", // body text
        stone: "#6F6B63", // warm stone — muted meta
        // Legacy aliases so shared template classes still resolve
        forest: "#3D4A3A",
        "forest-deep": "#2E382B",
        terracotta: "#E8927C",
        "terracotta-deep": "#C77560",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "66ch",
        reading: "42rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(61, 74, 58, 0.04), 0 4px 16px rgba(61, 74, 58, 0.05)",
        card: "0 1px 1px rgba(61, 74, 58, 0.03), 0 8px 28px rgba(61, 74, 58, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
