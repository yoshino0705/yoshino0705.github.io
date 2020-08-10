import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppComponent from './components/AppComponent'

import { HashRouter as Router } from 'react-router-dom'

//import { createBrowserHistory } from "history";
import GA from './utils/GoogleAnalytics'

//const history = createBrowserHistory();

class App extends Component {

  render() {
    const PROD = process.env.NODE_ENV !== 'development'
    if (PROD) GA.init()

    return (
      <Router
        basename="/"
      >
        {PROD && <GA.RouteTracker />}
        <AppComponent />
      </Router>
    )
  }
}

export default connect()(App)
