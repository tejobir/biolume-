import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#1A6E7E",
          light: "#2A8A9E",
          dark: "#0F4F5C",
        },
        mint: {
          DEFAULT: "#5EBF8A",
          soft: "#8FD4AC",
          dark: "#3FA66E",
        },
        plum: {
          DEFAULT: "#2A1520",
          deep: "#1C0D15",
        },
        greige: "#A09890",
        offwhite: "#F0EEEB",
        cream: "#FAF9F7",
        ash: "#D9D5D0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(42, 21, 32, 0.06)",
        glow: "0 12px 40px rgba(26, 110, 126, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
