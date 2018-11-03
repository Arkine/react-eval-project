import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
  border-radius: 4px;
  margin: 0 auto;
`
/**
 * Displays an image url in block
 */
export default class ImageBlock extends React.PureComponent {
  static defaultProps = {
    image: ''
  }

  static propTypes = {
    image: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
  }

  render () {
    return (
      <Image src={this.props.image} height={this.props.height} width={this.props.width} />
    )
  }
}
