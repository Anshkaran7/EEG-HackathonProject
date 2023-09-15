

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
         'theme-purple': '#7161EF',
        'theme-purple-1': '#8373FE',
        'theme-purple-2': '#968AF9',
        'theme-purple-light': '#EAE8FF',
        'theme-orange': '#FF7F00',
        'theme-orange-light': "#FFECD9",
        'theme-red': '#FD5757',
        'theme-red-light': '#FFE6E6',
        'theme-green': '#17A60A',
        'theme-green-light': '#D4F7E7',
        'theme-background-light': '#F3F4F6',
        'theme-yellow': '#FDBF6F',
        'theme-pink' : '#d700ff',
        'theme-pink-1' : '#ff008438',
       
      },
    },
  },
  plugins: [],
}