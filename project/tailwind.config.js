/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradientBG 15s ease infinite',
        glow: 'glow 3s ease-in-out infinite',
        'neon-text': 'neonText 3s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};