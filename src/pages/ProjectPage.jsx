import React, { useState, useEffect } from 'react';
import { FadeInContainer, GlassContainer } from '../components/ContainerComponents';
import { Project } from '../components/ProjectComponents';
import Fade from 'react-reveal/Fade';
import projects from '../utils/projects.json';
import { Link, useHistory } from 'react-router-dom';

const ProjectPage = (props) => {
	const content_styles = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(5px)',

		transition: 'all 1s ease-in'
	};

	const [ project, set_project ] = useState();

	useEffect(
		() => {
			console.log({ id: props.match.params.id });
			const project = projects.find((project) => project.pathname === props.match.params.pathname);
			console.log({ project });
			set_project(project);
			return () => {};
		},
		[ props.match.params.id ]
	);

	const history = useHistory();

	return (
		<div style={content_styles}>
			{project && (
				<div
					className="fs-30px"
					style={{
						padding: '10px'
					}}
				>
					<Link to="/projects" style={{ zIndex: 10 }}>
						{/* <div className="fc-white jc-fe mr-10px p-10px">&times;</div> */}
						<span className="fc-white jc-fe mr-10px p-10px " onClick={() => history.push('/projects')}>
							&times;
						</span>
					</Link>
					<div>
						{' '}
						<h3
							className="fs-30px mb-2rem  modal-paragraph fc-black p-20px"
							style={{
								textAlign: 'center'
							}}
						>
							{project.name}
						</h3>
						<div className="wrap jc-c">
							<img
								src={project.image}
								alt={project.name}
								className="br-20px w-100per h-auto max-h-275px max-w-300px m-10px"
							/>
							{/* <span className="tooltiptext_p p-2rem">View Project</span> */}
							<div className="">
								<div className="w-100per max-w-600px">
									<p className="modal-paragraph fc-black lh-30px ">
										<div className="p-20px "> {project.description}</div>
									</p>
								</div>
								<div className="jc-a w-100per">
									<a
										className=""
										id="words"
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="btn hover">View Deploy</button>
									</a>
									<a
										className=""
										id="words"
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="btn hover">View Github Repo</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectPage;
