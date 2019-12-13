import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from '../reducers/index';
import { test } from '../middleware/index';
import thunk from 'redux-thunk';
import * as Stuff from '../constants/action-types';

//const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedStateId = localStorage.getItem('user_id') || '';
const persistedStateAuthToken = localStorage.getItem('auth_token') || '';

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(test,thunk)));
//const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware,initialiseSagaMiddleware)));

//initialiseSagaMiddleware.run(apiSaga);
store.dispatch({
    type: Stuff.ADD_USER, payload: {id: persistedStateId !== '' ?  persistedStateId : persistedStateId , auth_token: persistedStateAuthToken}
})

export default store;

