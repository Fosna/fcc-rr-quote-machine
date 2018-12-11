import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import axios from 'axios';

class QuoteBoxContainer extends Component {
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
  }

  componentDidMount = () => this.getQuotes()
    .then(res => this.setState({ quotes: res.data.quotes }))
    .then(this.nextQuote);

  getQuotes = () => axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

  nextQuote = () => {
    const randIndex = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    
    const randQuote = this.state.quotes[randIndex];

    return new Promise((resolve, reject) => {
      try {
        this.setState({
            current: {
              ...randQuote
            },
          }, 
          () => resolve(this.state)
        );
      } catch(e) {
        reject(e);
      }
    });
  }

  render = () => <QuoteBox 
      nextQuote={this.nextQuote}
      quote={this.state.current.quote}
      author={this.state.current.author}
    />;
}

export default QuoteBoxContainer;
