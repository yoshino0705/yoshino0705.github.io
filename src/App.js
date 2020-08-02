import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

import GA from './utils/GoogleAnalytics'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Helmet>
          <meta name="google-site-verification" content="lxJ1q0JkfRn2i_1vXkwQlVQTArUQ-B8ACaxLnvyQt34" />
        </Helmet>
        {GA.init() && <GA.RouteTracker />}
        <Switch>
          <Route path='/auth' component={<div />} />
          <Route path='/error' component={<div />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
