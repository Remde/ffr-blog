import React from "react"
import { Link } from "gatsby"
import containerStyles from "./projects.module.css"
import Projectimg from "../images/projectImg.png"
import Picsimg from "../images/cars.png"
import Blogimg from "../images/blog.png"
import Noteimg from "../images/note.png"
import Gardenimg from "../images/garden.png"

export default () =>
<div className={containerStyles.projects} id="projects">


  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/Remde/fernandoremde-website" target="_blank">
    <img className={containerStyles.imagem} src={Blogimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>website and blog</h2>
      <p>fernandoremde.com is an open source responsive website made with the React framework and built using Gatsby.</p>
    </div>

  </a>
  </div>


  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/Remde/BTOWEEN" target="_blank">
    <img className={containerStyles.imagem} src={Noteimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>music player</h2>
      <p>BTOWEEN is a music player made with Java in which you can specify musical notes in the key of C and it plays back to you.</p>
    </div>
  </a>
  </div>

  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/Remde/react-pics" target="_blank">
    <img className={containerStyles.imagem} src={Picsimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>pics search</h2>
      <p>Pics is a project made with React that fetches images with axios and display them on screen adjusting the divs to their sizes.</p>
    </div>
    </a>
  </div>

  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/Remde/gardn" target="_blank">
    <img className={containerStyles.imagem} src={Gardenimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>gardn (work in progress)</h2>
      <p>Gardn is an anonymous web message web based on React. Back-end was built using Node.js.</p>
    </div>
    </a>
  </div>



</div>
