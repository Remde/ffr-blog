import React from "react"
import { Link } from "gatsby"
import containerStyles from "./social.module.css"
import Git from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"
import Mail from "../images/mail.svg"
import Githover from "../images/github_hover.svg"
import Linkedinhover from "../images/linkedin_hover.svg"
import Mailhover from "../images/mail_hover.svg"


export default () =>
<div className={containerStyles.about} id="social-section">

  <a href="https://www.github.com/Remde" target="_blank">
    <div className={containerStyles.github}>
    </div>
  </a>

  <a href="mailto:ffremde@gmail.com">
    <div className={containerStyles.mail}>
    </div>
  </a>

  <a href="https://www.linkedin.com/in/fernando-remde-291a641a6/" target="_blank">
    <div className={containerStyles.linkedin}>
    </div>
  </a>
</div>
