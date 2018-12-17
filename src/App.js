import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import QuoteBoxContainer from './QuoteBoxContainer';
import quoteReducer from './quoteReducerAlpha';
import './App.css';

const store = createStore(
  quoteReducer, 
  applyMiddleware(
    thunkMiddleware, 
    logger
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="wrapper">
          <QuoteBoxContainer />
          <div className="footer"> by <a href="https://about.me/fosna">Fosna</a></div>
        </div>
      </Provider>
    );
  }
}

export default App;
