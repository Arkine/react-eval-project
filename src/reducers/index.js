import {combineReducers} from 'redux'
import repos from './reposReducer'
import user from './userReducer'
import events from './eventsReducer'
import app from './appReducer'

export default combineReducers({
  repos,
  user,
  events,
  app
})
