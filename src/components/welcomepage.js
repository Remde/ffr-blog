import React from "react"
import { Link } from "gatsby"
import containerStyles from "./welcomepage.module.css"

export default () =>
  <div className={containerStyles.welcomeSection}>
    <div className={containerStyles.welcomeText}>
      <h1 className={containerStyles.mainText}>fernando remde</h1>
      <p className={containerStyles.subText}>a portfolio website. I also write <Link to="/blog">here</Link>.</p>
    </div>
  </div>
