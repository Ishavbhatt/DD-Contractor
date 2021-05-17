module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-orange':'#FA613F',
        'light-orange': '#fb7051',
        'custom-heading': '#05295E',
        'custom-grey': '#83868c',
        't-c-grey': '#888888',
        'b-r-color': '#e6e6e6',
        'ftr-bg': '#091B27',
        'copyright-bg': '#06151F'
      },
      width: {
        '2px': "2px",
        '23p': '23%',
        '30p': '30%',
        '50p': '50%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
