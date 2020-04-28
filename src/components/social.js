import React from "react"
import containerStyles from "./social.module.css"



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
