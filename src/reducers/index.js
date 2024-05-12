import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import tickerReducer from './tickerReducer';
import accountInfoReducer from './accountInfoReducer';
import { connectRouter } from 'connected-react-router';

export const rootReducer = history => combineReducers({
  router: connectRouter(history),
  tickers: tickerReducer,
  items: itemReducer,
  accountInfo: accountInfoReducer
});