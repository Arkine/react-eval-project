import React from 'react'
import PropTypes from 'prop-types'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'

import SlidingCards from '../../components/SlidingCards'
import Repo from '../../components/Repo'

import { Container } from './styled'

@setTitle('John-David Dalton | Repositories')
@transitionRoute()
export default class ReposView extends React.Component {
  static propTypes = {
    repos: PropTypes.array.isRequired
  }

  static defaultProps = {
    repos: []
  }

  constructor (props) {
    super(props)

    this.state = {
      search: null
    }
  }

  getRepos () {
    return this.props.repos
  }
  handleSearchInput = e => {
    this.setState({
      search: e.target.value
    })
  }
  render () {
    const repos = this.getRepos()

    return (
      <Container>
        <Container.Body>
          {repos.length === 0 &&
            <Container.No_results>{this.state.search || 'Repos'} not found...</Container.No_results>
          }
          {repos.length > 0 &&
            <SlidingCards items={repos} contentComponent={Repo} propKey='repo' />
          }
        </Container.Body>
      </Container>
    )
  }
}
