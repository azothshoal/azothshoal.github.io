const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          'main': '#4f46e5', // Indigo for main page
          'cats': '#fbbf24', // Amber for cats page
          'plants': '#16a34a', // Green for plants page
          'about': '#2563eb', // Blue for about page
        },
        'sidebar': '#475569', // Slate for sidebar
        'background': '#e4e4e7', // Zinc for page background
      },
    },
  },
  plugins: [],
};
