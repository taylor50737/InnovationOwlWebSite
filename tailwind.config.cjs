/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'whoWeAre': ("url('/public/image/banner.png')"),
        'services': ("url('/public/image/services_bg.png')"),
      },
      dropShadow: {
        '5xl': '35px 35px 35px rgba(135, 206, 250, 0.35)',
      },
      colors: {
        'sky-blue': '#53a6db',
        'sky-blue2': '#e2f2fb',
        'sky-blue3': '#e3f1fa',
        'footer-gray': '#515c6a',
        'cyan-custom': '#80c7ca',
        'blue-custom': '#76a2d1'
      },
      scale: {
        '60': '0.6'
      }
    },
  },
  plugins: [],
}