/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#C5EB6F",
        },
      },
    },
    fontFamily: {
      "general-sans": ["GeneralSans"],
      "google-sans": ["GoogleSans"],
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1024px",
      "m-desktop": "1440px",
      "lg-desktop": "1920px",
    },
  },
  plugins: [],
};
