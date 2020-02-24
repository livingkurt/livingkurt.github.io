import React from "react";
import './project.css'
// import Livdin from "../pages/Livdin_Logo_blue.png"


function Project(props) {
    const style = {
        backgroundColor : props.background_color
    }

    const color_change = () => {
        switch(props.name){
            case "Livdin":
                return "#3b5d80"
        }
    }

    return (
        <div id="project_container_div" style={{backgroundColor: color_change()}}>
            <a className="box tooltip_p" href={props.url} target="_blank" rel="noopener noreferrer">
                <img className="project_image img-fluid" src={props.image ? props.image : "https://via.placeholder.com/200"} alt={props.name} />
                <span id="home_pop_up"className="tooltiptext_p">{props.name} View Deploy</span>
            </a>
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
