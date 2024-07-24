/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightPurple:'#EDC8FF',
        navBg:'#3D334D',
        tempBg:'#2f2833',
        mainPurple:'#3D009E',
        secondaryPurple:'#C5A7D4',
        greyText:'#333333',
      }
    },
  },
  plugins: [],
}