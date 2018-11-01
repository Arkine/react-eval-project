import React from 'react'
import PropTypes from 'prop-types'
import { TimelineLite } from 'gsap'
import { CardsContainer, Card, DummyCard } from './styled'
import {connect} from 'react-redux'

/**
 * SlidingCards animated component
 *
 * Displays data in animated sliding cards
 */
const mapStateToProps = state => ({
  app: state.app
})
@connect(mapStateToProps, null)
export default class SlidingCards extends React.PureComponent {
  constructor (props) {
    super(props)

    this.tl = new TimelineLite({ paused: true })
    this.cards = []
  }

  componentDidMount () {
    this.tl.staggerTo(this.cards, this.props.duration, this.props.options, this.props.stagger)
  }

  createRef = el => {
    this.cards.push(el)
  }

  renderChildren () {
    const {items} = this.props
    if (!items.length) {
      return <span>No Repos</span>
    }

    return this.props.items.map((item, i) => (<Card key={`Card-${i}`} ref={this.createRef}>{item.name}</Card>))
  }

  render () {

    this.tl.play()

    return (
      <CardsContainer>
        {this.props.items.map((item, i) => (<Card key={`Card-${i}`} ref={this.createRef}>{item.name}</Card>))}
        <DummyCard />
      </CardsContainer>
    )
  }
}

SlidingCards.defaultProps = {
  duration: 0.5,
  stagger: 0.1,
  options: {autoAlpha: 1, y: -20},
  items: []
}

SlidingCards.propTypes = {
  duration: PropTypes.number,
  stagger: PropTypes.number,
  options: PropTypes.object,
  items: PropTypes.array.isRequired
}
