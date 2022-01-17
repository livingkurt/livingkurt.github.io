import React from 'react';

const InvisibleContainer = ({ children, className, style }) => {
	return (
		<div className={`${className} pos-abs br-20px invisible_hover`} style={style}>
			{children}
		</div>
	);
};

export default InvisibleContainer;
