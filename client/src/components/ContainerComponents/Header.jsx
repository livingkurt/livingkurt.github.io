import React from 'react';

function Header() {
	const header_styles = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(10px)',
		boxShadow: 'rgb(255 255 255 / 50%) 0px 0px 20px 5px'
	};
	// const header_styles = { boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)', filter: 'blur(10px)' };
	return (
		<header style={header_styles} className="w-100per  h-100px ai-c fade_in">
			<h1 className="fs-30px pl-50px">Kurt LaVacque</h1>
			<p className="fs-25px pl-50px" style={{ filter: 'blur(2px)' }}>
				creator of worlds
			</p>
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
	);
}

export default Header;
