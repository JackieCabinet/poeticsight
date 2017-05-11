import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeedEntry from './feed-entry';

class FeedList extends Component {
	renderList(){
		return this.props.poems.map((poem) => {
			return (
				<FeedEntry key={poem.title} className="list-group-item col-md-4" poem={poem}/>
			)}
		)
	}
	
	render() {
		return (
			<ul > 
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