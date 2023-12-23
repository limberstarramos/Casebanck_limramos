/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      // colors: {
      //   "dark-purple": "#081A51",
      //   "light-white": "rgba(255,255,255,0.17)",
      // },
      colors: {
        'ebony': {
            '50': '#f3f5fb',
            '100': '#e3eaf6',
            '200': '#cedbef',
            '300': '#acc2e4',
            '400': '#84a3d6',
            '500': '#6786ca',
            '600': '#546dbc',
            '700': '#495cac',
            '800': '#404d8d',
            '900': '#374271',
            '950': '#242943',
        },
      },
      fontFamily: {
        inter: ['Inter'],
    },
       

    
    },
  },
  plugins: [],
}

