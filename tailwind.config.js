/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#0B2447',
        custom: {
          darkBlue: '#0B2447',
          navy: '#19376D',
          blue: '#576CBC',
          lightBlue: '#A5D7E8', 
          heading: '#ffffff',
          allText: '#EEEEEE'
        }
      },
    },
  },
  plugins: [],
}
