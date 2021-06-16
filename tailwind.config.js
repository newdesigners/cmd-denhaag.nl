module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        padding: '20px',
        center: true,
      },
      colors: {
        //Base
        transparent: 'tran sparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#223343',
          light: '#3B4559',
          'very-light': '#4E5B73',
          'lightest': '#CAD0DC',
        },
        //Abstract
        gray: {
          DEFAULT: '#F2F2F2',
          '2': '#E9EBEC',
        },

        yellow: '#FFBA00',
        blue: '#00B2CD',
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.125: "0.125rem",
        0.25: "0.25rem",
        0.375: "0.375rem",
        0.5: "0.5rem",
        0.625: "0.625rem",
        0.75: "0.75rem",
        0.875: "0.875rem",
        1: "1rem",
        1.125: "1.125rem",
        1.25: "1.25rem",
        1.375: "1.375rem",
        1.5: "1.5rem",
        1.625: "1.625rem",
        1.75: "1.75rem",
        1.875: "1.875rem",
        2: "2rem",
        2.25: "2.25rem",
        2.5: "2.5rem",
        2.75: "2.75rem",
        3: "3rem",
        3.5: "3.5rem",
        3.75: "3.75rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        11: "11rem",
        12: "12rem",
        13: "13rem",
        14: "14rem",
        15: "15rem",
        16: "16rem",
        18: "18rem",
        20: "20rem",
        24: "24rem",
      },
      fontFamily: {
        roboto: [
          'Roboto',
          'sans-serif',
        ],
        poppins: [
          'Poppins',
          'sans-serif',
        ],
      },
      fontSize: {
        'body': ['14px', { lineHeight: '21px'}],
        'body-lg': ['18px', { lineHeight: '27px'}],
        'h1-home': ['24px', { lineHeight: '36px'}],
        'h1-home-lg': ['48px', { lineHeight: '72px'}],
        'h1': ['32px', { lineHeight: '48px' }],
        'h1-lg': ['38px', { lineHeight: '57px' }],
        'h2': ['28px', { lineHeight: '42px' }],
        'h2-lg': ['32px', { lineHeight: '48px' }],
        'h3': ['18px', { lineHeight: '27px' }],
        'h3-lg': ['24px', { lineHeight: '36px' }],
        'h4': ['16px', { lineHeight: '24px' }],
        'h4-lg': ['24px', { lineHeight: '36px' }],
      },
      width: {
        'logo': '66px',
      },
      maxHeight: {
        'header': '104px',
      }
    }
  },
  variants: {
    extend: {
      container: [],
    },
  },
  plugins: [],
}