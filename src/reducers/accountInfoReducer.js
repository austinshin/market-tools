const initialState = {
  // searches: 0,
  isFetching: false,
  accountInfo: {
    "ONE_R": 0,
    "TWO_R": 0,
    "accountBalance": 0,
    "winProbability": 0,
    "profitRatio": 0,
    "edge": 0,
    "stake": 0,
    "expectedGrowth": 0,
  },
  err: null,
}

const accountInfoReducer = (state = initialState, action) => {
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'REQUEST_ACCOUNT_INFO':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_ACCOUNT_INFO':
      return Object.assign({}, state, {
        isFetching: false,
        accountInfo: action.accountInfo,
      })
    case 'ACCOUNT_INFO_REQUEST_FAILED':
      return Object.assign({}, state, {
        err: action.err,
      })
    default:
      return state;
  }
}

export default accountInfoReducer;