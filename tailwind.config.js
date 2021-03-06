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
      16: "16px",
      18: "18px",
      20: "20px",
      25: "25px",
      30: "30px",
      34: "34px",
      36: "36px",
      40: "40px",
      45: "45px",
      50: "50px",
      60: "60px",
      70: "70px",
      80: "80px",
      85: "85px",
      90: "90px",
      100: "100px",
      105: "105px",
      110: "110px",
      120: "120px",
      124: "124px",
      130: "130px",
      140: "140px",
      150: "150px",
      160: "160px",
      170: "170px",
      185: "185px",
      200: "200px",
      210: "210px",
      230: "230px",
      '1rem': '1rem',
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
        'check-icon': '16px',
        'dark-icon': '20px',
        'chevron-icon': '18px',
        'chevron-icon-lg': '23px',
        'hand-point': '33px',
        'initial': 'initial',
        'home-button': '260px',
        'home-video': 'calc(100% - 40px)',
        'slider-indicator': '50px',
        'slider-indicator-active': '70px',
        'filter-items-illustration': '40px',
        'filter-items-illustration-lg': '80px',
        'popup-border': '230px',
        'popup-border-lg': '312px',
        '24%': '24%',
        '31%': '31%',
        '32%': '32%',
        '42%': '42%',
        '43%': '43%',
        '45%': '45%',
        '48%': '48%',
        '49%': '49%',
      },
      minWidth: {
        'post-preview': '600px',
        'post-preview-copy': '290px',
        'unset': 'unset',
      },
      maxWidth: {
        'footer-column': '450px',
        'home-intro-title': '75%',
        'home-intro-title-sm': '53%',
        'home-intro-title-md': '50%',
        'home-intro-title-lg': '680px',
        'text-link-image-copy': '522px',
        'text-link-image-image': '740px',
        'post': '846px',
        'post-preview': '600px',
        'post-preview-2xl': '685px',
        'post-preview-image': '305px',
        'post-preview-copy': '300px',
        'post-preview-copy-lg': '400px',
        'post-preview-copy-xl': '360px',
        'text': '522px',
        'testimonial': '281px',
        'testimonial-lg': '327px',
        'filter-items': '305px',
        'filter-items-lg': '410px',
        'filter-items-text': '512px',
        'title-text-list-text': '630px',
        'tabs-list': '645px',
        'accordion-description': '451px',
        'image-slider-text-image': '470px',
        'image-slider-text-illustration': '280px',
        'image-slider-text-copy': '320px',
        'image-slider-text-figure': '1000px',
        'footer-logo': '147px',
        'popup-title': '680px',
        'featured-post-post': '700px',
      },
      height: {
        'header': '85px',
        'header-lg': '176px',
        'menu': '45px',
        'footer-line': '200%',
        'initial': 'initial',
        'video': '250px',
        'video-lg': '505px',
        'video-xl': '580px',
        'post-image': '560px',
        'post-preview-image': '210px',
        'post-preview-image-lg': '200px',
        'page-intro-media': '200px',
        'slider-indicator': '5px',
        'image-slider-lg': '700px',
        'popup-border': '230px',
        'popup-border-lg': '312px',
      },
      maxHeight: {
        'header': '85px',
      },
      fill: theme => ({
        'light': theme('colors.gray'),
        'blue' : theme('colors.blue'),
        'yellow' : theme('colors.yellow'),
        'primary' : theme('colors.primary'),
        'gray-2' : theme('colors.gray.2'),
      }),
      stroke: theme => ({
        'light': theme('colors.gray'),
        'blue' : theme('colors.blue'),
        'yellow' : theme('colors.yellow'),
        'primary' : theme('colors.primary'),
        'gray-2' : theme('colors.gray.2'),
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
      display: ['dark'],
      rotate: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}