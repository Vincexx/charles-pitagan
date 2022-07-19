/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#62F7D6",
        bg: "#1b1f24",
        card: "#24292f",
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
