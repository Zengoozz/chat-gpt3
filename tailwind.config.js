/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryCustom: "#040C18",
        textCustom: "#81AFDD",
        buttonSignCustom: '#FF4820',
        inputFieldCustom: '#052D56',
        footerCustom: '#031B34',
        subTextCustom: "#FF8A71",
        oneUseCustom: "#71E5FF",
        articleBgCustom: "#042C54",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "720px",
      md: "1300px",
      lg: "1500px",
      xl: "1700px",
    },
  },
  plugins: [],
}