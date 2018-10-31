import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div``

export default class EventsView extends React.PureComponent {
  render () {
    return (
      <Container>
        {this.props.children}
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
