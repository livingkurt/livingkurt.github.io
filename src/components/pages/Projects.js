import React from "react";
import Project from "../Project/Project"
import projects_data from "../../utils/projects.json"
import "./page_styles/pages.css"

function Projects() {
  return (
    <div>
      <h1 id="projects_h1" className="text-center">Projects</h1>
      <div id="project_div">
        {projects_data.map(project => (
          <Project key={project.id} name={project.name} image={project.image} description={project.description} url={project.url} github_url={project.github} date_created={project.date_created} date_completed={project.date_completed} technologies={project.technologies} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
