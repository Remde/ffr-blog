import React from "react"
import containerStyles from "./navbar.module.css"
import { Link } from "gatsby"


export default () =>
<div className={containerStyles.navbar}>
  <Link to="/" activeStyle={{ color: "black" }}>home</Link>
  <Link to="#projects" activeStyle={{ color: "black" }}>projects</Link>
  <Link to="/blog" activeStyle={{ color: "black" }} partiallyActive={true}>blog</Link>
  <Link to="/about" activeStyle={{ color: "black" }}>about</Link>
</div>
