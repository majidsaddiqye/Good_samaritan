/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFAF0',
          100: '#FFF8E7',
          200: '#FFF1D3',
          300: '#FFE9BF',
        },
        red: {
          600: '#B22222',
          700: '#9B1C1C',
          800: '#8B0000',
          900: '#7A0000',
        },
        blue: {
          900: '#1E3A8A',
        },
        yellow: {
          400: '#FBBF24',
          200: '#FDE68A',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Open Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 