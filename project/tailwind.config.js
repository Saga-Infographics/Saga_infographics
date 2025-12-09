/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF6B00',
        'brand-slate': '#1C1C1E',
        'brand-softgray': '#F5F5F7',
        'brand-white': '#FFFFFF',
        'brand-accent-blue': '#3A7BD5',
      },
    },
  },
  plugins: [],
};
