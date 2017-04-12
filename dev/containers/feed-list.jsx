import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FeedList extends Component {
	renderList(){
		return this.props.poems.map((poem) => {
			return (
				<div key={poem.title} className="list-group-item">{poem.title}</div>
			)}
		)
	}
	
	render() {
		return (
			<ul className="list-group col-sm-4"> 
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return{
		poems: state.poems
	}
}

export default connect(mapStateToProps)(FeedList);