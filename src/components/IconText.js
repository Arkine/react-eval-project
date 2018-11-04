import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Container = styled.div`
  margin-top: 1rem;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: ${props => props.theme.colors.blue_light};
`

export default class IconText extends React.PureComponent {
  static defaultProps = {
    icon: {},
    text: ''
  }

  static propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render () {
    return (
      <Container {...this.props}><Icon icon={this.props.icon} {...this.props} /><span>{this.props.text}</span></Container>
    )
  }
}
