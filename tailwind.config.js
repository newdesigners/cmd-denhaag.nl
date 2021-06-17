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
    spacing: {
      0: "0px",
      px: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      15: "15px",
      20: "20px",
      40: "40px",
      85: "85px",
      'header': "theme(height.header)",
      'header-lg': "theme(height.header-lg)",
    },
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
        'small': ['12px', { lineHeight: '18px'}],
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
        'logo-lg': '145px',
        'menu': '45px',
        'dark-icon': '20px',
        'initial': 'initial',
      },
      height: {
        'header': '85px',
        'header-lg': '176px',
        'menu': '45px',
      },
      maxHeight: {
        'header': '85px',
      },
      fill: theme => ({
        'light': '#f2f2f2',
      }),
    }
  },
  variants: {
    extend: {
      container: [],
    },
  },
  plugins: [],
}