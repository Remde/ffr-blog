import React from "react"
import { Link } from "gatsby"
import containerStyles from "./navbar.module.css"


export default () =>
<div className={containerStyles.navbar}>
  <Link to="/" activeStyle={{ color: "black" }}>home</Link>
  <Link to="#projects-section" activeStyle={{ color: "black" }}>projects</Link>
  <Link to="#about-section" activeStyle={{ color: "black" }}>about</Link>
  <Link to="/blog" activeStyle={{ color: "black" }} partiallyActive={true}>blog</Link>
</div>
