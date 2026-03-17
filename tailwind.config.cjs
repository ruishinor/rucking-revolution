/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',
        secondary: '#1C1C1C',
        accent: '#E85C2A',
      },
    },
  },
  plugins: [],
}