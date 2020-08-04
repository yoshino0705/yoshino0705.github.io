import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import Content from './components/Content'

import { HashRouter as Router } from 'react-router-dom'

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router
        basename="/"
        history={history}
      >
        <Header />
        <Content />
      </Router>
    )
  }
}

export default connect()(App)
