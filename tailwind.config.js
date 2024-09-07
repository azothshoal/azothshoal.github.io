const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js,hbs}",
    "!**/node_modules/**"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          'main': '#4f46e5',  // Indigo for main page
          'cats': '#f59e0b',  // Amber for cats page
          'plants': '#10b981', // Emerald for plants page
          'about': '#3b82f6',  // Blue for about page
        },
        'sidebar': '#475569', // Slate for sidebar
        'background': '#e4e4e7', // Zinc for page background
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary-main',
    'bg-primary-cats',
    'bg-primary-plants',
    'bg-primary-about'
  ],
};
