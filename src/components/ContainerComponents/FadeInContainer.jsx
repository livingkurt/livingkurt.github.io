import React from 'react';
import Fade from 'react-reveal/Fade';
import { GlassContainer } from '.';

const content_styles = {
	backgroundColor: 'rgba(255, 255, 255, .15)',
	backdropFilter: 'blur(5px)'
};

const FadeInContainer = ({ children, className, style, height, width, top, fade, hover, screen_width, center }) => {
	return (
		<div className={`pos-rel w-100per m-auto h-${height} max-w-${width}  top-${top}`}>
			<Fade
				bottom={fade === 'bottom' && true}
				right={fade === 'right' && true}
				top={fade === 'top' && true}
				left={fade === 'left' && true}
			>
				<div className={`${screen_width < 950 ? 'm-20px' : ''}`}>
					<GlassContainer className={`h-${height} max-w-${width} ${className}`} hover={hover}>
						{children}
					</GlassContainer>
				</div>
			</Fade>
		</div>
	);
};

export default FadeInContainer;
