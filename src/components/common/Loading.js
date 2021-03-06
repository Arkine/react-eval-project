import React from 'react'
import styled, {keyframes} from 'styled-components'
import PropTypes from 'prop-types'
import {TimelineMax} from 'gsap'

const fadeOut = keyframes`
  from {opacity: 1}
  to {opacity: 0}
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;

  height: 100%;
  width: 100%;

  color: #fff;
  font-weight: 700;
  background-color: ${props => props.theme.colors.gray};

  visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
  animation: ${props => props.isLoading ? null : fadeOut} 0.5s linear;

  transition: visibility 0.5s linear;
`

Container.Text = styled.div`
  display: flex;
  justify-content: center;

`

const Dot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 0.5rem;
  background-color: ${props => props.theme.colors.blue_dark};
`

Dot.Text = styled.span`
  transform: scale(0);
  font-size: 1.25rem;
`
/**
 * Loading animation screen
 */
export default class Loading extends React.Component {
  static defaultProps = {
    isLoading: false,
    duration: 0.6,
    stagger: 0.08,
    textDelay: '-=1'
  }

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    stagger: PropTypes.number,
    textDelay: PropTypes.string
  }

  constructor (props) {
    super(props)

    this.overlay = React.createRef()
    this.tl = new TimelineMax({ repeat: -1 })
    this.dots = []
    this.letters = []
  }

  componentDidMount () {
    const {duration, stagger, textDelay} = this.props

    this.tl
      .staggerTo(this.dots, duration, {y: -70, width: 70, height: 70, borderRadius: 10, rotation: 0}, stagger)
      .staggerTo(this.letters, duration, {opacity: 1, scale: 1}, stagger, textDelay)
      .staggerTo(this.dots, duration, {y: 0, width: 50, height: 50, borderRadius: 25, rotation: -180}, stagger, '-=0.2')
      .staggerTo(this.letters, duration, {opacity: 0, scale: 0}, stagger, textDelay)
  }

  addDotRef = el => {
    this.dots.push(el)
  }
  addLetterRef = el => {
    this.letters.push(el)
  }

  createOverlayRef = el => {
    this.overlay = el
  }

  renderText () {
    const text = 'LOADING'

    const textArray = [...text]

    return textArray.map((letter, i) => <Dot ref={this.addDotRef} key={`dot-${i}`}><Dot.Text ref={this.addLetterRef}>{letter}</Dot.Text></Dot>)
  }

  render () {
    return (
      <Container isLoading={this.props.isLoading} ref={this.createOverlayRef} >
        <Container.Text>
          {this.renderText()}
        </Container.Text>
      </Container>
    )
  }
}
