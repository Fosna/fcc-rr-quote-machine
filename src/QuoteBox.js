import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i><span id="text">{this.props.quote}</span>
        </div>
        <div className="quote-author">
          - <span id="author">{this.props.author}</span>
        </div>
        <div className="buttons">
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" id="new-quote" onClick={this.props.nextQuote}>New quote</button>
        </div>
      </div>
    );
  }
}

QuoteBox.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  nextQuote: PropTypes.func,
}

export default QuoteBox;
