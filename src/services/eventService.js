import axios from 'axios';

const EventService = {
	getEvents: () => {
		return axios.get('https://www.partio.fi/wp-json/tyopajat/data.json').then(res => {
			return res.data;
		});
	}
}

export default EventService;