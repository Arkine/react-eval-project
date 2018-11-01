import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
`

Container.Page_number = styled.span`
  display: inline-block;
  padding: 0.5rem;

  border: ${props => props.theme.colors.blue_dark};
  background-color: ${props => props.active === true ? props.theme.colors.blue_dark: 'transparent'};
  border: 1px solid ${props => props.theme.colors.blue_dark};
  border-radius: 4px;
  color: ${props => props.active === true ? '#fff' : 'initial'};

  span {
    margin: 0 0.5rem;
  }
`

Container.Ellipses = styled.span`
  color: ${props => props.theme.colors.blue_dark};
`

Container.Navigation_button = styled.span`
  color: ${props => props.theme.colors.blue_dark};
  
  &:hover {
    cursor: pointer;
  }
`

export default class Pagination extends React.PureComponent {
  renderPageNumbers () {
    const {pageCount, showMax, currentPage} = this.props
    const out = []

    for (let i = 1; i <= pageCount; i++) {
      const active = currentPage === i
      out.push(<Container.Page_number onClick={this.handleNumberClick} data-page={i} active={active}>{i}</Container.Page_number>)
    }

    return out.slice(0, showMax).concat(<p>...</p>)
  }
  handleNumberClick = e => {
    this.props.onPageClick(e)
  }
  handleNavClick = e => {
    this.props.onNavChange(e)
  }

  render () {
    return (
      <Container>
        <Container.Navigation_button onClick={this.handleNavClick} data-increment={-1}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
          <span>Prev</span>
        </Container.Navigation_button>
        {this.renderPageNumbers()}
        <Container.Navigation_button onClick={this.handleNavClick} data-increment={1}>
          <span>Next</span>
          <FontAwesomeIcon icon={faLongArrowAltRight}/>
        </Container.Navigation_button>
      </Container>
    )
  }
}

Pagination.defaultProps = {
  showMax: 3
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onNavChange: PropTypes.func.isRequired,
  onPageClick: PropTypes.func.isRequired,
  showMax: PropTypes.number
}
