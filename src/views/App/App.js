import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Sidebar from 'components/Sidebar'
import Loading from 'components/common/Loading'
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs/Tab'

import UserView from '../UserView'
import EventsView from '../EventsView'
import ReposView from '../ReposView'


import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import {updateApp} from 'actions/appActions'

import {Container, Stage} from './styled'


const mapStateToProps = state => ({
  repos: state.repos,
  user: state.user,
  events: state.events,
  app: state.app
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos,
  getUser,
  updateApp
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents, updateApp} = this.props

    getUser()
    getRepos()
    getEvents()
    updateApp()
  }


  render () {
    const {user, events, repos, app} = this.props
    const isLoading = (user.loading || events.loading || repos.loading)

    if (app.loading || isLoading) {
      return <Loading isLoading={isLoading} text={'Loading...'} />
    }

    return (
      <Container>
        <Sidebar>
          <UserView user={user.data} />
        </Sidebar>
        <Container.Content>
          <Stage>
            <Tabs>
              <Tab text='Repositories'>
                <ReposView repos={repos.data} />
              </Tab>
              <Tab text='Events'>
                <EventsView events={events.data} />
              </Tab>
            </Tabs>
          </Stage>
        </Container.Content>
      </Container>
    )
  }
}

App.defaultProps = {
  user: {},
  events: {},
  repos: {}
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  repos: PropTypes.object.isRequired,
  app: PropTypes.shape({
    loading: PropTypes.bool
  })
}
