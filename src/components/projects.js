import React from "react"
import { Link } from "gatsby"
import containerStyles from "./projects.module.css"
import Projectimg from "../images/projectImg.png"

export default () =>
<div className={containerStyles.projects} id="projects">

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>website and blog</h2>
      <p>fernandoremde.com is an open source responsive website made with the React framework and the static pages are built using Gatsby.</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>note player</h2>
      <p>BTOWEEN is a music player made with Java in which you can specify musical notes in the key of C and it plays back to you.</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>project title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec bibendum nulla. Nulla nulla nunc, elementum pharetra blandit ut, ornare in ex. In hac habitasse platea dictumst.</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>project title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nibh diam, vel venenatis leo sodales eget. Vestibulum a magna dui. Nunc efficitur et dolor eu imperdiet.</p>
    </div>
  </div>



</div>
