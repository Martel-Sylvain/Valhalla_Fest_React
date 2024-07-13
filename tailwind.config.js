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

