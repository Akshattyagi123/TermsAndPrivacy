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
    screens: {
      xsm: { min: '320px', max: '480px' },
      sm: { min: '481px', max: '720px' },
      md: { min: '721px', max: '1024px' },
      lg: { min: '1025px', max: '1599px' },
      xl: { min: '1600px', max: '1999px' },
      '2xl': { min: '2000px' },
      // Uncomment and customize if needed
      // fold: { min: '660px', max: '690px' },
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




