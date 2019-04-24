import React, { Component } from 'react';
import './Event.css';

class Event extends Component {

	renderTags(tags) {
		return tags.map(tag => {
			return (
				<div>
					<p>{tag}</p>
				</div>
			)
		})
	}

	render() {
		const event = this.props.event;
		return (
			<div className="Event">
				<h1 className="Event-title">{event.name} by {event.host}</h1>
				<p className="Event-time">Kello: {event.start_time} - {event.end_time}</p>
				{this.renderTags(event.tags)}
			</div>
		);
	}
}

export default Event;