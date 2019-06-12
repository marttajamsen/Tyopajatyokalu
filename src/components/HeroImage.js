import React, { Component } from 'react';
import './HeroImage.css';

class HeroImage extends Component {
	render() {
		return (
			<div className="HeroImage">
				<img className="HeroImage--img" src={require('../assets/maisema_EevaHelle_IMG_9089.jpg')} />
				<h1 className="HeroImage--title">Työpajatyökalu</h1>
			</div>
		)
	}
}

export default HeroImage;