import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div``
Container.Label = styled.label`
  display: inline-block;
  margin-right: 0.5rem;
`

export default class SelectOption extends React.PureComponent {
  static defaultProps = {
    allowNone: true,
    onSelect: () => {}
  }

  static propTypes = {
    allowNone: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    label: PropTypes.string,
    options: PropTypes.shape({
      type: PropTypes.string,
      label: PropTypes.string
    }).isRequired
  }

  renderOptions () {
    const {options, allowNone} = this.props
    const newOptions = [...options]

    if (allowNone) {
      newOptions.unshift({
        type: 'all',
        label: 'All'
      })
    }

    return newOptions.map(opt => <option value={opt.type}>{opt.label}</option>)
  }

  handleSelect = (e) => {
    e.preventDefault()

    this.props.onSelect(e)
  }

  render () {
    return (
      <Container>
        {this.props.label &&
          <Container.Label>{this.props.label}</Container.Label>
        }
        <select {...this.props} onChange={this.handleSelect}>
          {this.renderOptions()}
        </select>
      </Container>
    )
  }
}
