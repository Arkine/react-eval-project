import {SET_USER, GET_USER, GET_USER_FAIL} from 'constants/actionTypes'

export function getUser () {
  return dispatch => {
    dispatch({
      type: GET_USER
    })
    try {
      setTimeout(() => {
        dispatch({
          type: SET_USER,
          payload: require('./user.json')
        })
      }, 600)
    } catch (e) {
      dispatch({
        type: GET_USER_FAIL,
        payload: e
      })
    }
  }
}
