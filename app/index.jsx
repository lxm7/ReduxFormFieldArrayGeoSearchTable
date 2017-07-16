import React from 'react'
import { Provider, connect } from 'react-redux'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import OfficeLocations from 'containers/OfficeLocations'
import store from './store'

render(
    <MuiThemeProvider>
        <Provider store = {store}>
          <OfficeLocations />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'),
)
