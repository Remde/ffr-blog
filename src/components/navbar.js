import React from "react"
import { Link } from "gatsby"
import containerStyles from "./navbar.module.css"


export default () =>
<div className={containerStyles.navbar}>
  <Link to="/">home</Link>
  <Link to="#projects-section">projects</Link>
  <Link to="#about-section">about</Link>
  <Link to="/blog">blog</Link>
</div>
