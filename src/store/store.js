import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './user';
import { ratesReducer } from './rates';
import thunk from 'redux-thunk'

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: ratesReducer
  }),
  applyMiddleware(thunk)
);