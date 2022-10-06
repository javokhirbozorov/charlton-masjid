import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initState } from './initState';
import { rootReducer } from './reducers/rootReducers';

const composeEnhancers = composeWithDevTools();

export const store = createStore(rootReducer, initState, composeEnhancers);
