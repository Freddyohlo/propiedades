/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-once': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.85' },
        },
      },
      animation: {
        'fade-in': 'fade .3s ease-out',
        'pulse-once': 'pulse-once .8s ease-in-out',
      },
    },
  },
  plugins: [],
};

