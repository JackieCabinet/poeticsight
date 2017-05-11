import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class PoemForm extends Component {
	render() {
		return (
			<div>
				<form className="form-horizontal">
				  <div className="form-group">
				    <label for="line1">Line 1:</label>
				    <input type="text" className="form-control" id="line1"></input>
				  </div>
				  <div className="form-group">
				    <label for="line2">Line 2:</label>
				    <input type="text" className="form-control" id="line2"></input>
				  </div>
				  <div clasNames="form-group">
				    <label for="line3">Line 3:</label>
				    <input type="text" className="form-control" id="line3"></input>
				  </div>
				  <button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		)
	}
}
