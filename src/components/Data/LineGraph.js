import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as d3 from 'd3'

const Container = styled.div`
  overflow: visible;
`

Container.Chart = styled.svg`
  border: 1px solid red
`

export default class LineGraph extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  constructor (props) {
    super(props)

    this.chart = React.createRef()
  }

  componentDidMount () {
    this.renderChart()
  }

  createChartRef = el => {
    this.chart = el
  }

  getData () {
    return this.parseData(this.props.data)
  }

  parseData (data) {
    // Lets us map out the lines. Dirty I know :(
    const keys = Object.keys(data[0].data)

    const lines = []
    for (const key of keys) {
      const lineData = []
      for (const dateObj of data) {
        lineData.push({
          date: new Date(dateObj.date),
          value: dateObj.data[key]
        })
      }

      lines.push(lineData)
    }

    return lines
  }
  createContainerRef = el => {
    this.container = el
  }
  renderChart () {
    const data = this.getData()

    const margin = {
      top: 40,
      right: 26,
      bottom: 40,
      left: 26
    }
    const svgWidth = this.container.clientWidth
    const svgHeight = 475
    const width = svgWidth - margin.left - margin.right
    const height = svgHeight - margin.top - margin.bottom

    const svg = d3.select(this.chart)
      .attr('width', svgWidth)
      .attr('height', svgHeight)

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const x = d3.scaleTime().range([0, width])
    const y = d3.scaleLinear().rangeRound([height - margin.top / 2, 0])

    const xAxis = d3
      .axisBottom()
      .scale(x)
      .ticks(4)
      .tickFormat(d3.timeFormat('%b/%d/%Y'))
    const yAxis = d3
      .axisLeft()
      .scale(y)

    x.domain(d3.extent(data[0], d => d.date))
    y.domain(d3.extent(data[2], d => d.value))

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(+d.value))

    // Append Xaxis
    g.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)

    // Append Yaxis
    g.append('g')
      .call(yAxis)
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('# of events')

    for (const index in data) {
      const dataSet = data[index]

      g.append('path')
        .datum(dataSet)
        .attr('fill', 'none')
        .attr('stroke', this.props.colors[index])
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 2)
        .attr('d', line)
    }
  }
  render () {
    return (
      <Container ref={this.createContainerRef}>
        {this.props.title && <h2>{this.props.title}</h2>}
        <svg ref={this.createChartRef} />
      </Container>
    )
  }
}
