import fetch from 'isomorphic-fetch';
import config from '../config/client';

export const requestTickers = (query) => ({
  type: 'REQUEST_TICKERS',
  query
});

export const receiveTickers = (tickers) => ({
  type: 'RECEIVE_TICKERS',
  tickers
})

export const tickerRequestFailed = (err) => ({
  type: 'TICKER_REQUEST_FAILED',
  err
});

export function fetchTickers(query) {
  return function (dispatch) {
    dispatch(requestTickers(query))
    console.log('query');
    console.log(config);
    return fetch(`${config.endpoint}polygon`, {
      method: "POST",
      body: query
    })
      .then(res => res.json()
        .then(json => ({
          status: res.status,
          json
        })))
      .then(({ status, json }) => {
        if (status >= 400)
          dispatch(tickerRequestFailed())
        else
          dispatch(receiveTickers(json))
      }, err => {
        dispatch(tickerRequestFailed(err))
      })
  }
}