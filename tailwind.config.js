/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0A0A",
          secondary: "#121212",
          card: "#191919",
          elevated: "#222222",
        },
        text: {
          primary: "#F5F5F0",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        accent: {
          DEFAULT: "#C7FF4A", // Electric lime
          hover: "#B6F035",
          dim: "rgba(199, 255, 74, 0.15)",
          border: "rgba(199, 255, 74, 0.3)",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          subtle: "rgba(255, 255, 255, 0.06)",
          strong: "rgba(255, 255, 255, 0.22)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wide: "0.04em",
        widest: "0.12em",
      },
      boxShadow: {
        "glow-accent": "0 0 25px rgba(199, 255, 74, 0.25)",
        "glow-subtle": "0 0 40px rgba(199, 255, 74, 0.08)",
        "card-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
