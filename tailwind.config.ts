import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#0B0F14",
          section: "#11161D",
          graphite: "#1A1E24",
        },
        steel: "#6F7A86",
        light: "#F4F6F8",
        muted: "#A8B0BA",
        accent: {
          DEFAULT: "#C59B5A",
          dark: "#9F7840",
          copper: "#B87333",
        },
        border: "rgba(255, 255, 255, 0.12)",
        glass: "rgba(18, 21, 27, 0.92)",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(197, 155, 90, 0.18)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "radial-brass": "radial-gradient(circle at 30% 20%, rgba(197, 155, 90, 0.18), transparent 34%)",
        "steel-line": "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(197,155,90,0.42), rgba(255,255,255,0.06))",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease both",
      },
    },
  },
  plugins: [],
};

export default config;
