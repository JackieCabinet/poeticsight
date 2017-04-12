import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import App from './components/app.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.jsx';
 
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#container")
);  