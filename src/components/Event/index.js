import React from 'react'
import PropTypes from 'prop-types'

import {Container} from './styled'

export default class Event extends React.PureComponent {
  static defaultProps = {
    event: {}
  }

  static propTypes = {
    event: PropTypes.object.isRequired
  }

  render () {
    const {event} = this.props

    return (
      <Container>
        <Container.Header>
          <Container.Meta>
            Type: {event.type}
          </Container.Meta>
          <Container.Meta>
            Created: {event.created_at}
          </Container.Meta>
        </Container.Header>
      </Container>
    )
  }
}
