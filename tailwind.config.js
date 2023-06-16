/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primarytext: "#7D7987",
        primary: "#458ff6",
      },
      backgroundImage: {
        "service-bg": "url('./assets/bg1.png')",
        "article-bg": "url('./assets/bg2.png')",
      },
    },
  },
  plugins: [],
};
