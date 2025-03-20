/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1A2D42',
        secondary: '#2E4156',
        accent: '#AAB7B7',
        neutral: '#C0C8CA',
        highlight: '#D48DD8'
      }
    },
  },
  plugins: [],
};