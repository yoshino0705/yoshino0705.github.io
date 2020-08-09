import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import town0 from './assets/maps/werewolf_dlx/town/town0.png'
import Grid from '@material-ui/core/Grid'
import MapNavItem from './MapNavItem'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh'
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '100vh'
    },
  },

}));


const MapNav = () => {

  const classes = useStyles()

  return (
    <Grid container>
      <Grid item>
        <MapNavItem
          title="狼人殺"
          image={town0}
        />
      </Grid>
    </Grid>
  )
}

export default MapNav