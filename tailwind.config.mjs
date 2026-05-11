/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#b09060',
        card: 'rgba(110,85,42,0.72)',
        cream: '#f0e8d0',
        ink: '#3d2b1f',
        gold: '#d4a840',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        garamond: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        typewriter: ['"Special Elite"', '"Courier Prime"', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
};
