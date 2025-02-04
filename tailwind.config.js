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
        whiteVT: 'rgba(216, 216, 216, 0.25)',
        whiteVt: 'rgba(216, 216, 216, 0.75)',
        goldV: '#75683B',
        goldVT: 'rgba(117, 104, 59, 0.25)',
        goldVt: 'rgba(117, 104, 59, 0.90)',
        yellowV: '#F5BA00',
        redV: '#C60202',
        glitchR: '#fe3e3e',
        glitchG: '#3df0cf',
        glitchW: '#f1f1f1',
      },

      dropShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },

      fontFamily: {
        fontText: ['Lato'],
        fontTitle: ['COPRGTB'],
        font3: ['MetalMania'],
        font4: ['TradeWinds'],
        coprgtb: ['Uncial'],
        font6: ['COPRGTL'],
        font7: ['VollkornText'],
        font8: ['VollkornTitle'],
      },

      screens: {
        'xs': '320px',   // Extra small devices
        'sm': '375px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1440px', // 2X large devices
        '3xl': '1600px', // 3X large devices
      },

      spacing: {
        'vh-1': '1vh',
        'vh-2': '2vh',
        'vh-3': '3vh',
        'vh-4': '4vh',
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
    },
  },
  plugins: [],
}

