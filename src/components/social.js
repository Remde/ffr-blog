import React from "react"
import { Link } from "gatsby"
import containerStyles from "./social.module.css"
import Git from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"
import Mail from "../images/mail.svg"


export default () =>
<div className={containerStyles.about} id="social-section">

  <div className={containerStyles.link}>
    <a href="https://github.com/Remde"><img className={containerStyles.center} src={Git} alt="Github" /></a>
  </div>

  <div className={containerStyles.link}>
    <a href="mailto:ffremde@gmail.com"><img className={containerStyles.center} src={Mail} alt="Email" /></a>
  </div>

  <div className={containerStyles.link}>
    <a href="https://www.linkedin.com/in/fernando-remde-291a641a6/"><img className={containerStyles.center} src={Linkedin} alt="LinkedIn" /></a>
  </div>

</div>
