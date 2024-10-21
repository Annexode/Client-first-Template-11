/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        robboto: ["Roboto"],
      },
      backgroundImage: {
        blurGradient: "url('/assets/blurGradient.svg')",
        blurGradient2: "url('/assets/biggerGradient.svg')",
        blurGradientFooter: "url('/assets/BlurGradientFooter.png')",
      },
      colors:{
        primary: "#D798E1",
        secondary: "#9BFFA5",
        tertiary: "#F9C23C",
        accent: "#AED3FF",
        gradient: "linear-gradient(to right, #373FFF, #3ACAF8)"
      }
    },
  },
  plugins: [],
};
