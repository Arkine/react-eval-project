import React from 'react'
import PropTypes from 'prop-types'

import Repo from 'components/Repo'

import {Container} from './styled'

export default class ReposView extends React.PureComponent {
  renderChildren () {
    const {repos} = this.props;

    return repos.map(repo => {
      <Repo></Repo>
    })
  }

  render () {
    return (
      <Container>
        Repos view
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
