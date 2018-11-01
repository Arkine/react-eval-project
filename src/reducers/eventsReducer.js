import {SET_EVENTS, GET_EVENTS, GET_EVENTS_FAIL} from 'constants/actionTypes'

const initialState = {
  loading: false,
  data: []
}

export default function events (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_EVENTS:
      return {
        ...state,
        loading: true
      }
    case SET_EVENTS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}
