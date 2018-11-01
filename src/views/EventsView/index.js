import React from 'react'
import PropTypes from 'prop-types'

import Event from '../../components/Event'
import SelectOption from '../../components/common/SelectOption'

import {Container} from './styled'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'
import SlidingCards from '../../components/SlidingCards'
import Pagination from '../../components/common/Pagination';

@setTitle('John-David Dalton | Events')
@transitionRoute()
export default class EventsView extends React.Component {
  constructor(props) {
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
    return events.slice(start, end)
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

  handleNavChange = e => {
    const {events, perPage} = this.props
    const change = e.target.dataset.increment
    const totalPages = Math.ceil(events.length / perPage)

    const nextPage = this.state.page + change
    if (nextPage <= 0 || nextPage > totalPages) {
      return
    }
    
    this.setState({
      page: nextPage
    })
  }

  handlePageChange = e => {

  }
 
  render () {
    // const eventTypes = this.getEventTypes()
    const currentPage = this.state.page === 0 ? 1 : this.state.page

    return (
      <Container>
        <Container.Content>
          <Container.Header>
            {/* <SelectOption
              options={eventTypes}
              onSelect={this.handleTypeSelect}
              label='Filter By:'
              allowNone
            /> */}
          </Container.Header>
          <Container.Body>{this.renderEvents()}</Container.Body>
          <Container.Footer>
            <Pagination
              pageCount={10}
              showMax={3}
              currentPage={currentPage}
              onNavChange={this.handleNavChange}
              onPageClick={this.handlePageChange}
            />
          </Container.Footer>
        </Container.Content>
      </Container>
    )
  }
}

EventsView.defaultProps = {
  events: [],
  perPage: 20
}

EventsView.propTypes = {
  events: PropTypes.array.isRequired,
  perPage: PropTypes.number
}
