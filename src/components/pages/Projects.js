import React from "react";
import Project from "../Project/Project"
import projects_data from "../../utils/projects.json"




function Projects() {
    return (
        <div>
            <h1 className="text-center">Projects</h1>
            <div id="project_div">
                {projects_data.map(project => (
                    <Project name={project.name} image={project.image} description={project.description} url={project.url} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
