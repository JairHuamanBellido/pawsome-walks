/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8fde8",
          100: "#eef9ce",
          200: "#ddf4a2",
          300: "#c5eb6f",
          400: "#aadd3e",
          500: "#8cc220",
          600: "#6c9b15",
          700: "#527615",
          800: "#425e16",
          900: "#395017",
          950: "#1c2c07",
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
