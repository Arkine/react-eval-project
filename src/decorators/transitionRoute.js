import React from 'react'
import { Transition } from 'react-transition-group'

/**
 * Animates a route in from the top
 * @param {Object} transition properties
 */
const transitionRoute = (transitionProps = () => {}) => WrappedComponent => (
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
          timeout={1000}
          in={this.state.mounted}
          {...transitionProps(this.state)}
        >
          <WrappedComponent {...this.props} />
        </Transition>
      )
    }
  }
)
export default transitionRoute
