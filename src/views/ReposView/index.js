import React from 'react'
import PropTypes from 'prop-types'

import Repo from '../../components/Repo'

import {Container} from './styled'
import setTitle from '../../decorators/setTitle'

@setTitle('John-David Dalton | Repositories')
export default class ReposView extends React.PureComponent {
  renderChildren () {
    const {repos} = this.props

    return repos.map(repo => <Repo repo={repo} />)
  }

  render () {
    return (
      <Container>
        {this.renderChildren()}
      </Container>
    )
  }
}

ReposView.defaultProps = {
  repos: []
}

ReposView.propTypes = {
  repos: PropTypes.array.isRequired
}
