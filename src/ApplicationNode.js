import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import theme from 'services/theme'
import history from 'services/history'
import App from './views/App'

import GlobalStyles from './GlobalStyles'

export default class ApplicationNode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = {}

  render () {
    const {store} = this.props

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <Provider store={store}>
            <Router history={history}>
              <Switch>
                <Route exact path='/' component={App} />
              </Switch>
            </Router>
          </Provider>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
