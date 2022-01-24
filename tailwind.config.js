module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      
    },
    spacing: {
      '5': '5px',
      'pad20': '20px',
    },
    colors: {
      dark: '#31353B',
      white: '#ffffff',
      orange: '#F85A47',
    }
  },
  plugins: [],
}
