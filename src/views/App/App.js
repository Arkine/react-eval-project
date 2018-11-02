import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter, Router, Route, Switch} from 'react-router-dom'

import Loading from 'components/common/Loading'
import Navigation from 'components/common/Navigation'
import Sidebar from 'components/Sidebar'
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs/Tab'

import UserView from '../UserView'
import EventsView from '../EventsView'
import ReposView from '../ReposView'

import history from '../../services/history'

import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import {updateApp} from 'actions/appActions'

import {Container, Stage} from './styled'

import navItems from './navItems'


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
  static defaultProps = {
    user: {},
    events: {},
    repos: {}
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    repos: PropTypes.object.isRequired,
    getEvents: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    updateApp: PropTypes.func.isRequired,
    app: PropTypes.shape({
      loading: PropTypes.bool
    })
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
            <Navigation links={navItems} currentSlug={this.props.location.pathname} />
            <Stage.Content>
              <Router history={history}>
                <Switch>
                  <Route exact path="/repositories">
                    { ({ match }) => <ReposView show={match !== null} repos={repos.data} /> }
                  </Route>
                  <Route exact path="/events">
                    { ({ match }) => <EventsView show={match !== null} events={events.data} /> }
                  </Route>
                </Switch>
              </Router>
            </Stage.Content>
          </Stage>
        </Container.Content>
      </Container>
    )
  }
}
