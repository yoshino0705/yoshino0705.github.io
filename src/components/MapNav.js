import React from 'react'
import { useSelector } from 'react-redux';

import werewolfOGImage from './assets/maps/werewolf_og/vacation/vacation1.jfif'
import friedshrimpImage from './assets/maps/friedshrimp/venezia/venezia0.jfif'
import werewolfDLXImage from './assets/maps/werewolf_dlx/town/town0.png'

import Grid from '@material-ui/core/Grid'
import MapNavItem from './MapNavItem'

import get from 'lodash/get'
import map from 'lodash/map'
import { MAP_NAMES } from './constants'

const MapNav = () => {

  const language = useSelector(state => state.language)
  const maps = [
    {
      image: werewolfOGImage,
      title: get(MAP_NAMES[language.locale], 'werewolf_og'),
      to: '/werewolf-og'
    },
    {
      image: friedshrimpImage,
      title: get(MAP_NAMES[language.locale], 'friedshrimp'),
      to: '/friedshrimp'
    },
    {
      image: werewolfDLXImage,
      title: get(MAP_NAMES[language.locale], 'werewolf_dlx'),
      to: '/werewolf-dlx'
    }
  ]

  return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={3}
    >
      {
        map(maps, (m, i) => (
          <Grid
            key={i}
            item
          >
            <MapNavItem
              image={m.image}
              title={m.title}
              to={m.to}
            />
          </Grid>
        ))
      }

    </Grid>
  )
}

export default MapNav