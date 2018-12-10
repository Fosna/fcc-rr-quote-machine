import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [{
        quote: 'ant',
        autor: 'bee',
      }],
      index: 0,
      current: {
        quote: 'ant',
        author: 'bee',
      }
    };
  }

  getQuotes = () => axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

  handleClick = () => this.getQuotes()
    .then(response => console.log(response.data))
    .catch(err => console.error(err));

  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left"> </i><span id="text">{this.state.current.quote}</span>
          </div>
          <div className="quote-author">
            - <span id="author">{this.state.current.author}</span>
          </div>
          <div className="buttons">
            <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
              <i className="fa fa-tumblr"></i>
            </a>
            <button className="button" id="new-quote" onClick={this.handleClick}>New quote</button>
          </div>
        </div>
        <div className="footer"> by <a href="#">Fosna</a></div>
      </div>
    );
  }
}

export default App;
