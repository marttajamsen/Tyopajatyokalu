const EventFilters = {

	TIMES: {
		morning: '11:00-12:30',
		afternoon_long: '14:15-16:45',
		afternoon_short: '14:15-15:45',
		afternoon_keynote: '16:00-16:45'
	},

	filter: (events, levels = [], tags = [], searchText = '') => {
		return events.filter(event => {
			if (levels.length > 0) {
				const matchingLevels = levels.filter(level => {
					return event.level === level;
				})

				if (matchingLevels.length === 0) {
					return false;
				}
			}

			if (tags.length > 0) {
				const matchingTags = tags.filter(tag => {
					return event.tags.indexOf(tag) !== -1;
				});

				if (matchingTags.length === 0) {
					return false;
				}
			}

			if (searchText.length > 0) {
				const toSearch = event.name + '|' + event.description + '|' + event.host;
				if (toSearch.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
					return false;
				}
			}

			return true;
		});
	},

	getEventsForTime: (events, time) => {
		return events.filter(event => event.time === time);
	},

	getEventsForTimes: (events, times) => {
		return events.filter(event => times.indexOf(event.time) !== -1);
	},

	getTags: (events) => {
		const tags = [];

		events.forEach(event => {
			event.tags.forEach(tag => {
				if (tags.indexOf(tag) === -1) {
					tags.push(tag);
				}
			})
		});

		return tags;
	},

	getLevels: (events) => {
		const levels = [];

		events.forEach(event => {
			if (levels.indexOf(event.level) === -1) {
				levels.push(event.level);
			}
		});

		return levels;
	}
}

export default EventFilters;
