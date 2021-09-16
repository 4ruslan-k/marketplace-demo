module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
      print: { raw: "print" },
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "0.1rem",
      2: "0.2rem",
      3: "0.3rem",
      4: "0.4rem",
      5: "0.5rem",
      6: "0.6rem",
      8: "0.8rem",
      10: "1rem",
      12: "1.2rem",
      16: "1.6rem",
      20: "2rem",
      24: "2.4rem",
      30: "3rem",
      32: "3.2rem",
      40: "4rem",
      48: "4.8rem",
      50: "5rem",
      52: "5.2rem",
      56: "5.6rem",
      64: "6.4rem",
      128: "12.8rem",
      160: "16rem",
      200: "20rem",
      250: "25rem",
      280: "28rem",
      300: "30rem",
      320: "32rem",
      400: "40rem",
    },
    fontSize: {
      8: "0.8rem",
      10: "1rem",
      12: "1.2rem",
      14: "1.4rem",
      16: "1.6rem",
      20: "2rem",
      24: "2.4rem",
      32: "3.2rem",
      40: "4rem",
      48: "4.8rem",
      56: "5.6rem",
      64: "6.4rem",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
