import React from 'react'
import PropTypes from 'prop-types'

export default class Event extends React.PureComponent {
  render () {
    return (
      <div></div>
    )
  }
}

Event.defaultProps = {
  event: {}
}

Event.PropTypes = {
  event: PropTypes.object.isRequired,
}
