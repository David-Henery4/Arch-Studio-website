/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      veryDarkBlue: "#1B1D23",
      darkGrey: "#60636D",
      mediumGrey: "#7D828F",
      lightGrey: "#C8CCD8",
      veryLightGrey: "#EEEFF4",
      errorRed: "#DF5656",
    },
    fontFamily: {
      spartan: "'League Spartan', sans-serif",
    },
    extend: {
      letterSpacing: {
        xtraLrgHeading: "-5px",
        lrgMedHeading: "-2px",
      },
      lineHeight: {
        xtraLrgHeading: "200px",
        lrgHeading: "80px",
        medHeading: "64px",
        smHeading: "40px",
        bodyText: "24px",
      },
      fontSize: {
        xtraLrgHeading: "250px",
        lrgHeading: "96px",
        medHeading: "72px",
        smHeading: "32px",
        bodyText: "18px",
      },
      gridTemplateColumns: {
        mob: "32px repeat(10,1fr) 32px",
        tab: "98px repeat(10,1fr) 98px",
        desk: "165px repeat(10,1fr) 165px",
      },
    },
  },
  plugins: [],
};
