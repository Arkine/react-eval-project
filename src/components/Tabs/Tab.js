import React from 'react'
import PropTypes from 'prop-types'

import {TabContainer} from './styled'

export default class Tab extends React.PureComponent {
  static defaultProps = {
    onClick: () => {},
    tabIndex: 0,
    text: ''
  }

  static propTypes = {
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    text: PropTypes.string,
    to: PropTypes.string.isRequired,
    isActive: PropTypes.bool
  }

  render () {
    return (
      <TabContainer isActive={this.props.isActive}>
        <TabContainer.Link
          to={this.props.to}
          onClick={event => {
            event.preventDefault()
            this.props.onClick(this.props.tabIndex)
          }}
        >
          {this.props.text}
        </TabContainer.Link>
      </TabContainer>
    )
  }
}
