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
      12: "12px",
      15: "15px",
      20: "20px",
      25: "25px",
      30: "30px",
      36: "36px",
      40: "40px",
      50: "50px",
      60: "60px",
      80: "80px",
      85: "85px",
      100: "100px",
      105: "105px",
      110: "110px",
      120: "120px",
      124: "124px",
      130: "130px",
      150: "150px",
      170: "170px",
      185: "185px",
      200: "200px",
      230: "230px",
      'header': "theme(height.header)",
      'header-lg': "theme(height.header-lg)",
      'container': "theme(container.padding)",
    },
    extend: {
      container: {
        padding: '20px',
        center: true,
      },
      colors: {
        //Base
        transparent: 'transparent',
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
        'h4-lg': ['18px', { lineHeight: '27px' }],
        'post-preview': ['22px', { lineHeight: '33px' }],
      },
      width: {
        'logo': '66px',
        'logo-lg': '145px',
        'menu': '45px',
        'icon': '16px',
        'dark-icon': '20px',
        'hand-point': '33px',
        'initial': 'initial',
        'home-button': '260px',
        'home-video': 'calc(100% - 40px)',
        '42%': '42%',
        '24%': '24%',
        '31%': '31%',
      },
      minWidth: {
        'post-preview': '590px',
      },
      maxWidth: {
        'footer-column': '400px',
        'home-intro-title': '75%',
        'home-intro-title-sm': '53%',
        'home-intro-title-md': '50%',
        'home-intro-title-lg': '690px',
        'text-link-image-image': '740px',
        'post': '846px',
        'post-preview-image': '305px',
        'post-preview-copy': '360px',
        'text': '522px',
        'testimonial': '281px',
        'testimonial-lg': '327px',
        'filter-items': '260px',
      },
      height: {
        'header': '85px',
        'header-lg': '176px',
        'menu': '45px',
        'footer-line': '200%',
        'initial': 'initial',
        'video': '250px',
        'video-lg': '450px',
        'post-image': '560px',
        'post-preview-image': '180px',
        'post-preview-image-lg': '200px',
      },
      maxHeight: {
        'header': '85px',
      },
      fill: theme => ({
        'light': theme('colors.gray'),
        'blue' : theme('colors.blue'),
      }),
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      skew: {
      '-4': '-4deg', 
      },
      inset: {
        '-4%': '-4%',
        'unset': 'unset',
      },
      transformOrigin: {
        'full': '100%',
      },
    }
  },
  variants: {
    extend: {
      container: [],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}