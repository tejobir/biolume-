import type { Config } from "tailwindcss";

/**
 * Brand palette — Biolume Dental Care official guidelines (July 2026).
 * ONLY these six hex values exist in the brand. Token names are kept
 * from the previous system so existing pages recolor automatically.
 *
 * Primary palette (teals + cream):
 *   teal     → Pine Teal   #146155
 *   mint     → Muted Teal  #86ac8e
 *   offwhite → Cream       #efeae4  (canvas)
 *   cream    → Cream       #efeae4  (elevated surfaces; lifted via border + shadow)
 *
 * Secondary palette only (dark + neutrals) — never as a primary surface:
 *   plum   → Bark    #513a32  (body ink)
 *   greige → Neutral #b29f8e
 *   ash    → Neutral #d3ccc5  (hairlines, dividers)
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#146155",
        mint: "#86ac8e",
        plum: "#513a32",
        greige: "#b29f8e",
        offwhite: "#efeae4",
        cream: "#efeae4",
        ash: "#d3ccc5",
      },
      fontFamily: {
        display: ["var(--font-logo)", "var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Nunito", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "Comfortaa", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(81, 58, 50, 0.07)",
        glow: "0 12px 40px rgba(20, 97, 85, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
