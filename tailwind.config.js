module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-orange':'#FA613F',
        'dark-orange': '#47ccd1',
        'custom-heading': '#05295E'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
