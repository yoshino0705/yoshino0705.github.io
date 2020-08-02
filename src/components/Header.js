import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  darkRedBlock: {
    backgroundColor: '#8b0000',
    height: theme.spacing(1),
    width: '100%'
  },
  redBlock: {
    backgroundColor: '#cd5c5c',
    height: theme.spacing(1),
    width: '100%'
  }
}));

const Header = (props) => {
  const {
    locale
  } = props
  console.log(locale)
  const classes = useStyles()

  return (
    <AppBar position="static">
      <div className={classes.darkRedBlock} />
      <div className={classes.redBlock} />
      <Toolbar>

      </Toolbar>
      <div className={classes.redBlock} />
      <div className={classes.darkRedBlock} />
    </AppBar>
  )
}

export default Header