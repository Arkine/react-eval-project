import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

// import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Loading from 'components/common/Loading'
import UserView from './UserView'
import EventsView from './EventsView'
import ReposView from './ReposView'

import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'

const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${props => props.theme.colors.charcoal};
`

Container.Content = styled.div`
  flex-grow: 1;
  padding: 1rem;
`

const Stage = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 100%;
  width: 100%;
`

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
          <UserView user={user} />
        </Sidebar>
        <Container.Content>
          <Stage>
            <ReposView repos={repos} />
            <EventsView events={events} />
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
