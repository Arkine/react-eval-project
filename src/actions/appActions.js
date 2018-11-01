import {APP_LOADED} from 'constants/actionTypes'

export function updateApp () {
  return dispatch => {
    // Set the loading state
    dispatch({
      type: APP_LOADED
    })
  }
}
