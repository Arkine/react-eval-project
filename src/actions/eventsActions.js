import {SET_EVENTS, GET_EVENTS} from 'constants/actionTypes'

export function getEvents () {
  return dispatch => {
    // Set the loading state
    dispatch({
      type: GET_EVENTS
    })

    setTimeout(() => {
      dispatch({
        type: SET_EVENTS,
        payload: require('./events.json')
      })
    }, 1500)
  }
}
