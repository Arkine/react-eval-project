import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {NavLink} from 'react-router-dom'

const Container = styled.nav`
  display: flex;
  flex-flow: row nowrap;

  padding: 0 1rem;
`
Container.Link = styled(NavLink)`
  margin: 0.25rem;
  padding: 0.5rem;

  color: ${props => props.active === 'true' ? props.theme.colors.dark_blue : props.theme.colors.charcoal};
  border-bottom: 2px solid ${props => props.active === 'true' ? props.theme.colors.dark_blue : 'transparent'};

  &:first-of-type {
    margin-left: 0;
  }
`

export default class Navigation extends React.PureComponent {
  static propTypes = {
    currentSlug: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    })).isRequired
  }

  renderNavLinks () {
    const {links, currentSlug} = this.props

    return links.map((link, i) => {
      const active = currentSlug === link.url
      return <Container.Link to={link.url} active={active ? 'true' : 'false'} key={`link-${i}`} >{link.label}</Container.Link>
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
