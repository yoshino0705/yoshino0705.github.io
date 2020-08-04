import React from 'react';

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import MapsPage from '../pages/MapsPage'

import GA from '../utils/GoogleAnalytics'

const Content = () => {
  /* {GA.init() && <GA.RouteTracker />} */
  return (
    < Switch >
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/home" component={() => <HomePage />} />
      <Route path="/members" component={() => <AboutPage />} />
      <Route path="/maps" component={() => <MapsPage />} />
    </Switch >

  )
}

export default Content;