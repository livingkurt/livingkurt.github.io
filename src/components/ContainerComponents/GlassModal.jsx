import React, { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const GlassModal = ({ children, style, show_modal, set_show_modal }) => {
	const content_styles = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(5px)',
		display: show_modal ? 'flex' : 'none',
		opacity: show_modal ? 0 : 1,
		transition: 'all 1s ease-in',

		position: isMobile ? 'static' : 'fixed',
		...style
	};

	function useOutsideAlerter(ref) {
		useEffect(
			() => {
				/**
         * Alert if clicked on outside of element
         */
				function handleClickOutside(event) {
					if (ref.current && !ref.current.contains(event.target)) {
						set_show_modal(false);
					}
				}

				// Bind the event listener
				document.addEventListener('mousedown', handleClickOutside);
				return () => {
					// Unbind the event listener on clean up
					document.removeEventListener('mousedown', handleClickOutside);
				};
			},
			[ ref ]
		);
	}
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);
	return (
		<div className={`modal-floating ${show_modal ? 'fade_in_fast' : 'fade_out_fast'}`} style={content_styles}>
			<div
				className="modal-content fs-30px"
				style={{
					margin: isMobile ? '10px' : '30% auto',
					padding: isMobile ? '10px' : '20px'
				}}
				ref={wrapperRef}
			>
				<span
					className="fc-white jc-fe mr-10px"
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
