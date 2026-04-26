import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pliability-style body surface — gray-white, NOT cream.
        "body-bg": "#F0F0F0",
        "gray-line": "#D6D6D6",
        ink: "#000000",
        "ink-soft": "#1F1F1F",
        // Peptips brand tokens — kept as accents, no longer the default body bg.
        sage: "#9CAF94",
        "sage-light": "#C5D2BE",
        "sage-deep": "#7D9175",
        cream: "#FAF6F0",
        "cream-deep": "#F1EADC",
        paper: "#FBF8F2",
        pine: "#3D4A3A",
        "pine-deep": "#2E382B",
        coral: "#E8927C",
        "coral-deep": "#C77560",
        charcoal: "#2A2A2A",
        stone: "#6F6B63",
        // Legacy aliases so any older shared template classes still resolve.
        forest: "#3D4A3A",
        "forest-deep": "#2E382B",
        terracotta: "#E8927C",
        "terracotta-deep": "#C77560",
      },
      fontFamily: {
        // Single grotesk system — Inter only.
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "66ch",
        reading: "42rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.05)",
        card: "0 1px 1px rgba(0, 0, 0, 0.03), 0 8px 28px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
