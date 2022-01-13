import React, { useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { GlassModal } from '../ContainerComponents';
import ModalContext from '../../context/ModalContext';
import { set } from 'js-cookie';

const content_styles = {
	backgroundColor: 'rgba(255, 255, 255, .15)',
	backdropFilter: 'blur(5px)'
};
const Project = ({ project }) => {
	const { id, name, image, date_created, date_completed, url, github, description, technologies } = project;
	const { show_modal, set_show_modal, children, set_children } = useContext(ModalContext);

	const set_modal = () => {
		set_show_modal((modal) => (modal ? false : true));
		set_children(
			<div>
				{' '}
				<h3 className="fs-30px mb-2rem ">{name}</h3>
				<div className="ai-c wrap">
					<img src={image} alt={name} className="br-20px w-100per max-h-300px max-w-300px m-10px" />
					{/* <span className="tooltiptext_p p-2rem">View Project</span> */}
					<div>
						<div className="modal-paragraph fc-black">{description}</div>
						<button className="btn">View Deploy</button>
						<button className="btn">View Github Repo</button>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className="pos-rel" onClick={() => set_modal()}>
			{/* <a className="zoom_p tooltip_p" href={url} target="_blank" rel="noopener noreferrer"> */}
			<Fade top>
				<div className="br-20px p-20px hover ta-c" style={content_styles}>
					<h3 className="ta-c fs-16px mb-2rem">{name}</h3>
					<img src={image} alt={name} className="br-20px w-100per max-h-300px max-w-300px " />
					{/* <span className="tooltiptext_p p-2rem">View Project</span> */}
				</div>
				{/* <a className="" id="words" href={github} target="_blank" rel="noopener noreferrer">
						<span className="tooltiptext_n p-2rem">View Github Repo</span>
					</a> */}
			</Fade>
			{/* </a> */}
			{/* <GlassModal style={{ display: show_modal ? 'block' : 'none' }}>
				<span className="p-2rem">View Github Repo</span>
			</GlassModal> */}
		</div>
	);
};

export default Project;
