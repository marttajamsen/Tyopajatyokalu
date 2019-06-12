import React, { Component } from 'react';
import './Event.css';

const colors = {
	"Tutustu": "#f0e105", 
	"Perehdy": "#f0a01e",
	"Syvenny": "#f04150",
}


class Event extends Component {

	renderTags(tags) {
		return tags.map(tag => {
			return (
				<div className="Event-tag">
					<span>{tag}</span>
				</div>
			)
		})
	}

	render() {
		const event = this.props.event;
		return (
			<div className="Event">
				<div className="Event-color" style={{backgroundColor: colors[event.level]}}></div>
				<div className="Event-contents">
					<h1 className="Event-title" >{event.name} </h1>
					<h1 className="Event-host" >{event.host}</h1>
					<p className="Event-time">Kello: {event.start_time} - {event.end_time}</p>
					<p className="Event-description">{event.description.slice(0, 150)}</p>
					<div className="Event-tags">
						{this.renderTags(event.tags)}
					</div>
				</div>
			</div>
		);
	}
}

export default Event;