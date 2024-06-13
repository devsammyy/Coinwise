/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        primaryBg: '#010127',
        primaryColor: '#90e0ef',
        greyLight: '#d7dbd8',
      }
  }
},
  plugins: [],
}