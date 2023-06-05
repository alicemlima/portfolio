/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
    colors: {
      dark: {
        almond: '#F1DAC4',
        ultra: '#474973',
        rich: '#0d0c1d',
        black: '#000000',
      },
      light: {
        ghost: '#F3F6FE',
        uranian: '#BDE0FE',
        pink: '#f78ab0',
      },
    },
    fontFamily: {
      'Poppins': ['"Poppins"', 'sans-serif'],
    },

  },
  
  plugins: [],
  darkMode: 'class'
}