import { handleActions } from 'redux-actions';
/* eslint-disable no-unused-vars*/
import { 
    NEXT_QUOTE, 
    LOAD_QUOTES_SUCCESS,
    LOAD_QUOTES_FAILED,
} from "./actions";
/* eslint-disable no-unused-vars*/

const nextQuote = (quotes) => {
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
    LOAD_QUOTES_SUCCESS: (state, action) => 
        Object.assign(
            {}, 
            state, 
            { 
                quotes: action.quotes,
                current: nextQuote(action.quotes), 
            }
        ),
    LOAD_QUOTES_FAILED: (state, action) => {
            console.error(action.error);
            return state;
        },
    NEXT_QUOTE: state => 
        Object.assign({},
            state, 
            { 
                current: nextQuote(state.quotes), 
            }
        ),
};

const reducer = handleActions(actionHandlers, initialState);
export default reducer;

