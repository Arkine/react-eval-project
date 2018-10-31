import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
  border-radius: 30px;
`

export default class ImageBlock extends React.PureComponent {
  render () {
    return (
      <Image src={this.props.image} height={this.props.height} width={this.props.width} />
    )
  }
}

ImageBlock.defaultProps = {
  image: '',
}

ImageBlock.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
}
