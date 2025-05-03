/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': 'url("/assets/jumbotron.jpg")'
      },
      colors: {
        'gossamer': {
          '50': '#ecfdf7',
          '100': '#d1faea',
          '200': '#a7f3d8',
          '300': '#6ee7c4',
          '400': '#34d3ab',
          '500': '#10b994',
          '600': '#05a081',
          '700': '#047864',
          '800': '#065f50',
          '900': '#064e43',
          '950': '#022c27',
        }
      }
    },
  },
  plugins: [],
}

