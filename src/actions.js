import axios from 'axios';
import { createAction } from 'redux-actions';

export const nextQuote = createAction('NEXT_QUOTE');

const getQuotes = () => axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

export const loadQuotesStart = createAction('LOAD_QUOTES_START');

const loadQuotes = () => dispatch => {
    dispatch(loadQuotesStart());
    getQuotes()
        .then(
            res => dispatch(
                loadQuotesSuccess({ 
                    quotes: res.data.quotes,
                })
            ),
            error => dispatch(loadQuotesFailed(error)
        )
    );
};
loadQuotes.toString = () => 'LOAD_QUOTES';
export { loadQuotes };

export const loadQuotesSuccess = createAction('LOAD_QUOTES_SUCCESS');
export const loadQuotesFailed = createAction('LOAD_QUOTES_FAILED');
