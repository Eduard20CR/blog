const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      gray: colors.gray,
      white: "#ffffff",
      black: "#080C0D",
      primary: "#f2544d",
      secondary: "#2657d8",
      tertiary: "#183a71",
      "pill-technologie": "#183a71",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
