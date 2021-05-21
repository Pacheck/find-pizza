import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from '../reducer/root/index.reducer';

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export const persistor = persistStore(store as any);