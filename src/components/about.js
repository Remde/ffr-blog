import React from "react"
import containerStyles from "./about.module.css"


export default () =>
<div className={containerStyles.aboutPage}>
  <div className={containerStyles.aboutContainer}>
    <p>My name is Fernando Remde and I'm a student from Brazil currently enrolled in computer engineering
    at UFRGS (Porto Alegre - RS). In my spare time, besides coding, I like to listen to, review and compose music, and I'm also a fitness and fashion enthusiast.
    My goal with this website is to create a hub where I can gather references, host and showcase my projects, as well as learn
    throughout the whole process of developing and deploying.</p>
    <p>This site was developed with the React framework using HTML, CSS (sass, flexbox), and JavaScript. The static pages were built locally with Gatsby and
   the build files were sent to my Linux remote server using Git and deployed with nginx webserver. You can find the
    code at the <a href="https://github.com/Remde" target="_blank">Github repository</a>.</p>
    <p>You can also find me at <a href="https://www.twitter.com/fernandoremde" target="_blank">Twitter</a>, <a href="https://www.facebook.com/fernando.remde" target="_blank">Facebook</a>, <a href="https://www.last.fm/user/nandoremde" target="_blank">Last.fm</a>, as
    well as on the image links below, which you have probably already seen.
</p><br />
    <p>Thanks for visiting.</p>
  </div>
</div>
