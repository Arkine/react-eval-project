import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListContainer = styled.ul`
  align-self: flex-start;
`
const ListItem = styled.li`
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.yellow_sun};
  }
`
ListItem.Label = styled.label`
  font-weight: bold;
`
ListItem.Text = styled.span`

`

export default class UnorderedList extends React.PureComponent {
  static defaultProps = {
    items: {}
  }

  static propTypes = {
    items: PropTypes.object.isRequired
  }

  renderChildItems () {
    const {items} = this.props

    return Object.keys(items).map((key, i) => {
      const val = items[key]
      console.log({
        items,
        key
      })
      return (
        <ListItem key={`unordered-list-${i}`}>
          <ListItem.Label>{key}</ListItem.Label>
          <ListItem.Text>{val}</ListItem.Text>
        </ListItem>
      )
    })
  }

  render () {
    return (
      <ListContainer>
        {this.renderChildItems()}
      </ListContainer>
    )
  }
}
