import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventColumn.css';

import Event from './Event';
import EventFilters from '../services/eventFilters';

class EventColumn extends Component {

	static propTypes = {
		title: PropTypes.string,
		time: PropTypes.string,
		events: PropTypes.array,
	}

	renderEvents() {
		const { events, times } = this.props;
		const filtered = EventFilters.getEventsForTimes(events, times);

		if (filtered.length === 0) {
			return (
				<div className="EventColumn--empty">
					<p className="EventColumn--empty__text">0 hakukriteerejä vastaavaa työpajaa</p>
				</div>
			);
		}

		return filtered.map(event => {
			return (
				<Event key={event.name + event.host} event={event} />
			);
		})
	}

	render() {
		return (
			<div className="EventColumn">
				<h2 className="EventColumn--title">{this.props.title} <br /><span>{this.props.times.join(' & ')}</span></h2>
				<div className="EventColumn--events">
					{this.renderEvents()}
				</div>
			</div>
		)
	}
}

export default EventColumn;