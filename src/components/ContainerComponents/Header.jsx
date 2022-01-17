import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Link, useHistory } from 'react-router-dom';
import { responsive_font } from '../../utils/helper_functions';
import { useWindowDimensions } from '../Hooks';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
	const header_styles = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(10px)',
		boxShadow: 'rgb(255 255 255 / 50%) 0px 0px 20px 5px'
	};
	const [ blur, set_blur ] = useState();
	// const header_styles = { boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)', filter: 'blur(10px)' };
	const { height, width } = useWindowDimensions();
	return (
		<Headroom>
			<header style={header_styles} className="w-100per  h-100px ai-c fade_in">
				<div className="jc-b w-100per ai-c">
					<div className="ai-c">
						<Link to="/" className="fc-white">
							<h1 className="pl-30px unblur-hover fs-30px">{width < 650 ? 'KL' : 'Kurt LaVacque'}</h1>
						</Link>

						<Link to="/projects" className="fc-white">
							<p
								className="fs-20px blur-1px"
								style={{
									fontSize: responsive_font(width, 600, 1040, '2vw', '1.6rem', '2rem'),
									paddingLeft: responsive_font(width, 600, 1040, '3vw', '1.6rem', '3rem')
								}}
							>
								creator of worlds
							</p>
						</Link>
						{width > 970 && (
							<div className="row">
								<ScrollLink to="about_me" className="fc-white">
									<span
										className="fs-20spanx blur-2px"
										style={{
											fontSize: responsive_font(width, 600, 1040, '2vw', '1.6rem', '2rem'),
											paddingLeft: responsive_font(width, 600, 1040, '3vw', '1.6rem', '3rem'),
											cursor: 'pointer'
										}}
									>
										about me
									</span>
								</ScrollLink>
								<ScrollLink to="skills" className="fc-white">
									<span
										className="fs-20px blur-3px"
										style={{
											fontSize: responsive_font(width, 600, 1040, '2vw', '1.6rem', '2rem'),
											paddingLeft: responsive_font(width, 600, 1040, '3vw', '1.6rem', '3rem'),
											cursor: 'pointer'
										}}
									>
										skills
									</span>
								</ScrollLink>
								<ScrollLink to="experience" className="fc-white">
									<span
										className="fs-20px blur-4px"
										style={{
											fontSize: responsive_font(width, 600, 1040, '2vw', '1.6rem', '2rem'),
											paddingLeft: responsive_font(width, 600, 1040, '3vw', '1.6rem', '3rem'),
											cursor: 'pointer'
										}}
									>
										experience
									</span>
								</ScrollLink>
							</div>
						)}
					</div>

					<Link to="/contact" className="fc-white">
						<p
							className="fs-16px  unblur-hover title_font"
							style={{ paddingRight: responsive_font(width, 600, 1040, '3vw', '1.6rem', '3rem') }}
						>
							contact
						</p>
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
