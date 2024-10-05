/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scanning all relevant files for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding the Poppins font
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Custom utility for hiding the scrollbar
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // Hide scrollbar for Internet Explorer and Edge
          'scrollbar-width': 'none', // Hide scrollbar for Firefox
        },
      }, ['responsive', 'hover']);
    },
  ],
};




