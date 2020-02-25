import React from "react";
import Head_Shot from "./Head_Shot.jpeg"
import Thingiverse from "./Thingiverse_Logo.png"
import "./pages.css"

function Home() {
  return (
    <div id="home_container_div">
      <div id="home_words_div">
        <h1>Kurt LaVacque</h1>
        <h2>Web Developer</h2>
        <h2>Creator</h2>
        <h2>Thinker</h2>
        <div id="icon_container">
          <a href="https://github.com/livingkurt" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon zoom_i"></i></a>
          <a href="https://www.thingiverse.com/livingkur1/designs" target="_blank" rel="noopener noreferrer"><img id="thingiverse_logo" className="responsive zoom_i" src={Thingiverse} alt="Head Shot" /></a>
          <a href="https://www.instagram.com/vintage_ntre/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon zoom_i"></i></a>
          {/* <a href="https://www.instagram.com/vintage_ntre/"><i className="fab fa-facebook-square icon"></i></a> */}
        </div>
      </div>
      {/* <div id="home_img_div">
        <img id="head_shot" className="responsive zoom_img" src={Head_Shot} alt="Head Shot" />
      </div> */}
      <a className="zoom_img tooltip_h" href="/about">
        <img id="head_shot" className="responsive " src={Head_Shot} alt="Head Shot" />
        <span id="home_pop_up" className="tooltiptext_h"> Learn More About Me</span>
      </a>

    </div>
  );
}

export default Home;
