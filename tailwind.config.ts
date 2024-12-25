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
        colorValue: '#025955',
      },
      fontFamily: {
        trebuchetMs: ['Trebuchet MS'],
        raleway: ['var(--font-raleway)'],
        firaCode: ['var(--font-fira-code)'],
      },
      screens: {
        'xs': '500px',
        '1xl': '1400px',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
