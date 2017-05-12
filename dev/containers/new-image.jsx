import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class NewImage extends Component {
	render() {
		let imgUrl = "https://c1.staticflickr.com/1/230/471801087_e9adb2afd4_b.jpg"
		let divStyle = {backgroundImage: `url(${imgUrl})`};
		return (
			<div className="new-image-cont">
				<img className="new-image" src="https://c1.staticflickr.com/1/230/471801087_e9adb2afd4_b.jpg" />
			</div>
		)
	}
}


// style={divStyle}