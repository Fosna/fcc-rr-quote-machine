import { handleActions } from 'redux-actions';
import { 
    nextQuote,
    loadQuotesSuceeded,
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
        Object.assign({},
            state, 
            { 
                current: getNextQuote(state.quotes), 
            }
        ),
    [loadQuotesSuceeded]: (state, { 
        payload: { 
            data: { 
                quotes 
            }
        }
    }) => 
        Object.assign({}, 
            state,
            {
                current: getNextQuote(quotes),
                quotes: quotes,
            }
        ),
    [loadQuotesFailed]: (state, { payload }) => {
        console.error(payload)
        return state;
    },
};

const reducer = handleActions(actionHandlers, initialState);
export default reducer;

