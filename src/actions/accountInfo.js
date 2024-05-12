import fetch from 'isomorphic-fetch';

export const requestAccountInfo = (query) => ({
  type: 'REQUEST_ACCOUNT_INFO',
  query
});

export const receiveAccountInfo = (accountInfo) => ({
  type: 'RECEIVE_ACCOUNT_INFO',
  accountInfo
})

export const accountInfoRequestFailed = (err) => ({
  type: 'ACCOUNT_INFO_REQUEST_FAILED',
  err
});

export function fetchAccountInfo(query) {
  return function (dispatch) {
    dispatch(requestAccountInfo(query))

    return fetch(query, {
      method: "GET",
    })
      .then(res => res.json()
        .then(json => ({
          status: res.status,
          json
        })))
      .then(({ status, json }) => {
        if (status >= 400)
          dispatch(accountInfoRequestFailed())
        else
          dispatch(receiveAccountInfo(json))
      }, err => {
        dispatch(accountInfoRequestFailed(err))
      })
  }
}