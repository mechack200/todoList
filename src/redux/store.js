import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducers from './rootReducer';

const middleWares = [logger];

const store = createStore(rootReducers, applyMiddleware(...middleWares));
export default store;
