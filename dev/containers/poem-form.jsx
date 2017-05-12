import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class PoemForm extends Component {
	render() {
		return (
			<div className="col-md-12 new-form" >
				<form >
				  <div className="form-group">
				    <input type="text" className="form-control" id="line1" placeholder="5 syllables.."></input>
				  </div>
				  <div className="form-group">
				    <input type="text" className="form-control" id="line2" placeholder="7 syllables.."></input>
				  </div>
				  <div clasNames="form-group">
				    <input type="text" className="form-control" id="line3" placeholder="5 syllables.."></input>
				  </div>
				  <button type="submit" className="btn btn-default btn-new-form">Submit</button>
				</form>
			</div>
		)
	}
}
