import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  justify-content: center;

  flex-basis: 15rem;

  padding: 0.5rem;

  width: 100%;
`

export default class Sidebar extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
  }

  render () {
    return (
      <Container>{this.props.children}</Container>
    )
  }
}
