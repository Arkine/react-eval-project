import React from 'react'
import PropTypes from 'prop-types'

import Event from '../../components/Event'

import {Container} from './styled'

import setTitle from '../../decorators/setTitle'

@setTitle('John-David Dalton | Events')
export default class EventsView extends React.PureComponent {
  renderChildren () {
	  const {events} = this.props
    return events.map(event => <Event event={event} />)
  }

  render () {
    return (
      <Container>
        Events View
        {this.renderChildren()}
      </Container>
    )
  }
}

EventsView.defaultProps = {
  events: []
}

EventsView.propTypes = {
  events: PropTypes.array.isRequired
}
