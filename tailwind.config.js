/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      lrgMob: "25em", // 400px not used yet
      smTab: "32.81em", // 525px
      mdTab: "39.06em", // 625px
      tab: "46.25em", // 740px
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
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
      backgroundImage: {
        aboutCTAMob: "url('/src/assets/home/mobile/image-small-team.jpg')",
        aboutCTATab: "url('/src/assets/home/tablet/image-small-team.jpg')",
        aboutCTALap: "url('/src/assets/home/desktop/image-small-team.jpg')",
      },
      letterSpacing: {
        xtraLrgHeading: "-5px",
        xtraLrgHeadingMob: "2px",
        //
        lrgMedHeading: "-2px",
        lrgMedHeadingMob: "-1.71px",
      },
      lineHeight: {
        xtraLrgHeading: "200px",
        xtraLrgHeadingMob: "48px",
        //
        lrgHeading: "80px",
        lrgHeadingMob: "52px",
        //
        medHeading: "64px",
        //
        smHeading: "40px",
        //
        bodyText: "24px",
      },
      fontSize: {
        xtraLrgHeading: "250px",
        xtraLrgHeadingMob: "48px",
        //
        lrgHeading: "96px",
        lrgHeadingMob: "48px",
        //
        medHeading: "72px",
        //
        smHeading: "32px",
        //
        bodyText: "18px",
      },
      gridTemplateColumns: {
        mob: "32px repeat(10,1fr) 32px",
        mdTab: "66px repeat(10,1fr) 66px",
        tab: "98px repeat(10,1fr) 98px",
        footerTab: "1fr 156px",
        desk: "165px repeat(10,1fr) 165px",
      },
      gridTemplateRows: {
        footerMob: "60px",
      },
    },
  },
  plugins: [],
};
