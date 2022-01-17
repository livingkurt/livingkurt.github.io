import React, { useState } from 'react';
import { FadeInContainer, GlassContainer } from '../components/ContainerComponents';
import { Project, ProjectD, ProjectM } from '../components/ProjectComponents';
import Fade from 'react-reveal/Fade';
import projects from '../utils/projects.json';
import { BrowserView, MobileView } from 'react-device-detect';

const ProjectsPage = () => {
	return (
		<div>
			<div className={`w-100per m-auto h-700px max-w-1000px projects`}>
				{projects.map((project, index) => <Project project={project} key={index} />)}
			</div>
		</div>
	);
};

export default ProjectsPage;
