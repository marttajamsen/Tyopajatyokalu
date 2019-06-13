import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filters.css';

import Tag from './Tag';

class Filters extends Component {

	static propTypes = {
		title: PropTypes.string,
		options: PropTypes.array,
		onChange: PropTypes.func,
		selected: PropTypes.array,
	}

	renderButtons() {
		return this.props.options.map(option => {
			return (
				<Tag
					key={option}
					text={option}
					selected={this.props.selected.indexOf(option) !== -1}
					onClick={() => this.props.onChange(option)}
				/>
			)
		})
	}
	render() {
		return (
			<div className="Filters">
				<h4 className="Filters--title">{this.props.title}</h4>
				{this.renderButtons()}
			</div>
		)
	}
}

export default Filters;