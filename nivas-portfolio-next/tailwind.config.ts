import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050816",
          secondary: "#0B1120",
        },
        card: {
          DEFAULT: "#111827",
          hover: "#141c2e",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          tertiary: "#5b6b85",
        },
        border: {
          DEFAULT: "#1E293B",
        },
        accent: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          pink: "#EC4899",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)",
        "accent-gradient-soft":
          "linear-gradient(135deg, rgba(59,130,246,.15), rgba(139,92,246,.15), rgba(236,72,153,.15))",
      },
      borderRadius: {
        card: "16px",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        auroraShift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(2%,-3%) scale(1.06)" },
        },
        blink: {
          "0%, 80%, 100%": { opacity: "0.2" },
          "40%": { opacity: "1" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        aurora: "auroraShift 18s ease-in-out infinite alternate",
        blink: "blink 1.2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
