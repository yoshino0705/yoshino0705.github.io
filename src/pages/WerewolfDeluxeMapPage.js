import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

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


const WerewolfDeluxeMapPage = () => {

  const classes = useStyles()

  return (
    <div />
  )
}

export default WerewolfDeluxeMapPage