import React from 'react'
import {Transition} from 'react-transition-group'
import {TweenMax} from 'gsap'
/**
 * TODO: Test this
 */
export default class RevealingView extends React.PureComponent {
  render () {
    return (
      <Transition
        unmountOnExit
        in={this.props.show}
        timeout={1000}
        onEnter={node => TweenMax.set(node, { autoAlpha: 0, y: -50 })}
        addEndListener={(node, done) => {
          TweenMax.to(node, 0.5, {
            autoAlpha: this.props.show ? 1 : 0,
            y: this.props.show ? 0 : 50,
            onComplete: done
          })
        }}
      >
          {this.props.children}
      </Transition>
      
    )
  }
}