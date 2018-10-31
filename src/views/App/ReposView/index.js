import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div``

export default class ReposView extends React.PureComponent {
  render () {
    return (
      <Container>
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
