import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as d3 from 'd3'

const Container = styled.div`
  position: relative;
  overflow: visible;
`

Container.Chart = styled.svg`
  border: 1px solid red
`

Container.Legend = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0;

  font-size: 0.6rem;

  display: flex;
  flex-flow: column wrap;
  width: auto;
`

Container.Legend_item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.gray_light};
  }
`

const ColorBlock = styled.div`
  height: 5px;
  width: 5px;

  margin-left: 0.75rem;

  background-color: ${props => props.color};
`

export default class LineGraph extends React.PureComponent {
  static defaultProps = {
    legend: []
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    legend: PropTypes.arrayOf(PropTypes.shape({key: PropTypes.string, color: PropTypes.string}))
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
  /**
   * Parses out the data into a useable array for d3
   * @param {Array} data: data being plotted
   */
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

  /**
   * Set the container ref
   */
  createContainerRef = el => {
    this.container = el
  }

  /**
   * Render the chart legend
   */
  renderLegend () {
    const {legend} = this.props

    return (
      <Container.Legend>
        {legend.map(item => (
          <Container.Legend_item>
            <span>{item.key}</span>
            <ColorBlock color={item.color} />
          </Container.Legend_item>
        ))}
      </Container.Legend>
    )
  }

  /**
   * renderChart
   * 
   * Renders the chart itself
   */
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

    // Set the chart's width and height
    const svg = d3.select(this.chart)
      .attr('width', svgWidth)
      .attr('height', svgHeight)

    // Append the graph
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // Set the x and y scale types and ranges
    const x = d3.scaleTime().rangeRound([0, width])
    const y = d3.scaleLinear().rangeRound([height, 0])

    // Apply the xAxis and yAxis properties
    const xAxis = d3
      .axisBottom()
      .scale(x)
      .ticks(4)
      .tickFormat(d3.timeFormat('%b/%d/%Y'))
    const yAxis = d3
      .axisLeft()
      .scale(y)

    // find the min and max of all of the lines
    const findBounds = (bound, key) => d3[bound](data.map(array => d3[bound](d3.extent(array, d => d[key]))))

    const xMax = findBounds('max', 'date')
    const xMin = findBounds('min', 'date')
    const yMax = findBounds('max', 'value')
    const yMin = findBounds('min', 'value')
    // x.domain(d3.extent(data[0], d => d.date))
    // y.domain(d3.extent(data[2], d => d.value))
    x.domain([xMin, xMax])
    y.domain([yMin, yMax])

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
        .attr('stroke-width', 2.5)
        .attr('d', line)
    }
  }

  render () {
    return (
      <Container ref={this.createContainerRef}>
        {this.props.title && <h2>{this.props.title}</h2>}
        {this.props.legend.length > 0 && this.renderLegend()}
        <svg ref={this.createChartRef} />
      </Container>
    )
  }
}
