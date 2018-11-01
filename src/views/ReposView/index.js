import React from 'react'
import PropTypes from 'prop-types'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'
import SlidingCards from '../../components/testing/slidingCards';
import Repo from '../../components/Repo'

@setTitle('John-David Dalton | Repositories')
@transitionRoute()
export default class ReposView extends React.PureComponent {
  render () {
    return (
      <SlidingCards items={this.props.repos} contentComponent={Repo} />
    )
  }
}

ReposView.defaultProps = {
  repos: []
}

ReposView.propTypes = {
  repos: PropTypes.array.isRequired
}
