import React from 'react';

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import MembersPage from '../pages/MembersPage'
import MapsPage from '../pages/MapsPage'

const Content = () => {

  return (
    < Switch >
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/home" component={() => <HomePage />} />
      <Route path="/members" component={() => <MembersPage />} />
      <Route exact path="/maps" component={() => <MapsPage />} />
      <Route path="/maps/werewolf-dlx" component={() => <HomePage />} />
    </Switch >

  )
}

export default Content;