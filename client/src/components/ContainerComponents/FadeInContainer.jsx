// import React from 'react';
// import Fade from 'react-reveal/Fade';
// import { GlassContainer } from '.';

// const content_styles = {
// 	backgroundColor: 'rgba(255, 255, 255, .15)',
// 	backdropFilter: 'blur(5px)'
// };

// const FadeInContainer = ({ children, className, style, height, width }) => {
// 	return (
// 		<div className={`pos-abs h-${height} max-w-${width} w-100per m-auto `}>
// 			<Fade bottom>
// 				<div className="mt-50px m-auto">
// 					<GlassContainer className={`h-${height} max-w-${width}`}>{children}</GlassContainer>
// 				</div>
// 			</Fade>
// 		</div>
// 	);
// };

// export default FadeInContainer;

import React from 'react';
import Fade from 'react-reveal/Fade';
import { GlassContainer } from '.';

const content_styles = {
	backgroundColor: 'rgba(255, 255, 255, .15)',
	backdropFilter: 'blur(5px)'
};

const FadeInContainer = ({ children, className, style, height, width, top, fade }) => {
	return (
		<div className={`pos-rel w-100per m-auto h-${height} max-w-${width}  top-${top}`}>
			<Fade
				bottom={fade === 'bottom' && true}
				right={fade === 'right' && true}
				top={fade === 'top' && true}
				left={fade === 'left' && true}
			>
				<div className="mt-50px m-auto">
					<GlassContainer className={`h-${height} max-w-${width}`}>{children}</GlassContainer>
				</div>
			</Fade>
		</div>
	);
};

export default FadeInContainer;
