module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        themecolor1: "#000201",
        themecolor2: "#0D2611",
        themecolor3: "#1D4A24",
        themecolor4: "#306E38",
        themecolor5: "#47924F",
        themecolor6: "#61B668",
        themecolor7: "#7EDA84",
      },
      fontFamily: {
        opensans: "Open Sans",
      },
      fontSize: {
        "25xl": "1.7rem",
      },
      inset: {
        "99/100": "99%",
        "9995/100": "99.95%",
        "95/10": "95%",
        "90/10": "90%",
        "85/10": "85%",
        "80/10": "80%",
        "45/10": "45%",
        "4/10": "40%",
        "1/10": "10%",
        "1/20": "5%",
        "1/30": "3.34%",
        "1/100": "1%",
      },
      width: {
        "32rem": "32rem",
        192: "48rem",
      },
      flexGrow: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
