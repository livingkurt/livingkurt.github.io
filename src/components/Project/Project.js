import React from "react";
import './project.css'
// import Livdin from "../pages/Livdin_Logo_blue.png"


function Project(props) {


  return (
    <div id="project_container_div" >
      <div id="project_img_div">
        <a className="zoom_p tooltip_p" href={props.url} target="_blank" rel="noopener noreferrer">
          <img className="project_image img-fluid" src={props.image ? props.image : "https://via.placeholder.com/200"} alt={props.name} />
          <span id="home_pop_up" className="tooltiptext_p">View Deploy</span>
        </a>
      </div>
      <div className="project_name_div tooltip_n">

        <h3 className="project_name">{props.name}</h3>
        <p className="project_description_p">
          {props.description}
        </p>
        <a className="" id="words" href={props.github_url} target="_blank" rel="noopener noreferrer">
          <span id="home_pop_up" className="tooltiptext_n">View Github Repo</span>
        </a>
      </div>

    </div>
  );
}

export default Project;
