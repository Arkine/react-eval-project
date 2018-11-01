import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;

  flex-basis: 15rem;
  flex-grow: 0;

  padding: 0.5rem;

  width: 100%;
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
