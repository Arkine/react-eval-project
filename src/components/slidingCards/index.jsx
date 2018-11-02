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
  static defaultProps = {
    duration: 0.5,
    stagger: 0.1,
    options: {autoAlpha: 1, y: -20},
    items: [],
    propKey: 'data'
  }

  static propTypes = {
    duration: PropTypes.number,
    stagger: PropTypes.number,
    options: PropTypes.object,
    items: PropTypes.array.isRequired,
    contentComponent: PropTypes.func.isRequired,
    propKey: PropTypes.string.isRequired
  }

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
    const {items, contentComponent: Component, propKey} = this.props

    return items.map((item, i) => (<Card key={`Card-${i}`} ref={this.createRef}><Component {...{[propKey]: item}} /></Card>))
  }

  render () {
    this.tl.play()

    return (
      <CardsContainer>
        {this.renderChildren()}
        <DummyCard />
      </CardsContainer>
    )
  }
}
