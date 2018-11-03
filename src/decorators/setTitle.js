import React from 'react'

/**
 * Sets the document's title
 * @param {String} title
 */
const setTitle = title => WrappedComponent => (
  class extends React.Component {
    componentDidMount () {
      document.title = title
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
)

export default setTitle
