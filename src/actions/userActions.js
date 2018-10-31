import {SET_USER, GET_USER} from 'constants/actionTypes'

export function getUser () {
  return (dispatch) => {
    dispatch({
      type: GET_USER
    })

    setTimeout(() => {
      dispatch({
        type: SET_USER,
        payload: require('./user.json')
      })
    }, 600)
  }
}
