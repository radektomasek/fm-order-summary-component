/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        sm: 'var(--breakpoint-sm)',
        lg: 'var(--breakpoint-lg)',
      },
      width: {
        '70': 'var(--button-width-sm)',
        '81': 'var(--card-width-sm)',
        '86': 'var(--button-width-lg)',
        '100': 'var(--card-width-lg)'
      },
      height: {
        '12': 'var(--button-height)',
        '98': 'var(--card-content-height-sm)',
        '110': 'var(--card-height-sm)',
        '130': 'var(--card-height-lg)'
      },
      colors: {
        paleBluePrimary: 'var(--primary-pale-blue-color)',
        brightBluePrimary: 'var(--primary-bright-blue-color)',
        veryPaleBlue: 'var(--neutral-very-palce-blue-color)',
        desaturatedBlue: 'var(--neutral-desaturated-blue-color)',
        darkBlue: 'var(--neutral-dark-blue-color)',
        lightGray: 'var(--light-gray-color)'
      },
      fontSize: {
        '2xs': ['var(--link-size-small)', {
          lineHeight: 'var(--link-line-small)',
          fontWeight: '500'
        }],
        'xs': ['var(--text-size-tiny)', {
          lineHeight: 'var(--text-line-tiny)',
          fontWeight: '500'
        }],
        'sm': ['var(--text-size-small)', {
          lineHeight: 'var(--text-line-small)',
          fontWeight: '500'
        }],
        'base': ['var(--text-size-normal)', {
          lineHeight: 'var(--text-line-normal)',
          fontWeight: '500'
        }],
        'lg': ['var(--heading-size-medium)', {
          lineHeight: 'var(--heading-line-medium)',
          fontWeight: '900'
        }],
        'xl': ['var(--heading-size-large)', {
          lineHeight: 'var(--heading-line-large)',
          fontWeight: '900'
        }]
      },
      lineHeight: {
        '5.5': 'var(--text-line-smaller)'
      },
      fontFamily: {
        redHatDisplay: ['Red Hat Display', 'sans-serif'],
      },
      backgroundImage: {
        'mobile': "url('../../assets/pattern-background-mobile.svg')",
        'desktop': "url('../../assets/pattern-background-desktop.svg')",
        'hero': "url('../../assets/illustration-hero.svg')"
      },
    },
  },
  plugins: [],
}

