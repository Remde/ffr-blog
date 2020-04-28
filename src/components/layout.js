import React from "react"
const Layout = ({ location, title, children }) => {


  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#projects-section"]')
  }


  return (
    <div
      style={{
        fontFamily: 'Roboto Condensed',
      //  marginLeft: `auto`,
      //  marginRight: `auto`,
      //  maxWidth: rhythm(24),
      //  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <main>{children}</main>

    </div>
  )
}

export default Layout
