import React from 'react';

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import MembersPage from '../pages/MembersPage'
// import MapsPage from '../pages/MapsPage'
import WerewolfDeluxeMapPage from '../pages/maps/WerewolfDeluxeMapPage'
import WerewolfOGPage from '../pages/maps/WerewolfOGPage'
import FriedshrimpPage from '../pages/maps/FriedshrimpPage'
import PlanetaryThievesPage from '../pages/maps/PlanetaryThievesPage'
import WerewolfRemasteredMapPage from '../pages/maps/WerewolfRemasteredMapPage'

const Content = () => {

  return (
    < Switch >
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/home" component={() => <HomePage />} />
      <Route path="/members" component={() => <MembersPage />} />
      {/* <Route path="/maps" component={() => <MapsPage />} /> */}
      <Route path="/werewolf-og" component={() => <WerewolfOGPage />} />
      <Route path="/friedshrimp" component={() => <FriedshrimpPage />} />
      <Route path="/werewolf-dlx" component={() => <WerewolfDeluxeMapPage />} />
      <Route path="/planetary-thieves" component={() => <PlanetaryThievesPage />} />
      <Route path="/werewolf-remastered" component={() => <WerewolfRemasteredMapPage />} />
    </Switch >

  )
}

export default Content;