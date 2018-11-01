import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div``

export default class LineGraph extends React.PureComponent {
  renderChart () {
    const {data} = this.props
  }
  render () {
    return (
      <Container>
        {this.renderChart()}
      </Container>
    )
  }
}