import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class QuoteBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [{
        quote: '...',
        autor: 'unknown',
      }],
      index: 0,
      current: {
        quote: '...',
        author: 'unknown',
      }
    };

    this.getQuotes()
      .then(res => this.setQuotes(res.data.quotes))
      .then(this.nextQuote);
  }

  setQuotes = (quotes) => this.setState(Object.assign(this.state, { quotes }));

  getQuotes = () => axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

  nextQuote = () => {
    const randIndex = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    
    const randQuote = this.state.quotes[randIndex];
    const newState = Object.assign(
      this.state, 
      {
        current: {
          ...randQuote
        }
      }
    );
    return new Promise((resolve, reject) => {
      try {
        this.setState(newState, () => resolve(this.state));
      } catch(e) {
        reject(e);
      }
    });
  }

  handleClick = () => this.nextQuote();

  render() {
    return (
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
    );
  }
}

export default QuoteBox;
