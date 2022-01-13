import axios from 'axios';

const contact_routes = {
	send_email: () => {
		return axios.get('https://www.glow-leds.com/api/emails/contact');
	}
};

export default contact_routes;
