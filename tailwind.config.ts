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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi, )" , "sans-serif"],
        clashDisplay: ["var(--font-clashDisplay, )" , "sans-serif"],
      },
      screens: {
        xs: '392px',
      },
    },
  },
  plugins: [],
};
export default config;
