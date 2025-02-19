/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'left-right': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
          '100%': { transform: 'translateX(0)' }
        },
        'up-down': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'up-down': 'up-down 5s ease-in-out infinite',
        'left-right': 'left-right 5s ease-in-out infinite'


      }
    },
  },
  plugins: [],
}