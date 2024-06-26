import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './reducers/index';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import freeze from 'redux-freeze';
import config from './config/client'
import { fetchAccountInfo } from './actions/accountInfo';

const history = createBrowserHistory();
const loggerMiddleware = createLogger();

let middlewares = [
  thunkMiddleware,
  routerMiddleware(history)
];

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze)
  middlewares.push(loggerMiddleware)
}

// create the store
const store = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares),
);

// initialize app state
store.dispatch(fetchAccountInfo(config.endpoint + 'account-info'));

export { store, history };