const { heroui } = require("@heroui/theme");

// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a', // green-600
        secondary: '#15803d', // green-700
      },
    },
  },
  plugins: [heroui()],
}