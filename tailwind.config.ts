import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EE",
        cream: "#F6F0E5",
        stone: "#D8CDBF",
        taupe: "#907D6A",
        forest: "#2F4F41",
        charcoal: "#1F2522",
        gold: "#C7A86D",
        mist: "#E9E2D7",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(31, 37, 34, 0.10)",
        soft: "0 16px 40px rgba(31, 37, 34, 0.08)",
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top, rgba(199,168,109,0.18), transparent 36%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
