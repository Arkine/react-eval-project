import React from 'react'
import PropTypes from 'prop-types'

import {TabContainer} from './styled'

export default class Tab extends React.PureComponent {
  render () {
    return (
      <TabContainer>
        <TabContainer.Link
          isActive={this.props.isActive}
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

Tab.defaultProps = {
  onClick: () => {},
  tabIndex: 0,
  text: ''
}

Tab.propTypes = {
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  isActive: PropTypes.bool
}
