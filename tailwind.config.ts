import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:        "#FBF9F5",
        surface:       "#FFFFFF",
        "surface-alt": "#F4EFE6",
        ink:           "#111216",
        "ink-soft":    "#363A42",
        "ink-muted":   "#6D7380",
        "ink-faint":   "#9CA2AF",
        teal: {
          DEFAULT:     "#14584E",
          hover:       "#0E443C",
          light:       "#EAF3F1",
          border:      "#BFDDD7",
        },
        amber: {
          DEFAULT:     "#BD772B",
          light:       "#FDF3E5",
          border:      "#F5D6B1",
        },
        line:          "#E8E3D8",
        "line-strong": "#D6CFBF",
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "-apple-system", "sans-serif"],
        arabic:  ["Noto Naskh Arabic", "Noto Sans Arabic", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
