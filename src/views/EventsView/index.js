import React from 'react'
import PropTypes from 'prop-types'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'
import catchErrors from '../../decorators/catchErrors'

import LineGraph from '../../components/Data/LineGraph'
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs/Tab'
import { Table } from '../../components/common/Table'

import {fadeFromTop} from '../../services/animations/transition'

import {Container, colorArr, ColorBlock} from './styled'

@setTitle('John-David Dalton | Events')
@transitionRoute(fadeFromTop)
@catchErrors('Failed to load events...')
export default class EventsView extends React.PureComponent {
  static defaultProps = {
    events: []
  }

  static propTypes = {
    events: PropTypes.array.isRequired
  }

  getEvents () {
    let {events} = this.props

    return events
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

  getUniqueDates () {
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
   */
  getEventsByDate () {
    let events = this.getEvents()
    // Get the keys
    const uniqueKeys = this.getEventTypes()
    // Get the dates
    const uniqueDates = this.getUniqueDates()
    const outData = []

    // Group the dates with the events of type key
    for (const date of uniqueDates) {
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

  renderLegend () {
    const keys = this.getEventTypes()

    return (
      <Table width={'300px'}>
        <Table.Head>
          <Table.Row>
            <Table.Data>Color</Table.Data>
            <Table.Data>Event Type</Table.Data>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {keys.map((eventType, i) => (
            <Table.Row>
              <Table.Data>
                <ColorBlock color={colorArr[i]} />
              </Table.Data>
              <Table.Data>
                {eventType.split(/(?=[A-Z])/).join(' ')}
              </Table.Data>
            </Table.Row>
          )
          )}
        </Table.Body>
      </Table>
    )
  }

  renderEventsTable () {
    const events = this.getEvents()
    const keys = this.getEventTypes()

    return (
      <Table width={'550px'}>
        <Table.Head>
          <Table.Row>
            <Table.Data>Color</Table.Data>
            <Table.Data>Event Type</Table.Data>
            <Table.Data>Total Events</Table.Data>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {keys.map((eventType, i) => {
            const count = events.reduce((acc, next) => acc + (next.type === eventType), 0)

            return (
              <Table.Row>
                <Table.Data>
                  <ColorBlock color={colorArr[i]} />
                </Table.Data>
                <Table.Data>
                  {eventType.split(/(?=[A-Z])/).join(' ')}
                </Table.Data>
                <Table.Data>
                  {count}
                </Table.Data>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    )
  }

  renderEventsGraph () {
    const events = this.getEventsByDate()

    return <LineGraph data={events} title={'Recent Events'} colors={colorArr} />
  }

  render () {
    return (
      <Container>
        <Container.Content>
          <Container.Body>
            <Tabs>
              <Tab text={'Graph View'}>
                {this.renderEventsGraph()}
                <Container.Color_legend>
                  {this.renderLegend()}
                </Container.Color_legend>
              </Tab>

              <Tab text={'Table View'}>
                <h2>Recent Event Activity</h2>
                {this.renderEventsTable()}
              </Tab>
            </Tabs>
          </Container.Body>
        </Container.Content>
      </Container>
    )
  }
}
