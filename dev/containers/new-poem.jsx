import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewImage from './new-image.jsx';
import PoemForm from './poem-form';

export default class NewPoem extends Component {
	render() {
		return (
			<div className="new-poem col-md-8">
				<NewImage />
				<PoemForm />
			</div>
		)
	}
}
