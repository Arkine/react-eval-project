import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

// import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import ImageBlock from 'components/common/ImageBlock'

import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'

const Container = styled.div`
  background-color: red;
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
    const {user} = this.props;
    // console.log(this.props)
    return (
      <Container>
        <Sidebar>
          <ImageBlock image={user.avatar_url} height={200} width={200} />
        </Sidebar>

      </Container>
    )
  }
}
