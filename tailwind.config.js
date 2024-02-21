/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://bellfort-of-wallstreet.netlify.app/bg.jpg')",
      }
    },
  },
  plugins: [],
};
