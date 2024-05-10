import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import tickerReducer from './tickerReducer';
import { connectRouter } from 'connected-react-router';

export const rootReducer = history => combineReducers({
  tickers: tickerReducer,
  items: itemReducer,
  router: connectRouter(history),
});