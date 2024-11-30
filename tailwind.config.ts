import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '640px',
      'tablet': '768px',
      'desktop': '1024px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          focus: "#177878",
          light: "#0b4040",
          dark: "#031111"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          focus: "#e3ffa8",
          light: "#d1f120",
          dark: "#92a815"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
