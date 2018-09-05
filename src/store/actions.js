import axios from 'axios'

import * as constants from './constants'

const fetchDataStart = () => ({
  type: constants.DATA_FETCH_START
})

const fetchDataSuccess = data => ({
  type: constants.DATA_FETCH_SUCCESS,
  payload: data
})

const fetchDataFail = err => {
  return {
    type: constants.DATA_FETCH_FAIL,
    payload: err
  }
}

export const fetchData = () => dispatch => {
  dispatch(fetchDataStart())
  axios({
    method: 'get',
    url: 'https://s3-eu-west-1.amazonaws.com/public-amb/demo_english_final.json'
  })
    .then(res =>
      dispatch(
        fetchDataSuccess({
          data: res.data,
          src:
            'https://s3-eu-west-1.amazonaws.com/public-amb/demo_english_final.mp3'
        })
      )
    )
    .catch(err => dispatch(fetchDataFail(err)))
}
