import React from 'react'
import PropTypes from 'prop-types'

import Event from '../../components/Event'
import SelectOption from '../../components/common/SelectOption'

import {Container} from './styled'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'
import SlidingCards from '../../components/SlidingCards'
import Pagination from '../../components/common/Pagination';
import LineGraph from '../../components/Data/LineGraph';

@setTitle('John-David Dalton | Events')
@transitionRoute()
export default class EventsView extends React.Component {
  static defaultProps = {
    events: [],
    perPage: 20
  }

  static propTypes = {
    events: PropTypes.array.isRequired,
    perPage: PropTypes.number
  }

  constructor (props) {
    super(props)

    this.state = {
      filter: null,
      page: 0
    }
  }

  getEvents () {
    let {events, perPage} = this.props
    // If the filter is not set and is not set to all  
    if (this.state.filter && this.state.filter !== 'all') {
      // Filter out events that we want
      events = this.filterEvents(events)
      // Calculate start and end indexes  
    }

    const start = this.state.page * perPage
    const end = start + perPage
    // return events.slice(start, end)
    return events
  }

  filterEvents (events) {
    return events.filter(event => event.type.split(/(?=[A-Z])/).join(' ') === this.state.filter)
  }

  getEventsByDate () {
    let events = this.getEvents()
    const dataSets = new Map()

    // Parse events to group them
    events.map(event => {
      const date = new Date(event.created_at)
      // Y M D
      const keyDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`

      // If the type is already stored, add it to the type
      if (dataSets.has(keyDate)) {
        const storedItem = dataSets.get(keyDate)
        storedItem.events.push(event)
      } else {
        dataSets.set(keyDate, {
          events: [event]
        })
      }
    })

    return [...dataSets.entries()]
  }
  renderEvents () {
    const events = this.getEventsByDate()

    return <LineGraph data={events} />
    // return <SlidingCards items={events} contentComponent={Event} propKey='event' />
  }

  render () {
    return (
      <Container>
        <Container.Content>
          <Container.Body>{this.renderEvents()}</Container.Body>
        </Container.Content>
      </Container>
    )
  }
}
