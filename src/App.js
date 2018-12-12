import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import QuoteBoxContainer from './QuoteBoxContainer';
import quoteReducer from './quoteReducer';
import './App.css';

const store = createStore(
  quoteReducer, 
  applyMiddleware(thunkMiddleware)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="wrapper">
          <QuoteBoxContainer />
          <div className="footer"> by <a href="#">Fosna</a></div>
        </div>
      </Provider>
    );
  }
}

export default App;
