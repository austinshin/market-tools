const initialState = {
  // searches: 0,
  isFetching: false,
  accountInfo: {},
  err: null,
}

const accountInfoReducer = (state = initialState, action) => {
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