/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy:   '#0B2545',
        azure:  '#1E6FD9',
        sky:    '#2E8BFF',
        'sky-light': '#E6F0FB',
        amber:  '#FF9F1C',
        'amber-dark': '#E88A00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
