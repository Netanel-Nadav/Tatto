import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { artistReducer } from './reducers/ArtistSlice';
import { userReducer } from './reducers/UserSlice';

const rootReducer = combineReducers({
    artist: artistReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
