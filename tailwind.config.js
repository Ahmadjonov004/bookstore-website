/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        secondary: "#Fbbc05",
        danger: "#EA4335",
        success: "#34A853",
        dark: "#202124",
        light: "#F1F3F4",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};