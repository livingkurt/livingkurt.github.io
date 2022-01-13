import React from 'react';

const InvisibleContainer = ({ children, className, style }) => {
	return (
		<div className={`${className} pos-abs invisible_hover`} style={style}>
			{children}
		</div>
	);
};

export default InvisibleContainer;
