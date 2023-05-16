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
      colors: {
        paleBluePrimary: 'var(--primary-pale-blue-color)',
        brightBluePrimary: 'var(--primary-bright-blue-color)',
        veryPaleBlue: 'var(--neutral-very-palce-blue-color)',
        desaturatedBlue: 'var(--neutral-desaturated-blue-color)',
        darkBlue: 'var(--neutral-dark-blue-color)',
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
      },
    },
  },
  plugins: [],
}

