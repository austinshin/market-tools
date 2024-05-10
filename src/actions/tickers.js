import fetch from 'isomorphic-fetch';

export const requestTickers = (query) => ({
  type: 'REQUEST_TICKERS', query
})

export const receiveTickers = (tickers) = ({
  type: 'RECEIVE_TICKERS', tickers
})

export const tickerRequestFailed = (err) => ({
  type: 'TICKER_REQUEST_FAILED', err
})

export function fetchTickers(query) {
  return function (dispatch) {
    console.log('query', query);
    dispatch(requestTickers(query))
    return fetch(query)
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