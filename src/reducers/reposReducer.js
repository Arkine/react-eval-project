import {SET_REPOS, GET_REPOS} from 'constants/actionTypes'

const initialState = {
  loading: false,
  data: []
}

export default function repos (state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        loading: true
      }
    case SET_REPOS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}
