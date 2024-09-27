/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}", 
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#3b82f6",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
