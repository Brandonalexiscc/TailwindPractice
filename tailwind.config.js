/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],

  darkMode:'class',
  
  theme: {
    extend: {
      colors: {
        'blue-ribbon': {
          DEFAULT: '#004FF0',
          50: '#EDF2FF',
          100: '#D7E2FF',
          200: '#A9C2FF',
          300: '#7BA2FF',
          400: '#4D84FF',
          500: '#1F66FF',
          600: '#004FF0',
          700: '#003DB3',
          800: '#002976',
          900: '#001438',
          950: '#00091A'
        },
      }
    },
  },
  plugins: [],
}
