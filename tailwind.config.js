module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        peeyellow: {
          DEFAULT: '#ffe7aa'
        },
        peeblue: {
          DEFAULT: '#0d2f81',
          200: '#0061ff',
          100: '#1d73ff'
        }
      },
      fontFamily: {
        serif: ['Montserrat', 'serif']
      },
      border: {
        l: {
          3: '3px'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
