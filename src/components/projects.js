import React from "react"
import containerStyles from "./projects.module.css"
import Blogimg from "../images/blog.png"
import Gardenimg from "../images/garden.png"
import Myfeedimg from "../images/myfeed.png"
import Smbimg from "../images/supermercadobot.png"

export default () =>
<div className={containerStyles.projects} id="projects">

  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/remde/fernandoremde-website" rel="noopener noreferrer" target="_blank">
    <img className={containerStyles.imagem} src={Blogimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>website and blog</h2>
      <p>fernandoremde.com is an open source responsive website made with the React framework and built using Gatsby.</p>
    </div>
  </a>
  </div>

  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/remde/myfeed" rel="noopener noreferrer" target="_blank">
    <img className={containerStyles.imagem} src={Myfeedimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>myfeed</h2>
      <p>myfeed is a way to get lobste.rs and hackernews articles straight from the terminal. Developed in Golang.</p>
    </div>
  </a>
  </div>

  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/remde/gardn" rel="noopener noreferrer" target="_blank">
    <img className={containerStyles.imagem} src={Gardenimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>gardn</h2>
      <p>Gardn is an anonymous web message app based on React. Back-end was developed using Node.js and Express.</p>
    </div>
    </a>
  </div>

  <div className={containerStyles.projectsItem}>
  <a href="https://github.com/remde/supermercadobot" rel="noopener noreferrer" target="_blank">
    <img className={containerStyles.imagem} src={Smbimg} alt="Project 1" />
    <div className={containerStyles.projectsItemText}>
      <h2>super mercado bot</h2>
      <p>Super Mercado Bot is a Telegram Bot developed in node.js that manages grocery shopping.</p>
    </div>
    </a>
  </div>

</div>
