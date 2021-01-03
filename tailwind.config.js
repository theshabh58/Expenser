module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Arvo"],
        headings: ["Josefin Slab"],
      },
      colors: {
        primary: {
          100: " #10ddc2",
          200: "#15b7b9",
        },
        secondary: {
          100: "#10ddc2",
          200: "#f57170",
          300: "#f5f5f5",
        },
        visibility: ["hover"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
