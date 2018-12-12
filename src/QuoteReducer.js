import { 
    NEXT_QUOTE, 
    LOAD_QUOTES_SUCCESS,
    LOAD_QUOTES_FAILED,
} from "./actions";

const nextQuote = (quotes) => {
    const randIndex = Math.floor(Math.random() * Math.floor(quotes.length));
    const randQuote = { ...quotes[randIndex] } ;
    return randQuote;
};

const defaultState = {
    quotes: [],
    current: {
        quote: '...',
        author: 'unknown',
    },
};

export default (state = defaultState, action) => {

    switch(action.type) {
        case LOAD_QUOTES_SUCCESS:
            return Object.assign(
                {}, 
                state, 
                { 
                    quotes: action.quotes,
                    current: nextQuote(action.quotes), 
                }
            ); 
        case LOAD_QUOTES_FAILED:
            console.error(action.error);
            return state;
        case NEXT_QUOTE: 
            return Object.assign({},
                state, 
                { 
                    current: nextQuote(state.quotes), 
                }
            );
        default:
            return state;
    }

};
