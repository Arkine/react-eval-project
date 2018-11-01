import {SET_EVENTS, GET_EVENTS, GET_EVENTS_FAIL} from 'constants/actionTypes'

export function getEvents () {
  return (dispatch) => {
    // Set the loading state
    dispatch({
      type: GET_EVENTS
    })

    try {
      setTimeout(() => {
        dispatch({
          type: SET_EVENTS,
          payload: require('./events.json')
        })
      }, 1500)
    } catch (e) {
      dispatch({
        type: GET_EVENTS_FAIL,
        payload: e
      })
    }
  }
}
