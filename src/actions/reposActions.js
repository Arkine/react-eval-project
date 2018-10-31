import {SET_REPOS, GET_REPOS} from 'constants/actionTypes'

export function getRepos () {
  return dispatch => {
    dispatch({
      type: GET_REPOS
    })

    setTimeout(() => {
      dispatch({
        type: SET_REPOS,
        payload: require('./repos.json')
      })
    }, 1000)
  }
}
