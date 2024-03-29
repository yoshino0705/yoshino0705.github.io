import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
//import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

import LanguageDropdown from './LanguageDropdown'
import Navigations from './Navigations'

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
  },
  toolbar: {
    backgroundColor: '#000',
    color: '#fff',
    justifyContent: 'center'
  },
  langSelect: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      right: 'auto'
    },
  },
  nav: {
    display: 'flex'
  }
}));

// const HideOnScroll = (props) => {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const Header = (props) => {

  const classes = useStyles()

  return (
    <React.Fragment>

      <AppBar position="static">
        <div className={classes.darkRedBlock} />
        <div className={classes.redBlock} />
        <Toolbar className={classes.toolbar} >
          <Grid
            container
            justify="center"
          >
            <Grid
              className={classes.nav}
              item
              md={12}
              sm={6}
            >
              <Navigations />
            </Grid>
            <Grid
              className={classes.langSelect}
              item
              md={2}
              sm={6}
            >
              <LanguageDropdown />
            </Grid>
          </Grid>
        </Toolbar>
        <div className={classes.redBlock} />
        <div className={classes.darkRedBlock} />
      </AppBar>

    </React.Fragment>

  )
}

Header.propTypes = {
  locale: PropTypes.string,
  onChangeLocale: PropTypes.func
}

export default Header