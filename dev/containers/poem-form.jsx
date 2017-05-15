import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postPoem } from '../actions/index';

class PoemForm extends Component {
	constructor(props) {
		super(props);
		this.state = { };
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChangeLine1 = this.onInputChangeLine1.bind(this);
		this.onInputChangeLine2 = this.onInputChangeLine2.bind(this);
		this.onInputChangeLine3 = this.onInputChangeLine3.bind(this);
	}
	onInputChangeLine1(event) {
		//console.log(event.target.value);
		this.setState({ line1: event.target.value })
	}
	onInputChangeLine2(event) {
		//console.log(event.target.value);
		this.setState({ line2: event.target.value })
	}
	onInputChangeLine3(event) {
		//console.log(event.target.value);
		this.setState({ line3: event.target.value })
	}
	onFormSubmit(event) {
		console.log(event, 'in form submit')
		this.props.postPoem(this.state.line1,this.state.line2,this.state.line3);
	}
	render() {
		return (
			<div className="col-md-12 new-form" >
				<form onSubmit={this.onFormSubmit}>
				  <div className="form-group">
				    <input type="text" className="form-control" id="line1" placeholder="5 syllables.." value={this.state.line1}
				onChange={this.onInputChangeLine1}></input>
				  </div>
				  <div className="form-group">
				    <input type="text" className="form-control" id="line2" placeholder="7 syllables.." value={this.state.line2}
				onChange={this.onInputChangeLine2}></input>
				  </div>
				  <div clasNames="form-group">
				    <input type="text" className="form-control" id="line3" placeholder="5 syllables.." value={this.state.line3}
				onChange={this.onInputChangeLine3}></input>
				  </div>
				  <button type="submit" className="btn btn-default btn-new-form">Submit</button>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ postPoem }, dispatch);
}

export default connect(null, mapDispatchToProps)(PoemForm);