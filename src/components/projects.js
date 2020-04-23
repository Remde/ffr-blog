import React from "react"
import { Link } from "gatsby"
import containerStyles from "./projects.module.css"
import Projectimg from "../images/projectImg.png"

export default () =>
<div className={containerStyles.projects}>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>Title 1</h2>
      <p>an actual epic project called PROJECT-1 which will unironically save the world</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>Title 1</h2>
      <p>an actual epic project called PROJECT-1 which will unironically save the world</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>Title 1</h2>
      <p>an actual epic project called PROJECT-1 which will unironically save the world</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>Title 1</h2>
      <p>an actual epic project called PROJECT-1 which will unironically save the world</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>Title 1</h2>
      <p>an actual epic project called PROJECT-1 which will unironically save the world</p>
    </div>
  </div>

  <div className={containerStyles.projectsItem}>
    <Link to="/"><img src={Projectimg} alt="Project 1" /></Link>
    <div className={containerStyles.projectsItemText}>
      <h2>Title 1</h2>
      <p>an actual epic project called PROJECT-1 which will unironically save the world</p>
    </div>
  </div>

</div>
