import React from 'react'
import PropTypes from 'prop-types'

import {Container} from './styled'

export default class Repo extends React.PureComponent {
  render () {
    const {repo} = this.props
    return (
      <Container>
        <Container.Title>{repo.name}</Container.Title>
      </Container>
    )
  }
}

Repo.defaultProps = {
  repo: {}
}

Repo.propTypes = {
  repo: PropTypes.object.isRequired
}
