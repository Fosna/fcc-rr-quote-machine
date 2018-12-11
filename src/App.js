import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QuoteBoxContainer from './QuoteBoxContainer';
import quoteReducer from './QuoteReducer';
import './App.css';

const store = createStore(quoteReducer);

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Provider store={store}>
          <QuoteBoxContainer />
        </Provider>
        <div className="footer"> by <a href="#">Fosna</a></div>
      </div>
    );
  }
}

export default App;
