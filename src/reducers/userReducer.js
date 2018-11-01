import {SET_USER, GET_USER, GET_USER_FAIL} from 'constants/actionTypes'

const initialState = {
  loading: false,
  data: {}
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_USER:
      return {
        ...state,
        loading: true
      }
    case SET_USER:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}
