import Typography from "typography"
import deYoungTheme from "typography-theme-de-young"

deYoungTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      textDecoration: "none",
    },
    a: {
      boxShadow: `none`,
      textDecoration: "none",
    },
  }
}

const typography = new Typography(
  //   {
  //     baseFontSize: "18px",
  //     baseLineHeight: 1.666,
  //     // headerFontFamily: [
  //     //   "Avenir Next",
  //     //   "Helvetica Neue",
  //     //   "Segoe UI",
  //     //   "Helvetica",
  //     //   "Arial",
  //     //   "sans-serif",
  //     // ],
  //     // bodyFontFamily: ["Georgia", "serif"],
  //   },
  deYoungTheme
)
export default typography
