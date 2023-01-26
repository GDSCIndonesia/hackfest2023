/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        product: 'Product Sans, sans-serif',
      },
      animation: {
        colorAni: 'colorAni 5s ease infinite',
      },
      keyframes: {
        colorAni: {
          '0%, 100%': {
            'background-size': '150% 150%',
            'background-position': 'left right',
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': 'right top',
          },
        },
      },
    },
  },
  plugins: [],
}
