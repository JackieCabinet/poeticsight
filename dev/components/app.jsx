import React, { Component } from 'react';
import FeedList from '../containers/feed-list.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      	Haiku
      	<FeedList />
      </div>

    );
  }
}
