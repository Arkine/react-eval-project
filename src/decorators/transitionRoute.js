import React from 'react'
import { Transition } from 'react-transition-group'
import {TweenMax} from 'gsap'
/**
 * Sets the document's title
 * @param {String} title
 */
const transitionRoute = (transitionProps = {}) => WrappedComponent => (
  class extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        mounted: false
      }
    }
    componentDidMount () {
      this.setState({
        mounted: true
      })
    }

    render () {
      return (
        <Transition
          unmountOnExit
          in={this.state.mounted}
          timeout={1000}
          onEnter={node => TweenMax.set(node, { autoAlpha: 0, y: -50 })}
          addEndListener={(node, done) => {
            TweenMax.to(node, 0.5, {
              autoAlpha: this.state.mounted ? 1 : 0,
              y: this.state.mounted ? 0 : 50,
              onComplete: done
            })
          }}
          {...transitionProps}
        >
          <WrappedComponent {...this.props} />
        </Transition>
    )
    }
  }
)

export default transitionRoute
