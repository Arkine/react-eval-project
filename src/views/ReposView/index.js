import React from 'react'
import PropTypes from 'prop-types'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'

import SlidingCards from '../../components/SlidingCards'
// import SearchBox from '../../components/common/SearchBox'
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
    const {repos} = this.props
    console.log(this.state.search)
    // if (this.state.search && this.state.search.length) {
    //   return repos.filter(repo => {
    //     console.log({
    //       eval: repo.name.toLowerCase().includes(this.state.search.toLowerCase()),
    //       repo: repo.name.toLowerCase(),
    //       state: this.state.search.toLowerCase()
    //     })
    //     return repo.name.toLowerCase().includes(this.state.search.toLowerCase())
    //   })
    // }

    return repos
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
        <Container.Header>
          {/* <SearchBox onInputChange={this.handleSearchInput} /> */}
        </Container.Header>
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
