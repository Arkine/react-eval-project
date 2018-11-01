import React from 'react'
import PropTypes from 'prop-types'

import Event from '../../components/Event'

import {Container} from './styled'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'

@setTitle('John-David Dalton | Events')
@transitionRoute()
export default class EventsView extends React.PureComponent {
  renderChildren () {
    const {events} = this.props
    return events.map((event, i) => <Event key={`Event-${i}`} event={event} />)
  }

  render () {
    return (
      <Container>
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
