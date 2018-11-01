import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div``

let timeout

export default class SearchBox extends React.PureComponent {
  handleInputChange = e => {
    e.preventDefault()

    // Clear the original timeout so that we aren't spamming the function
    clearTimeout(timeout)
    timeout = setTimeout(this.props.onInputChange(e), 500)
  }
  render () {
    return (
      <Container>
        {this.props.label &&
          <label>{this.props.label}</label>
        }
        <input {...this.props} type='text' placeholder={this.props.placeholderText} onChange={this.handleInputChange} />
      </Container>
    )
  }
}

SearchBox.defaultProps = {
  placeholderText: 'Search...',
  onInputChange: () => {}
}

SearchBox.propTypes = {
  label: PropTypes.string,
  placeholderText: PropTypes.string,
  onInputChange: PropTypes.func.isRequired
}
