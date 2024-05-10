const initialState = {
  // searches: 0,
  isFetching: false,
  tickers: [],
  err: null,
}

const tickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TICKERS':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_TICKERS':
      return Object.assign({}, state, {
        isFetching: false,
        tickers: action.tickers,
      })
    case 'TICKER_REQUEST_FAILED':
      return Object.assign({}, state, {
        err: action.err,
      })
    default:
      return state;
  }
}

export default tickerReducer;