/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      keyframes: {
      wag: {
        '0%': { transform: 'translate(-60px,0px)', opacity: '0' },
        '100%': { transform: 'translate(0px,0px)', opacity: '1' },
      },
    },
    animation: {
      wag: 'wag .5s ease-in-out',
    },
    },
  },
  plugins: [],
};
