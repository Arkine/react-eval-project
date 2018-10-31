import React from 'react'
import PropTypes from 'prop-types'

export default class ImageBlock extends React.PureComponent {
  render () {
    return (
      <img src={this.props.image} height={this.props.height} width={this.props.width} />
    )
  }
}

ImageBlock.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
}
