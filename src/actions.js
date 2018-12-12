import axios from 'axios';

export const NEXT_QUOTE = 'NEXT_QUOTE';
export const nextQuote = () => ({
    type: NEXT_QUOTE,
});

const getQuotes = () => axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

export const LOAD_QUOTES = 'LOAD_QUOTES';
export const loadQuotes = () => dispatch => {
    dispatch({
        type: LOAD_QUOTES,
    });
    getQuotes()
        .then(res => dispatch(loadQuotesSuccess(res.data.quotes)))
        .catch(error => dispatch(loadQuotesFailed(error)));
};

export const LOAD_QUOTES_SUCCESS = 'LOAD_QUOTES_SUCCESS';
export const loadQuotesSuccess = (quotes) => ({
    type: LOAD_QUOTES_SUCCESS,
    quotes,
});

export const LOAD_QUOTES_FAILED = 'LOAD_QUOTES_FAILED';
export const loadQuotesFailed = (error) => ({
    type: LOAD_QUOTES_FAILED,
    error,
});
