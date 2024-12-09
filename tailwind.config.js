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
        jog: {
           50: "#fefcf6",
          100: "#fcf8e8",
          200: "#faf0d1",
          300: "#f5e4ad",
          400: "#ecca5b",
          500: "#d2a719",
          600: "#977812",
          700: "#6e570d",
          800: "#403307",
          900: "#201904",
          950: "#120e02"

      },
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

