import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;

  flex-basis: 15rem;
  padding: 0.5rem;

  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.blue_light};
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
