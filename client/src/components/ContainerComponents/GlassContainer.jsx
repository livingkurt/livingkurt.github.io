import React from 'react';
import { isMobile } from 'react-device-detect';

const content_styles = {
	backgroundColor: 'rgba(255, 255, 255, .15)',
	backdropFilter: 'blur(5px)'
};

const GlassContainer = ({ children, className, hover }) => {
	return (
		<div
			className={`${className} w-100per br-20px ${!isMobile ? (hover ? 'hover' : '') : ''} `}
			style={content_styles}
		>
			{children}
		</div>
	);
};

export default GlassContainer;
