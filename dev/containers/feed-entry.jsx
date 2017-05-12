import React, { Component } from 'react';


export default class FeedEntry extends Component {
  constructor(props) {
		super(props);
		console.log(props.poem, "props")
		this.state = { };
	}
  
  render() {
    
    return (
      <div className="feed-entry">  
        <div className="stylish-thumb-cont col-md-7" >
          <img className="thumb col-md-12" src={this.props.poem.thumbnail}></img>
        </div>
        <div className="feed-poem col-md-5">
        	<div>{this.props.poem.content.line1}</div>
          <div>{this.props.poem.content.line2}</div>
          <div>{this.props.poem.content.line3}</div>
           - <span>{this.props.poem.username}</span>
        </div>
      </div>
    );
  }
}

// let imgUrl = this.props.poem.thumbnail;
// let divStyle = {backgroundImage: `url(${imgUrl})`};
// style={divStyle}