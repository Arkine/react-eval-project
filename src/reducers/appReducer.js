import {APP_LOADED} from 'constants/actionTypes'

const initialState = {
  loaded: false
}

export default function app (state = initialState, action) {
  switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        loaded: true
      }
    default:
      return state
  }
}
