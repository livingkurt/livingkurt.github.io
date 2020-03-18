import React from "react";
import './blog_post.css'
import { Link, useLocation } from "react-router-dom";


function Blog_Post(props) {
  const location = useLocation();

  return (
    <div id="project_container_div" >
      <div id="project_img_div">
        {/* <a className="zoom_p tooltip_p" href={`/blog/${props.route}`} target="_blank" rel="noopener noreferrer">
          <img className="project_image img-fluid" src={props.image ? props.image : "https://via.placeholder.com/200"} alt={props.name} />
          <span id="home_pop_up" className="tooltiptext_p">View Blog Post</span>
        </a> */}
        <Link to={`/blog/${props.route}`} className="zoom_p tooltip_p">
          <img className="project_image img-fluid" src={props.image ? props.image : "https://via.placeholder.com/200"} alt={props.name} />
          <span id="home_pop_up" className="tooltiptext_p">View Blog Post</span>
        </Link>
      </div>
      <div className="project_name_div tooltip_n">

        <h3 className="project_name">{props.name}</h3>
        <p className="project_description_p">
          {props.description}
          <p style={{ margin: "10px 0px" }}><strong>Technologies:</strong> {" "}
            {props.technologies.map(tech => (
              tech + " "
            ))}
            <p><strong>Date Created:</strong> {props.date_created} <strong>Date Completed:</strong> {props.date_completed}</p>
          </p>
        </p>
        {/* <a className="" id="words" href={props.github_url} target="_blank" rel="noopener noreferrer">
          <span id="home_pop_up" className="tooltiptext_n">View Github Repo</span>
        </a> */}
      </div>

    </div>
  );
}

export default Blog_Post;
