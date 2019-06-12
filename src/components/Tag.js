import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

class Tag extends Component {
	render() {
		let className = 'Tag';
		if (this.props.selected) {
			className += ' Tag-selected';
		}
		return (
			<div className={className} onClick={this.props.onClick}>
				<span className="Tag--text">{this.props.text}</span>
			</div>
		)
	}
}

export default Tag;