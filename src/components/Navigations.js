import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { TITLES } from './constants'

import friedshrimp from './assets/friedshrimp.png'

import map from 'lodash/map'
import toLower from 'lodash/toLower'
import includes from 'lodash/includes'

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
      {
        map(options, (o, i) =>
          <Grid
            item
            key={i}
          >
            <Link
              className={classes.link}
              to={`/${o.path}`}
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
                    { [classes.selected]: includes(toLower(pathname), o.path) })}
                >
                  {o.label}
                </Typography>

              </IconButton>
            </Link>
          </Grid>)
      }
    </Grid>
  )
}

Navigations.defaultProps = {

}

Navigations.propTypes = {
  className: PropTypes.string,
}

export default Navigations