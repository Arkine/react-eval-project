import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {NavLink} from 'react-router-dom'

const Container = styled.nav`
  display: flex;
  flex-flow: row nowrap;
`
Container.Link = styled(NavLink)`
  margin: 0.25rem;
  padding: 0.5rem;

  color: ${props => props.theme.colors.dark_blue};
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.dark_blue : 'transparent'};

  &:first-of-type {
    margin-left: 0;
  }
`

export default class Navigation extends React.PureComponent {
  static propTypes = {
    links: PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    }).isRequired
  }

  renderNavLinks () {
    const {links, currentSlug} = this.props

    return links.map(link => {
      const active = currentSlug === link.url
      return <Container.Link to={link.url} active={active} >{link.label}</Container.Link>
    })
  }
  render () {
    return (
      <Container>
        {this.renderNavLinks()}
      </Container>
    )
  }
}

// Navigation.propTypes = {
//   links: PropTypes.shape({
//     url: PropTypes.string,
//     label: PropTypes.string
//   }).isRequired
// }
