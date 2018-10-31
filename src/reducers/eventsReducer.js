import {SET_EVENTS} from 'constants/actionTypes'

const initialState = {
  loading: false,
  data: []
}

export default function events (state = initialState, action) {
  switch (action.type) {
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
