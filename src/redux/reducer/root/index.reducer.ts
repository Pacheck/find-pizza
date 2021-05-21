import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../user/index.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''] //Add some data after
};

const rootReducer = combineReducers({
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);