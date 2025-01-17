/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: " #C1CF16",
        dark: "#1C2834",
        lightDark: "#495D69",
        light: "#DBDBDB",
      },
      gridTemplateColumns: {
        mycustom: "60fr 40fr",
      },
    },
  },
  plugins: [],
};
