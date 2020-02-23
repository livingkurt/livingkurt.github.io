import React from "react";
import Head_Shot from "./Head_Shot.jpeg"
import "./pages.css"

function Home() {
    return (
        <div id="home_container_div">
            <div id="home_words_div">
                <h1>Kurt LaVacque</h1>
                <h2>Web Developer</h2>
                <h2>Creator</h2>
                <h2>Thinker</h2>
                {/* <p>
                    My name is Kurt LaVacque and I am an innovator. I take old ideas and make them work better. I learn, create, and make my world around me into a well-oiled machine constantly improving every day. I live in Austin, TX, I am a web developer by day and CAD designer by night. If I'm not moving forward, then I must be moving backward.
            </p> */}
            </div>
            <div id="home_img_div">

                <img id="head_shot" src={Head_Shot} alt="Head Shot" />
            </div>

        </div>
    );
}

export default Home;
