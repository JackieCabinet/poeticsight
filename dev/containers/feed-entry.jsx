import React, { Component } from 'react';


export default class FeedEntry extends Component {
  constructor(props) {
		super(props);
		console.log(props.poem, "props")
		this.state = { };
	}
  
  render() {
    let imgUrl = this.props.poem.thumbnail;
    let divStyle = {backgroundImage: `url(${imgUrl})`};
    return (
      <div className="feed-entry">  
        <div className="stylish-thumb" style={divStyle}></div>
        <div className="feedpoem">
        	<div>{this.props.poem.content.line1}</div>
          <div>{this.props.poem.content.line2}</div>
          <div>{this.props.poem.content.line3}</div>
           - <span>{this.props.poem.username}</span>
        </div>
      </div>
    );
  }
}
