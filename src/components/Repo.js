import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div``

export default class Repo extends React.PureComponent {
  render () {
    return (
      <Container>
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
