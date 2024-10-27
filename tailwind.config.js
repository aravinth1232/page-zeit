/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f4f2c7",
        secondary:"#221b04",

      },
      fontFamily :{
        cinzel : ["Cinzel", 'serif'],
        poppins:["Poppins", 'sans-serif'],
        merriweather :["Merriweather", 'serif'],
        logo :["Dancing Script", 'cursive'],

      }

    },
  },
  plugins: [],
}

