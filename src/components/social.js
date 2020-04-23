import React from "react"
import { Link } from "gatsby"
import containerStyles from "./social.module.css"
import Git from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"
import Mail from "../images/mail.svg"


export default () =>
<div className={containerStyles.about}>

  <div className={containerStyles.link}>
    <Link to="https://github.com/Remde"><img className={containerStyles.center} src={Git} alt="Github" /></Link>
  </div>

  <div className={containerStyles.link}>
    <Link to="mailto:ffremde@gmail.com"><img className={containerStyles.center} src={Mail} alt="Email" /></Link>
  </div>

  <div className={containerStyles.link}>
    <Link to="https://www.linkedin.com/in/fernando-remde-291a641a6/"><img className={containerStyles.center} src={Linkedin} alt="LinkedIn" /></Link>
  </div>

</div>
