/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dream: {
          black: '#0A0A0F',
          purple: '#6B46C1',
          'purple-light': '#9F7AEA',
          red: '#E53E3E',
          'red-light': '#FC8181',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(147, 51, 234, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.9)' },
        },
      },
    },
  },
  plugins: [],
};