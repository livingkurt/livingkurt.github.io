import axios from 'axios';

const contact_routes = {
	send_email: (name: string, subject: string, email: string, message: string) => {
		return axios.post('https://www.glow-leds.com/api/emails/external_contact', {
			name,
			subject,
			email,
			message
		});
	}
};

export default contact_routes;
