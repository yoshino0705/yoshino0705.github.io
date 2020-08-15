import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { TITLES } from './constants'

import friedshrimp from './assets/friedshrimp.png'
import ExpandableButton from './Buttons/ExpandableButton'

import map from 'lodash/map'
import toLower from 'lodash/toLower'
import includes from 'lodash/includes'
import get from 'lodash/get'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column'
    },
  },
  icon: {
    height: 20,
    objectFit: 'contain'
  },
  text: {
    color: '#fff',
    margin: theme.spacing(0, 1)
  },
  selected: {
    color: '#FFDF00',
    fontWeight: 900
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    width: '100%'
  },
  option: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const Navigations = (props) => {
  const {
    className,
    ...rest
  } = props

  const { pathname } = useLocation()

  const classes = useStyles()
  const language = useSelector(state => state.language)
  const options = map(TITLES[language.locale], (val, key) => {
    return { label: val, path: key }
  })

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      {...rest}
    >
      <Grid
        className={classes.option}
        item
      >
        <Link
          className={classes.link}
          to="/home"
        >
          <IconButton
            className={classes.button}
          >
            <img
              alt="logo"
              className={classes.icon}
              src={friedshrimp}
            />
            <Typography
              className={classNames(
                classes.text,
                { [classes.selected]: includes(toLower(pathname), 'home') })}
            >
              {get(TITLES[language.locale], 'home')}
            </Typography>

          </IconButton>
        </Link>
      </Grid>

      <Grid
        className={classes.option}
        item
      >
        <Link
          className={classes.link}
          to="/maps"
        >
          <ExpandableButton
            label={get(TITLES[language.locale], 'maps')}
            options={options}
          />
        </Link>
      </Grid>

    </Grid>
  )
}

Navigations.defaultProps = {

}

Navigations.propTypes = {
  className: PropTypes.string,
}

export default Navigations