import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Peptips brand tokens (brand book §5)
        sage: "#9CAF94",       // primary — soft sage
        cream: "#FAF6F0",      // accent
        pine: "#3D4A3A",       // deep
        coral: "#E8927C",      // highlight — callouts, CTAs only
        charcoal: "#2A2A2A",   // text on cream
        // Legacy aliases so shared template classes still resolve
        forest: "#3D4A3A",
        terracotta: "#E8927C",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
