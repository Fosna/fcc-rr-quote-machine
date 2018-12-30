import axios from 'axios';
import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';

// CreateAction returns function. `toString` on that function returns action type.
// CreateAction thunk is missing `toString` override. This function provides it.
const createActionThunkWithType = (actionType, fn) => {
    const actionCreator = createActionThunk(actionType, fn);
    actionCreator.toString = () => actionType;
    return actionCreator;
};

export const nextQuote = createAction('NEXT_QUOTE');

const getQuotes = () => axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
export const loadQuotes = createActionThunkWithType('LOAD_QUOTES', getQuotes);

// Action type based on createActionThunk naming convention.
export const loadQuotesStarted = `${loadQuotes.toString()}_STARTED`;

export const loadQuotesSucceeded = `${loadQuotes.toString()}_SUCCEEDED`;

export const loadQuotesFailed = `${loadQuotes.toString()}_FAILED`;
