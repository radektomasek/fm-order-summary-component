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

