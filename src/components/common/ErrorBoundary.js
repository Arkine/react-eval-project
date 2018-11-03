import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`

const Error = styled.div``
Error.Message = styled.h3``
Error.Info = styled.div``

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: false,
      errorInfo: null
    }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  renderError () {
    const {errorInfo} = this.state

    let errorText = 'Oops! an error occured!'
    if (this.props.text) {
      errorText = this.props.text
    }

    return (
      <Container>
        <Error>
          <Error.Message>{errorText}</Error.Message>
          <Error.Info>
            <p>{errorInfo}</p>
          </Error.Info>
        </Error>
      </Container>
    )
  }

  render () {
    return (
      <React.Fragment>
        {this.state.error && this.renderError()}
        {!this.state.error && this.props.children}
      </React.Fragment>
    )
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string
}
