import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div``

export default class Repo extends React.PureComponent {
  render () {
    const {repo} = this.props
    return (
      <Container>
        <h3>{repo.name}</h3>
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
