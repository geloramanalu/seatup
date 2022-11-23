/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {},
    colors: {
      'kuning': '#FFAC30',
      'kuning2': '#FFE9C7',
      'merah': '#A7332F',
      'abu': '#DADADA',
      'white': '#FFFFFF',
      'black': '#000000',
      'brokenwhite': '#F6F6F6',
      'broken2white': '#DADADA',
      'abu2':'#9F9F9F',
      'darkerabu':'#AAAAAA',
      'kuningtua': '#D99B40',
      'biru': '#223954',
      'darkbiru':'#111E2E'
    },
    extend: {
      colors: {
        'kuning': '#FFAC30',
        'merah': '#A7332F',
        'abu': '#DADADA',
        'white': '#FFFFFF',
        'black': '#000000'
      }
    },
  },
  plugins: [],
}
