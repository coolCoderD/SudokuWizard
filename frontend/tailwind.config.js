/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'shakespeare': {
          '50': '#f0f9fb',
          '100': '#d9edf4',
          '200': '#b8dde9',
          '300': '#88c4d8',
          '400': '#51a3c1',
          '500': '#3486a6',
          '600': '#2e6d8c',
          '700': '#2b5973',
          '800': '#2a4c60',
          '900': '#274052',
          '950': '#152837',
      },
    },  
    }
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

