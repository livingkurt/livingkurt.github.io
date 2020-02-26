import React from "react";
import Head_Shot from "./Head_Shot.jpeg"
import "./about.css"

function About() {
  return (
    <div id="home_container_div">
      <div id="home_words_div">
        <h1 id="about_h1">About Me</h1>
        <div id="about_me_div">
          <p>
            My name is Kurt LaVacque and I am an innovator!
        </p>
          <p>
            I use the foundation of old concepts to sculpt new ideas.
        </p>
          <p>
            I learn, create, and make the world around me into a well-oiled machine, constantly improving every day.
        </p>
          <p>
            I live in Austin, TX.
        </p>
          <p>
            I am a web developer by day and CAD designer by night.
        </p>
          <p>
            I believe that if I'm not moving forwards, then I must be moving backwards.
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