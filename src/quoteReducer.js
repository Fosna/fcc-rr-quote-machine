import { handleActions } from 'redux-actions';
import { 
    nextQuote,
    loadQuotesStarted,
    loadQuotesSucceeded,
    loadQuotesFailed,
} from "./actions";
import Immutable from 'seamless-immutable';

const getNextQuote = (quotes) => {
    const randIndex = Math.floor(Math.random() * Math.floor(quotes.length));
    const randQuote = { ...quotes[randIndex] } ;

    return randQuote;
};

const initialState = Immutable.from({
    quotes: [],
    current: {
        quote: '...',
        author: 'unknown',
    },
});

const actionHandlers = {
    [nextQuote]: state => 
        state.merge({ 
            current: getNextQuote(state.quotes) 
        }),
    [loadQuotesStarted]: state => 
        state.merge({
            current: {
                quote: '...loading...',
                author: 'loading...',
            }
        }),
    [loadQuotesSucceeded]: (state, { 
        payload: { 
            data: { 
                quotes 
            }
        }
    }) => 
        state.merge({
            current: getNextQuote(quotes),
            quotes: quotes,
        }),
    [loadQuotesFailed]: (state, { payload }) => {
        console.error(payload);
        return state.merge({ 
            current: {
                quote: 'Ups!',
                author: 'An Error',
            },
        });
    },
};

const reducer = handleActions(actionHandlers, initialState);
export default reducer;

