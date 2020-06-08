import React from "react"
import containerStyles from "./navbar.module.css"
import { Link } from "gatsby"


export default () =>
<div className={containerStyles.navbar}>
  <div className={containerStyles.homeLink}>
    <Link to="/" activeStyle={{ color: "black" }}>home</Link>
  </div>
  <div className={containerStyles.projectsLink}>
    <Link to="#projects" activeStyle={{ color: "black" }}>projects</Link>
  </div>
  <div className={containerStyles.blogLink}>
    <Link to="/blog" activeStyle={{ color: "black" }} partiallyActive={true}>blog</Link>
  </div>
  <div className={containerStyles.aboutLink}>
    <Link to="/about" activeStyle={{ color: "black" }}>about</Link>
  </div>
</div>
