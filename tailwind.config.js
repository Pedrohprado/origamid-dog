/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        animationleft: 'animationleft 0.3s forwards',
      },
      keyframes: {
        animationleft: {
          to: { opacity: 1, transform: 'initial' },
        },
      },
    },
  },
  plugins: [],
};
