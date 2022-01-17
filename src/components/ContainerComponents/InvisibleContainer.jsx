import React from 'react';
import { isMobile, BrowserView, MobileView } from 'react-device-detect';

const InvisibleContainer = ({ children, className, style }) => {
	return (
		<div
			className={`${className} pos-abs br-20px ${!isMobile ? 'invisible_hover' : 'invisible_glow'}`}
			style={style}
		>
			{children}
		</div>
	);
};

export default InvisibleContainer;
