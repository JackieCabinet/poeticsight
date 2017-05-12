import React, { Component } from 'react';
import FeedList from '../containers/feed-list.jsx';
import NewPoem from '../containers/new-poem.jsx';
import Header from './header.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="col-md-12 new-poem"><Header /></div>
      	<div className="col-md-7"><NewPoem /></div>
      	<div className="col-md-5"><FeedList /></div>
      </div>

    );
  }
}
