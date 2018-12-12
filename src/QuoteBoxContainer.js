import React, { Component } from 'react';
import { loadQuotes, nextQuote } from './actions';
import { connect } from 'react-redux';
import QuoteBox from './QuoteBox';


class QuoteBoxContainer extends Component {
  componentDidMount = () => this.props.loadQuotes();

  render = () => <QuoteBox
      nextQuote={this.props.nextQuote}
      quote={this.props.quote}
      author={this.props.author}
    />;
}

QuoteBoxContainer.defaultProps = {
  quote: '...',
  author: 'unknown',
};

const mapStateToProps = state => ({
  ...state.current,
});

const mapDispatchToProps = dispatch => ({
  loadQuotes: () => dispatch(loadQuotes()),
  nextQuote: () => dispatch(nextQuote()),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(QuoteBoxContainer);
