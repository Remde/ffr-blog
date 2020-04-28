import React from "react"

import { rhythm } from "../utils/typography"

import Navbar from "./navbar"
import Footer from "./footer"
import Social from "./social"

const Layout = ({ location, title, children }) => {
  let header


    header = (
      <h3
        style={{
          marginTop: 40,
          textAlign: 'left',
          fontSize: 50,
        }}
      >
      </h3>
    )

  return (
    <div><Navbar />
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>

    </div>
    <Social />
    <Footer />
    </div>
  )
}

export default Layout
