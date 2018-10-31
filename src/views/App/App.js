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

import {Container, Stage} from './styled'

const mapStateToProps = state => ({
  repos: state.repos,
  user: state.user,
  events: state.events
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos,
  getUser
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
    const {getUser, getRepos, getEvents} = this.props

    getUser()
    getRepos()
    getEvents()
  }

  render () {
    const {user, events, repos} = this.props
    const isLoading = (user.loading || events.loading || repos.loading)

    return (
      <Container>
        <Loading isLoading={isLoading} />
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
  repos: PropTypes.object.isRequired
}
