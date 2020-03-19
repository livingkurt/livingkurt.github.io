import React from "react";
import Head_Shot from "./images/Head_Shot.jpeg"
import "./page_styles/pages.css"
import "./page_styles/media_queries.css"
import "./page_styles/animations.css"

function About() {
  return (
    <div id="home_container_div">
      <div id="home_words_div">
        <h1 id="about_h1">About Me</h1>
        <div id="about_me_div">
          <p>
            My name is <strong>Kurt LaVacque</strong> and I am an <strong>innovator</strong>!
        </p>
          <p>
            I use the <strong>foundation</strong> of old concepts to sculpt <strong>new ideas</strong>.
        </p>
          <p>
            I learn, create, and make the world around me into a <strong>well-oiled machine</strong>, constantly improving every day.
        </p>
          <p>
            I live in <strong>Austin, TX</strong>.
        </p>
          <p>
            I am a <strong>web developer</strong> by day and <strong>CAD designer</strong> by night.
        </p>
          <p>
            I believe that if I'm not <strong>moving forwards</strong>, then I must be <strong>moving backwards</strong>.
        </p>
          <p>
            <strong>Skills:</strong> Javascript (MERN Stack), MySQL, Python, Ableton Live 9, Fusion 360
        </p>
        </div>
      </div>
      <div id="home_img_div" className="zoom_img">
        <img id="about_head_shot" className="responsive" src={Head_Shot} alt="Head Shot" />
      </div>

    </div>
  );
}

export default About;