import React from "react"
import { Link } from "gatsby"
import containerStyles from "./about.module.css"


export default () =>
<div className={containerStyles.aboutPage}>
  <div className={containerStyles.aboutContainer}>
    <p>My name is Fernando Remde and I'm a student from Brazil. I am currently enrolled in computer engineering
    at UFRGS (Porto Alegre - RS).
    My goal with this page is to create a hub where I can gather references, host and showcase my projects, as well as learn
    throughout the whole process of developing and deploying.</p>
    <p>This site was developed with HTML, CSS, JavaScript and React, and the static pages built locally with Gatsby.
    The build files were sent to my Linux remote server using Git and deployed with nginx webserver. You can find the
    code at my <a href="https://github.com/Remde">Github repository.</a></p>
    <p>You can also find me at <a href="https://www.twitter.com/fernandoremde">Twitter</a>, <a href="https://www.facebook.com/fernando.remde">Facebook</a>, <a href="https://www.last.fm/user/nandoremde">Last.fm</a>, as
    well as on the image links below, which you have probably already seen.
</p>
    <p>Thanks for visiting.</p>
  </div>
</div>
