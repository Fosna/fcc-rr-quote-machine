import React, { Component } from 'react';
import QuoteBoxContainer from './QuoteBoxContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <QuoteBoxContainer />
        <div className="footer"> by <a href="#">Fosna</a></div>
      </div>
    );
  }
}

export default App;
