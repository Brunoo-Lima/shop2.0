/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#00875F',
        'light-color': '#00B37E',

        'base-color': '#121214',
        'elements-color': '#202024',
        'icon-color': '#8D8D99',
        'text-color': '#C4C4CC',
        'title-color': '#E1E1E6',
      },
    },
  },
  plugins: [],
};
