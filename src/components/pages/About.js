import React from "react";
import Head_Shot from "./Head_Shot.jpeg"
import "./pages.css"

function About() {
  return (
    <div id="home_container_div">
      <div id="home_words_div">
        <h1>About Me</h1>
        <p>
          My name is Kurt LaVacque and I am a innovator!
        </p>
        <p>
          I take old ideas and make them work better.
        </p>
        <p>
          I learn, create, and make my world around me into a well-oiled machine constantly improving every day.
        </p>
        <p>
          I live in Austin, TX, I am a web developer by day and CAD designer by night.
        </p>
        <p>
          If I'm not moving forward, then I must be moving backward.
        </p>
      </div>
      <div id="home_img_div">
        <img id="head_shot" className="responsive" src={Head_Shot} alt="Head Shot" />
      </div>

    </div>
  );
}

export default About;