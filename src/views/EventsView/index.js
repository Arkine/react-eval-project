import React from 'react'
import PropTypes from 'prop-types'

import Event from 'components/Event'

import {Container} from './styled'

export default class EventsView extends React.PureComponent {
  renderChildren () {
	const {events} = this.props;
	console.log('event props', this.props)
    // return events.map(repo => {
    //   return (
    //     <Event></Event>
    //   )
    // })
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
	events: [],
}

EventsView.propTypes = {
  events: PropTypes.array.isRequired
}
