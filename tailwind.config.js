/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackV: '#000000',
        whiteV: '#D8D8D8',
        goldV: '#75683B',
        yellowV: '#F5BA00',
        redV: '#C60202',
        glitchR: '#fe3e3e',
        glitchG: '#3df0cf',
        glitchW: '#f1f1f1',
      },
      spacing: {
        'vh-5': '5vh',
        'vh-10': '10vh',
        'vh-15': '15vh',
        'vh-20': '20vh',
        'vh-25': '25vh',
        'vh-30': '30vh',
        'vh-35': '35vh',
        'vh-40': '40vh',
        'vh-45': '45vh',
        'vh-50': '50vh',
      },
      fontFamily: {
        coprgtb: ['COPRGTB'],
        coprgtl: ['COPRGTL'],
        metalmania: ['MetalMania'],
        tradewinds: ['TradeWinds'],
      },
    },
  },
  plugins: [],
}

