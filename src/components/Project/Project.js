import React from "react";
import './project.css'
// import Livdin from "../pages/Livdin_Logo_blue.png"


function Project(props) {
    return (
        <div id="project_container_div">
            <a className="box"href={props.url} target="_blank"><img className="project_image img-fluid" src={props.image ? props.image : "https://via.placeholder.com/200"} alt={props.name} /></a>
            <div className="project_name_div">
                <h3 className="project_name">{props.name}</h3>
                <p className="project_description_p">
                    {props.description}
                </p>
            </div>

        </div>
    );
}

export default Project;
