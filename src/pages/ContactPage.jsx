import React, { useState } from 'react';
import { FadeInContainer } from '../components/ContainerComponents';
import { useWindowDimensions } from '../components/Hooks';
import { API_Contact } from '../utils';
import { responsive_font } from '../utils/helper_functions';
import { isMobile, BrowserView, MobileView } from 'react-device-detect';

const ContactPage = () => {
	const [ name, set_name ] = useState();
	const [ subject, set_subject ] = useState();
	const [ email, set_email ] = useState();
	const [ message, set_message ] = useState('');

	const sendEmail = async (e) => {
		e.preventDefault();
		const send_email = await API_Contact.send_email(name, subject, email, message);
		console.log({ send_email });
	};

	const glass_input = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(20px)',
		borderRadius: '10px',
		border: 0,
		boxShadow: 'inset rgb(255 255 255 / 20%) 0px 0px 10px 5px',
		fontSize: '16px',
		padding: '10px',
		color: 'white',
		margin: '1rem 0',
		fontFamily: 'Helvetica'
	};
	const { height, width } = useWindowDimensions();
	return (
		<div className="pos-rel" style={{ top: isMobile ? '1vh' : '10vh' }}>
			<FadeInContainer width="900px" fade={'left'} hover={false} screen_width={width}>
				<div className="p-20px">
					<h2
						className="ta-c"
						style={{ fontSize: responsive_font(width, 350, 900, '6vw', '2.3rem', '5rem') }}
					>
						Let's Talk About it
					</h2>
					<p className="mv-2rem ta-c fs-16px">
						Reach out with any project ideas or questions about anything!
					</p>
					<form className="column">
						<label htmlFor="name" className="fs-16px">
							Name
						</label>
						<input
							onChange={(e) => set_name(e.target.value)}
							defaultValue={name}
							value={name}
							className="zoom_f form_input"
							style={glass_input}
							type="text"
							name="name"
							id="name"
							placeholder="Name"
						/>
						<label htmlFor="subject" className="fs-16px">
							Subject
						</label>
						<input
							onChange={(e) => set_subject(e.target.value)}
							defaultValue={subject}
							value={subject}
							className="zoom_f form_input"
							style={glass_input}
							type="text"
							name="subject"
							id="subject"
							placeholder="Subject"
						/>
						<label htmlFor="email" className="fs-16px">
							Email
						</label>
						<input
							onChange={(e) => set_email(e.target.value)}
							defaultValue={email}
							value={email}
							className="zoom_f form_input"
							style={glass_input}
							type="text"
							name="email"
							id="email"
							placeholder="Email"
						/>
						<label htmlFor="message" className="fs-16px">
							Message
						</label>
						<textarea
							onChange={(e) => set_message(e.target.value)}
							defaultValue={message}
							className="zoom_f form_input"
							style={glass_input}
							name="message"
							id="message"
							placeholder="Enter Message Here"
						/>

						<div>
							<button
								className="zoom_b btn primary br-10px w-100per hover btn-glass gradient-btn"
								id="button"
								onClick={(e) => sendEmail(e)}
							>
								Send
							</button>
						</div>
					</form>
				</div>
			</FadeInContainer>
		</div>
	);
};

export default ContactPage;
