import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export default class Sidebar extends React.PureComponent {
  render () {
    return (
      <Container>{this.props.children}</Container>
    )
  }
}

Sidebar.propTypes = {
  children: PropTypes.element.isRequired
}
