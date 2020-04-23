import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Roboto Condensed", "sans-serif"],
  bodyFontFamily: ["Roboto Condensed", "sans-serif"]
});


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
