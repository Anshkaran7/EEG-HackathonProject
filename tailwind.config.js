

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'theme-gradient': "linear-gradient(101.24deg, #7161EF 0%, #A08AF9 100%);"
      },
      colors: {
       
        'theme-green': '#52FF36',
        'theme-yellow': '#FBFF36',
        'theme-blue': '#366EFF',
         'theme-gray-dark': '#374151',
         'theme-green-1': '#17A60A',
       
      },
    },
  },
  plugins: [],
}