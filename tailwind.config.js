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
        blurGradientFooter: "url('/assets/BlurGradientFooter.png')",
      },
      colors:{
        primary: "#212121",
        secondary: "#F5F5F5",
        tertiary: "#F9C23C",
        accent: "#E91E63",
        gradient: "linear-gradient(to right, #373FFF, #3ACAF8)"
      }
    },
  },
  plugins: [],
};
