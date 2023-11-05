/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xl: "0px 0px 33px 5px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        blue: "#118DD3",
        black: "#262626",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      container: {
        padding: "20px",
        maxWidth: "none%",
      },
    },
  },
  plugins: [],
};
