import React from 'react';

const content_styles = {
	backgroundColor: 'rgba(255, 255, 255, .15)',
	backdropFilter: 'blur(5px)'
};

const GlassContainer = ({ children, className }) => {
	return (
		<div className={`${className} w-100per br-20px hover p-20px`} style={content_styles}>
			{children}
		</div>
	);
};

export default GlassContainer;
