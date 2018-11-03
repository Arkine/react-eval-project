import React from 'react'
import PropTypes from 'prop-types'

import {TabsContainer} from './styled'

/**
 * Renders content using a tab interface
 */
export default class Tabs extends React.Component {
  static defaultProps = {
    defaultActiveTabIndex: 0,
    alignTabs: 'left'
  }

  static propTypes = {
    defaultActiveTabIndex: PropTypes.number,
    alignTabs: PropTypes.string,
    children: PropTypes.element.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    }
  }

  handleTabClick = tabIndex => {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
    })
  }

  renderChildrenWithProps () {
    return React.Children.map(this.props.children, (child, index) => (
      React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      })
    ))
  }

  renderActiveTabContent () {
    const {children} = this.props
    const {activeTabIndex} = this.state

    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children
    }
  }

  render () {
    return (
      <TabsContainer>
        <TabsContainer.Nav alignTabs={this.props.alignTabs}>
          {this.renderChildrenWithProps()}
        </TabsContainer.Nav>

        <TabsContainer.Content>
          {this.renderActiveTabContent()}
        </TabsContainer.Content>
      </TabsContainer>
    )
  }
}
