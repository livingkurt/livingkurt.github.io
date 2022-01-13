import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Link, useHistory } from 'react-router-dom';

function Header() {
	const header_styles = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(10px)',
		boxShadow: 'rgb(255 255 255 / 50%) 0px 0px 20px 5px'
	};
	const [ blur, set_blur ] = useState();
	// const header_styles = { boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)', filter: 'blur(10px)' };
	return (
		<Headroom>
			<header style={header_styles} className="w-100per  h-100px ai-c fade_in">
				<div className="jc-b w-100per">
					<div className="ai-c">
						<Link to="/" className="fc-white">
							<h1 className="fs-30px pl-50px unblur_hover">Kurt LaVacque</h1>
						</Link>

						<Link to="/projects" className="fc-white">
							<p className="fs-20px pl-50px blur_hover">creator of worlds</p>
						</Link>
					</div>

					<Link to="/contact" className="fc-white">
						<p className="fs-16px pr-50px unblur_hover">contact</p>
					</Link>
				</div>
				{/* <div id="icon_container">
				<a href="https://www.glow-leds.com/" target="_blank" rel="noopener noreferrer">
					<img
						src="/images/glow_logo_optimized.png"
						className="zoom_i"
						alt="Glow LEDs Logo"
						style={{ width: '45px', marginRight: '10px' }}
					/>
				</a>
				<a href="https://github.com/livingkurt" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github icon zoom_i" />
				</a>
				<a href="https://www.linkedin.com/in/kurt-lavacque/" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-linkedin icon zoom_i" />
				</a>
			</div> */}
			</header>
		</Headroom>
	);
}

export default Header;
