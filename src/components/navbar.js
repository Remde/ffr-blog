import React from "react"
import containerStyles from "./navbar.module.css"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"


export default () =>
<div className={containerStyles.navbar}>
  <Link to="/" activeStyle={{ color: "black" }}>home</Link>
  <Link to="#projects-section" activeStyle={{ color: "black" }}>projects</Link>
  <Link to="#about-section" activeStyle={{ color: "black" }}>about</Link>
  <Link to="/blog" activeStyle={{ color: "black" }} partiallyActive={true}>blog</Link>
</div>
