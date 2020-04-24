import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  //let header

  if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#projects-section"]')
  }
  //if (location.pathname === rootPath) {
    /*header = (<Navbar />)/*(
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = ( //dae man bota o header do site aquizao papai
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )*/

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
