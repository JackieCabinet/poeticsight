import React, { Component } from 'react';
import FeedList from '../containers/feed-list.jsx';
import NewPoem from '../containers/new-poem.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="col-md-7"><NewPoem className="col-md-7"/></div>
      	<div className="col-md-5"><FeedList className="col-md-5"/></div>
      </div>

    );
  }
}
