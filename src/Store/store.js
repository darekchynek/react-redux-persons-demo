import { createStore, } from 'redux';
import { rootReducer } from './reducer';
import { composeWithDevTools } from "redux-devtools-extension";

export const getStore = () => {
    const store = createStore(rootReducer, composeWithDevTools());
    return store;
}