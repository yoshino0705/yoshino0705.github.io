import React from 'react';

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import MapsPage from '../pages/MapsPage'

const Content = () => {

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