import {SET_REPOS, GET_REPOS, GET_REPOS_FAIL} from 'constants/actionTypes'

export function getRepos () {
  return dispatch => {
    dispatch({
      type: GET_REPOS
    })

    try {
      setTimeout(() => {
        dispatch({
          type: SET_REPOS,
          payload: require('./repos.json')
        })
      }, 1000)
    } catch (e) {
      dispatch({
        type: GET_REPOS_FAIL,
        payload: e
      })
    }
  }
}
