import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div``

export default class SearchBox extends React.PureComponent {
  handleInputChange () {
    this.props.onInputChange()
  }
  render () {
    return (
      <Container>
        {this.props.label &&
          <label>{this.props.label}</label>
        }
        <input {...this.props} type='text' defaultValue={this.props.placeholderText} onChange={this.handleInputChange} />
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