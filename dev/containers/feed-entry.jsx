import React, { Component } from 'react';


export default class FeedEntry extends Component {
  constructor(props) {
		super(props);
		console.log(props.poem, "props")
		this.state = { };
	}
  render() {
    return (
      <div>
      	{this.props.poem.title}
      </div>

    );
  }
}
