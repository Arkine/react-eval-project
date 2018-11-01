import React from 'react'
import PropTypes from 'prop-types'

import Event from '../../components/Event'
import SelectOption from '../../components/common/SelectOption'

import {Container} from './styled'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'
import SlidingCards from '../../components/SlidingCards'

@setTitle('John-David Dalton | Events')
@transitionRoute()
export default class EventsView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: null
    }
  }

  getEvents () {
    const {events} = this.props
    if (this.state.filter && this.state.filter !== 'all') {
      return this.filterEvents(events)
    }

    return events
  }

  filterEvents (events) {
    return events.filter(event => event.type.split(/(?=[A-Z])/).join(' ') === this.state.filter)
  }

  getMonthlyActivity () {
    let events = this.getEvents()
  }
  renderEvents () {
    const events = this.getEvents()

    return <SlidingCards items={events} contentComponent={Event} propsKey={event} />
  }
  handleTypeSelect = e => {
    this.setState({
      filter: e.target.value
    })
  }
  getEventTypes () {
    const {events} = this.props
    const uniqueKeys = new Map()

    for (const event of events) {
      if (!uniqueKeys.has(event.type)) {
        uniqueKeys.set(event.type, {
          label: event.type.split(/(?=[A-Z])/).join(' ')
        })
      }
    }

    return uniqueKeys.values()
  }

  render () {
    const eventTypes = this.getEventTypes()

    return (
      <Container>
        <Container.Content>
          <Container.Header>
            <SelectOption
              options={eventTypes}
              onSelect={this.handleTypeSelect}
              label='Filter By:'
              allowNone
            />
          </Container.Header>
          <Container.Body>{this.renderEvents()}</Container.Body>
          <Container.Footer></Container.Footer>
        </Container.Content>
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
