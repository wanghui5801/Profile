import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        title: ["var(--font-source-sans)"],
      },
      colors: {
        academic: {
          primary: {
            light: '#2C5282',
            DEFAULT: '#2B6CB0',
            dark: '#1A365D'
          },
          secondary: {
            light: '#0D9488',
            DEFAULT: '#0B7285',
            dark: '#065666'
          }
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
