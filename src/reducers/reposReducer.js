import {SET_REPOS, GET_REPOS, GET_REPOS_FAIL} from 'constants/actionTypes'

const initialState = {
  loading: false,
  data: []
}

export default function repos (state = initialState, action) {
  switch (action.type) {
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
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
