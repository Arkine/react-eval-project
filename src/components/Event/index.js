import React from 'react'
import PropTypes from 'prop-types'

export default class Event extends React.PureComponent {
  render () {
    return (
      <div>Event</div>
    )
  }
}

Event.defaultProps = {
  event: {}
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}
