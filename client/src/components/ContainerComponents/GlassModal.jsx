import React from 'react';

const GlassModal = ({ children, style, show_modal, set_show_modal }) => {
	const content_styles = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(5px)',
		display: show_modal ? 'flex' : 'none',
		...style
	};
	return (
		<div className="modal-floating fade_in_fast" style={content_styles}>
			<div className="modal-content ">
				<span
					className="fc-white close"
					onClick={() => {
						set_show_modal(false);
					}}
				>
					&times;
				</span>
				{children}
			</div>
		</div>
	);
};

export default GlassModal;
