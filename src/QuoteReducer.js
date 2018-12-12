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
    console.log(action);
    console.log('CURRENT    STATE');
    console.log(state);
    let newState = state; 
    
    switch(action.type) {
        case LOAD_QUOTES_SUCCESS:
            console.log('cow');
            const dog = Object.assign(
                {}, 
                state, 
                { 
                    quotes: action.quotes,
                    current: nextQuote(action.quotes), 
                }
            ); 
            // console.log(dog);
            console.debug(dog);
            newState = dog;
            break;
        case LOAD_QUOTES_FAILED:
            console.error(action.error);
            newState = state;
            break;
        case NEXT_QUOTE: 
            newState = Object.assign({},
                state, 
                { current: nextQuote(state.quotes), }
            );
            break;
        default:
            newState = state;
            break;
    }

    console.log('NEW    STATE');
    console.log(newState);
    return newState;
};
