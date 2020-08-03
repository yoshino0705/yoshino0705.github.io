import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar'

import LanguageDropdown from './LanguageDropdown'

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
    flexGrow: 1,
    justifyContent: 'center'
  },
}));

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const {
    locale,
    onChangeLocale
  } = props

  const classes = useStyles()

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="static">
          <div className={classes.darkRedBlock} />
          <div className={classes.redBlock} />
          <Toolbar className={classes.toolbar} >
            <LanguageDropdown
              locale={locale}
              onChangeLocale={onChangeLocale}
            />
          </Toolbar>
          <div className={classes.redBlock} />
          <div className={classes.darkRedBlock} />
        </AppBar>
      </HideOnScroll>
    </React.Fragment>

  )
}

Header.propTypes = {
  locale: PropTypes.string,
  onChangeLocale: PropTypes.func
}

export default Header