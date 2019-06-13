import React, { Component } from 'react';
import './Event.css';

import Tag from './Tag';

const colors = {
	"Tutustu": "#f0e105",
	"Perehdy": "#f0a01e",
	"Syvenny": "#f04150",
}


class Event extends Component {

	constructor(props) {
		super(props)

		this.state = {
			expanded: false
		}

		this.toggleExpanded = this.toggleExpanded.bind(this);
	}

	toggleExpanded(e) {
		e.preventDefault();
		this.setState({
			expanded: !this.state.expanded
		});
	}

	renderTags(tags) {
		return tags.map(tag => {
			return (
				<Tag
					text={tag}
				/>
			);
		})
	}

	render() {
		const event = this.props.event;
		const description = this.state.expanded ? event.description : event.description.slice(0, 150) + '...';

		let flag;
		switch(event.language) {
			case 'Suomi': flag = require('../assets/iconfinder_Finland_15861.png'); break;
			case 'Ruotsi': flag = require('../assets/iconfinder_Sweden_15994.png'); break;
			case 'Englanti': flag = require('../assets/iconfinder_United Kingdom(Great Britain)_16014.png'); break;
			default: break;
		}

		return (
			<div className="Event">
				<div className="Event-color" style={{ backgroundColor: colors[event.level] }}></div>
				<div className="Event-contents">
					<img src={flag}/>
					<h2 className="Event-title" >{event.name} </h2>
					<p className="Event-host" >{event.host}</p>
					<p className="Event-time">Kello: {event.time}</p>
					<p className="Event-description">
						{description}
						<br />
						<span className="Event-expand" onClick={this.toggleExpanded}>{this.state.expanded ? 'Näytä vähemmän' : 'Lisää'}</span>
					</p>
					<div className="Event-tags">
						{this.renderTags(event.tags)}
					</div>
				</div>
			</div>
		);
	}
}

export default Event;