/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#62F7D6",
        bg: "#0A192F",
        card: "#172A46",
        title: "#B0BBDB",
        desc: "#99A4C3",
        sub: "#4C5A76",
      },
      animation: {
        bounce: "bounce 7s infinite",
      },
    },
  },
  plugins: [],
};
