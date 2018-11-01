import React from 'react'
import PropTypes from 'prop-types'

import Repo from '../../components/Repo'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'
import SlidingCards from '../../components/testing/slidingCards';

@setTitle('John-David Dalton | Repositories')
@transitionRoute()
export default class ReposView extends React.PureComponent {
  renderChildren () {
    const {repos} = this.props

    return repos.map(repo => <Repo repo={repo} />)
  }

  render () {
    return (
      <SlidingCards items={this.props.repos} />
    )
  }
}

ReposView.defaultProps = {
  repos: []
}

ReposView.propTypes = {
  repos: PropTypes.array.isRequired
}
