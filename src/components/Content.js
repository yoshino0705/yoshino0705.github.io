import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

import GA from '../utils/GoogleAnalytics'

const Content = (props) => {
  const {
    locale
  } = props

  return (
    <Router basename="/">
      {/* {GA.init() && <GA.RouteTracker />} */}
      <Switch>
        <Route exact path="/" component={() => <HomePage locale={locale} />} />
        <Route path="/home" component={() => <HomePage locale={locale} />} />
        <Route path="/about" component={() => <AboutPage locale={locale} />} />
      </Switch>
    </Router>
  )
}

export default Content;