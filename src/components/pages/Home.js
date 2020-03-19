// React
import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./page_styles/pages.css"
import "./page_styles/media_queries.css"
import "./page_styles/animations.css"
// Files
import Head_Shot from "./images/Head_Shot.jpeg"
import Thingiverse from "./images/Thingiverse_Logo.png"

function Home() {
  return (
    <div id="home_container_div">
      <div id="home_words_div">
        <div id="words_div">
          <h1 id="home_h1">Kurt LaVacque</h1>
          <div id="small_header_div">
            <h2 className="" id="web_developer_h2">Web Developer</h2>
            <h2 className="" id="creator_h2">Creator</h2>
            <h2 className="" id="thinker_h2">Thinker</h2>
          </div>
        </div>
        <div id="icon_container">
          <a id="github_icon" href="https://github.com/livingkurt" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon zoom_i"></i></a>
          <a href="https://www.thingiverse.com/livingkur1/designs" target="_blank" rel="noopener noreferrer"><img id="thingiverse_logo" className="responsive zoom_i" src={Thingiverse} alt="Head Shot" /></a>
          <a href="https://www.instagram.com/vintage_ntre/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon zoom_i"></i></a>
          <a href="https://www.linkedin.com/in/kurt-lavacque/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon zoom_i"></i></a>
        </div>
      </div>
      <div id="head_shot_div">
        <Link to="/about" className="zoom_img tooltip_h" >
          <img id="head_shot" className="responsive " src={Head_Shot} alt="Head Shot" />
          <span id="home_pop_up" className="tooltiptext_h"> Learn More About Me</span>
        </Link>
      </div>

    </div>
  );
}

export default Home;
