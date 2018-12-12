import React from 'react';
import PropTypes from 'prop-types';

const QuoteBox = props => (
  <div id="quote-box">
    <div className="quote-text">
      <i className="fa fa-quote-left"> </i><span id="text">{props.quote}</span>
    </div>
    <div className="quote-author">
      - <span id="author">{props.author}</span>
    </div>
    <div className="buttons">
      <button className="button" id="new-quote" onClick={props.nextQuote}>New quote</button>
    </div>
  </div>
);

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  nextQuote: PropTypes.func.isRequired,
}

export default QuoteBox;
