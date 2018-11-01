import React from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'

export default class Counter extends React.PureComponent {
  constructor (props) {
    super(props)

    this.el = React.createRef()
    this.state = {
      content: 0
    }
  }

  componentDidMount () {
    const tl = new TimeLineMax
  }

  update () {
    const {to} = this.props;
  }

  render () {
    return (
      <div ref={el = this.el = el}>{this.state.content}</div>
    )
  }
}

Counter.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  duration: PropTypes.number
}
