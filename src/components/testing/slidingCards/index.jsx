import React from 'react'
import PropTypes from 'prop-types'
import { TimelineLite } from 'gsap'
import { CardsContainer, Card } from './styled'
/**
 * SlidingCards animated component
 * 
 * Displays data in animated sliding cards
 */
export default class SlidingCards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      complete: false
    }

    this.tl = new TimelineLite({ paused: true })
    this.cards = []
  }

  componentDidMount() {
    // this.tl.staggerTo(this.cards, this.props.duration, this.props.options, this.props.stagger)
    this.tl.staggerTo( this.cards , 0.5, { autoAlpha: 1, y: -20 }, 0.1)
  }

  createRef = (el) => {
    this.cards.push(el)
  }

  renderChildren() {
    const {items} = this.props
    if (!items.length) {
      return <span>No Repos</span>
    }

    return this.props.items.map((item, i) => <Card key={`Card-${i}`} ref={this.createRef}>{item.name}</Card>)
  }

  render () {
    // this.tl.kill().clear().pause(0)

    return (
      <CardsContainer>
        {this.renderChildren()}
      </CardsContainer>
    )
  }

}

SlidingCards.defaultProps = {
  duration: 5.5,
  stagger: 0.1,
  options: {},
  items: []
}

SlidingCards.propTypes = {
  duration: PropTypes.number,
  stagger: PropTypes.number,
  options: PropTypes.object,
  items: PropTypes.array.isRequired
}
