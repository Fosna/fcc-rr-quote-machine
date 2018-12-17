import { handleActions } from 'redux-actions';
import { 
    nextQuote, 
    loadQuotesSuccess,
    loadQuotesFailed,
} from "./actions";

const getNextQuote = (quotes) => {
    const randIndex = Math.floor(Math.random() * Math.floor(quotes.length));
    const randQuote = { ...quotes[randIndex] } ;
    return randQuote;
};

const initialState = {
    quotes: [],
    current: {
        quote: '...',
        author: 'unknown',
    },
};

const actionHandlers = {
    [loadQuotesSuccess]: (state, { 
        payload: { 
            quotes,
        },
    }) => {
        return Object.assign(
            {}, 
            state, 
            { 
                quotes: quotes,
                current: getNextQuote(quotes), 
            }
        )
    }
        ,
    [loadQuotesFailed]: (state, { payload }) => {
            console.error(payload);
            return state;
        },
    [nextQuote]: state => 
        Object.assign({},
            state, 
            { 
                current: getNextQuote(state.quotes), 
            }
        ),
};

const reducer = handleActions(actionHandlers, initialState);
export default reducer;

