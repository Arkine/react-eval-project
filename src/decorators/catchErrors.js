import React from 'react'

import ErrorBoundary from '../components/common/ErrorBoundary'
/**
 * Catches errors with error boundary and lets you set custom text
 * @param {String} errorText 
 */
const catchErrors = (errorText = null) => WrappedComponent => (
  class extends React.Component {
    render () {
      return (
        <ErrorBoundary text={errorText}>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      )
    }
  }
)

export default catchErrors
