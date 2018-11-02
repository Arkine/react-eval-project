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

  /**
   * Return a set of unique type strings
   */
  getEventTypes () {
    const {events} = this.props
    const uniqueKeys = new Set()

    for (const event of events) {
      if (!uniqueKeys.has(event.type)) {
        uniqueKeys.add(event.type)
      }
    }

    return [...uniqueKeys.values()]
  }

  getUniqueDates() {
    const {events} = this.props
    const dateMap = new Set()

    for (const event of events) {
      const date = new Date(event.created_at)
      const keyDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` // Y M D

      dateMap.add(keyDate)
    }

    return [...dateMap]
  }

  /**
   * Get events by date
   [
     {
      key,
      data: [{
        date,
        value: events length
     }]
     }
   ]
   */
  getEventsByDate () {
    let events = this.getEvents()
    // Get the keys
    const uniqueKeys = this.getEventTypes()
    // Get the dates
    const uniqueDates = this.getUniqueDates()
    const outData = []

    // Group the dates with the events of type key
    for (const date of uniqueDates){

      let dateData = {
        date,
        data: {}
      }

      // Set intial values for keys
      for (const key of uniqueKeys) {
        dateData.data[key] = 0
      }

      // Get all of the events for this day
      const associatedEvents = events.filter(event => {
        const createdDate = new Date(event.created_at)
        const keyDate = `${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDay()}` // Y M D

        return keyDate === date
      })

      // Iterate and increment count for the date
      for (const aEvent of associatedEvents) {
        const type = aEvent.type

        const count = dateData.data[type]

        dateData.data[type] = count + 1
      }

      outData.push(dateData)
    }

    return outData
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
