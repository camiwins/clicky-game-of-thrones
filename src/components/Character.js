import React, { Component } from "react";
import Image from 'react-bootstrap/Image';

export default class Character extends Component {

	render() {
		return (
			<Image
				src={this.props.image} roundedCircle
				alt="name"
				onClick={this.props.onClick}
			/>
		)
	}
}
