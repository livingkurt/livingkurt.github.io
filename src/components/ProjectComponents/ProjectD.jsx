import React, { useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { GlassModal } from '../ContainerComponents';
import ModalContext from '../../context/ModalContext';
import { useWindowDimensions } from '../Hooks';
import { isMobile, MobileView, BrowserView } from 'react-device-detect';
import { Link, useHistory } from 'react-router-dom';

const content_styles = {
	backgroundColor: 'rgba(255, 255, 255, .15)',
	backdropFilter: 'blur(5px)'
};
const Project = ({ project }) => {
	const { id, name, image, date_created, date_completed, url, github, description, technologies, pathname } = project;
	const { show_modal, set_show_modal, children, set_children } = useContext(ModalContext);
	const { height, width } = useWindowDimensions();

	const set_modal = () => {
		set_show_modal((modal) => (modal ? false : true));
		set_children(
			<div>
				{' '}
				<h3
					className="fs-30px mb-2rem  modal-paragraph fc-black p-20px"
					style={{
						textAlign: isMobile ? 'center' : 'left'
					}}
				>
					{name}
				</h3>
				<div className="wrap jc-c">
					<img src={image} alt={name} className="br-20px w-100per h-auto max-h-275px max-w-300px m-10px" />
					{/* <span className="tooltiptext_p p-2rem">View Project</span> */}
					<div className="">
						<div className="w-100per max-w-600px">
							<p className="modal-paragraph fc-black lh-30px ">
								<div className="p-20px"> {description}</div>
							</p>
						</div>
						<div className="jc-a w-100per">
							<a className="" id="words" href={url} target="_blank" rel="noopener noreferrer">
								<button className="btn hover">View Deploy</button>
							</a>
							<a className="" id="words" href={github} target="_blank" rel="noopener noreferrer">
								<button className="btn hover">View Github Repo</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div>
			<BrowserView>
				<div className="pos-rel" onClick={() => set_modal()}>
					<Fade top>
						<div className="br-20px p-20px hover ta-c" style={content_styles}>
							<h3 className="ta-c fs-16px mb-2rem">{name}</h3>
							<img src={image} alt={name} className="br-20px w-100per max-w-300px " />
						</div>
					</Fade>
				</div>
			</BrowserView>
			<MobileView>
				<Link to={'/project/' + pathname}>
					<Fade top>
						<div className="br-20px p-20px hover ta-c" style={content_styles}>
							<h3 className="ta-c fs-16px mb-2rem">{name}</h3>
							<img src={image} alt={name} className="br-20px w-100per max-w-300px " />
						</div>
					</Fade>
				</Link>
			</MobileView>
		</div>
	);
};

export default Project;
