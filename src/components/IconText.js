import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Container = styled.div`
  margin-top: 1rem;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  color: ${props => props.theme.colors.yellow_sun};
`

export default class IconText extends React.PureComponent {
  render () {
    return (
      <Container><Icon icon={this.props.icon} /><span>{this.props.text}</span></Container>
    )
  }
}

IconText.defaultProps = {
  icon: '',
  text: ''
}

IconText.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
}
