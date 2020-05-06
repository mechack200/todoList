import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import rootReducers from './rootReducer';

const middleWares = [logger];

const store = createStore(rootReducers, applyMiddleware(...middleWares));

const persistor = persistStore(store);
export { store, persistor };
