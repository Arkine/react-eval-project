import React from 'react';
import styled, {keyframes} from 'styled-components'
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const spin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`
// const fadeIn = keyframes`
//   from {opacity: 0}
//   to {opacity: 1}
// `
const fadeOut = keyframes`
  from {opacity: 1}
  to {opacity: 0}
`
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  color: ${props => props.theme.colors.yellow_sun};
  background-color: ${props => props.theme.colors.gray};

  visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
  animation: ${props => props.isLoading ? null : fadeOut} 0.5s linear;
  transition: visibility 0.5s linear;
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  animation: ${spin} 2s linear infinite;
`
export default class Loading extends React.PureComponent {
  render () {
    return (
      <Container isLoading={this.props.isLoading}><Icon icon={faSpinner} /></Container>
    )
  }
}

Loading.defaultProps = {
  isLoading: false
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
